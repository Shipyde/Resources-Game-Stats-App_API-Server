import nodemailer from "nodemailer";

interface IEmailPayload {
  to: string;
  subject: string;
  html: string;
}

const smtpOptions = {
  host: process.env.EMAIL_SERVER_HOST,
  port: 587,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

export const sendEmail = async (data: IEmailPayload) => {
  const transporter = nodemailer.createTransport(smtpOptions);

  return transporter.sendMail({
    from: process.env.EMAIL_FROM,
    ...data,
  });
};

/**
 *
 * EXAMPLE USAGE sendEmail:
 *
 *  import { sendEmail } from "./lib/mailer";
 *
 *  const mailsend = await sendEmail({
 *    to: empfaenger@example.com,
 *    subject: "Example Subject",
 *    html: "<h1>Example EMAIL</h1>",
 *  });
 *
 */
