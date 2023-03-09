import { useEffect } from "react"
import { checkMail, selectorById } from "@/library/functions"
import { MessageObjet } from "@/library/interfaces"

export default function FormMessage({
    setBool,
    msg,
    setMsg,
}: {
    setBool: React.Dispatch<React.SetStateAction<boolean>>
    msg: MessageObjet
    setMsg: React.Dispatch<React.SetStateAction<MessageObjet>>
}): JSX.Element {
    const form: string[] = ["form-name", "form-mail", "form-subject", "form-text"]

    function isValideForm(): boolean {
        const buttonSendMessage = selectorById("form-btn") as HTMLButtonElement
        let boolFormValid: boolean = form.every((element) => {
            const selectedElement: HTMLInputElement = selectorById(element) as HTMLInputElement
            if (element === "form-mail") {
                return checkMail(selectedElement as HTMLInputElement)
            } else return selectedElement !== null && (selectedElement as HTMLInputElement).value !== ""
        })
        buttonSendMessage.disabled = !boolFormValid
        setBool(boolFormValid)
        return boolFormValid
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
