"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import StartSec from "./Start";
import DonationSec from "./donationForm";
interface DonationProps {
  image: string;
  title: string;
  desc: string;
}

export const DonationSectionPage: React.FC<DonationProps> = ({
  image,
  title,
  desc,
}) => {
  const [donationTitleArray, setDonationTitleArray] = useState<any[]>();
  const [donationDollarArray, setDonationDollarArray] = useState<any[]>([]);

  const [monthly, setMonthly] = useState(false);
  const titleDonate = donationDollarArray[0];
  const dollarDonate = donationDollarArray[1];

  const monthlyHandler = (data: any[]) => {
    console.log(data);
    if (monthly) {
      setMonthly(false);
    } else {
      setMonthly(true);
    }
    setDonationDollarArray(data);
  };

  return (
    <section
      className={`relative ${title === "Zakat Donation" ? "bg-sky-800" : ""} `}
    >
      <div className="max-w-5xl mx-auto z-10 relative pb-40">
        {/* container-01 */}
        {/* <div className="flex h-40 justify-center ml-10 md:ml-40">
          <div className="w-40 md:w-60 relative flex items-center">
            <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
              <span className="cursor-pointer relative group overflow-hidden border-2 group-hover:border-4  group-hover:border-gray-100 border-[#19afaf] p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500">
                <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
                <span className="relative text-gray-500 group-hover:text-white  ">
                  1
                </span>
              </span>
              <span
                className={`text-sm md:text-base ${
                  title === "zakat" ? "text-gray-200" : "text-gray-500"
                }`}
              >
                Start
              </span>
            </div>
            <span className={`bg-gray-100 h-[6px] w-full`}></span>
          </div>
          <div className="w-40 md:w-60 relative flex items-center">
            <span className="relative bg-gray-100 h-[6px] w-full"></span>
            <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
              <span className="cursor-pointer relative group overflow-hidden border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500">
                <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
                <span className="relative text-gray-500 group-hover:text-white">
                  2
                </span>
              </span>
              <span
                className={`text-sm md:text-base ${
                  title === "zakat" ? "text-gray-200" : "text-gray-500"
                }`}
              >
                Donation
              </span>
            </div>
          </div>
          <div className="w-40 md:w-60 relative flex items-center">
            <span className="relative bg-gray-100 h-[6px] w-full"></span>
            <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
              <span className="cursor-pointer relative group overflow-hidden border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500">
                <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
                <span className="relative text-gray-500 group-hover:text-white">
                  3
                </span>
              </span>
              <span
                className={`text-sm md:text-base ${
                  title === "zakat" ? "text-gray-200" : "text-gray-500"
                }`}
              >
                Details
              </span>
            </div>
          </div>
          <div className="w-40 md:w-60 relative flex items-center">
            <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
              <span className="cursor-pointer relative group overflow-hidden border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 ">
                <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
                <span className="relative text-gray-500 group-hover:text-white">
                  4
                </span>
              </span>
              <span
                className={`text-sm md:text-base ${
                  title === "zakat" ? "text-gray-200" : "text-gray-500"
                }`}
              >
                Payment
              </span>
            </div>
          </div>
        </div> */}
        <div className="">
          <StartSec
            monthlyHandler={monthlyHandler}
            image={image}
            title={title}
            desc={desc}
          />
        </div>
      </div>
      {title === "Zakat Donation" && (
        <div
          className="absolute animate-pulse opacity-30 maskAnimation bottom-0 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover "
          style={{ backgroundImage: `url(/img/mask1.svg)` }}
        ></div>
      )}
      {title === "Zakat Donation" && (
        <div
          className="absolute  animate-pulse opacity-40 maskAnimation2 -bottom-10 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover "
          style={{ backgroundImage: `url(/img/mask2.svg)` }}
        ></div>
      )}
      {title === "Zakat Donation" && (
        <div
          className="absolute animate-pulse opacity-5 -bottom-10 right-0 w-full h-[400px] bg-no-repeat bg-center bg-cover "
          style={{ backgroundImage: `url(/img/mask3.svg)` }}
        ></div>
      )}
      {title === "Zakat Donation" && (
        <div className="w-full absolute top-0 right-0">
          <img src="/img/new-img/map.png" className="w-full h-full" alt="" />
        </div>
      )}
    </section>
  );
};
