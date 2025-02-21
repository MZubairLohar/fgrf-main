"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Form from "./Form";
import Link from "next/link";

const Together = () => {
  const [index, setIndex] = useState(0);
  const items = [
    {
      id: 1,
      content: "3,24,000",
      data: "Planted",
    },
    {
      id: 2,
      content: "3,04,000",
      data: "Trees",
    },
    {
      id: 3,
      content: "3,00,000",
      data: "You",
    },
  ];
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);
  const gallery = [
    "./img/galleryImg1.png",
    "./img/galleryImg2.png",
    "./img/galleryImg3.png",
    "./img/galleryImg4.png",
    "./img/galleryImg5.png",
    "./img/galleryImg6.png",
  ];
  return (
    <section>
      <div className="gradiant-color h-[500px] relative " id="main">
        <div className="max-w-[1200px] mx-auto px-3 h-full">
          <div className="w-full mx-auto flex flex-col justify-center gap-4 pt-10 lg:pt-20">
            <h2 className="text-center lg:text-5xl leading-none font-normal md:text-3xl text-2xl text-white py-2">
              Changing the world is a big job. Lets do it together.
            </h2>
            <div className="flex justify-center gap-4 flex-col items-center md:flex-row mt-3 md:mt-8">
              <div className="w-48 h-[70px] font-bold relative py-2 flex justify-center  border-4 border-[#faf8f8] shadow-inner bg-[#efeff1] text-black rounded-full border-y-4 border-x-8 lg:flex lg:items-center lg:flex-col">
                <AnimatePresence>
                  <motion.div
                    key={items[index].id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: "easeInOut" }}
                    style={{ position: "absolute" }}
                  >
                    <p className="text-center">{items[index].content}</p>
                    <p className="text-center">{items[index].data}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="w-48 h-[70px] relative font-bold py-2 flex justify-center  text-black bg-[#efeff1] shadow-inner rounded-full border-y-4 border-x-8 border-[#faf8f8] lg:flex lg:items-center lg:flex-col">
                <AnimatePresence>
                  <motion.div
                    key={items[index].id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: "easeInOut" }}
                    style={{ position: "absolute" }}
                  >
                    <p className="text-center">{items[index].content}</p>
                    <p className="text-center">{items[index].data}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="w-48 h-[70px] relative font-bold py-2 flex justify-center  text-black bg-[#efeff1] shadow-inner rounded-full border-y-4 border-x-8 border-[#faf8f8] lg:flex lg:items-center lg:flex-col">
                <AnimatePresence>
                  <motion.div
                    key={items[index].id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: "easeInOut" }}
                    style={{ position: "absolute" }}
                  >
                    <p className="text-center">{items[index].content}</p>
                    <p className="text-center">{items[index].data}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div
            className="absolute maskAnimation bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover z-[3]"
            style={{ backgroundImage: `url(/img/mask1.svg)` }}
          ></div>
          <div
            className="absolute maskAnimation2 bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover z-[3]"
            style={{ backgroundImage: `url(/img/mask2.svg)` }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover z-[3]"
            style={{ backgroundImage: `url(/img/mask3.svg)` }}
          ></div>
        </div>
      </div>
      <div className="pt-5 md:pt-10">
        <div className="relative">
          <div className="mb-6 w-60 mx-auto rounded-full border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
            <h2 className="text-xl md:text-2xl font-semibold text-center">
              Gallery
            </h2>
          </div>
          <div className="md:w-[65%] w-full mx-auto relative z-[2]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-2 mt-5">
              {gallery.map((data, index) => (
                <div
                  key={index}
                  className="col-span-1 h-72 bg-[#f1fcd1] relative rounded-lg border-[6px] border-[#7caec1] shadow-2xl flex flex-col justify-center items-center gap-y-3"
                >
                  <img src={data} className="w-full h-full" alt="" />
                  <div className="bg-[#42a5a9] opacity-50 w-full h-full absolute top-0 left-0"></div>
                </div>
              ))}
            </div>
            <Link href={"/gallery"}>
              <div className="mb-6 w-48 mx-auto rounded-full mt-8 border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
                <h2 className="text-lg md:text-xl text-center">View All</h2>
              </div>
            </Link>
          </div>
          <div className="absolute w-full h-full z-[1] top-1/2 -translate-y-1/2 md:flex md:items-center ">
            <img
              src="./img/new-img/gallery.png"
              className="w-full h-[70%]"
              alt=""
            />
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};
export default Together;