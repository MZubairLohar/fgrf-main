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

export default function SliderSectionPalestine() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Palestine Emergency" === title.content.sec
  );
  const sliderImg = foodBoxData[0]?.content?.slider;
  const imageList = sliderImg || [
    "/AppealNew/palestine/palestine (1).png",
    "/AppealNew/palestine/palestine (2).png",
    "/AppealNew/palestine/palestine (3).png",
    "/AppealNew/palestine/palestine (4).png",
    "/AppealNew/palestine/palestine (5).png",
    "/AppealNew/palestine/palestine (6).png",
    "/AppealNew/palestine/palestine (7).png",
    "/AppealNew/palestine/palestine (8).png",
    "/AppealNew/palestine/palestine (9).png",
    "/AppealNew/palestine/palestine (10).png",
    "/AppealNew/palestine/palestine (11).png",
    "/AppealNew/palestine/palestine (12).png",
    "/AppealNew/palestine/palestine (13).png",
    "/AppealNew/palestine/palestine (14).png",
    "/AppealNew/palestine/palestine (15).png",
    "/AppealNew/palestine/palestine (16).png",
    "/AppealNew/palestine/palestine (17).png",
    "/AppealNew/palestine/palestine (18).png",
    "/AppealNew/palestine/palestine (19).png",
    "/AppealNew/palestine/palestine (20).png",
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
        {/* Add Navigation Buttons */}
        {/* <div className="swiper-button-next">
          <PiArrowFatRightFill className="w-32 h-10 text-white" />
        </div>
        <div className="swiper-button-prev">
          <PiArrowFatRightFill className="w-32 h-10 text-white" />
        </div> */}
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
