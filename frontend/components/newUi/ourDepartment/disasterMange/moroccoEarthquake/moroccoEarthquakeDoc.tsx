"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import SliderSectionDisaster from "./slider";
import SliderSectionMoroccoEarthquake from "./slider";
import AnimationTop from "@/components/newUi/home/AnimationTop";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";

const MoroccoEarthquakeDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Morocco Earthquake" === title.content.sec
  );
  const text = foodBoxData[0]?.content?.text;
  return (
    <div className="py-10 px-4 xl:px-0 ">
      <SliderSectionMoroccoEarthquake />
      <p className="capitalize text-sm md:text-lg text-center py-3 md:py-5 font-semibold text-gray-900">
        {(text && text) ||
          ` Our teams provided first aid, essential supplies, and cooked food ration
        bags to alleviate immediate needs. Recognizing the challenges faced
        during the winter months, FGRF took proactive steps to address the issue
        of gas shortages. We pledged to distribute over 20,000 gas cylinders to
        ensure families have access to heating and cooking facilities during the
        cold season. Our dedicated team remained on the ground, working
        tirelessly alongside the affected communities. In addition to gas
        cylinders, we distributed more than 5,000 ration bags, further
        supporting families in their time of need. Join us in our efforts to
        make a meaningful difference in the lives of those impacted by the
        earthquake in Morocco. Together, we can provide comfort, support, and
        hope for a brighter tomorrow.`}
      </p>
      <div className="flex justify-center">
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
export default MoroccoEarthquakeDocs;
