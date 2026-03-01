import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import type { StyleGuide } from '@/lib/guides-data';

export default function GuideCard({ guide, index }: { guide: StyleGuide; index?: number }) {
  const num = index !== undefined ? String(index + 1).padStart(2, '0') : null;

  return (
    <Link href={`/guides/${guide.slug}`} className="group block border border-surface-border hover:shadow-md transition-shadow duration-200 rounded-sm bg-white overflow-hidden">
      {guide.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-light">
          <SafeImage
            src={guide.image}
            alt={guide.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-0 left-0">
            <span className="text-xs font-display font-semibold text-white bg-navy-500 px-3 py-1.5">
              {guide.tag}
            </span>
          </div>
          {num && (
            <div className="absolute top-2 right-2">
              <span className="font-display text-sm font-bold text-white bg-navy-900/80 w-8 h-8 flex items-center justify-center">
                {num}
              </span>
            </div>
          )}
        </div>
      )}
      <div className="p-4">
        <h3 className="font-display font-bold text-gray-900 group-hover:text-navy-500 transition-colors leading-snug">
          {guide.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mt-2">{guide.description}</p>
        <div className="flex items-center gap-3 mt-3 text-xs font-display text-gray-400">
          <span>{guide.readTime}</span>
          {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>{guide.affiliateProducts.length} tools reviewed</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
