import { useState } from "react";

export default function AddSite() {
    const [site, setSite] = useState(null);
    const [mdp, setMdp] = useState("");
    const [bool, setBool] = useState(false);

    async function sendSite() {
        if (bool) {
            const api = await fetch("/api/sites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(site),
            });
            const res = await api.json();
            console.log(res);
        } else console.log("Mauvais mot de passe !");
    }

    async function checkMdp() {
        const api = await fetch("/api/mdp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mdp),
        });
        const res = await api.json();
        setBool(res);
    }

    return (
        <div className="child1" id="myForm">
            <h1>Ajouter un site à mon Portfolio</h1>
            {!bool && (
                <>
                    <input
                        placeholder="Mot de passe"
                        onChange={(e) => setMdp(e.target.value)}
                    />
                    <button onClick={checkMdp} className="btn">
                        Valider
                    </button>
                </>
            )}
            {bool && (
                <>
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
                </>
            )}
        </div>
    );
}
