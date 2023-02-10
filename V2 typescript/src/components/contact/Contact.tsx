import { useState } from "react"
import FormMessage from "./FormMessage"
import Image from "next/image.js"
import Icone from "../../assets/mail.png"
import { button, obj } from "@/library/const"
import { MessageObjet } from "@/library/interfaces"
import Stop from "../../assets/interdit.png"
import { fetchData, selectorById } from "@/library/functions"

export default function Contact(): JSX.Element {
    const [bool, setBool] = useState<boolean>(false)
    const [msg, setMsg] = useState<MessageObjet>(obj)

    async function sendMessage() {
        await fetchData("/api/form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(msg),
        })
        ;(selectorById("theForm") as HTMLFormElement).reset()
        setBool(false)
        button.disabled = true
    }

    return (
        <>
            <div id="container-notification"></div>
            <div className="child1" id="myForm">
                <h1 id="contact-titre">Formulaire de contact</h1>
                <FormMessage setBool={setBool} setMsg={setMsg} msg={msg} />
                <button className="btn" id="form-btn" onClick={sendMessage}>
                    {bool && <p id="p-button">Envoyer</p>}
                    {!bool && <p id="p-button">Formulaire non rempli</p>}
                    {bool && <Image src={Icone} id="envoyer" className="social" alt="Mail" />}
                    {!bool && <Image src={Stop} id="envoyer" className="social" alt="Interdit" />}
                </button>
            </div>
        </>
    )
}
