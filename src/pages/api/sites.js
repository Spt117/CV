import clientPromise from "../../lib/mongodb";

// sans utiliser de modèle
export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db("Portfolio");
    const posts = await db.collection("sites").find({}).toArray();
    res.status(200).send({ posts });
};
