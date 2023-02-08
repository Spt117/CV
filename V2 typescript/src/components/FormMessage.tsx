import { obj } from "@/library/const"
import { displayElementById, selectorById } from "@/library/function"
import { useEffect, useState } from "react"

export default function FormMessage(): JSX.Element {
    const [msg, setMsg] = useState(obj)
    const form: string[] = ["form-name", "form-mail", "form-subject", "form-text"]

    function isValideForm(): boolean {
        let isFormValid = true
        const button = selectorById("form-btn") as HTMLButtonElement
        console.log(button)

        form.forEach((element) => {
            const selectedElement = selectorById(element)
            if (selectedElement === null || (selectedElement as HTMLInputElement).value === "") {
                isFormValid = false
                button.disabled = false
            }
        })
        return isFormValid
    }

    useEffect(() => {
        isValideForm()
    }, [msg])

    return (
        <>
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
        </>
    )
}
