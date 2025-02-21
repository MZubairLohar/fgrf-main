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
const imageList = [
  "/ourDepartment/handPump/handPump (1).jpg",
  "/ourDepartment/handPump/handPump (2).jpg",
  "/ourDepartment/handPump/handPump (3).jpg",
  "/ourDepartment/handPump/handPump (4).jpg",
  "/ourDepartment/handPump/handPump (5).jpg",
  "/ourDepartment/handPump/handPump (6).jpg",
  "/ourDepartment/handPump/handPump (7).jpg",
  "/ourDepartment/handPump/handPump (8).jpg",
  "/ourDepartment/handPump/handPump (8).jpg",
  "/ourDepartment/handPump/handPump (20).jpg",
  "/ourDepartment/handPump/handPump (11).jpg",
  "/ourDepartment/handPump/handPump (12).jpg",
  "/ourDepartment/handPump/handPump (13).jpg",
  "/ourDepartment/handPump/handPump (14).jpg",
  "/ourDepartment/handPump/handPump (15).jpg",
  "/ourDepartment/handPump/handPump (16).jpg",
  "/ourDepartment/handPump/handPump (17).jpg",
  "/ourDepartment/handPump/handPump (18).jpg",
  "/ourDepartment/handPump/handPump (19).jpg",
  "/ourDepartment/handPump/handPump (20).jpg",
  "/ourDepartment/handPump/handPump (21).jpg",
  "/ourDepartment/handPump/handPump (23).jpg",
  "/ourDepartment/handPump/handPump (24).jpg",
  "/ourDepartment/handPump/handPump (25).jpg",
  "/ourDepartment/handPump/handPump (26).jpg",
  "/ourDepartment/handPump/handPump (27).jpg",
  "/ourDepartment/handPump/handPump (28).jpg",
  "/ourDepartment/handPump/handPump (29).jpg",
  "/ourDepartment/handPump/handPump (30).jpg",
  "/ourDepartment/handPump/handPump (31).jpg",
  "/ourDepartment/handPump/handPump (32).jpg",
  "/ourDepartment/handPump/handPump (33).jpg",
  "/ourDepartment/handPump/handPump (34).jpg",
  "/ourDepartment/handPump/handPump (35).jpg",
  "/ourDepartment/handPump/handPump (36).jpg",
  "/ourDepartment/handPump/handPump (37).jpg",
  "/ourDepartment/handPump/handPump (38).jpg",
  "/ourDepartment/handPump/handPump (39).jpg",
  "/ourDepartment/handPump/handPump (40).jpg",
  "/ourDepartment/handPump/handPump (41).jpg",
  "/ourDepartment/handPump/handPump (42).jpg",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useContentContext } from "../../contextApi/contentContext";

export default function SliderSectionWater() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Water Project" === title.content.sec
  );
  const sliderImg = foodBoxData[0]?.content?.slider;
  const imageList = sliderImg || [
    "/ourDepartment/handPump/handPump (1).jpg",
    "/ourDepartment/handPump/handPump (2).jpg",
    "/ourDepartment/handPump/handPump (3).jpg",
    "/ourDepartment/handPump/handPump (4).jpg",
    "/ourDepartment/handPump/handPump (5).jpg",
    "/ourDepartment/handPump/handPump (6).jpg",
    "/ourDepartment/handPump/handPump (7).jpg",
    "/ourDepartment/handPump/handPump (8).jpg",
    "/ourDepartment/handPump/handPump (8).jpg",
    "/ourDepartment/handPump/handPump (20).jpg",
    "/ourDepartment/handPump/handPump (11).jpg",
    "/ourDepartment/handPump/handPump (12).jpg",
    "/ourDepartment/handPump/handPump (13).jpg",
    "/ourDepartment/handPump/handPump (14).jpg",
    "/ourDepartment/handPump/handPump (15).jpg",
    "/ourDepartment/handPump/handPump (16).jpg",
    "/ourDepartment/handPump/handPump (17).jpg",
    "/ourDepartment/handPump/handPump (18).jpg",
    "/ourDepartment/handPump/handPump (19).jpg",
    "/ourDepartment/handPump/handPump (20).jpg",
    "/ourDepartment/handPump/handPump (21).jpg",
    "/ourDepartment/handPump/handPump (23).jpg",
    "/ourDepartment/handPump/handPump (24).jpg",
    "/ourDepartment/handPump/handPump (25).jpg",
    "/ourDepartment/handPump/handPump (26).jpg",
    "/ourDepartment/handPump/handPump (27).jpg",
    "/ourDepartment/handPump/handPump (28).jpg",
    "/ourDepartment/handPump/handPump (29).jpg",
    "/ourDepartment/handPump/handPump (30).jpg",
    "/ourDepartment/handPump/handPump (31).jpg",
    "/ourDepartment/handPump/handPump (32).jpg",
    "/ourDepartment/handPump/handPump (33).jpg",
    "/ourDepartment/handPump/handPump (34).jpg",
    "/ourDepartment/handPump/handPump (35).jpg",
    "/ourDepartment/handPump/handPump (36).jpg",
    "/ourDepartment/handPump/handPump (37).jpg",
    "/ourDepartment/handPump/handPump (38).jpg",
    "/ourDepartment/handPump/handPump (39).jpg",
    "/ourDepartment/handPump/handPump (40).jpg",
    "/ourDepartment/handPump/handPump (41).jpg",
    "/ourDepartment/handPump/handPump (42).jpg",
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
        {/* Navigation Arrows */}
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
