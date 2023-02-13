import { Site, State } from "@/library/interfaces"
import SiteElement from "./SiteElement"
import { useSelector } from "react-redux"

export default function Portfolio(): JSX.Element {
    const sites = useSelector((state: State) => state.sites)

    return (
        <div className="child1" id="myflex">
            <h1>Mon Portfolio</h1>
            {sites.length === 0 && <div className="lds-dual-ring" id="loader"></div>}
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
