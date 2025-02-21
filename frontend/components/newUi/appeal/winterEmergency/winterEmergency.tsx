import Link from "next/link";
import SliderSectionWinter from "./slider";
import WinterBannerSection from "./bannerSection";

// import Button from "./Button";
const WinterEmergency = () => {
  // const cards = [
  //   {
  //     Amount: "25$",
  //     Heading: "Winter Blanket",
  //     para: "Cloud Providing 3 essential Blankets or bedding",
  //   },
  //   {
  //     Amount: "50$",
  //     Heading: "Family Food Pack",
  //     para: "Cloud Providing Nutritious Food to family for a month",
  //   },
  //   {
  //     Amount: "100$",
  //     Heading: "Essentials",
  //     para: "Cloud Providing Blanket, Winter Clothing and food",
  //   },
  // ];

  // const cardTwo = [
  //   {
  //     Amount: "25$",
  //     Heading: "Winter Blanket",
  //     para: "Cloud Providing 3 essential Blankets or bedding",
  //   },
  //   {
  //     Amount: "50$",
  //     Heading: "Family Food Pack",
  //     para: "Cloud Providing Nutritious Food to family for a month",
  //   },
  //   {
  //     Amount: "100$",
  //     Heading: "Essentials",
  //     para: "Cloud Providing Blanket, Winter Clothing and food",
  //   },
  //   {
  //     Amount: "100$",
  //     Heading: "Essentials",
  //     para: "Cloud Providing Blanket, Winter Clothing and food",
  //   },
  // ];

  // const images = [
  //   {
  //     img: "palestine.jpg",
  //   },
  //   {
  //     img: "pakistan.jpg",
  //   },
  //   {
  //     img: "Bangladesh.jpg",
  //   },
  //   {
  //     img: "Afghanistan.jpg",
  //   },
  //   {
  //     img: "yemen.jpg",
  //   },
  //   {
  //     img: "lebanon.jpg",
  //   },
  //   {
  //     img: "uk.jpg",
  //   },
  //   {
  //     img: "syria.jpg",
  //   },
  //   {
  //     img: "palestine.jpg",
  //   },
  //   {
  //     img: "turkey.jpg",
  //   },
  // ];
  return (
    // <div className="text-center max-w-7xl mx-auto py-14 lg:py-32 ">
    //   <div className="p-3">
    //     <h1 className="text-teal-500 font-bold py-3 md:text-3xl ">
    //       We Are Here for Those Most Vulnerable This Winter
    //     </h1>
    //     <p className="py-3 text-xs md:text-base ">
    //       This winter is expected to be one of the deadliest for millions around
    //       the world as communities in extreme poverty struggle to deal with the
    //       bitter weather conditions. But for the 685 million people living in
    //       extreme poverty, survival could be as simple as a winter blanket -
    //       help us help those most in need this winter.
    //     </p>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
    //     {cards.map((card, index) => (
    //       <div
    //         key={index}
    //         className="border border-gray-300 bg-slate-100 rounded-xl shadow-inner"
    //       >
    //         <div className="">
    //           <h1 className="bg-teal-500 text-white text-3xl font-bold p-3 rounded-t-xl">
    //             {card.Amount}
    //           </h1>

    //           <div className="shadow-3xl p-3">
    //             <p className="font-semibold "> {card.Heading} </p>
    //             <p className="text-sm"> {card.para}</p>
    //             <div>
    //               <button className="rounded-3xl bg-teal-500 p-1 px-2 m-2 font-bold shadow-inner  text-white">
    //                 Donate Now
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <hr className="border-black m-5 w-60 lg:w-[800px] md:w-[740px] mx-auto" />

    //   <div className="grid grid-cols-1 md:grid-cols-4 px-5 max-w-4xl gap-5 mx-auto">
    //     {cardTwo.map((cardsec, indexx) => (
    //       <div
    //         key={indexx}
    //         className="border border-gray-300 bg-slate-100 rounded-xl shadow-inner"
    //       >
    //         <div className="">
    //           <h1 className="bg-teal-500 text-white text-3xl font-bold p-2 rounded-t-xl">
    //             {cardsec.Amount}
    //           </h1>

    //           <div className="shadow-3xl p-1">
    //             <p className="font-semibold "> {cardsec.Heading} </p>
    //             <p className="text-xs"> {cardsec.para}</p>
    //             <div>
    //               <button className="rounded-3xl bg-teal-500 p-1 px-2 m-2 font-bold shadow-inner  text-white">
    //                 Donate Now
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <hr className="border-black m-5 w-52 lg:w-[800px] md:w-[740px] mx-auto" />

    //   <h1 className="text-teal-500 text-2xl md:text-3xl font-bold py-8 ">
    //     You Were There Last Winter for people like Muhammad Khan
    //   </h1>

    //   {/* <img src="winterwinter.jpg" className="mx-auto px-2" /> */}

    //   <p className="text-start m-5">
    //     For 90-year-old Muhammad Khan, of Neelum Valley, Kashmir, the harsh
    //     winter months bring with them a sense of dread. Mr. Khan, who has a
    //     physical disability, lives in a mud house along with his wife and eight
    //     children - they dont have any source of regular income and collect alms
    //     from local people to survive. The house they live in was partially
    //     damaged with huge cracks in the roof and walls. It was constantly at
    //     risk of collapse, especially during the winter when heavy rains hit the
    //     village. Muhammad shared his fears with Penny Appeal that one day the
    //     house would collapse, and the family would be buried under it.
    //     <br />
    //     <br />
    //     The family were delighted to receive winter materials and shelter
    //     reinforcement from Penny Appeal. Mr Khan was very grateful to Penny
    //     Appeal and said that it had taken a big burden off his shoulders.
    //   </p>

    //   <p className="font-bold mx-5">
    //     Thank you for your support - your donation will help families like
    //     Muhammad Khans to survive the winter.
    //   </p>

    //   <p className="font-bold text-xl md:text-2xl text-teal-500 m-3 ">
    //     Help us Be There This Winter
    //   </p>

    //   {/* <h1 className="font-bold text-4xl text-teal-500 my-10 mt-20 ">
    //     Countries In Need This Winter
    //   </h1>
    //   <div className=" flex justify-center px-3">
    //     <div className="grid grid-cols-2 gap-5 md:gap-10 lg:gap-20 max-w-7xl mx-auto">
    //       {images.map((image, indexxx) => (
    //         <div key={indexxx}>
    //           <img src={image.img} width={300} className="" />
    //         </div>
    //       ))}
    //     </div>
    //   </div> */}

    //   <div className="my-10 px-5">
    //     <p className="font-bold text-lg md:text-2xl text-teal-500">
    //       We Are Here for Those Who Need Us RIGHT NOW!
    //     </p>
    //     <p className="text-start my-2 px-2">
    //       Millions of people from all corners of the world are suffering from
    //       severe poverty and displacement. War, famine, poverty, and disaster
    //       have taken away the basic life-saving necessities that many of us take
    //       for granted.
    //       <br />
    //       <br />
    //       Their lack of food, clothing, fuel, and shelter will make it extremely
    //       difficult to survive this bitter season, and with the rise in living
    //       costs and soaring inflation, this winter is expected to be one of the
    //       toughest on record for those most vulnerable.
    //     </p>
    //   </div>

    //   <div className="flex flex-col lg:flex-row justify-center items-center ">
    //     <div className="p-2">
    //       {/* <img src="we-page-v2.jpg" width={1000} /> */}
    //     </div>
    //     {/* <div className="text-start  justify-center px-10 ">
    //       <h1 className="font-bold text-2xl">This Winter we are here for:</h1>
    //       <ul className="list-disc text-sm pl-5">
    //         <li>
    //           The 1.5 million Palestinians who have had their homes destroyed by
    //           relentless violence over the past months, who will feel the impact
    //           of winter like never before.
    //         </li>
    //         <li>
    //           The 6.6 million Moroccans who had their lives torn apart by
    //           Septembers devastating earthquake.
    //         </li>
    //         <li>
    //           The 2.5 million children across Turkey, many of whom are Syrian
    //           refugees, who are at greater risk of impoverishment in the
    //           aftermath of Februarys earthquake.
    //         </li>
    //         <li>
    //           The 33 million people affected by the devastating Pakistan floods
    //           of 2022, who are still struggling to rebuild their lives.
    //         </li>
    //         <li>
    //           Afghanistans 3.2 million displaced individuals, many of whom are
    //           homeless.
    //         </li>
    //         <li>
    //           The 24.1 million people in Yemen at risk of hunger and disease.
    //         </li>
    //       </ul>

    //       <p className="py-5 text-start">
    //         For as little as £30 you could keep a family safe, warm and
    //         protected the bitter winter season. Please donate today, JazakAllah.
    //       </p>

    //       <button className="bg-teal-500 text-white font-bold text-4xl py-3 px-20 md:px-40 md:ml-14 lg:ml-5 ">
    //         DONATE NOW
    //       </button>
    //     </div> */}
    //   </div>

    //   <p className="italic m-10 text-start font-light">
    //     Penny Appeal will endeavour to use your gift as requested, wherever
    //     possible. If for any reason we cannot use your donation as you have
    //     indicated, we will use it to fund similar projects in other countries or
    //     other projects in the relevant country. Penny Appeal’s strategic
    //     overview and on the ground experience means it is in the best position
    //     to decide how to meet need as it arises.
    //   </p>
    // </div>

    // new Code
    <div>
      <WinterBannerSection />
      <div className="py-10 md:py-16 px-5 ">
        <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
          GAZA UNDER ATTACK AND UNDER COMPLETE SIEGE!
        </h2>

        <SliderSectionWinter />

        <p className="text-base text-center pt-8 py-3">
          The violence in Gaza has claimed over 20,000 lives, leaving thousands
          injured, according to the Palestinian Health Ministry - Inna Lillahi
          Wa Inna Illahi Rajioon.
        </p>
        <p className="text-base text-center py-3">
          Gaza, under complete siege, faces unthinkable horrors. The pipes
          supplying Gaza with water have been shut off, leaving over a million
          children freezing, hungry, and thirsty. Diseases are spreading,
          compounding the suffering. ‘Hungry, forsaken, dehumanised’ – the UNRWA
          Chief explains that the civilians living through these conditions feel
          betrayed by the world. A UN expert has issued a stark warning that
          hunger is pervasive among every Palestinian in Gaza.
        </p>
        <p className="text-base text-center py-3">
          Relentless airstrikes have targeted homes, mosques, and hospitals,
          escalating the death toll. With a ground offensive ongoing, safe
          places are scarce for 1.8 million displaced people.
        </p>
        <p className="text-base text-center py-3">
          Despite dangers, our teams are on the ground delivering crucial aid.
          We urgently appeal for your support to provide essential aid to
          survivors facing this deadly ordeal.
        </p>
        <p className="text-base text-center py-3">
          With electricity, water, food, and medical supplies all obstructed,
          the people of Palestine are relying on your generosity now more than
          ever. Stand in solidarity with Palestine and help save lives during
          this critical time. Please keep the people of Palestine in your duas -
          Jazak’Allah Khair.
        </p>
        <div className="flex flex-col justify-center items-center pt-10 pb-20 gap-10">
          <Link
            href={"/"}
            className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg"
          >
            DONATE NOW
          </Link>
          {/* <Image src={"/donation/palestinEmergency/button.jpg"} alt="" width={700} height={900} /> */}
        </div>
        <div className="flex flex-col items-center">
          <div className="w-3/4 ">
            <video className="h-full w-full rounded-2xl" controls>
              <source src="/Videonews/4.mp4" type="video/mp4" />
            </video>
            <div className="flex justify-center items-center py-8">
              <Link
                href={"/"}
                className="px-10 md:px-16 lg:px-24 py-3 bg-teal-500 font-bold lg:text-lg text-white rounded-lg"
              >
                DONATE NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterEmergency;
