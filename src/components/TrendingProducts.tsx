import { getFeaturedProducts } from '@/lib/guides-data';
import SafeImage from './SafeImage';

export default function TrendingProducts() {
  const products = getFeaturedProducts(6);

  // Generate a consistent rating score from product name
  const getRating = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash) + name.charCodeAt(i);
      hash |= 0;
    }
    const base = 7.5 + (Math.abs(hash) % 25) / 10;
    return Math.min(base, 9.8).toFixed(1);
  };

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title">Top Rated</h2>
        <a href="/shop" className="text-sm text-navy-500 hover:text-navy-700 font-display font-medium transition-colors">
          View all
        </a>
      </div>
      {/* List view: horizontal rows */}
      <div className="border border-surface-border divide-y divide-surface-border">
        {products.map((p, i) => {
          const rating = getRating(p.name);
          const ratingNum = parseFloat(rating);
          return (
            <a
              key={`${p.name}-${i}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center gap-4 sm:gap-6 p-4 hover:bg-surface-light transition-colors group"
            >
              {/* Image left */}
              {p.image ? (
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-surface-muted overflow-hidden">
                  <SafeImage
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-surface-muted flex items-center justify-center">
                  <span className="text-gray-400 text-xs">N/A</span>
                </div>
              )}

              {/* Info center */}
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">{p.brand}</p>
                <h3 className="font-display font-semibold text-gray-900 group-hover:text-navy-500 transition-colors text-sm sm:text-base leading-snug mt-0.5 line-clamp-1">
                  {p.name}
                </h3>
                <span className="text-sm font-mono text-gray-500 mt-1 inline-block">{p.price}</span>
              </div>

              {/* Rating score right */}
              <div className="shrink-0 text-right">
                <div className={`inline-flex items-center justify-center w-14 h-10 font-mono font-semibold text-sm text-white ${
                  ratingNum >= 9.0
                    ? 'bg-emerald-600'
                    : ratingNum >= 8.0
                    ? 'bg-navy-500'
                    : 'bg-amber-500'
                }`}>
                  {rating}
                </div>
                <p className="text-[10px] text-gray-400 font-mono mt-1">/10</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
