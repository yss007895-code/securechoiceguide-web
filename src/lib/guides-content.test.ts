import { test, describe, it } from 'node:test';
import assert from 'node:assert';
import { normalizeBatch } from './utils/normalize.ts';

describe('normalizeBatch', () => {
  it('should pass through array data as is', () => {
    const input = {
      'slug-1': [
        { heading: 'Section 1', paragraphs: ['p1'] }
      ]
    };
    const result = normalizeBatch(input);
    assert.deepStrictEqual(result, input);
  });

  it('should normalize object with only sections', () => {
    const input = {
      'slug-2': {
        sections: [
          { heading: 'Section 2', paragraphs: ['p2'] }
        ]
      }
    };
    const result = normalizeBatch(input);
    assert.deepStrictEqual(result['slug-2'], input['slug-2'].sections);
  });

  it('should normalize object with FAQ', () => {
    const input = {
      'slug-3': {
        sections: [
          { heading: 'Intro', paragraphs: ['intro'] }
        ],
        faq: [
          { question: 'What is it?', answer: 'It is a test.' }
        ]
      }
    };
    const result = normalizeBatch(input);
    const expected = [
      { heading: 'Intro', paragraphs: ['intro'] },
      {
        heading: 'Frequently Asked Questions',
        paragraphs: ['Q: What is it?\n\nA: It is a test.']
      }
    ];
    assert.deepStrictEqual(result['slug-3'], expected);
  });

  it('should normalize object with ctaText', () => {
    const input = {
      'slug-4': {
        sections: [],
        ctaText: 'Buy now!'
      }
    };
    const result = normalizeBatch(input);
    const expected = [
      { heading: 'Bottom Line', paragraphs: ['Buy now!'] }
    ];
    assert.deepStrictEqual(result['slug-4'], expected);
  });

  it('should normalize object with sections, FAQ, and ctaText', () => {
    const input = {
      'slug-5': {
        sections: [{ heading: 'S1', paragraphs: ['P1'] }],
        faq: [{ question: 'Q1', answer: 'A1' }],
        ctaText: 'Click here'
      }
    };
    const result = normalizeBatch(input);
    const expected = [
      { heading: 'S1', paragraphs: ['P1'] },
      {
        heading: 'Frequently Asked Questions',
        paragraphs: ['Q: Q1\n\nA: A1']
      },
      { heading: 'Bottom Line', paragraphs: ['Click here'] }
    ];
    assert.deepStrictEqual(result['slug-5'], expected);
  });

  it('should handle empty input', () => {
    const result = normalizeBatch({});
    assert.deepStrictEqual(result, {});
  });

  it('should handle empty object structure', () => {
     const input = {
      'slug-6': {}
    };
    const result = normalizeBatch(input);
    assert.deepStrictEqual(result['slug-6'], []);
  });
});
