import Link from "next/link";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import AnimationBottom from "./AnimationBtm";
import AnimationTop from "./AnimationTop";
import { FaAngleLeft } from "react-icons/fa6";
import AnimatedComponentLeft from "./galleryAnimation/AnimationLeft";
import AnimatedComponentRight from "./galleryAnimation/AnimationRight";

const gallery = [
  {
    id: 1,
    img: "./GalleryNew1/01.png",
    title:
      "BBC NEWS COVERS FGRF'S HUMANITARIAN SUPPORT EFFORTS FOR THE PEOPLE OF PALESTINE",
  },
  {
    id: 2,
    img: "./GalleryNew1/03.png",
    title: "collaborate with FGRF to the help distressed Palestinian Muslims",
  },
  {
    id: 3,
    img: "./GalleryNew1/07.png",
    title: "Meeting with turkiye officials FGRF welfare Activities",
  },
  {
    id: 4,
    img: "./GalleryNew1/02.png",
    title:
      "All cover FGRF's efforts to help those affected by the devastating earthquake in Morocco",
  },
  {
    id: 5,
    img: "./GalleryNew1/05.png",
    title:
      "Ration parcels being packed in Istanbul,turkiye  for Palestinian brothers and sisters",
  },
  {
    id: 6,
    img: "./GalleryNew1/08.png",
    title: "Meeting with turkiye officials FGRF welfare Activities",
  },
  {
    id: 7,
    img: "./GalleryNew1/04.png",
    title: "collaborate with FGRF to the help distressed Palestinian Muslims",
  },
  {
    id: 8,
    img: "./GalleryNew1/06.png",
    title: "Meeting with turkiye officials FGRF welfare Activities",
  },
  {
    id: 9,
    img: "./GalleryNew1/09.png",
    title: "Please Support FGRF in Dealing with this Deadly Tragedy in morocco",
  },
  {
    id: 10,
    img: "./GalleryNew1/10.png",
    title:
      "Gas Cylinders provided to over 1000 people impacted by the recent earthquake in Morocco to help during the winter period.",
  },
  {
    id: 11,
    img: "./GalleryNew1/1.jpg",
    title: "FGRF Responded to the devastating earthquake in turkey and syria.",
  },
  {
    id: 12,
    img: "./GalleryNew1/12.png",
    title: "Sponsor a water well this ramadan with fgrf",
  },
  {
    id: 13,
    img: "./GalleryNew1/13.png",
    title: "sponsor a water hand pump this ramadan with fgrf",
  },
  {
    id: 14,
    img: "./GalleryNew1/14.png",
    title: "extend our reach to undeserved community",
  },
  {
    id: 15,
    img: "./GalleryNew1/15.jpeg",
    title: "100,000 meals distributed in gaza.",
  },
  // {
  //   id: 15,
  //   img: "./GalleryNew1/6.jpg",
  //   title:
  //     "In the embrace of FGRF'S caring hands. Each brick a promise to rebuild and restore.",
  // },
  // {
  //   id: 16,
  //   img: "./GalleryNew1/5.jpg",
  //   title: "HFood Distribution in Ghambia",
  // },
  // {
  //   id: 17,
  //   img: "./GalleryNew1/4.jpg",
  //   title: "Humanitarian support efforts for the people of palestine",
  // },
  // {
  //   id: 18,
  //   img: "./GalleryNew1/3.jpg",
  //   title: "Humanitarian support efforts for the people of palestine",
  // },
  // {
  //   id: 19,
  //   img: "./GalleryNew1/2.jpg",
  //   title: "Humanitarian support efforts for the people of palestine",
  // },
  // {
  //   id: 20,
  //   img: "./GalleryNew1/1.jpg",
  //   title: "Humanitarian support efforts for the people of palestine",
  // },
];

const Gallery: React.FC = () => {
  const controls = useAnimation();
  const [border, setBorder] = useState<Boolean>(true);
  const [picIndex, setPicIndex] = useState<number>();
  const [btnIndex, setBtnIndex] = useState(false);

  const borderHandler = () => {
    // console.log(picIndex);
    setTimeout(() => {
      setBorder(false);
    }, 600);
  };
  // const borderHandler1 = (index: number) => {
  //   setPicIndex(index);
  //   console.log(picIndex);
  // };
  // const handleHover = () => {
  //   controls.start({
  //     scale: 1.1,
  //     filter: "brightness(1.3)",
  //   });
  // };

  // const handleHoverExit = () => {
  //   controls.start({
  //     scale: 1,
  //     filter: "brightness(1)",
  //   });
  // };

  return (
    <section
      className="bg-gradient-to-r pb-10 bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
        height: "100%",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-5">
        {/* <div className="mb-6 w-60 mx-auto rounded-full border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            Gallery
          </h2>
        </div> */}
        <Link
          href={"/gallery"}
          className="flex flex-col items-center max-w-[1200px] py-5 md:py-8 mx-auto px-3"
        >
          <AnimationTop>
            <motion.div
              whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div
                id="box3d"
                className="border-4 border-[#85d0d0]  w-40 md:w-80 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
              >
                <h2
                  id=""
                  className="text-xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
                >
                  Gallery
                </h2>
              </div>
            </motion.div>
          </AnimationTop>
        </Link>

        <div className="w-full mx-auto relative">
          <div className="grid grid-cols-1 h-[570px] lg:h-[790px] place-items-center overflow-y-scroll overflow-x-hidden lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8 md:px-8 lg:px-14  mt-5 pb-8">
            {gallery.slice(0, 3).map((data, index) => (
              <AnimatedComponentLeft key={index}>
                <div
                  key={index}
                  onMouseEnter={() => {
                    setPicIndex(data.id);
                    setBorder(!border);
                    setBtnIndex(true);
                    // setBtnIndex(index)
                    console.log(picIndex);
                  }}
                  onMouseLeave={() => {
                    borderHandler();
                    setBtnIndex(false);
                  }}
                  className={`card1 relative group w-full h-full rounded-lg  border-[#7caec1]  shadow-2xl flex flex-col justify-center items-center gap-y-3 ${
                    picIndex === data.id
                      ? border
                        ? "border-0"
                        : "border-[3px]"
                      : "border-[3px]"
                  }`}
                >
                  <div className="front group-hover:rotate-y-180 h-full w-full">
                    <img
                      src={data.img}
                      className="w-full h-full opacity-90 rounded-md"
                      alt=""
                    />
                  </div>{" "}
                  <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                    {" "}
                    <div className="back-content flex flex-col justify-center items-center text-gray-700">
                      {" "}
                      <p className="text-sm md:text-xl text-teal-500 font-bold text-center px-4">
                        {data.title}
                      </p>
                      {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>{" "}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.{" "}
                          </p>{" "}
                        </div>{" "} */}
                      {btnIndex && picIndex === data.id && (
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
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-2 md:px-4 py-0 mt-2 md:mt-3">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 md:text-2xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      )}
                    </div>{" "}
                  </div>
                </div>
              </AnimatedComponentLeft>
            ))}
            {gallery.slice(3, 6).map((data, index) => (
              <AnimationBottom key={index}>
                <div
                  key={index}
                  onMouseEnter={() => {
                    setPicIndex(data.id);
                    setBorder(!border);
                    setBtnIndex(true);
                    console.log(picIndex);
                  }}
                  onMouseLeave={() => {
                    borderHandler();
                    setBtnIndex(false);
                  }}
                  className={`card1 relative group w-full h-full rounded-lg  border-[#7caec1]  shadow-2xl flex flex-col justify-center items-center gap-y-3 ${
                    picIndex === data.id
                      ? border
                        ? "border-0"
                        : "border-[3px]"
                      : "border-[3px]"
                  }`}
                >
                  <div className="front group-hover:rotate-y-180 h-full w-full">
                    <img
                      src={data.img}
                      className="w-full h-full opacity-90 rounded-md"
                      alt=""
                    />
                  </div>{" "}
                  <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                    {" "}
                    <div className="back-content flex flex-col justify-center items-center text-gray-700">
                      {" "}
                      <p className="text-sm md:text-xl text-teal-500 font-bold text-center px-4">
                        {data.title}
                      </p>
                      {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>{" "}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.{" "}
                          </p>{" "}
                        </div>{" "} */}
                      {btnIndex && picIndex === data.id && (
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
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-2 md:px-4 py-0 mt-2 md:mt-3">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 md:text-2xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      )}
                    </div>{" "}
                  </div>
                </div>
              </AnimationBottom>
            ))}

            {gallery.slice(6, 9).map((data, index) => (
              <AnimatedComponentRight key={index}>
                <div
                  key={index}
                  onMouseEnter={() => {
                    setPicIndex(data.id);
                    setBorder(!border);
                    setBtnIndex(true);
                    console.log(picIndex);
                  }}
                  onMouseLeave={() => {
                    borderHandler();
                    setBtnIndex(false);
                  }}
                  className={`card1 relative group w-full h-full rounded-lg  border-[#7caec1]  shadow-2xl flex flex-col justify-center items-center gap-y-3 ${
                    picIndex === data.id
                      ? border
                        ? "border-0"
                        : "border-[3px]"
                      : "border-[3px]"
                  }`}
                >
                  <div className="front group-hover:rotate-y-180 h-full w-full">
                    <img
                      src={data.img}
                      className="w-full h-full opacity-90 rounded-md"
                      alt=""
                    />
                  </div>{" "}
                  <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                    {" "}
                    <div className="back-content flex flex-col justify-center items-center text-gray-700">
                      {" "}
                      {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>{" "}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.{" "}
                          </p>{" "}
                        </div>{" "} */}
                      <p className="text-sm md:text-xl text-teal-500 font-bold text-center px-4">
                        {data.title}
                      </p>
                      {btnIndex && picIndex === data.id && (
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
                            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-2 md:px-4 py-0 mt-2 md:mt-3">
                              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 md:text-2xl">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                <span className="relative group-hover:text-white">
                                  Donate Now
                                </span>
                              </span>
                            </button>
                          </Link>
                        </motion.div>
                      )}
                    </div>{" "}
                  </div>
                </div>
              </AnimatedComponentRight>
              // </motion.div>
            ))}

            {gallery.slice(9, 15).map((data, index) =>
              data.id === 10 || data.id === 13 ? (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setPicIndex(data.id);
                      setBorder(!border);
                      setBtnIndex(true);
                      console.log(picIndex);
                    }}
                    onMouseLeave={() => {
                      borderHandler();
                      setBtnIndex(false);
                    }}
                    className={`card1 relative group w-full h-full rounded-lg  border-[#7caec1]  shadow-2xl flex flex-col justify-center items-center gap-y-3 ${
                      picIndex === data.id
                        ? border
                          ? "border-0"
                          : "border-[3px]"
                        : "border-[3px]"
                    }`}
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        src={data.img}
                        className="w-full h-full opacity-90 rounded-md"
                        alt=""
                      />
                    </div>{" "}
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      {" "}
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {" "}
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>{" "}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.{" "}
                          </p>{" "}
                        </div>{" "} */}
                        <p className="text-sm md:text-xl text-teal-500 font-bold text-center px-4">
                          {data.title}
                        </p>
                        {btnIndex && picIndex === data.id && (
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
                              <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-2 md:px-4 py-0 mt-2 md:mt-3">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 md:text-2xl">
                                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                  <span className="relative group-hover:text-white">
                                    Donate Now
                                  </span>
                                </span>
                              </button>
                            </Link>
                          </motion.div>
                        )}
                      </div>{" "}
                    </div>
                  </div>
                </AnimatedComponentRight>
              ) : data.id === 11 || data.id === 14 ? (
                <AnimationTop key={index}>
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setPicIndex(data.id);
                      setBorder(!border);
                      setBtnIndex(true);
                      console.log(picIndex);
                    }}
                    onMouseLeave={() => {
                      borderHandler();
                      setBtnIndex(false);
                    }}
                    className={`card1 relative group w-full h-full rounded-lg  border-[#7caec1]  shadow-2xl flex flex-col justify-center items-center gap-y-3 ${
                      picIndex === data.id
                        ? border
                          ? "border-0"
                          : "border-[3px]"
                        : "border-[3px]"
                    }`}
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        src={data.img}
                        className="w-full h-full opacity-90 rounded-md"
                        alt=""
                      />
                    </div>{" "}
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      {" "}
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {" "}
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>{" "}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.{" "}
                          </p>{" "}
                        </div>{" "} */}
                        <p className="text-sm md:text-xl text-teal-500 font-bold text-center px-4">
                          {data.title}
                        </p>
                        {btnIndex && picIndex === data.id && (
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
                              <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-2 md:px-4 py-0 mt-2 md:mt-3">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 md:text-2xl">
                                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                  <span className="relative group-hover:text-white">
                                    Donate Now
                                  </span>
                                </span>
                              </button>
                            </Link>
                          </motion.div>
                        )}
                      </div>{" "}
                    </div>
                  </div>
                </AnimationTop>
              ) : (
                <AnimatedComponentRight key={index}>
                  <div
                    key={index}
                    onMouseEnter={() => {
                      setPicIndex(data.id);
                      setBorder(!border);
                      setBtnIndex(true);
                      console.log(picIndex);
                    }}
                    onMouseLeave={() => {
                      borderHandler();
                      setBtnIndex(false);
                    }}
                    className={`card1 relative group w-full h-full rounded-lg  border-[#7caec1]  shadow-2xl flex flex-col justify-center items-center gap-y-3 ${
                      picIndex === data.id
                        ? border
                          ? "border-0"
                          : "border-[3px]"
                        : "border-[3px]"
                    }`}
                  >
                    <div className="front group-hover:rotate-y-180 h-full w-full">
                      <img
                        src={data.img}
                        className="w-full h-full opacity-90 rounded-md"
                        alt=""
                      />
                    </div>{" "}
                    <div className="back absolute top-0 left-0 w-full h-full bg-gray-200 transform rotate-y-180 group-hover:rotate-y-0">
                      {" "}
                      <div className="back-content flex flex-col justify-center items-center text-gray-700">
                        {" "}
                        {/* <div className="sm space-x-2">
                          <h3>Lorem ipsum</h3>{" "}
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.{" "}
                          </p>{" "}
                        </div>{" "} */}
                        <p className="text-sm md:text-xl text-teal-500 font-bold text-center px-4">
                          {data.title}
                        </p>
                        {btnIndex && picIndex === data.id && (
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
                              <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-2 md:px-4 py-0 mt-2 md:mt-3">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 md:text-2xl">
                                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                                  <span className="relative group-hover:text-white">
                                    Donate Now
                                  </span>
                                </span>
                              </button>
                            </Link>
                          </motion.div>
                        )}
                      </div>{" "}
                    </div>
                  </div>
                </AnimatedComponentRight>
              )
            )}
          </div>
          <Link
            href={"/gallery"}
            className="flex flex-col items-center max-w-[1400px] mx-auto px-3"
          >
            <AnimationBottom>
              <motion.div
                // className="box"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-44 mx-auto relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-8 md:my-3">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                    <span className="relative group-hover:text-white">
                      Show more
                    </span>
                  </span>
                </div>
              </motion.div>
            </AnimationBottom>
          </Link>
        </div>
        {/* <div className="absolute w-full h-full z-[1] top-1/2 -translate-y-1/2 md:flex md:items-center ">
          <img
            src="./img/new-img/gallery.png"
            className="w-full h-[70%]"
            alt=""
          />
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
