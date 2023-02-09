import { useEffect, useState } from "react"
import FormMessage from "./FormMessage"
import Image from "next/image.js"
import Icone from "../assets/mail.png"
import Stop from "../assets/interdit.png"

export default function Contact(): JSX.Element {
    const [bool, setBool] = useState<boolean>(false)

    useEffect(() => {}, [])
    return (
        <>
            <div id="container-notification"></div>
            <div className="child1" id="myForm">
                <h1 id="contact-titre">Formulaire de contact</h1>
                <FormMessage setBool={setBool} />
                <button className="btn" id="form-btn">
                    {bool && <p id="p-button">Envoyer</p>}
                    {!bool && <p id="p-button">Formulaire non rempli</p>}
                    {bool && <Image src={Icone} id="envoyer" className="social" alt="Mail" />}
                    {!bool && <Image src={Stop} id="envoyer" className="social" alt="Interdit" />}
                </button>
            </div>
        </>
    )
}
