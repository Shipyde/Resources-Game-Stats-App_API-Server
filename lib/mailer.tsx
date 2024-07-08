import nodemailer from "nodemailer";

interface IEmailPayload {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (data: IEmailPayload) => {
  const {
    EMAIL_SERVER_HOST,
    EMAIL_SERVER_PORT,
    EMAIL_SERVER_USER,
    EMAIL_SERVER_PASSWORD,
    EMAIL_SERVER_FROM,
  } = process.env;

  if (
    EMAIL_SERVER_FROM &&
    EMAIL_SERVER_HOST &&
    EMAIL_SERVER_PORT &&
    EMAIL_SERVER_USER &&
    EMAIL_SERVER_PASSWORD
  ) {
    const smtpOptions = {
      host: EMAIL_SERVER_HOST,
      port: EMAIL_SERVER_PORT,
      auth: {
        user: EMAIL_SERVER_USER,
        pass: EMAIL_SERVER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    };

    const transporter = nodemailer.createTransport(
      smtpOptions as nodemailer.TransportOptions
    );

    return transporter.sendMail({
      from: EMAIL_SERVER_FROM,
      ...data,
    });
  } else {
    return new Error("EMAIL_SERVER_* not found in .env file!");
  }
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
 *  if (mailsend instanceof Error) {
 *    throw mailsend;
 *  }
 *
 */
