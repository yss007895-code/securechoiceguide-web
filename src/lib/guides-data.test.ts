import { test, describe } from 'node:test';
import * as assert from 'node:assert';
import { getAllProducts, getProductsByCategory, guides } from './guides-data.ts';

describe('guides-data product extraction', () => {
  test('getAllProducts returns unique products with metadata', () => {
    const products = getAllProducts();
    assert.ok(products.length > 0, 'Should return products');

    // Check structure
    const first = products[0];
    assert.ok(first.name, 'Product should have a name');
    assert.ok(first.brand, 'Product should have a brand');
    assert.ok(first.fromGuide, 'Product should have fromGuide');
    assert.ok(first.fromGuideSlug, 'Product should have fromGuideSlug');
    assert.ok(first.category, 'Product should have category');

    // Check uniqueness logic (name|brand)
    const seen = new Set<string>();
    for (const p of products) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) {
        assert.fail(`Duplicate product found: ${key}`);
      }
      seen.add(key);
    }
  });

  test('getProductsByCategory returns correct products for a category', () => {
    // Pick a category that has guides, e.g., 'vpn-reviews'
    const category = 'vpn-reviews';
    // Use a large count to get all products in that category
    const products = getProductsByCategory(category, 100);

    assert.ok(products.length > 0, 'Should return products for vpn-reviews');

    for (const p of products) {
      assert.strictEqual(p.category, category, `Product category ${p.category} should match requested ${category}`);
    }
  });

  test('getProductsByCategory limits results based on count', () => {
    const count = 2;
    // 'all' category should return from any category
    const products = getProductsByCategory('all', count);
    assert.strictEqual(products.length, count, 'Should limit the number of returned products');
  });
});
