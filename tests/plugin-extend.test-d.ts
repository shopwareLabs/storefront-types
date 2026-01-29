// Test case for extending PluginBaseClass as shown in the issue
const { PluginBaseClass } = window;

interface MyPluginOptions {
    option1: string;
    option2: number | null;
}

export default class MyPlugin extends PluginBaseClass<MyPluginOptions> {
    static options: MyPluginOptions = {
        option1: 'default value',
        option2: null,
    };

    init(): void {
        console.log(this.el);
        console.log(this.options);
    }
}
