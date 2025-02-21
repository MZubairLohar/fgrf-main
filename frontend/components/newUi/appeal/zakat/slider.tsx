"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
const imageList = [
  "/AppealNew/Zakat/1.jpg",
  "/AppealNew/Zakat/2.jpg",
  "/AppealNew/Zakat/3.jpg",
  "/AppealNew/Zakat/4.jpg",
  "/AppealNew/Zakat/5.jpg",
  "/AppealNew/Zakat/6.jpg",
  "/AppealNew/Zakat/7.jpg",
  "/AppealNew/Zakat/1.jpg",
  "/AppealNew/Zakat/2.jpg",
  "/AppealNew/Zakat/3.jpg",
  "/AppealNew/Zakat/4.jpg",
  "/AppealNew/Zakat/5.jpg",
  "/AppealNew/Zakat/6.jpg",
  "/AppealNew/Zakat/7.jpg",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderSectionZakat() {
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
