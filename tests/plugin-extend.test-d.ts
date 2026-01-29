// Test case for extending PluginBaseClass as shown in the issue
import PluginBaseClass from '../plugin-system/plugin';

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

// Test: Should be able to instantiate via constructor
const element = document.createElement('div');
const plugin = new MyPlugin(element, { option1: 'test' });

// Test: Instance properties should be accessible
const el: HTMLElement = plugin.el;
const opt1: string = plugin.options.option1;

// @ts-expect-error - Should error when accessing non-existent property
plugin.options.nonExistent;

// @ts-expect-error - Should error when assigning wrong type
const wrongType: number = plugin.options.option1;
