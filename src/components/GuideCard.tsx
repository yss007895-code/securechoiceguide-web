import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import type { StyleGuide } from '@/lib/guides-data';

export default function GuideCard({ guide, index }: { guide: StyleGuide; index?: number }) {
  const num = index !== undefined ? String(index + 1).padStart(2, '0') : null;

  return (
    <Link href={`/guides/${guide.slug}`} className="group block border border-dark-border hover:border-accent/40 transition-colors bg-dark-surface">
      {guide.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-dark-bg">
          <SafeImage
            src={guide.image}
            alt={guide.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-mono font-medium text-accent bg-dark-bg/90 px-2.5 py-1 border border-dark-border">
              {guide.tag}
            </span>
          </div>
          {num && (
            <div className="absolute top-3 right-3">
              <span className="font-mono text-lg font-semibold text-green bg-dark-bg/90 px-2 py-0.5 border border-dark-border">
                {num}
              </span>
            </div>
          )}
        </div>
      )}
      <div className="p-5">
        <h3 className="font-display font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">
          {guide.title}
        </h3>
        <p className="text-sm text-text-secondary line-clamp-2 mt-2">{guide.description}</p>
        <div className="flex items-center gap-3 mt-3 text-xs font-mono text-text-muted">
          <span>{guide.readTime}</span>
          {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
            <>
              <span className="text-dark-border">|</span>
              <span>{guide.affiliateProducts.length} tools reviewed</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
