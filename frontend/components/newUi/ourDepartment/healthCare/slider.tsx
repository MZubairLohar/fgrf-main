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
const HealthCaresList = [
  {
    link: "eye-camps",
    img: "/ourDepartment/frames/EyeCamps.png",
    title: "Eye camps",
    desc: "FGRF stood out with its unwavering commitment to support those in need",
  },
  {
    link: "blood-donations",
    img: "/ourDepartment/frames/BloodDonations.png",
    title: "Blood Donations",
    desc: "FGRF's Swift Response to Pakistan Floods: From Rescue to Rebuilding",
  },
  {
    link: "medical-van",
    img: "/ourDepartment/frames/MedicalVan.png",
    title: "Medical van",
    desc: " FGRF swiftly mobilized to provide aid and support to those affected",
  },
  {
    link: "faizan-rehabilitation-center",
    img: "/ourDepartment/frames/FaizanRehabilitionCenter.png",
    title: "Faizan Rehabilitation center",
    desc: "Supporting Morocco: FGRF's Relief Efforts in Response to the Earthquake",
  },
  {
    link: "medical-clinic",
    img: "/ourDepartment/frames/MedicalClinic.png",
    title: "Medical clinic",
    desc: "FGRF's Swift Response in Palestine During Times of Crisis",
  },
];

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function SliderSectionHealth() {
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
            slidesPerView: 2,
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
        {HealthCaresList.map((data, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <Link
              href={`/our-department/health-care-${data.link}`}
              className="relative hover:opacity-100 bg-sky-800 w-96 h-40 lg:h-56 xl:h-60 transition duration-300 opacity-60 !object-cover object-center"
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

        {/* <div className="!absolute top-1/2 z-50 flex justify-between w-full px-2 md:px-5"> */}
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
        {/* </div> */}
      </Swiper>
    </>
  );
}
