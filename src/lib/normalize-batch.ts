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
