"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Section3 = () => {
  const data = [
    {
      svg: "/img/icon1.svg",
      title: "Disaster Management and Food",
      para: "This department activates during natural disasters",
    },
    {
      svg: "/img/icon2.svg",
      title: "Environment Department",
      para: "This department is working on Climatechange since 2021",
    },
    {
      svg: "/img/icon3.svg",
      title: "Cure for differently abled children",
      para: "Rehabitilation of children having autism, hearing and speech disability",
    },
    {
      svg: "/img/icon4.svg",
      title: "Health Care",
      para: "Medical is a need, indeed low cost and quality diagnosis / healthcare",
    },
    {
      svg: "/img/icon5.svg",
      title: "Education & Skills",
      para: "Different languages, IT and Soft Skills",
    },
  ];
  const data2 = [
    {
      img: "/img/volunteer.jpg",
    },
    {
      img: "/img/18590.jpg",
    },
    {
      img: "/img/18646.jpg",
    },
    {
      img: "/img/assets.jpg",
    },
  ];
  return (
    <section className="relative h-screen">
      <div className="max-w-[1200px] mx-auto h-full bg-white text-black px-3">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-4 lg:gap-y-0 gap-y-2 gap-x-0 h-full items-center">
          <div className="col-span-1 relative h-96 z-[2]">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {data2.map((data, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={data.img}
                    className="w-full h-full rounded-2xl"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-span-1">
            <h2 className="text-center text-3xl">Our Department</h2>
            <div className="grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-4 gap-x-20 gap-y-6 mt-6">
              {data.map((data, index) => (
                <div
                  className="col-span-1 flex flex-col items-center gap-y-2"
                  key={index}
                >
                  <img src={data.svg} className="w-12" alt="" />
                  <h2 className="text-center font-semibold">{data.title}</h2>
                  <p className="text-xs text-center">{data.para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="/img/blobule-background-purple-blue.svg"
        className="absolute top-6 -translate-x-1/2 left-0 h-[450px] rotate-90 z-[1]"
        alt=""
      /> */}
    </section>
  );
};

export default Section3;
