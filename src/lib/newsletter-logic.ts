
export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export interface DocumentLike {
  addEventListener(type: string, listener: (e: any) => void): void;
  removeEventListener(type: string, listener: (e: any) => void): void;
}

export interface NewsletterLogicConfig {
  setVisible: (visible: boolean) => void;
  storage: StorageLike;
  doc: DocumentLike;
  setTimeout: (callback: () => void, ms: number) => any;
  clearTimeout: (id: any) => void;
}

export class NewsletterLogic {
  private timer: any = null;
  private readonly POPUP_KEY = 'scg_popup_shown';
  private readonly SHOW_DELAY_MS = 30000;
  private config: NewsletterLogicConfig;
  private handleMouseLeaveBound: (e: any) => void;

  constructor(config: NewsletterLogicConfig) {
    this.config = config;
    this.handleMouseLeaveBound = this.handleMouseLeave.bind(this);
  }

  init() {
    if (this.config.storage.getItem(this.POPUP_KEY)) return;

    this.timer = this.config.setTimeout(() => {
        this.config.setVisible(true);
    }, this.SHOW_DELAY_MS);

    this.config.doc.addEventListener('mouseleave', this.handleMouseLeaveBound);
  }

  private handleMouseLeave(e: { clientY: number }) {
    if (e.clientY < 5 && !this.config.storage.getItem(this.POPUP_KEY)) {
      if (this.timer) this.config.clearTimeout(this.timer);
      this.config.setVisible(true);
    }
  }

  dismiss() {
    this.config.setVisible(false);
    this.config.storage.setItem(this.POPUP_KEY, '1');
  }

  cleanup() {
    if (this.timer) this.config.clearTimeout(this.timer);
    this.config.doc.removeEventListener('mouseleave', this.handleMouseLeaveBound);
  }
}
