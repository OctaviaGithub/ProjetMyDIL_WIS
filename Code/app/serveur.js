const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { email, subject, message, newsletter } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'octavia.epsi@gmail.com',
      pass: 'Octavia180121#'
    }
  });

  const mailOptions = {
    from: 'ton_adresse_email@gmail.com',
    to: 'enzolahaye@yahoo.com',
    subject: subject,
    text: `De: ${email}\n\nMessage: ${message}\n\nInscription à la newsletter: ${newsletter === 'yes' ? 'Oui' : 'Non'}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    } else {
      console.log('E-mail envoyé avec succès :', info.response);
      res.status(200).send('E-mail envoyé avec succès');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});