"use client";
import Link from "next/link";
import SliderSectionZakat from "./slider";
import AnimatedVideoLeft from "../animations/videoAnimationLeft";
import AnimatedVideoRight from "../animations/videoAnimationRight";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";
const ZakatDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Zakat" === title.content.sec
  );
  const videos = foodBoxData[0]?.content?.video;
  const text = foodBoxData[0]?.content?.text;
  return (
    // new Code
    <div>
      <div className="py-10 md:py-16 px-5 ">
        <SliderSectionZakat />
        <h2 className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg py-8">
          {text}
        </h2>
        <h2 className="text-teal-500 font-bold text-xl md:text-2xl lg:text-3xl text-center pt-8 py-3">
          What is Zakat?
        </h2>
        <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg py-3">
          Zakat is one of the five pillars of Islam and it is an obligatory act.
          The meaning of Zakat is “to purify”. In essence, Zakat is purity or to
          purify. To purify our own wealth all Muslims are obliged to pay a
          portion of their wealth. Zakat is an obligation upon any Muslim who
          has reached puberty, is sane and has had more than the minimum
          required amount of wealth (Nisaab) for one year. Please use our Zakat
          Calculator below to work out your Zakat.
        </p>
        <h2 className="text-teal-500 font-bold text-xl md:text-2xl lg:text-3xl text-center pt-8 py-3">
          What is Nisaab?
        </h2>
        <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg py-3">
          87.48 grams of pure Gold One Tola is equal to 11 grams 665 milligrams.
          7.5 Tolas of Gold is approximately 87.48 grams 612.36 grams of pure
          Silver One Tola is equal to 11 grams 665 milligrams. 52.5 Tolas of
          silver is approximately 612.36 gram
        </p>
        <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center pt-8 py-3">
          Dawat-e-Islami is serving in over 82 departments worldwide. Please see
          below for an introduction to four of our Departments.
        </h2>
        <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center pt-8 py-3">
          What is Fitrana?
        </h2>
        <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg py-3">
          Fitrana, also known as Sadqa tul Fitr, is an obligatory act that all
          Muslim’s partake in during the Holy month of Ramadan. It purifies our
          fasts, helps at the time of death and protects us in the grave from
          punishment. Fitrana is given before Eid prayers begin at the end of
          Ramadan. (Min Fitrana Amount = 5 POUNDS)
        </p>
        <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg py-3">
          Your donation can be spent in any permissible, religious, reformative,
          spiritual and welfare cause, and, acts of kindness and goodness.
        </p>
        <div className="flex justify-center">
          <Link href={"/donation"}>
            <button className="relative shadow-2xl group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold  py-2 text-xl">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                <span className="relative group-hover:text-white">
                  Donate Now
                </span>
              </span>
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-10 pt-10 pb-8 items-center">
          <div className="md:w-3/4 ">
            <AnimatedVideoLeft>
              <video className="h-full w-full rounded-2xl" controls>
                <source
                  src={`${(videos && videos[0]) || "/Videonews/4.mp4"}`}
                  type="video/mp4"
                />
              </video>
            </AnimatedVideoLeft>
          </div>
          <div className="md:w-3/4 ">
            <AnimatedVideoRight>
              <video className="h-full w-full rounded-2xl" controls>
                <source
                  src={`${(videos && videos[1]) || "/Videonews/4.mp4"}`}
                  type="video/mp4"
                />
              </video>
            </AnimatedVideoRight>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href={"/donation"}>
            <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                <span className="relative group-hover:text-white">
                  Donate Now
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ZakatDocs;
