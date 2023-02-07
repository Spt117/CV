const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

export default async (req, res) => {
    const body = req.body;

    let transporter = nodemailer.createTransport({
        host: "ssl0.ovh.net",
        port: 465,
        secure: true,
        auth: {
            user: process.env.mail,
            pass: process.env.password,
        },
    });

    let info = await transporter.sendMail({
        // sender address
        from: `<${body.email}>`,
        // list of receivers
        to: process.env.mail,
        // Subject line
        subject: `Message de ${body.name} ${body.firstName}, objet : ${body.objet}`,
        // html body
        html: `${body.message}`,
    });

    // console.log("Message sent: %s", info.messageId);

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    console.log(info.response);
    console.log(info.rejected);
    info.rejected.length === 0
        ? res.status(201).json("Message envoyé")
        : (error) => res.status(400).json({ error: error });
};
