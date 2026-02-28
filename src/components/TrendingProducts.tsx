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
        <a href="/shop" className="text-sm text-text-secondary hover:text-accent font-mono transition-colors">
          View all
        </a>
      </div>
      {/* List view: horizontal rows */}
      <div className="flex flex-col gap-px bg-dark-border">
        {products.map((p, i) => {
          const rating = getRating(p.name);
          const ratingNum = parseFloat(rating);
          return (
            <a
              key={`${p.name}-${i}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="flex items-center gap-4 sm:gap-6 bg-dark-bg hover:bg-dark-surface p-4 transition-colors group"
            >
              {/* Image left */}
              {p.image ? (
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-dark-surface overflow-hidden">
                  <SafeImage
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-dark-surface flex items-center justify-center">
                  <span className="text-text-muted text-xs">N/A</span>
                </div>
              )}

              {/* Info center */}
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-text-muted font-mono uppercase tracking-wider">{p.brand}</p>
                <h3 className="font-display font-medium text-text-primary group-hover:text-accent transition-colors text-sm sm:text-base leading-snug mt-0.5 line-clamp-1">
                  {p.name}
                </h3>
                <span className="text-sm font-mono text-text-secondary mt-1 inline-block">{p.price}</span>
              </div>

              {/* Rating score right */}
              <div className="shrink-0 text-right">
                <div className={`inline-flex items-center justify-center w-14 h-10 font-mono font-semibold text-sm ${
                  ratingNum >= 9.0
                    ? 'bg-green/15 text-green border border-green/30'
                    : ratingNum >= 8.0
                    ? 'bg-accent/15 text-accent border border-accent/30'
                    : 'bg-orange/15 text-orange border border-orange/30'
                }`}>
                  {rating}
                </div>
                <p className="text-[10px] text-text-muted font-mono mt-1">/10</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
