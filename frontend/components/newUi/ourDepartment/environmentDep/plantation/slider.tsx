"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";

export default function SliderSectionPlantation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Plantation" === title.content.sec
  );
  const sliderImg = foodBoxData[0]?.content?.slider;
  const imageList = sliderImg || [
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (1).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (2).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (3).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (4).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (5).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (6).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (7).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (8).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (9).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (10).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (11).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (12).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (13).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (14).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (15).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (16).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (17).jpg",
    "/ourDepartment/EnvironmentDepartment/plantation/plantation (18).jpg",
  ];
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        navigation={{
          prevEl: "#swiper-button-prev",
          nextEl: "#swiper-button-next",
        }}
        className="!relative"
      >
        {imageList.map((img: any, index: any) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className=" h-40 lg:h-56 ">
              <Image
                src={img}
                alt="imagSLider"
                width={400}
                height={400}
                className="h-full w-full "
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          id="swiper-button-prev"
          className=" bg-white !absolute left-2 top-1/2 z-10  rounded-full group hover:bg-teal-500 transition duration-500"
        >
          <BsArrowLeftCircleFill
            className="text-teal-500  w-8 h-8 md:w-10 md:h-10 font-extrabold cursor-pointer group-hover:text-white transition duration-500"
            style={{ fontWeight: "bold" }}
          />
        </div>
        <div
          id="swiper-button-next"
          className=" bg-white !absolute top-1/2 z-10 right-2 rounded-full group hover:bg-teal-500 transition duration-500"
        >
          <BsArrowRightCircleFill className="text-teal-500  w-8 h-8 md:w-10 md:h-10 font-extrabold cursor-pointer group-hover:text-white transition duration-500" />
        </div>
      </Swiper>
    </>
  );
}
