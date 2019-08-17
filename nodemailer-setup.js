const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_URL,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  }
});

function sendMail(from, email, subject, message, callback){
  const mailOptions = {
    from: `Contact form - ${from} - ${email} \<${process.env.EMAIL_ADDRESS}\>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: subject,
    text: message
  };
  transporter.sendMail(mailOptions, callback);
}

module.exports = sendMail;