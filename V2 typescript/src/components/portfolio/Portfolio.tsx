import { useState, useEffect } from "react"
import { fetchData } from "@/library/functions"
import { Site } from "@/library/interfaces"
import Sites from "./Sites"

export default function Portfolio(): JSX.Element {
    const [sites, setSites] = useState<Site[]>([])

    async function getSites(): Promise<void> {
        const res = (await fetchData("/api/sites")) as Site[]
        if (res) setSites(res.reverse())
    }

    useEffect(() => {
        getSites()
    }, [])

    return (
        <div className="child1" id="myflex">
            <h1>Mon Portfolio</h1>
            {sites.length === 0 && <div className="lds-dual-ring"></div>}
            <div id="portfolio">
                <Sites sites={sites} />
            </div>
            <div id="contain-button">
                <a href="/" id="retour">
                    <button className="glow-on-hover">Retour</button>
                </a>
                <a href="/ajouter-site" id="add">
                    <button className="glow-on-hover">Ajouter</button>
                </a>
            </div>
        </div>
    )
}