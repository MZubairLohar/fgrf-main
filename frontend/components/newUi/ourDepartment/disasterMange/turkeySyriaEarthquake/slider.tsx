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

export default function SliderSectionturkeySyriaEarthQuack() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Turkey & Syria Earthquake" === title.content.sec
  );
  const sliderImg = foodBoxData[0]?.content?.slider;
  const imageList = sliderImg || [
    "/ourDepartment/disaster/turkeySyriaEarthquake/1.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/2.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/3.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/4.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/5.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/6.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/7.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/8.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/9.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/10.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/11.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/12.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/13.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/14.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/15.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/16.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/17.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/18.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/19.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/20.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/21.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/22.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/23.jpg",
    "/ourDepartment/disaster/turkeySyriaEarthquake/24.jpg",
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
            <div className="h-40 lg:h-56">
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
