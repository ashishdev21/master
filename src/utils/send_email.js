var Transporter = require('../../config/mail');
var keys = require('../../config/keys');
const nodemailer = require('nodemailer');

class sendEmail {
    constructor(reciever, type, token) {
        this.reciever = reciever;
        this.type = type;
        this.token = token
    }

    email() {
        return new Promise((resolve, reject) => {
            var emailContent = require(`../emailTemplate/${this.type}`)
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'ashishvarshney576@gmail.com',
                  pass: 'Ashish@21797'
                }
              });
            var response = {};
            var mailOpts = {
                from: 'ashishvarshney576@gmail.com',
                to: this.reciever,
                subject: emailContent.subject,
                text: `${emailContent.body}`+ this.reciever + `/` + this.token
            };
            transporter.sendMail(mailOpts, function(error, info){
                if (error) {
                console.log(error);
                } else {
                console.log('Email sent: ' + info.response);
                return info.response
                }
            });
        })
    }

    // failureHandler(response, reject) {
    //     response.responseTimestamp = new Date();
    //     response.result = 'Failed';
    //     return reject(response);

    // }

}

module.exports = sendEmail;

