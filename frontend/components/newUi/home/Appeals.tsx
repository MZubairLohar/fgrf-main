"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Link from "next/link";
import ImageModal from "@/components/modal/ImageModal";
// import DonationSlider from "@/components/home/donationSlider";
import AnimatedComponentRight from "./AnimationRight";
import AnimatedComponentLeft from "./AnimationLeft";
import AnimationTop from "./AnimationTop";
import AnimationBottom from "./AnimationBtm";
import DonationSlider1 from "./DonationSliders/DonationSlider1";
import DonationSlider2 from "./DonationSliders/DonationSlider2";
import DonationSlider3 from "./DonationSliders/DonationSlider3";
import DonationSlider4 from "./DonationSliders/DonationSlider4";
import DonationSlider5 from "./DonationSliders/DonationSlider5";
import DonationSlider6 from "./DonationSliders/DonationSlider6";
import DonationSlider7 from "./DonationSliders/DonationSlider7";
import DonationSlider8 from "./DonationSliders/DonationSlider8";
import DonationSlider9 from "./DonationSliders/DonationSlider9";
import DonationSlider10 from "./DonationSliders/DonationSlider10";
import { useContentContext } from "../contextApi/contentContext";
// import DonationSlider from "./DonationSlider";

const Appeals = () => {
  const contentContext = useContentContext();
  const dataContent = contentContext.content;
  const fetchData = dataContent.filter(
    (title: any) => "Main Page" === title.content.sec
  );

  const palestineSlider = fetchData[0]?.content?.palestineSlider;
  const winterSlider = fetchData[0]?.content?.winterSlider;
  const foodboxSlider = fetchData[0]?.content?.foodboxSlider;
  const masjidSlider = fetchData[0]?.content?.masjidSlider;
  const handPumpSlider = fetchData[0]?.content?.handPumpSlider;
  const orphanSlider = fetchData[0]?.content?.orphanSlider;
  const zakatSlider = fetchData[0]?.content?.zakatSlider;
  const waterWellSlider = fetchData[0]?.content?.waterWellSlider;
  const ramazanSlider = fetchData[0]?.content?.ramazanSlider;

  const data = [
    {
      img: "/img/index1.jpeg",
    },
    {
      img: "/img/index2.jpg",
    },
    {
      img: "/img/index3.jpeg",
    },
    {
      img: "/img/index4.jpeg",
    },
    {
      img: "/img/index5.jpg",
    },
  ];
  const [open, setOpen] = useState(false);
  const [certicateImage, setCertificateImage] = useState("");
  const controls = useAnimation();
  const [showButton, setShowButton] = useState(false);

  const handleOpenAndCerticate = (imagePath: string) => {
    setCertificateImage(imagePath);
    setOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 550;

      if (scrollY > triggerPoint && !showButton) {
        setShowButton(true);
        controls.start({ opacity: 1, y: 0 });
      } else if (scrollY <= triggerPoint && showButton) {
        setShowButton(false);
        controls.start({ opacity: 0, y: 50 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, showButton]);

  return (
    <section
      className=" py-6 bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
        height: "100%",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center max-w-[1200px] mx-auto px-3">
          <AnimationTop>
            <motion.div
              whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div
                id="box3d"
                className="border-4 border-[#85d0d0]  w-60 py-1 bg-[#6898b1] mx-auto rounded-full shadow-lg"
              >
                <h2
                  id=""
                  className="text-xl md:text-3xl hover:text-sky-800 font-bold text-white text-center"
                >
                  Appeals
                </h2>
              </div>
            </motion.div>
          </AnimationTop>
        </div>
        <div className="px-8 lg:px-0 lg:w-2/3 mx-auto py-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {ramazanSlider && ramazanSlider.switch === "true" && (
            <div className="col-span-1 text-center">
              <AnimatedComponentLeft>
                {" "}
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DonationSlider10 />
                </motion.div>
              </AnimatedComponentLeft>

              <AnimationTop>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={"/donation/iftar-donation"}>
                    <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-white">
                          Donate Now
                        </span>
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </AnimationTop>
            </div>
          )}
          {zakatSlider && zakatSlider.switch === "true" && (
            <div className="col-span-1 text-center">
              <AnimationBottom>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DonationSlider9 />
                </motion.div>
              </AnimationBottom>

              <AnimationTop>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={"/donation/zakat-donation"}>
                    <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-white">
                          Donate Now
                        </span>
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </AnimationTop>
            </div>
          )}
          {foodboxSlider && foodboxSlider.switch === "true" && (
            <div className="col-span-1 text-center">
              <AnimatedComponentRight>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DonationSlider3 />
                </motion.div>
              </AnimatedComponentRight>

              <AnimationTop>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={"/donation/food-box-donation"}>
                    <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-white">
                          Donate Now
                        </span>
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </AnimationTop>
            </div>
          )}
          {winterSlider && winterSlider.switch === "true" && (
            <div className="col-span-1 text-center">
              <AnimatedComponentLeft>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DonationSlider2 />
                </motion.div>
              </AnimatedComponentLeft>

              <AnimationTop>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={"/donation/winter-emergency-donation"}>
                    <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-white">
                          Donate Now
                        </span>
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </AnimationTop>
            </div>
          )}
          {palestineSlider && palestineSlider.switch === "true" && (
            <div className="col-span-1 text-center">
              <AnimationBottom>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DonationSlider1 />
                </motion.div>
              </AnimationBottom>

              <AnimationTop>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={"/donation/palestine-emergency-donation"}>
                    <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-white">
                          Donate Now
                        </span>
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </AnimationTop>
            </div>
          )}
          {orphanSlider && orphanSlider.switch === "true" && (
            <div className="col-span-1 text-center">
              <AnimatedComponentRight>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DonationSlider6 />
                </motion.div>
              </AnimatedComponentRight>

              <AnimationTop>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={"/donation/orphan-donation"}>
                    <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-white">
                          Donate Now
                        </span>
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </AnimationTop>
            </div>
          )}
          {handPumpSlider && handPumpSlider.switch === "true" && (
            <div className="col-span-1 text-center">
              <AnimatedComponentLeft>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DonationSlider5 />
                </motion.div>
              </AnimatedComponentLeft>

              <AnimationTop>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={"/donation/hand-pump-donation"}>
                    <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-white">
                          Donate Now
                        </span>
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </AnimationTop>
            </div>
          )}
          {waterWellSlider && waterWellSlider.switch === "true" && (
            <div className="col-span-1  text-center">
              <AnimationBottom>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DonationSlider8 />
                </motion.div>
              </AnimationBottom>

              <AnimationTop>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={"/donation/water-well-donation"}>
                    <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-white">
                          Donate Now
                        </span>
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </AnimationTop>
            </div>
          )}
          {masjidSlider && masjidSlider.switch === "true" && (
            <div className="col-span-1 text-center">
              <AnimatedComponentRight>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DonationSlider4 />
                </motion.div>
              </AnimatedComponentRight>

              <AnimationTop>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={"/donation/masjid-donation"}>
                    <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-white">
                          Donate Now
                        </span>
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </AnimationTop>
            </div>
          )}
        </div>
        <div className="w-full absolute top-0 right-0 z-[-1]">
          <img src="./img/new-img/map.png" className="w-full h-full" alt="" />
        </div>
        <ImageModal open={open} setOpen={setOpen} imagePath={certicateImage} />
      </div>
    </section>
  );
};

export default Appeals;
