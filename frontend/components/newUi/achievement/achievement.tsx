"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ImageModal from "../modal/ImageModal";
import { useState } from "react";
import AnimationTop from "../home/AnimationTop";
import { motion } from "framer-motion";
import AnimatedComponentLeft from "../home/galleryAnimation/AnimationLeft";
import AnimatedComponentRight from "../home/galleryAnimation/AnimationRight";

const AchievementPage = () => {
  const data = [
    {
      img: "/AchievementNew/1.jpg",
    },
    {
      img: "/AchievementNew/2.jpg",
    },
    {
      img: "/AchievementNew/3.jpg",
    },
    {
      img: "/AchievementNew/4.jpg",
    },
    {
      img: "/AchievementNew/5.jpg",
    },
    {
      img: "/AchievementNew/6.jpg",
    },
    {
      img: "/AchievementNew/7.jpg",
    },
    {
      img: "/AchievementNew/8.jpg",
    },
    {
      img: "/AchievementNew/9.jpg",
    },
    {
      img: "/AchievementNew/10.jpg",
    },
    {
      img: "/AchievementNew/11.jpg",
    },
    {
      img: "/AchievementNew/12.jpg",
    },
  ];
  const [open, setOpen] = useState(false);
  const [certicateImage, setCertificateImage] = useState("");

  const handleOpenAndCerticate = (imagePath: string) => {
    setCertificateImage(imagePath);
    setOpen(true);
  };
  return (
    <>
      <div className="relative bg-center bg-no-repeat bg-cover mt-14 lg:mt-28">
        {/* <div className="flex flex-col items-center gap-y-4  mx-auto sm:py-10 py-6 px-3">
          <div className=" w-60 mx-auto rounded-full border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
            <h2 className="text-xl md:text-3xl font-semibold text-center">
              Achievements
            </h2>
          </div>
        </div> */}
        <div className="flex flex-col items-center max-w-[1200px] py-5 md:py-8 mx-auto px-3">
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
                  className="text-2xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
                >
                  Achievement
                </h2>
              </div>
            </motion.div>
          </AnimationTop>
        </div>
        <div className="max-w-6xl mx-2 lg:mx-4 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 xl:mx-auto px-3 pt-5 pb-10">
          {data.slice(0, 4).map((data, index) => (
            <AnimatedComponentLeft key={index}>
              <div className="bg-white rounded-md p-2 w-full  shadow-lg">
                <div className="p-2 h-80">
                  {/* <img src={data.img} className="w-full h-full" alt="" /> */}
                  <div
                    className="w-full rounded-md h-full bg-[#bebebc] cursor-pointer bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.img})` }}
                    onClick={() => handleOpenAndCerticate(data.img)}
                  ></div>
                </div>
              </div>
            </AnimatedComponentLeft>
          ))}
          {data.slice(4, 8).map((data, index) => (
            <AnimatedComponentRight key={index}>
              <div className="bg-white rounded-md p-2 w-full  shadow-lg">
                <div className="p-2 h-80">
                  {/* <img src={data.img} className="w-full h-full" alt="" /> */}
                  <div
                    className="w-full rounded-md h-full bg-[#bebebc] cursor-pointer bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.img})` }}
                    onClick={() => handleOpenAndCerticate(data.img)}
                  ></div>
                </div>
              </div>
            </AnimatedComponentRight>
          ))}
          {data.slice(8, 12).map((data, index) => (
            <AnimatedComponentLeft key={index}>
              <div className="bg-white rounded-md p-2 w-full  shadow-lg">
                <div className="p-2 h-80">
                  {/* <img src={data.img} className="w-full h-full" alt="" /> */}
                  <div
                    className="w-full rounded-md h-full bg-[#bebebc] cursor-pointer bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.img})` }}
                    onClick={() => handleOpenAndCerticate(data.img)}
                  ></div>
                </div>
              </div>
            </AnimatedComponentLeft>
          ))}
        </div>
      </div>
      <ImageModal open={open} setOpen={setOpen} imagePath={certicateImage} />
    </>
  );
};

export default AchievementPage;
