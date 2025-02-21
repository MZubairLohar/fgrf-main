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

export default function SliderSectionHandPump() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Hand Pump Project" === title.content.sec
  );
  const sliderImg = foodBoxData[0]?.content?.slider;
  const imageList = sliderImg || [
    "/AppealNew/handPump/handpump (1).jpg",
    "/AppealNew/handPump/handpump (2).jpg",
    "/AppealNew/handPump/handpump (3).jpg",
    "/AppealNew/handPump/handpump (4).jpg",
    "/AppealNew/handPump/handpump (6).jpg",
    "/AppealNew/handPump/handpump (7).jpg",
    "/AppealNew/handPump/handpump (8).jpg",
    "/AppealNew/handPump/handpump (9).jpg",
    "/AppealNew/handPump/handpump (10).jpg",
    "/AppealNew/handPump/handpump (11).jpg",
    "/AppealNew/handPump/handpump (12).jpg",
    "/AppealNew/handPump/handpump (13).jpg",
    "/AppealNew/handPump/handpump (14).jpg",
    "/AppealNew/handPump/handpump (15).jpg",
    "/AppealNew/handPump/handpump (16).jpg",
    "/AppealNew/handPump/handpump (17).jpg",
    "/AppealNew/handPump/handpump (18).jpg",
    "/AppealNew/handPump/handpump (19).jpg",
    "/AppealNew/handPump/handpump (20).jpg",
    "/AppealNew/handPump/handpump (21).jpg",
    "/AppealNew/handPump/handpump (22).jpg",
    "/AppealNew/handPump/handpump (23).jpg",
    "/AppealNew/handPump/handpump (24).jpg",
    "/AppealNew/handPump/handpump (25).jpg",
    "/AppealNew/handPump/handpump (26).jpg",
    "/AppealNew/handPump/handpump (27).jpg",
    "/AppealNew/handPump/handpump (38).jpg",
    "/AppealNew/handPump/handpump (29).jpg",
    "/AppealNew/handPump/handpump (30).jpg",
    "/AppealNew/handPump/handpump (31).jpg",
    "/AppealNew/handPump/handpump (32).jpg",
    "/AppealNew/handPump/handpump (33).jpg",
    "/AppealNew/handPump/handpump (34).jpg",
    "/AppealNew/handPump/handpump (35).jpg",
    "/AppealNew/handPump/handpump (36).jpg",
    "/AppealNew/handPump/handpump (37).jpg",
    "/AppealNew/handPump/handpump (38).jpg",
    "/AppealNew/handPump/handpump (39).jpg",
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
