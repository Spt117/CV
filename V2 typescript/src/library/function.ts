export function selectorById(id: string): HTMLElement | null {
    console.log(`#${id}`)

    return document.getElementById(`#${id}`)
}

export function displayElementById(id: string, bool: boolean): void {
    const element = selectorById(id)
    if (element && (element.style.display = "block")) {
        element.style.display = "none"
    } else {
        if (element) element.style.display = "block"
    }
}
