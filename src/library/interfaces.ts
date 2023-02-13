import { ObjectId } from "mongodb"

export interface MessageObjet {
    firstName: string
    name: string
    objet: string
    email: string
    message: string
}

export interface Site {
    _id?: ObjectId
    save?(): Promise<Site>
    titre: string
    url: string
    description: string
    image?: string
    techno: string
}

export interface Request {
    method: string
    headers: { [key: string]: string }
    body: string
}

export interface State {
    sites: Site[]
}
