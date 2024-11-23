
const nodemailer = require('nodemailer');

require("dotenv").config();

// sendMail :- get mailTransporter and mailDetails and sent mail to that account

// create mailTransporter using createTransport methode and pass gmail id and app password for authentication

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

const main = async (details) => {
    try {
        await transporter.sendMail(details);
        console.log("email send successfully");
    } catch (err) {
        console.log(err);
    }
}


const sendMailResponse = async email => {
    try {
        const html = `
        <p>Dear Student,</p>
        <p>Welcome to <strong>LeetCode by Jahir</strong>!</p>
        <p>We are excited to have you onboard as you embark on your journey to master Data Structures and Algorithms. Our platform is designed to provide you with a hands-on coding experience, interactive problem-solving, and a chance to enhance your skills.</p>
        <h4>Get Started Now:</h4>
        <ul>
            <li>Practice coding problems tailored to your skill level.</li>
            <li>Challenge yourself with our curated mock tests.</li>
            <li>Track your progress and compete with peers.</li>
        </ul>
        <p>If you have any questions or need assistance, don't hesitate to reach out to us.</p>
        <p>Happy Coding!</p>
        <p><strong>Best Regards,</strong></p>
        <p><strong>Jahir Pendhari.</strong></p>
        <p><strong>+91-8668953367.</strong></p>

        `;

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'Welcome to LeetCode by Jahir - Start Coding Today!',
            html: html
        });
    } catch (err) {
        console.log("Error sending email:", err);
    }
};

module.exports = { main, sendMailResponse }
