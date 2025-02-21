"use client";
import Image, { StaticImageData } from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
import { use, useState } from "react";
import CheckoutButton from "@/components/newUi/donation/checkOut";
import MyPayPalButton from "@/components/newUi/donation/paypalBtn";
import AppealBannerAnimationLeft from "../animations/bannerAnimationLeft";
import AnimationTop from "@/components/newUi/home/AnimationTop";
import AppealBannerAnimationRight from "../animations/bannerAnimationRight";
import AnimatedComponentLeft from "@/components/newUi/home/AnimationLeft";
import AnimatedComponentRight from "@/components/newUi/home/AnimationRight";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/components/newUi/config/firebase";
const WinterBannerSection = () => {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Winter Emergency" === title.content.sec
  );
  const photos = foodBoxData[0]?.content?.photo;
  const [docs, setDocs] = useState(0);
  const oneOffBtnList = [
    { title: "50", doc: "Could provide food supplies for Palestinians." },
    {
      title: "100",
      doc: "Could help provide a range of medical consumables to support the injured.",
    },
    {
      title: "200",
      doc: "Could provide critical medical supplies to aid the injured.",
    },
    {
      title: "300",
      doc: "Could provide 50 Palestinians with 6 nutritious food packs each.",
    },
    {
      title: "900",
      doc: "Could provide 9 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "1500",
      doc: "Could provide 15 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "3000",
      doc: "Could provide 15 x Critical Medical Packs to provide emergency medical assistance for over 100 Palestinians.",
    },
  ];
  const monthBtnList = [
    {
      title: "9",
      doc: "Could provide 2 x life-saving Food Packs of nutritious meals to over 15 Palestinians.",
    },
    {
      title: "25",
      doc: "Could provide 6 x life-saving Food Packs of nutritious meals to over 50 Palestinians.",
    },
    {
      title: "75",
      doc: "Could provide 9 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "125",
      doc: "Could provide 15 x Medical Consumables Packs of life-critical medicine to over 100 Palestinians.",
    },
    {
      title: "250",
      doc: "Could provide 15 x Critical Medical Packs to provide emergency medical assistance for over 100 Palestinians.",
    },
  ];

  const [packeges, setPackeges] = useState(oneOffBtnList);
  const [bgColor, setBgColor] = useState(true);
  const [bgBtn, setbgBtn] = useState(0);
  const [dollarDonate, setDollarDonate] = useState("50");
  const [amount, setAmount] = useState();
  const [donationForm, setDonationForm] = useState(true);
  const [borderColor, setBorderColor] = useState(false);

  const userDonation = async () => {
    try {
      const newCollectionRef = collection(db, "userAppealDonation");
      const newDocRef = doc(newCollectionRef);
      const now = new Date();
      const userDetails = {
        userData: {
          date: now.toLocaleString(),
          donationTitle: "Winter Emergency",
          donation: dollarDonate,
        },
      };

      await setDoc(newDocRef, userDetails, { merge: true });
      if (userDetails !== undefined) {
        console.log("Hogeya meray Bahi");
      }
    } catch (error) {
      console.error("submit reclaim gift handler--->", error);
    }
  };

  return (
    <div className="pt-10 lg:pt-16">
      <div className="max-w-3xl mx-auto">
        <div
          className={`flex justify-center rounded-t-xl border-t-2 border-l-2 border-r-2 border-b-0  pb-8  ${
            borderColor ? "border-teal-500" : "border-sky-600"
          } `}
        >
          <div
            onMouseEnter={() => setBorderColor(true)}
            onMouseLeave={() => setBorderColor(false)}
            className="text-center relative group overflow-hidden bg-sky-700 rounded-b-2xl  text-xl lg:text-2xl text-white font-semibold py-2 px-8"
          >
            <span className="absolute w-72 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-72 group-hover:-translate-y-32 ease"></span>

            <p className="relative"> Winter Emergency</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:gap-3 lg:gap-14 md:grid-cols-2 px-5">
        <AnimationTop>
          <AppealBannerAnimationLeft>
            <div
              className={`border-4 rounded-xl shadow-gray-700 shadow-2xl ${
                borderColor ? "border-teal-500" : "border-sky-600"
              }`}
            >
              <Image
                src={`${(photos && photos[0]) || "/AppealNew/winter/12.png"}`}
                alt="winter img1"
                className="w-full h-full rounded-lg"
                width={600}
                height={600}
              />
            </div>
          </AppealBannerAnimationLeft>
        </AnimationTop>
        <AnimationTop>
          <AppealBannerAnimationRight>
            <div
              className={`border-4 rounded-xl shadow-gray-700 shadow-2xl ${
                borderColor ? "border-teal-500" : "border-sky-600"
              }`}
            >
              <Image
                src={`${(photos && photos[1]) || "/AppealNew/winter/11.png"}`}
                alt="winter img1"
                className="w-full h-full rounded-lg"
                width={600}
                height={600}
              />
            </div>
          </AppealBannerAnimationRight>
        </AnimationTop>
      </div>
      <div className="bg-gray-300 md:h-80 shadow-2xl mt-10 px-3 lg:px-5 pb-5 max-w-3xl mx-auto rounded-lg">
        {/* form Container */}
        {donationForm ? (
          <AnimatedComponentLeft>
            <div className="flex flex-col gap-2 ">
              <h2 className="text-teal-500 text-2xl lg:text-3xl font-bold text-center py-2">
                Winter Emergency
              </h2>
              <div className="flex flex-col  pb-4 px-3 lg:px-5">
                <select className="w-60 md:w-96 self-center text-teal-500 font-bold outline-none focus:outline-none border-2 border-teal-500 rounded-xl px-2 py-2">
                  Winter Emergency
                  <option className="text-md " value={"Palestine"}>
                    Winter Emergency
                  </option>
                </select>

                <div className="md:mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-2  md:pr-0 pt-4 lg:pr-8 pb-3">
                    {packeges.map((btn, index) => (
                      <button
                        key={index}
                        className={
                          index === bgBtn
                            ? `border-0 border-white  text-white shadow-2xl bg-teal-500 py-1 px-2 rounded-xl text-xl font-semibold relative overflow-hidden group`
                            : `border-2 border-white hover:border-teal-500 text-teal-500  py-1 px-2 rounded-xl font-semibold text-xl relative overflow-hidden group`
                        }
                        onClick={() => {
                          setDollarDonate(btn.title);
                          setDocs(index);
                          setbgBtn(index);
                        }}
                      >
                        <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-16 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative group-hover:text-teal-500">
                          £{btn.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <input
                  type="number"
                  placeholder="Other Amount"
                  value={amount}
                  onChange={(e: any) => {
                    setAmount(e.target.value), setDollarDonate(e.target.value);
                  }}
                  className=" md:w-96 self-center text-teal-500 font-bold outline-none border-2 border-teal-500 rounded-xl p-4 py-2 "
                />
              </div>
            </div>
          </AnimatedComponentLeft>
        ) : (
          <AnimatedComponentRight>
            <div className="py-4">
              <h2 className="text-3xl font-bold text-[#19afaf] text-center uppercase">
                payment
              </h2>
              <p className="text-gray-700 text-base py-3 text-center">
                Your Monthly Donation : &#163;{dollarDonate}.00
              </p>
              <p className="bg-white h-[1px] w-full"></p>
              <div className="py-2 flex justify-between">
                <p className="text-gray-700 text-base">
                  Winter Emergency Appeal Donation
                </p>
                <p className="text-gray-700 text-base">{dollarDonate}</p>
              </div>
              <p className="bg-white h-[1px] w-full"></p>

              <div className="grid grid-cols-1 md:grid-cols-2 py-3">
                {/* stripe button */}
                {/* <CheckoutButton amount={dollarDonate} /> */}
                <MyPayPalButton amount={dollarDonate} currency="GBP" />
              </div>
            </div>
          </AnimatedComponentRight>
        )}
        {/* button Container */}
        <div className="flex justify-between">
          {donationForm ? (
            <div className="visible"></div>
          ) : (
            <button
              onClick={() => {
                // backHandler();
                setDonationForm(true);
              }}
              className="relative visible group overflow-hidden uppercase  py-2 px-4 text-2xl font-bold text-gray-400 bg-white flex gap-2 items-center justify-center"
            >
              <span className="absolute w-40 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

              <FaRegArrowAltCircleLeft className="w-6 h-6 relative group-hover:text-white text-gray-400" />
              <span className="relative group-hover:text-white text-gray-400">
                {" "}
                Back
              </span>
            </button>
          )}
          <button
            onClick={() => {
              // nextHandler();
              setDonationForm(false);
              userDonation();
            }}
            className="relative  group overflow-hidden  uppercase  py-2 px-4 text-2xl font-bold  bg-[#19afaf] flex gap-2 items-center justify-center"
          >
            <span className="absolute w-40 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-gray-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

            <span className="relative group-hover:text-gray-400 text-white">
              {" "}
              Next{" "}
            </span>
            <FaRegArrowAltCircleRight className="w-6 h-6 relative text-white group-hover:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default WinterBannerSection;
