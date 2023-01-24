import nodemailer from "nodemailer";

export default async (req, res) => {
    const dotenv = require("dotenv");
    dotenv.config();

    const body = req.body;

    let transporter = nodemailer.createTransport({
        host: "ssl0.ovh.net",
        port: 465,
        secure: false,
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

    const mailData = {
        from: "contact@jb-fund.com",
        to: "blockchaindeveloppeur@gmail.com",
        subject: `Message de ${body.name}`,
        text: body.message + " | Sent from: " + body.email,
        html: `<div>${body.message}</div><p>Sent from:
        ${body.email}</p>`,
    };
    try {
        transporter.sendMail(mailData, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    } catch (error) {
        console.log("error", error);
        return res.status(500).send(error);
    }
};

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };
