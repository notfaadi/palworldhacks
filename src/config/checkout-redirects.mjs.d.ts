export declare const LEVO_PALWORLD_CHECKOUT: string;

export declare const CHECKOUT_URLS: {
  readonly palworld: string;
  readonly cloudDma: string;
  readonly skinChanger: string;
  readonly hwidSpoofer: string;
  readonly ugc: string;
};

export declare const CHECKOUT_PATH_REDIRECTS: ReadonlyMap<string, string>;

export declare function resolveCheckoutPathRedirect(pathname: string): string | null;
