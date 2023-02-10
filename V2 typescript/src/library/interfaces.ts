export interface MessageObjet {
    firstName: string
    name: string
    objet: string
    email: string
    message: string
}

export interface Site {
    _id: string
    titre: string
    url: string
    description: string
    image?: string
    techno: string
}
