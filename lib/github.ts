interface GitHubRepo {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  open_issues_count: number;
}

interface StarHistory {
  date: string;
  stars: number;
}

interface Contributor {
  login: string;
  avatar_url: string;
  contributions: number;
}

const GITHUB_API_BASE = 'https://api.github.com';
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCached<T>(key: string): T | null {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data as T;
  }
  return null;
}

function setCache(key: string, data: any): void {
  cache.set(key, { data, timestamp: Date.now() });
}

async function fetchGitHub(path: string): Promise<any> {
  const cacheKey = path;
  const cached = getCached<any>(cacheKey);
  if (cached) return cached;

  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Snapt-Image-Generator',
  };

  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(`${GITHUB_API_BASE}${path}`, { headers });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const data = await response.json();
  setCache(cacheKey, data);
  return data;
}

export async function getRepo(owner: string, repo: string): Promise<GitHubRepo> {
  return fetchGitHub(`/repos/${owner}/${repo}`);
}

export async function getStarHistory(
  owner: string,
  repo: string
): Promise<StarHistory[]> {
  // Fetch stargazers with timestamps
  // GitHub API doesn't provide historical data directly
  // We'll use the stars endpoint with pagination

  const repoData = await getRepo(owner, repo);
  const totalStars = repoData.stargazers_count;

  // For demo purposes, generate estimated data
  // In production, you'd track this over time or use GitHub Archive
  const now = new Date();
  const createdAt = new Date(repoData.created_at);
  const daysSinceCreation = Math.floor(
    (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
  );

  const history: StarHistory[] = [];
  const points = Math.min(30, daysSinceCreation); // Last 30 days or less

  for (let i = points; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    // Estimate stars at this point (linear growth for demo)
    const stars = Math.floor((totalStars * (points - i)) / points);

    history.push({
      date: date.toISOString().split('T')[0],
      stars,
    });
  }

  return history;
}

export async function getContributors(
  owner: string,
  repo: string
): Promise<Contributor[]> {
  return fetchGitHub(`/repos/${owner}/${repo}/contributors?per_page=10`);
}

export async function getLanguages(
  owner: string,
  repo: string
): Promise<Record<string, number>> {
  return fetchGitHub(`/repos/${owner}/${repo}/languages`);
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  }
  return num.toString();
}
