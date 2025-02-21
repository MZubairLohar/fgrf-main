"use client";
import Image from "next/image";
import { useState } from "react";

const Fundraisers = () => {
  const [showBlob, setShowBlob] = useState<boolean>(false);
  const [blobIndex, setBlobIndex] = useState<number>();
  const data = [
    {
      svg: "/img/svg1.svg",
      heading: "Free Phone and Email Support.",
      para: "Free Phone and Email Support.",
    },
    {
      svg: "/img/svg2.svg",
      heading: "No Long-Term Contracts.",
      para: "Free Phone and Email Support.",
    },
    {
      svg: "/img/svg3.svg",
      heading: "Modern, Easy-to-Customize Forms.",
      para: "Free Phone and Email Support.",
    },
    {
      svg: "/img/svg4.svg",
      heading: "Intuitive Giving Donors Will Love.",
      para: "Free Phone and Email Support.",
    },
    {
      svg: "/img/svg4.svg",
      heading: "Intuitive Giving Donors Will Love.",
      para: "Free Phone and Email Support.",
    },
  ];
  const handleBlob = (index: number) => {
    setBlobIndex(index);
    setShowBlob(true);
  };
  return (
    <div className="overflow-hidden relative max-w-[1200px] mx-auto">
      <div className="grid lg:grid-cols-7 grid-cols-1 h-auto py-10 items-center px-3 gap-x-2">
        <div className="lg:col-span-3 col-span-1 flex flex-col gap-y-10">
          <h2 className="text-[#394146] sm:text-3xl text-2xl font-bold text-center">
            Our Department
          </h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
            {data.map((data, index) => (
              <div
                className="col-span-1 flex flex-col items-center sm:gap-y-4 gap-y-2 leading-none"
                key={index}
                onMouseOver={() => handleBlob(index)}
                onMouseLeave={() => setShowBlob(false)}
              >
                <div className="w-14 relative cursor-pointer">
                  <img
                    src="/img/icon-blob-blue.svg"
                    className={`absolute top-0 z-[-1] ${blobIndex === index && showBlob
                        ? "opacity-70 transition-all duration-500"
                        : "opacity-0 transition-all duration-500"
                      }`}
                    alt=""
                  />
                  <img src={data.svg} className="w-full" alt="" />
                </div>
                <h1 className="sm:text-lg text-base text-center font-bold">
                  {data.heading}
                </h1>
                <p className="text-sm text-center">{data.para}</p>
              </div>
            ))}
          </div>
        </div>
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
            <img src="/img/icon-blob-orange.svg" className="w-full h-full" alt="" />
          </div>
          {/* <div className="blob-animation absolute top-0 right-0 left-0 bottom-0 w-full h-full z-[-2]">
            <img src="/img/outline.svg" className="w-full h-full" alt="" />
          </div> */}
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-white/60 z-[-1]"></div>
    </div>
  );
};

export default Fundraisers;
