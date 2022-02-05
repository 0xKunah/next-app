export default async (req, res) => {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({ 
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: 'synko.contact@gmail.com',
            pass: 'SynkoChat2021#'
        }
    });
        
    const mailData = {
        from: '"Kunah.fr" <synko.contact@gmail.com>',
        to: 'reply.kunah@gmail.com',
        subject: `Message From ${req.body.user}`,
        text: req.body.msg,
        html: `<div>${req.body.msg}</div>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err) res.status(401).json({err})
    })
    res.status(200).json({data: "ok c good"})
}