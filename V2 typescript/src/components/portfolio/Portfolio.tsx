import { useState, useEffect } from "react"
import { fetchData } from "@/library/functions"
import { Site } from "@/library/interfaces"
import SiteElement from "./SiteElement"

export default function Portfolio(): JSX.Element {
    const [sites, setSites] = useState<Site[]>([])

    async function getSites(): Promise<void> {
        const res: Site[] = (await fetchData("/api/sites")) as Site[]
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
                {sites.map((site: Site, index: number) => (
                    <SiteElement key={index} site={site} />
                ))}
            </div>
            <div id="contain-button">
                <a href="/" id="retour">
                    <button className="glow-on-hover">Retour</button>
                </a>
                <a href="/gestion-sites" id="add">
                    <button className="glow-on-hover">Gérer</button>
                </a>
            </div>
        </div>
    )
}
