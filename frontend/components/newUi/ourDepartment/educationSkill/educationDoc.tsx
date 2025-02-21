"use client";
import Image from "next/image";
import Link from "next/link";
import SliderSectionHealth from "./slider";
import AnimationTop from "../../home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import AnimatedComponentLeft from "../../home/galleryAnimation/AnimationLeft";
import AnimatedComponentRight from "../../home/galleryAnimation/AnimationRight";
import { useContentContext } from "../../contextApi/contentContext";
const EducationDocs = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Education & Skills" === title.content.sec
  );
  const text = foodBoxData[0]?.content?.text;
  return (
    <div className="px-4  xl:px-0">
      <SliderSectionHealth />
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        SEP Language Programmes
      </h2>
      <AnimatedComponentLeft>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (1).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentLeft>
      <p className="capitalize text-center  font-semibold text-gray-900 text-sm md:text-lg ">
        {(text && text) ||
          `SEP is offering different language programmes, i.e., Arabic, English,
        Urdu, French, Russian and Chinese, Thousands of students are improving
        their communication skills with us.`}
      </p>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        Training – Overseas
      </h2>
      <AnimatedComponentRight>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (2).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentRight>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        SEP is offering Arabic and English language programmes for overseas
        students. They are getting trained to be Muballigheen of Dawat-e-Islami
        to work overseas.
      </p>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        O & A Level Training Programme
      </h2>
      <AnimatedComponentLeft>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (3).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentLeft>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        SEP is now offering a teachers training programme for Islamic scholars
        of Jamia-tul-Madinah. After attending the training, the participants
        will be able to teach Islamiyat in O and A Level schools.
      </p>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        IT Foundation Programme
      </h2>
      <AnimatedComponentRight>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (4).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentRight>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        SEP is offering IT Foundation for new learners. The course aims at
        equipping the students with all the necessary skills and competencies
        they require to start their journey in IT industry.
      </p>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        IT Programmes
      </h2>
      <AnimatedComponentLeft>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (5).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentLeft>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:gap-16">
          <div>
            <h2 className="text-teal-500 font-semibold ">Web Development</h2>
            <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg">
              Front-End
            </li>
            <li className="list-disc font-semibold text-gray-900 text-sm md:text-lg">
              Back-End
            </li>
          </div>
          <div>
            <h2 className="text-teal-500 font-semibold ">Graphic Designing</h2>
            <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg">
              Adobe Photoshop
            </li>
            <li className="list-disc   font-semibold text-gray-900 text-sm md:text-lg">
              Adobe Illustrator
            </li>
          </div>
          <div>
            <h2 className="text-teal-500 font-semibold">UI/UX Designing</h2>
            <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg">
              Figma
            </li>
            <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg">
              Adobe XD
            </li>
          </div>
          <div>
            <h2 className="text-teal-500 font-semibold">Digital Marketing</h2>
            <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg">
              SEO
            </li>
            <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg">
              Social Media Marketing
            </li>
          </div>
        </div>
      </div>

      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        Skills Enhancement Programme (SEP) Workshops
      </h2>
      <AnimatedComponentRight>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (6).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentRight>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        Some glimpses of our recent workshop where students learned the scope of
        cyber security, digital marketing, UI UX design and IT foundation, etc.
      </p>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        SEP Certifications
      </h2>
      <AnimatedComponentLeft>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (7).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentLeft>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        After successfully completing our programmes and workshops, students
        receive their certificate of completion and appreciation.
      </p>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        SEP Success STORIES
      </h2>
      <AnimatedComponentRight>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (8).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentRight>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        SEP: New Trainers
      </h2>
      <AnimatedComponentLeft>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (9).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentLeft>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        SEP has been working to produce its own English trainers.  Some students
        of SEP have become English trainers. They are all Islamic scholars from
        Jamia-tul-Madinah.
      </p>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        SEP Students: Working overseas
      </h2>
      <AnimatedComponentRight>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (10).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentRight>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        Some of SEP students are working in different countries, i.e., UAE,
        Oman, Australia, etc. Not only are they doing their jobs overseas, they
        are also spreading the message of Dawat-e-Islami.
      </p>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        SEP Students: Admin officers
      </h2>
      <AnimatedComponentLeft>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (11).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentLeft>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        Some of SEP students are now working at SEP branches as Admin Officers.
        They are representing SEP very well.
      </p>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        SEP Students
      </h2>
      <AnimatedComponentRight>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (12).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentRight>
      <h2 className="text-teal-500 font-bold text-lg md:text-2xl text-center py-8">
        Working in different departments of Dawat-e-Islami
      </h2>
      <AnimatedComponentLeft>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (13).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentLeft>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        Some of SEP students are working for different departments of
        Dawat-e-Islami such as Faizan Online Academy (FOA), Madani Channel
        English, etc.
      </p>
      <h2 className="text-teal-500 font-bold text-lg md:text-2xl text-center py-8">
        SEP Student: Selected for Jamia in Mauritius
      </h2>
      <AnimatedComponentRight>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (13).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentRight>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        Ibrahim Anwar, a teacher in Jamia-tul-Madinah, Bahar-e-Madinah, student
        of SEP has been selected teach Dars-e-Nizami in English in Mauritius.
      </p>
      <h2 className="text-teal-500 font-bold text-lg md:text-2xl text-center py-8">
        SEP Student: Selected at Madani Channel English
      </h2>
      <AnimatedComponentLeft>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (14).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentLeft>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        Muti-ur-Rasool, a student of SEP level V has been selected as an English
        Muballigh at Madani Channel English.
      </p>
      <h2 className="text-teal-500 font-bold text-lg md:text-2xl text-center py-8">
        SEP Students: Teachers at FOA
      </h2>
      <AnimatedComponentRight>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (15).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentRight>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        Some of SEP students are now teaching Quran in English. They have passed
        English tests of FOA and are now getting the allowances.
      </p>
      <h2 className="text-teal-500 font-bold text-lg md:text-2xl text-center py-8">
        SEP MoU with SDC
      </h2>
      <AnimatedComponentLeft>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (16).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentLeft>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        The Skills Enhancement Programme (SEP) and the Skill Development Council
        (SDC) have formalized their collaboration through the signing of a
        Memorandum of Understanding (MOU).
      </p>
      <h2 className="text-teal-500 font-bold text-lg md:text-2xl text-center py-8">
        Future Ventures
      </h2>
      <h2 className="text-teal-500 font-bold text-lg md:text-2xl text-center py-8">
        Skills Enhancement Programme (SEP) Online Department
      </h2>
      <AnimatedComponentRight>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (17).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentRight>
      <h2 className="text-teal-500 font-bold text-lg md:text-2xl text-center py-8">
        SEP Online
      </h2>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        SEP will start offering online language programmes by Feb 2024.
      </p>

      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        SEP and KMB Affiliation
      </h2>
      <AnimatedComponentLeft>
        <div className="py-5">
          <Image
            src={"/ourDepartment/educationSkills/education (18).jpg"}
            alt="about image"
            width={2000}
            height={2000}
            className="h-[200px] md:h-[400px] lg:h-[580px] w-full mx-auto"
          />
        </div>
      </AnimatedComponentLeft>
      <h2 className="text-teal-500 font-bold text-lg md:text-2xl text-center py-8">
        SEP Expansion
      </h2>
      <p className="capitalize text-center font-semibold text-gray-900 text-sm md:text-lg ">
        SEP is now affiliated with Kanzul Madaris Board. In a joint venture, SEP
        is starting 100+ branches in different Jamia-tul-Madinah across
        Pakistan. More than 5000 students will be studying English, Arabic and
        IT programmes in the first phase of this venture
      </p>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        Future Programmes
      </h2>
      <div className="flex justify-center">
        <ul className="grid grid-col-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 ">
          <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg">
            Video Editing
          </li>
          <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg">
            3d Animations
          </li>
          <li className="list-disc font-semibold text-gray-900 text-sm md:text-lg">
            Cybersecurity
          </li>
          <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg ">
            Cloud Computing
          </li>
          <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg ">
            CMS Development
          </li>
          <li className="list-disc  font-semibold text-gray-900 text-sm md:text-lg ">
            App Development
          </li>
        </ul>
      </div>

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
export default EducationDocs;
