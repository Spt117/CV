import { useState } from "react";
import Notification from "./Notification.jsx";
import Social from "./Social.jsx";

export default function Contact() {
    const [notif, setNotif] = useState("");
    const formValide =
        "Votre message a bien été envoyé, je vous répondrai sous 24 heures !";
    const formInvalide =
        "Vous n'avez pas rempli toutes les cases nécessaires !";
    let myMessage = {
        firstName: "",
        name: "",
        entreprise: "",
        email: "",
        message: "",
    };

    function valideForm() {
        const name = document.querySelector("#form-name");
        const mail = document.querySelector("#form-mail");
        const text = document.querySelector("#form-text");
        if (name.value && mail.value && text.value) return true;
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
            <div id="formulaire">
                <h1 id="contact-titre">Formulaire de contact</h1>
                <div>
                    <form id="myForm">
                        <div id="name">
                            <input
                                id="form-name"
                                className="init"
                                type="text"
                                required="required"
                                placeholder="Nom"
                                onChange={(e) =>
                                    (myMessage.name = e.target.value)
                                }
                            />
                            <input
                                className="init"
                                type="text"
                                required="required"
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
                            placeholder="e-mail"
                            required="required"
                            onChange={(e) => (myMessage.email = e.target.value)}
                        />
                        <div id="mymessage">
                            <textarea
                                className="init"
                                required="required"
                                name="message"
                                id="form-text"
                                // cols="70"
                                // rows="20"
                                placeholder="Votre message..."
                                onChange={(e) =>
                                    (myMessage.message = e.target.value)
                                }
                            ></textarea>
                        </div>
                    </form>
                </div>
                <button onClick={sendForm} className="btn" id="form-btn">
                    Envoyer
                </button>
            </div>
        </div>
    );
}
