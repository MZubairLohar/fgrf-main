"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import SliderSectionpalestinianBrotherSister from "./slider";
import AnimationTop from "@/components/newUi/home/AnimationTop";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";

const PalestinianBrotherSistersDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Pakistan Flood" === title.content.sec
  );
  const text = foodBoxData[0]?.content?.text;
  return (
    <div className="px-4 xl:px-0 ">
      <SliderSectionpalestinianBrotherSister />
      <p className="capitalize text-sm md:text-lg text-center py-3 md:py-5 font-semibold text-gray-900">
        {(text && text) ||
          ` With urgency and compassion, we provided over 100,000 cooked meals,
        along with container mattresses and blankets, to those in need.
        Additionally, we distributed thousands of food packs and ration boxes,
        ensuring that no one went hungry during this difficult time. Multiple
        aid containers were dispatched via Egypt, delivering essential supplies
        to affected communities. FGRF remains committed to standing by the
        people of Palestine, offering support and relief to help them overcome
        the challenges they face. Together, we strive to bring comfort and hope
        to those in need.`}
      </p>
      <div className="flex justify-center pb-8">
        <AnimationTop>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href={"/donation"}>
              <button className="relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 mt-3">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xl md:text-2xl">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                  <span className="relative group-hover:text-white">
                    Donate Now
                  </span>
                </span>
              </button>
            </Link>
          </motion.div>
        </AnimationTop>
      </div>

      {/* Second Video Container */}
      {/* <div className="flex flex-col items-center">
        <div className="w-3/4 ">
          <video className="h-full w-full rounded-2xl" controls>
            <source src="/Videonews/6.mp4" type="video/mp4" />
          </video>
          <div className="flex justify-center items-center py-8">
            <Link
              href={"/"}
              className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg"
            >
              DONATE NOW
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default PalestinianBrotherSistersDocs;
