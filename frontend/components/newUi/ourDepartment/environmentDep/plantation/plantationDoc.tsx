"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import SliderSectionPlantation from "./slider";
import AnimationTop from "@/components/newUi/home/AnimationTop";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";

const PlantationDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Plantation" === title.content.sec
  );
  const text = foodBoxData[0]?.content?.text;
  return (
    <div className="px-4 xl:px-0">
      <SliderSectionPlantation />

      <p className="capitalize text-sm md:text-lg text-center pt-8 py-3 font-semibold text-gray-900">
        {(text && text) ||
          `This effort isn't just about planting trees; it's about caring for our
        planet. With careful planning and community involvement, FGRF is making
        a difference by addressing deforestation and promoting a greener Earth.
        Every tree planted contributes to cleaner air, more biodiversity, and
        stronger resilience to climate change. FGRF is committed to creating a
        healthier, more sustainable world for everyone.`}
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
export default PlantationDocs;
