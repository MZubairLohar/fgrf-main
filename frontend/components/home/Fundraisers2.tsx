"use client";
import { useState } from "react";

const Fundraisers2 = () => {
  const [showBlob, setShowBlob] = useState<boolean>(false);
  const [blobIndex, setBlobIndex] = useState<number>();
  const data = [
    {
      svg: "/img/svg1.svg",
      para: "Free Phone and Email Support.",
    },
    {
      svg: "/img/svg2.svg",
      para: "No Long-Term Contracts.",
    },
    {
      svg: "/img/svg3.svg",
      para: "Modern, Easy-to-Customize Forms.",
    },
    {
      svg: "/img/svg4.svg",
      para: "Intuitive Giving Donors Will Love.",
    },
  ];
  const handleBlob = (index: number) => {
    setBlobIndex(index);
    setShowBlob(true);
  };
  return (
    <div className="overflow-hidden relative">
      <div className="grid grid-cols-2 h-[135vh] items-center max-w-[1200px] mx-auto px-3">
        <div className="col-span-1 flex relative flex-col justify-between">
          <div
            className="absolute bottom-0 left-0 w-[400px] bg-center bg-no-repeat bg-cover py-14 px-6"
            style={{ backgroundImage: `url(/img/hexagon.svg)` }}
          >
            <div className="flex flex-col items-center gap-y-2">
              <img
                src="/img/ilyaas.jpeg"
                className="w-24 h-24 rounded-full"
                alt=""
              />
              <p className="text-center text-sm leading-relaxed">
                Qgiv is intuitive UI is clean and seamless, providing an easy
                portal when calling for donations. Qgiv has allowed our
                organization to better manage and understand our donor base,
                providing invaluable data to help drive our decision-making
                process.
              </p>
              <h2 className="text-center text-[#477d94] font-semibold">
                Ilyaas Qadri
              </h2>
              <h3 className="text-center text-[#477d94]">
                CEO of Dawat e Islami
              </h3>
              <h3 className="text-center text-[#477d94]">
                Minds Matter Chicago
              </h3>
            </div>
          </div>
          <div
            className="absolute top-0 -right-5 w-[400px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(/img/hexagon.svg)` }}
          >
            <img src="/img/oct.png" className="w-full" alt="" />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-y-10 pl-44">
          <div className="">
            <h2 className="text-[#394146] text-3xl font-light">
              Made for 2, Designed for Donors
            </h2>
          </div>
          <div className="font-light text-base tracking-wider">
            <p>
              You, your staff, and volunteers are making the world a better
              place—and that is no small task! Your donors needs are always
              changing, which means you need reliable, flexible fundraising
              software that makes your life easier.
            </p>
            <br />
            <p>
              Qgiv is platform makes it easy for you to offer a modern,
              personalized, and intuitive online giving experience for your
              donors—all while keeping costs low, raising more for your mission,
              and saving hours of time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {data.map((data, index) => (
              <div
                className="col-span-1 flex flex-col items-center gap-y-4 leading-none"
                key={index}
                onMouseOver={() => handleBlob(index)}
                onMouseLeave={() => setShowBlob(false)}
              >
                <div className="w-14 relative cursor-pointer">
                  <img
                    src="/img/icon-blob-blue.svg"
                    className={`absolute top-0 z-[-1] ${
                      blobIndex === index && showBlob
                        ? "opacity-40 transition-all duration-500"
                        : "opacity-0 transition-all duration-500"
                    }`}
                    alt=""
                  />
                  <img src={data.svg} className="w-full" alt="" />
                </div>
                <p className="text-lg text-center">{data.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="blob-animation absolute top-0 left-[-50%] w-full h-full">
        <img src="/img/purple-blob.svg" className="w-full h-full" alt="" />
      </div>
      <div className="blob-animation absolute top-0 left-[-49%] w-full z-[-2] h-full">
        <img src="/img/outline.svg" className="w-full h-full" alt="" />
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-white/60 z-[-1]"></div>
    </div>
  );
};

export default Fundraisers2;
