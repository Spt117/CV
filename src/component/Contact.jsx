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

    function eatFood() {
        alert("Form has been submitted");
    }

    function test() {
        console.log(myMessage);
        eatFood();
    }

    return (
        <div id="formulaire">
            <h1 id="contact-titre">Formulaire de contact</h1>
            <form method="POST" onSubmit={test}>
                <div>
                    <div id="inputs">
                        <input
                            type="text"
                            required="required"
                            placeholder="Nom"
                            onChange={(e) => (myMessage.name = e.target.value)}
                        />
                        <input
                            type="text"
                            required="required"
                            placeholder="Prénom"
                            onChange={(e) =>
                                (myMessage.firstName = e.target.value)
                            }
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
                        <input type="submit" id="validation" />
                    </div>
                </div>
            </form>
            <button onClick={test}> Clic </button>
        </div>
    );
}
