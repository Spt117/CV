import { useState } from "react";
import Notification from "./Notification.jsx";
import Image from "next/image.js";
import Icone from "../assets/mail.png";

export default function Contact() {
    const [notif, setNotif] = useState("");
    const formValide =
        "Votre message a bien été envoyé, je vous répondrai sous 24 heures !";
    const formInvalide =
        "Vous n'avez pas rempli toutes les cases nécessaires !";
    let myMessage = {
        firstName: "",
        name: "",
        subject: "",
        email: "",
        message: "",
    };

    function valideForm() {
        const name = document.querySelector("#form-name");
        const mail = document.querySelector("#form-mail");
        const text = document.querySelector("#form-text");
        const objet = document.querySelector("#form-subject");
        if (name.value && mail.value && text.value && objet) return true;
        else return false;
    }

    function api() {
        fetch("/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myMessage),
        });
    }

    function notification() {
        const form = document.querySelector("#formulaire");
        const divAlert = document.querySelector("#notif");
        form.style.display = "none";
        divAlert.style.display = "block";
        setTimeout(() => {
            divAlert.style.display = "none";
            form.style.display = "block";
        }, 3000);
    }

    function init() {
        const form = document.querySelector("#myForm");
        form.reset();
        notification();
    }

    function sendForm() {
        if (valideForm()) {
            api();
            setNotif(formValide);
            init();
            notification();
        } else {
            setNotif(formInvalide);
            notification();
        }
    }

    return (
        <div>
            <div id="container-notification">
                <Notification notif={notif} />
            </div>
            <div className="child1" id="myForm">
                <h1 id="contact-titre">Formulaire de contact</h1>
                <div>
                    <form>
                        <div id="name">
                            <input
                                id="form-name"
                                className="init"
                                type="text"
                                placeholder="*Nom"
                                onChange={(e) =>
                                    (myMessage.name = e.target.value)
                                }
                            />
                            <input
                                className="init"
                                type="text"
                                placeholder="Prénom"
                                onChange={(e) =>
                                    (myMessage.firstName = e.target.value)
                                }
                            />
                        </div>
                        <input
                            id="form-mail"
                            className="init"
                            type="email"
                            placeholder="*e-mail"
                            onChange={(e) => (myMessage.email = e.target.value)}
                        />
                        <input
                            id="form-subject"
                            className="init"
                            type="text"
                            placeholder="*Objet"
                            onChange={(e) =>
                                (myMessage.subject = e.target.value)
                            }
                        />
                        <div id="mymessage">
                            <textarea
                                className="init"
                                name="message"
                                id="form-text"
                                // cols="70"
                                // rows="20"
                                placeholder="*Votre message..."
                                onChange={(e) =>
                                    (myMessage.message = e.target.value)
                                }
                            ></textarea>
                            <sub>* Ces champs sont obligatoires</sub>
                        </div>
                    </form>
                </div>
                <button onClick={sendForm} className="btn" id="form-btn">
                    <p id="p-button">Envoyer</p>
                    <Image src={Icone} id="envoyer" className="social" />
                </button>
            </div>
        </div>
    );
}
