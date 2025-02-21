"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
const imageList = [
  "/AppealNew/winter/1.png",
  "/AppealNew/winter/2.png",
  "/AppealNew/winter/3.png",
  "/AppealNew/winter/4.png",
  "/AppealNew/winter/5.png",
  "/AppealNew/winter/6.png",
  "/AppealNew/winter/7.png",
  "/AppealNew/winter/8.png",
  "/AppealNew/winter/9.png",
  "/AppealNew/winter/10.png",
  "/AppealNew/winter/11.png",
  "/AppealNew/winter/12.png",
  "/AppealNew/winter/13.png",
];
const imageList1 = [
  "/AppealNew/winter/1.png",
  "/AppealNew/winter/2.png",
  "/AppealNew/winter/3.png",
  "/AppealNew/winter/4.png",
  "/AppealNew/winter/5.png",
  "/AppealNew/winter/6.png",
  "/AppealNew/winter/7.png",
  "/AppealNew/winter/8.png",
  "/AppealNew/winter/9.png",
  "/AppealNew/winter/10.png",
  "/AppealNew/winter/11.png",
  "/AppealNew/winter/12.png",
  "/AppealNew/winter/13.png",
];
const imageList2 = [
  "/AppealNew/winter/1.png",
  "/AppealNew/winter/2.png",
  "/AppealNew/winter/3.png",
  "/AppealNew/winter/4.png",
  "/AppealNew/winter/5.png",
  "/AppealNew/winter/6.png",
  "/AppealNew/winter/7.png",
  "/AppealNew/winter/8.png",
  "/AppealNew/winter/9.png",
  "/AppealNew/winter/10.png",
  "/AppealNew/winter/11.png",
  "/AppealNew/winter/12.png",
  "/AppealNew/winter/13.png",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderSectionWinter() {
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
          640: {
            slidesPerView: 2,
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
        modules={[Pagination, Navigation]}
        navigation={true}
        className=""
      >
        {imageList.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt="imagSLider"
              width={400}
              height={400}
              className=""
            />
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
      </Swiper>
    </>
  );
}
