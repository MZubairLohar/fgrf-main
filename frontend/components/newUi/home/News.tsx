import Link from "next/link";
import React, { useState } from "react";
import NewsSlider from "./NewsSlider";
import ContactUs from "./Contactus";
import { motion, useAnimation } from "framer-motion";
import AnimationTop from "./AnimationTop";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import Image from "next/image";

const NewsSection: React.FC = () => {
  const [image, setImage] = useState(false);
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [pause, setPause] = useState<Boolean>(true);
  const [pause1, setPause1] = useState<Boolean>(true);
  const [pause2, setPause2] = useState<Boolean>(true);
  const [pause3, setPause3] = useState<Boolean>(true);
  const [pause4, setPause4] = useState<Boolean>(true);

  const allPuseHandler = () => {
    setImage1(false);
    setImage2(false);
    setImage3(false);
    setImage4(false);
  };
  const allPuseHandler1 = () => {
    setImage(false);
    setImage2(false);
    setImage3(false);
    setImage4(false);
  };
  const allPuseHandler2 = () => {
    setImage(false);
    setImage1(false);
    setImage3(false);
    setImage4(false);
  };
  const allPuseHandler3 = () => {
    setImage(false);
    setImage1(false);
    setImage2(false);
    setImage4(false);
  };
  const allPuseHandler4 = () => {
    setImage3(false);
    setImage1(false);
    setImage2(false);
    setImage(false);
  };
  return (
    <section
      className="bg-gradient-to-r md:py-20 bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
        height: "100%",
      }}
    >
      <div className="flex flex-col items-center px-5">
        <div className="flex flex-col items-center max-w-[400px] py-5 md:py-8 mx-auto px-3">
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
                  News
                </h2>
              </div>
            </motion.div>
          </AnimationTop>
        </div>
        <div className="bg-white grid grid-cols-1 lg:grid-cols-3 max-w-7xl gap-5 p-5 rounded-lg">
          {/* <div className="flex flex-col gap-4 justify-evenly">
            <div
              className="relative"
              onClick={() => {
                setImage1(!image1);
                allPuseHandler1();
              }}
              onMouseLeave={() =>
                setTimeout(() => {
                  setPause1(!pause1);
                }, 1000)
              }
              onMouseEnter={() => setPause1(!pause1)}
            >
              <div className="lg:w-60 lg:h-40 ">
                {image1 ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                  >
                    <source src="/Videonews/20.webm" type="video/webm" />
                  </video>
                ) : (
                  <Image
                    src="/video/thumbnail/2.png"
                    alt={"thumNail"}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {!image1 ? (
                <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-14 text-white" />
              ) : pause1 ? (
                <FaCirclePause className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-14 text-white" />
              ) : (
                ""
              )}
            </div>
            <div
              className="relative"
              onClick={() => {
                setImage2(!image2);
                allPuseHandler2();
              }}
              onMouseLeave={() =>
                setTimeout(() => {
                  setPause2(!pause2);
                }, 1000)
              }
              onMouseEnter={() => setPause2(!pause2)}
            >
              <div className="lg:w-60 lg:h-40 ">
                {image2 ? (
                  <video
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                  >
                    <source src="/Videonews/18.webm" type="video/webm" />
                  </video>
                ) : (
                  <Image
                    src="/video/thumbnail/8.png"
                    alt={"thumNail"}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              {!image2 ? (
                <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-14 text-white" />
              ) : pause2 ? (
                <FaCirclePause className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-14 text-white" />
              ) : (
                ""
              )}
            </div>
          </div> */}
          <div
            className="h-[230px] md:h-[330px] relative"
            onClick={() => {
              setImage1(!image1), allPuseHandler1();
            }}
            onMouseLeave={() =>
              setTimeout(() => {
                setPause1(!pause1);
              }, 1000)
            }
            onMouseEnter={() => setPause1(!pause1)}
          >
            {image1 ? (
              <video
                className="h-full w-full object-fill outline-none"
                controls
                autoPlay
              >
                <source src="/Videonews/rashenSirya.webm" type="video/webm" />
              </video>
            ) : (
              <Image
                src="/Videonews/rationSirya.png"
                alt={"thumNail"}
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            )}
            {!image1 ? (
              <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-24 md:h-24 text-white" />
            ) : pause1 ? (
              <FaCirclePause className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-24 md:h-24 text-white" />
            ) : (
              ""
            )}
          </div>
          <div
            className="h-[230px] md:h-[330px]   relative"
            onClick={() => {
              setImage(!image), allPuseHandler();
            }}
            onMouseLeave={() =>
              setTimeout(() => {
                setPause(!pause);
              }, 1000)
            }
            onMouseEnter={() => setPause(!pause)}
          >
            {image ? (
              <video
                className="h-full w-full object-fill outline-none"
                controls
                autoPlay
              >
                <source src="/Videonews/1.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image
                src="/video/thumbnail/1.png"
                alt={"thumNail"}
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            )}
            {!image ? (
              <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-24 md:h-24 text-white" />
            ) : pause ? (
              <FaCirclePause className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-24 md:h-24 text-white" />
            ) : (
              ""
            )}
          </div>
          <div
            className="h-[230px] md:h-[330px]  relative"
            onClick={() => {
              setImage2(!image2), allPuseHandler2();
            }}
            onMouseLeave={() =>
              setTimeout(() => {
                setPause2(!pause2);
              }, 1000)
            }
            onMouseEnter={() => setPause2(!pause2)}
          >
            {image2 ? (
              <video
                className="h-full w-full object-fill outline-none"
                controls
                autoPlay
              >
                <source src="/Videonews/thalassemia.webm" type="video/webm" />
              </video>
            ) : (
              <Image
                src="/Videonews/thalassemia.png"
                alt={"thumNail"}
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            )}
            {!image2 ? (
              <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-24 md:h-24 text-white" />
            ) : pause2 ? (
              <FaCirclePause className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-24 md:h-24 text-white" />
            ) : (
              ""
            )}
          </div>
          {/* <div className="flex flex-col gap-4 justify-evenly">
            <div
              className="relative"
              onClick={() => {
                setImage3(!image3);
                allPuseHandler3();
              }}
              onMouseLeave={() =>
                setTimeout(() => {
                  setPause3(!pause3);
                }, 1000)
              }
              onMouseEnter={() => setPause3(!pause3)}
            >
              <div className="lg:w-60 lg:h-40 ">
                {image3 ? (
                  <video
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                  >
                    <source src="/Videonews/23.webm" type="video/webm" />
                  </video>
                ) : (
                  <Image
                    src="/video/thumbnail/6.png"
                    alt={"thumNail"}
                    width={800}
                    height={800}
                    className="h-full w-full"
                  />
                )}
              </div>
              {!image3 ? (
                <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-14 text-white" />
              ) : pause3 ? (
                <FaCirclePause className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-14 text-white" />
              ) : (
                ""
              )}
            </div>
            <div
              className="relative"
              onClick={() => {
                setImage4(!image4);
                allPuseHandler4();
              }}
              onMouseLeave={() =>
                setTimeout(() => {
                  setPause4(!pause4);
                }, 1000)
              }
              onMouseEnter={() => setPause4(!pause4)}
            >
              <div className="lg:w-60 lg:h-40 ">
                {image4 ? (
                  <video
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                  >
                    <source src="/Videonews/21.webm" type="video/webm" />
                  </video>
                ) : (
                  <Image
                    src="/video/thumbnail/7.png"
                    alt={"thumNail"}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              {!image4 ? (
                <FaRegCirclePlay className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-14 text-white" />
              ) : pause4 ? (
                <FaCirclePause className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-10 md:h-14 text-white" />
              ) : (
                ""
              )}
            </div>
          </div> */}
        </div>
      </div>
      {/* slider */}

      <div className="max-w-5xl mx-auto px-5 pt-2">
        <NewsSlider />
      </div>

      {/* contact us */}
      <div className="flex justify-center items-center">
        <div className="max-w-5xl ">
          <ContactUs />
        </div>
      </div>
    </section>
  );
};
export default NewsSection;
