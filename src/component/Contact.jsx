import { useEffect, useState } from "react";
import Notification from "./Notification.jsx";
import Image from "next/image.js";
import Icone from "../assets/mail.png";
import Stop from "../assets/interdit.png";

export default function Contact() {
    const obj = {
        firstName: "",
        name: "",
        objet: "",
        email: "",
        message: "",
    };
    const [msg, setMsg] = useState(obj);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        valideForm();
    }, [msg]);

    function valideForm() {
        const button = document.querySelector("#form-btn");
        const name = document.querySelector("#form-name");
        const mail = document.querySelector("#form-mail");
        const text = document.querySelector("#form-text");
        const objet = document.querySelector("#form-subject");
        if (name.value && mail.value && text.value && objet.value) {
            button.disabled = false;
            setBool(false);
        } else {
            button.disabled = true;
            setBool(true);
        }
    }

    function api() {
        fetch("/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(msg),
        });
    }

    function notification() {
        const form = document.querySelector("#myForm");
        const divAlert = document.querySelector("#notif");
        form.style.display = "none";
        divAlert.style.display = "block";
        setTimeout(() => {
            divAlert.style.display = "none";
            form.style.display = "block";
        }, 3000);
    }

    function init() {
        const form = document.querySelector("#theForm");
        form.reset();
        notification();
    }

    function sendForm() {
        api();
        init();
        notification();
        valideForm();
        setMsg(obj);
    }

    return (
        <div>
            <div id="container-notification">
                <Notification />
            </div>
            <div className="child1" id="myForm">
                <h1 id="contact-titre">Formulaire de contact</h1>
                <div>
                    <form id="theForm">
                        <div id="name">
                            <input
                                id="form-name"
                                className="init"
                                type="text"
                                placeholder="*Nom"
                                onChange={(e) =>
                                    setMsg({
                                        ...msg,
                                        name: e.target.value,
                                    })
                                }
                            />
                            <input
                                className="init"
                                type="text"
                                placeholder="Prénom"
                                onChange={(e) =>
                                    setMsg({
                                        ...msg,
                                        firstName: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <input
                            id="form-mail"
                            className="init"
                            type="email"
                            placeholder="*e-mail"
                            onChange={(e) =>
                                setMsg({
                                    ...msg,
                                    email: e.target.value,
                                })
                            }
                        />
                        <input
                            id="form-subject"
                            className="init"
                            type="text"
                            placeholder="*Objet"
                            onChange={(e) =>
                                setMsg({
                                    ...msg,
                                    objet: e.target.value,
                                })
                            }
                        />
                        <div id="mymessage">
                            <textarea
                                className="init"
                                name="message"
                                id="form-text"
                                placeholder="*Votre message..."
                                onChange={(e) =>
                                    setMsg({
                                        ...msg,
                                        message: e.target.value,
                                    })
                                }
                            ></textarea>
                            <sub>* Ces champs sont obligatoires</sub>
                        </div>
                    </form>
                </div>
                <button onClick={sendForm} className="btn" id="form-btn">
                    {!bool && <p id="p-button">Envoyer</p>}
                    {bool && <p id="p-button">Formulaire non valide</p>}
                    {!bool && (
                        <Image
                            src={Icone}
                            id="envoyer"
                            className="social"
                            alt="Mail"
                        />
                    )}
                    {bool && (
                        <Image
                            src={Stop}
                            id="envoyer"
                            className="social"
                            alt="Interdit"
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
