"use client";
import Image, { StaticImageData } from "next/image";
import { use, useState } from "react";
import AnimationTop from "../../home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import AnimationBottom from "../../home/AnimationBtm";
const DisasterBannerSection = () => {
  const monthBtnList = [
    {
      title: "9",
      doc: "Could provide 2 x life-saving Food Packs of nutritious meals to over 15 Palestinians.",
    },
    {
      title: "25",
      doc: "Could provide 6 x life-saving Food Packs of nutritious meals to over 50 Palestinians.",
    },
    {
      title: "75",
      doc: "Could provide 9 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "125",
      doc: "Could provide 15 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "250",
      doc: "Could provide 15 x Critical Medical Packs to provide emergency medical assistance for over 100 Palestinians.",
    },
  ];

  return (
    <div className="px-4 md:px-4 xl:px-0">
      <div className="flex flex-col items-center max-w-screen-lg mx-auto px-3 pt-4 md:py-10">
        <AnimationTop>
          <motion.div
            whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              id="box3d"
              className="border-4 border-[#85d0d0] w-[260px]  md:w-full py-1 md:py-2 bg-[#6898b1] mx-auto rounded-full shadow-lg md:px-5"
            >
              <h2
                id=""
                className="text-xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
              >
                Disaster Management
              </h2>
            </div>
          </motion.div>
        </AnimationTop>
      </div>

      <div className="py-5">
        <AnimationBottom>
          <Image
            src={"/ourDepartment/disaster/hero.jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </AnimationBottom>
      </div>
    </div>
  );
};
export default DisasterBannerSection;
