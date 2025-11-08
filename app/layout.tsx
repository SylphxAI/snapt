import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Snapt - Instant visual identity for your GitHub projects',
  description:
    'Generate beautiful social banners, star history charts, and language statistics for your GitHub repositories',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Silk CSS is automatically generated to static/css/silk.css */}
        <link rel="stylesheet" href="/_next/static/css/silk.css" />
      </head>
      <body>
        <Theme appearance="dark" accentColor="purple" grayColor="mauve" radius="large">
          {children}
        </Theme>
      </body>
    </html>
  );
}
