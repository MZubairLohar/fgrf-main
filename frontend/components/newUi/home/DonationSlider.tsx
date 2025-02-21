import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./DonationSlider.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function DonationSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const imgList = [
    "/donationSlider/emergencyAppeal.jpeg",
    "/donationSlider/flastin.jpeg",
    "/donationSlider/ghaza.jpeg",
    "/donationSlider/ghazaHotMeals.jpeg",
    "/donationSlider/ghazaDistribution100.jpeg",
    "/donationSlider/sad.jpeg",
  ];
  return (
    <div className="bg-[#1aabab] rounded-lg p-4">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-md"
      >
        {imgList.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img} alt="Image" width={400} height={400} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onClick={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper rounded-md"
      >
        {imgList.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img} alt="Image" width={400} height={400} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
