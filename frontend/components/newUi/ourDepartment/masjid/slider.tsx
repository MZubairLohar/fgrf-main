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
  "/ourDepartment/masjid/masjid/masjid (1).png",
  "/ourDepartment/masjid/masjid/masjid (2).png",
  "/ourDepartment/masjid/masjid/masjid (3).png",
  "/ourDepartment/masjid/masjid/masjid (4).png",
  "/ourDepartment/masjid/masjid/masjid (5).png",
  "/ourDepartment/masjid/masjid/masjid (6).png",
  "/ourDepartment/masjid/masjid/masjid (7).png",
  "/ourDepartment/masjid/masjid/masjid (8).png",
  "/ourDepartment/masjid/masjid/masjid (9).png",
  "/ourDepartment/masjid/masjid/masjid (10).png",
  "/ourDepartment/masjid/masjid/masjid (11).png",
  "/ourDepartment/masjid/masjid/masjid (12).png",
  "/ourDepartment/masjid/masjid/masjid (13).png",
  "/ourDepartment/masjid/masjid/masjid (14).png",
  "/ourDepartment/masjid/masjid/masjid (15).png",
  "/ourDepartment/masjid/masjid/masjid (16).png",
  "/ourDepartment/masjid/masjid/masjid (17).png",
  "/ourDepartment/masjid/masjid/masjid (18).png",
  "/ourDepartment/masjid/masjid/masjid (19).png",
  "/ourDepartment/masjid/masjid/masjid (20).png",
  "/ourDepartment/masjid/masjid/masjid (21).png",
  "/ourDepartment/masjid/masjid/masjid (22).png",
  "/ourDepartment/masjid/masjid/masjid (23).png",
  "/ourDepartment/masjid/masjid/masjid (24).png",
  "/ourDepartment/masjid/masjid/masjid (25).png",
  "/ourDepartment/masjid/masjid/masjid (26).png",
  "/ourDepartment/masjid/masjid/masjid (27).png",
  "/ourDepartment/masjid/masjid/masjid (28).png",
  "/ourDepartment/masjid/masjid/masjid (29).png",
  "/ourDepartment/masjid/masjid/masjid (30).png",
  "/ourDepartment/masjid/masjid/masjid (31).png",
  "/ourDepartment/masjid/masjid/masjid (32).png",
  "/ourDepartment/masjid/masjid/masjid (33).png",
  "/ourDepartment/masjid/masjid/masjid (34).png",
  "/ourDepartment/masjid/masjid/masjid (35).png",
  "/ourDepartment/masjid/masjid/masjid (36).png",
  "/ourDepartment/masjid/masjid/masjid (37).png",
  "/ourDepartment/masjid/masjid/masjid (38).png",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useContentContext } from "../../contextApi/contentContext";

export default function SliderSectionMasjid() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Masjid" === title.content.sec
  );
  const sliderImg = foodBoxData[0]?.content?.slider;
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
        {imageList.map((img, index) => (
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
        {/* {imageList1.map((img, index) => (
          <SwiperSlide>
            <Image
              src={img}
              alt="imagSLider"
              width={400}
              height={400}
              className="w-40"
            />
          </SwiperSlide>
        ))}
        {imageList2.map((img, index) => (
          <SwiperSlide>
            <Image
              src={img}
              alt="imagSLider"
              width={400}
              height={400}
              className="w-40"
            />
          </SwiperSlide>
        ))} */}
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
