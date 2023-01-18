export default function Portfolio() {
    return (
        <div id="portfolio">
            <div className="container-site">
                <h4>Exercice Particeep</h4>
                <iframe
                    src="https://particeep-test-theta.vercel.app/"
                    frameborder="0"
                    title="Exercice Particeep"
                    width="300"
                    height="200"
                ></iframe>
                <p>
                    <b>Description :</b> Petit site de présentation de films,
                    demandé par l'entreprise Particeep !
                    <br />
                    <b>Technologies utilisées :</b> React et le State Manager
                    Redux !
                    <br />
                    <a href="https://particeep-test-theta.vercel.app/">
                        Voir le site
                    </a>
                </p>
            </div>
        </div>
    );
}
