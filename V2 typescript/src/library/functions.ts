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
