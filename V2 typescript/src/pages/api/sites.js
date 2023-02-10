import clientPromise from "../../library/mongodb"

export default async (req, res) => {
    const client = await clientPromise
    const db = client.db("Portfolio")

    if (req.method === "GET") {
        const data = await db.collection("sites").find({}).toArray()
        res.status(200).send(data)
    } else if (req.method === "POST") {
        let bodyObject = req.body
        let newPost = await db.collection("sites").insertOne(bodyObject)
        newPost.acknowledged === true
            ? res.status(201).json({ message: "Site enregistré" })
            : (error) => res.status(400).json({ error: error })
    }
}
