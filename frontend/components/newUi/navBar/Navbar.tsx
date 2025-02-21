"use client";
import { motion, useAnimation } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { BsStopwatch } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import { IoMail } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { LiaDonateSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import AnalogWatch from "./AnalogWatch";
import { useDonationContext } from "../contextApi/donationContext";
import { useContentContext } from "../contextApi/contentContext";
export default function Navbar() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const ourDepartmentList = data.filter(
    (title: any) =>
      "Our Department" === title.content.mainSec &&
      "Covid-19" !== title.content.sec &&
      "Pakistan Flood" !== title.content.sec &&
      "Morocco Earthquake" !== title.content.sec &&
      "Faizan Rehabilitation Center" !== title.content.sec &&
      "Madical Van" !== title.content.sec &&
      "Eye Camps" !== title.content.sec &&
      "Plantation" !== title.content.sec &&
      "Turkey & Syria Earthquake" !== title.content.sec &&
      "Palestine" !== title.content.sec &&
      "Madical Clinic" !== title.content.sec &&
      "Blood Donation" !== title.content.sec
  );
  console.log("ourDepartmentList--->", ourDepartmentList);
  const appealList = data.filter(
    (title: any) => "Appeals" === title.content.mainSec
  );
  const donationList = data.filter(
    (title: any) => "Donation" === title.content.mainSec
  );
  const [isHovered, setIsHovered] = useState(false);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const data = new Date();
    let gethour = Math.round(data.getHours());
    const mint = Math.round(data.getMinutes());
    const amPm = gethour >= 12 ? "PM" : "AM";
    if (gethour > 12) {
      gethour -= 12;
    }
    const formattedTime = `${days[data.getDay()]} At ${
      gethour < 10 ? ` 0${gethour}` : `${gethour} `
    }:${mint < 10 ? " 0" + mint : ` ${mint}`} ${amPm}`;
    return formattedTime;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Empty dependency array to run the effect only once on mount

  // my Code
  // const days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // let day;
  // let mint;
  // let gethour;
  // let amPm;
  // let data = new Date();
  // gethour = Math.round(data.getHours());
  // mint = Math.round(data.getMinutes());
  // amPm = "AM";
  // if (gethour >= 12) {
  //   amPm = "PM";
  // }
  // if (gethour > 12) {
  //   gethour -= 12;
  // } else {
  //   gethour = gethour;
  // }
  // day = days[data.getDay()];
  // setInterval(() => {
  //   data = data;
  //   gethour = data.getHours();
  //   mint = data.getMinutes();
  //   amPm = "AM";
  //   if (gethour >= 12) {
  //     amPm = "PM";
  //   }
  //   if (gethour > 12) {
  //     gethour -= 12;
  //   } else {
  //     gethour = gethour;
  //   }
  //   day = days[data.getDay()];
  //   console.log(`${day}, ${gethour}:${mint} ${amPm}`);
  // }, 1000);

  // hide and Show Machinasim
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [moveRight, setmoveRight] = useState(false);

  const resetFilter = { filter: "none" };

  const [toggel, setToggel] = useState<boolean>(false);
  const [logo, setLogo] = useState(false);

  const amountDonation = useDonationContext();
  const setAmountForDonation = amountDonation.setDonationAmountHandler;
  const modal = amountDonation.donationModal;
  const setModal = amountDonation.setDonationModalHandler;
  return (
    <>
      <div className="max-w-screen-2xl bg-white md:grid flex justify-between py-2 md:py-0  px-3 md:px-0  md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 mx-auto">
        <button
          onMouseMove={() => setLogo(true)}
          onMouseLeave={() => setLogo(false)}
          className="flex relative group overflow-hidden items-center bg-white justify-start md:justify-center  lg:w-full"
        >
          <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-80 group-hover:w-96 group-hover:-translate-y-40 ease"></span>

          <Link href="/" onClick={() => setToggel(false)}>
            <Image
              width={150}
              height={150}
              className="w-24 h-full relative  lg:w-32 lg:h-14 lg:block md:block cursor-pointer"
              src={!logo ? `/img/fgrf.png` : "/img/white-logo.png"}
              alt="tokenLauncher"
            />
          </Link>
        </button>

        {/* lg Navbar */}
        <div className="hidden md:col-span-4 lg:col-span-4 xl:col-span-5 md:flex flex-col bg-white">
          {/* containter-1 */}
          <div className="grid grid-col-1 md:grid-cols-5 lg:grid-cols-7">
            <div className="grid grid-cols-2 md:grid-cols-5 place-content-center place-items-center md:py-4  border-r border-black ">
              <div className="bg-black text-white  rounded-full w-5 h-5 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(256, 0, 0, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <CgFacebook className="w-4 h-4" />
                </motion.div>
              </div>
              <div className="bg-black text-white  rounded-full w-5 h-5 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(256, 0, 0, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <IoLogoInstagram className="w-4 h-4" />
                </motion.div>
              </div>
              <div className="bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(0, 0, 256, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaTwitter className="w-3 h-3" />
                </motion.div>
              </div>
              <div className="bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(0, 25, 256, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <IoLogoTiktok className="w-3 h-3" />
                </motion.div>
              </div>
              <div className="bg-black text-white w-5 h-5  rounded-full flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(0, 256, 0, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <svg
                    className="text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                      fill="white"
                    ></path>{" "}
                  </svg>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-5 md:col-span-3  md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 px-1 lg:px-3 place-items-center  place-content-center border-r border-black">
              <Link
                href={"/donation"}
                onClick={() => setModal(!modal)}
                className="relative group lg:w-full xl:w-auto overflow-hidden bg-sky-900 text-white px-2 xl:px-5 py-1 text-[8px] lg:text-[13px] xl:text-sm"
              >
                <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-14 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:w-96 group-hover:-translate-y-32 ease"></span>
                <span className="relative"> DONATE TO FUND</span>
              </Link>
              <div className="w-20 lg:w-32 xl:w-full  bg-[#ddd] shadow-inner  border-[#faf9f9] rounded-sm flex justify-center items-center">
                <span className="hover:text-light-blue px-1 lg:px-3 rounded-sm text-xs lg:text-base lg:font-semibold text-sky-700">
                  <strong>&#163;</strong>
                </span>
                <div className="py-1 bg-[#eee] shadow-inner  border-[#faf9f9] rounded-sm flex justify-around items-center">
                  <input
                    type="number"
                    id="small-input"
                    onChange={(e) => {
                      setAmountForDonation(e.target.value);
                    }}
                    placeholder="Amount"
                    className="block pl-2 w-14 lg:w-full font-semibold bg-transparent text-[10px] lg:text-xs outline-none focus:border-transparent focus:ring-0 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <select
                id="countries"
                className="bg-gray-200 py-1 px-1 lg:px-2 rounded-md w-[70px] lg:w-[110px] xl:w-36  text-black font-medium text-[10px] lg:text-xs block  outline-none"
                required
              >
                <option value="single">Single</option>
                <option value="monthly">Monthly</option>
                <option value="Others">Others</option>
              </select>
              <Link
                href={"/donation"}
                onClick={() => setModal(!modal)}
                className="relative group w-full text-center overflow-hidden bg-sky-900 text-white py-1 px-2 lg:px-3 text-[9px] lg:text-sm"
              >
                <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-14 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:w-96 group-hover:-translate-y-32 ease"></span>
                <span className="relative"> DONATE NOW</span>
              </Link>
            </div>
            <div className=" border-r border-black flex justify-center items-center">
              <div className="flex items-center justify-evenly ">
                {/* <BsStopwatch className="w-5 h-5 lg:w-3.5 lg:h-3.5" />
                 */}
                {/* <AnalogWatch></AnalogWatch> */}
                <p className="text-[10px] xl:text-[12px] pl-1 text-gray-700 font-semibold">
                  {/* {day} At {gethour < 10 ? `0${gethour}` : gethour}:
                  {mint < 10 ? "0" + mint : mint} {amPm} */}
                  {currentTime}
                </p>
              </div>

              {/* <motion.div
                whileHover={{
                  scale: 1.6,
                  x: -50,
                }}
                onHoverStart={() => setShow1(true)}
                onHoverEnd={() => setShow1(false)}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <div
                  className={`flex items-center  ${
                    show2 ? `hidden` : "hover:text-red-400 hover:font-bold"
                  }`}
                >
                  <IoMail className=" w-5 h-5 lg:w-3.5 lg:h-3.5" />
                  <p className="text-[14px] lg:text-[11px] pl-1 text-gray-700">
                    www.FGRF UK.com
                  </p>
                </div>
              </motion.div> */}
            </div>
          </div>
          {/* containter-2 */}
          <div className="grid grid-cols-3 border-b-0 border-t border-black">
            <div className="md:col-span-2 grid grid-cols-3 place-content-center place-items-center lg:grid-cols-3 border-b-0 border-r border-black">
              <div className="group relative cursor-pointer">
                <div className="pb-1">
                  <ScrollLink
                    to="ourDepartment" // This should match the ID of the element you want to scroll to
                    smooth={true}
                    duration={600}
                    offset={-100} // Adjust this offset based on your layout
                    className="pb-2 menu-hover lg:text-xl font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 lg:mx-4"
                  >
                    Our Departments
                  </ScrollLink>
                </div>
                <div className="py-3 border-b-2  border-teal-500 mt-1 text-sm invisible absolute z-50 flex w-40 lg:w-48 flex-col bg-gray-100 px-3 text-gray-800 shadow-xl group-hover:visible">
                  <Link
                    href={"/our-department/disaster"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Disaster Management
                  </Link>
                  <Link
                    href={"/our-department/health-care"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Health Care
                  </Link>
                  <Link
                    href={"/our-department/environment-department"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Environment Department
                  </Link>

                  {ourDepartmentList.map((i: any, index: any) => (
                    <>
                      {i.content.switch === "true" ? (
                        <Link
                          key={index}
                          href={i.content.url}
                          className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                        >
                          {i.content.sec}
                        </Link>
                      ) : null}
                    </>
                  ))}
                  {/* <Link
                    href={"/our-department/water-project"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Water Project
                  </Link>
                  <Link
                    href={"/our-department/environment-department"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Environment Department
                  </Link>
                  <Link
                    href={"/our-department/education"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Education & Skills
                  </Link>
                  <Link
                    href={"/our-department/orphan"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Orphan
                  </Link>
                  <Link
                    href={"/our-department/masjid"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Masjid
                  </Link> */}
                </div>
              </div>
              {/* <Link
                href={"/appeal"}
                className="lg:text-xl font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400"
              > */}
              <div className="group relative cursor-pointer">
                <div className="pb-1">
                  <Link
                    href={"/appeal"}
                    className="pb-2 menu-hover lg:text-xl font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 lg:mx-4"
                  >
                    Appeals
                  </Link>
                </div>
                <div className="-ml-2 py-3 border-b-2  border-teal-500 mt-1 text-sm invisible absolute z-50 flex w-40 lg:w-48 flex-col bg-gray-100 px-3 text-gray-800 shadow-xl group-hover:visible">
                  {appealList.map((i: any, index: any) => (
                    <>
                      {i.content.switch === "true" ? (
                        <Link
                          key={index}
                          href={i.content.url}
                          className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                        >
                          {i.content.sec}
                        </Link>
                      ) : null}
                    </>
                  ))}
                  {/* 
                  <Link
                    href={"/appeal/zakat"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Zakat
                  </Link>
                  <Link
                    href={"/appeal/sadaqah"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Sadaqah
                  </Link>
                  <Link
                    href={"/appeal/palestine-emergency"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Palestine Emergency
                  </Link>
                  <Link
                    href={"/appeal/winter-emergency"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Winter Emergency
                  </Link>
                  <Link
                    href={"/appeal/food-box"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Food Box
                  </Link>
                  <Link
                    href={"/appeal/hand-pump-project"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Hand Pump Projects
                  </Link>
                  <Link
                    href={"/appeal/water-well-project"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Water-well Projects
                  </Link>
                  <Link
                    href={"/appeal/orphan"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Orphan Kind
                  </Link>
                  <Link
                    href={"/appeal/masjid-project"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Masjid Project
                  </Link> */}
                </div>
              </div>
              <div className="group relative cursor-pointer">
                <div className="pb-1">
                  <Link
                    href={"/donation"}
                    className="pb-2 menu-hover lg:text-xl font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 lg:mx-4"
                  >
                    Donation
                  </Link>
                </div>
                <div className="-ml-2 border-b-2  border-teal-500 mt-1 text-sm invisible absolute z-50 flex w-40 lg:w-48 flex-col bg-gray-100 py-3 px-3 text-gray-800 shadow-xl group-hover:visible">
                  {donationList.map((i: any, index: any) => (
                    <>
                      {i.content.switch === "true" ? (
                        <Link
                          key={index}
                          href={i.content.url}
                          className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                        >
                          {i.content.sec}
                        </Link>
                      ) : null}
                    </>
                  ))}
                  {/* 
                  <Link
                    href={"/donation/zakat-donation"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Zakat
                  </Link>
                  <Link
                    href={"/donation/food-box-donation"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Food Box
                  </Link>
                  <Link
                    href={"/donation/winter-emergency-donation"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Winter Emergency
                  </Link>
                  <Link
                    href={"/donation/palestine-emergency-donation"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Palestine Emergency
                  </Link>
                  <Link
                    href={"/donation/orphan-donation"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Orphan
                  </Link>
                  <Link
                    href={"/donation/hand-pump-donation"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Hand Pump
                  </Link>
                  <Link
                    href={"/donation/water-well-donation"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Water-well
                  </Link>
                  <Link
                    href={"/donation/masjid-donation"}
                    className="my-1 block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 border-b border-gray-100  font-medium"
                  >
                    Masjid
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 place-content-center">
              <div className="md:col-span-2 flex justify-center items-center lg:px-3">
                {/* <h1
                  className={`
                  text-base font-bold relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 ${
                show3 ? "hidden" : ""
              }`}
                >
                  Call now
                </h1> */}
                <motion.div
                  whileHover={{
                    scale: 1.3,
                  }}
                  onHoverStart={() => setShow3(true)}
                  onHoverEnd={() => setShow3(false)}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <div
                    className={`flex items-center font-semibold text-gray-500 hover:text-red-400 hover:font-bold`}
                    //  ${
                    //   show3 ? "lg:ml-5" : ""
                    // }
                  >
                    <FiPhoneCall className="w-3.5 h-3.5 xl:w-4.5 xl:h-4.5" />
                    <span className="text-[12px] lg:text-[16px] xl:text-lg pl-1">
                      +44 7300 559919
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* yeha sy */}
              {/* <a
                href="#_"
                className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  Button Text
                </span>
              </a> */}

              {/* yeha tk */}

              <Link
                href={"/donation"}
                onClick={() => setModal(!modal)}
                className="bg-sky-800 py-1 text-white flex flex-col justify-center items-center lg:px-2.5 xl:px-3.5 lg:py-2 overflow-hidden relative group cursor-pointer font-medium"
              >
                {/* <motion.div
                  whileHover={{
                    scale: 1.4,
                    rotate: 50,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                > */}{" "}
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                {/* <LiaDonateSolid className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 relative transition duration-300 group-hover:text-red-600 ease" /> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-10 h-10"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="layer_1-2" data-name="layer 1">
                      <path
                        className="cls-1"
                        d="M24 48a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-46a22 22 0 1 0 22 22A22 22 0 0 0 24 2z"
                        fill="white"
                      />
                      <path
                        className="cls-1"
                        d="M24 40a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14 14 14 0 0 0-14-14zM4 23h2v2H4zM42 23h2v2h-2zM33 7h2v2h-2z"
                        fill="white"
                      />
                      <path
                        className="cls-1"
                        d="M23 4h2v2h-2zM23 42h2v2h-2zM13 7h2v2h-2zM33 39h2v2h-2zM13 39h2v2h-2zM6 14h2v2H6zM6 32h2v2H6zM40 14h2v2h-2zM40 32h2v2h-2zM21 32h-2V20a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0z"
                        fill="white"
                      />
                      <path
                        className="cls-1"
                        d="M17 31h14v2H17zM17 25h8v2h-8z"
                        fill="white"
                      />
                    </g>
                  </g>
                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 relative transition duration-300 group-hover:text-red-600 ease"
                >
                  <path
                    d="M32 1a31 31 0 1 0 31 31A31.036 31.036 0 0 0 32 1zm0 58a27 27 0 1 1 27-27 27.03 27.03 0 0 1-27 27z"
                    fill="white"
                  />
                  <path
                    d="M32 7a25 25 0 1 0 25 25A25.028 25.028 0 0 0 32 7zm11.891 35.054A5.4 5.4 0 0 1 39.045 45h-1.007a13.438 13.438 0 0 1-4.938-.934 11.6 11.6 0 0 0-7.323-.368l-4.507 1.265a1 1 0 0 1-.844-1.782A14.933 14.933 0 0 0 26.661 33H24a1 1 0 0 1 0-2h2.8a14.632 14.632 0 0 0-.286-2.922l-.067-.328a7.208 7.208 0 0 1 1.493-6.02A7.44 7.44 0 0 1 33.729 19h.182a7.578 7.578 0 0 1 7.645 7.49 1 1 0 0 1-2 0A5.576 5.576 0 0 0 33.911 21h-.182a5.449 5.449 0 0 0-4.24 2 5.211 5.211 0 0 0-1.083 4.353l.067.328A16.6 16.6 0 0 1 28.8 31H32a1 1 0 0 1 0 2h-3.319a16.873 16.873 0 0 1-3.9 8.9l.457-.129a13.6 13.6 0 0 1 8.593.433 11.481 11.481 0 0 0 4.208.8h1.007a3.411 3.411 0 0 0 3.064-1.854 1 1 0 0 1 1.782.908z"
                    fill="white"
                  />
                </svg>
                <span className="relative text-[9px] lg:text-[10px] xl:text-xs xl:font-semibold text-white text-center group-hover:text-red-600">
                  Donate Now
                </span>
                {/* </motion.div> */}
              </Link>
            </div>
          </div>
        </div>
        <button
          onClick={() => setToggel(!toggel)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  text-gray-400 border border-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-400"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      {/* handle Toggel Container */}
      {toggel && (
        <div className="absolute top-12 z-50 w-full">
          <ul className="flex flex-col p-4 mt-4 font-medium border border-green-200 rounded-lg bg-sky-800">
            <li>
              <span
                className="block pb-2 px-3 text-white font-normal text-center"
                aria-current="page"
              >
                {currentTime}
              </span>
            </li>
            <li>
              <Link
                onClick={() => setToggel(!toggel)}
                href="/"
                className="block py-2 px-3 text-white font-semibold "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggel(!toggel)}
                href="/our-department/disaster"
                className="block py-2 px-3 text-white font-semibold "
                aria-current="page"
              >
                Our Departments
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggel(!toggel)}
                href="/appeal"
                className="block py-2 px-3 text-white font-semibold "
              >
                Our Appeals
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggel(!toggel)}
                href="/donation"
                className="block py-2 px-3 text-white font-semibold "
              >
                Donation
              </Link>
            </li>
            <li>
              <hr className="my-2 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-green-200 to-transparent opacity-25" />
              <div className="flex justify-between items-center py-2 px-3">
                <h1 className="text-white font-semibold ">Call now</h1>
                <div className="flex justify-start items-center">
                  <FiPhoneCall className="w-3.5 h-3.5 text-gray-200" />
                  <span className="text-md pl-1 text-gray-300">
                    +44 7300 559919
                  </span>
                </div>
              </div>
            </li>
            <li className="flex justify-start py-2 px-2">
              <span className=" text-white p-1 px-2">DONATE TO FUND</span>
            </li>
            <li className="flex justify-between gap-4 py-2 px-3">
              <select
                id=""
                className="bg-gray-200  p-1 rounded-lg font-semibold text-xs w-full  outline-none"
                required
              >
                <option value="single">Single</option>
                <option value="monthly">Monthly</option>
              </select>
              <div className="w-full bg-gray-200  shadow-inner  border-[#faf9f9] rounded-md flex justify-center items-center">
                <span className="px-2 rounded-md text-sm font-semibold">
                  <strong>&#163;</strong>
                </span>
                <div className="py-1 bg-gray-200 shadow-inner  border-[#faf9f9] rounded-md flex justify-around items-center">
                  <input
                    type="number"
                    id="small-input"
                    onChange={(e) => {
                      setAmountForDonation(e.target.value);
                    }}
                    placeholder="Amount"
                    className="block w-full bg-gray-200 font-semibold  sm:text-xs outline-none focus:border-transparent focus:ring-0 focus:outline-none"
                    required
                  />
                </div>
                {/* </div> */}
              </div>
            </li>
            <li className="py-4 px-3 ">
              <Link href={"/donation"} onClick={() => setToggel(false)}>
                <button className="cursor-pointer text-white border p-2 px-2 rounded-lg w-full">
                  DONATE NOW
                </button>
              </Link>
            </li>
            <hr className="my-4 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-green-200 to-transparent opacity-25" />

            <li className="grid grid-cols-5 place-content-center py-2 place-items-center px-10">
              <div className="bg-gray-100 text-black  rounded-full w-8 h-8 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    filter: "drop-shadow(0px 0px 10px rgba(256, 0, 0, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <CgFacebook className="w-5 h-5" />
                </motion.div>
              </div>
              <div className="bg-gray-100 text-black  rounded-full w-8 h-8 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(256, 0, 0, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <IoLogoInstagram className="w-5 h-5" />
                </motion.div>
              </div>
              <div className="bg-gray-100 text-black rounded-full w-8 h-8 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(0, 0, 256, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaTwitter className="w-4 h-4" />
                </motion.div>
              </div>
              <div className="bg-gray-100 text-black rounded-full w-8 h-8 flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(0, 25, 256, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <IoLogoTiktok className="w-4 h-4" />
                </motion.div>
              </div>
              <div className="bg-gray-100 text-black w-8 h-8  rounded-full flex justify-center items-center">
                <motion.div
                  whileHover={{
                    scale: 1.6,
                    // filter: "brightness(1.8)",
                    // rotate: 50,
                    filter: "drop-shadow(0px 0px 10px rgba(0, 256, 0, 0.9))",
                  }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  style={isHovered ? resetFilter : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <svg
                    className="text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                      fill="black"
                    ></path>{" "}
                  </svg>
                </motion.div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
