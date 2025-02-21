"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";
import Link from "next/link";
import ImageModal from "@/components/modal/ImageModal";
import AnimatedComponentLeft from "./AnimationLeft";
import AnimatedComponentRight from "./AnimationRight";
import AnimationBottom from "./AnimationBtm";
import Image from "next/image";
import AnimationTop from "./AnimationTop";
import { useContentContext } from "../contextApi/contentContext";

const Achievement = () => {
  const contentContext = useContentContext();
  const dataContent = contentContext.content;
  const foodBoxData = dataContent.filter(
    (title: any) => "Main Page" === title.content.sec
  );
  const achievementSlider = foodBoxData[0]?.content?.achievementSlider;
  const achievements = achievementSlider;
  const data = achievements;
  const [open, setOpen] = useState(false);
  const [certicateImage, setCertificateImage] = useState("");

  const handleOpenAndCerticate = (imagePath: string) => {
    setCertificateImage(imagePath);
    setOpen(true);
  };
  return (
    <section className="pt-2 pb-6 max-w-7xl mx-auto">
      <div className="relative bg-center bg-no-repeat bg-cover">
        {/* <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div
            id="box3d"
            className="border-4 border-[#85d0d0] w-1/2 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
          >
            <h2
              id=""
              className="text-2xl md:text-3xl font-bold text-white text-center"
            >
              ACHIEVEMENTS
            </h2>
          </div>
          <div
            style={{ backgroundImage: `url(./img/new-img/Button-04.png)` }}
            className="bg-center bg-no-repeat bg-cover rounded-full mx-auto flex justify-center items-center py-2"
          />
        </div> */}
        <div className="flex flex-col my-8 items-center max-w-[1200px] mx-auto px-3">
          <AnimationTop>
            <motion.div
              whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div
                id="box3d"
                className="border-4 border-[#85d0d0]  w-60 md:w-80 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
              >
                <h2
                  id=""
                  className="text-xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
                >
                  Achievements
                </h2>
              </div>
            </motion.div>
          </AnimationTop>
        </div>

        <div className="px-8 lg:px-0 lg:w-2/3 mx-auto my-6 grid md:grid-cols-2 lg:grid-cols-3 place-content-center  grid-cols-1  gap-4">
          <AnimatedComponentLeft>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-[#012565] rounded-lg p-3">
                {/* <h2 className="uppercase text-[#71b1fe] text-2xl text-center py-2">
                  Letter of Appreciation
                </h2> */}
                <div className="">
                  {/* <img src={data.img} className="w-full h-full" alt="" /> */}
                  <div
                    className="w-full rounded-md h-80 bg-[#bebebc] cursor-pointer bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${data?.[0]})` }}
                    onClick={() => handleOpenAndCerticate(data?.[0])}
                  ></div>
                </div>
              </div>
            </motion.div>
          </AnimatedComponentLeft>
          <AnimationBottom>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-[#012565] rounded-lg p-3">
                {/* <h2 className="uppercase text-[#71b1fe] text-2xl text-center py-2">
                  Letter of Appreciation
                </h2> */}
                <div className="">
                  {/* <img src={data.img} className="w-full h-full" alt="" /> */}
                  <div
                    className="w-full rounded-md h-80 bg-[#bebebc] cursor-pointer bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${data?.[1]})` }}
                    onClick={() => handleOpenAndCerticate(data?.[1])}
                  ></div>
                </div>
              </div>
            </motion.div>
          </AnimationBottom>
          <AnimatedComponentRight>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="bg-[#012565] rounded-lg p-3">
                {/* <h2 className="uppercase text-[#71b1fe] text-2xl text-center py-2">
                  Letter of Appreciation
                </h2> */}
                <div className="">
                  {/* <img src={data.img} className="w-full h-full" alt="" /> */}
                  <div
                    className="w-full rounded-md h-80 bg-[#bebebc] cursor-pointer bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${data?.[2]})` }}
                    onClick={() => handleOpenAndCerticate(data?.[2])}
                  ></div>
                </div>
              </div>
            </motion.div>
          </AnimatedComponentRight>
        </div>
        <Link
          href={"/achievements"}
          className="flex flex-col items-center max-w-[1400px] mx-auto px-3"
        >
          <AnimationBottom>
            <motion.div
              // className="box"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-40 md:w-44 mx-auto relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                  <span className="relative group-hover:text-white">
                    Show more
                  </span>
                </span>
              </div>
            </motion.div>
          </AnimationBottom>
        </Link>
        <div className="w-full absolute top-0 right-0 z-[-1]">
          <img src="./img/new-img/map.png" className="w-full h-full" alt="" />
        </div>
      </div>
      <ImageModal open={open} setOpen={setOpen} imagePath={certicateImage} />
    </section>
  );
};

export default Achievement;
