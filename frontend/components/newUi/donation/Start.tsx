"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import AnimationTop from "../home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import AnimatedComponentLeft from "../home/AnimationLeft";
import AnimatedComponentRight from "../home/AnimationRight";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import DonationForm from "./donationForm";
import PaymentSec from "./Payment";
import DetailsSec from "./Details";
import AnimationBottom from "../home/AnimationBtm";
import { useDonationContext } from "../contextApi/donationContext";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

interface StartSecProps {
  monthlyHandler: (data: string[]) => void;
  image: string;
  title: string;
  desc: string;
}

const defaultDonationList = ["150", "100", "50", "others"];
const winterDonationList = ["50", "100", "200", "others"];
const palestineDonationList = ["100", "200", "300", "others"];
const masjidDonationList = ["1000", "5,000", "10,000", "others"];
const StartSec: React.FC<StartSecProps> = ({
  monthlyHandler,
  image,
  title,
  desc,
}) => {
  const amountDonation = useDonationContext();
  const donationDollar = amountDonation.donationAmount;
  const setTitleForDonation = amountDonation.setDonationTitleHandler;
  const [input, setInput] = useState<Boolean>(false);
  const [dollar, setDollar] = useState<string>("100");
  const [dollarDonate, setDollarDonate] = useState<string>(
    title === "Water Well Donation"
      ? "1000"
      : title === "Hand Pump Donation"
      ? "175"
      : title === "Masjid Donation"
      ? "5000"
      : title === "Food Box Donation"
      ? "40"
      : title === "Orphan Donation" || title === "Palestine Emergency Donation"
      ? "200"
      : title === "Zakat Donation"
      ? setTitleForDonation("Zakat Donation")
      : donationDollar
      ? donationDollar
      : "100"
  );
  if (title !== "Zakat Donation") {
    setTitleForDonation("QuickDonation");
  }
  const [titleDonate, setTitleDonate] = useState<string>(title);
  const [bgBtnIndex, setBgBtnIndex] = useState<number>(1);

  const [zakatCalc, setZakatCalc] = useState<Boolean>(false);
  const [otherDollarVal, setOtherDollarVal] = useState<string>("");

  const [country, setCountry] = useState<string>("United kingdom");
  const donation = [titleDonate || "Quick Donation", dollarDonate];
  const [showPayment, setShowPayment] = useState(false);
  const [showFormDonation, setShowFormDonation] = useState(false);
  const [showFormText, setShowFormText] = useState(false);
  const [showBackBtn, setShowBackBtn] = useState(false);
  const [loader, setLoader] = useState(false);
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [donationBtns, setDonationBtns] = useState(
    title === "Masjid Donation"
      ? masjidDonationList
      : title === "Orphan Donation" || title === "Palestine Emergency Donation"
      ? palestineDonationList
      : title === "Winter Emergency Donation"
      ? winterDonationList
      : defaultDonationList
  );
  let a: any;
  const nextDetHandler = (
    title: string,
    firstName: string,
    lastName: string,
    email: string,
    contactNo: string
  ) => {
    if (title && firstName && lastName && email && contactNo) {
      setShowFormDonation(true);
      setCheck1(true);
      setCheck(true);
      a = { title, firstName, lastName, email, contactNo };
    } else {
      setShowFormText(true);
      setShowFormDonation(true);
      setShowPayment(false);
    }
  };

  const userQuickDonation = async () => {
    try {
      const newCollectionRef = collection(db, "userQuickDonation");
      const newDocRef = doc(newCollectionRef);
      const now = new Date();
      const userDetails = {
        userData: {
          date: now.toLocaleString(),
          donationTitle: "Quick Donation",
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

  const nextHandler = () => {
    if (donation[0] === "Quick Donation" || donation[0] === "Zakat Donation") {
      if (donation[0] === "Quick Donation") {
        userQuickDonation();
      }
      setShowPayment(true);
      setShowFormDonation(false);
      setShowBackBtn(true);
    } else if (titleDonate && check1 && check) {
      setShowPayment(true);
      setShowFormDonation(false);
      setShowBackBtn(true);
      userDonation(a);
    } else if (titleDonate && !showPayment) {
      setShowPayment(false);
      setShowFormDonation(true);
      setShowBackBtn(true);
    } else {
      //  setAlertText(true);
      //  setNextStep(true);
    }
  };

  const userDonation = async ({
    title,
    firstName,
    lastName,
    email,
    contactNo,
  }: {
    title: any;
    firstName: any;
    lastName: any;
    email: any;
    contactNo: any;
  }) => {
    try {
      const newCollectionRef = collection(db, "userDonation");
      const newDocRef = doc(newCollectionRef);
      const now = new Date();
      const userDetails = {
        userData: {
          date: now.toLocaleString(),
          title,
          firstName,
          lastName,
          email,
          contactNo,
          donationTitle: titleDonate,
          donation: dollarDonate,
        },
      };

      await setDoc(newDocRef, userDetails, { merge: true });
      if (userDetails !== undefined) {
        setLoader(false);
        setDetailForm(!detailForm);
      }
    } catch (error) {
      console.error("submit reclaim gift handler--->", error);
    }
  };
  const backHandler = () => {
    if (donation[0] === "Quick Donation" || donation[0] === "Zakat Donation") {
      setZakatCalc(false);
      setShowPayment(false);
      setShowFormDonation(false);
      setShowBackBtn(false);
    } else if (donation[0] !== "Quick Donation" && !showFormDonation) {
      setZakatCalc(false);
      setShowPayment(false);
      setShowFormDonation(true);
      setCheck(false);
      setShowBackBtn(true);
    } else {
      setZakatCalc(false);
      setShowPayment(false);
      setShowFormDonation(false);
      setShowBackBtn(false);
      // monthlyHandler([]);
    }
  };

  const paymentHandler = () => {
    setZakatCalc(false);
    setShowPayment(true);
    setShowBackBtn(true);
    setShowFormDonation(false);
  };
  const detailHandler = () => {
    setZakatCalc(false);
    setShowPayment(false);
    setShowFormDonation(true);
    setShowBackBtn(true);
  };
  const donationHandler = () => {
    setZakatCalc(false);
    setShowPayment(false);
    setShowFormDonation(false);
    setShowBackBtn(false);
  };

  // All Data related to Calculator
  const goldAandSilverRef = useRef<any>();
  const cash1Ref = useRef<any>();
  const cash2Ref = useRef<any>();
  const cash3Ref = useRef<any>();
  const cash4Ref = useRef<any>();
  const businessRef = useRef<any>();
  const [labilities1, setLabilities1] = useState<any>();
  const [labilities2, setLabilities2] = useState<any>();
  const [labilities3, setLabilities3] = useState<any>();
  const [formData, setFormData] = useState({});
  const [total, setTotal] = useState<any>();
  const [zakat, setZakat] = useState<any>();
  const [detailForm, setDetailForm] = useState(false);
  // Calculator function
  const calculateHandler = () => {
    let goldAandSilver = goldAandSilverRef?.current?.value;
    let cash1 = cash1Ref?.current?.value;
    let cash2 = cash2Ref?.current?.value;
    let cash3 = cash3Ref?.current?.value;
    let cash4 = cash4Ref?.current?.value;
    let business = businessRef?.current?.value;
    let allAmount =
      (goldAandSilver ? +goldAandSilver : 0) +
      (cash1 ? +cash1 : 0) +
      (cash2 ? +cash2 : 0) +
      (cash3 ? +cash3 : 0) +
      (cash4 ? +cash4 : 0) +
      (business ? +business : 0) +
      (labilities1 ? +labilities1 : 0) +
      (labilities2 ? +labilities2 : 0) +
      (labilities3 ? +labilities3 : 0) +
      (total ? +total : 0);

    let calCulateAmount = +allAmount * 0.0143 + 0.2 + +allAmount;
    setZakat(calCulateAmount);
  };
  const resetHandler = () => {
    goldAandSilverRef.current.value = null;
    cash1Ref.current.value = "";
    cash2Ref.current.value = "";
    cash3Ref.current.value = "";
    cash4Ref.current.value = "";
    businessRef.current.value = "";
    setLabilities1("");
    setLabilities2("");
    setLabilities3("");
    setTotal("");
    setZakat("0");
  };
  const reclaimGiftChangeHandler = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
      country: country,
    });
  };

  const submitHandler = async (e: any) => {
    setLoader(true);
    e.preventDefault();
    try {
      const newCollectionRef = collection(db, "userReclaimGifts");
      const newDocRef = doc(newCollectionRef);
      const now = new Date();
      const userDetails = {
        date: now.toLocaleString(),
        userData: formData,
      };

      await setDoc(newDocRef, userDetails, { merge: true });
      if (userDetails !== undefined) {
        setLoader(false);
        setDetailForm(!detailForm);
      }
    } catch (error) {
      console.error("submit reclaim gift handler--->", error);
    }
  };
  return (
    <div>
      {/* navbar */}
      <div className="flex h-40 justify-center ml-10 md:ml-40">
        {/* <div className="w-40 md:w-60 relative flex items-center">
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span
              onClick={donationHandler}
              className="cursor-pointer relative group overflow-hidden border-2 group-hover:border-4  group-hover:border-gray-100 border-[#19afaf] p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 text-gray-500"
            >
              <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
              <span className="relative text-gray-500 group-hover:text-white  ">
                1
              </span>
            </span>
            <span
              className={`text-sm md:text-base ${
                title === "Zakat Donation" ? "text-gray-200" : "text-gray-500"
              }`}
            >
              Start
            </span>
          </div>
          <span className={`bg-gray-100 h-[6px] w-full`}></span>
        </div> */}
        <div className="w-40 md:w-60 relative flex items-center">
          <span className="relative bg-gray-100 h-[6px] w-full"></span>
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span
              onClick={donationHandler}
              className={`cursor-pointer relative group overflow-hidden border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 ${
                !showFormDonation && !showPayment ? "bg-teal-500" : ""
              }`}
            >
              <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
              <span
                className={`relative text-gray-500 group-hover:text-white ${
                  !showFormDonation && !showPayment ? "text-white" : ""
                }`}
              >
                1
              </span>
            </span>
            <span
              className={`text-sm md:text-base ${
                title === "Zakat Donation" ? "text-gray-200" : "text-gray-500"
              }`}
            >
              Donation
            </span>
          </div>
        </div>
        <div className="w-40 md:w-60 relative flex items-center">
          <span className="relative bg-gray-100 h-[6px] w-full"></span>
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span
              onClick={detailHandler}
              className={`cursor-pointer relative group overflow-hidden border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 ${
                showFormDonation ? "bg-teal-500" : ""
              }`}
            >
              <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
              <span
                className={`relative text-gray-500 group-hover:text-white ${
                  showFormDonation ? "text-white" : ""
                }`}
              >
                2
              </span>
            </span>
            <span
              className={`text-sm md:text-base ${
                title === "Zakat Donation" ? "text-gray-200" : "text-gray-500"
              }`}
            >
              Details
            </span>
          </div>
        </div>
        <div className="w-40 md:w-60 relative flex items-center">
          <div className="absolute top-[87px] -left-2 transform  -translate-y-1/2">
            <span
              onClick={paymentHandler}
              className={`cursor-pointer relative group overflow-hidden border-4 border-gray-100 p-5 w-8 h-8 flex justify-center items-center text-lg rounded-full bg-gray-100 ${
                showPayment ? "bg-teal-500" : ""
              }`}
            >
              <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-20 group-hover:-translate-y-16 ease"></span>
              <span
                className={`relative text-gray-500 group-hover:text-white ${
                  showPayment ? "text-white" : ""
                }`}
              >
                3
              </span>
            </span>
            <span
              className={`text-sm md:text-base ${
                title === "Zakat Donation" ? "text-gray-200" : "text-gray-500"
              }`}
            >
              Payment
            </span>
          </div>
        </div>
      </div>
      {/* Zakat calculator */}
      {zakatCalc ? (
        <div className="bg-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-5">
            <AnimationBottom>
              <div>
                <p className="rounded-r-lg px-2 font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full md:w-3/4  md:px-4">
                  Calculate and Pay Your Zakat Using the Latest Nisab Values.
                </p>
                <p className="text-sm text-gray-600 pt-2">
                  Enter all assets that have been in your possession over a
                  lunar year in the boxes below
                </p>
                <div className="flex flex-col gap-2 lg:pt-12">
                  <div className="flex flex-col w-full">
                    <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                      Base Nisab on value of
                    </label>
                    <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-4 rounded-lg py-0">
                      <select
                        className="outline-none focus:ring-2 ring-teal-500
                      rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white
                      bg-teal-400 text-base w-full md:px-4"
                      >
                        <option>Silver</option>
                        <option>Gold</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                      Gold & Silver
                    </label>
                    <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 pr-4 rounded-lg py-0">
                      <span className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800  text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-l-lg">
                        &#163;
                      </span>
                      <input
                        className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full  md:px-4"
                        type="number"
                        ref={goldAandSilverRef}
                        placeholder="Value of silver and gold you possess"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                      Cash
                    </label>
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 pr-4 rounded-lg py-0">
                        <span className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800  text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-l-lg">
                          &#163;
                        </span>
                        <input
                          className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full  md:px-4"
                          type="number"
                          ref={cash1Ref}
                          placeholder="In Hand and Bank Accounts"
                        />
                      </div>
                      <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 pr-4 rounded-lg py-0">
                        <span className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800  text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-l-lg">
                          &#163;
                        </span>
                        <input
                          className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full  md:px-4"
                          type="number"
                          ref={cash2Ref}
                          placeholder="Saving for the future"
                        />
                      </div>
                      <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 pr-4 rounded-lg py-0">
                        <span className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800  text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-l-lg">
                          &#163;
                        </span>
                        <input
                          className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full  md:px-4"
                          type="number"
                          ref={cash3Ref}
                          placeholder="Money You have loaned"
                        />
                      </div>
                      <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 pr-4 rounded-lg py-0">
                        <span className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800  text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-l-lg">
                          &#163;
                        </span>
                        <input
                          className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full  md:px-4"
                          type="number"
                          ref={cash4Ref}
                          placeholder="Business investments"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                      Business Assests
                    </label>
                    <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 pr-4 rounded-lg py-0">
                      <span className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800  text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-l-lg">
                        &#163;
                      </span>
                      <input
                        className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full  md:px-4"
                        type="number"
                        ref={businessRef}
                        placeholder="Stock value"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimationBottom>
            <AnimationBottom>
              <div className="mx-auto lg:px-8">
                <p className="rounded-r-lg px-2 font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full md:w-3/4  md:px-4">
                  DONATION HOTLINES
                </p>
                <div className="flex gap-2  items-center">
                  <FiPhoneCall className="animate-ping w-3 h-3 md:w-4 md:h-4 font-semibold text-gray-600" />
                  <p className="text-xl text-gray-600 py-1">+44 7300 559919</p>
                </div>
                <hr className="bg-teal-500 h-[1px] w-full my-2" />
                <hr className="bg-teal-500 h-[1px] w-full mt-4 mb-2" />
                <div className="flex flex-col">
                  <div>
                    <p className="text-lg font-semibold text-gray-500 py-1 md:py-2">
                      Guidance on weight:
                    </p>
                    <div className="text-sm text-gray-500 py-1 md:py-2">
                      <span>Nisab in Gold =</span>{" "}
                      <span className="font-black text-gray-600">
                        7.5 tola(87.48 gm)
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 py-1 md:py-2">
                      <span> Nisab in Silver =</span>{" "}
                      <span className="font-black text-gray-600">
                        52.2 tola(612.36 gm)
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 py-1 md:py-2">
                      ,
                      <span>
                        Read more about tola in our{" "}
                        <Link
                          href={"/donation/zakat-donation"}
                          className="text-teal-500"
                        >
                          About Zakat
                        </Link>{" "}
                        section.{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center md:h-10 lg:h-32">
                    <div className="text-lg text-center font-semibold text-gray-500 py-1 md:py-5">
                      You have no Zakat due, please support our Zakat appeal
                    </div>
                  </div>
                  {zakat ? (
                    <AnimationTop>
                      <div className="border border-teal-500 flex flex-col rounded-xl px-4">
                        <hr className="bg-teal-500 h-[2px] w-full my-2" />
                        <div className="flex justify-between bg-green-400 py-2 px-4 rounded-xl">
                          <p className="text-base font-bold">Your Zakat :</p>
                          <p className="text-base font-bold">
                            {zakat > 0 ? zakat : 0}
                          </p>
                        </div>
                        <hr className="bg-teal-500 h-[2px] w-full  my-2" />
                        {/* <div className="flex justify-between">
                      <p className="text-base font-normal">
                        Your Transaction Fee :
                      </p>
                      <p className="text-base font-bold">
                        {zakat.toString().split(".")[1] || 0}
                      </p>
                    </div>
                    <hr className="bg-teal-500 h-[1px] w-full mt-4 mb-2" /> */}
                      </div>
                    </AnimationTop>
                  ) : (
                    <div className="visible"></div>
                  )}
                  <div className="flex flex-col w-full">
                    <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                      Liabilities
                    </label>
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 pr-4 rounded-lg py-0">
                        <span className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800  text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-l-lg">
                          &#163;
                        </span>
                        <input
                          className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full  md:px-4"
                          type="number"
                          value={labilities1}
                          onChange={(e) => {
                            setLabilities1(e.target.value);
                            // setTotal(
                            //   +e.target.value + +(+labilities2 + +labilities3)
                            // );
                          }}
                          placeholder="Money owned (borrowed or credit"
                        />
                      </div>
                      <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 pr-4 rounded-lg py-0">
                        <span className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800  text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-l-lg">
                          &#163;
                        </span>
                        <input
                          className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full  md:px-4"
                          type="number"
                          value={labilities2}
                          onChange={(e) => {
                            setLabilities2(e.target.value);
                            // setTotal(
                            //   +e.target.value + +(+labilities1 + +labilities3)
                            // );
                          }}
                          placeholder="Employee salaries"
                        />
                      </div>
                      <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 pr-4 rounded-lg py-0">
                        <span className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800  text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-l-lg">
                          &#163;
                        </span>
                        <input
                          className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full  md:px-4"
                          type="number"
                          value={labilities3}
                          onChange={(e) => {
                            setLabilities3(e.target.value);
                            // setTotal(
                            //   +e.target.value + +(+labilities2 + +labilities1)
                            // );
                          }}
                          placeholder="Other outgoings due (tax, rent, utilities)"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-base font-semibold text-gray-500 py-1 md:py-2">
                      Total Assests
                    </label>
                    <div className="flex bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 pr-4 rounded-lg py-0">
                      <span className="bg-gradient-to-t from-sky-800 via-green-200 to-sky-800  text-white font-bold px-2 py-1 md:px-4 md:py-2 rounded-l-lg">
                        &#163;
                      </span>
                      <input
                        className="outline-none focus:ring-2 ring-teal-500 rounded-r-lg px-2 md:font-semibold py-1 md:py-2 text-white bg-teal-400 text-base w-full  md:px-4"
                        type="number"
                        onChange={(e) => setTotal(e.target.value)}
                        value={total}
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <div className="flex gap-2">
                      <button
                        onClick={resetHandler}
                        className="bg-teal-500 relative group overflow-hidden  hover:bg-teal-600 rounded-md text-white font-medium px-5 py-2"
                      >
                        <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-45  -translate-x-5 bg-gray-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-gray-500">
                          Reset
                        </span>
                      </button>
                      <button
                        onClick={calculateHandler}
                        className="relative overflow-hidden group bg-sky-800  text-white font-medium rounded-lg px-5 py-2"
                      >
                        <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-45  -translate-x-5 bg-gray-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

                        <span className="relative group-hover:text-gray-500">
                          Calculate
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationBottom>
          </div>
          <div className="py-10 flex justify-between">
            <button
              onClick={() => {
                setZakatCalc(false);
                setLabilities1(null);
                setLabilities2(null);
                setLabilities3(null);
                setTotal(null);
                setZakat(null);
              }}
              className="relative group overflow-hidden uppercase  py-2 px-4 text-2xl font-bold text-gray-400 bg-white flex gap-2 items-center justify-center"
            >
              <span className="absolute w-40 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

              <FaRegArrowAltCircleLeft className="w-6 h-6 relative group-hover:text-white text-gray-400" />
              <span className="relative group-hover:text-white text-gray-400">
                {" "}
                Back
              </span>
            </button>
            <button
              onClick={() => {
                setZakatCalc(false);
                nextHandler();
                setDollarDonate(zakat > 0 ? zakat : 0);
                // monthlyHandler(donation);
              }}
              className="relative group overflow-hidden  uppercase  py-2 px-4 text-2xl font-bold  bg-[#19afaf] flex gap-2 items-center justify-center"
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
      ) : (
        <div className="bg-gray-100 p-8">
          <div className="mx-auto max-w-4xl">
            <AnimationTop>
              <motion.div
                whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div
                  id="box3d"
                  className="border-4 mb-2 md:mb-4 border-[#85d0d0]  max-w-lg py-1 md:py-3 bg-[#6898b1] mx-auto rounded-full shadow-lg"
                >
                  <h2
                    id=""
                    className="text-lg px-3  md:px-5 md:text-2xl lg:text-3xl uppercase hover:text-sky-800 font-bold text-white text-center"
                  >
                    Make your donation
                  </h2>
                </div>
              </motion.div>
            </AnimationTop>
            {showPayment ? (
              <PaymentSec
                titleDonate={donation[0]}
                dollarDonate={donation[1]}
              />
            ) : (
              <>
                {showFormDonation ? (
                  <DetailsSec
                    showFormText={showFormText}
                    submitHandler={nextDetHandler}
                    titleDonate={donation[0]}
                    dollarDonate={donation[1]}
                  />
                ) : (
                  <div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.2 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: "20",
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      {image && title && desc ? (
                        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 lg:gap-1 pt-2 md:py-8 mx-auto">
                          <div>
                            <h2 className="text-center text-2xl md:text-3xl lg:text-7xl uppercase font-semibold md:font-bold lg:font-extrabold md:py-2 text-teal-500">
                              {title.split(" ").slice(0, -1).join(" ")}
                            </h2>
                            <p className="text-sm md:text-justify md:text-lg text-teal-500 font-semibold capitalize pb-2 md:py-3 ">
                              {desc}
                            </p>

                            {title === "Zakat Donation" && (
                              <div className="flex justify-center pt-2 md:pb-5 lg:pb-0 lg:pt-8">
                                <button
                                  onClick={() => setZakatCalc(true)}
                                  className="bg-teal-500 relative group overflow-hidden rounded-lg  font-semibold text-lg md:text-xl lg:text-2xl py-2 px-4"
                                >
                                  <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-white top-1/2 group-hover:h-80 group-hover:-translate-y-32 ease"></span>
                                  <span className="relative text-white group-hover:text-gray-500">
                                    Go to Zakat Calculator
                                  </span>
                                </button>
                              </div>
                            )}
                            <div className="flex flex-col gap-4 lg:pt-8 md:px-3 lg:px-0">
                              {!(
                                title === "Water Well Donation" ||
                                title === "Hand Pump Donation" ||
                                title === "Food Box Donation"
                              ) && (
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-3">
                                  {donationBtns?.map((data, index) =>
                                    data === "others" ? (
                                      <button
                                        key={index}
                                        onClick={() => {
                                          setInput(true);
                                          setBgBtnIndex(index);
                                        }}
                                        className={`relative group overflow-hidden md:text-xl lg:text-2xl text-gray-500 focus:bg-[#19afaf] bg-white focus:text-white font-semibold py-2 lg:py-3  hover:text-white `}
                                      >
                                        <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                                        <span className="relative w-full">
                                          £ {data}
                                        </span>
                                      </button>
                                    ) : (
                                      <button
                                        key={index}
                                        onClick={() => {
                                          setDollar(data);
                                          {
                                            data === "10,000" ||
                                            data === "5,000"
                                              ? setDollarDonate(
                                                  data.split(",").join("")
                                                )
                                              : setDollarDonate(data);
                                          }
                                          setInput(false);
                                          setBgBtnIndex(index);
                                          setTitleDonate(title);
                                        }}
                                        className={`relative group overflow-hidden py-2 lg:py-3 md:text-xl lg:text-2xl text-gray-500 focus:bg-[#19afaf]  focus:text-white font-semibold  hover:text-white ${
                                          bgBtnIndex === index
                                            ? "bg-[#19afaf] text-white"
                                            : "bg-white"
                                        } `}
                                      >
                                        <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                                        <span className="relative ">
                                          £ {data}
                                        </span>
                                      </button>
                                    )
                                  )}
                                </div>
                              )}
                              {input && (
                                <input
                                  type="number"
                                  value={otherDollarVal}
                                  onChange={(e) => {
                                    setOtherDollarVal(e.target.value);
                                    setDollarDonate(e.target.value);
                                    setDollar(e.target.value);
                                  }}
                                  autoFocus
                                  className="h-8 md:h-10 px-2 focus:ring-2  rounded  focus:outline-none ring-[#19afaf] focus:ring-[#19afaf]"
                                />
                              )}
                            </div>
                          </div>
                          <div className="lg:pl-16">
                            <Image
                              src={image}
                              alt="donation img"
                              width={300}
                              height={300}
                              className="h-60 md:h-72 lg:h-96 w-full shadow-gray-400 shadow-2xl rounded-xl border-4 border-teal-500"
                            />
                          </div>
                        </div>
                      ) : (
                        <>
                          {!donationDollar && (
                            <div className="flex max-w-2xl mx-auto flex-col gap-4 lg:pt-8 md:px-3 py-5 lg:py-0 lg:px-0">
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-3">
                                {donationBtns?.map((data, index) =>
                                  data === "others" ? (
                                    <button
                                      key={index}
                                      onClick={() => {
                                        setInput(true);
                                        setBgBtnIndex(index);
                                      }}
                                      className={`relative group overflow-hidden md:text-xl lg:text-3xl text-gray-500 focus:bg-[#19afaf] bg-white focus:text-white font-semibold py-2 lg:py-4 md:px-4 hover:text-white `}
                                    >
                                      <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                                      <span className="relative ">
                                        £ {data}
                                      </span>
                                    </button>
                                  ) : (
                                    <button
                                      key={index}
                                      onClick={() => {
                                        setDollar(data);
                                        setDollarDonate(data);
                                        setInput(false);
                                        setBgBtnIndex(index);
                                        setTitleDonate(title);
                                        setDollarDonate(data);
                                      }}
                                      className={`relative group overflow-hidden py-2 lg:py-4 md:px-4 md:text-xl lg:text-3xl text-gray-500 focus:bg-[#19afaf]  focus:text-white font-semibold  hover:text-white ${
                                        bgBtnIndex === index
                                          ? "bg-[#19afaf] text-white"
                                          : "bg-white"
                                      } `}
                                    >
                                      <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                                      <span className="relative ">
                                        £ {data}
                                      </span>
                                    </button>
                                  )
                                )}
                              </div>
                              {input && (
                                <input
                                  type="number"
                                  value={otherDollarVal}
                                  onChange={(e) => {
                                    setOtherDollarVal(e.target.value);
                                    setDollarDonate(e.target.value);
                                    setDollar(e.target.value);
                                  }}
                                  autoFocus
                                  className=" h-8 md:h-10 px-2 focus:ring-2  rounded  focus:outline-none ring-[#19afaf] focus:ring-[#19afaf]"
                                />
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </motion.div>
                  </div>
                )}
              </>
            )}
            {/* Next Button */}
            {/* <div className="flex self-end py-3 md:py-5">
            <button
              onClick={() => monthlyHandler(donation)}
              className="relative group overflow-hidden  uppercase  py-2 px-4 text-2xl font-bold  bg-[#19afaf] flex gap-2 items-center justify-center"
            >
              <span className="absolute w-40 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-gray-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

              <span className="relative group-hover:text-gray-400 text-white">
                {" "}
                Next{" "}
              </span>
              <FaRegArrowAltCircleRight className="w-6 h-6 relative text-white group-hover:text-gray-400" />
            </button>
          </div> */}
          </div>
          <div className="py-10 flex justify-between">
            {showBackBtn ? (
              <button
                onClick={() => {
                  backHandler();
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
            ) : (
              <div></div>
            )}
            <button
              onClick={() => {
                nextHandler();
              }}
              className="relative group overflow-hidden  uppercase  py-2 px-4 text-2xl font-bold  bg-[#19afaf] flex gap-2 items-center justify-center"
            >
              <span className="absolute w-40 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-gray-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

              <span className="relative group-hover:text-gray-400 text-white">
                {" "}
                Next{" "}
              </span>
              <FaRegArrowAltCircleRight className="w-6 h-6 relative text-white group-hover:text-gray-400" />
            </button>
          </div>
          {!(String(title) === "Palestine Emergency Donation") &&
          !(String(title) === "Zakat Donation") &&
          title ? (
            <div className="">
              <p className="text-black font-bold text-[13px] text-center ">
                Any leftover donations can be used for any permissible,
                religious, reformatory, welfare, spiritual, benevolent and good
                purpose.
              </p>
            </div>
          ) : (
            <>
              {!(title === "Zakat Donation") &&
              !(title === "Palestine Emergency Donation") ? (
                <div className="">
                  <p className="text-black font-bold text-[13px] text-center ">
                    Your donations can be used for any welfare, well-wishing,
                    permissible, religious, reformatory, spiritual and good
                    purpose
                  </p>
                </div>
              ) : null}
            </>
          )}
          {title === "Palestine Emergency Donation" && (
            <div className="">
              <p className="text-black font-bold text-[13px] text-center ">
                Support FGRF to help affected Palestinian Muslims. Please note:
                Your donations can be used for any welfare, well-wishing,
                permissible, religious, reformatory, spiritual and good purpose.
              </p>
            </div>
          )}
          {/* {showPayment && (
            <div className="flex justify-center">
              <p className="text-gray-500 text-sm text-center max-w-3xl ">
                Your donation can be spent in any Permissible, Welfare,
                Well-wishing, Water, Food, Agriculture, Construction, Religious
                and good purpose.
              </p>
            </div>
          )} */}
          <div className="max-w-3xl mx-auto pt-4">
            <p className="text-gray-900 font-bold lg:font-extrabold text-lg lg:text-xl">
              Reclaim Gift Aid
            </p>
            <hr className="h-[2px] bg-teal-500 w-full" />
            <div>
              <p className="py-4">
                Add 25% more to your donation at no cost to you. A Gift Aid
                declaration allows FGRF UK to claim tax back on eligible
                donations. It means that for every £1 you donate to FGRF UK we
                can claim back 25p, at no extra cost to you.
              </p>
            </div>

            <p className="text-base text-gray-900 py-3">Tell me more »</p>
            <div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  onChange={() => setDetailForm(!detailForm)}
                />
                <span className="text-base pl-2">
                  Yes, I would like to claim Gift Aid
                </span>
              </div>
              <p className="text-sm py-3">
                By ticking the &#34;Yes&#34; box, I agree I would like FGRF UK
                to reclaim the tax on all qualifying donations I have made, as
                well as any future donations, until I notify them otherwise. I
                understand that if I pay less Income Tax and/or Capital Gains
                Tax than the amount of Gift Aid claimed on all my donations in
                that tax year I may be asked to pay any difference. I understand
                that FGRF UK will reclaim 25p of tax on every £1 that I give.
              </p>
            </div>
            {detailForm && (
              <form onSubmit={submitHandler}>
                <div className="grid gap-6 mb-6 grid-cols-1">
                  <div>
                    <label
                      htmlFor="address1"
                      className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                    >
                      Country *
                    </label>
                    <select
                      onChange={(e: any) => {
                        setCountry(e.target.value), console.log(country);
                      }}
                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                    >
                      <option value="United kingdom">United kingdom</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="address1"
                      className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                    >
                      Address 1 *
                    </label>
                    <input
                      type="text"
                      id="address1"
                      onChange={reclaimGiftChangeHandler}
                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                      placeholder="Address line 1"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address2"
                      className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                    >
                      Address 2
                    </label>
                    <input
                      type="text"
                      id="address2"
                      onChange={reclaimGiftChangeHandler}
                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                      placeholder="Address line 2"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      onChange={reclaimGiftChangeHandler}
                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                      placeholder="City"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                      >
                        Email *
                      </label>
                      <input
                        type="text"
                        id="email"
                        onChange={reclaimGiftChangeHandler}
                        className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                        placeholder="abc@gmail.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="PostalCode "
                        className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                      >
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        onChange={reclaimGiftChangeHandler}
                        className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                        placeholder="Postal Code "
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="visible"></div>
                  <button
                    disabled={loader}
                    className="relative group overflow-hidden  uppercase  py-2 px-4 text-2xl font-bold  bg-[#19afaf] flex gap-2 items-center justify-center"
                  >
                    <span className="absolute w-40 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-5 bg-gray-200 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    {loader ? (
                      <div className="flex gap-2">
                        <div
                          className="inline-block h-6 w-6 relative animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"
                          role="status"
                        ></div>
                        <span className="text-white !text-xm relative">
                          Loading...
                        </span>
                      </div>
                    ) : (
                      <>
                        <span className="relative group-hover:text-gray-400 text-white">
                          {" "}
                          Next{" "}
                        </span>
                        <FaRegArrowAltCircleRight className="w-6 h-6 relative text-white group-hover:text-gray-400" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default StartSec;
