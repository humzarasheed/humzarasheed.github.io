import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  const mailOptions = {
    from: fromEmail,
    to: [fromEmail, email],
    subject: subject,
    html: `
      <h1>${subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
