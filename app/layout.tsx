import type { Metadata } from 'next';
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
        <link rel="stylesheet" href="/_next/static/css/silk.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
