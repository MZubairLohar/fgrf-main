"use client";
import { useState } from "react";
// import ModelCanvas from "@/components/3dModel/ModelCanvas";
import { FullPageLoader } from "@/components/3dModel/fullPageLoader";
import Hero from "@/components/newUi/home/Hero";
import OurDepartments from "@/components/newUi/home/OurDepartments";
import AchievementPage from "@/components/achievement/achievements";
import OurProject from "@/components/home/OurProject";
import Achievement from "@/components/newUi/home/Achievements";
import Together from "@/components/newUi/home/Together";
import Gallery from "@/components/newUi/home/Gallery";
import Appeals from "@/components/newUi/home/Appeals";
import DonationSlider from "@/components/home/donationSlider";
import NewsSection from "@/components/newUi/home/News";
import { AnimatePresence, motion } from "framer-motion";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";

export default function Home() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const [isModelLoading, setIsModelLoading] = useState(true);

  // const handleModelLoaded = () => {
  //   setIsModelLoading(false);
  // };
  setTimeout(() => {
    if (data) {
      setIsModelLoading(false);
    }
  }, 3000);
  return (
    <>
      {/* {isModelLoading && <FullPageLoader />}
      <div
        className={`relative ${isModelLoading ? "overflow-hidden h-[20vh]" : "overflow-auto"
          }`}
      >
        <div className="fixed top-[80%] right-[3%] z-50 flex flex-col items-center">
          <img
            src="/img/center-lg.png"
            className="w-10 animate-bounce"
            alt=""
          />
          <button className="bg-[#1eb1af] text-white text-sm px-2 py-1 rounded-lg">
            Donate Now
          </button>
        </div>
        <Hero />
        <Section2 />
        <div className="relative">
        <ModelCanvas onModelLoaded={handleModelLoaded} />
      </div> */}
      {/* <OurProject /> */}
      {/* <BackgroundCanvas /> */}
      {/*<ThreadsParticles />*}
        {/* <div className="gradiant-bg w-full h-screen z-[-3] fixed top-0 left-0"></div> */}
      {/* </div> */}

      {/* MyCode */}
      <AnimatePresence mode="wait" initial={false}>
        <div className="relative">
          {isModelLoading && <FullPageLoader />}
          {/* donation Modal */}

          <Hero />
          <OurDepartments />
          <Appeals />
          <Achievement />
          <Together />
          <Gallery />
          <NewsSection />
        </div>
      </AnimatePresence>
    </>
  );
}
