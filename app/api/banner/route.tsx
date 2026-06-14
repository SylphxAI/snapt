import { getRepo } from '@/lib/github';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const title = searchParams.get('title');
    const tagline = searchParams.get('tagline');
    const featuresParam = searchParams.get('features');
    const gradient = searchParams.get('gradient')?.split(',') || ['667eea', '764ba2'];
    const icon = searchParams.get('icon') || '✨';
    const repo = searchParams.get('repo');
    const showStats = searchParams.get('showStats') !== 'false';

    if (!title || !tagline || !featuresParam) {
      return new Response('Missing required parameters', { status: 400 });
    }

    const features = featuresParam
      .split(',')
      .map((f) => f.trim())
      .slice(0, 4);

    // Fetch GitHub stats if repo provided
    let repoData = null;
    if (repo && showStats) {
      try {
        const [owner, repoName] = repo.split('/');
        if (owner && repoName) {
          repoData = await getRepo(owner, repoName);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
      }
    }

    const gradientId = `gradient-${Date.now()}`;

    const svg = `
      <svg width="1280" height="640" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#${gradient[0]};stop-opacity:1" />
            <stop offset="100%" style="stop-color:#${gradient[1]};stop-opacity:1" />
          </linearGradient>
        </defs>

        <!-- Background -->
        <rect width="1280" height="640" fill="url(#${gradientId})"/>

        <!-- Container -->
        <rect x="40" y="40" width="1200" height="560" rx="28" fill="rgba(255,255,255,0.95)"
              stroke="rgba(255,255,255,0.4)" stroke-width="1"
              filter="drop-shadow(0 30px 90px rgba(0,0,0,0.25))"/>

        <!-- Icon -->
        <rect x="104" y="104" width="88" height="88" rx="22" fill="url(#${gradientId})"
              filter="drop-shadow(0 10px 40px rgba(0,0,0,0.2))"/>
        <text x="148" y="168" font-size="44" text-anchor="middle">${icon}</text>

        <!-- Title -->
        <text x="220" y="168" font-size="76" font-weight="800" fill="#667eea" font-family="system-ui, sans-serif">${escapeXml(title)}</text>

        <!-- Tagline -->
        <text x="104" y="250" font-size="38" font-weight="600" fill="#2d3748" font-family="system-ui, sans-serif">${escapeXml(tagline)}</text>

        <!-- Features -->
        ${features
          .map((feature, i) => {
            const x = i % 2 === 0 ? 104 : 660;
            const y = 310 + Math.floor(i / 2) * 70;
            const emojis = ['⚡', '🎯', '📦', '🚀'];

            return `
            <rect x="${x}" y="${y}" width="36" height="36" rx="8" fill="url(#${gradientId})"/>
            <text x="${x + 18}" y="${y + 26}" font-size="18" text-anchor="middle">${emojis[i]}</text>
            <text x="${x + 50}" y="${y + 26}" font-size="24" fill="#4a5568" font-family="system-ui, sans-serif">${escapeXml(feature)}</text>
          `;
          })
          .join('')}

        <!-- Footer -->
        <line x1="104" y1="510" x2="1176" y2="510" stroke="rgba(0,0,0,0.08)" stroke-width="2"/>

        <text x="104" y="550" font-size="20" fill="#718096" font-family="system-ui, sans-serif">
          github.com/${escapeXml(repo || `SylphxAI/${title.toLowerCase()}`)}
        </text>

        ${
          repoData && showStats
            ? `
          <rect x="1020" y="525" width="80" height="40" rx="8" fill="rgba(255,255,255,0.9)"
                stroke="rgba(255,255,255,0.5)" stroke-width="1"/>
          <text x="1030" y="550" font-size="16">⭐</text>
          <text x="1050" y="550" font-size="16" font-weight="600" fill="#2d3748" font-family="system-ui, sans-serif">${repoData.stargazers_count}</text>

          ${
            repoData.language
              ? `
            <rect x="1115" y="525" width="100" height="40" rx="8" fill="rgba(255,255,255,0.9)"
                  stroke="rgba(255,255,255,0.5)" stroke-width="1"/>
            <text x="1125" y="550" font-size="16">📝</text>
            <text x="1145" y="550" font-size="16" font-weight="600" fill="#2d3748" font-family="system-ui, sans-serif">${escapeXml(repoData.language)}</text>
          `
              : ''
          }
        `
            : ''
        }
      </svg>
    `;

    return new Response(svg.trim(), {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Banner generation error:', error);
    return new Response('Error generating banner', { status: 500 });
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
