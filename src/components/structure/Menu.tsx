import Mode from "./Mode"
import Link from "next/link"

export default function Menu() {
    return (
        <div id="div-menu">
            <menu>
                <li>
                    <Link href="/">
                        <button className="from-center">Accueil</button>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio">
                        <button className="from-center">Portfolio</button>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <button className="from-center">Contactez-moi</button>
                    </Link>
                </li>
                <Mode />
            </menu>
        </div>
    )
}
