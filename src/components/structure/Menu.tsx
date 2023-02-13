import Mode from "./Mode"

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
                <Mode />
            </menu>
        </div>
    )
}
