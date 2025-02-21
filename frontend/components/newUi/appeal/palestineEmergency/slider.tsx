"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
const imageList = [
  "/AppealNew/palestine/1.png",
  "/AppealNew/palestine/2.png",
  "/AppealNew/palestine/3.png",
  "/AppealNew/palestine/4.png",
  "/AppealNew/palestine/5.png",
  "/AppealNew/palestine/6.png",
  "/AppealNew/palestine/7.png",
  "/AppealNew/palestine/8.png",
  "/AppealNew/palestine/9.png",
  "/AppealNew/palestine/10.png",
  "/AppealNew/palestine/11.jpg",
  "/AppealNew/palestine/12.png",
  "/AppealNew/palestine/13.jpg",
  "/AppealNew/palestine/14.png",
  "/AppealNew/palestine/15.png",
  "/AppealNew/palestine/16.png",
  "/AppealNew/palestine/17.png",
  "/AppealNew/palestine/18.jpg",
  "/AppealNew/palestine/19.png",
  "/AppealNew/palestine/20.png",
  "/AppealNew/palestine/21.png",
  "/AppealNew/palestine/22.png",
  "/AppealNew/palestine/23.png",
  "/AppealNew/palestine/24.png",
  "/AppealNew/palestine/25.png",
  "/AppealNew/palestine/26.png",
];
const imageList1 = [
  "/AppealNew/palestine/1.png",
  "/AppealNew/palestine/2.png",
  "/AppealNew/palestine/3.png",
  "/AppealNew/palestine/4.png",
  "/AppealNew/palestine/5.png",
  "/AppealNew/palestine/6.png",
  "/AppealNew/palestine/7.png",
  "/AppealNew/palestine/8.png",
  "/AppealNew/palestine/9.png",
  "/AppealNew/palestine/10.png",
  "/AppealNew/palestine/11.jpg",
  "/AppealNew/palestine/12.png",
  "/AppealNew/palestine/13.jpg",
  "/AppealNew/palestine/14.png",
  "/AppealNew/palestine/15.png",
  "/AppealNew/palestine/16.png",
  "/AppealNew/palestine/17.png",
  "/AppealNew/palestine/18.jpg",
  "/AppealNew/palestine/19.png",
  "/AppealNew/palestine/20.png",
  "/AppealNew/palestine/21.png",
  "/AppealNew/palestine/22.png",
  "/AppealNew/palestine/23.png",
  "/AppealNew/palestine/24.png",
  "/AppealNew/palestine/25.png",
  "/AppealNew/palestine/26.png",
];
const imageList2 = [
  "/AppealNew/palestine/1.png",
  "/AppealNew/palestine/2.png",
  "/AppealNew/palestine/3.png",
  "/AppealNew/palestine/4.png",
  "/AppealNew/palestine/5.png",
  "/AppealNew/palestine/6.png",
  "/AppealNew/palestine/7.png",
  "/AppealNew/palestine/8.png",
  "/AppealNew/palestine/9.png",
  "/AppealNew/palestine/10.png",
  "/AppealNew/palestine/11.jpg",
  "/AppealNew/palestine/12.png",
  "/AppealNew/palestine/13.jpg",
  "/AppealNew/palestine/14.png",
  "/AppealNew/palestine/15.png",
  "/AppealNew/palestine/16.png",
  "/AppealNew/palestine/17.png",
  "/AppealNew/palestine/18.jpg",
  "/AppealNew/palestine/19.png",
  "/AppealNew/palestine/20.png",
  "/AppealNew/palestine/21.png",
  "/AppealNew/palestine/22.png",
  "/AppealNew/palestine/23.png",
  "/AppealNew/palestine/24.png",
  "/AppealNew/palestine/25.png",
  "/AppealNew/palestine/26.png",
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SliderSectionPlstine() {
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
