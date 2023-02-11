import { fetchData } from "@/library/functions"
import { Site } from "@/library/interfaces"
import { useState } from "react"

export default function SupprimerSite(): JSX.Element {
    const [siteName, setSiteName] = useState<string>("")

    async function getSites(): Promise<void> {
        try {
            const sitesArray: Site[] = (await fetchData("/api/sites")) as Site[]
            const site: Site = sitesArray.find((site) => site.titre === siteName) as Site
            site?._id !== undefined
                ? await fetchData(`/api/sites/${site._id}`, { method: "DELETE", body: JSON.stringify(site._id) })
                : console.log("Site non trouvé")
        } catch (error: any) {
            console.log(error)
        }
    }
    return (
        <>
            <h3>Supprimer un site</h3>
            <input type="text" placeholder="Nom" id="delete" onChange={(e) => setSiteName(e.target.value)} />
            <button className="btn" onClick={getSites}>
                Supprimer
            </button>
        </>
    )
}
