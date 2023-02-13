import { addSite, getSite } from "@/library/controllerSites"
import { NextApiRequest, NextApiResponse } from "next"
import connectMongo from "../../library/mongodb"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    connectMongo()
    if (req.method === "GET") {
        await getSite(res)
    } else if (req.method === "POST") {
        await addSite(req, res)
    }
}
