import { request } from "@/library/class"
import { siteObjet } from "@/library/const"
import { fetchData, selectorById } from "@/library/functions"
import { Site } from "@/library/interfaces"
import { useState } from "react"
import SiteElement from "../portfolio/SiteElement"

export default function UpdateSite(): JSX.Element {
    const [siteName, setSiteName] = useState<string>("")
    const [site, setSite] = useState<Site>(siteObjet)

    async function getSites(): Promise<void> {
        try {
            const sitesArray: Site[] = (await fetchData("/api/sites")) as Site[]
            const thesite: Site = sitesArray.find((site) => site.titre === siteName) as Site
            thesite?._id !== undefined ? setSite(thesite) : console.log("Site non trouvé")
            const theForm: HTMLDivElement = selectorById("theForm3") as HTMLDivElement
            theForm.style.display = "block"
        } catch (error: any) {
            console.log(error)
        }
    }

    async function updateSite(): Promise<void> {
        await fetchData(`/api/sites/${site._id}`, new request(site, "PUT"))
    }

    return (
        <>
            <h3>Modifier un site</h3>
            <input type="text" placeholder="Nom" id="update" onChange={(e) => setSiteName(e.target.value)} />
            <button onClick={getSites}>Valider</button>
            <div id="theForm3">
                <h3>{site.titre}</h3>
                <form>
                    <input
                        id="siteName"
                        className="init"
                        type="text"
                        placeholder="Titre"
                        onChange={(e) =>
                            setSite({
                                ...site,
                                titre: e.target.value,
                            })
                        }
                    />
                    <input
                        id="address"
                        className="init"
                        type="text"
                        placeholder="Adresse du site"
                        onChange={(e) =>
                            setSite({
                                ...site,
                                url: e.target.value,
                            })
                        }
                    />
                    <input
                        id="description"
                        className="init"
                        type="text"
                        placeholder="Description"
                        onChange={(e) =>
                            setSite({
                                ...site,
                                description: e.target.value,
                            })
                        }
                    />
                    <input
                        id="techno"
                        className="init"
                        type="text"
                        placeholder="Technos utilisées"
                        onChange={(e) =>
                            setSite({
                                ...site,
                                techno: e.target.value,
                            })
                        }
                    />
                </form>
                <button className="btn" onClick={updateSite}>
                    Modifier
                </button>
                <div id="modifier-site">
                    <SiteElement site={site} />
                </div>
            </div>
        </>
    )
}
