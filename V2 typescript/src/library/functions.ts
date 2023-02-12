import { notifications } from "./const"
import { Site } from "./interfaces"

export function selectorById(id: string): HTMLElement | null {
    if (typeof document !== "undefined") return document.getElementById(id)
    return null
}

export function checkMail(HTMLElement: HTMLElement): boolean {
    return HTMLElement !== null && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test((HTMLElement as HTMLInputElement).value)
}

export async function fetchData(url: string, objet?: object) {
    try {
        const data = await fetch(url, objet)
        const res: string | Site[] | boolean = await data.json()
        if (objet !== undefined) console.log(res)
        return res
    } catch (err: any) {
        console.log(err)
    }
}

export function notification(messageId: number, blockToDisplay?: string): void {
    ;(selectorById("message") as HTMLParagraphElement).textContent = notifications[messageId]
    const notif = selectorById("notif") as HTMLDivElement
    notif.style.display = "block"
    let form: HTMLDivElement | undefined
    if (blockToDisplay) {
        form = selectorById(blockToDisplay) as HTMLDivElement
        form.style.display = "none"
    }
    setTimeout(() => {
        notif.style.display = "none"
        if (form) form.style.display = "block"
    }, 5000)
}
