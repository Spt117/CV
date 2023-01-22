import { useEffect, useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    let myMessage = {
        firstName: "",
        name: "",
        entreprise: "",
        email: "",
        message: "",
    };

    useEffect(() => {
        console.log(form);
    }, [form]);

    return (
        <div id="formulaire">
            <h1 id="contact-titre">Formulaire de contact</h1>
            <div>
                <div id="inputs">
                    <input
                        type="text"
                        placeholder="Nom"
                        onChange={(e) => (myMessage.name = e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Prénom"
                        onChange={(e) => (myMessage.firstName = e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="e-mail"
                        required="required"
                        onChange={(e) => (myMessage.email = e.target.value)}
                    />
                </div>
                <div id="mymessage">
                    <textarea
                        name="message"
                        id=""
                        // cols="70"
                        // rows="20"
                        placeholder="Votre message..."
                        onChange={(e) => (myMessage.message = e.target.value)}
                    ></textarea>
                    <button onClick={() => console.log(myMessage)}>Clic</button>
                </div>
            </div>
        </div>
    );
}
