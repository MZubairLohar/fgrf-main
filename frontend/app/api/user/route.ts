import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  port: 465,
  auth: {
    // user: "ali4282271@gmail.com",
    // pass: "ztwd zzbv qeqr skvn",
    user: "fgrfuk25@gmail.com", // Your Gmail address
    pass: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD, // Your Gmail password
  },
});
export const POST = async (req: Request, res: Response) => {
  try {
    const { amount, email } = await req.json();
    const mailOptions = {
      from: "fgrfuk25@gmail.com",
      to: email,
      subject: `Thank you for your ${amount} Donation!`,
      text: "FGRF Thankfull for your Donation.",
      // html: `<h1>Hello ashraf</h1><p>my name is ${name} from karachi so i will meet with you tomorrow</p><p>~${message}</p><p>~${phoneNo}</p>`,
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
