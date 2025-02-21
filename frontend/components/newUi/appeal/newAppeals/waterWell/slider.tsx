"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";

export default function SliderSectionWaterWell() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Water Well Project" === title.content.sec
  );
  const sliderImg = foodBoxData[0]?.content?.slider;
  const imageList = sliderImg || [
    "/AppealNew/waterWell/waterwell (1).jpg",
    "/AppealNew/waterWell/waterwell (2).jpg",
    "/AppealNew/waterWell/waterwell (3).jpg",
    "/AppealNew/waterWell/waterwell (4).jpg",
    "/AppealNew/waterWell/waterwell (5).jpg",
    "/AppealNew/waterWell/waterwell (6).jpg",
    "/AppealNew/waterWell/waterwell (7).jpg",
    "/AppealNew/waterWell/waterwell (8).jpg",
    "/AppealNew/waterWell/waterwell (9).jpg",
    "/AppealNew/waterWell/waterwell (10).jpg",
    "/AppealNew/waterWell/waterwell (11).jpg",
    "/AppealNew/waterWell/waterwell (12).jpg",
    "/AppealNew/waterWell/waterwell (13).jpg",
    "/AppealNew/waterWell/waterwell (14).jpg",
    "/AppealNew/waterWell/waterwell (15).jpg",
    "/AppealNew/waterWell/waterwell (16).jpg",
    "/AppealNew/waterWell/waterwell (17).jpg",
    "/AppealNew/waterWell/waterwell (18).jpg",
    "/AppealNew/waterWell/waterwell (19).jpg",
    "/AppealNew/waterWell/waterwell (20).jpg",
    "/AppealNew/waterWell/waterwell (21).jpg",
    "/AppealNew/waterWell/waterwell (22).jpg",
    "/AppealNew/waterWell/waterwell (23).jpg",
    "/AppealNew/waterWell/waterwell (24).jpg",
    "/AppealNew/waterWell/waterwell (25).jpg",
    "/AppealNew/waterWell/waterwell (26).jpg",
    "/AppealNew/waterWell/waterwell (27).jpg",
    "/AppealNew/waterWell/waterwell (28).jpg",
    "/AppealNew/waterWell/waterwell (29).jpg",
    "/AppealNew/waterWell/waterwell (30).jpg",
    "/AppealNew/waterWell/waterwell (31).jpg",
    "/AppealNew/waterWell/waterwell (32).jpg",
    "/AppealNew/waterWell/waterwell (33).jpg",
    "/AppealNew/waterWell/waterwell (34).jpg",
    "/AppealNew/waterWell/waterwell (35).jpg",
    "/AppealNew/waterWell/waterwell (36).jpg",
    "/AppealNew/waterWell/waterwell (37).jpg",
    "/AppealNew/waterWell/waterwell (38).jpg",
    "/AppealNew/waterWell/waterwell (39).jpg",
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
