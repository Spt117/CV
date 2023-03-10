import Image from "next/image.js"
import beyblade from "../../assets/beyblade-shop.png"
import { Site } from "@/library/interfaces"

export default function SiteElement({ site }: { site: Site }): JSX.Element {
    return (
        <>
            <div className="container-site">
                <h3>{site.titre}</h3>
                {site.image === "beyblade" ? (
                    <div className="container-image">
                        <a href={site.url}>
                            <Image src={beyblade} className="image" alt={site.titre} />
                        </a>
                    </div>
                ) : (
                    <iframe src={site.url} title="Exercice Particeep" width="300" height="200"></iframe>
                )}
                <p>
                    <b>Description :</b>
                    <br />
                    {site.description}
                    <br />
                    <br />
                    <b>Technologies utilisées :</b>
                    <br />
                    {site.techno}
                    <br />
                    <br />
                    <a href={site.url} className="buttons">
                        <button className="button-36">Voir le site</button>
                    </a>
                </p>
            </div>
        </>
    )
}
