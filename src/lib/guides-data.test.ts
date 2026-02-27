
import { getProductsByCategory, categories } from './guides-data.ts';
import assert from 'node:assert';
import { test } from 'node:test';

test('getProductsByCategory correctness', async (t) => {
  await t.test('returns expected structure', () => {
    const products = getProductsByCategory('all', 1);
    assert(products.length > 0);
    const p = products[0];
    assert.strictEqual(typeof p.name, 'string');
    assert.strictEqual(typeof p.fromGuide, 'string');
    assert.strictEqual(typeof p.fromGuideSlug, 'string');
    assert.strictEqual(typeof p.category, 'string');
  });

  await t.test('respects count parameter', () => {
    const products = getProductsByCategory('all', 2);
    assert.strictEqual(products.length, 2);
  });

  await t.test('returns consistent results (cache consistency)', () => {
    const products1 = getProductsByCategory('all', 5);
    const products2 = getProductsByCategory('all', 5);
    assert.deepStrictEqual(products1, products2);
  });

  await t.test('handles non-existent categories gracefully (empty array)', () => {
    const products = getProductsByCategory('non-existent-category', 5);
    assert.strictEqual(products.length, 0);
  });

  await t.test('different categories return different results', () => {
    const secProducts = getProductsByCategory('security', 5);
    const finProducts = getProductsByCategory('finance', 5);

    // Assuming we have products in both
    if (secProducts.length > 0 && finProducts.length > 0) {
      assert.notDeepStrictEqual(secProducts[0], finProducts[0]);
    }
  });

  await t.test('cache handles limit parameter correctly', () => {
      // First call primes the cache
      const productsAll = getProductsByCategory('security', 100);
      const totalLen = productsAll.length;

      // Second call should slice from cache
      const productsLimited = getProductsByCategory('security', 2);
      assert.strictEqual(productsLimited.length, 2);

      // Third call with larger limit should still work if cache has enough (or re-compute if cache logic was flawed but here cache stores all)
      // Our implementation stores ALL products for the category in cache, then slices on return.
      const productsMore = getProductsByCategory('security', 4);
      assert.strictEqual(productsMore.length, 4);
      assert.deepStrictEqual(productsMore.slice(0, 2), productsLimited);
  });
});
