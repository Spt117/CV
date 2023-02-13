import { ObjectId } from "mongodb"
import { MessageObjet, Request, Site } from "./interfaces"

export class request implements Request {
    method: string
    headers: { "Content-Type": string }
    body: string
    constructor(data: string | MessageObjet | Site | ObjectId, method: string) {
        this.method = method
        this.headers = {
            "Content-Type": "application/json",
        }
        this.body = JSON.stringify(data)
    }
}
