"use client";
import Image from "next/image";
import Link from "next/link";
import SliderSectionEyeCamps from "./slider";
import { motion, useAnimation } from "framer-motion";
import AnimationTop from "@/components/newUi/home/AnimationTop";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";
const EyecampsDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Eye Camps" === title.content.sec
  );
  const text = foodBoxData[0]?.content?.text;
  return (
    <div className="py-5 px-4 xl:px-0">
      <SliderSectionEyeCamps />

      <p className="capitalize text-sm md:text-lg text-center pt-5  py-3 font-semibold text-gray-900">
        {(text && text) ||
          ` FGRF has initiated various eye camps to provide essential services to
        communities in need. These camps offer free eye tests and medication,
        ensuring that individuals receive the necessary care without any
        financial burden. TThrough these initiatives, FGRF aims to tackle eye
        issues prevalent in rural communities and improve access to eye care
        services. By providing free-of-cost screenings and treatment, we strive
        to alleviate suffering and promote better eye health among those who
        need it most.`}
      </p>
      <div className="flex justify-center pb-3">
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
export default EyecampsDocs;
