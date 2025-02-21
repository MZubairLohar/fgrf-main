"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import AnimationBottom from "@/components/newUi/home/AnimationBtm";
import AnimationTop from "@/components/newUi/home/AnimationTop";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";
export default function DonationSectionPlantation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Plantation" === title.content.sec
  );
  const videos = foodBoxData[0]?.content?.video;
  const cardArray = [
    { amount: "25", title: "Food box" },
    { amount: "100", title: "clean drinking & Food Box" },
    { amount: "200", title: "Medical aid" },
    { amount: "300", title: "tents house" },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 md:px-4 xl:px-0">
      <div className="">
        <h2 className="text-center text-xl md:text-3xl lg:text-4xl text-teal-500 font-bold pb-4 md:py-6">
          PLANT A SUPLING, GROW A TREE
        </h2>
        <AnimationTop>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cardArray.map((data, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.2,
                  zIndex: 50,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="rounded-xl lg:h-48 bg-white relative group overflow-hidden">
                  <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:w-96 group-hover:-translate-y-40 ease"></span>

                  <div className="bg-[#19afaf] relative group overflow-hidden">
                    <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-[#fff] top-1/2 group-hover:h-80 group-hover:w-96 group-hover:-translate-y-40 ease"></span>

                    <h2 className="relative group-hover:animate-bounce md:text-2xl lg:text-3xl group-hover:text-[#19afaf] rounded-t-xl font-bold text-white  text-center py-1">
                      £{"   "} {data.amount}
                    </h2>
                  </div>
                  <div className="flex flex-col justify-between gap-4 py-4 px-4">
                    {data.title !== "clean drinking & Food Box" ? (
                      <h2 className="group-hover:text-white relative md:text-2xl lg:text-3xl font-extrabold text-gray-500 text-center py-3">
                        {data.title}
                      </h2>
                    ) : (
                      <h2 className="group-hover:text-white relative text-sm md:text-lg lg:text-xl font-extrabold text-gray-500 text-center">
                        {data.title}
                      </h2>
                    )}
                    <Link
                      href={"/donation"}
                      className="bg-[#19afaf] text-xs relative group overflow-hidden uppercase text-center font-semibold group-hover:text-[#19afaf] text-white py-1 md:text-sm lg:text-base lg:py-2 lg:px-5 rounded-full "
                    >
                      <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-[#fff] top-1/2 group-hover:h-80 group-hover:w-96 group-hover:-translate-y-40 ease"></span>
                      <span className="relative "> Donate now</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimationTop>
        <h2 className="text-center text-xl  md:text-3xl text-teal-500 font-bold pt-5 md:py-6">
          FGRF&#39;s Plantation Department is a leader in environmental
          conservation, having planted millions of trees.
        </h2>
        <AnimationBottom>
          <div className="border-4 border-sky-600 rounded-xl h-[250px] md:h-[450px] lg:h-[600px] w-full mx-auto my-8">
            <video className="h-full w-full rounded-lg object-cover" controls>
              <source
                src={`${
                  (videos && videos) ||
                  "/ourDepartment/EnvironmentDepartment/Environment.mp4"
                }`}
                type="video/mp4"
              />
            </video>
          </div>
        </AnimationBottom>
      </div>
    </div>
  );
}
