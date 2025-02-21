const express = require("express");
const router = express.Router();
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  port: 465,
  auth: {
    user: "fgrfuk25@gmail.com",
    pass: process.env.GOOGLE_PASSWORD,
  },
});

router.post("/contactus", async (req, res) => {
  try {
    const { phoneNo, name, userMessage, email } = req.body;
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
    res.status(200).json("OK ki report hai");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
