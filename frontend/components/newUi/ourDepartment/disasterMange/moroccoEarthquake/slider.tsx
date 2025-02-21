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

export default function SliderSectionMoroccoEarthquake() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Morocco Earthquake" === title.content.sec
  );
  const sliderImg = foodBoxData[0]?.content?.slider;
  const imageList = sliderImg || [
    "/ourDepartment/disaster/morroco/morroco (35).JPG",
    "/ourDepartment/disaster/morroco/morroco (36).JPG",
    "/ourDepartment/disaster/morroco/morroco (37).JPG",
    "/ourDepartment/disaster/morroco/morroco (38).JPG",
    "/ourDepartment/disaster/morroco/morroco (1).JPG",
    "/ourDepartment/disaster/morroco/morroco (2).JPG",
    "/ourDepartment/disaster/morroco/morroco (3).JPG",
    "/ourDepartment/disaster/morroco/morroco (4).JPG",
    "/ourDepartment/disaster/morroco/morroco (5).JPG",
    "/ourDepartment/disaster/morroco/morroco (6).JPG",
    "/ourDepartment/disaster/morroco/morroco (7).JPG",
    "/ourDepartment/disaster/morroco/morroco (8).JPG",
    "/ourDepartment/disaster/morroco/morroco (9).JPG",
    "/ourDepartment/disaster/morroco/morroco (10).JPG",
    "/ourDepartment/disaster/morroco/morroco (11).JPG",
    "/ourDepartment/disaster/morroco/morroco (12).JPG",
    "/ourDepartment/disaster/morroco/morroco (13).JPG",
    "/ourDepartment/disaster/morroco/morroco (14).JPG",
    "/ourDepartment/disaster/morroco/morroco (15).JPG",
    "/ourDepartment/disaster/morroco/morroco (16).JPG",
    "/ourDepartment/disaster/morroco/morroco (17).JPG",
    "/ourDepartment/disaster/morroco/morroco (18).JPG",
    "/ourDepartment/disaster/morroco/morroco (19).JPG",
    "/ourDepartment/disaster/morroco/morroco (20).JPG",
    "/ourDepartment/disaster/morroco/morroco (21).JPG",
    "/ourDepartment/disaster/morroco/morroco (22).JPG",
    "/ourDepartment/disaster/morroco/morroco (23).JPG",
    "/ourDepartment/disaster/morroco/morroco (24).JPG",
    "/ourDepartment/disaster/morroco/morroco (25).JPG",
    "/ourDepartment/disaster/morroco/morroco (26).JPG",
    "/ourDepartment/disaster/morroco/morroco (27).JPG",
    "/ourDepartment/disaster/morroco/morroco (28).JPG",
    "/ourDepartment/disaster/morroco/morroco (29).JPG",
    "/ourDepartment/disaster/morroco/morroco (30).JPG",
    "/ourDepartment/disaster/morroco/morroco (31).JPG",
    "/ourDepartment/disaster/morroco/morroco (32).JPG",
    "/ourDepartment/disaster/morroco/morroco (33).JPG",
    "/ourDepartment/disaster/morroco/morroco (34).JPG",
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
