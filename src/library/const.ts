import { selectorById } from "./functions"
import { MessageObjet, Site } from "./interfaces"

export const message: MessageObjet = {
    firstName: "",
    name: "",
    objet: "",
    email: "",
    message: "",
}

export const buttonSendMessage = selectorById("form-btn") as HTMLButtonElement

export const siteObjet: Site = {
    titre: "",
    url: "",
    description: "",
    techno: "",
}

export const notifications: string[] = ["Votre message a bien été envoyé !"]
