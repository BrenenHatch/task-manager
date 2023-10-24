const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = process.env.sendgridAPIKey;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'brenen.hatch21@gmail.com',
        subject: 'Welcome!',
        text: `Welcome to the app, ${name}.`
    });
};

const sendGoodByeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'brenen.hatch21@gmail.com',
        subject: 'Good-Bye!',
        text: `${name}, account has been deleted.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}