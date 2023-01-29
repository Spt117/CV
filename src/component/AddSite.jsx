import { useEffect, useState } from "react";
import { env } from "process";
// const dotenv = require("dotenv");
// dotenv.config();

export default function AddSite() {
    const [site, setSite] = useState(null);
    const [mdp, setMdp] = useState("");

    const Mdp = process.env.REACT_APP_mdp;

    useEffect(() => {
        console.log(site);
    }, [site]);

    async function sendSite() {
        if (Mdp === mdp) {
            const api = await fetch("/api/sites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(site),
            });
            const res = await api.json();
            console.log(res);
        } else console.log(process.env.REACT_APP_mdp);
    }

    return (
        <div className="child1" id="myForm">
            <h1>Ajouter un site à mon Portfolio</h1>
            <input
                placeholder="Mot de passe"
                onChange={(e) => setMdp(e.target.value)}
            />
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
        </div>
    );
}
