import { MessageObjet, PostRequest, Site } from "./interfaces"

export class postRequest implements PostRequest {
    method: string
    headers: { "Content-Type": string }
    body: string
    constructor(data: string | MessageObjet | Site, method: string = "POST") {
        this.method = method
        this.headers = {
            "Content-Type": "application/json",
        }
        this.body = JSON.stringify(data)
    }
}
