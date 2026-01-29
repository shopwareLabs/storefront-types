interface NativeEventEmitterSubscribeOpts {
    once?: boolean;
    scope?: Function;
}

export default class NativeEventEmitter<El extends HTMLElement = HTMLElement> {
    private _listeners;
    private _el;
    constructor(el: El);
    publish(eventName: string, detail?: object, cancelable?: boolean): CustomEvent;
    subscribe(eventName: string, callback: Function, opts?: NativeEventEmitterSubscribeOpts): boolean;
    unsubscribe(eventName: String): boolean;
    reset(): boolean;
    get el(): El;
    set el(value: El);
    get listeners(): any[];
    set listeners(value: any[]);
}
