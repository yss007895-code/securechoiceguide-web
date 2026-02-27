import { batch12Content } from './guides-content-batch12';
import { newGuidesContent } from './guides-content-new';
import { guidesContentBatch2 } from './guides-content-batch2';
import { guidesContentBatch3 as _raw3 } from './guides-content-batch3';
import { guidesContentPhase4 } from './guides-content-phase4';
import { guidesContentNew40Part1 } from './guides-content-new40-part1';
import { guidesContentNew40Part2 } from './guides-content-new40-part2';
import { normalizeBatch, ContentSection } from './utils/normalize';

// Re-export for backward compatibility if needed, or just use it here
export { normalizeBatch, type ContentSection };

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
