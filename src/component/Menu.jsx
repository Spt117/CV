import { mySites } from "@/redux/store.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Mode from "./Mode.jsx";

export default function Menu() {
    const dispatch = useDispatch();

    useEffect(() => {
        getSites();
    }, []);

    async function getSites() {
        const api = await fetch("/api/sites");
        const res = await api.json();
        dispatch(mySites(res.reverse()));
    }
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
    );
}
