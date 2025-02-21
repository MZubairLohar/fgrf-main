"use client";
import { GrFacebook } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useDonationContext } from "../contextApi/donationContext";
const Footer = () => {
  const amountDonation = useDonationContext();
  const titleDonationDollar = amountDonation.donationTitle;
  return (
    <section className="bg-white">
      <div className="lg:max-w-[1000px] mx-auto px-3 pb-3">
        <div className="bg-[#19afaf] w-full h-1 relative rounded-full"></div>
        {/* <div className="lg:flex lg:flex-row flex flex-col lg:items-start lg:gap-y-0 gap-y-3 lg:justify-between lg:py-10 py-6">
          <div className="lg:flex lg:flex-row flex flex-col items-center gap-x-3 lg:items-center">
            <img
              src="https://fgrf.org/web_assets/images/fgrf/newLogo.png"
              className="w-16"
              alt=""
            />
            <p className="text-sm lg:text-left text-center">
              Faizan Global Relief Foundation UK 24 WITTON <br />
              ROAD,BIRMINGHAM B6 6NX, Birmingham, United Kingdom
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-start mx-auto lg:gap-y-0 gap-y-4 md:my-0 my-4 gap-x-6 text-sm">
            <div className="bg-[#148698] flex items-center px-2 gap-3 py-1">
              <div>
                <div className="rounded-full bg-white border p-3">
                  <img
                    src="/img/icons/drop.png"
                    alt="Drop"
                    className="h-8 w-8"
                  />
                </div>
              </div>
              <div className="md:text-2xl text-lg text-white uppercase font-bold">
                <span className="font-extralight">Donate a</span>
                <br /> water well
              </div>
              <div className="bg-white p-2 text-yellow-500 md:text-xl text-base font-[900] rounded-md">
                <p className="flex items-center">
                  &#163; 300{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="md:w-5 md:h-5 w-4 h-4 text-yellow-500 font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="flex lg:justify-normal justify-center gap-x-2 text-lg text-[#1eb1af]">
            

              <a href="https://www.facebook.com/profile.php?id=61550763330971">
                <GrFacebook />
              </a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2FFGRF%2520UK%3Ffbclid%3DIwAR3uIvtDIUi6K1Gup4R9y6b1AaspToWqg5HOqhDuZTbfg1wjngAu0nZlCiQ&h=AT19ViF2wDZyIoPjKqzB5HXm0cZZHzdvuDqIL_tdCfr_1T_tnHbQCCv_CbC0XFJfIDx1H66wq5Pda5C79DoJUFwqR8R77yprEGLiTIV-4fyjZBNbmY3gteEtsSy9Go1QiOLi">
                <FaXTwitter />
              </a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2FFGRF%2520UK%3Ffbclid%3DIwAR2RqANRfDITwCoKxsivO8vTzi6dVcgL9T-XRafDVugFucxfA9SwGk3lpuw&h=AT2ZW-k7Iw2NqkBXGYQeBYseJnpB2qC-yvNjrUA9C-OKGOLt8hkiL_uI3HyYx-_NhgGIC0Ov8Z8tHy7xmmnHApt1x-tbEO5gNcMZLKHpuBKYwfLJKZu3EPymjWPQt_2n7mxh">
                <GrInstagram />
              </a>
              <BsYoutube />
            </div>
          </div>
        </div> */}
        <div className="flex flex-col ">
          <div className="grid grid-cols-1 md:flex md:justify-evenly gap-3 md:gap-4 flex-wrap items-center py-4">
            {/* <div className=""> */}
            {/* <span className="text-gray-400 font-medium text-3xl">penny</span> */}
            <span className="flex flex-col self-end items-center">
              <span className="text-gray-500 font-bold text-3xl relative">
                fgrf.uk
                <span>
                  <PiTrademarkRegisteredLight className="w-[14px] h-[14px] text-gray-400 absolute left-full -top-1" />
                </span>
              </span>
              <span className="text-gray-500 text-[10px] text-center">
                Registered Charity, number 1200869
              </span>
            </span>
            {/* </div> */}
            <div className="flex gap-5 md:gap-12 justify-center">
              <div className="text-center">
                <Link
                  href={"/about"}
                  className="font-medium text-sm md:text-base text-gray-500 hover:text-gray-400"
                >
                  ABOUT US
                </Link>
              </div>
              <div className="text-center">
                <Link
                  href={"/contact-us"}
                  className="font-medium text-sm md:text-base text-gray-500  hover:text-gray-400"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-evenly text-gray-500 gap-4">
              <Link
                href={"https://www.facebook.com/profile.php?id=61550763330971"}
              >
                <RiFacebookFill className="hover:text-[#19afaf]" />
              </Link>
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-1 lg:gap-0">
            <div className="col-span-2 flex flex-col gap-2 md:py-4">
              {!(titleDonationDollar === "zakat") && (
                <p className="text-xs text-center">
                  Support FGRF to help affected community around the world.
                  Please note: Your donations can be used for any welfare,
                  well-wishing, permissible, religious, reformatory, spiritual
                  and good purpose.
                </p>
              )}
              <p className="text-xs text-center lg:w-[650px]">
                Faizan Global Relief Foundation UK 284 WITTON ROAD,BIRMINGHAM B6
                6NX,Birmingham,United Kingdom
              </p>
              {/* <p className="text-xs text-center">
                Registered Charity, number 1200869
              </p> */}
              {/* <p className="text-sm text-gray-500 text-center">
                Penny Appeal is a UK registered charity 1128341 and UK
                registered company 06578382.
              </p>
              <p className="text-sm text-gray-500 text-center">
                Registered Address: Penny Appeal Campus, Thornes Park,
                Wakefield, England, WF2 8QZ
              </p> */}
              <div className="text-center md:flex text-gray-500 text-xs lg:text-sm justify-center">
                <Link href={"/terms-and-conditions"} className="text-[#19afaf]">
                  Terms and Conditions
                </Link>
                |
                <Link href={"/privacy-policy"} className="text-[#19afaf]">
                  Privacy Policy
                </Link>
                |
                <Link href={"/complaints-procedure"} className="text-[#19afaf]">
                  Complaints Procedure
                </Link>
                © 2024 Fgrf.uk
              </div>
              {/* <span className="text-[12px] text-gray-500 text-center">
                Powered by{" "}
                <a
                  href="https://BawdicSoft.com"
                  target="_blank"
                  className="hover:text-sky-500 text-sky-600"
                >
                  BawdicSoft
                </a>
              </span> */}
            </div>
            <div className="flex md:self-center lg:flex-row flex-col lg:items-start mx-auto lg:gap-y-0 gap-y-4 md:my-0 my-4 gap-x-6 text-sm">
              <Link
                href={"/donation/water-well-donation"}
                className="group relative overflow-hidden bg-[#148698] flex items-center px-2 gap-3 md:gap-2 lg:gap-3 py-4 md:py-3 lg:py-4"
              >
                <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-14 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:w-96 group-hover:-translate-y-32 ease"></span>
                <div className="">
                  <div className="relative overflow-hidden rounded-full  bg-white border p-3">
                    <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    {/* <svg
                      fill="#000000"
                      width="30px"
                      height="30px"
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                      id="memory-well"
                      className="relative group-hover:fill-white"
                    >
                      <path d="M19 21H3V16H1V14H21V16H19V21M5 16V19H17V16H5M2 7V5H3V4H4V3H5V2H6V1H16V2H17V3H18V4H19V5H20V7H18V13H16V7H12V9H14V13H8V9H10V7H6V13H4V7H2M7 3V4H6V5H16V4H15V3H7Z" />
                    </svg> */}
                    <Image
                      src={"/AppealNew/waterWell.png"}
                      alt="waterwellImage"
                      width={200}
                      height={200}
                      className="w-8 h-8 group-hover:text-white relative"
                    />
                  </div>
                </div>
                <div className="relative md:text-xs lg:text-xl text-lg text-white uppercase font-bold">
                  <span className="relative ">Donate a</span>
                  <br /> water well
                  <span className="absolute h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                </div>
                <div className="relative overflow-hidden border bg-white p-2  md:p-1  lg:p-2 text-[#19afaf]  font-bold rounded-md">
                  <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <div className="flex items-center relative group-hover:text-white">
                    &#163; 175
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="md:w-3 md:h-3 lg:w-4 lg:h-4 w-4 h-4 group-hover:text-white text-sky-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
              {/* new */}
              {/* <div className="w-44 mx-auto relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 py-0 my-3">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-2xl">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                  <span className="relative group-hover:text-white">
                    Show more
                  </span>
                </span>
              </div> */}
              {/* yha tk */}
            </div>
          </div>
        </div>
        {/* <div className="bg-[#88c6d1] w-full h-1 rounded-full"></div>
        <div className="flex flex-wrap justify-center lg:gap-y-0 gap-y-2 gap-x-10 py-2 md:mt-0 mt- text-sm tracking-wider font-light">
          <h3>2023 FGRF.Inc</h3>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
