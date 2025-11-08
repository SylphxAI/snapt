import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { getRepo } from '@/lib/github';

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

    const features = featuresParam.split(',').map((f) => f.trim()).slice(0, 4);

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

    const gradientBg = `linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%)`;

    return new ImageResponse(
      (
        <div
          style={{
            width: '1280px',
            height: '640px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: gradientBg,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '28px',
              padding: '64px 84px',
              width: '1136px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 30px 90px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              <div
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '44px',
                  background: gradientBg,
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                }}
              >
                {icon}
              </div>
              <div
                style={{
                  fontSize: '76px',
                  fontWeight: 800,
                  color: '#667eea',
                }}
              >
                {title}
              </div>
            </div>

            <div
              style={{
                fontSize: '38px',
                fontWeight: 600,
                color: '#2d3748',
              }}
            >
              {tagline}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {features.map((feature, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '24px',
                    color: '#4a5568',
                    width: features.length <= 2 ? '100%' : '48%',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      background: gradientBg,
                    }}
                  >
                    {['⚡', '🎯', '📦', '🚀'][i]}
                  </div>
                  <div>{feature}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '20px',
                borderTop: '2px solid rgba(0, 0, 0, 0.08)',
              }}
            >
              <div style={{ fontSize: '20px', color: '#718096' }}>
                github.com/{repo || `sylphxltd/${title.toLowerCase()}`}
              </div>

              {repoData && showStats ? (
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 600,
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      color: '#2d3748',
                    }}
                  >
                    <div>⭐</div>
                    <div>{repoData.stargazers_count}</div>
                  </div>

                  {repoData.language ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 600,
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        color: '#2d3748',
                      }}
                    >
                      <div>📝</div>
                      <div>{repoData.language}</div>
                    </div>
                  ) : null}
                </div>
              ) : null}
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
    console.error('Banner generation error:', error);
    return new Response('Error generating banner', { status: 500 });
  }
}
