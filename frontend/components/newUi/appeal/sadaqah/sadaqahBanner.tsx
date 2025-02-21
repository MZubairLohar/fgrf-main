"use client";
import Image, { StaticImageData } from "next/image";
import { use, useState } from "react";
const SadaqahBannerSection = () => {
  const [docs, setDocs] = useState(0);
  const oneOffBtnList = [
    { title: "50", doc: "Could provide food supplies for Palestinians." },
    {
      title: "100",
      doc: "Could help provide a range of medical consumables to support the injured.",
    },
    {
      title: "100",
      doc: "Could provide 15 Palestinians with 2 life-saving nutritious food packs each.",
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

  return (
    <div className="pt-10 lg:pt-20">
      <div className="grid grid-cols-1 gap-8 md:gap-3 lg:gap-8 md:grid-cols-3 px-5">
        <div className="flex flex-col gap-2">
          <h3 className=" text-2xl md:text-3xl text-gray-800">Sadaqah</h3>
          <span className="w-full h-[2px] bg-teal-500"></span>
          <div className="grid grid-cols-2">
            <button
              className={
                bgColor
                  ? `p-2 lg:p-3 bg-teal-500 text-white text-lg`
                  : `bg-gray-100`
              }
              onClick={() => {
                setPackeges(oneOffBtnList);
                setDocs(0);
                setbgBtn(0);
                setBgColor(true);
              }}
            >
              One Off
            </button>
            <button
              className={
                !bgColor
                  ? `p-2 lg:p-3 bg-teal-500 text-white text-lg`
                  : `bg-gray-100`
              }
              onClick={() => {
                setPackeges(monthBtnList);
                setDocs(0);
                setbgBtn(0);
                setBgColor(false);
              }}
            >
              Monthly
            </button>
          </div>
          <div className="flex flex-col shadow-2xl py-4 px-3 lg:px-5">
            <select className="focus:outline-none border-2 border-gray-400 rounded-xl px-2 py-2">
              Sadaqah
              <option className="text-md" value={"Palestine"}>
                Sadaqah
              </option>
            </select>
            <p className="text-base lg:text-lg py-4">{packeges[docs].doc}</p>
            <div className="grid grid-cols-3 gap-5 md:gap-1 lg:gap-5 pr-5 md:pr-0 lg:pr-8 pb-5">
              {packeges.map((btn, index) => (
                <button
                  key={index}
                  className={
                    index === bgBtn
                      ? `border-2 border-gray-300  text-white bg-teal-500 p-2 rounded-xl`
                      : `border-2 border-gray-300 hover:bg-gray-300 p-2 rounded-xl`
                  }
                  onClick={() => {
                    setDocs(index);
                    setbgBtn(index);
                  }}
                >
                  £{btn.title}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Other Amount"
              className="focus:outline-none border-2 border-gray-400 rounded-xl p-4 py-2 "
            />
            <p className="text-base">
              Your donations will go to this appeals general fund, so your
              generosity can help where its needed most!
            </p>
            <button className="bg-teal-500 hover:opacity-90 text-white font-medium p-3 rounded-lg mt-4 mb-2">
              Add to Basket
            </button>
          </div>
        </div>

        <div className="md:col-span-2">
          <Image
            src={"/AppealNew/Sadaqah/3.jpg"}
            alt=""
            width={700}
            height={700}
            className="lg:h-[560px] w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default SadaqahBannerSection;
