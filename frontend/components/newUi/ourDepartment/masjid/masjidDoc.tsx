"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import SliderSectionOrphan from "./slider";
import SliderSectionMasjid from "./slider";
import AnimationTop from "../../home/AnimationTop";
import { useContentContext } from "../../contextApi/contentContext";

const MasjidDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Masjid" === title.content.sec
  );
  const text = foodBoxData[0]?.content?.text;
  return (
    <div className="px-4 xl:px-0 ">
      <SliderSectionMasjid />
      <p className="capitalize text-center py-3 md:py-5 font-semibold text-gray-900 text-sm md:text-lg">
        {(text && text) ||
          `Your contribution will help create sacred spaces for worship and
        education, providing spiritual guidance and knowledge. Together, we can
        make a lasting impact on the lives of countless individuals and uphold
        the values of unity, faith, and compassion. Join us in this noble
        endeavor and leave a legacy of faith and generosity for generations to
        come.`}
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
export default MasjidDocs;
