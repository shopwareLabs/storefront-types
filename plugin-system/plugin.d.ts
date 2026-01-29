import NativeEventEmitter from "./native-event-emitter";

export default class PluginBaseClass<Options extends object = Record<string, unknown>, El extends HTMLElement = HTMLElement> {
    constructor(el: El, options?: Partial<Options>, pluginName?: false | string);

    el: El;
    $emitter: NativeEventEmitter<El>;
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
