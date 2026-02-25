import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { guides } from '@/lib/guides-data';
import GuidesClient from './GuidesClient';

export const metadata: Metadata = {
  title: 'VPN Reviews & Privacy Guides - Expert Security Recommendations',
  description: 'Browse expert VPN reviews, cybersecurity tool comparisons, and online privacy guides. Find the best security solutions for your needs.',
  keywords: ['vpn reviews', 'best vpn 2026', 'cybersecurity guides', 'privacy tools', 'online security', 'vpn comparison'],
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: 'VPN Reviews & Privacy Guides - Expert Security Recommendations',
    description: 'Browse expert VPN reviews, cybersecurity tool comparisons, and online privacy guides.',
    url: `${SITE_URL}/guides`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: '/images/categories/hero-security.webp', width: 1200, height: 630, alt: 'VPN Reviews & Privacy Guides' }],
  },
  twitter: { card: 'summary_large_image', site: '@SecureChoiceG' },
};

export default function GuidesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SecureChoiceGuide VPN Reviews & Privacy Guides',
    description: 'Browse expert VPN reviews, cybersecurity tool comparisons, and privacy guides.',
    url: `${SITE_URL}/guides`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: guides.length,
      itemListElement: guides.slice(0, 10).map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/guides/${g.slug}`,
        name: g.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuidesClient />
    </>
  );
}
