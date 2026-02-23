'use client';
import { useState, useMemo } from 'react';
import type { AffiliateProduct } from '@/lib/guides-data';

type ProductWithSource = AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category?: string };

interface ShopPageClientProps {
  products: ProductWithSource[];
  categories: { slug: string; name: string }[];
}

export default function ShopPageClient({ products, categories }: ShopPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (activeCategory === 'all') return true;
      return p.category === activeCategory;
    });
  }, [products, activeCategory]);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-6">
        {categories.map(cat => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeCategory === cat.slug
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-300 hover:border-emerald-400 hover:text-emerald-600'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Review List - G2 / TechRadar Style */}
      <div className="space-y-6">
        {filtered.map((p, i) => (
          <div key={`${p.name}-${i}`} className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            {/* Rank Badge */}
            <div className="absolute top-0 left-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg z-10">
              #{i + 1} Rated
            </div>

            {/* Image / Logo */}
            <div className="w-full md:w-48 h-32 flex-shrink-0 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center p-4 relative mt-4 md:mt-0">
              <img
                src={p.image || 'https://placehold.co/400x300?text=Security+Logo'}
                alt={p.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300?text=Image_Fallback'; }}
              />
            </div>
            
            {/* Details */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span>{p.brand}</span>
                  </p>
                </div>
                {p.tag && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-800 uppercase tracking-wide whitespace-nowrap border border-amber-200">
                    {p.tag}
                  </span>
                )}
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div>
                  <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Starting Price</span>
                  <span className="font-semibold text-gray-900 text-base">{p.price}</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Protection Level</span>
                  <span className="font-medium text-gray-700">Military-Grade Encryption</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="w-full md:w-48 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-5 md:pt-0 md:pl-6">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="w-full text-center px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm transition-colors"
              >
                Get Discount
              </a>
              <p className="text-[11px] text-center text-gray-400 mt-3 font-medium">
                🛡️ Secure Affiliate Link
              </p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">No products found for this category.</div>
        )}
      </div>
    </div>
  );
}
