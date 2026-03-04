import type { Metadata } from 'next';
import Link from 'next/link';
import { guides, categories } from '@/lib/guides-data';
import { SITE_URL } from '@/lib/constants';
import GuideCard from '@/components/GuideCard';

export const metadata: Metadata = {
  title: 'Security Reviews & Guides',
  description: 'Expert reviews and buyer\'s guides for home security, cybersecurity, personal safety, and car safety products.',
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: 'Security Reviews & Guides | SecureChoiceGuide',
    description: 'Expert reviews and buyer\'s guides for home security, cybersecurity, personal safety, and car safety products.',
    url: `${SITE_URL}/guides`,
  },
};

export default function GuidesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-12 sm:py-16 text-center bg-navy-700 text-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-bold">Security Reviews &amp; Guides</h1>
        <p className="text-navy-200 mt-3 max-w-2xl mx-auto">In-depth, independently tested reviews to help you find the right security solutions.</p>
      </section>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <span className="px-4 py-2 text-sm font-display font-semibold bg-navy-500 text-white rounded-sm">All</span>
        {categories.map(cat => (
          <span key={cat.slug} className="px-4 py-2 text-sm font-display font-medium text-gray-600 bg-surface-muted hover:bg-surface-border rounded-sm cursor-pointer transition-colors">
            {cat.name}
          </span>
        ))}
      </div>

      {/* Featured (first 3) */}
      <section className="mb-14">
        <h2 className="section-title mb-6">Featured Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.slice(0, 3).map((g, i) => (
            <GuideCard key={g.slug} guide={g} index={i} />
          ))}
        </div>
      </section>

      {/* All Guides */}
      <section className="mb-16">
        <h2 className="section-title mb-6">All Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map(g => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mb-16">
        <h2 className="section-title mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(cat => (
            <div key={cat.slug} className="border border-surface-border rounded-sm p-5 hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-gray-900 mb-2">{cat.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{cat.description}</p>
              <span className="text-sm text-navy-500 font-display font-medium">
                {guides.filter(g => g.category === cat.slug).length} reviews
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
          ],
        }) }}
      />
    </div>
  );
}
