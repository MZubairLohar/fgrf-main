import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import AnimationTop from "./AnimationTop";
import AnimationBottom from "./AnimationBtm";
import axios from "axios";
const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<any>({});
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    axios
      .post("/api/message/contactus", {
        email: formData.email,
        name: formData.userName,
        phoneNo: formData.phoneNo,
        userMessage: formData.userMessage,
      })
      .then(function (response) {
        console.log("user response", response);
      })
      .catch(function (error) {
        console.log("error--->", error);
      });
  };

  return (
    <section className="py-10 ">
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center px-5 bg-white rounded-lg"
      >
        <AnimationTop>
          <motion.div
            whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
              <span className="bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                Contact Us
              </span>
            </div>
          </motion.div>
        </AnimationTop>
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2  gap-5 p-5 rounded-lg">
          <div className=" grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="">
                <AnimationTop>
                  <label className="font-bold text-sky-800 pl-2">Name</label>
                </AnimationTop>
                <AnimationBottom>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-2">
                      <input
                        type="text"
                        id="userName"
                        onChange={handleChange}
                        className="bg-[#19afaf] outline-none text-white font-extrabold p-0.5 text-2xl w-full"
                      />
                    </div>
                  </motion.div>
                </AnimationBottom>
              </div>

              <div className="">
                <AnimationTop>
                  <label className="font-bold text-sky-800 pl-2">
                    Phone No
                  </label>
                </AnimationTop>
                <AnimationBottom>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-2">
                      <input
                        type="text"
                        id="phoneNo"
                        onChange={handleChange}
                        className="bg-[#19afaf] text-white outline-none font-extrabold p-0.5 text-2xl w-full"
                      />
                    </div>
                  </motion.div>
                </AnimationBottom>
              </div>
            </div>
            <div>
              <div className="">
                <AnimationTop>
                  <label className="font-bold text-sky-800 pl-2">Email</label>
                </AnimationTop>
                <AnimationBottom>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-2">
                      <input
                        type="text"
                        id="email"
                        onChange={handleChange}
                        className="bg-[#19afaf] outline-none text-white font-extrabold p-0.5 text-2xl w-full"
                      />
                    </div>
                  </motion.div>
                </AnimationBottom>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <AnimationTop>
                <label className="font-bold text-sky-800 pl-2">Message</label>
              </AnimationTop>
              <AnimationBottom>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="shadow-lg  rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0">
                    <textarea
                      rows={4}
                      id="userMessage"
                      onChange={handleChange}
                      className="bg-[#19afaf] outline-none text-white font-extrabold p-0.5 text-2xl resize-none w-full"
                    ></textarea>
                  </div>
                </motion.div>
              </AnimationBottom>
            </div>
          </div>
        </div>
        <AnimationTop>
          <motion.div
            whileHover={{ scale: 1.2, filter: "brightness(1.2)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button
              type="submit"
              className="rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3"
            >
              <span className="bg-white px-2 text-sky-900 font-extrabold p-0.5 text-2xl">
                Send
              </span>
            </button>
          </motion.div>
        </AnimationTop>
      </form>
    </section>
  );
};
export default ContactUs;
