import { NextApiRequest, NextApiResponse } from "next"
import site from "@/models/site"
import { Site } from "./interfaces"

export async function getSite(res: NextApiResponse): Promise<void> {
    try {
        const sites: Site[] = await site.find()
        res.status(200).json(sites)
    } catch (error: any) {
        res.status(500).json({ error: error })
    }
}

export async function addSite(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        const newsite: Site = new site({ ...req.body })
        const test = await newsite.save()
        res.status(201).json({ message: "Site enregistré" })
    } catch (error: any) {
        res.status(500).json({ error: error })
    }
}

export async function deleteSite(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        await site.deleteOne({ _id: req.query.id })
        res.status(200).json({ message: "Site supprimé" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
