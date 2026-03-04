import type { Metadata } from 'next';
import Link from 'next/link';
import { guides, getGuideBySlug, getRelatedGuides } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import GuideCard from '@/components/GuideCard';
import SafeImage from '@/components/SafeImage';
import AdUnit from '@/components/AdUnit';
import ShareButtons from '@/components/ShareButtons';
import AffiliateDisclosureBanner from '@/components/AffiliateDisclosureBanner';

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return { title: 'Guide Not Found' };
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `${SITE_URL}/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${SITE_URL}/guides/${guide.slug}`,
      type: 'article',
      images: guide.image ? [{ url: guide.image, width: 1200, height: 630, alt: guide.title }] : [],
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Guide Not Found</h1>
        <p className="text-gray-500 mt-2">The guide you are looking for does not exist.</p>
        <Link href="/guides" className="btn-primary inline-block mt-6">Browse All Guides</Link>
      </div>
    );
  }

  const related = getRelatedGuides(guide.slug, 3);
  const categoryLabel = guide.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const pageUrl = `${SITE_URL}/guides/${guide.slug}`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.date,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    image: guide.image || '',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: pageUrl },
    ],
  };

  const productJsonLd = guide.affiliateProducts.map(p => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    brand: { '@type': 'Brand', name: p.brand },
    review: {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: p.rating, bestRating: 10 },
      author: { '@type': 'Organization', name: SITE_NAME },
    },
    offers: {
      '@type': 'Offer',
      price: p.price.replace(/[^0-9.]/g, ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: p.url,
    },
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {productJsonLd.map((pj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pj) }} />
      ))}

      <article className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400 font-display mt-6 mb-6">
          <Link href="/" className="hover:text-navy-500 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-navy-500 transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-gray-600">{categoryLabel}</span>
        </nav>

        {/* Hero */}
        <header className="mb-8">
          <span className="badge-new mb-3">{guide.tag}</span>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mt-2">
            {guide.title}
          </h1>
          <p className="text-gray-500 mt-3 text-base leading-relaxed">{guide.description}</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400 font-display">
            <time dateTime={guide.date}>{new Date(guide.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{guide.readTime}</span>
            {guide.affiliateProducts.length > 0 && (
              <>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{guide.affiliateProducts.length} products reviewed</span>
              </>
            )}
          </div>
        </header>

        {/* Hero Image */}
        {guide.image && (
          <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-sm bg-surface-light">
            <SafeImage src={guide.image} alt={guide.title} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" priority />
          </div>
        )}

        {/* Ad Slot - Header */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-8" />

        {/* Table of Contents */}
        <nav className="bg-surface-light border border-surface-border rounded-sm p-5 mb-8">
          <h2 className="font-display font-bold text-sm text-gray-900 mb-3">Table of Contents</h2>
          <ol className="space-y-1.5">
            {guide.sections.map((s, i) => (
              <li key={i}>
                <a href={`#section-${i}`} className="text-sm text-navy-500 hover:text-navy-700 hover:underline font-display transition-colors">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
            {guide.affiliateProducts.length > 0 && (
              <li>
                <a href="#comparison-table" className="text-sm text-navy-500 hover:text-navy-700 hover:underline font-display transition-colors">
                  {guide.sections.length + 1}. Product Comparison
                </a>
              </li>
            )}
          </ol>
        </nav>

        {/* Article Sections */}
        <div className="prose-style">
          {guide.sections.map((s, i) => (
            <section key={i} id={`section-${i}`} className="mb-8">
              <h2>{s.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: s.content }} />
            </section>
          ))}
        </div>

        {/* Product Comparison Table */}
        {guide.affiliateProducts.length > 0 && (
          <section id="comparison-table" className="mb-10">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Product Comparison</h2>
            <div className="overflow-x-auto border border-surface-border rounded-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy-500 text-white">
                    <th className="px-4 py-3 text-left font-display font-semibold">Product</th>
                    <th className="px-4 py-3 text-center font-display font-semibold">Rating</th>
                    <th className="px-4 py-3 text-center font-display font-semibold">Price</th>
                    <th className="px-4 py-3 text-left font-display font-semibold hidden md:table-cell">Pros</th>
                    <th className="px-4 py-3 text-left font-display font-semibold hidden md:table-cell">Cons</th>
                    <th className="px-4 py-3 text-center font-display font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {guide.affiliateProducts.map((p, i) => (
                    <tr key={i} className="hover:bg-surface-light transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {p.image && (
                            <div className="relative w-10 h-10 shrink-0 bg-surface-muted overflow-hidden rounded-sm">
                              <SafeImage src={p.image} alt={p.name} fill sizes="40px" className="object-cover" />
                            </div>
                          )}
                          <div>
                            {p.badge && <span className="text-[10px] font-display font-semibold text-navy-500 uppercase">{p.badge}</span>}
                            <p className="font-display font-semibold text-gray-900 text-sm leading-tight">{p.name}</p>
                            <p className="text-xs text-gray-400">{p.brand}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center justify-center w-10 h-8 rounded text-white text-xs font-bold ${p.rating >= 9 ? 'bg-emerald-600' : p.rating >= 8 ? 'bg-navy-500' : 'bg-amber-500'}`}>
                          {p.rating}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center font-display font-semibold text-gray-900">{p.price}</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <ul className="space-y-0.5">
                          {p.pros.slice(0, 2).map((pro, j) => (
                            <li key={j} className="text-xs text-gray-600 flex items-start gap-1">
                              <span className="text-emerald-500 mt-0.5">+</span> {pro}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <ul className="space-y-0.5">
                          {p.cons.slice(0, 2).map((con, j) => (
                            <li key={j} className="text-xs text-gray-600 flex items-start gap-1">
                              <span className="text-red-400 mt-0.5">-</span> {con}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                          className="inline-block bg-navy-500 text-white text-xs font-display font-semibold px-3 py-2 hover:bg-navy-700 transition-colors rounded-sm"
                        >
                          Check Price
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Individual Product Cards */}
        {guide.affiliateProducts.length > 0 && (
          <section className="mb-10">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Detailed Product Reviews</h2>
            <div className="space-y-6">
              {guide.affiliateProducts.map((p, i) => (
                <div key={i} className="border border-surface-border rounded-sm p-5 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row gap-5">
                    {p.image && (
                      <div className="relative w-full sm:w-32 h-32 shrink-0 bg-surface-light overflow-hidden rounded-sm">
                        <SafeImage src={p.image} alt={p.name} fill sizes="128px" className="object-cover" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          {p.badge && <span className="text-xs font-display font-semibold text-navy-500 uppercase">{p.badge}</span>}
                          <h3 className="font-display font-bold text-gray-900 text-lg">{p.name}</h3>
                          <p className="text-sm text-gray-400">{p.brand}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className={`inline-flex items-center justify-center w-12 h-10 rounded text-white font-bold ${p.rating >= 9 ? 'bg-emerald-600' : p.rating >= 8 ? 'bg-navy-500' : 'bg-amber-500'}`}>
                            {p.rating}
                          </span>
                          <p className="text-xs text-gray-400 mt-0.5">/ 10</p>
                        </div>
                      </div>
                      <p className="font-display font-bold text-lg text-gray-900 mt-2">{p.price}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                        <div>
                          <p className="text-xs font-display font-semibold text-emerald-600 uppercase mb-1">Pros</p>
                          <ul className="space-y-1">
                            {p.pros.map((pro, j) => (
                              <li key={j} className="text-sm text-gray-600 flex items-start gap-1.5">
                                <span className="text-emerald-500 mt-0.5">+</span> {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-display font-semibold text-red-500 uppercase mb-1">Cons</p>
                          <ul className="space-y-1">
                            {p.cons.map((con, j) => (
                              <li key={j} className="text-sm text-gray-600 flex items-start gap-1.5">
                                <span className="text-red-400 mt-0.5">-</span> {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow sponsored"
                        className="inline-block mt-4 bg-navy-500 text-white text-sm font-display font-semibold px-6 py-2.5 hover:bg-navy-700 transition-colors rounded-sm"
                      >
                        Check Price on Amazon
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Mid-Article Ad */}
        <AdUnit slot="8863913673" format="rectangle" className="mb-10" />

        {/* Affiliate Disclosure */}
        <AffiliateDisclosureBanner />

        {/* Share */}
        <div className="mt-8 mb-10">
          <ShareButtons url={pageUrl} title={guide.title} />
        </div>

        {/* Related Guides */}
        {related.length > 0 && (
          <section className="mb-16">
            <h2 className="section-title mb-6">Related Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(g => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
