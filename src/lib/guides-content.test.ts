import { test, describe, it } from 'node:test';
import assert from 'node:assert';
import { normalizeBatch } from './normalize-batch.ts';

describe('normalizeBatch', () => {
  it('should handle direct array input (legacy format)', () => {
    const raw = {
      'legacy-slug': [
        { heading: 'Intro', paragraphs: ['Para 1'] },
        { heading: 'Body', paragraphs: ['Para 2'] },
      ],
    };

    const result = normalizeBatch(raw);

    assert.deepStrictEqual(result['legacy-slug'], raw['legacy-slug']);
  });

  it('should handle object input with sections only', () => {
    const raw = {
      'obj-slug': {
        sections: [
          { heading: 'Section 1', paragraphs: ['P1'] },
        ],
      },
    };

    const result = normalizeBatch(raw);

    assert.deepStrictEqual(result['obj-slug'], [
      { heading: 'Section 1', paragraphs: ['P1'] },
    ]);
  });

  it('should transform FAQ into a content section', () => {
    const raw = {
      'faq-slug': {
        sections: [
          { heading: 'Main', paragraphs: ['Main content'] },
        ],
        faq: [
          { question: 'What is it?', answer: 'It is a test.' },
          { question: 'Why?', answer: 'To verify logic.' },
        ],
      },
    };

    const result = normalizeBatch(raw);
    const sections = result['faq-slug'];

    assert.strictEqual(sections.length, 2);
    assert.strictEqual(sections[1].heading, 'Frequently Asked Questions');
    assert.strictEqual(sections[1].paragraphs.length, 2);
    assert.strictEqual(sections[1].paragraphs[0], 'Q: What is it?\n\nA: It is a test.');
    assert.strictEqual(sections[1].paragraphs[1], 'Q: Why?\n\nA: To verify logic.');
  });

  it('should transform ctaText into a content section', () => {
    const raw = {
      'cta-slug': {
        sections: [
          { heading: 'Content', paragraphs: ['Some content'] },
        ],
        ctaText: 'Buy now!',
      },
    };

    const result = normalizeBatch(raw);
    const sections = result['cta-slug'];

    assert.strictEqual(sections.length, 2);
    assert.strictEqual(sections[1].heading, 'Bottom Line');
    assert.deepStrictEqual(sections[1].paragraphs, ['Buy now!']);
  });

  it('should handle sections, FAQ, and ctaText together', () => {
    const raw = {
      'full-slug': {
        sections: [
          { heading: 'Intro', paragraphs: ['Hi'] },
        ],
        faq: [
          { question: 'Q1', answer: 'A1' },
        ],
        ctaText: 'End',
      },
    };

    const result = normalizeBatch(raw);
    const sections = result['full-slug'];

    assert.strictEqual(sections.length, 3);
    assert.strictEqual(sections[0].heading, 'Intro');
    assert.strictEqual(sections[1].heading, 'Frequently Asked Questions');
    assert.strictEqual(sections[2].heading, 'Bottom Line');
  });

  it('should handle object input with missing sections (empty array default)', () => {
    const raw = {
      'empty-slug': {
        ctaText: 'Just CTA',
      },
    };

    const result = normalizeBatch(raw);
    const sections = result['empty-slug'];

    assert.strictEqual(sections.length, 1);
    assert.strictEqual(sections[0].heading, 'Bottom Line');
    assert.deepStrictEqual(sections[0].paragraphs, ['Just CTA']);
  });

  it('should return empty array for empty object input', () => {
      const raw = {
          'empty-obj': {}
      };

      const result = normalizeBatch(raw);
      assert.deepStrictEqual(result['empty-obj'], []);
  });
});
