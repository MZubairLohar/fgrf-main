"use client";
import { useState } from "react";

const Gallery = () => {
  const [show, setShow] = useState<boolean>(false);
  const [saveIndex, setSavedIndex] = useState<number>();
  const data = [
    {
      img: "/img/30.png",
    },
    {
      img: "/img/051.jpg",
    },
    {
      img: "/img/022.jpg",
    },
    {
      img: "/img/4.jpg",
    },
    {
      img: "/img/04.jpg",
    },
    {
      img: "/img/2.jpg",
    },
    {
      img: "/img/012.jpg",
    },
    {
      img: "/img/012.jpg",
    },
  ];
  const handleOpacity = (index: number) => {
    setSavedIndex(index);
    setShow(true);
  };
  return (
    <div className="max-w-[1200px] mx-auto px-3 py-8 flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
        {data.map((data, index) => (
          <div
            key={index}
            className="h-60 col-span-1 relative"
            onMouseOver={() => handleOpacity(index)}
            onMouseLeave={() => setShow(false)}
          > 
            <div
              className={`absolute top-0 left-0 bg-[#f49f38] z-[1] w-full h-full rounded-lg ${
                saveIndex === index && show
                  ? "opacity-0 transition-all duration-500"
                  : "opacity-50 transition-all duration-500"
              }`}
            ></div>
            <img className="h-full w-full rounded-lg" src={data.img} alt="" />
          </div>
        ))}
      </div>
      <button className="bg-[#f49f38] text-white text-sm rounded-lg py-1 px-4 mt-4">
        Show More
      </button>
    </div>
  );
};

export default Gallery;
