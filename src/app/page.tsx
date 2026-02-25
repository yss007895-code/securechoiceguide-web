import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { guides } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import GuideCard from '@/components/GuideCard';
import NewsletterCTA from '@/components/NewsletterCTA';
import TrendingProducts from '@/components/TrendingProducts';
import ShopByCategory from '@/components/ShopByCategory';
import AdUnit from '@/components/AdUnit';

export default function HomePage() {
  const editorPicks = guides.slice(0, 3);

  const featuredGuides = [
    { title: 'Best VPNs for Remote Work 2026', image: '/images/categories/cat-best-vpns.webp', url: '/guides/best-vpns-for-remote-workers-2026' },
    { title: 'NordVPN vs ExpressVPN', image: '/images/categories/cat-nordvpn-express.webp', url: '/compare/nordvpn-vs-expressvpn' },
    { title: 'Best Password Managers', image: '/images/categories/cat-password-manager.webp', url: '/guides/best-password-managers-2026' },
    { title: 'Smart Home Security Guide', image: '/images/categories/cat-privacy-guide.webp', url: '/guides/how-to-secure-your-smart-home-2026' },
  ];

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.svg`,
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
        {/* Hero */}
        <section className="pt-16 pb-20">
          <p className="text-sm text-emerald-400 font-mono tracking-wide uppercase mb-4">
            Your Privacy Matters
          </p>

          <h1 className="font-body text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5 text-white">
            Stay safe online{' '}
            <span className="font-body italic text-gray-400">with confidence</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
            Expert VPN reviews, security tool comparisons, and privacy guides
            to protect your digital life.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/shop" className="btn-primary text-center">Browse Security Tools</Link>
            <Link href="/guides" className="btn-secondary text-center">Read VPN Reviews</Link>
          </div>
        </section>

        {/* Ad banner between hero and products */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-4" />

        {/* Trending Products */}
        <TrendingProducts />

        {/* Editor&apos;s Picks */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Expert Picks</h2>
              <p className="text-sm text-gray-400 mt-1">Hand-selected reviews by our security team</p>
            </div>
            <Link href="/guides" className="text-sm text-gray-500 hover:text-white font-medium transition-colors">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {editorPicks.map(g => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </section>

        {/* Ad banner */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-4" />

        {/* Shop by Category */}
        <ShopByCategory />

        {/* Newsletter */}
        <section className="mb-20">
          <NewsletterCTA />
        </section>

        {/* Featured Guides Gallery */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Popular Reviews</h2>
              <p className="text-sm text-gray-400 mt-1">Our most-read security guides this week</p>
            </div>
            <Link href="/guides"
              className="text-sm text-gray-500 hover:text-white font-medium transition-colors">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {featuredGuides.map((pin, i) => (
              <Link key={i} href={pin.url} className="group relative rounded-xl overflow-hidden aspect-[2/3] block">
                <SafeImage
                  src={pin.image}
                  alt={pin.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-body font-bold text-white text-sm leading-tight">
                    {pin.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
