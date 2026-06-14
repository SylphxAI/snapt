import { getLanguages, getRepo } from '@/lib/github';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Vue: '#41b883',
  Svelte: '#ff3e00',
};

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

    const [repoData, languages] = await Promise.all([
      getRepo(owner, repoName),
      getLanguages(owner, repoName),
    ]);

    const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);
    const languageData = Object.entries(languages)
      .map(([name, bytes]) => ({
        name,
        bytes,
        percentage: (bytes / totalBytes) * 100,
        color: LANGUAGE_COLORS[name] || '#8b5cf6',
      }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, 6);

    // Calculate donut chart
    const centerX = 200;
    const centerY = 200;
    const radius = 140;
    const innerRadius = 90;

    let currentAngle = -90;

    const arcs = languageData.map((lang) => {
      const angle = (lang.percentage / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;

      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;

      const x1 = centerX + radius * Math.cos(startRad);
      const y1 = centerY + radius * Math.sin(startRad);
      const x2 = centerX + radius * Math.cos(endRad);
      const y2 = centerY + radius * Math.sin(endRad);

      const x3 = centerX + innerRadius * Math.cos(endRad);
      const y3 = centerY + innerRadius * Math.sin(endRad);
      const x4 = centerX + innerRadius * Math.cos(startRad);
      const y4 = centerY + innerRadius * Math.sin(startRad);

      const largeArc = angle > 180 ? 1 : 0;

      const path = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;

      currentAngle = endAngle;

      return { ...lang, path };
    });

    const gradientId = `gradient-${Date.now()}`;

    const svg = `
      <svg width="1280" height="640" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
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
        <text x="100" y="120" font-size="32" font-weight="800" fill="#1a1a1a" font-family="system-ui, sans-serif">${escapeXml(repoData.name)}</text>
        <text x="100" y="150" font-size="18" fill="#6b7280" font-family="system-ui, sans-serif">Language Distribution</text>

        <!-- Donut Chart -->
        <g transform="translate(100, 240)">
          ${arcs.map((arc) => `<path d="${arc.path}" fill="${arc.color}"/>`).join('')}
          <circle cx="${centerX}" cy="${centerY}" r="${innerRadius}" fill="white"/>
          <text x="${centerX}" y="${centerY - 10}" font-size="36" font-weight="700" fill="#1a1a1a" text-anchor="middle" font-family="system-ui, sans-serif">${languageData.length}</text>
          <text x="${centerX}" y="${centerY + 25}" font-size="18" fill="#6b7280" text-anchor="middle" font-family="system-ui, sans-serif">Languages</text>
        </g>

        <!-- Legend -->
        ${languageData
          .map((lang, i) => {
            const y = 250 + i * 50;
            return `
            <rect x="620" y="${y}" width="600" height="40" rx="10" fill="#f9fafb"/>
            <rect x="634" y="${y + 13}" width="14" height="14" rx="3" fill="${lang.color}"/>
            <text x="660" y="${y + 26}" font-size="20" font-weight="600" fill="#1a1a1a" font-family="system-ui, sans-serif">${escapeXml(lang.name)}</text>
            <text x="1190" y="${y + 26}" font-size="20" font-weight="700" fill="#667eea" text-anchor="end" font-family="system-ui, sans-serif">${lang.percentage.toFixed(1)}%</text>
          `;
          })
          .join('')}
      </svg>
    `;

    return new Response(svg.trim(), {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Language stats error:', error);
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
