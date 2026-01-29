import type PluginBaseClass from '../plugin-system/plugin';

// Test: Generic with custom options type
interface MyPluginOptions {
    option1: string;
    option2: number | null;
    nested: {
        value: boolean;
    };
}

declare const myPlugin: PluginBaseClass<MyPluginOptions>;

// Test: options should be typed correctly
const opt1: string = myPlugin.options.option1;
const opt2: number | null = myPlugin.options.option2;
const nestedVal: boolean = myPlugin.options.nested.value;

// Test: initialOptions should also be typed
const initOpt1: string = myPlugin.initialOptions.option1;

// Test: _mergeOptions should accept Partial<Options> and return Options
const merged: MyPluginOptions = myPlugin._mergeOptions({ option1: 'test' });
const mergedEmpty: MyPluginOptions = myPlugin._mergeOptions({});

// Test: Default generic (backwards compatibility)
declare const defaultPlugin: PluginBaseClass;

// Default plugin options should be Record<string, unknown>
const defaultOpt: unknown = defaultPlugin.options['anyKey'];
const defaultInitOpt: unknown = defaultPlugin.initialOptions['anyKey'];

// Test: Constructor options parameter should accept Partial<Options>
declare const PluginClass: new (el: HTMLElement, options?: Partial<MyPluginOptions>, pluginName?: false | string) => PluginBaseClass<MyPluginOptions>;
declare const element: HTMLElement;
const instance = new PluginClass(element, { option1: 'partial' });
const instanceNoOpts = new PluginClass(element);

// @ts-expect-error - Should error when accessing non-existent property on typed options
myPlugin.options.nonExistent;

// @ts-expect-error - Should error when assigning wrong type
const wrongType: number = myPlugin.options.option1;

// @ts-expect-error - Should error when passing wrong option type to constructor
new PluginClass(element, { option1: 123 });

// @ts-expect-error - Should error when passing unknown option to constructor
new PluginClass(element, { unknownOption: 'value' });
