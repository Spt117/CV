import { useState } from "react"
import { fetchData, notification, selectorById } from "@/library/functions"
import { message } from "@/library/const"
import { MessageObjet } from "@/library/interfaces"
import { request } from "@/library/class"
import Icone from "../../assets/mail.png"
import Stop from "../../assets/interdit.png"
import FormMessage from "./FormMessage"
import Image from "next/image.js"

export default function Contact(): JSX.Element {
    const [bool, setBool] = useState<boolean>(false)
    const [msg, setMsg] = useState<MessageObjet>(message)
    const buttonSendMessage = selectorById("form-btn") as HTMLButtonElement

    async function sendMessage(): Promise<void> {
        console.log(buttonSendMessage.disabled)

        await fetchData("/api/form", new request(msg, "POST"))
        ;(selectorById("theForm") as HTMLFormElement).reset()
        setBool(false)
        buttonSendMessage.disabled = true
        notification(0, "myForm")
        console.log(buttonSendMessage.disabled)
    }

    return (
        <div className="child1" id="myForm">
            <h1 id="contact-titre">Formulaire de contact</h1>
            <FormMessage setBool={setBool} setMsg={setMsg} msg={msg} />
            <button className="btn" id="form-btn" onClick={sendMessage}>
                {bool && <p id="p-button">Envoyer</p>}
                {bool && <Image src={Icone} id="envoyer" className="social" alt="Mail" />}
                {!bool && <p id="p-button">Formulaire non rempli</p>}
                {!bool && <Image src={Stop} id="envoyer" className="social" alt="Interdit" />}
            </button>
        </div>
    )
}
