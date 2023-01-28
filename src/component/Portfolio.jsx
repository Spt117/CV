import Image from "next/image.js";
import { useEffect, useState } from "react";
import beyblade from "../assets/beyblade-shop.png";

export default function Portfolio() {
    const [sites, setSites] = useState([]);

    useEffect(() => {
        getSites();
    }, []);

    async function getSites() {
        const api = await fetch("/api/sites");
        const data = await api.json();
        console.log(data);
        setSites(data.reverse());
    }

    return (
        <div className="child1" id="myflex">
            <h1>Mon Portfolio</h1>
            <div id="portfolio">
                {sites.map((site, index) => (
                    <div key={index} className="container-site">
                        <h3>{site.titre}</h3>
                        {site.image === "beyblade" ? (
                            <div className="container-image">
                                <a href={site.url}>
                                    <Image
                                        src={beyblade}
                                        className="image"
                                        alt={site.titre}
                                    />
                                </a>
                            </div>
                        ) : (
                            <iframe
                                src={site.url}
                                frameBorder="0"
                                title="Exercice Particeep"
                                width="300"
                                height="200"
                            ></iframe>
                        )}
                        <p>
                            <b>Description :</b> {site.description}
                            <br />
                            <br />
                            <b>Technologies utilisées :</b> {site.techno}
                            <br />
                            <br />
                            <a href={site.url} className="buttons">
                                <button className="button-36">
                                    Voir le site
                                </button>
                            </a>
                        </p>
                    </div>
                ))}
            </div>
            <a href="/">
                <button id="retour" className="glow-on-hover">
                    Retour
                </button>
            </a>
        </div>
    );
}
