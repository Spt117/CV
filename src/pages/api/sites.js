import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db("Portfolio");
    console.log(req.method);
    if (req.method === "GET") {
        const data = await db.collection("sites").find({}).toArray();
        res.status(200).send(data);
    } else console.error();
};
