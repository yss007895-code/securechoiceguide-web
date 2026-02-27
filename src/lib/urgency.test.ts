import { describe, it } from 'node:test';
import assert from 'node:assert';
import { getUrgencyText, getBuyCount } from './urgency.ts';

describe('Urgency Logic', () => {
  const knownMessages = [
    'Selling fast',
    'Popular pick',
    'Trending now',
    'Reader favorite',
    'Top rated',
  ];

  describe('getUrgencyText', () => {
    it('should return a string', () => {
      const result = getUrgencyText('Test Product');
      assert.strictEqual(typeof result, 'string');
    });

    it('should return one of the known urgency messages', () => {
      const result = getUrgencyText('Test Product');
      assert.ok(knownMessages.includes(result));
    });

    it('should be deterministic', () => {
      const input = 'Stable Product Name';
      const result1 = getUrgencyText(input);
      const result2 = getUrgencyText(input);
      assert.strictEqual(result1, result2);
    });

    it('should handle different inputs differently (likely)', () => {
      // Note: Hash collisions are possible, but with 5 options, it's likely different
      // We'll just test that it produces valid output for multiple inputs
      const inputs = ['A', 'B', 'C', 'D', 'E', 'F'];
      inputs.forEach(input => {
        const result = getUrgencyText(input);
        assert.ok(knownMessages.includes(result));
      });
    });

    it('should handle empty string', () => {
      const result = getUrgencyText('');
      assert.ok(knownMessages.includes(result));
    });

    it('should handle special characters', () => {
      const result = getUrgencyText('Product #1 & 2!');
      assert.ok(knownMessages.includes(result));
    });
  });

  describe('getBuyCount', () => {
    it('should return a number', () => {
      const result = getBuyCount('Test Product');
      assert.strictEqual(typeof result, 'number');
    });

    it('should return a value between 8 and 49 inclusive', () => {
      // 8 + (hash % 42) -> min 8, max 8 + 41 = 49
      for (let i = 0; i < 100; i++) {
        const result = getBuyCount(`Product ${i}`);
        assert.ok(result >= 8);
        assert.ok(result <= 49);
      }
    });

    it('should be deterministic', () => {
      const input = 'Stable Product Name';
      const result1 = getBuyCount(input);
      const result2 = getBuyCount(input);
      assert.strictEqual(result1, result2);
    });

    it('should handle empty string', () => {
      const result = getBuyCount('');
      assert.strictEqual(typeof result, 'number');
      assert.ok(result >= 8 && result <= 49);
    });
  });
});
