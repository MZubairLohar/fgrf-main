"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
const imageList = [
  "/AppealNew/Orphan/1.jpg",
  "/AppealNew/Orphan/2.jpg",
  // "/AppealNew/Orphan/3.jpg",
  "/AppealNew/Orphan/4.jpg",
  "/AppealNew/Orphan/5.jpg",
  "/AppealNew/Orphan/6.jpg",
  "/AppealNew/Orphan/7.jpg",
  "/AppealNew/Orphan/8.jpg",
  "/AppealNew/Orphan/1.jpg",
  "/AppealNew/Orphan/2.jpg",
  // "/AppealNew/Orphan/3.jpg",
  "/AppealNew/Orphan/4.jpg",
  "/AppealNew/Orphan/5.jpg",
  "/AppealNew/Orphan/6.jpg",
  "/AppealNew/Orphan/7.jpg",
  "/AppealNew/Orphan/8.jpg",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderSectionOrphan() {
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
          <SwiperSlide key={index} className="">
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
