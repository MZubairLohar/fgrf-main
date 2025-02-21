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
import { useContentContext } from "../../contextApi/contentContext";

export default function SliderSectionEducation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Turkey & Syria Earthquake" === title.content.sec
  );
  const sliderImg = foodBoxData[0]?.content?.slider;
  const imageList = sliderImg || [
    "/ourDepartment/educationSkills/education (1).jpg",
    "/ourDepartment/educationSkills/education (2).jpg",
    "/ourDepartment/educationSkills/education (3).jpg",
    "/ourDepartment/educationSkills/education (4).jpg",
    "/ourDepartment/educationSkills/education (5).jpg",
    "/ourDepartment/educationSkills/education (6).jpg",
    "/ourDepartment/educationSkills/education (7).jpg",
    "/ourDepartment/educationSkills/education (8).jpg",
    "/ourDepartment/educationSkills/education (9).jpg",
    "/ourDepartment/educationSkills/education (10).jpg",
    "/ourDepartment/educationSkills/education (11).jpg",
    "/ourDepartment/educationSkills/education (12).jpg",
    "/ourDepartment/educationSkills/education (13).jpg",
    "/ourDepartment/educationSkills/education (14).jpg",
    "/ourDepartment/educationSkills/education (15).jpg",
    "/ourDepartment/educationSkills/education (16).jpg",
    "/ourDepartment/educationSkills/education (17).jpg",
    "/ourDepartment/educationSkills/education (18).jpg",
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
            slidesPerView: 3,
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
