const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "all.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
      user: 'carlos.fdez.guar19@gmail.com',
      pass: 'carlosjair1234'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'carlos.fdez.guar19@gmail.com', // sender address
    to: "carlosjair.demo@gmail.com", // list of receivers
    subject: "Este es un nuevo correo", // Subject line
    text: "Hola Jair", // plain text body
    html: "<b>Hola Jair</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMail();
