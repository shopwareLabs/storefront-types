# Types for Shopware Storefront

This package provides types for window-bound classes in Shopware 6 Storefront:

- `window.PluginManager`
- `window.PluginBaseClass`
- `window.router`
- `window.formValidation`
- `window.validationMessages`
- `window.useDefaultCookieConsent`

and all regular imports of the Storefront.

Install this package with NPM:

```bash
npm install @shopware-ag/storefront-types --save-dev
```

To have the types active, you need to create a `tsconfig.json` (`src/Resources/app/storefront/tsconfig.json`) with the following content:

```json
{
    "compilerOptions": {
        "types": ["@shopware-ag/storefront-types"]
    }
}
```

## Typed Plugin Options

You can use a generic type parameter to get fully typed options in your plugins:

```ts
const { PluginBaseClass } = window;

interface MyPluginOptions {
    option1: string;
    option2: number | null;
}

export default class MyPlugin extends PluginBaseClass<MyPluginOptions> {
    static options: MyPluginOptions = {
        option1: 'default value',
        option2: null
    };

    init() {
        // this.options is fully typed
        console.log(this.options.option1); // string
        console.log(this.options.option2); // number | null
    }
}
```

## Extending Global Interfaces

The `ShopwareRouter` and `ShopwareValidationMessages` interfaces can be extended via [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) to add custom routes or validation messages from your plugin:

```ts
// Add custom routes
declare global {
    interface ShopwareRouter {
        'frontend.my-plugin.my-route': string;
    }
}

// The route is now available with type safety
const url = window.router['frontend.my-plugin.my-route'];
```

```ts
// Add custom validation messages
declare global {
    interface ShopwareValidationMessages {
        myCustomValidator: string;
    }
}
```
