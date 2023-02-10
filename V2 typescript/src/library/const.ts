import { selectorById } from "./functions"
import { MessageObjet, Post } from "./interfaces"

export const obj: MessageObjet = {
    firstName: "",
    name: "",
    objet: "",
    email: "",
    message: "",
}

export const button = selectorById("form-btn") as HTMLButtonElement
