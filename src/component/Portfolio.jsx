import Image from "next/image.js";
import beyblade from "../assets/beyblade-shop.png";

export default function Portfolio() {
    const sites = [
        {
            titre: "Beyblade Shop",
            image: beyblade,
            url: "https://beyblade-shop.com",
            description:
                "Ma première réussite, un site d'ecommerce sur Shopify avec plus de 300 visiteurs quotidiens grâce à une acquisition de traffic en SEO.",
            techno: "Shopify",
        },
        {
            titre: "Staking Factory",
            url: "https://stacking-factory.vercel.app/Stacking",
            description:
                "Création d'une plateforme de Staking sur la blockchain Ethereum, possibilité d'ajouter des pools et de choisir le rendement.",
            techno: "React pour le Front-end, j'ai utilisé la librairie Ether js pour communiquer avec les SmartContracts. Pour le développement et le déploiement de ceux-ci, je me suis servi de Hardhat. ",
        },
        {
            titre: "Exercice Particeep",
            url: "https://particeep-test-theta.vercel.app/",
            description:
                "Petit site de présentation de films, demandé par l'entreprise Particeep !",
            techno: "React et le State Manager Redux, Vercel pour le déploiement.",
        },
        {
            titre: "Les Argonautes",
            url: "https://argonautes-front.vercel.app/",
            description:
                "Petit exercice FullStack dans le cadre de mon apprentissage.",
            techno: "React côté Front-end, un serveur Node-Express Js avec une base de donnée MongoDB côté Backend. J'ai utilisé Vercel à la fois pour le serveur et pour le Front.",
        },
    ];

    return (
        <div id="container_port">
            <h1>Mon Portfolio</h1>
            <div id="portfolio">
                {sites.map((site, index) => (
                    <div key={index} className="container-site">
                        <h4>{site.titre}</h4>
                        {site.image ? (
                            <div className="container-image">
                                <Image src={site.image} className="image" />
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
                            <a href={site.url}>Voir le site</a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
