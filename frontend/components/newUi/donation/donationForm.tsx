import { FC, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import DetailsSec from "./Details";
import PaymentSec from "./Payment";
import AnimatedComponentRight from "../home/AnimationRight";
import AnimatedComponentLeft from "../home/AnimationLeft";
interface DonationFormProps {
  titleDonate: string;
  dollarDonate: string;
}
const orphansDollarList1 = [
  "Higher Education Scholarship Fund - $30",
  "Orphan Medical Care - $30",
  "Orphan Sponsorship Programme - $70",
  "Family Sponsorship - $205",
];
const orphansDollarList2 = [
  "Higher Education Scholarship Fund - $25",
  "Orphan Medical Care - $25",
  "Orphan Sponsorship Programme - $60",
  "Family Sponsorship - $170",
];
const orphansDollarList3 = [
  "Higher Education Scholarship Fund - $25",
  "Orphan Medical Care - $25",
  "Orphan Sponsorship Programme - $65",
  "Family Sponsorship - $195",
];
const orphansOthersList = ["150", "100", "50", "others"];
const onOffList = ["200", "150", "100", "others"];

const DonationForm: React.FC<DonationFormProps> = ({
  titleDonate,
  dollarDonate,
}) => {
  const [orphanDonationDollarArray, setOrphanDonationDollarArray] =
    useState<any[]>();
  const [otherBtnDollar, seOtherBtnDollar] = useState<any[]>();
  const [btnDollar, setBtnDollar] = useState<Boolean>(false);
  const [input, setInput] = useState<Boolean>(false);
  const [dollar, setDollar] = useState<number>(100);
  const [orphanData, setOrphanData] = useState<Boolean>(true);
  const [donateAmountText, setDonateAmountText] = useState<Boolean>(false);
  const [nextStep, setNextStep] = useState<Boolean>(true);
  const [alertText, setAlertText] = useState<Boolean>(false);
  const [bgBtnIndex, setBgBtnIndex] = useState<number>(1);
  const [bgFundIndex, setbgFundIndex] = useState<number>();
  const [nextDet, setNextDet] = useState(false);
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [showFormText, setShowFormText] = useState(false);

  const orphanDollarHandler = (data: any[]) => {
    setOrphanDonationDollarArray(data);
  };
  const nextDetHandler = (
    title: string,
    firstName: string,
    lastName: string,
    email: string,
    contactNo: string
  ) => {
    if (title && firstName && lastName && email && contactNo) {
      setCheck1(true);
      setCheck(true);
    } else {
      setNextDet(false);
      setShowFormText(true);
    }
  };

  const nextHandler = () => {
    if (titleDonate === "Quick Donation") {
      setNextDet(true);
      setNextStep(true);
    } else if (titleDonate && check1 && check) {
      setNextStep(true);
      setNextDet(true);
    } else if (titleDonate) {
      setNextStep(true);
    } else {
      setAlertText(true);
      setNextStep(true);
    }
  };
  const backHandler = () => {
    if (nextStep && nextDet) {
      setNextStep(true);
      setNextDet(false);
      setCheck(false);
      setCheck1(false);
    } else if (nextStep) {
      // monthlyHandler([]);
    } else {
      // monthlyHandler([]);
    }
  };
  return (
    <div>
      {!nextStep ? (
        <AnimatedComponentRight>
          <div className="flex flex-col justify-center">
            <h2 className="text-sky-800 font-bold text-xl py-5 uppercase self-start">
              Select Your Fund
            </h2>
            {alertText && (
              <p className="text-red-600 text-md text-center py-2">
                You must select a fund and specify an amount.
              </p>
            )}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {donationTitleArray?.map((title, index) =>
                title === "Sadaqah" && index === 0 ? (
                  <button
                    key={index}
                    onClick={() => {
                      orphanDollarHandler(orphansDollarList1);
                      setOrphanData(true);
                      setBtnDollar(false);
                      setAlertText(false);
                      setbgFundIndex(index);
                    }}
                    className={` py-3 font-medium relative group overflow-hidden text-gray-800 focus:bg-[#19afaf] focus:text-white px-4  hover:text-white ${
                      bgFundIndex === index
                        ? "bg-[#19afaf] text-white"
                        : "bg-white"
                    }`}
                  >
                    <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                    <span className="relative ">{title}</span>
                  </button>
                ) : (title === "water" && index === 1) ||
                  (title === "food" && index === 2) ||
                  (title === "emergency" && index === 3) ? (
                  <button
                    key={index}
                    onClick={() => {
                      setOrphanData(false);
                      seOtherBtnDollar(orphansOthersList);
                      setBtnDollar(true);
                      setInput(false);
                      setAlertText(false);
                      setbgFundIndex(index);
                    }}
                    className={`relative group overflow-hidden py-3 font-medium text-gray-800 focus:bg-[#19afaf] focus:text-white px-4  hover:text-white ${
                      bgFundIndex === index
                        ? "bg-[#19afaf] text-white"
                        : "bg-white"
                    }`}
                  >
                    <span className="absolute w-[400px] h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                    <span className="relative ">{title}</span>
                  </button>
                ) : (
                  <button
                    key={index}
                    onClick={() => {
                      setOrphanData(false);
                      seOtherBtnDollar(onOffList);
                      setBtnDollar(true);
                      setInput(false);
                      setAlertText(false);
                      setbgFundIndex(index);
                    }}
                    className={`relative group overflow-hidden py-3 font-medium text-gray-800 focus:bg-[#19afaf] focus:text-white px-4  hover:text-white ${
                      bgFundIndex === index
                        ? "bg-[#19afaf] text-white"
                        : "bg-white"
                    }`}
                  >
                    <span className="absolute w-[600px]  h-0 transition-all duration-500 origin-center rotate-45 -translate-x-40 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                    <span className="relative ">{title}</span>
                  </button>
                )
              )}
            </div> */}

            {donateAmountText && (
              <AnimatedComponentLeft>
                <div className="grid grid-cols-1  gap-5">
                  <span className="text-sky-800 font-bold text-xl pt-8 px-8 uppercase self-start">
                    DONATION AMOUNT
                  </span>
                  {orphanData ? (
                    <span className={`flex justify-center gap-3 `}>
                      <button
                        className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                        onClick={() => {
                          orphanDollarHandler(orphansDollarList1);
                        }}
                      >
                        USD
                      </button>
                      <button
                        onClick={() => {
                          orphanDollarHandler(orphansDollarList2);
                        }}
                        className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                      >
                        GBP
                      </button>
                      <button
                        onClick={() => {
                          orphanDollarHandler(orphansDollarList3);
                        }}
                        className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                      >
                        {" "}
                        EUR
                      </button>
                    </span>
                  ) : (
                    <div>
                      <span className={`flex justify-center gap-3 `}>
                        <button
                          className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                          onClick={() => {}}
                        >
                          USD
                        </button>
                        <button
                          onClick={() => {}}
                          className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                        >
                          GBP
                        </button>
                        <button
                          onClick={() => {}}
                          className="p-3 text-lg font-semibold text-gray-500 focus:text-gray-400"
                        >
                          {" "}
                          EUR
                        </button>
                      </span>
                      {btnDollar && (
                        <div className="flex flex-col gap-4">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                            {otherBtnDollar?.map((title, index) =>
                              title === "others" ? (
                                <button
                                  key={index}
                                  onClick={() => {
                                    setInput(true);
                                    setBgBtnIndex(index);
                                  }}
                                  className={`relative group overflow-hidden text-3xl text-gray-500 focus:bg-[#19afaf] bg-white focus:text-white font-semibold py-3 px-5  hover:text-white `}
                                >
                                  <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                                  <span className="relative ">{title}</span>
                                </button>
                              ) : (
                                <button
                                  key={index}
                                  onClick={() => {
                                    setDollar(title);
                                    setInput(false);
                                    setBgBtnIndex(index);
                                  }}
                                  className={`relative group overflow-hidden text-3xl text-gray-500 focus:bg-[#19afaf]  focus:text-white font-semibold py-3 px-5  hover:text-white ${
                                    bgBtnIndex === index
                                      ? "bg-[#19afaf] text-white"
                                      : "bg-white"
                                  } `}
                                >
                                  <span className="absolute w-80 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-36 bg-[#19afaf] top-1/2 group-hover:h-96 group-hover:-translate-y-36 ease"></span>
                                  <span className="relative ">{title}</span>
                                </button>
                              )
                            )}
                          </div>
                          {input && (
                            <input
                              type="text"
                              className="h-10 focus:ring-2  rounded  focus:outline-none ring-[#19afaf] focus:ring-[#19afaf]"
                            />
                          )}
                          <p className="text-gray-400 text-lg font-medium text-center">
                            Making a donation of {dollar} will help save lives
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  {orphanData && (
                    <div>
                      <div className={` "grid grid-cols-4 gap-2" `}>
                        {orphanDonationDollarArray?.map((title, index) => (
                          <div key={index}>
                            <div className="flex  border p-4 gap-16 justify-between">
                              <span className="text-lg  font-semibold">
                                {title}
                              </span>
                              <div className="flex flex-col gap-3">
                                <div className="flex gap-8">
                                  <p>Quantity</p>
                                  <input
                                    type="number"
                                    className="h-8 focus:ring-2  rounded  focus:outline-none focus:ring-[#19afaf]"
                                  />
                                </div>
                                <div className="flex gap-8">
                                  <p>SubTotal</p>
                                  <input
                                    type="number"
                                    className="h-8 focus:ring-2 rounded bg-gray-200 focus:outline-none focus:ring-[#19afaf] focus:shadow-2xl shadow-[#19afaf]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-red-600 font-bold text-3xl pt-5">
                        Total: $0.00
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedComponentLeft>
            )}
          </div>
        </AnimatedComponentRight>
      ) : (
        <div>
          {!nextDet ? (
            <DetailsSec
              dollarDonate={dollarDonate}
              titleDonate={titleDonate}
              showFormText={showFormText}
              submitHandler={nextDetHandler}
            />
          ) : (
            <PaymentSec dollarDonate={dollarDonate} titleDonate={titleDonate} />
          )}
        </div>
      )}
      {/* <div className="py-10 flex justify-between">
        <button
          onClick={() => {
            backHandler();
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
      </div> */}

      {nextStep && nextDet && (
        <div className="flex justify-center">
          <p className="text-gray-500 text-sm text-center max-w-3xl ">
            Your donation can be spent in any Permissible, Welfare,
            Well-wishing, Water, Food, Agriculture, Construction, Religious and
            good purpose.
          </p>
        </div>
      )}
    </div>
  );
};

export default DonationForm;
