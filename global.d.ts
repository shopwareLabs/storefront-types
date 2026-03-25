declare global {
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
