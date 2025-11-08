import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { getLanguages, getRepo } from '@/lib/github';

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

    return new ImageResponse(
      (
        <div
          style={{
            width: '1280px',
            height: '640px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              borderRadius: '24px',
              padding: '50px 60px',
              width: '1200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#1a1a1a' }}>
                {repoData.name}
              </div>
              <div style={{ fontSize: '18px', color: '#6b7280' }}>Language Distribution</div>
            </div>

            <div style={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
              <div style={{ display: 'flex' }}>
                <svg width="400" height="400">
                  {arcs.map((arc, i) => (
                    <path key={i} d={arc.path} fill={arc.color} />
                  ))}
                  <circle cx={centerX} cy={centerY} r={innerRadius} fill="white" />
                  <text
                    x={centerX}
                    y={centerY - 10}
                    textAnchor="middle"
                    fill="#1a1a1a"
                    fontSize="36"
                    fontWeight="700"
                  >
                    {languageData.length}
                  </text>
                  <text
                    x={centerX}
                    y={centerY + 25}
                    textAnchor="middle"
                    fill="#6b7280"
                    fontSize="18"
                  >
                    Languages
                  </text>
                </svg>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                {languageData.map((lang, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 20px',
                      background: '#f9fafb',
                      borderRadius: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div
                        style={{
                          width: '14px',
                          height: '14px',
                          borderRadius: '3px',
                          background: lang.color,
                        }}
                      />
                      <div style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a' }}>
                        {lang.name}
                      </div>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 700, color: '#667eea' }}>
                      {lang.percentage.toFixed(1)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1280,
        height: 640,
      }
    );
  } catch (error) {
    console.error('Language stats error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(`Error: ${message}`, { status: 500 });
  }
}
