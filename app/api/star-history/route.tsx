import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { getStarHistory, getRepo } from '@/lib/github';

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
              padding: '40px',
              width: '1200px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#1a1a1a' }}>
                  {repoData.name}
                </div>
                <div style={{ fontSize: '18px', color: '#6b7280' }}>Star History</div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 700,
                }}
              >
                <div>⭐</div>
                <div>{repoData.stargazers_count}</div>
              </div>
            </div>

            <div style={{ display: 'flex' }}>
              <svg width={chartWidth + padding.left + padding.right} height={chartHeight + padding.top + padding.bottom}>
                {[0, 0.25, 0.5, 0.75, 1].map((percent) => {
                  const y = padding.top + chartHeight - chartHeight * percent;
                  return (
                    <g key={percent}>
                      <line
                        x1={padding.left}
                        y1={y}
                        x2={padding.left + chartWidth}
                        y2={y}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                      <text x={padding.left - 15} y={y + 5} textAnchor="end" fill="#9ca3af" fontSize="14">
                        {Math.round(maxStars * percent)}
                      </text>
                    </g>
                  );
                })}

                <defs>
                  <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#764ba2" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>

                <path d={areaPath} fill="url(#areaGradient)" />
                <path d={pathData} fill="none" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                {points.map((point, i) => (
                  <circle key={i} cx={point.x} cy={point.y} r="4" fill="#667eea" stroke="white" strokeWidth="2" />
                ))}

                {points
                  .filter((_, i) => i % Math.ceil(points.length / 6) === 0)
                  .map((point, i) => (
                    <text key={i} x={point.x} y={padding.top + chartHeight + 25} textAnchor="middle" fill="#9ca3af" fontSize="14">
                      {new Date(point.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </text>
                  ))}
              </svg>
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
    console.error('Star history error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(`Error: ${message}`, { status: 500 });
  }
}
