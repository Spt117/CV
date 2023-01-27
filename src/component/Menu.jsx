export default function Menu() {
    return (
        <div id="div-menu">
            <menu>
                <li>
                    <a href="/">
                        <button className="from-center">Accueil</button>
                    </a>
                </li>
                <li>
                    <a href="/portfolio">
                        <button className="from-center">Portfolio</button>
                    </a>
                </li>
                <li>
                    <a href="/contact">
                        <button className="from-center">Contactez-moi</button>
                    </a>
                </li>
                <li id="wrapper" style={{ display: "none" }}>
                    <input type="checkbox" id="hide-checkbox" />
                    <label htmlFor="hide-checkbox" className="toggle">
                        <span className="toggle-button">
                            <span className="crater crater-1"></span>
                            <span className="crater crater-2"></span>
                            <span className="crater crater-3"></span>
                            <span className="crater crater-4"></span>
                            <span className="crater crater-5"></span>
                            <span className="crater crater-6"></span>
                            <span className="crater crater-7"></span>
                        </span>
                        <span className="star star-1"></span>
                        <span className="star star-2"></span>
                        <span className="star star-3"></span>
                        <span className="star star-4"></span>
                        <span className="star star-5"></span>
                        <span className="star star-6"></span>
                        <span className="star star-7"></span>
                        <span className="star star-8"></span>
                    </label>
                </li>
            </menu>
        </div>
    );
}
