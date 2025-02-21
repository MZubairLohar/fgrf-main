"use client";
import Link from "next/link";
import SliderSectionPalestine from "./slider";
import AnimatedVideoLeft from "../animations/videoAnimationLeft";
import AnimatedVideoRight from "../animations/videoAnimationRight";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";
const PalestineDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Palestine Emergency" === title.content.sec
  );
  const videos = foodBoxData[0]?.content?.video;
  const text = foodBoxData[0]?.content?.text;
  return (
    // new Code
    <div>
      <div className="py-10 md:py-16 px-5 ">
        <SliderSectionPalestine />

        <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg pt-8 py-3">
          {(text && text) ||
            `The violence in Gaza has claimed over 20,000 lives, leaving thousands
          injured, according to the Palestinian Health Ministry - Inna Lillahi
          Wa Inna Illahi Rajioon. With electricity, water, food, and medical
          supplies all obstructed, the people of Palestine are relying on your
          generosity now more than ever. Stand in solidarity with Palestine and
          help save lives during this critical time. Please keep the people of
          Palestine in your duas - Jazak’Allah Khair.`}
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
                  src={(videos && videos[0]) || "/Videonews/4.mp4"}
                  type="video/mp4"
                />
              </video>
            </AnimatedVideoLeft>
          </div>
          <div className="md:w-3/4 ">
            <AnimatedVideoRight>
              <video className="h-full w-full rounded-2xl" controls>
                <source
                  src={(videos && videos[1]) || "/Videonews/4.mp4"}
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

export default PalestineDocs;
