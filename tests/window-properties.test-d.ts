/// <reference path="../global.d.ts" />

const maybeAnalytics: boolean | undefined = window.gtagActive;
const maybeGtagUrl: string | undefined = window.gtagURL;
const maybeControllerName: string | undefined = window.controllerName;
const maybeActionName: string | undefined = window.actionName;
const maybeActiveRoute: string | undefined = window.activeRoute;
const maybeActiveRouteParameters: string | undefined = window.activeRouteParameters;
const maybeTrackOrders: string | boolean | undefined = window.trackOrders;
const maybeTrackOffcanvasCart: string | boolean | undefined = window.trackOffcanvasCart;
const maybeGtagTrackingId: string | undefined = window.gtagTrackingId;
const maybeDataLayer: unknown[] | undefined = window.dataLayer;
const maybeGtagConfig: ShopwareGtagConfig | undefined = window.gtagConfig;
const maybeReCaptchaV2: boolean | undefined = window.googleReCaptchaV2Active;
const maybeReCaptchaV3: boolean | undefined = window.googleReCaptchaV3Active;
const maybeThemeJsPublicPath: string | undefined = window.themeJsPublicPath;
const maybeWishlistEnabled: boolean | undefined = window.wishlistEnabled;
const maybeCustomerLoggedInState: 0 | 1 | undefined = window.customerLoggedInState;

if (window.wishlistEnabled && window.customerLoggedInState === 1) {
    const isLoggedIn: 1 = window.customerLoggedInState;
    void isLoggedIn;
}

// @ts-expect-error customerLoggedInState is not a string
const invalidCustomerLoggedInState: string = window.customerLoggedInState;

if (window.gtagConfig) {
    const cookiePrefix: string = window.gtagConfig.cookie_prefix;
    const maybePageLocation: string | undefined = window.gtagConfig.page_location;
    void cookiePrefix;
    void maybePageLocation;
}

void maybeAnalytics;
void maybeGtagUrl;
void maybeControllerName;
void maybeActionName;
void maybeActiveRoute;
void maybeActiveRouteParameters;
void maybeTrackOrders;
void maybeTrackOffcanvasCart;
void maybeGtagTrackingId;
void maybeDataLayer;
void maybeGtagConfig;
void maybeReCaptchaV2;
void maybeReCaptchaV3;
void maybeThemeJsPublicPath;
void maybeWishlistEnabled;
void maybeCustomerLoggedInState;
