import { getRepo, getStarHistory } from '@/lib/github';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const repo = searchParams.get('repo');

    if (!repo) {
      return new Response('Missing repo parameter', { status: 400 });
    }

    const [owner, repoName] = repo.split('/');
    if (!owner || !repoName) {
      return new Response('Invalid repo format', { status: 400 });
    }

    const [repoData, history] = await Promise.all([
      getRepo(owner, repoName),
      getStarHistory(owner, repoName),
    ]);

    const maxStars = Math.max(...history.map((h) => h.stars));
    const chartWidth = 1000;
    const chartHeight = 400;
    const padding = { top: 60, right: 60, bottom: 80, left: 100 };

    const points = history.map((h, i) => {
      const x = padding.left + (i / (history.length - 1)) * chartWidth;
      const y = padding.top + chartHeight - (h.stars / maxStars) * chartHeight;
      return { x, y, stars: h.stars, date: h.date };
    });

    const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    const areaPath = `${pathData} L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`;

    const gradientId = `gradient-${Date.now()}`;
    const areaGradientId = `areaGradient-${Date.now()}`;
    const lineGradientId = `lineGradient-${Date.now()}`;

    const svg = `
      <svg width="1280" height="640" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="${areaGradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:0.05" />
          </linearGradient>
          <linearGradient id="${lineGradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          </linearGradient>
        </defs>

        <!-- Background -->
        <rect width="1280" height="640" fill="url(#${gradientId})"/>

        <!-- Container -->
        <rect x="40" y="40" width="1200" height="560" rx="24" fill="rgba(255,255,255,0.98)"
              filter="drop-shadow(0 20px 60px rgba(0,0,0,0.3))"/>

        <!-- Header -->
        <text x="80" y="105" font-size="32" font-weight="800" fill="#1a1a1a" font-family="system-ui, sans-serif">${escapeXml(repoData.name)}</text>
        <text x="80" y="135" font-size="18" fill="#6b7280" font-family="system-ui, sans-serif">Star History</text>

        <!-- Star Badge -->
        <rect x="1050" y="80" width="150" height="48" rx="12" fill="url(#${gradientId})"/>
        <text x="1075" y="111" font-size="24" font-weight="700" fill="white" font-family="system-ui, sans-serif">⭐ ${repoData.stargazers_count}</text>

        <!-- Chart -->
        <g transform="translate(40, 150)">
          <!-- Grid lines -->
          ${[0, 0.25, 0.5, 0.75, 1]
            .map((percent) => {
              const y = padding.top + chartHeight - chartHeight * percent;
              return `
              <line x1="${padding.left}" y1="${y}" x2="${padding.left + chartWidth}" y2="${y}" stroke="#e5e7eb" stroke-width="1"/>
              <text x="${padding.left - 15}" y="${y + 5}" font-size="14" fill="#9ca3af" text-anchor="end" font-family="system-ui, sans-serif">${Math.round(maxStars * percent)}</text>
            `;
            })
            .join('')}

          <!-- Area fill -->
          <path d="${areaPath}" fill="url(#${areaGradientId})"/>

          <!-- Line -->
          <path d="${pathData}" fill="none" stroke="url(#${lineGradientId})" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

          <!-- Points -->
          ${points
            .map(
              (point) => `
            <circle cx="${point.x}" cy="${point.y}" r="4" fill="#667eea" stroke="white" stroke-width="2"/>
          `
            )
            .join('')}

          <!-- X-axis labels -->
          ${points
            .filter((_, i) => i % Math.ceil(points.length / 6) === 0)
            .map((point) => {
              const date = new Date(point.date);
              const label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              return `<text x="${point.x}" y="${padding.top + chartHeight + 25}" font-size="14" fill="#9ca3af" text-anchor="middle" font-family="system-ui, sans-serif">${label}</text>`;
            })
            .join('')}
        </g>
      </svg>
    `;

    return new Response(svg.trim(), {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Star history error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(`Error: ${message}`, { status: 500 });
  }
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
