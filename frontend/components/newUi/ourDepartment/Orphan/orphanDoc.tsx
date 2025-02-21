"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import SliderSectionOrphan from "./slider";
import AnimationTop from "../../home/AnimationTop";
import { useContentContext } from "../../contextApi/contentContext";

const OrphanDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Orphan" === title.content.sec
  );
  const text = foodBoxData[0]?.content?.text;
  return (
    <div className="px-4 xl:px-0 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8"></h2>

      <SliderSectionOrphan />
      <p className="capitalize text-center py-3 md:py-5 font-semibold text-gray-800 text-sm md:text-lg">
        {(text && text) ||
          `This initiative underscores FGRF commitment to nurturing and empowering
        orphaned youth, offering them a safe and nurturing environment where
        they can thrive. Through holistic care, education, and emotional
        support, FGRF aims to create a loving and stable home for these
        children, giving them the opportunity to build brighter futures. The
        Orphan House represents FGRF unwavering dedication to serving the
        community and making a positive impact on the lives of those in need.`}
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
    </div>
  );
};
export default OrphanDocs;
