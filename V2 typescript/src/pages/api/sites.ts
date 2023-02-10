import { Site } from "@/library/interfaces"
import { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "../../library/mongodb"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await clientPromise
    const db = client.db("Portfolio")

    if (req.method === "GET") {
        const data: object[] = await db.collection("sites").find({}).toArray()
        res.status(200).send(data)
    } else if (req.method === "POST") {
        let bodyObject: Site = req.body
        let newPost = await db.collection("sites").insertOne(bodyObject)
        newPost.acknowledged === true
            ? res.status(201).json({ message: "Site enregistré" })
            : (error: object) => res.status(400).json({ error: error })
    }
}
