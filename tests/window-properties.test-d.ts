/// <reference path="../global.d.ts" />

const maybeAnalytics: boolean | undefined = window.gtagActive;
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

void maybeAnalytics;
void maybeReCaptchaV2;
void maybeReCaptchaV3;
void maybeThemeJsPublicPath;
void maybeWishlistEnabled;
void maybeCustomerLoggedInState;
