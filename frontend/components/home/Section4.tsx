const Section4 = () => {
  const data = [
    {
      title: "FLEXIBLE FUNDRAISING SUITE.",
      title2: "Greater Pittsburgh Community Food Bank",
      para: "Qgiv has surpassed my expectations. The customer service is above and beyond. With my previous vendor, I never got to talk to a real human… I only really talked to an automated ticketing system. With Qgiv, the customer service is amazing, whether it’s an email or someone jumping in and helping walk us through this new process of ours.",
      img: "https://www.qgiv.com/_resources/images/logo-gpcfb-2x.png",
    },
    {
      title: "ENGAGE DONORS EVERYWHERE.",
      title2: "Brother Wolf Animal Rescue.",
      para: "It was a successful fundraiser for us, it went very well, and was very smooth. Even when we can go back to having in person, we’ll always keep this digital option and the low-cost video element because people really responded to it.",
      img: "https://www.qgiv.com/_resources/images/logo-brother-wolf-2x.png",
    },
    {
      title: "NO LONG-TERM CONTRACTS.",
      title2: "Tanglen Elementary PTO.",
      para: "I researched and made phone calls but found that a lot of auction tools wanted thousands of dollars or required a one-year commitment. We are a volunteer PTO so we couldnt afford that. Qgivs auction platform was just a couple hundred bucks and no commitment.",
      img: "https://www.qgiv.com/_resources/images/logo-tanglen-pto-2x.png",
    },
  ];
  return (
    <div className="max-w-[1200px] py-20 mx-auto h-auto px-2 border">
      <div className="flex flex-col items-center">
        <h4 className="text-3xl">3 Reasons Why Fundraisers Love Qgiv</h4>
        <button className="border-4 mt-4 border-[#477d94] text-[16px] rounded-full text-[#477d94] px-4 py-1">
          SEE MORE CUSTOMER STORIES
        </button>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-3 gap-x-12 lg:gap-y-0 gap-y-6 mt-6">
        {data.map((data, index) => (
          <div className="col-span-1 shadow-xl rounded-lg" key={index}>
            <div className="bg-[#eceff0] py-8 px-4 rounded-tl-lg rounded-tr-lg">
              <h4 className="text-[#4b8235] text-center font-semibold text-sm">
                {data.title}
              </h4>
              <p className="text-[#5d6970] text-center text-sm font-bold">
                {data.title2}
              </p>
            </div>
            <div className="bg-white px-4 flex flex-col py-6 items-center justify-between">
              <p className="font-thin text-sm leading-relaxed">{data.para}</p>
              <img src={data.img} className="w-[200px] mt-6" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
