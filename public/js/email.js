const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    },
    connectionTimeout: 5 * 60 * 1000, // 5 min
  });

  let mailOptions = {
    from: 'joaoaugusto27082001@gmail.com',
    to: 'joaorodriguesjf@hotmail.com',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });