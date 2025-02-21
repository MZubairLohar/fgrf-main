"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// import GalleryImagesModal from "../modal/galleryImagesModal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AnimationTop from "../home/AnimationTop";
import AnimatedComponentLeft from "../home/galleryAnimation/AnimationLeft";
import AnimationBottom from "../home/AnimationBtm";
import AnimatedComponentRight from "../home/galleryAnimation/AnimationRight";
import Link from "next/link";

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [galleryImage, setGalleryImage] = useState("");

  const handleOpenForImg = (imagePath: string) => {
    setGalleryImage(imagePath);
    setOpen(!open);
  };

  const gallery = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
    "/gallery/img7.jpg",
    "/gallery/img8.jpg",
    "/gallery/img9.jpg",
    "/gallery/img10.jpg",
    "/gallery/img11.jpg",
    "/gallery/img12.jpg",
    "/gallery/img13.jpg",
    "/gallery/img14.jpg",
    "/gallery/img15.jpg",
  ];
  const NewGallery = [
    "/GalleryNew/1.jpg",
    "/GalleryNew/2.jpg",
    "/GalleryNew/3.jpg",
    "/GalleryNew/4.jpg",
    "/GalleryNew/5.jpg",
    "/GalleryNew/6.jpg",
    "/GalleryNew/7.jpg",
    "/GalleryNew/8.jpg",
    "/GalleryNew/9.jpg",
    "/GalleryNew/10.jpg",
    "/GalleryNew/11.jpg",
    "/GalleryNew/12.jpg",
    "/GalleryNew/13.jpg",
    "/GalleryNew/14.jpg",
    "/GalleryNew/15.jpg",
    "/GalleryNew/16.jpg",
    "/GalleryNew/17.jpg",
    "/GalleryNew/18.jpg",
    "/GalleryNew/19.jpg",
    "/GalleryNew/20.jpg",
    "/GalleryNew/21.jpg",
    "/GalleryNew/22.jpg",
    "/GalleryNew/23.jpg",
    "/GalleryNew/24.jpg",
    "/GalleryNew/25.jpg",
    "/GalleryNew/26.jpg",
    "/GalleryNew/27.jpg",
    "/GalleryNew/28.jpg",
    "/GalleryNew/29.jpg",
    "/GalleryNew/30.jpg",
    "/GalleryNew/31.jpg",
    "/GalleryNew/32.jpg",
    "/GalleryNew/34.jpg",
    "/GalleryNew/35.jpg",
    "/GalleryNew/36.jpg",
    "/GalleryNew/37.jpg",
    "/GalleryNew/38.jpg",
    "/GalleryNew/39.jpg",
    "/GalleryNew/40.jpg",
    "/GalleryNew/41.jpg",
    "/GalleryNew/42.jpg",
    "/GalleryNew/43.jpg",
    "/GalleryNew/44.jpg",
    "/GalleryNew/45.jpg",
    "/GalleryNew/46.jpg",
    "/GalleryNew/47.jpg",
    "/GalleryNew/48.jpg",
    "/GalleryNew/49.jpg",
    "/GalleryNew/50.jpg",
    "/GalleryNew/51.jpg",
    "/GalleryNew/52.jpg",
    "/GalleryNew/53.jpg",
    "/GalleryNew/54.jpg",
    "/GalleryNew/55.jpg",
    "/GalleryNew/56.jpg",
    "/GalleryNew/57.jpg",
    "/GalleryNew/58.jpg",
    "/GalleryNew/59.jpg",
    "/GalleryNew/60.jpg",
    "/GalleryNew/61.jpg",
    "/GalleryNew/62.jpg",
    "/GalleryNew/63.jpg",
    "/GalleryNew/64.jpg",
    "/GalleryNew/65.jpg",
    "/GalleryNew/66.jpg",
    "/GalleryNew/67.jpg",
    "/GalleryNew/68.jpg",
    "/GalleryNew/69.jpg",
    "/GalleryNew/70.jpg",
    "/GalleryNew/71.jpg",
    "/GalleryNew/72.jpg",
    "/GalleryNew/73.jpg",
    "/GalleryNew/74.jpg",
    "/GalleryNew/75.jpg",
    "/GalleryNew/76.jpg",
    "/GalleryNew/77.jpg",
    "/GalleryNew/78.jpg",
    "/GalleryNew/79.jpg",
    "/GalleryNew/80.jpg",
    "/GalleryNew/81.jpg",
    "/GalleryNew/82.jpg",
    "/GalleryNew/83.jpg",
    "/GalleryNew/84.jpg",
    "/GalleryNew/85.jpg",
    "/GalleryNew/86.jpg",
    "/GalleryNew/87.jpg",
    "/GalleryNew/88.jpg",
    "/GalleryNew/89.jpg",
    "/GalleryNew/90.jpg",
    "/GalleryNew/91.jpg",
    "/GalleryNew/92.jpg",
    "/GalleryNew/93.jpg",
    "/GalleryNew/94.jpg",
    "/GalleryNew/95.jpg",
    "/GalleryNew/96.jpg",
    "/GalleryNew/97.jpg",
    "/GalleryNew/98.jpg",
    "/GalleryNew/99.jpg",
    "/GalleryNew/100.jpg",
    "/GalleryNew/101.jpg",
    "/GalleryNew/102.jpg",
    "/GalleryNew/103.jpg",
    "/GalleryNew/104.jpg",
    "/GalleryNew/105.jpg",
    "/GalleryNew/106.jpg",
    "/GalleryNew/107.jpg",
    "/GalleryNew/108.jpg",
    "/GalleryNew/109.jpg",
    "/GalleryNew/110.jpg",
    "/GalleryNew/111.jpg",
    "/GalleryNew/112.jpg",
    "/GalleryNew/113.jpg",
  ];

  const galleryImageArray = [galleryImage, ...gallery];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
        height: "100%",
      }}
    >
      <div className="pt-20 pb-8">
        <div className="relative">
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
                    Gallery
                  </h2>
                </div>
              </motion.div>
            </AnimationTop>
          </div>
          <div className="max-w-6xl xl:mx-auto mx-2  relative z-[2]">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 px-2 mt-5">
              {/* {gallery.slice(0,4).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                <div key={index} className="card relative group h-full w-full">
                  <div className="front group-hover:rotate-y-180 h-full w-full">
                    <img
                      className="h-full w-full shadow shadow-black/40"
                      src={data}
                      alt="FGRF"
                    />
                  </div>
                  <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                    <div className="back-content flex flex-col justify-center items-center text-gray-700">
                      <div className="sm space-x-2">
                        <h3>Lorem ipsum</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </AnimatedComponentLeft>
              ))}
              {gallery.slice(4,8).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                <div key={index} className="card relative group h-full w-full">
                  <div className="front group-hover:rotate-y-180 h-full w-full">
                    <img
                      className="h-full w-full shadow shadow-black/40"
                      src={data}
                      alt="FGRF"
                    />
                  </div>
                  <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                    <div className="back-content flex flex-col justify-center items-center text-gray-700">
                      <div className="sm space-x-2">
                        <h3>Lorem ipsum</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </AnimatedComponentRight>
              ))}
              {gallery.slice(8,12).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                <div key={index} className="card relative group h-full w-full">
                  <div className="front group-hover:rotate-y-180 h-full w-full">
                    <img
                      className="h-full w-full shadow shadow-black/40"
                      src={data}
                      alt="FGRF"
                    />
                  </div>
                  <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                    <div className="back-content flex flex-col justify-center items-center text-gray-700">
                      <div className="sm space-x-2">
                        <h3>Lorem ipsum</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </AnimatedComponentLeft>
              ))}
              {gallery.slice(12,15).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                <div key={index} className="card relative group h-full w-full">
                  <div className="front group-hover:rotate-y-180 h-full w-full">
                    <img
                      className="h-full w-full shadow shadow-black/40"
                      src={data}
                      alt="FGRF"
                    />
                  </div>
                  <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                    <div className="back-content flex flex-col justify-center items-center text-gray-700">
                      <div className="sm space-x-2">
                        <h3>Lorem ipsum</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </AnimatedComponentRight>
              ))} */}

              {/* new Gallery */}
              {NewGallery.slice(0, 4).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(4, 8).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(8, 12).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(12, 16).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(16, 20).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(20, 24).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(24, 28).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(28, 32).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(32, 36).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(36, 40).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(40, 44).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(44, 48).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(48, 52).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(52, 56).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(56, 60).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(60, 64).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(64, 68).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(68, 72).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(72, 76).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(76, 80).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(80, 84).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(84, 88).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(88, 92).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(92, 96).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(96, 100).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(100, 104).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
              {NewGallery.slice(104, 108).map((data, index: any) => (
                <AnimatedComponentLeft key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentLeft>
              ))}
              {NewGallery.slice(108, 112).map((data, index: any) => (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    className="card relative group h-full w-full"
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        className="h-full w-full shadow shadow-black/40"
                        src={data}
                        alt="FGRF"
                      />
                    </div>
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                          </p>
                        </div> */}
                        <motion.div
                          // className="box"
                          whileHover={{ scale: 1.2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <Link href={"/donation"}>
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-3 py-1 -mt-2">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </AnimatedComponentRight>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Old Design Code */}

      {/* Image Main Gallery */}
      {/* <GalleryImagesModal open={open} setOpen={setOpen}>
        <Carousel
          className="md:w-[65vh] w-[50vh] mt-4"
          showIndicators={false}
          useKeyboardArrows={true}
        >
          {galleryImageArray.map((data, index) => (
            <div key={index}>
              <img src={data} alt="FGRF" />
            </div>
          ))}
        </Carousel>
      </GalleryImagesModal> */}
      {/* <figure className="w-full h-full overflow-hidden">
        <img
          src={data}
          className={`w-full h-full ${
            hoveredIndex === index
              ? "scale-110 transition duration-1000"
              : "grayscale transition duration-1000"
          }`}
          alt="FGRF Gallery"
        />
      </figure> */}
    </section>
  );
};

export default GalleryPage;
