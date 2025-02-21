import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  port: 465,
  auth: {
    user: "fgrfuk25@gmail.com",
    pass: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD,
  },
});
export const POST = async (req: Request, res: Response) => {
  try {
    const { phoneNo, name, userMessage, email } = await req.json();
    const mailOptions = {
      from: email,
      to: "fgrfuk25@gmail.com",
      subject: name,
      html: `<h3>Email: ${email}  and PhoneNO: ${phoneNo}</h3><br></br><p>Message :${userMessage}</p>`,
    };
    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log(info);
      }
    });
    return NextResponse.json(
      { message: "Message send Sucessfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Message send to Faild" },
      { status: 400 }
    );
  }
};
