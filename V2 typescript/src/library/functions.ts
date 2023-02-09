export function selectorById(id: string): HTMLElement | null {
    return document.getElementById(id)
}

export function checkMail(HTMLElement: HTMLElement): boolean {
    return (
        HTMLElement !== null &&
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test((HTMLElement as HTMLInputElement).value)
    )
}
