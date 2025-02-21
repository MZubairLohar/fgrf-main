"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion, useAnimation } from "framer-motion";

import {
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
// import { div } from "three/examples/jsm/nodes/Nodes.js";
import AnimationBottom from "./AnimationBtm";
import AnimatedComponentLeft from "./AnimationLeft";
import AnimatedComponentRight from "./AnimationRight";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Image from "next/image";
import AnimationTop from "./AnimationTop";
import Link from "next/link";
import { useContentContext } from "../contextApi/contentContext";

const OurDepartments = () => {
  const contentContext = useContentContext();
  const dataContent = contentContext.content;
  const foodBoxData = dataContent.filter(
    (title: any) => "Main Page" === title.content.sec
  );
  const ourDepartmentSlider = foodBoxData[0]?.content?.ourDepartmentSlider;
  const [showBlob, setShowBlob] = useState<boolean>(false);
  const [blobIndex, setBlobIndex] = useState<number>();
  const data = [
    {
      img: "/finalIconAssets/OurdepatmentSlider/fireHome.png",
      // blob: "/img/icon-blob.svg",
      link: "disaster",
      title: "Disaster Management",
      code: "white",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/health.png",
      // blob: "/img/icon-blob-yellow.svg",
      link: "health-care",
      title: "Health Care",
      code: "red",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/water.png",
      // blob: "/img/icon-blob-purple.svg",
      link: "water-project",
      title: "Water Project",
      code: "green",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/home.png",
      // blob: "/img/icon-blob-orange.svg",
      link: "environment-department",
      title: "Environment Department",
      code: "blue",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/education.png",
      // blob: "/img/icon-blob-blue.svg",
      link: "education",
      title: "Education & Skills",
      code: "yellow",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/homeHand.png",
      // blob: "/img/icon-blob.svg",
      link: "orphan",
      title: "Orphan",
      code: "purple",
    },
    {
      img: "/finalIconAssets/OurdepatmentSlider/masjid.png",
      // blob: "/img/icon-blob.svg",
      link: "masjid",
      title: "Masjid",
      code: "purple",
    },
  ];
  const data1 = [
    {
      img: "/img/icons/earthquake1.png",
      // blob: "/img/icon-blob.svg",
      title: "Disaster Management and Food",
      code: "white",
    },
    {
      img: "/img/icons/self-development2.png",
      // blob: "/img/icon-blob-yellow.svg",
      title: "Education & Skills.",
      code: "red",
    },
    {
      img: "/img/icons/protection3.png",
      // blob: "/img/icon-blob-purple.svg",
      title: "Health Care.",
      code: "green",
    },
    {
      img: "/img/icons/cuve4.png",
      // blob: "/img/icon-blob-orange.svg",
      title: "Cure for differently abled children.",
      code: "blue",
    },
    {
      img: "/img/icons/dev5.png",
      // blob: "/img/icon-blob-blue.svg",
      title: "Environment Department.",
      code: "yellow",
    },
    {
      img: "/img/icons/water-tap6.png",
      // blob: "/img/icon-blob.svg",
      title: "Water project.",
      code: "purple",
    },
  ];
  const data2 = [
    {
      img: "/img/icons/cuve4.png",
      // blob: "/img/icon-blob-orange.svg",
      title: "Cure for differently abled children.",
      code: "blue",
    },
    {
      img: "/img/icons/dev5.png",
      // blob: "/img/icon-blob-blue.svg",
      title: "Environment Department.",
      code: "yellow",
    },
    {
      img: "/img/icons/water-tap6.png",
      // blob: "/img/icon-blob.svg",
      title: "Water project.",
      code: "purple",
    },
  ];
  const handleBlob = (index: number) => {
    setBlobIndex(index);
    setShowBlob(true);
  };
  return (
    <div
      id="ourDepartment"
      className="max-w-7xl mx-auto py-6 relative bg-center bg-no-repeat bg-cover"
    >
      <div className="flex flex-col items-center max-w-[1200px] mx-auto px-3">
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
                Our Departments
              </h2>
            </div>
          </motion.div>
        </AnimationTop>
      </div>
      {/* <h1 id="text3d">Our Department</h1> */}
      <div
        id="depart-box-shadow"
        className="mt-8 rounded-2xl max-w-6xl mx-5 xl:mx-auto "
      >
        {" "}
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          navigation={{
            prevEl: "#swiper-button-prev",
            nextEl: "#swiper-button-next",
          }}
          modules={[Navigation]}
          className="!relative"
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "25px",
            } as any
          }
        >
          <SwiperSlide className="!bg-[#075985]">
            <div className="lg:px-10 bg-[#075985] py-1">
              <div className="grid lg:grid-cols-7 md:grid-cols-3 items-center grid-cols-2  gap-4">
                {/* <AnimatedComponentLeft> */}{" "}
                {data.slice(0, 3).map((data, index) => (
                  <AnimatedComponentRight key={index}>
                    {" "}
                    <div
                      className="col-span-1 py-2 text-gray-300 flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                      // onMouseOver={() => handleBlob(index)}
                      onMouseLeave={() => setShowBlob(false)}
                    >
                      <Link href={`/our-department/${data.link}`}>
                        <motion.div
                          whileHover={{
                            scale: 1.6,
                            // filter: "brightness(1.8)",
                            // rotate: 50,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <div
                            // href={`/our-department/${data.link}`}
                            className="md:h-14 h-10 relative"
                          >
                            <img
                              // src={data.blob}
                              className={`absolute top-0 z-[-1] ${
                                blobIndex === index && showBlob
                                  ? "opacity-40 transition-all duration-500"
                                  : "opacity-0 transition-all duration-500"
                              }`}
                              alt=""
                            />
                            <img
                              src={data.img}
                              className="w-full h-full"
                              alt=""
                            />
                          </div>
                        </motion.div>
                      </Link>
                      <div>
                        <h4 className={`text-center text-sm  leading-none`}>
                          {data.title}
                        </h4>
                      </div>
                    </div>
                  </AnimatedComponentRight>
                ))}
                {data.slice(3, 7).map((data, index) => (
                  <AnimatedComponentLeft key={index}>
                    <div
                      className="col-span-1 py-2 text-gray-300 flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                      // onMouseOver={() => handleBlob(index)}
                      onMouseLeave={() => setShowBlob(false)}
                    >
                      <Link href={`/our-department/${data.link}`}>
                        <motion.div
                          whileHover={{
                            scale: 1.6,
                            // filter: "brightness(1.8)",
                            // rotate: 50,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <div className="md:h-14 h-10 relative">
                            <img
                              // src={data.blob}
                              className={`absolute top-0 z-[-1] ${
                                blobIndex === index && showBlob
                                  ? "opacity-40 transition-all duration-500"
                                  : "opacity-0 transition-all duration-500"
                              }`}
                              alt=""
                            />
                            <img
                              src={data.img}
                              className="w-full h-full"
                              alt=""
                            />
                          </div>
                        </motion.div>
                      </Link>
                      <div>
                        <h4 className={`text-center text-sm  leading-none`}>
                          {data.title}
                        </h4>
                      </div>
                    </div>
                  </AnimatedComponentLeft>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!bg-[#075985]">
            <div className="lg:px-10 bg-[#075985] py-1">
              <div className="grid lg:grid-cols-7 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {/* <AnimatedComponentLeft> */}{" "}
                {data.slice(0, 3).map((data, index) => (
                  <AnimatedComponentRight key={index}>
                    {" "}
                    <div
                      className="col-span-1 py-2 text-gray-300 flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                      // onMouseOver={() => handleBlob(index)}
                      onMouseLeave={() => setShowBlob(false)}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.6,
                          // filter: "brightness(1.8)",
                          // rotate: 50,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <div className="md:h-14 h-10 relative">
                          <img
                            // src={data.blob}
                            className={`absolute top-0 z-[-1] ${
                              blobIndex === index && showBlob
                                ? "opacity-40 transition-all duration-500"
                                : "opacity-0 transition-all duration-500"
                            }`}
                            alt=""
                          />
                          <img
                            src={data.img}
                            className="w-full h-full"
                            alt=""
                          />
                        </div>
                      </motion.div>
                      <div>
                        <h4 className={`text-center text-sm  leading-none`}>
                          {data.title}
                        </h4>
                      </div>
                    </div>
                  </AnimatedComponentRight>
                ))}
                {data.slice(3, 7).map((data, index) => (
                  <AnimatedComponentLeft key={index}>
                    <div
                      className="col-span-1 py-2 text-gray-300 flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                      // onMouseOver={() => handleBlob(index)}
                      onMouseLeave={() => setShowBlob(false)}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.6,
                          // filter: "brightness(1.8)",
                          // rotate: 50,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <div className="md:h-14 h-10 relative">
                          <img
                            // src={data.blob}
                            className={`absolute top-0 z-[-1] ${
                              blobIndex === index && showBlob
                                ? "opacity-40 transition-all duration-500"
                                : "opacity-0 transition-all duration-500"
                            }`}
                            alt=""
                          />
                          <img
                            src={data.img}
                            className="w-full h-full"
                            alt=""
                          />
                        </div>
                      </motion.div>
                      <div>
                        <h4 className={`text-center text-sm  leading-none`}>
                          {data.title}
                        </h4>
                      </div>
                    </div>
                  </AnimatedComponentLeft>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <div
            id="swiper-button-prev"
            className=" bg-white !absolute left-2 top-1/2 lg:top-10 z-10  rounded-full group hover:bg-teal-500 transition duration-500"
          >
            <BsArrowLeftCircleFill
              className="text-teal-500  w-8 h-8 font-extrabold cursor-pointer group-hover:text-white transition duration-500"
              style={{ fontWeight: "bold" }}
            />
          </div>
          <div
            id="swiper-button-next"
            className=" bg-white !absolute top-1/2 lg:top-10 z-10 right-2 rounded-full group hover:bg-teal-500 transition duration-500"
          >
            <BsArrowRightCircleFill className="text-teal-500  w-8 h-8 font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
          </div>
        </Swiper>
        {/* <div className="swiper-button-next-custom">
          <img
            src="/finalIconAssets/Assest/fivepage/arrow1.png"
            alt="Next"
            style={{ height: "100px", width: "50px" }}
          />
        </div>

        <div className="swiper-button-prev-custom">
          <img
            src="/finalIconAssets/Assest/fivepage/arrow1.png"
            alt="Previous"
            style={{ height: "100px", width: "50px" }}
          />
        </div> */}
      </div>
      <div className="w-full absolute top-0 right-0 -z-30">
        <img src="./img/new-img/map.png" className="w-full h-full" alt="" />
      </div>
    </div>
  );
};

export default OurDepartments;
{
  /* <SwiperSlide>
  <div className="py-2 lg:px-10 bg-[#075985]">
    <div className="grid lg:grid-cols-7 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
      {data.map((data, index) => (
        <div
          className="col-span-1 py-2 text-white flex flex-col gap-y-1 items-center justify-between cursor-pointer"
          key={index}
          onMouseOver={() => handleBlob(index)}
          onMouseLeave={() => setShowBlob(false)}
        >
          <div className="md:h-14 h-8 relative">
            <img
              src={data.blob}
              className={`absolute top-0 z-[-1] ${
                blobIndex === index && showBlob
                  ? "opacity-40 transition-all duration-500"
                  : "opacity-0 transition-all duration-500"
              }`}
              alt=""
            />
            <img src={data.img} className="" alt="" />
          </div>
          <div>
            <h4 className={`text-center text-sm  leading-none`}>
              {data.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="py-2 lg:px-10 bg-[#075985]">
    <div className="grid lg:grid-cols-7 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
      {data.map((data, index) => (
        <div
          key={index}
          className="col-span-1 py-2 text-white flex flex-col gap-y-1 items-center justify-between cursor-pointer"
          onMouseOver={() => handleBlob(index)}
          onMouseLeave={() => setShowBlob(false)}
        >
          <div className="md:h-14 h-8 relative">
            <img
              src={data.blob}
              className={`absolute top-0 z-[-1] ${
                blobIndex === index && showBlob
                  ? "opacity-40 transition-all duration-500"
                  : "opacity-0 transition-all duration-500"
              }`}
              alt=""
            />
            <img src={data.img} className="" alt="" />
          </div>
          <div>
            <h4 className={`text-center text-sm  leading-none`}>
              {data.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
</SwiperSlide> */
}
