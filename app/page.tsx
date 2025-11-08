'use client';

import { Icon } from '@iconify/react';
import { css } from '@sylphx/silk';

// Hero Section Styles
const hero = css({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: { base: '80px 24px', md: '120px 48px' },
});

const heroBackground = css({
  position: 'fixed',
  inset: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: -10,
});

const floatingOrb = css({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(120px)',
  pointerEvents: 'none',
});

const orb1 = css({
  top: '10%',
  left: '10%',
  width: '600px',
  height: '600px',
  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%)',
  animation: 'float 15s ease-in-out infinite',
  opacity: 0.3,
});

const orb2 = css({
  bottom: '10%',
  right: '10%',
  width: '700px',
  height: '700px',
  background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
  animation: 'float-delayed 15s ease-in-out infinite',
  opacity: 0.25,
});

const heroContent = css({
  maxWidth: '1200px',
  textAlign: 'center',
  zIndex: 1,
});

const badge = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 20px',
  borderRadius: '100px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: '32px',
});

const heading = css({
  fontSize: { base: '48px', md: '72px', lg: '96px' },
  fontWeight: 900,
  lineHeight: 1.1,
  marginBottom: '24px',
  background: 'linear-gradient(135deg, #fff 0%, #a78bfa 50%, #ec4899 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundSize: '200% 200%',
  animation: 'gradient-shift 8s ease infinite',
});

const description = css({
  fontSize: { base: '18px', md: '22px' },
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.8)',
  maxWidth: '700px',
  margin: '0 auto 48px',
});

const highlight = css({
  color: '#a78bfa',
  fontWeight: 600,
});

const ctaGroup = css({
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBottom: '64px',
});

const button = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 32px',
  fontSize: '16px',
  fontWeight: 600,
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  textDecoration: 'none',
  border: 'none',
});

const buttonPrimary = css({
  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  color: '#fff',
  boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)',
  _hover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.5)',
  },
});

const buttonSecondary = css({
  background: 'rgba(255, 255, 255, 0.05)',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  color: '#fff',
  _hover: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
});

const stats = css({
  display: 'flex',
  gap: { base: '32px', md: '64px' },
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const stat = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

const statValue = css({
  fontSize: { base: '32px', md: '48px' },
  fontWeight: 900,
  background: 'linear-gradient(135deg, #fff 0%, #a78bfa 50%, #ec4899 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const statLabel = css({
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.6)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
});

// Features Section Styles
const section = css({
  padding: { base: '80px 24px', md: '120px 48px' },
  position: 'relative',
});

const container = css({
  maxWidth: '1200px',
  margin: '0 auto',
});

const sectionHeader = css({
  textAlign: 'center',
  marginBottom: '64px',
});

const sectionTitle = css({
  fontSize: { base: '36px', md: '56px' },
  fontWeight: 900,
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
});

const sectionSubtitle = css({
  fontSize: { base: '16px', md: '20px' },
  color: 'rgba(255, 255, 255, 0.7)',
  maxWidth: '600px',
  margin: '0 auto',
});

const featuresGrid = css({
  display: 'grid',
  gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
  gap: '24px',
});

const featureCard = css({
  padding: '32px',
  borderRadius: '24px',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  _hover: {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)',
  },
});

const featureIcon = css({
  fontSize: '64px',
  marginBottom: '16px',
  transition: 'transform 0.3s ease',
});

const featureTitle = css({
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '12px',
});

const featureDescription = css({
  fontSize: '16px',
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.7)',
});

// Examples Section Styles
const examplesGrid = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

const exampleCard = css({
  borderRadius: '24px',
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  overflow: 'hidden',
  padding: '32px',
});

const exampleHeader = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '16px',
  marginBottom: '24px',
});

const exampleTitle = css({
  fontSize: '28px',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

const exampleBadge = css({
  padding: '6px 16px',
  borderRadius: '100px',
  fontSize: '14px',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

const badgeBlue = css({
  background: 'rgba(59, 130, 246, 0.1)',
  border: '1px solid rgba(59, 130, 246, 0.3)',
  color: '#60a5fa',
});

const badgePurple = css({
  background: 'rgba(139, 92, 246, 0.1)',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  color: '#a78bfa',
});

const badgePink = css({
  background: 'rgba(236, 72, 153, 0.1)',
  border: '1px solid rgba(236, 72, 153, 0.3)',
  color: '#f472b6',
});

const exampleImage = css({
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  marginBottom: '20px',
});

// NOTE: Silk doesn't support nested selectors like '& img': {...}
// Use separate classes for child elements (Panda CSS best practice anyway)
const exampleImg = css({
  width: '100%',
  display: 'block',
});

const codeBlock = css({
  padding: '16px',
  borderRadius: '12px',
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  overflowX: 'auto',
});

const code = css({
  fontFamily: 'Consolas, Monaco, "Courier New", monospace',
  fontSize: '14px',
  color: '#67e8f9',
});

// CTA Section Styles
const ctaSection = css({
  padding: '80px 24px',
  position: 'relative',
});

const ctaCard = css({
  maxWidth: '900px',
  margin: '0 auto',
  padding: { base: '48px 32px', md: '64px 48px' },
  borderRadius: '32px',
  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))',
  border: '1px solid rgba(139, 92, 246, 0.3)',
  backdropFilter: 'blur(20px)',
  textAlign: 'center',
});

const ctaIcon = css({
  fontSize: '72px',
  marginBottom: '24px',
  color: '#a78bfa',
});

const ctaTitle = css({
  fontSize: { base: '32px', md: '48px' },
  fontWeight: 900,
  marginBottom: '16px',
});

const ctaDescription = css({
  fontSize: { base: '16px', md: '20px' },
  color: 'rgba(255, 255, 255, 0.8)',
  marginBottom: '32px',
});

// Footer Styles
const footer = css({
  padding: '48px 24px',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
});

const footerContent = css({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  textAlign: 'center',
});

const footerLinks = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '16px',
  color: 'rgba(255, 255, 255, 0.7)',
});

const footerLink = css({
  color: '#a78bfa',
  textDecoration: 'none',
  fontWeight: 600,
  transition: 'color 0.3s ease',
  _hover: {
    color: '#c4b5fd',
  },
});

const copyright = css({
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.5)',
});

export default function Home() {
  const features = [
    {
      icon: 'ph:image-fill',
      title: 'Social Banners',
      description: 'Beautiful 1280×640px banners with live GitHub stats, perfect for social media sharing',
      color: '#60a5fa',
    },
    {
      icon: 'ph:chart-line-up-fill',
      title: 'Star History',
      description: 'Elegant charts showing your repository growth over time with smooth gradients',
      color: '#a78bfa',
    },
    {
      icon: 'ph:code-fill',
      title: 'Language Stats',
      description: 'Visual breakdown of your codebase languages with beautiful donut charts',
      color: '#f472b6',
    },
    {
      icon: 'ph:lightning-fill',
      title: 'Edge Runtime',
      description: 'Lightning-fast image generation using Vercel Edge Functions and Satori',
      color: '#fbbf24',
    },
    {
      icon: 'ph:lock-key-fill',
      title: 'Type Safe',
      description: 'Built with TypeScript and Silk for complete type safety and performance',
      color: '#34d399',
    },
    {
      icon: 'ph:rocket-launch-fill',
      title: 'Zero Config',
      description: 'Just pass URL parameters and get stunning images instantly, no setup required',
      color: '#67e8f9',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className={hero}>
        <div className={heroBackground}>
          <div className={`${floatingOrb} ${orb1}`} />
          <div className={`${floatingOrb} ${orb2}`} />
        </div>

        <div className={heroContent}>
          <div className={badge}>
            <Icon icon="ph:lightning-fill" style={{ color: '#fbbf24' }} />
            <span>Powered by Next.js 16 + Bun + Silk</span>
          </div>

          <h1 className={heading}>Snapt</h1>

          <p className={description}>
            Transform your GitHub repositories into <span className={highlight}>stunning visual assets</span> with
            dynamic image generation
          </p>

          <div className={ctaGroup}>
            <a href="#examples" className={`${button} ${buttonPrimary}`}>
              <Icon icon="ph:sparkle-fill" />
              See Examples
              <Icon icon="ph:arrow-right-bold" />
            </a>
            <a
              href="https://github.com/sylphxltd/snapt"
              target="_blank"
              rel="noopener noreferrer"
              className={`${button} ${buttonSecondary}`}
            >
              <Icon icon="ph:github-logo-fill" />
              View on GitHub
            </a>
          </div>

          <div className={stats}>
            <div className={stat}>
              <div className={statValue}>500B</div>
              <div className={statLabel}>Ultra-light</div>
            </div>
            <div className={stat}>
              <div className={statValue}>1280×640</div>
              <div className={statLabel}>Perfect size</div>
            </div>
            <div className={stat}>
              <Icon icon="ph:infinity-bold" style={{ fontSize: '48px', color: '#a78bfa' }} />
              <div className={statLabel}>Free forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={section}>
        <div className={container}>
          <div className={sectionHeader}>
            <h2 className={sectionTitle}>
              <Icon icon="ph:magic-wand-fill" />
              Powerful Features
            </h2>
            <p className={sectionSubtitle}>Everything you need to create professional GitHub assets</p>
          </div>

          <div className={featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={featureCard}>
                <Icon icon={feature.icon} className={featureIcon} style={{ color: feature.color }} />
                <h3 className={featureTitle}>{feature.title}</h3>
                <p className={featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className={section}>
        <div className={container}>
          <div className={sectionHeader}>
            <h2 className={sectionTitle}>
              <Icon icon="ph:images-fill" />
              Live Examples
            </h2>
            <p className={sectionSubtitle}>See what you can create with Snapt</p>
          </div>

          <div className={examplesGrid}>
            {/* Social Banner Example */}
            <div className={exampleCard}>
              <div className={exampleHeader}>
                <h3 className={exampleTitle}>
                  <Icon icon="ph:image-fill" />
                  Social Banner
                </h3>
                <div className={`${exampleBadge} ${badgeBlue}`}>
                  <Icon icon="ph:code-simple-fill" />
                  /api/banner
                </div>
              </div>
              <div className={exampleImage}>
                <img
                  className={exampleImg}
                  src="/api/banner?title=Snapt&tagline=Transform your GitHub repos into stunning visuals&features=Beautiful,Fast,Easy,Free&gradient=667eea,764ba2&icon=✨&theme=modern"
                  alt="Banner example"
                />
              </div>
              <div className={codeBlock}>
                <code className={code}>
                  /api/banner?title=Snapt&tagline=...&features=Beautiful,Fast,Easy,Free&icon=✨
                </code>
              </div>
            </div>

            {/* Star History Example */}
            <div className={exampleCard}>
              <div className={exampleHeader}>
                <h3 className={exampleTitle}>
                  <Icon icon="ph:chart-line-up-fill" />
                  Star History
                </h3>
                <div className={`${exampleBadge} ${badgePurple}`}>
                  <Icon icon="ph:code-simple-fill" />
                  /api/star-history
                </div>
              </div>
              <div className={exampleImage}>
                <img className={exampleImg} src="/api/star-history?repo=sylphxltd/snapt" alt="Star history example" />
              </div>
              <div className={codeBlock}>
                <code className={code}>/api/star-history?repo=sylphxltd/snapt</code>
              </div>
            </div>

            {/* Language Stats Example */}
            <div className={exampleCard}>
              <div className={exampleHeader}>
                <h3 className={exampleTitle}>
                  <Icon icon="ph:code-fill" />
                  Language Distribution
                </h3>
                <div className={`${exampleBadge} ${badgePink}`}>
                  <Icon icon="ph:code-simple-fill" />
                  /api/languages
                </div>
              </div>
              <div className={exampleImage}>
                <img className={exampleImg} src="/api/languages?repo=sylphxltd/snapt" alt="Language stats example" />
              </div>
              <div className={codeBlock}>
                <code className={code}>/api/languages?repo=sylphxltd/snapt</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={ctaSection}>
        <div className={ctaCard}>
          <Icon icon="ph:rocket-launch-fill" className={ctaIcon} />
          <h2 className={ctaTitle}>Ready to elevate your repositories?</h2>
          <p className={ctaDescription}>Start generating beautiful images in seconds</p>
          <a
            href="https://github.com/sylphxltd/snapt"
            target="_blank"
            rel="noopener noreferrer"
            className={`${button} ${buttonPrimary}`}
          >
            <Icon icon="ph:github-logo-fill" />
            View Documentation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={footer}>
        <div className={footerContent}>
          <div className={footerLinks}>
            <span>Made with</span>
            <Icon icon="ph:heart-fill" style={{ color: '#f472b6' }} />
            <span>by</span>
            <a href="https://github.com/sylphxltd" className={footerLink}>
              SylphX
            </a>
          </div>
          <p className={copyright}>Open source • MIT License • Built with Silk, Tailwind & Iconify</p>
        </div>
      </footer>
    </main>
  );
}
