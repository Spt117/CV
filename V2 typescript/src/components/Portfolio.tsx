export default function Portfolio() {
    return (
        <div className="child1" id="myflex">
            <h1>Mon Portfolio</h1>
            <div id="portfolio"></div>
            <div id="contain-button">
                <a href="/" id="retour">
                    <button className="glow-on-hover">Retour</button>
                </a>
                <a href="/ns" id="add">
                    <button className="glow-on-hover">Ajouter</button>
                </a>
            </div>
        </div>
    );
}
