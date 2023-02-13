import { NextApiRequest, NextApiResponse } from "next"
import site from "@/models/site"
import { Site } from "./interfaces"
import { UpdateResult } from "mongodb"

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
        if (newsite.save) await newsite.save()
        res.status(201).json({ message: "Site enregistré" })
    } catch (error: any) {
        res.status(500).json({ error: error })
    }
}

export async function deleteSite(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        await site.deleteOne({ _id: req.query.id })
        res.status(200).json({ message: "Site supprimé" })
    } catch (error: any) {
        res.status(500).json({ error: error })
    }
}

export async function updateSite(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        const response: UpdateResult = await site.updateOne({ _id: req.query.id }, { ...req.body, _id: req.query.id })
        response.modifiedCount > 0
            ? res.status(200).json({ message: "Site mis à jour !" })
            : res.status(500).json({ error: "Echec de la mise à jour" })
    } catch (error: any) {
        res.status(500).json({ error: error })
    }
}
