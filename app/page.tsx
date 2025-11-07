'use client';

import { css } from '@sylphx/silk';
import { Button, Container, Flex, Heading, Text, Badge, Card, Box, Section } from '@radix-ui/themes';
import { Icon } from '@iconify/react';

const floatingOrb = css({
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0.3,
  filter: 'blur(120px)',
  pointerEvents: 'none',
  animation: 'float 15s ease-in-out infinite',
});

const floatingOrbDelayed = css({
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0.25,
  filter: 'blur(120px)',
  pointerEvents: 'none',
  animation: 'float-delayed 15s ease-in-out infinite',
});

const heroSection = css({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
});

const heroPulse = css({
  position: 'absolute',
  inset: 0,
  animation: 'pulse-slow 8s ease-in-out infinite',
  background: 'radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.08), transparent 50%), radial-gradient(circle at 80% 80%, rgba(167, 139, 250, 0.08), transparent 50%)',
});

const gradientText = css({
  background: 'linear-gradient(135deg, #fff 0%, #a78bfa 50%, #ec4899 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 900,
});

const glassCard = css({
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  padding: '32px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
});

const featureIcon = css({
  fontSize: '64px',
  marginBottom: '16px',
  transition: 'transform 0.3s ease',
  '.group:hover &': {
    transform: 'scale(1.1)',
  },
});

const featureGrid = css({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '24px',
  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (min-width: 1024px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

const codeBlock = css({
  padding: '16px',
  background: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  overflowX: 'auto',
});

const glassCardSubtle = css({
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(20px)',
});

const ctaCard = css({
  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))',
  backdropFilter: 'blur(20px)',
  borderColor: 'rgba(139, 92, 246, 0.3)',
});

export default function Home() {
  return (
    <main className="relative">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className={floatingOrb}
          style={{
            top: '10%',
            left: '10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%)',
          }}
        />
        <div
          className={floatingOrbDelayed}
          style={{
            bottom: '10%',
            right: '10%',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className={heroSection}>
        <div className={heroPulse} />

        <Container size="4" className="relative z-10">
          <Flex direction="column" align="center" gap="6">
            {/* Status Badge */}
            <Badge size="3" radius="full" variant="surface" className="shadow-lg shadow-purple-500/20">
              <Flex align="center" gap="2">
                <Icon icon="ph:lightning-fill" className="text-amber-400" />
                <Text>Powered by Next.js 16 + Bun + Silk</Text>
              </Flex>
            </Badge>

            {/* Title */}
            <Heading size="9" align="center" className={gradientText}>
              Snapt
            </Heading>

            {/* Subtitle */}
            <Text size="6" align="center" color="gray" className="max-w-[700px]">
              Transform your GitHub repositories into{' '}
              <Text weight="bold" className="text-purple-400">
                stunning visual assets
              </Text>{' '}
              with dynamic image generation
            </Text>

            {/* CTA Buttons */}
            <Flex gap="4" wrap="wrap" justify="center" mt="4">
              <Button size="4" variant="solid" className="shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all" asChild>
                <a href="#examples" className="flex items-center gap-2">
                  <Icon icon="ph:sparkle-fill" />
                  See Examples
                  <Icon icon="ph:arrow-right-bold" />
                </a>
              </Button>
              <Button size="4" variant="outline" className="hover:bg-white/10 transition-all" asChild>
                <a href="https://github.com/sylphxltd/snapt" target="_blank" className="flex items-center gap-2">
                  <Icon icon="ph:github-logo-fill" />
                  View on GitHub
                </a>
              </Button>
            </Flex>

            {/* Quick Stats */}
            <Flex gap="6" mt="6" wrap="wrap" justify="center">
              <Flex direction="column" align="center" gap="1">
                <Text size="7" weight="bold" className={gradientText}>
                  500B
                </Text>
                <Text size="2" color="gray">
                  Ultra-light
                </Text>
              </Flex>
              <Flex direction="column" align="center" gap="1">
                <Text size="7" weight="bold" className={gradientText}>
                  1280×640
                </Text>
                <Text size="2" color="gray">
                  Perfect size
                </Text>
              </Flex>
              <Flex direction="column" align="center" gap="1">
                <Icon icon="ph:infinity-bold" className={`text-5xl ${gradientText}`} />
                <Text size="2" color="gray">
                  Free forever
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </section>

      {/* Features Section */}
      <Section size="3" className="relative">
        <Container size="4">
          <Flex direction="column" gap="6" mb="8">
            <Heading size="8" align="center" className="flex items-center justify-center gap-3">
              <Icon icon="ph:magic-wand-fill" />
              Powerful Features
            </Heading>
            <Text size="4" align="center" color="gray" className="max-w-[600px] mx-auto">
              Everything you need to create professional GitHub assets
            </Text>
          </Flex>

          <div className={featureGrid}>
            {[
              {
                icon: 'ph:image-fill',
                title: 'Social Banners',
                desc: 'Beautiful 1280×640px banners with live GitHub stats, perfect for social media sharing',
                color: 'text-blue-400',
              },
              {
                icon: 'ph:chart-line-up-fill',
                title: 'Star History',
                desc: 'Elegant charts showing your repository growth over time with smooth gradients',
                color: 'text-purple-400',
              },
              {
                icon: 'ph:code-fill',
                title: 'Language Stats',
                desc: 'Visual breakdown of your codebase languages with beautiful donut charts',
                color: 'text-pink-400',
              },
              {
                icon: 'ph:lightning-fill',
                title: 'Edge Runtime',
                desc: 'Lightning-fast image generation using Vercel Edge Functions and Satori',
                color: 'text-amber-400',
              },
              {
                icon: 'ph:lock-key-fill',
                title: 'Type Safe',
                desc: 'Built with TypeScript and Silk for complete type safety and performance',
                color: 'text-emerald-400',
              },
              {
                icon: 'ph:rocket-launch-fill',
                title: 'Zero Config',
                desc: 'Just pass URL parameters and get stunning images instantly, no setup required',
                color: 'text-cyan-400',
              },
            ].map((feature, i) => (
              <div key={i} className={`group ${glassCard}`}>
                <Icon icon={feature.icon} className={`${featureIcon} ${feature.color}`} />
                <Heading size="5" mb="2">
                  {feature.title}
                </Heading>
                <Text color="gray">{feature.desc}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Examples Section */}
      <Section id="examples" size="3" className="relative">
        <Container size="4">
          <Flex direction="column" gap="6" mb="8">
            <Heading size="8" align="center" className="flex items-center justify-center gap-3">
              <Icon icon="ph:images-fill" />
              Live Examples
            </Heading>
            <Text size="4" align="center" color="gray">
              See what you can create with Snapt
            </Text>
          </Flex>

          <Flex direction="column" gap="8">
            {/* Banner Example */}
            <Card size="4" className={glassCardSubtle}>
              <Flex direction="column" gap="4">
                <Flex justify="between" align="center" wrap="wrap" gap="2">
                  <Heading size="5" className="flex items-center gap-2">
                    <Icon icon="ph:image-fill" />
                    Social Banner
                  </Heading>
                  <Badge color="blue" className="flex items-center gap-1">
                    <Icon icon="ph:code-simple-fill" />
                    /api/banner
                  </Badge>
                </Flex>

                <Box className="rounded-xl overflow-hidden border border-white/10">
                  <img
                    src="/api/banner?title=Snapt&tagline=Transform your GitHub repos into stunning visuals&features=Beautiful,Fast,Easy,Free&gradient=667eea,764ba2&icon=✨&theme=modern"
                    alt="Banner example"
                    className="w-full"
                  />
                </Box>

                <div className={codeBlock}>
                  <code className="text-sm text-cyan-300 font-mono">
                    /api/banner?title=Snapt&tagline=...&features=Beautiful,Fast,Easy,Free&icon=✨
                  </code>
                </div>
              </Flex>
            </Card>

            {/* Star History Example */}
            <Card size="4" className={glassCardSubtle}>
              <Flex direction="column" gap="4">
                <Flex justify="between" align="center" wrap="wrap" gap="2">
                  <Heading size="5" className="flex items-center gap-2">
                    <Icon icon="ph:chart-line-up-fill" />
                    Star History
                  </Heading>
                  <Badge color="purple" className="flex items-center gap-1">
                    <Icon icon="ph:code-simple-fill" />
                    /api/star-history
                  </Badge>
                </Flex>

                <Box className="rounded-xl overflow-hidden border border-white/10">
                  <img src="/api/star-history?repo=sylphxltd/snapt" alt="Star history example" className="w-full" />
                </Box>

                <div className={codeBlock}>
                  <code className="text-sm text-cyan-300 font-mono">/api/star-history?repo=sylphxltd/snapt</code>
                </div>
              </Flex>
            </Card>

            {/* Language Stats Example */}
            <Card size="4" className={glassCardSubtle}>
              <Flex direction="column" gap="4">
                <Flex justify="between" align="center" wrap="wrap" gap="2">
                  <Heading size="5" className="flex items-center gap-2">
                    <Icon icon="ph:code-fill" />
                    Language Distribution
                  </Heading>
                  <Badge color="pink" className="flex items-center gap-1">
                    <Icon icon="ph:code-simple-fill" />
                    /api/languages
                  </Badge>
                </Flex>

                <Box className="rounded-xl overflow-hidden border border-white/10">
                  <img src="/api/languages?repo=sylphxltd/snapt" alt="Language stats example" className="w-full" />
                </Box>

                <div className={codeBlock}>
                  <code className="text-sm text-cyan-300 font-mono">/api/languages?repo=sylphxltd/snapt</code>
                </div>
              </Flex>
            </Card>
          </Flex>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section size="3" className="relative">
        <Container size="3">
          <Card size="4" className={ctaCard}>
            <Flex direction="column" align="center" gap="4" p="6">
              <Icon icon="ph:rocket-launch-fill" className="text-7xl text-purple-400" />
              <Heading size="7" align="center">
                Ready to elevate your repositories?
              </Heading>
              <Text size="4" align="center" color="gray">
                Start generating beautiful images in seconds
              </Text>
              <Flex gap="4" mt="4">
                <Button size="4" variant="solid" className="shadow-lg shadow-purple-500/30" asChild>
                  <a href="https://github.com/sylphxltd/snapt" target="_blank" className="flex items-center gap-2">
                    <Icon icon="ph:github-logo-fill" />
                    View Documentation
                  </a>
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Container>
      </Section>

      {/* Footer */}
      <Section size="2" className="relative">
        <Container size="4">
          <Flex direction="column" align="center" gap="3" className="border-t border-white/10 pt-8">
            <Flex align="center" gap="2">
              <Text color="gray">Made with</Text>
              <Icon icon="ph:heart-fill" className="text-pink-500" />
              <Text color="gray">by</Text>
              <Text weight="bold">
                <a href="https://github.com/sylphxltd" className="text-purple-400 hover:text-purple-300 transition-colors">
                  SylphX
                </a>
              </Text>
            </Flex>
            <Text size="2" color="gray">
              Open source • MIT License • Built with Silk, Radix UI & Iconify
            </Text>
          </Flex>
        </Container>
      </Section>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.1);
          }
          66% {
            transform: translate(20px, -20px) scale(0.9);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        body {
          background: linear-gradient(135deg, #0a0a18 0%, #130b1f 50%, #0f0616 100%);
          min-height: 100vh;
        }
      `}</style>
    </main>
  );
}
