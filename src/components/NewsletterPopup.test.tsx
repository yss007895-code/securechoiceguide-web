
import React from 'react';
import { test, before, after, beforeEach } from 'node:test';
import assert from 'node:assert';
import { JSDOM } from 'jsdom';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import NewsletterPopup from './NewsletterPopup';

// Ensure React is available globally for JSX transformation if needed,
// though importing it should be enough.
// The error `React is not defined` usually means the component file uses JSX but doesn't import React,
// OR the test runner environment doesn't provide the React global for the transformed JSX code.
// Since Next.js uses the new JSX transform, explicit React import isn't needed in components,
// but our test runner (tsx/node) might be using the classic transform or expecting React to be in scope.
global.React = React;

// Setup JSDOM
const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost'
});
global.document = dom.window.document;
global.window = dom.window;
// @ts-ignore
global.Node = dom.window.Node;
global.MouseEvent = dom.window.MouseEvent;

// Mock sessionStorage
const sessionStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    key: (index: number) => Object.keys(store)[index] || null,
    length: 0
  };
})();

Object.defineProperty(global.window, 'sessionStorage', {
  value: sessionStorageMock
});
global.sessionStorage = sessionStorageMock;

// Helper to reset environment
beforeEach(() => {
  cleanup();
  window.sessionStorage.clear();
  document.body.innerHTML = '';
});

test('shows popup after timer', async (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });

  const { getByRole, queryByRole } = render(<NewsletterPopup />);

  // Should not be visible initially
  const popup = queryByRole('dialog');
  assert.strictEqual(popup, null);

  // Advance timer
  // Wrap in act because state update follows
  act(() => {
    t.mock.timers.tick(30000);
  });

  // Should be visible
  const visiblePopup = getByRole('dialog');
  assert.ok(visiblePopup);

  cleanup();
});

test('shows popup on exit intent', () => {
  const { getByRole } = render(<NewsletterPopup />);

  // Trigger mouseleave at top of viewport
  act(() => {
      const event = new MouseEvent('mouseleave', {
        clientY: 0,
        bubbles: true
      });
      document.dispatchEvent(event);
  });

  const popup = getByRole('dialog');
  assert.ok(popup);
});

test('does not show popup on exit intent if cursor is not at top', () => {
  const { queryByRole } = render(<NewsletterPopup />);

  // Trigger mouseleave lower in viewport
  act(() => {
      const event = new MouseEvent('mouseleave', {
        clientY: 10,
        bubbles: true
      });
      document.dispatchEvent(event);
  });

  const popup = queryByRole('dialog');
  assert.strictEqual(popup, null);
});

test('dismissal logic', () => {
  const { getByRole, getByText, queryByRole } = render(<NewsletterPopup />);

  // Trigger visibility
  act(() => {
      const event = new MouseEvent('mouseleave', { clientY: 0, bubbles: true });
      document.dispatchEvent(event);
  });

  const popup = getByRole('dialog');
  assert.ok(popup);

  // Click "No thanks"
  const closeButton = getByText('No thanks');
  act(() => {
      fireEvent.click(closeButton);
  });

  // Should be gone
  const dismissedPopup = queryByRole('dialog');
  assert.strictEqual(dismissedPopup, null);

  // Session storage should be set
  assert.strictEqual(window.sessionStorage.getItem('scg_popup_shown'), '1');
});

test('respects session storage', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  window.sessionStorage.setItem('scg_popup_shown', '1');

  const { queryByRole } = render(<NewsletterPopup />);

  // Advance timer
  act(() => {
    t.mock.timers.tick(30000);
  });

  // Trigger exit intent
  act(() => {
      const event = new MouseEvent('mouseleave', { clientY: 0, bubbles: true });
      document.dispatchEvent(event);
  });

  const popup = queryByRole('dialog');
  assert.strictEqual(popup, null);
});
