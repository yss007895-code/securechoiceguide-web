import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import StyleQuizClient from './StyleQuizClient';

export const metadata: Metadata = {
  title: 'Free Security Assessment — Check Your Online Privacy',
  description: 'Take our free security assessment to evaluate your online privacy and get personalized recommendations for VPNs, password managers, and security tools.',
  keywords: ['security assessment', 'privacy check', 'online safety quiz', 'vpn quiz', 'cybersecurity assessment'],
  alternates: { canonical: `${SITE_URL}/style-quiz` },
  openGraph: {
    title: 'Free Security Assessment — Check Your Online Privacy',
    description: 'Take our free security assessment and get personalized privacy recommendations.',
    url: `${SITE_URL}/style-quiz`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: '/images/categories/hero-security.webp', width: 1200, height: 630, alt: 'Free Security Assessment Quiz' }],
  },
  twitter: { card: 'summary_large_image', site: '@SecureChoiceG' },
};

export default function StyleQuizPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'SecureChoiceGuide Online Security Assessment',
    description: 'Evaluate your online privacy with our free security assessment quiz.',
    url: `${SITE_URL}/style-quiz`,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StyleQuizClient />
    </>
  );
}
