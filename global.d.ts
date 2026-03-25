declare global {
    interface ShopwareGtagConfig {
        anonymize_ip: string,
        cookie_domain: string,
        cookie_prefix: string,
        page_location?: string,
    }

    interface ShopwareValidationMessages {
        required: string,
        email: string,
        confirmation: string,
        minLength: string,
        grecaptcha: string,
    }

    interface ShopwareRouter {
        'frontend.cart.offcanvas': string,
        'frontend.cookie.offcanvas': string,
        'frontend.checkout.finish.page': string,
        'frontend.checkout.info': string,
        'frontend.menu.offcanvas': string,
        'frontend.cms.page': string,
        'frontend.cms.navigation.page': string,
        'frontend.account.addressbook': string,
        'frontend.country.country-data': string,
        'frontend.app-system.generate-token': string,
    }

    interface Window {
        PluginManager: import('./plugin-system/plugin-manager').default,
        PluginBaseClass: typeof import('./plugin-system/plugin').default,
        router: ShopwareRouter,
        bootstrap: typeof import('bootstrap')
        formValidation: import('./helper/form-validation').default,
        validationMessages: ShopwareValidationMessages,
        useDefaultCookieConsent?: true,
        gtagActive?: boolean,
        gtagURL?: string,
        controllerName?: string,
        actionName?: string,
        activeRoute?: string,
        activeRouteParameters?: string,
        trackOrders?: string | boolean,
        trackOffcanvasCart?: string | boolean,
        gtagTrackingId?: string,
        dataLayer?: unknown[],
        gtagConfig?: ShopwareGtagConfig,
        googleReCaptchaV2Active?: boolean,
        googleReCaptchaV3Active?: boolean,
        themeJsPublicPath?: string,
        wishlistEnabled?: boolean,
        customerLoggedInState?: 0 | 1,
     }

    interface Document {
        $emitter: import('./plugin-system/native-event-emitter').default,
    }
}

export {}
