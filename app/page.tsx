'use client';

import { css } from '@sylphx/silk';
import { Button, Container, Flex, Heading, Text, Badge, Card, Box, Section } from '@radix-ui/themes';
import { Icon } from '@iconify/react';

// ===== Silk Styles =====

const page = css({
  position: 'relative',
  minHeight: '100vh',
});

const backgroundGradient = css({
  position: 'fixed',
  inset: 0,
  zIndex: -1,
  background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15), transparent 100%), radial-gradient(ellipse 60% 50% at 50% 120%, rgba(236, 72, 153, 0.12), transparent 100%)',
});

const floatingOrb = css({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(100px)',
  opacity: 0.15,
  pointerEvents: 'none',
  animation: 'float 20s ease-in-out infinite',
});

const hero = css({
  position: 'relative',
  paddingTop: '120px',
  paddingBottom: '160px',
  '@media (max-width: 768px)': {
    paddingTop: '80px',
    paddingBottom: '100px',
  },
});

const badge = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  background: 'rgba(139, 92, 246, 0.1)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(139, 92, 246, 0.2)',
  borderRadius: '100px',
  fontSize: '14px',
  fontWeight: 500,
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: '32px',
});

const titleGradient = css({
  background: 'linear-gradient(to right, #ffffff, #e9d5ff, #fae8ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '72px',
  fontWeight: 900,
  lineHeight: 1.1,
  marginBottom: '24px',
  '@media (max-width: 768px)': {
    fontSize: '48px',
  },
});

const subtitle = css({
  fontSize: '20px',
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.7)',
  maxWidth: '600px',
  marginBottom: '40px',
  '@media (max-width: 768px)': {
    fontSize: '18px',
  },
});

const ctaGroup = css({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginBottom: '48px',
});

const primaryButton = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 32px',
  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  border: 'none',
  borderRadius: '12px',
  fontSize: '16px',
  fontWeight: 600,
  color: '#ffffff',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 48px rgba(139, 92, 246, 0.4)',
  },
});

const secondaryButton = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 32px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  fontSize: '16px',
  fontWeight: 600,
  color: '#ffffff',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
});

const statsGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '48px',
  maxWidth: '800px',
  margin: '0 auto',
  '@media (max-width: 768px)': {
    gap: '32px',
  },
});

const statItem = css({
  textAlign: 'center',
});

const statValue = css({
  background: 'linear-gradient(to right, #ffffff, #e9d5ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '48px',
  fontWeight: 900,
  marginBottom: '8px',
  '@media (max-width: 768px)': {
    fontSize: '36px',
  },
});

const statLabel = css({
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.6)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

const section = css({
  padding: '120px 0',
  '@media (max-width: 768px)': {
    padding: '80px 0',
  },
});

const sectionTitle = css({
  fontSize: '48px',
  fontWeight: 800,
  textAlign: 'center',
  marginBottom: '16px',
  background: 'linear-gradient(to right, #ffffff, #e9d5ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  '@media (max-width: 768px)': {
    fontSize: '36px',
  },
});

const sectionSubtitle = css({
  fontSize: '18px',
  color: 'rgba(255, 255, 255, 0.6)',
  textAlign: 'center',
  marginBottom: '64px',
});

const featureGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '32px',
  '@media (max-width: 1024px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
});

const featureCard = css({
  position: 'relative',
  padding: '40px',
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '24px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
    boxShadow: '0 24px 64px rgba(139, 92, 246, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
});

const featureIcon = css({
  width: '56px',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(139, 92, 246, 0.1)',
  borderRadius: '16px',
  marginBottom: '24px',
  fontSize: '28px',
  transition: 'transform 0.4s ease',
  '.group:hover &': {
    transform: 'scale(1.1) rotate(5deg)',
  },
});

const featureTitle = css({
  fontSize: '20px',
  fontWeight: 700,
  marginBottom: '12px',
  color: '#ffffff',
});

const featureDesc = css({
  fontSize: '15px',
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.6)',
});

const exampleCard = css({
  padding: '32px',
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '20px',
  marginBottom: '32px',
});

const exampleHeader = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
  flexWrap: 'wrap',
  gap: '16px',
});

const exampleTitle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '20px',
  fontWeight: 700,
  color: '#ffffff',
});

const exampleBadge = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '6px 12px',
  background: 'rgba(139, 92, 246, 0.1)',
  border: '1px solid rgba(139, 92, 246, 0.2)',
  borderRadius: '8px',
  fontSize: '13px',
  fontWeight: 500,
  color: 'rgba(139, 92, 246, 1)',
});

const exampleImage = css({
  width: '100%',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  marginBottom: '20px',
  overflow: 'hidden',
});

const codeBlock = css({
  padding: '16px 20px',
  background: 'rgba(0, 0, 0, 0.3)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  fontFamily: 'ui-monospace, monospace',
  fontSize: '13px',
  color: '#a5f3fc',
  overflowX: 'auto',
  whiteSpace: 'pre',
});

const ctaSection = css({
  padding: '80px 0',
  '@media (max-width: 768px)': {
    padding: '60px 0',
  },
});

const ctaCard = css({
  position: 'relative',
  padding: '64px 48px',
  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(139, 92, 246, 0.2)',
  borderRadius: '24px',
  textAlign: 'center',
  overflow: 'hidden',
  '@media (max-width: 768px)': {
    padding: '48px 32px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent 70%)',
    animation: 'rotate 20s linear infinite',
  },
});

const ctaIcon = css({
  fontSize: '64px',
  marginBottom: '24px',
});

const ctaTitle = css({
  fontSize: '36px',
  fontWeight: 800,
  marginBottom: '16px',
  color: '#ffffff',
  '@media (max-width: 768px)': {
    fontSize: '28px',
  },
});

const ctaText = css({
  fontSize: '18px',
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: '32px',
});

const footer = css({
  padding: '48px 0',
  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
  textAlign: 'center',
});

const footerText = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontSize: '15px',
  color: 'rgba(255, 255, 255, 0.6)',
  marginBottom: '8px',
});

const footerLink = css({
  color: '#a78bfa',
  textDecoration: 'none',
  fontWeight: 600,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#c4b5fd',
  },
});

const footerMeta = css({
  fontSize: '13px',
  color: 'rgba(255, 255, 255, 0.4)',
});

// ===== Component =====

export default function Home() {
  const features = [
    {
      icon: 'ph:image-fill',
      title: 'Social Banners',
      desc: 'Beautiful 1280×640px banners with live GitHub stats, perfect for social media',
      color: '#3b82f6',
    },
    {
      icon: 'ph:chart-line-up-fill',
      title: 'Star History',
      desc: 'Elegant charts showing repository growth over time with smooth gradients',
      color: '#8b5cf6',
    },
    {
      icon: 'ph:code-fill',
      title: 'Language Stats',
      desc: 'Visual breakdown of codebase languages with beautiful donut charts',
      color: '#ec4899',
    },
    {
      icon: 'ph:lightning-fill',
      title: 'Edge Runtime',
      desc: 'Lightning-fast generation using Vercel Edge Functions and Satori',
      color: '#f59e0b',
    },
    {
      icon: 'ph:lock-key-fill',
      title: 'Type Safe',
      desc: 'Built with TypeScript and Silk for complete type safety and performance',
      color: '#10b981',
    },
    {
      icon: 'ph:rocket-launch-fill',
      title: 'Zero Config',
      desc: 'Just pass URL parameters and get stunning images instantly',
      color: '#06b6d4',
    },
  ];

  return (
    <main className={page}>
      {/* Background */}
      <div className={backgroundGradient} />

      {/* Floating Orbs */}
      <div
        className={floatingOrb}
        style={{
          position: 'fixed',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)',
        }}
      />
      <div
        className={floatingOrb}
        style={{
          position: 'fixed',
          bottom: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25), transparent 70%)',
          animationDelay: '-10s',
        }}
      />

      {/* Hero */}
      <section className={hero}>
        <Container size="4">
          <div style={{ textAlign: 'center' }}>
            <div className={badge}>
              <Icon icon="ph:lightning-fill" style={{ color: '#fbbf24' }} />
              <span>Powered by Next.js 16 + Bun + Silk</span>
            </div>

            <h1 className={titleGradient}>Snapt</h1>

            <p className={subtitle}>
              Transform your GitHub repositories into <strong style={{ color: '#c4b5fd' }}>stunning visual assets</strong> with
              dynamic image generation
            </p>

            <div className={ctaGroup}>
              <a href="#examples" className={primaryButton}>
                <Icon icon="ph:sparkle-fill" />
                See Examples
                <Icon icon="ph:arrow-right-bold" />
              </a>
              <a href="https://github.com/sylphxltd/snapt" target="_blank" className={secondaryButton}>
                <Icon icon="ph:github-logo-fill" />
                View on GitHub
              </a>
            </div>

            <div className={statsGrid}>
              <div className={statItem}>
                <div className={statValue}>500B</div>
                <div className={statLabel}>Ultra-light</div>
              </div>
              <div className={statItem}>
                <div className={statValue}>1280×640</div>
                <div className={statLabel}>Perfect size</div>
              </div>
              <div className={statItem}>
                <div className={statValue}>
                  <Icon icon="ph:infinity-bold" />
                </div>
                <div className={statLabel}>Free forever</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className={section}>
        <Container size="4">
          <h2 className={sectionTitle}>
            <Icon icon="ph:magic-wand-fill" style={{ marginRight: '12px', verticalAlign: 'middle' }} />
            Powerful Features
          </h2>
          <p className={sectionSubtitle}>Everything you need to create professional GitHub assets</p>

          <div className={featureGrid}>
            {features.map((feature, i) => (
              <div key={i} className={`${featureCard} group`}>
                <div className={featureIcon} style={{ color: feature.color }}>
                  <Icon icon={feature.icon} />
                </div>
                <h3 className={featureTitle}>{feature.title}</h3>
                <p className={featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Examples */}
      <section id="examples" className={section} style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
        <Container size="4">
          <h2 className={sectionTitle}>
            <Icon icon="ph:images-fill" style={{ marginRight: '12px', verticalAlign: 'middle' }} />
            Live Examples
          </h2>
          <p className={sectionSubtitle}>See what you can create with Snapt</p>

          {/* Banner Example */}
          <div className={exampleCard}>
            <div className={exampleHeader}>
              <div className={exampleTitle}>
                <Icon icon="ph:image-fill" />
                Social Banner
              </div>
              <div className={exampleBadge}>
                <Icon icon="ph:code-simple-fill" />
                /api/banner
              </div>
            </div>
            <div className={exampleImage}>
              <img
                src="/api/banner?title=Snapt&tagline=Transform your GitHub repos into stunning visuals&features=Beautiful,Fast,Easy,Free&gradient=667eea,764ba2&icon=✨&theme=modern"
                alt="Banner example"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <code className={codeBlock}>
              /api/banner?title=Snapt&tagline=...&features=Beautiful,Fast,Easy,Free&icon=✨
            </code>
          </div>

          {/* Star History Example */}
          <div className={exampleCard}>
            <div className={exampleHeader}>
              <div className={exampleTitle}>
                <Icon icon="ph:chart-line-up-fill" />
                Star History
              </div>
              <div className={exampleBadge} style={{ background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa' }}>
                <Icon icon="ph:code-simple-fill" />
                /api/star-history
              </div>
            </div>
            <div className={exampleImage}>
              <img src="/api/star-history?repo=sylphxltd/snapt" alt="Star history" style={{ width: '100%', display: 'block' }} />
            </div>
            <code className={codeBlock}>/api/star-history?repo=sylphxltd/snapt</code>
          </div>

          {/* Language Stats Example */}
          <div className={exampleCard}>
            <div className={exampleHeader}>
              <div className={exampleTitle}>
                <Icon icon="ph:code-fill" />
                Language Distribution
              </div>
              <div className={exampleBadge} style={{ background: 'rgba(236, 72, 153, 0.1)', borderColor: 'rgba(236, 72, 153, 0.2)', color: '#ec4899' }}>
                <Icon icon="ph:code-simple-fill" />
                /api/languages
              </div>
            </div>
            <div className={exampleImage}>
              <img src="/api/languages?repo=sylphxltd/snapt" alt="Languages" style={{ width: '100%', display: 'block' }} />
            </div>
            <code className={codeBlock}>/api/languages?repo=sylphxltd/snapt</code>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className={ctaSection}>
        <Container size="3">
          <div className={ctaCard}>
            <div className={ctaIcon}>
              <Icon icon="ph:rocket-launch-fill" style={{ color: '#a78bfa' }} />
            </div>
            <h2 className={ctaTitle}>Ready to elevate your repositories?</h2>
            <p className={ctaText}>Start generating beautiful images in seconds</p>
            <a href="https://github.com/sylphxltd/snapt" target="_blank" className={primaryButton} style={{ position: 'relative', zIndex: 1 }}>
              <Icon icon="ph:github-logo-fill" />
              View Documentation
            </a>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className={footer}>
        <Container size="4">
          <div className={footerText}>
            <span>Made with</span>
            <Icon icon="ph:heart-fill" style={{ color: '#ec4899' }} />
            <span>by</span>
            <a href="https://github.com/sylphxltd" className={footerLink}>
              SylphX
            </a>
          </div>
          <div className={footerMeta}>Open source • MIT License • Built with Silk, Radix UI & Iconify</div>
        </Container>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: linear-gradient(135deg, #0a0a18 0%, #130b1f 50%, #0f0616 100%);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #ffffff;
          overflow-x: hidden;
        }

        a {
          text-decoration: none;
        }

        strong {
          font-weight: 700;
        }
      `}</style>
    </main>
  );
}
