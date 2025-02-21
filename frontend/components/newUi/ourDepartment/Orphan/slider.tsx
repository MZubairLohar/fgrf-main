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
import { useContentContext } from "../../contextApi/contentContext";

export default function SliderSectionOrphan() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Orphan" === title.content.sec
  );
  const sliderImg = foodBoxData[0]?.content?.slider;
  const imageList = sliderImg || [
    "/ourDepartment/orphan/orphan/orphan (1).png",
    "/ourDepartment/orphan/orphan/orphan (2).png",
    "/ourDepartment/orphan/orphan/orphan (3).png",
    "/ourDepartment/orphan/orphan/orphan (4).png",
    "/ourDepartment/orphan/orphan/orphan (5).png",
    "/ourDepartment/orphan/orphan/orphan (6).png",
    "/ourDepartment/orphan/orphan/orphan (7).png",
    "/ourDepartment/orphan/orphan/orphan (8).png",
    "/ourDepartment/orphan/orphan/orphan (9).png",
    "/ourDepartment/orphan/orphan/orphan (10).png",
    "/ourDepartment/orphan/orphan/orphan (11).png",
    "/ourDepartment/orphan/orphan/orphan (12).png",
    "/ourDepartment/orphan/orphan/orphan (13).png",
    "/ourDepartment/orphan/orphan/orphan (14).png",
    "/ourDepartment/orphan/orphan/orphan (15).png",
    "/ourDepartment/orphan/orphan/orphan (16).png",
    "/ourDepartment/orphan/orphan/orphan (17).png",
    "/ourDepartment/orphan/orphan/orphan (18).png",
    "/ourDepartment/orphan/orphan/orphan (19).png",
    "/ourDepartment/orphan/orphan/orphan (20).png",
    "/ourDepartment/orphan/orphan/orphan (21).png",
    "/ourDepartment/orphan/orphan/orphan (22).png",
    "/ourDepartment/orphan/orphan/orphan (23).png",
    "/ourDepartment/orphan/orphan/orphan (24).png",
    "/ourDepartment/orphan/orphan/orphan (25).png",
    "/ourDepartment/orphan/orphan/orphan (26).png",
    "/ourDepartment/orphan/orphan/orphan (27).png",
    "/ourDepartment/orphan/orphan/orphan (28).png",
    "/ourDepartment/orphan/orphan/orphan (29).png",
    "/ourDepartment/orphan/orphan/orphan (30).png",
    "/ourDepartment/orphan/orphan/orphan (31).png",
    "/ourDepartment/orphan/orphan/orphan (32).png",
    "/ourDepartment/orphan/orphan/orphan (33).png",
    "/ourDepartment/orphan/orphan/orphan (34).png",
    "/ourDepartment/orphan/orphan/orphan (35).png",
    "/ourDepartment/orphan/orphan/orphan (36).png",
    "/ourDepartment/orphan/orphan/orphan (37).png",
    "/ourDepartment/orphan/orphan/orphan (38).png",
    "/ourDepartment/orphan/orphan/orphan (39).png",
    "/ourDepartment/orphan/orphan/orphan (40).png",
    "/ourDepartment/orphan/orphan/orphan (41).png",
    "/ourDepartment/orphan/orphan/orphan (42).png",
    "/ourDepartment/orphan/orphan/orphan (43).png",
    "/ourDepartment/orphan/orphan/orphan (44).png",
    "/ourDepartment/orphan/orphan/orphan (45).png",
    "/ourDepartment/orphan/orphan/orphan (46).png",
    "/ourDepartment/orphan/orphan/orphan (47).png",
    "/ourDepartment/orphan/orphan/orphan (48).png",
    "/ourDepartment/orphan/orphan/orphan (49).png",
    "/ourDepartment/orphan/orphan/orphan (50).png",
    "/ourDepartment/orphan/orphan/orphan (51).png",
    "/ourDepartment/orphan/orphan/orphan (52).png",
    "/ourDepartment/orphan/orphan/orphan (53).png",
    "/ourDepartment/orphan/orphan/orphan (54).png",
    "/ourDepartment/orphan/orphan/orphan (55).png",
    "/ourDepartment/orphan/orphan/orphan (56).png",
    "/ourDepartment/orphan/orphan/orphan (57).png",
    "/ourDepartment/orphan/orphan/orphan (58).png",
    "/ourDepartment/orphan/orphan/orphan (59).png",
    "/ourDepartment/orphan/orphan/orphan (60).png",
    "/ourDepartment/orphan/orphan/orphan (61).png",
    "/ourDepartment/orphan/orphan/orphan (62).png",
    "/ourDepartment/orphan/orphan/orphan (63).png",
    "/ourDepartment/orphan/orphan/orphan (64).png",
    "/ourDepartment/orphan/orphan/orphan (63).png",
    "/ourDepartment/orphan/orphan/orphan (64).png",
    "/ourDepartment/orphan/orphan/orphan (65).png",
    "/ourDepartment/orphan/orphan/orphan (66).png",
    "/ourDepartment/orphan/orphan/orphan (67).png",
    "/ourDepartment/orphan/orphan/orphan (68).png",
    "/ourDepartment/orphan/orphan/orphan (69).png",
    "/ourDepartment/orphan/orphan/orphan (70).png",
    "/ourDepartment/orphan/orphan/orphan (71).png",
    "/ourDepartment/orphan/orphan/orphan (72).png",
    "/ourDepartment/orphan/orphan/orphan (73).png",
    "/ourDepartment/orphan/orphan/orphan (74).png",
    "/ourDepartment/orphan/orphan/orphan (75).png",
    "/ourDepartment/orphan/orphan/orphan (76).png",
    "/ourDepartment/orphan/orphan/orphan (78).png",
    "/ourDepartment/orphan/orphan/orphan (79).png",
    "/ourDepartment/orphan/orphan/orphan (80).png",
    "/ourDepartment/orphan/orphan/orphan (81).png",
    "/ourDepartment/orphan/orphan/orphan (82).png",
    "/ourDepartment/orphan/orphan/orphan (83).png",
    "/ourDepartment/orphan/orphan/orphan (84).png",
    "/ourDepartment/orphan/orphan/orphan (85).png",
    "/ourDepartment/orphan/orphan/orphan (86).png",
    "/ourDepartment/orphan/orphan/orphan (87).png",
    "/ourDepartment/orphan/orphan/orphan (88).png",
    "/ourDepartment/orphan/orphan/orphan (89).png",
    "/ourDepartment/orphan/orphan/orphan (90).png",
    "/ourDepartment/orphan/orphan/orphan (91).png",
    "/ourDepartment/orphan/orphan/orphan (92).png",
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
