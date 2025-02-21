"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ImageModal from "../modal/ImageModal";
import { useState } from "react";

const AchievementPage = () => {
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
    <>
      <div className="relative bg-center bg-no-repeat bg-cover mt-14 lg:mt-28">
        <div className="flex flex-col items-center gap-y-4  mx-auto sm:py-10 py-6 px-3">
          <div className=" w-60 mx-auto rounded-full border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] py-1">
            <h2 className="text-xl md:text-3xl font-semibold text-center">
              Achievements
            </h2>
          </div>
        </div>
        <div className="max-w-6xl mx-2 lg:mx-4 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 xl:mx-auto px-3 pb-10">
          {data.map((data, index) => (
            <>
              <div
                key={index}
                className="bg-white rounded-md p-2 w-full  shadow-lg"
              >
                <div className="p-2 h-80">
                  {/* <img src={data.img} className="w-full h-full" alt="" /> */}
                  <div
                    className="w-full rounded-md h-full bg-[#bebebc] cursor-pointer bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.img})` }}
                    onClick={() => handleOpenAndCerticate(data.img)}
                  ></div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <ImageModal open={open} setOpen={setOpen} imagePath={certicateImage} />
    </>
  );
};

export default AchievementPage;