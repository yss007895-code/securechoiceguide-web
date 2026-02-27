import { batch12Content } from './guides-content-batch12.ts';
import { newGuidesContent } from './guides-content-new.ts';
import { guidesContentBatch2 } from './guides-content-batch2.ts';
import { guidesContentBatch3 as _raw3 } from './guides-content-batch3.ts';
import { guidesContentPhase4 } from './guides-content-phase4.ts';
import { guidesContentNew40Part1 } from './guides-content-new40-part1.ts';
import { guidesContentNew40Part2 } from './guides-content-new40-part2.ts';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

export function normalizeBatch(raw: Record<string, unknown>): Record<string, ContentSection[]> {
  const result: Record<string, ContentSection[]> = {};
  for (const [slug, data] of Object.entries(raw)) {
    if (Array.isArray(data)) {
      result[slug] = data as ContentSection[];
    } else {
      const obj = data as { sections?: ContentSection[]; faq?: { question: string; answer: string }[]; ctaText?: string };
      const sections: ContentSection[] = [...(obj.sections || [])];
      if (obj.faq?.length) {
        sections.push({
          heading: 'Frequently Asked Questions',
          paragraphs: obj.faq.map(f => `Q: ${f.question}\n\nA: ${f.answer}`)
        });
      }
      if (obj.ctaText) {
        sections.push({ heading: 'Bottom Line', paragraphs: [obj.ctaText] });
      }
      result[slug] = sections;
    }
  }
  return result;
}

const guidesContentBatch3 = normalizeBatch(_raw3 as Record<string, unknown>);

export const guidesContent: Record<string, ContentSection[]> = {
  ...batch12Content,
  ...newGuidesContent,
  ...guidesContentBatch2,
  ...guidesContentBatch3,
  ...guidesContentPhase4,
  ...guidesContentNew40Part1,
  ...guidesContentNew40Part2,
};
