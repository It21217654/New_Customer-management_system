const { response } = require('express');
var nodemailer = require('nodemailer');

const sendEmailNodemailer = (email,subject, msg) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'remscompanylk@gmail.com',
            pass: 'iggmcntjykqdtias'
        }
    });

    var mailOptions = {
        from: 'remscompanylk@gmail.com',
        to: email,
        subject: subject,
        text: msg
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return error;
        } else {
            console.log('Email sent: ' + info.response);
            return "Email sent" + info.response;
        }
    });
}

module.exports = { sendEmailNodemailer };