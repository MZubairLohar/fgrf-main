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
const EnvironmentDepartmentsList = [
  {
    link: "plantation",
    img: "/ourDepartment/EnvironmentDepartment/plant/plant (20).jpg",
    title: "Plantation",
    desc: "FGRF stood out with its unwavering commitment to support those in need",
  },
  // {
  //   link: "blood-donations",
  //   img: "/GalleryNew1/6.jpg",
  //   title: "Blood Donations",
  //   desc: "FGRF's Swift Response to Pakistan Floods: From Rescue to Rebuilding",
  // },
  // {
  //   link: "medical-van",
  //   img: "/GalleryNew1/turkey.jpg",
  //   title: "Medical van",
  //   desc: " FGRF swiftly mobilized to provide aid and support to those affected",
  // },
  // {
  //   link: "faizan-rehabilitation-center",
  //   img: "/GalleryNew1/morco1.jpg",
  //   title: "Faizan Rehabilitation center",
  //   desc: "Supporting Morocco: FGRF's Relief Efforts in Response to the Earthquake",
  // },
  // {
  //   link: "medical-clinic",
  //   img: "/AppealNew/palestine/18.jpg",
  //   title: "Medical clinic",
  //   desc: "FGRF's Swift Response in Palestine During Times of Crisis",
  // },
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function SliderSectionEnvironment() {
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
        modules={[Pagination, Navigation]}
        // navigation={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className=""
      >
        {EnvironmentDepartmentsList.map((data, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <Link
              href={`/our-department/environment-department-${data.link}`}
              className="relative hover:opacity-100 bg-sky-800 w-96 h-40 lg:h-56 xl:h-60 transition duration-300 opacity-60 !object-fill object-center"
            >
              <Image
                src={data.img}
                alt="imagSLider"
                width={400}
                height={400}
                className="h-full w-full"
              />
            </Link>
          </SwiperSlide>
        ))}
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 z-50 flex justify-between w-full px-3 md:px-5">
          <div className="swiper-button-prev bg-white relative overflow-hidden rounded-full">
            <BsArrowLeftCircleFill
              className="text-teal-400 w-6 h-6 md:w-10 md:h-10 font-extrabold"
              style={{ fontWeight: "bold" }}
            />
          </div>
          <div className="swiper-button-next bg-white relative overflow-hidden rounded-full">
            <BsArrowRightCircleFill className="text-teal-400  w-6 h-6 md:w-10 md:h-10  font-extrabold" />
          </div>
        </div>
      </Swiper>
    </>
  );
}
