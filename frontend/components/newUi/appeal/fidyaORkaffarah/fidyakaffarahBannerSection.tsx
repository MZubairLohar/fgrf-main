"use client";
import Image from "next/image";
import { use, useState } from "react";
const FedyaKaffaraBannerSec = () => {
  const [docs, setDocs] = useState(0);
  const fidyaKaffraListDoc = [
    { title: "4", doc: "Provide 2 meals for missing 1 fast." },
    {
      title: "120",
      doc: "Provide 2 meals a day for 30 days for not being able to fast.",
    },
  ];

  const [packeges, setPackeges] = useState(fidyaKaffraListDoc);
  const [bgBtn, setbgBtn] = useState(0);

  const options = [{ value: "Where Most Needed", text: "Where Most Needed" }];
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event: any) => {
    const val = event.target.value;
    setSelected(event.target.value);
    setDocs(0);
    if (val === "Where Most Needed") {
      setbgBtn(0);
    } else {
      setbgBtn(0);
    }
  };

  return (
    <div className="pt-10 lg:pt-20">
      <div className="grid grid-cols-1 gap-8 md:gap-3 lg:gap-8 md:grid-cols-3 px-5 md:px-10">
        <div className="flex flex-col gap-2">
          <h3 className=" text-2xl md:text-3xl text-gray-800">
            Fidya or Kaffarah
          </h3>
          <span className="w-full h-[2px] bg-teal-500"></span>
          <div className="flex flex-col shadow-2xl py-4 px-3 lg:px-5">
            <select
              className="focus:outline-none border-2 border-gray-400 rounded-xl px-2 py-2"
              value={selected}
              onChange={handleChange}
            >
              Where Most Needed
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <p className="text-base md:text-lg py-4">{packeges[docs].doc}</p>
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
            src={"/donation/fidyaKaffarah/fidyaBanner.jpg"}
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
export default FedyaKaffaraBannerSec;
