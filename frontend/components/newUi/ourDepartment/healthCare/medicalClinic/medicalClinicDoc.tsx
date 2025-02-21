"use client";
import Image from "next/image";
import Link from "next/link";
import SliderSectionMedicalClinic from "./slider";
import AnimationTop from "@/components/newUi/home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";
const MedicalClinicDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Madical Clinic" === title.content.sec
  );
  const text = foodBoxData[0]?.content?.text;
  return (
    <div className="py-5 px-4 xl:px-0 ">
      <SliderSectionMedicalClinic />
      <p className="capitalize text-sm md:text-lg text-center pt-5  py-3 font-semibold text-gray-900">
        {(text && text) ||
          `keeping costs low to accommodate the country's inflationary
        challenges. With a mission to make healthcare accessible to all, FGRF
        aims to establish 250+ healthcare centers and 14,000 clinics across
        Pakistan within the next five years. Stay tuned for updates as we
        continue our efforts to provide affordable and quality healthcare to
        communities in need.`}
      </p>

      <div className="flex justify-center pb-5">
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
export default MedicalClinicDocs;
