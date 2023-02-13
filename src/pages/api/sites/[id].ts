import { deleteSite, updateSite } from "@/library/controllerSites"
import connectMongo from "@/library/mongodb"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    connectMongo()
    if (req.method === "DELETE") {
        await deleteSite(req, res)
    } else if (req.method === "PUT") {
        await updateSite(req, res)
    }
}
