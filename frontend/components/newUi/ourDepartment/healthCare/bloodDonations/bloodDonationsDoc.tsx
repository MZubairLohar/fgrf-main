"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import SliderSectionBloodDonations from "./slider";
import AnimationTop from "@/components/newUi/home/AnimationTop";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";

const BloodDonationsDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Blood Donation" === title.content.sec
  );
  const text = foodBoxData[0]?.content?.text;
  return (
    <div className="py-5 px-4 xl:px-0">
      <SliderSectionBloodDonations />

      <p className="capitalize text-sm md:text-lg text-center pt-5  py-3 font-semibold text-gray-900">
        {(text && text) ||
          `FGRF took proactive steps to support this vulnerable community.
        Understanding the critical need for blood donations, we appealed to our
        followers to donate blood, urging them to make a difference in the lives
        of thalassemia patients.Thanks to the generosity of our supporters and a
        collaborative effort with Dawat-e-Islami and various health departments,
        FGRF has successfully provided over 65,000 blood bags to thalassemia
        patients in need. This initiative underscores our commitment to serving
        those affected by thalassemia and ensuring they have access to
        life-saving blood transfusions, especially during challenging times like
        the COVID-19 pandemic. FGRF remains dedicated to supporting thalassemia
        patients and will continue to work tirelessly to provide them with the
        care and resources they require to lead healthy and fulfilling lives.`}
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
export default BloodDonationsDocs;
