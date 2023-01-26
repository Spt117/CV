import Notification from "./Notification.jsx";
import Social from "./Social.jsx";

export default function Contact() {
    let myMessage = {
        firstName: "",
        name: "",
        entreprise: "",
        email: "",
        message: "",
    };

    function init() {
        const form = document.querySelector("#myForm");
        form.reset();
        notification();
    }

    function sendForm() {
        fetch("/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myMessage),
        });
        init();
    }

    function notification() {
        const btn = document.querySelector("#form-btn");
        const form = document.querySelector("#myForm");
        const divAlert = document.querySelector("#notif");
        form.style.display = "none";
        btn.style.display = "none";
        divAlert.style.display = "block";
        setTimeout(() => {
            divAlert.style.display = "none";
            form.style.display = "block";
            btn.style.display = "block";
        }, 6000);
    }

    return (
        <div id="formulaire">
            <div id="container-notification">
                <Notification />
            </div>
            <h1 id="contact-titre">Formulaire de contact</h1>
            <div>
                <form id="myForm">
                    <div id="inputs">
                        <input
                            className="init"
                            type="text"
                            required="required"
                            placeholder="Nom"
                            onChange={(e) => (myMessage.name = e.target.value)}
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
                        <input
                            className="init"
                            type="email"
                            placeholder="e-mail"
                            required="required"
                            onChange={(e) => (myMessage.email = e.target.value)}
                        />
                    </div>
                    <div id="mymessage">
                        <textarea
                            className="init"
                            required="required"
                            name="message"
                            id=""
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
    );
}
