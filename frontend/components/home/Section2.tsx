"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Section2 = () => {
  const [showBlob, setShowBlob] = useState<boolean>(false);
  const [blobIndex, setBlobIndex] = useState<number>();
  const data = [
    {
      img: "/img/icons/earthquake1.png",
      blob: "/img/icon-blob.svg",
      title: "Disaster Management and Food.",
      code: "white",
    },
    {
      img: "/img/icons/self-development2.png",
      blob: "/img/icon-blob-yellow.svg",
      title: "Education & Skills.",
      code: "red",
    },
    {
      img: "/img/icons/protection3.png",
      blob: "/img/icon-blob-purple.svg",
      title: "Health Care.",
      code: "green",
    },
    {
      img: "/img/icons/cuve4.png",
      blob: "/img/icon-blob-orange.svg",
      title: "Cure for differently abled children.",
      code: "blue",
    },
    {
      img: "/img/icons/dev5.png",
      blob: "/img/icon-blob-blue.svg",
      title: "Environment Department.",
      code: "yellow",
    },
    {
      img: "/img/icons/water-tap6.png",
      blob: "/img/icon-blob.svg",
      title: "Water project.",
      code: "purple",
    },
  ];
  const handleBlob = (index: number) => {
    setBlobIndex(index);
    setShowBlob(true);
  };
  return (
    <div className="max-w-6xl mx-auto py-8 px-2">
      <div className="border-4 border-[#faf8f8] py-1 bg-[#efeff1] max-w-xs mx-auto rounded-full shadow-lg">
        <h1 className="text-center text-4xl">Our Department</h1>
      </div>
      <div className="mt-8">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="rounded-2xl bg-[#efeff1] mySwiper"
          navigation={true}
          style={
            {
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "25px",
            } as any
          }
        >
          <SwiperSlide>
            <div className=" py-5 lg:px-10">
              <div className="grid lg:grid-cols-6 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => (
                  <div
                    className="col-span-1 py-2 flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                    key={index}
                    onMouseOver={() => handleBlob(index)}
                    onMouseLeave={() => setShowBlob(false)}
                  >
                    <div className="md:h-14 h-8 relative">
                      <img
                        src={data.blob}
                        className={`absolute top-0 z-[-1] ${
                          blobIndex === index && showBlob
                            ? "opacity-40 transition-all duration-500"
                            : "opacity-0 transition-all duration-500"
                        }`}
                        alt=""
                      />
                      <img src={data.img} className="" alt="" />
                    </div>
                    <div>
                      <h4
                        className={`text-center text-sm text-[#394146] leading-none`}
                      >
                        {data.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" py-5 lg:px-10">
              <div className="grid lg:grid-cols-6 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => (
                  <div
                    className="col-span-1 py-2 flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                    key={index}
                    onMouseOver={() => handleBlob(index)}
                    onMouseLeave={() => setShowBlob(false)}
                  >
                    <div className="md:h-14 h-8 relative">
                      <img
                        src={data.blob}
                        className={`absolute top-0 z-[-1] ${
                          blobIndex === index && showBlob
                            ? "opacity-40 transition-all duration-500"
                            : "opacity-0 transition-all duration-500"
                        }`}
                        alt=""
                      />
                      <img src={data.img} className="" alt="" />
                    </div>
                    <div>
                      <h4
                        className={`text-center text-sm text-[#394146] leading-none`}
                      >
                        {data.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" py-5 lg:px-10">
              <div className="grid lg:grid-cols-6 lg:grid-rows-none md:grid-cols-3 items-center md:grid-rows-2 grid-cols-2 grid-rows-3 gap-4">
                {data.map((data, index) => (
                  <div
                    className="col-span-1 py-2 flex flex-col gap-y-1 items-center justify-between cursor-pointer"
                    key={index}
                    onMouseOver={() => handleBlob(index)}
                    onMouseLeave={() => setShowBlob(false)}
                  >
                    <div className="md:h-14 h-8 relative">
                      <img
                        src={data.blob}
                        className={`absolute top-0 z-[-1] ${
                          blobIndex === index && showBlob
                            ? "opacity-40 transition-all duration-500"
                            : "opacity-0 transition-all duration-500"
                        }`}
                        alt=""
                      />
                      <img src={data.img} className="" alt="" />
                    </div>
                    <div>
                      <h4
                        className={`text-center text-sm text-[#394146] leading-none`}
                      >
                        {data.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section2;