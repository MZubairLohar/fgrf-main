"use client";

const disastersList = [
  {
    link: "covid-19",
    img: "/ourDepartment/frames/covid.png",
    title: "COVID - 19",
    desc: "FGRF stood out with its unwavering commitment to support those in need",
  },
  {
    link: "pakistan-flood",
    img: "/ourDepartment/frames/pakistanflood.png",
    title: "Pakistan flood ",
    desc: "FGRF's Swift Response to Pakistan Floods: From Rescue to Rebuilding",
  },
  {
    link: "turkey-syria-earthquake",
    img: "/ourDepartment/frames/turkeysyriaEarthquake.png",
    title: "Turkey & Syria earthquake ",
    desc: " FGRF swiftly mobilized to provide aid and support to those affected",
  },
  {
    link: "morocco-earthquake",
    img: "/ourDepartment/frames/morocco.png",
    title: "Morocco earthquake ",
    desc: "Supporting Morocco: FGRF's Relief Efforts in Response to the Earthquake",
  },
  {
    link: "palestine-brothers-sisters",
    img: "/ourDepartment/frames/palestinian.png",
    title: "Palestinian brother & sisters ",
    desc: "FGRF's Swift Response in Palestine During Times of Crisis",
  },
];
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function SliderSectionDisaster() {
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
        // onSwiper={handleSwiperInit}
        modules={[Navigation]}
        navigation={{
          prevEl: "#swiper-button-prev",
          nextEl: "#swiper-button-next",
        }}
        className="!relative"
      >
        {disastersList.map((data, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <Link
              href={`/our-department/disaster-${data.link}`}
              className="relative hover:opacity-100 bg-sky-800 w-96 h-40 lg:h-56 xl:h-60 transition duration-300 opacity-60 !object-fill object-center"
            >
              <Image
                src={data.img}
                alt={`Slider Image ${index}`}
                width={400}
                height={400}
                className="h-full w-full"
              />
              {/* <span className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                {data.title}
              </span> */}
            </Link>
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
