declare module 'src/utility/modal-extension/pseudo-modal.util' {
    class PseudoModalUtil {
        open(callback: Function): void
        close(): void
        getModal(): HTMLElement
        updatePosition(): void
        updateContent(content: string, callback: () => void): void
    }

    export = PseudoModalUtil;
}