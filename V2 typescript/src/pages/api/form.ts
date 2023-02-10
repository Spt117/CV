import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { NextApiRequest, NextApiResponse } from "next"
import { MessageObjet } from "@/library/interfaces"
dotenv.config()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const body: MessageObjet = req.body

    const transporter = nodemailer.createTransport({
        host: "ssl0.ovh.net",
        port: 465,
        secure: true,
        auth: {
            user: process.env.mail as string,
            pass: process.env.password as string,
        },
    }) as nodemailer.Transporter

    let info = (await transporter.sendMail({
        // sender address
        from: `<${body.email}>`,
        // list of receivers
        to: process.env.mail,
        // Subject line
        subject: `Message de ${body.name} ${body.firstName}, objet : ${body.objet}`,
        // html body
        html: `${body.message}`,
    })) as nodemailer.SentMessageInfo

    console.log(info.response)
    console.log(info.rejected)
    info.rejected.length === 0 ? res.status(201).json("Message envoyé") : (error: object) => res.status(400).json({ error: error })
}
