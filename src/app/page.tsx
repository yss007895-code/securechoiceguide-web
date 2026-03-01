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
  const latestGuides = guides.slice(3, 9);

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
        {/* Hero — Clean Magazine */}
        <section className="py-16 sm:py-20 text-center border-b border-surface-border">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-trust-green-light text-trust-green-dark text-sm font-display font-medium rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            Independent Reviews Since 2024
          </div>
          <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] font-extrabold text-navy-900 leading-tight max-w-3xl mx-auto">
            Find the right security tools,{' '}
            <span className="text-trust-green">backed by real testing.</span>
          </h1>
          <p className="text-lg text-navy-600 mt-5 max-w-2xl mx-auto leading-relaxed font-body">
            We test VPNs, password managers, and privacy tools so you don&apos;t have to.
            Honest recommendations with no pay-to-play rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link href="/shop" className="btn-primary text-center">Browse Security Tools</Link>
            <Link href="/guides" className="btn-secondary text-center">Read Reviews</Link>
          </div>
        </section>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-6 mb-12 bg-surface-light border-b border-surface-border">
          <span className="flex items-center gap-2 text-sm font-display font-medium text-navy-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trust-green"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            Independently tested
          </span>
          <span className="w-1 h-1 rounded-full bg-navy-300"></span>
          <span className="flex items-center gap-2 text-sm font-display font-medium text-navy-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trust-green"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            No affiliate bias
          </span>
          <span className="w-1 h-1 rounded-full bg-navy-300"></span>
          <span className="flex items-center gap-2 text-sm font-display font-medium text-navy-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-trust-green"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Updated weekly
          </span>
        </div>

        {/* Ad */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-10" />

        {/* Top Rated — List View */}
        <TrendingProducts />

        {/* Editor's Picks — Guides */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">Editor&apos;s Picks</h2>
              <p className="text-sm text-navy-500 mt-1 font-display">Our most comprehensive reviews and guides</p>
            </div>
            <Link href="/guides" className="text-sm text-trust-green hover:text-trust-green-dark font-display font-medium transition-colors">
              View all reviews &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {labReports.map((g, i) => <GuideCard key={g.slug} guide={g} index={i} />)}
          </div>
        </section>

        {/* Latest Reviews */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">Latest Reviews</h2>
            <Link href="/guides" className="text-sm text-trust-green hover:text-trust-green-dark font-display font-medium transition-colors">
              See all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestGuides.map((g) => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </section>

        {/* Ad */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-10" />

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
