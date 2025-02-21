"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Join = () => {
  const data = [
    {
      svg: "/img/project1.png",
    },
    {
      svg: "/img/project2.png",
    },
    {
      svg: "/img/project3.png",
    },
    {
      svg: "/img/project4.png",
    },
    {
      svg: "/img/project5.png",
    },
    {
      svg: "/img/project6.png",
    },
    {
      svg: "/img/project7.png",
    },
    {
      svg: "/img/project8.png",
    },
  ];
  return (
    <>
      <div className="overflow-hidden relative max-w-[1200px] mx-auto sm:py-8 py-4">
        <div className="grid lg:grid-cols-7 grid-cols-1 h-auto py-10 items-center px-3 gap-x-2">
          <div className="lg:col-span-4 col-span-1 lg:flex lg:flex-row lg:justify-between md:flex md:flex-row md:justify-around flex flex-col gap-y-4 relative lg:py-0 py-10">
            <div
              className="md:w-[300px] md:h-[350px] w-full bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(/img/hexagon.svg)` }}
            >
              <img src="/img/polygon 04.png" className="w-full h-full" alt="" />
            </div>
            <div
              className="md:w-[300px] md:h-[350px] w-full h-[450px] bg-center bg-no-repeat bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(/img/hexagon.svg)` }}
            >
              <div className="flex flex-col items-center gap-y-2 px-2">
                <img
                  src="https://fgrf.org/web_assets/images/fgrf/newLogo.png"
                  className="w-16"
                  alt=""
                />
                <h3 className="text-center text-[#477d94] text-sm font-semibold">
                  We Work in Different countries
                </h3>
                <p className="text-center text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, magni. Non, velit ab corporis, temporibus obcaecati
                  eveniet eum rem dolor voluptatibus animi a aliquid molestiae,
                  minus hic error dicta illum!
                </p>
              </div>
            </div>
            <div className="blob-animation absolute top-0 right-0 left-0 bottom-0 w-full h-full z-[-2] ">
              <img
                src="/img/icon-blob-orange.svg"
                className="w-full h-full"
                alt=""
              />
            </div>
            {/* <div className="blob-animation absolute top-0 right-0 left-0 bottom-0 w-full h-full z-[-2]">
              <img src="/img/outline.svg" className="w-full h-full" alt="" />
            </div> */}
          </div>
          <div className="lg:col-span-3 col-span-1 flex flex-col gap-y-4">
            <h2 className="text-[#394146] sm:text-3xl text-2xl font-bold text-center">
              Our Department
            </h2>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              assumenda laboriosam rem atque ad aspernatur? Sit cupiditate, odio
              inventore recusandae delectus dolorem dolores ad, ut nesciunt
              dolorum temporibus ratione earum!
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-white/60 z-[-1]"></div>
        <div className="max-w-[700px] mx-auto px-3 sm:py-16 py-10">
          <h2 className="sm:text-4xl text-3xl font-semibold text-center mb-6">
            Our Projects
          </h2>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {data.map((data, index) => (
              <SwiperSlide key={index}>
                <img src={data.svg} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Join;
