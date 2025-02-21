"use client";
import Image from "next/image";
import Link from "next/link";
import AnimationTop from "../home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import { BsStopwatch } from "react-icons/bs";
const NewsSection = () => {
  const appealList = [
    {
      link: "palestine-emergency",
      img: "/donation/appeal/palestineEmergency.jpg",
      title: "100 Days of Relentless Pain and Suffering",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis necessitatibus accusantium velit iste ab aliquid dolorem, beatae perferendis maiores, magni sit labore fugit ipsa nam aut? Labore quis nobis repellat",
    },
    {
      link: "palestine-emergency",
      img: "/donation/appeal/palestineEmergency.jpg",
      title: "100 Days of Relentless Pain and Suffering",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis necessitatibus accusantium velit iste ab aliquid dolorem, beatae perferendis maiores, magni sit labore fugit ipsa nam aut? Labore quis nobis repellat",
    },
    {
      link: "palestine-emergency",
      img: "/donation/appeal/palestineEmergency.jpg",
      title: "100 Days of Relentless Pain and Suffering",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis necessitatibus accusantium velit iste ab aliquid dolorem, beatae perferendis maiores, magni sit labore fugit ipsa nam aut? Labore quis nobis repellat",
    },
    {
      link: "palestine-emergency",
      img: "/donation/appeal/palestineEmergency.jpg",
      title: "100 Days of Relentless Pain and Suffering",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis necessitatibus accusantium velit iste ab aliquid dolorem, beatae perferendis maiores, magni sit labore fugit ipsa nam aut? Labore quis nobis repellat",
    },
    {
      link: "palestine-emergency",
      img: "/donation/appeal/palestineEmergency.jpg",
      title: "100 Days of Relentless Pain and Suffering",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis necessitatibus accusantium velit iste ab aliquid dolorem, beatae perferendis maiores, magni sit labore fugit ipsa nam aut? Labore quis nobis repellat",
    },
    {
      link: "palestine-emergency",
      img: "/donation/appeal/palestineEmergency.jpg",
      title: "100 Days of Relentless Pain and Suffering",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis necessitatibus accusantium velit iste ab aliquid dolorem, beatae perferendis maiores, magni sit labore fugit ipsa nam aut? Labore quis nobis repellat",
    },
  ];

  return (
    <div className="py-16 bg-gray-200">
      <div className="flex flex-col items-center max-w-[400px] mx-auto px-3 mb-10">
        <AnimationTop>
          <motion.div
            whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              id="box3d"
              className="border-4 border-[#85d0d0]  w-60 md:w-96 py-3 bg-[#6898b1] mx-auto rounded-full shadow-lg"
            >
              <h2
                id=""
                className="text-2xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
              >
                FGRF News
              </h2>
            </div>
          </motion.div>
        </AnimationTop>
      </div>

      <div className="grid grid-cols-1 gap-5 md:gap-3 lg:grid-cols-3 lg:gap-6 md:grid-cols-2 px-5">
        {appealList.map((appeal, index) => (
          <div
            className="p-4 relative rounded-md bg-white hover:shadow-lg "
            key={index}
          >
            <Link
              //   href={`appeal/${appeal.link}`}
              href={"#"}
              className="group flex flex-col gap-2 justify-start"
            >
              <div className="relative h-60  bg-cover bg-no-repeat">
                <Image
                  src={appeal.img}
                  alt=""
                  width={600}
                  height={600}
                  className="h-full w-full transition duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-center text-base font-semibold">
                {appeal.title}
              </h3>
              <p className="text-center text-base">{appeal.desc}</p>
              <p className="bg-gray-300 w-full h-[1px]"></p>
              <span className="flex place-content-end gap-1 items-center">
                <BsStopwatch calssName="w-5 h-5 text-gray-200" />
                <span className="text-md text-gray-400">
                  MONDAY 15 JAN 2024
                </span>
              </span>
            </Link>
            <span className="absolute bottom-0  bg-[#19afaf] h-[3px] w-80 right-0"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewsSection;
