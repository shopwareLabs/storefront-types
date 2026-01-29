// Test case for using window.PluginBaseClass as shown in the issue
/// <reference path="../global.d.ts" />

const { PluginBaseClass } = window;

interface MyPluginOptions {
    option1: string;
    option2: number | null;
}

class MyPlugin extends PluginBaseClass<MyPluginOptions> {
    static options: MyPluginOptions = {
        option1: 'default value',
        option2: null,
    };

    init(): void {
        // Test that instance properties are accessible
        console.log(this.el);
        console.log(this.options);
        console.log(this.$emitter);
        
        // Test that options are properly typed
        const opt1: string = this.options.option1;
        const opt2: number | null = this.options.option2;
    }
}

// Test: Can instantiate using the class from window
const element = document.createElement('div');
const plugin = new MyPlugin(element, { option1: 'custom' });

// Test: Instance properties should be typed correctly
const opt1: string = plugin.options.option1;
const opt2: number | null = plugin.options.option2;

// @ts-expect-error - Should error when accessing non-existent property
plugin.options.nonExistent;
