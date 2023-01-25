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

    console.log(body);

    let info = await transporter.sendMail({
        from: `<${body.email}>`, // sender address
        to: process.env.mail, // list of receivers
        subject: `Message de ${body.name} ${body.firstName}`, // Subject line
        html: `${body.message}`, // html body
    });

    console.log("Message sent: %s", info.messageId);

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
