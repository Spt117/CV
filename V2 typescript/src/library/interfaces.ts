import { ObjectId } from "mongodb"

export interface MessageObjet {
    firstName: string
    name: string
    objet: string
    email: string
    message: string
}

export interface Site {
    save(): Promise<void>
    _id: ObjectId
    titre: string
    url: string
    description: string
    image?: string
    techno: string
}
