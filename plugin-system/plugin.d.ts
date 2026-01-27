import NativeEventEmitter from "./native-event-emitter";

export default interface PluginBaseClass<Options extends object = Record<string, unknown>> {
    new(el: HTMLElement, options?: Partial<Options>, pluginName?: false | string): PluginBaseClass<Options>;

    el: HTMLElement;
    $emitter: NativeEventEmitter;
    _pluginName: String;
    initialOptions: Options;
    options: Options;
    _initialized: boolean;
    init(): void;
    _update(): void;
    update(): void;
    _registerInstance(): void;
    _getPluginName(pluginName: false | string): String;
    _mergeOptions(options: Partial<Options>): Options;
    parseJsonOrFail(dashedPluginName: string): any | string;
}
