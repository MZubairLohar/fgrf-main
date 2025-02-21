const Reasons = () => {
  const data = [
    {
      title: "FLEXIBLE FUNDRAISING SUITE",
      para: "Greater Pittsburgh Community Food Bank",
      para2:
        "Qgiv has surpassed my expectations. The customer service is above and beyond. With my previous vendor, I never got to talk to a real human… I only really talked to an automated ticketing system. With Qgiv, the customer service is amazing, whether it is an email or someone jumping in and helping walk us through this new process of ours.",
      img: "/img/sponsor1.png",
    },
    {
      title: "ENGAGE DONORS EVERYWHERE",
      para: "Brother Wolf Animal Rescue",
      para2:
        "It was a successful fundraiser for us, it went very well, and was very smooth. Even when we can go back to having in person, we will always keep this digital option and the low-cost video element because people really responded to it.",
      img: "/img/sponsor2.png",
    },
    {
      title: "NO LONG-TERM CONTRACTS",
      para: "Tanglen Elementary PTO",
      para2:
        "I researched and made phone calls but found that a lot of auction tools wanted thousands of dollars or required a one-year commitment. We’re a volunteer PTO so we couldn’t afford that. Qgiv’s auction platform was just a couple hundred bucks and no commitment.",
      img: "/img/sponsor3.png",
    },
  ];
  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto px-3 py-10 ">
        <h2 className="text-3xl text-center">
          3 Reasons Why Fundraisers Love Qgiv
        </h2>
        <h5 className="text-center text-[#4b8235] font-semibold mt-2">
          SEE MORE CUSTOMER STORIES
        </h5>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-x-20 lg:gap-y-0 gap-x-4 gap-y-8 mt-4">
          {data.map((data, index) => (
            <div
              className="col-span-1 relative shadow-2xl rounded-2xl w-full"
              key={index}
            >
              <div className="bg-[#eceff0] px-4 h-36 pt-6 rounded-tl-2xl rounded-tr-2xl">
                <h2 className="text-sm font-semibold text-[#4b8235] tracking-wider text-center">
                  {data.title}
                </h2>
                <h2 className="text-sm text-center">{data.para}</h2>
              </div>
              <div className="flex justify-center absolute top-20 w-full">
                <img src="/img/animated.svg" className="w-28" alt="" />
              </div>
              <div className="bg-white flex rounded-bl-2xl rounded-br-2xl flex-col justify-between px-4 pt-20 pb-10 h-[450px]">
                <div>
                  <p className="text-sm mb-2 leading-relaxed">{data.para2}</p>
                  <a href="" className="text-[#4b8235] underline text-sm">
                    READ FULL CASE STUDY
                  </a>
                </div>
                <div className="flex justify-center mt-10">
                  <img src={data.img} className="w-48" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
