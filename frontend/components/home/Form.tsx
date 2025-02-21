"use client";

import { useState } from "react";
import VideoModel from "../modal/videoModal";

const Form = () => {
  const data = ["/video/v2.mp4", "/video/v2.mp4", "/video/v2.mp4"];
  const [open, setOpen] = useState(false);

  return (
    <div className="h-auto mt-8 relative lg:py-16 px-2 lg:bg-transparent bg-[#242424] ">
      <div className="max-w-[1000px] mx-auto w-full h-full ">
        <div className="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-x-5 py-6">
          <div className="lg:col-span-1 col-span-1 w-full">
            <div className="cursor-pointer md:w-48 w-32 md:text-base text-sm font-bold md:h-12 h-10 bg-[#efeff1] rounded-full mx-auto border-y-4 border-x-8 border-[#faf8f8] flex justify-center items-center">
              NEWS
            </div>
            {data.map((data, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col gap-3 gapy-6 py-4 lg:ml-8 xl:ml-0"
              >
                <div
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <img
                    src="/video/videoThumbnail.JPG"
                    alt=""
                    className="rounded-2xl w-[400px] cursor-pointer"
                  />
                </div>
                <div className=" text-white text-sm flex flex-col justify-between">
                  <p className="text-2xl lg:text-lg font-medium">
                    Faizan Global Relief Foundation (Abdul Habib Attari)
                  </p>
                  <div>
                    <p className="text-gray-300">Duration: 00:30:45</p>
                    <p className="text-gray-300">Created Date: 2021-02-23</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 cursor-pointer md:w-48 w-32 md:h-12 h-10 font-bold md:text-base text-sm flex justify-center items-center bg-[#efeff1] rounded-full mx-auto border-y-4 border-x-8 border-[#faf8f8]">
              VIEW ALL
            </div>
          </div>
          <div className="col-span-1 lg:mt-0 mt-4">
            <div className="cursor-pointer md:w-48 md:h-12 w-32 h-10 md:text-base text-sm bg-[#efeff1] rounded-full mx-auto border-y-4 border-x-8 border-[#faf8f8] flex justify-center items-center font-bold">
              CONTACT
            </div>
            <form className="lg:w-full max-w-sm mx-auto bg-white p-3 rounded-md shadow-[-7px_0_#999995] my-4">
              <div className="grid grid-cols-2 gap-4 text-black">
                <div className="md:col-span-1 col-span-2">
                  <label htmlFor="name" className="mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="h-9 w-full rounded outline-none p-2 shadow-[5px_5px_10px_#999995]"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="md:col-span-1 col-span-2">
                  <label htmlFor="email" className="mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="h-9 w-full rounded outline-none p-2 shadow-[5px_5px_10px_#999995]"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="md:col-span-1 col-span-2">
                  <label htmlFor="phone" className="mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="h-9 w-full rounded outline-none p-2 shadow-[5px_5px_10px_#999995]"
                    placeholder="Enter your Phone Number"
                  />
                </div>
                <div className="md:col-span-1 col-span-2">
                  <label htmlFor="fullName" className="mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="h-9 w-full rounded outline-none p-2 shadow-[5px_5px_10px_#999995]"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="address" className="mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    className="h-9 w-full rounded outline-none p-2 shadow-[5px_5px_10px_#999995]"
                    placeholder="Enter your address"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="message" className="mb-1">
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="w-full rounded outline-none p-2 shadow-[5px_5px_10px_#999995]"
                    placeholder="Write your message..."
                    rows={7}
                  ></textarea>
                </div>
              </div>
            </form>
            <div className="cursor-pointer w-48 text-sm h-12 bg-[#efeff1] rounded-full mx-auto border-y-4 border-x-8 border-[#faf8f8] flex justify-center items-center font-bold">
              SEND YOUR MESSAGE
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-no-repeat top-0 left-0 bg-center bg-cover w-full h-full z-[-1] lg:block hidden">
        <img
          src="./img/new-img/about_04.png"
          className="w-full h-full"
          alt=""
        />
      </div>
      <VideoModel open={open} setOpen={setOpen}>
        <div >
          <video
            width="900"
            height="900"
            controls
            className="rounded-2xl"
            poster={""}
            autoPlay
          >
            <source src="/video/v2.mp4" type="video/mp4" />
          </video>
        </div>
      </VideoModel>
    </div>
  );
};

export default Form;
