import nodemailer from "nodemailer";
const dotenv = require("dotenv");
dotenv.config();

export default async (req, res) => {
    const body = req.body;

    let transporter = nodemailer.createTransport({
        host: "ssl0.ovh.net",
        port: 465,
        secure: true,
        auth: {
            user: "contact@jb-fund.com",
            pass: process.env.password,
        },
    });

    console.log(body);
    // transporter.verify(function (error, success) {
    //     if (error) {
    //         console.log("ça ne marche pas", error);
    //     } else {
    //         console.log("Server is ready to take our messages");
    //     }
    // });

    // const mailData = {
    //     from: "<contact@jb-fund.com>",
    //     to: "blockchaindeveloppeur@gmail.com",
    //     subject: `Message de ${body.name}`,
    //     text: body.message + " | Sent from: " + body.email,
    //     html: `<div>${body.message}</div><p>Sent from:
    //     ${body.email}</p>`,
    // };

    let info = await transporter.sendMail({
        from: '"John Doeuf 🌚"<contact1010@jb-fund.com>', // sender address
        to: "theshitcoinert@gmail.com", // list of receivers
        subject: body.email, // Subject line
        text: body.message, // plain text body
        html: `<b>${body.message}</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
