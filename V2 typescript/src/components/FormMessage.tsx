import { obj } from "@/library/const"
import { checkMail, selectorById } from "@/library/functions"
import { MessageObjet } from "@/library/interfaces"
import { useEffect, useState } from "react"

export default function FormMessage({ setBool }: { setBool: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element {
    const [msg, setMsg] = useState<MessageObjet>(obj)
    const form: string[] = ["form-name", "form-mail", "form-subject", "form-text"]

    function isValideForm(): boolean {
        const button = selectorById("form-btn") as HTMLButtonElement

        let isFormValid = form.every((element) => {
            const selectedElement = selectorById(element)
            if (element === "form-mail") {
                return checkMail(selectedElement as HTMLInputElement)
            } else return selectedElement !== null && (selectedElement as HTMLInputElement).value !== ""
        })

        button.disabled = !isFormValid
        setBool(isFormValid)
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
