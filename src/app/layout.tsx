import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'n8n Masterclass - Master AI Orchestration & Automation',
  description:
    'Transform your career with the most comprehensive n8n automation course. Learn to build AI-powered workflows that scale. Join 2,847+ students.',
  keywords:
    'n8n, automation, ai orchestration, workflow automation, no-code, low-code, ai agents, tesseract nexus',
  authors: [{ name: 'Tesseract Nexus' }],
  openGraph: {
    title: 'n8n Masterclass - Master AI Orchestration & Automation',
    description: 'Transform your career with the most comprehensive n8n automation course.',
    url: 'https://tesseract-nexus.com',
    siteName: 'Tesseract n8n Masterclass',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n Masterclass - Master AI Orchestration',
    description: 'Transform your career with the most comprehensive n8n automation course.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          'min-h-screen bg-white text-foreground antialiased'
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        {process.env.NODE_ENV === 'development' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Performance monitoring script
                console.log('🚀 Performance monitoring enabled for development');
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
