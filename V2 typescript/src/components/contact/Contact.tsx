import { useState } from "react"
import { fetchData, selectorById } from "@/library/functions"
import { buttonSendMessage, message } from "@/library/const"
import { MessageObjet } from "@/library/interfaces"
import { postRequest } from "@/library/class"
import Icone from "../../assets/mail.png"
import Stop from "../../assets/interdit.png"
import FormMessage from "./FormMessage"
import Image from "next/image.js"

export default function Contact(): JSX.Element {
    const [bool, setBool] = useState<boolean>(false)
    const [msg, setMsg] = useState<MessageObjet>(message)

    async function sendMessage(): Promise<void> {
        await fetchData("/api/form", new postRequest(msg))
        ;(selectorById("theForm") as HTMLFormElement).reset()
        setBool(false)
        buttonSendMessage.disabled = true
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
