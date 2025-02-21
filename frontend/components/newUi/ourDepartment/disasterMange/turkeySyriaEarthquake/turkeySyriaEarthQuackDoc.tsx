"use client";
import Image from "next/image";
import Link from "next/link";
import SliderSectionturkeySyriaEarthQuack from "./slider";
import AnimationTop from "@/components/newUi/home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";
const TurkeySyriaEarthQuackDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Turkey & Syria Earthquake" === title.content.sec
  );
  const text = foodBoxData[0]?.content?.text;
  return (
    <div className="pb-10 px-4 xl:px-0">
      <SliderSectionturkeySyriaEarthQuack />
      <p className="capitalize text-sm md:text-lg text-center py-3 md:py-5 font-semibold text-gray-900">
        {(text && text) ||
          `Our comprehensive assistance included cooked food, container houses,
        ration parcels, cash aid, and essential supplies for the needy. But our
        commitment didn't end there. FGRF made a promise to the orphans and
        widows affected by the disasters: to provide them with homes. Today,
        we're proud to announce that we've partnered with Turkey's official
        Disaster Management Department to construct 100 houses and 2 schools in
        the border areas of Turkey and Syria, providing shelter and education to
        those in need. And that's not all—FGRF has signed agreements with
        Turkish officials for the construction of over 200 additional houses and
        schools, furthering our mission to empower communities and rebuild
        lives. Join us in making a difference. Explore FGRF's efforts and learn
        how you can support our ongoing initiatives on our website.`}
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
    </div>
  );
};
export default TurkeySyriaEarthQuackDocs;
