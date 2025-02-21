"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import AnimationTop from "../../home/AnimationTop";
import AnimatedComponentLeft from "../../home/galleryAnimation/AnimationLeft";
import AnimatedComponentRight from "../../home/galleryAnimation/AnimationRight";

const Disasters = () => {
  const disastersList = [
    {
      link: "covid-19",
      img: "/GalleryNew1/11.jpg",
      title: "COVID - 19",
      desc: "FGRF stood out with its unwavering commitment to support those in need",
    },
    {
      link: "pakistan-flood",
      img: "/GalleryNew1/6.jpg",
      title: "Pakistan flood ",
      desc: "FGRF's Swift Response to Pakistan Floods: From Rescue to Rebuilding",
    },
    {
      link: "turkey-syria-earthquake",
      img: "/GalleryNew1/turkey.jpg",
      title: "Turkey & Syria earthquake ",
      desc: " FGRF swiftly mobilized to provide aid and support to those affected",
    },
    {
      link: "morocco-earthquake",
      img: "/GalleryNew1/morco1.jpg",
      title: "Morocco earthquake ",
      desc: "Supporting Morocco: FGRF's Relief Efforts in Response to the Earthquake",
    },
    {
      link: "palestine-brothers-sisters",
      img: "/AppealNew/palestine/18.jpg",
      title: "Palestinian brother & sisters ",
      desc: "FGRF's Swift Response in Palestine During Times of Crisis",
    },
  ];

  return (
    <div className="py-16">
      <div className="flex flex-col items-center max-w-[400px] mx-auto px-3 mb-10">
        <AnimationTop>
          <motion.div
            whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              id="box3d"
              className="border-4 border-[#85d0d0]  w-44 md:w-80 py-1 md:py-3 bg-[#6898b1]  flex justify-center group mx-auto rounded-full shadow-lg"
            >
              <span
                id=""
                className="text-xl md:text-3xl group-hover:text-sky-800 font-bold text-white "
              >
                Our Disasters
              </span>
            </div>
          </motion.div>
        </AnimationTop>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8  px-5">
          {disastersList.slice(0, 2).map((appeal, index) => (
            <AnimatedComponentLeft key={index}>
              <div
                key={index}
                className="p-2 w-72 rounded-md bg-[#19afaf] hover:shadow-lg"
              >
                <Link
                  href={`disaster-${appeal.link}`}
                  className="group flex flex-col gap-2 justify-start"
                >
                  <div className="zoom-on-hover">
                    <img
                      src={appeal.img}
                      alt=""
                      width={600}
                      height={600}
                      className="h-64 w-full scale-x-150"
                    />
                  </div>
                  <h3 className="text-center text-lg bg-white text-gray-600  py-2 font-semibold">
                    {appeal.title}
                  </h3>
                  {/* <p className="text-center text-base">{appeal.desc}</p> */}
                </Link>
              </div>
            </AnimatedComponentLeft>
          ))}
          {disastersList.slice(2, 4).map((appeal, index) => (
            <AnimatedComponentRight key={index}>
              <div
                key={index}
                className="p-2 w-72  rounded-md bg-[#19afaf] hover:shadow-lg"
              >
                <Link
                  href={`disaster-${appeal.link}`}
                  className="group flex flex-col gap-2 justify-start"
                >
                  <div className="zoom-on-hover">
                    <img
                      src={appeal.img}
                      alt=""
                      width={600}
                      height={600}
                      className="h-64 w-full scale-x-150"
                    />
                  </div>
                  <h3 className="text-center text-lg bg-white text-gray-600  py-2 font-semibold">
                    {appeal.title}
                  </h3>
                  {/* <p className="text-center text-base">{appeal.desc}</p> */}
                </Link>
              </div>
            </AnimatedComponentRight>
          ))}
          {disastersList.slice(4, 5).map((appeal, index) => (
            <AnimatedComponentLeft key={index}>
              <div
                key={index}
                className="p-2 w-72 rounded-md bg-[#19afaf] hover:shadow-lg "
              >
                <Link
                  href={`disaster-${appeal.link}`}
                  className="group flex flex-col gap-2 justify-start"
                >
                  <div className="zoom-on-hover">
                    <img
                      src={appeal.img}
                      alt=""
                      width={600}
                      height={600}
                      className="h-64 w-full scale-x-150"
                    />
                  </div>
                  <h3 className="text-center text-lg bg-white text-gray-600  py-2 font-semibold">
                    {appeal.title}
                  </h3>
                  {/* <p className="text-center text-base">{appeal.desc}</p> */}
                </Link>
              </div>
            </AnimatedComponentLeft>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Disasters;
