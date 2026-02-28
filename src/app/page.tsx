import Link from 'next/link';
import { guides } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import GuideCard from '@/components/GuideCard';
import NewsletterCTA from '@/components/NewsletterCTA';
import TrendingProducts from '@/components/TrendingProducts';
import ShopByCategory from '@/components/ShopByCategory';
import AdUnit from '@/components/AdUnit';

export default function HomePage() {
  const labReports = guides.slice(0, 3);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.webp`,
    sameAs: [
      'https://twitter.com/SecureChoiceG',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@securechoiceguide.com',
      contactType: 'customer service',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is SecureChoiceGuide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SecureChoiceGuide is an independent review platform that provides expert VPN reviews, cybersecurity tool comparisons, and online privacy guides to help you stay safe online.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you test VPNs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We evaluate VPNs based on speed, security protocols, privacy policies, server locations, ease of use, and value for money. Each VPN is tested across multiple devices and locations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your recommendations independent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. While we may earn affiliate commissions, our editorial team independently researches and tests every product. Affiliate relationships never influence our rankings or recommendations.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div>
        {/* Hero — Dark centered */}
        <section className="py-20 text-center">
          <h1 className="font-display text-[2.5rem] sm:text-[3rem] font-medium text-text-primary leading-tight">
            Your privacy, our priority.
          </h1>
          <p className="text-lg text-text-secondary mt-4 max-w-xl mx-auto">
            Expert VPN reviews, security tool comparisons, and privacy guides to protect your digital life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link href="/shop" className="btn-primary text-center">Browse Security Tools</Link>
            <Link href="/guides" className="btn-secondary text-center">Read Reviews</Link>
          </div>
        </section>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-4 mb-12 border-y border-dark-border">
          <span className="flex items-center gap-2 text-xs font-mono text-text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            Independently tested
          </span>
          <span className="text-dark-border">·</span>
          <span className="flex items-center gap-2 text-xs font-mono text-text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            No affiliate bias
          </span>
          <span className="text-dark-border">·</span>
          <span className="flex items-center gap-2 text-xs font-mono text-text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Updated weekly
          </span>
        </div>

        {/* Ad */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-8" />

        {/* Top Rated — List View */}
        <TrendingProducts />

        {/* Lab Reports — Guides */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Lab Reports</h2>
            <Link href="/guides" className="text-sm text-text-secondary hover:text-accent font-mono transition-colors">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {labReports.map((g, i) => <GuideCard key={g.slug} guide={g} index={i} />)}
          </div>
        </section>

        {/* Ad */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-8" />

        {/* Shop by Category */}
        <ShopByCategory />

        {/* Newsletter */}
        <section className="mb-20">
          <NewsletterCTA />
        </section>
      </div>
    </>
  );
}
