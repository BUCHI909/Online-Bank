import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APP_PASSWORD
  }
});

export const sendWelcomeEmail = async (email, name) => {
  await transporter.sendMail({
    from: `"GenesisBank" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to GenesisBank",
    html: `
      <h2>Welcome, ${name}!</h2>
      <p>Your GenesisBank account has been successfully created.</p>
      <p>We’re glad to have you onboard.</p>
    `,
  });
};

export default transporter;