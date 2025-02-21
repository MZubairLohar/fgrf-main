import Image from "next/image";
import Link from "next/link";

import SliderSectionZakat from "./slider";

const ZakatDocs = () => {
  return (
    <div className="py-10 md:py-16 px-5 ">
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        GAZA UNDER ATTACK AND UNDER COMPLETE SIEGE!
      </h2>

      <SliderSectionZakat />

      <p className="text-base text-center pt-8 py-3">
        The violence in Gaza has claimed over 20,000 lives, leaving thousands
        injured, according to the Palestinian Health Ministry - Inna Lillahi Wa
        Inna Illahi Rajioon.
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
        escalating the death toll. With a ground offensive ongoing, safe places
        are scarce for 1.8 million displaced people.
      </p>
      <p className="text-base text-center py-3">
        Despite dangers, our teams are on the ground delivering crucial aid. We
        urgently appeal for your support to provide essential aid to survivors
        facing this deadly ordeal.
      </p>
      <p className="text-base text-center py-3">
        With electricity, water, food, and medical supplies all obstructed, the
        people of Palestine are relying on your generosity now more than ever.
        Stand in solidarity with Palestine and help save lives during this
        critical time. Please keep the people of Palestine in your duas -
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
      {/* <div>
        <h2 className="text-teal-500 font-bold text-center text-xl md:text-3xl">
          Penny Appeal is helping people and hospitals in Palestine
        </h2>
        <p className="text-base text-center pt-8 py-3">
          Over the past decade, Penny Appeal has worked extensively across the
          Palestinian territories, from Jerusalem to Gaza City, providing
          comprehensive humanitarian aid throughout crisis after crisis.
        </p>
        <p className="text-base text-center py-3">
          More than ever, the people of Palestine need quality medical care.
          Penny Appeal has long supported the Makassed Islamic Charitable
          Hospital in East Jerusalem, which is the largest Palestinian
          non-profit, non-governmental organisation.
        </p>
        <p className="text-base text-center py-3">
          Penny Appeal is on the ground working directly with this hospital in
          Jerusalem, as well as United Nations shelters, hospitals and medical
          clinics throughout Gaza, to provide much-needed critical medical aid
          to our sisters and brothers as and when needed.
        </p>
        <p className="text-sm text-gray-950 text-center py-2">
          PALESTINE NEEDS YOU TODAY
        </p>
      </div> */}
      {/* <iframe className="w-full aspect-video" src="/Videonews/1.mp4"></iframe> */}
      <div className="flex flex-col items-center">
        <div className="w-3/4 ">
          <video className="h-full w-full rounded-2xl" controls>
            <source src="/Videonews/1.mp4" type="video/mp4" />
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
  );
};
export default ZakatDocs;
