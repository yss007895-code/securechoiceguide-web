
import assert from 'node:assert';
import { test, describe, beforeEach } from 'node:test';
import { NewsletterLogic } from './newsletter-logic.ts';
import type { StorageLike, DocumentLike, NewsletterLogicConfig } from './newsletter-logic.ts';

describe('NewsletterLogic', () => {
    let logic: NewsletterLogic;
    let setVisible: (visible: boolean) => void;
    let storage: StorageLike;
    let doc: DocumentLike;
    let setTimeoutMock: (callback: () => void, ms: number) => any;
    let clearTimeoutMock: (id: any) => void;
    let mockStorage: Record<string, string>;
    let mockListeners: Record<string, (e: any) => void>;
    let visibleState: boolean;
    let timerCallback: (() => void) | null;
    let timerId: number;

    beforeEach(() => {
        mockStorage = {};
        mockListeners = {};
        visibleState = false;
        timerCallback = null;
        timerId = 0;

        setVisible = (visible: boolean) => {
            visibleState = visible;
        };

        storage = {
            getItem: (key: string) => mockStorage[key] || null,
            setItem: (key: string, value: string) => { mockStorage[key] = value; }
        };

        doc = {
            addEventListener: (type: string, listener: (e: any) => void) => {
                mockListeners[type] = listener;
            },
            removeEventListener: (type: string, listener: (e: any) => void) => {
                if (mockListeners[type] === listener) {
                    delete mockListeners[type];
                }
            }
        };

        setTimeoutMock = (callback: () => void, ms: number) => {
            timerCallback = callback;
            return ++timerId;
        };

        clearTimeoutMock = (id: any) => {
            if (timerId === id) {
                timerCallback = null;
            }
        };

        const config: NewsletterLogicConfig = {
            setVisible,
            storage,
            doc,
            setTimeout: setTimeoutMock,
            clearTimeout: clearTimeoutMock
        };

        logic = new NewsletterLogic(config);
    });

    test('should not init if already shown', () => {
        mockStorage['scg_popup_shown'] = '1';
        logic.init();
        assert.strictEqual(timerCallback, null);
        assert.strictEqual(Object.keys(mockListeners).length, 0);
    });

    test('should init and set timer if not shown', () => {
        logic.init();
        assert.ok(timerCallback);
        assert.ok(mockListeners['mouseleave']);
    });

    test('timer should make popup visible', () => {
        logic.init();
        if (timerCallback) timerCallback();
        assert.strictEqual(visibleState, true);
    });

    test('mouseleave should show popup', () => {
        logic.init();
        const listener = mockListeners['mouseleave'];
        if (listener) listener({ clientY: 4 });
        assert.strictEqual(visibleState, true);
    });

    test('mouseleave should not show popup if not near top', () => {
        logic.init();
        const listener = mockListeners['mouseleave'];
        if (listener) listener({ clientY: 10 });
        assert.strictEqual(visibleState, false);
    });

    test('mouseleave should clear timer', () => {
        logic.init();
        const listener = mockListeners['mouseleave'];
        if (listener) listener({ clientY: 4 });
        assert.strictEqual(timerCallback, null); // cleared
    });

    test('dismiss should hide popup and set storage', () => {
        logic.init();
        logic.dismiss();
        assert.strictEqual(visibleState, false);
        assert.strictEqual(mockStorage['scg_popup_shown'], '1');
    });

    test('cleanup should clear timer and remove listener', () => {
        logic.init();
        logic.cleanup();
        assert.strictEqual(timerCallback, null);
        assert.strictEqual(Object.keys(mockListeners).length, 0);
    });
});
