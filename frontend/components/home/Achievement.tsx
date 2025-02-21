"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ImageModal from "../modal/ImageModal";
import { useState } from "react";
import Link from "next/link";

const Achievement = () => {
  const data = [
    {
      img: "/img/index1.jpeg",
    },
    {
      img: "/img/index2.jpg",
    },
    {
      img: "/img/index3.jpeg",
    },
    {
      img: "/img/index4.jpeg",
    },
    {
      img: "/img/index5.jpg",
    },
  ];
  const [open, setOpen] = useState(false);
  const [certicateImage, setCertificateImage] = useState("");

  const handleOpenAndCerticate = (imagePath: string) => {
    setCertificateImage(imagePath);
    setOpen(true);
  };
  return (
    <div>
      <div
        className="relative bg-center bg-no-repeat bg-cover -z-30"
      >
        <div className="flex flex-col items-center gap-y-4 max-w-[1200px] mx-auto sm:py-10 py-6 px-3">
          <div
            style={{ backgroundImage: `url(./img/new-img/Button-04.png)` }}
            className="bg-center bg-no-repeat bg-cover rounded-full mx-auto px-4 flex justify-center items-center py-2"
          >
            <h2 className="md:text-2xl text-xl">ACHIEVEMENTS</h2>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto px-3 pb-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.map((data, index) => (
              <SwiperSlide key={index} className="">
                <div className="bg-white rounded-md p-2 w-full h-[430px] shadow-lg">
                  <div className="w-full rounded-tr-md rounded-tl-md h-24 bg-[#bebebc] flex justify-center items-end">
                    <div className="w-16 h-16 p-3 rounded-full shadow-xl bg-white">
                      <img
                        src="/img/center-lg.png"
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="p-2 h-80">
                    {/* <img src={data.img} className="w-full h-full" alt="" /> */}
                    <div
                      className="w-full rounded-md h-full bg-[#bebebc] cursor-pointer bg-no-repeat bg-cover bg-center"
                      style={{ backgroundImage: `url(${data.img})` }}
                      onClick={() => handleOpenAndCerticate(data.img)}
                    ></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Link href={'/achievements'}>
            <div className="mb-6 w-48 mx-auto rounded-full mt-8 border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
              <h2 className="text-lg md:text-xl text-center">View All</h2>
            </div>
          </Link>
        </div>
        <div className="w-full absolute top-0 right-0 z-[-1]">
          <img src="./img/new-img/map.png" className="w-full h-full" alt="" />
        </div>
      </div>
      <ImageModal open={open} setOpen={setOpen} imagePath={certicateImage} />
    </div>
  );
};

export default Achievement;
