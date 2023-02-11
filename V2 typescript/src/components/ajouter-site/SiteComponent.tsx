import { postRequest } from "@/library/class"
import { siteObjet } from "@/library/const"
import { fetchData } from "@/library/functions"
import { Site } from "@/library/interfaces"
import { useState } from "react"

export default function SiteComponent({ bool }: { bool: boolean }): JSX.Element {
    const [site, setSite] = useState<Site>(siteObjet)

    async function sendSite() {
        if (bool) {
            const response = await fetchData("/api/sites", new postRequest(site))
        }
    }
    return (
        <>
            <form id="theForm2">
                <input
                    id="form-name"
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
                    id="form-mail"
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
                    id="form-subject"
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
            <button onClick={sendSite} className="btn" id="form-btn">
                Ajouter
            </button>
        </>
    )
}
