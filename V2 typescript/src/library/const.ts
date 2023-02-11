import { selectorById } from "./functions"
import { MessageObjet } from "./interfaces"

export const message: MessageObjet = {
    firstName: "",
    name: "",
    objet: "",
    email: "",
    message: "",
}

export const buttonSendMessage = selectorById("form-btn") as HTMLButtonElement
