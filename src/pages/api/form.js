export default (req, res) => {
    const dotenv = require("dotenv");
    dotenv.config();

    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "theshitcoinert@gmail.com",
            pass: process.env.password,
        },
        secure: false,
    });
    const body = req.body;

    const mailData = {
        from: body.email,
        to: "fundjb@gmail.com",
        subject: `Message de ${body.name}`,
        text: body.message + " | Sent from: " + body.email,
        html: `<div>${body.message}</div><p>Sent from:
        ${body.email}</p>`,
    };

    console.log("body:", body);

    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log("Voici une erreur", err);
        else console.log(info);
    });
    res.status(200);
};
