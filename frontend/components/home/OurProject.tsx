"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const OurProject = () => {
  const data = [
    {
      firstHeading: "Palestine",
      secondHeading: "Emergency",
      paragraph: "Stand in solidarity with Palestinians in Gaza.",
      svg: "./img/new-img/polygonChange.png",
    },
    {
      firstHeading: "Winter",
      secondHeading: "Emergency",
      paragraph:
        "You could help save someones life during the harsh winter months.",
      svg: "./img/new-img/polygonChange.png",
    },
    {
      firstHeading: "Give",
      secondHeading: "Sadaqah",
      paragraph:
        "Donate your sadaqah online today to make a real difference for someone in need.",
      svg: "./img/new-img/polygonChange.png",
    },
    {
      firstHeading: "Feed",
      secondHeading: "Our World",
      paragraph:
        " “Feed for the love of Allah” Quran 76:8 Show your love and compassion by helping to feed our world!",
      svg: "./img/new-img/polygonChange.png",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto px-3 sm:py-16 py-10 flex flex-col ">
      <div
        className="mb-6 w-60 mx-auto rounded-full border-4
        border-[#faf8f8] shadow-xl 
        bg-[#efeff1] 
        py-1"
      >
        <h2 className="sm:text-3xl text-3xl font-semibold text-center">
          Our Projects
        </h2>
      </div>
      <div className="max-w-3xl h-96">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mx-auto h-full"
        >
          {data.map((data, index) => {
            const { svg, firstHeading, secondHeading, paragraph } = data;
            return (
              <SwiperSlide key={index}>
                <Link href={"/appeal"}
                  className="bg-center bg-cover bg-no-repeat h-full mx-auto relative flex flex-col justify-center px-8 md:w-full max-w-xs"
                  style={{ backgroundImage: `url(${svg})` }}
                >
                  <h2 className="text-[#efeff1] font-bold text-4xl uppercase absolute top-[20%] left-0 right-0">
                    {firstHeading}
                    <span className="text-cyan-600 block">{secondHeading}</span>
                  </h2>
                  <div className="mt-[7rem]">
                    {/* <h5 className="text-2xl font-bold">Palestine Emergency</h5> */}
                    <p className="text-sm pb-1 font-semibold px-10">
                      {paragraph}
                    </p>
                    <div className="border-b-4 border-cyan-600 w-[40%] mx-auto mt-1 rounded-full"></div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default OurProject;
