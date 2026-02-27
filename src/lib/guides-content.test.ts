
import assert from 'node:assert';
import test from 'node:test';
import { normalizeBatch } from './guides-content.ts';

test('normalizeBatch - handles array data (direct ContentSection[])', () => {
  const input = {
    'guide-1': [
      { heading: 'Section 1', paragraphs: ['p1'] },
      { heading: 'Section 2', paragraphs: ['p2', 'p3'] }
    ]
  };

  const expected = {
    'guide-1': [
      { heading: 'Section 1', paragraphs: ['p1'] },
      { heading: 'Section 2', paragraphs: ['p2', 'p3'] }
    ]
  };

  const result = normalizeBatch(input);
  assert.deepStrictEqual(result, expected);
});

test('normalizeBatch - handles object data with sections', () => {
  const input = {
    'guide-2': {
      sections: [
        { heading: 'Intro', paragraphs: ['Welcome'] }
      ]
    }
  };

  const expected = {
    'guide-2': [
      { heading: 'Intro', paragraphs: ['Welcome'] }
    ]
  };

  const result = normalizeBatch(input);
  assert.deepStrictEqual(result, expected);
});

test('normalizeBatch - handles object data with FAQ', () => {
  const input = {
    'guide-3': {
      sections: [],
      faq: [
        { question: 'What is it?', answer: 'It is a test.' },
        { question: 'Why?', answer: 'Because testing is good.' }
      ]
    }
  };

  const expected = {
    'guide-3': [
      {
        heading: 'Frequently Asked Questions',
        paragraphs: [
          'Q: What is it?\n\nA: It is a test.',
          'Q: Why?\n\nA: Because testing is good.'
        ]
      }
    ]
  };

  const result = normalizeBatch(input);
  assert.deepStrictEqual(result, expected);
});

test('normalizeBatch - handles object data with ctaText', () => {
  const input = {
    'guide-4': {
      sections: [{ heading: 'Main', paragraphs: ['Content'] }],
      ctaText: 'Buy now!'
    }
  };

  const expected = {
    'guide-4': [
      { heading: 'Main', paragraphs: ['Content'] },
      { heading: 'Bottom Line', paragraphs: ['Buy now!'] }
    ]
  };

  const result = normalizeBatch(input);
  assert.deepStrictEqual(result, expected);
});

test('normalizeBatch - handles object data with sections, FAQ, and ctaText combined', () => {
  const input = {
    'guide-full': {
      sections: [{ heading: 'Start', paragraphs: ['Starting'] }],
      faq: [{ question: 'Q1', answer: 'A1' }],
      ctaText: 'The End'
    }
  };

  const expected = {
    'guide-full': [
      { heading: 'Start', paragraphs: ['Starting'] },
      { heading: 'Frequently Asked Questions', paragraphs: ['Q: Q1\n\nA: A1'] },
      { heading: 'Bottom Line', paragraphs: ['The End'] }
    ]
  };

  const result = normalizeBatch(input);
  assert.deepStrictEqual(result, expected);
});

test('normalizeBatch - handles empty object', () => {
  const input = {};
  const expected = {};
  const result = normalizeBatch(input);
  assert.deepStrictEqual(result, expected);
});

test('normalizeBatch - handles object with no sections, faq, or ctaText', () => {
  const input = {
    'guide-empty': {}
  };

  // Based on the implementation:
  // const sections: ContentSection[] = [...(obj.sections || [])];
  // if (obj.faq?.length) ...
  // if (obj.ctaText) ...
  // returns sections (which is empty array)

  const expected = {
    'guide-empty': []
  };

  const result = normalizeBatch(input);
  assert.deepStrictEqual(result, expected);
});
