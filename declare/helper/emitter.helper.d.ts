declare module 'src/helper/emitter.helper' {
    interface NativeEventEmitterPublish {
        detail?: object;
        cancelable?: boolean;
    }

    interface NativeEventEmitterSubscribeOpts {
        once?: boolean;
        scope?: Function;
    }

    class NativeEventEmitter<El extends HTMLElement = HTMLElement> {
        private _listeners;
        private _el;
        constructor(el: El);
        publish(eventName: string, detail?: NativeEventEmitterPublish, cancelable?: boolean): CustomEvent;
        subscribe(eventName: string, callback: Function, opts?: NativeEventEmitterSubscribeOpts): boolean;
        unsubscribe(eventName: String): boolean;
        reset(): boolean;
        get el(): El;
        set el(value: El);
        get listeners(): any[];
        set listeners(value: any[]);
    }

    export = NativeEventEmitter;
}