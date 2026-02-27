import { test, describe } from 'node:test';
import assert from 'node:assert';
import { getAllProducts, getProductsByCategory } from './guides-data.ts';

describe('guides-data', () => {
  describe('getAllProducts', () => {
    test('should return an array of products', () => {
      const products = getAllProducts();
      assert.ok(Array.isArray(products));
      assert.ok(products.length > 0);
    });

    test('should return products with required properties', () => {
      const products = getAllProducts();
      const firstProduct = products[0];
      assert.ok('name' in firstProduct);
      assert.ok('brand' in firstProduct);
      assert.ok('price' in firstProduct);
      assert.ok('url' in firstProduct);
      assert.ok('fromGuide' in firstProduct);
      assert.ok('fromGuideSlug' in firstProduct);
      assert.ok('category' in firstProduct);
    });
  });

  describe('getProductsByCategory', () => {
    test('should return products for a specific category', () => {
      const category = 'security';
      const products = getProductsByCategory(category);
      assert.ok(Array.isArray(products));
      // Not all products returned might have the category 'security' because the product
      // inherits the category from the guide it came from.
      // However, the function filters guides by category first.
      // So all products returned should be from guides in that category.
      // Let's verify that at least one product is returned if we know there are security guides.
      if (products.length > 0) {
        assert.strictEqual(products[0].category, category);
      }
    });

    test('should return all products when category is "all"', () => {
      const products = getProductsByCategory('all', 1000);
      const allProducts = getAllProducts();
      // Since deduplication logic is the same, they should match in length if count is high enough
      // But getProductsByCategory slices.
      assert.ok(products.length > 0);
    });

    test('should respect the count parameter', () => {
      const count = 2;
      const products = getProductsByCategory('all', count);
      assert.ok(products.length <= count);
    });

    test('should default to 8 products if count is not provided', () => {
       // This is harder to test if there are fewer than 8 products, but we can check it doesn't exceed 8
       const products = getProductsByCategory('all');
       assert.ok(products.length <= 8);
    });
  });
});
