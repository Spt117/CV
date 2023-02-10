import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    const Mdp: string | undefined = process.env.mdp
    const body: string = req.body
    body === Mdp && Mdp !== undefined ? res.status(200).json(true) : res.status(400).json(false)
}
