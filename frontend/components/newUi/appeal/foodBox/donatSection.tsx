import Image from "next/image";
import Link from "next/link";
import SliderSectionfood from "./slider";

const DonateSection = () => {
  return (
    <div>
      <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center py-8">
        Donate Now to Feed Our World!
      </h2>
      <SliderSectionfood />

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
      <div className="flex flex-col items-center">
        <div className="w-3/4 ">
          <video className="h-full w-full rounded-2xl" controls>
            <source src="/Videonews/5.mp4" type="video/mp4" />
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

      {/* <div className="py-10 md:py-16 px-5 md:px-10 max-w-2xl mx-auto">
        <div>
          <p className="text-base text-center pt-8 py-3">
            Worldwide, there are more than 690 million people who suffer from
            chronic hunger. Extreme food insecurity brought on by severe poverty
            will mean these people might go days without eating.
          </p>
          <p className="text-base text-center py-3">
            The reward of feeding the poor is immense, and the Quran tells us
            that the righteous give food, out of love for Him, to the poor and
            the orphan and the captive, [saying] We feed you, for Allahs
            pleasure only — We desire from you neither reward nor thanks.
            [76:5-12].
          </p>
          <p className="text-base text-center py-3">
            Supporting hunger relief not only provides us with the reward of
            feeding the poor, but its also a beautiful way to gain Allahs (SWT)
            satisfaction.
          </p>
        </div>

        <div className="pt-16">
          <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center">
            Hunger Relief Programmes
          </h2>
          <p className="text-base text-center pt-8 py-3">
            The aim of the Feed Our World programme is to alleviate hunger and
            food insecurity using both short-term and long-term interventions.
          </p>
          <p className="text-base text-center py-3">
            Penny Appeals hunger relief programmes are reaching out to thousands
            of people throughout 17 countries around the world to put food on
            the table and put an end to food insecurity. Our Feed Our World
            appeal is 100% Zakat applicable, meaning every penny of your
            donation goes towards providing healthy meals and agricultural
            support to impoverished families around the world!
          </p>
        </div> */}

      {/* The Impact on Hunger by Covid-19 */}
      {/* <div className="pt-16">
          <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center pb-4">
            The Impact on Hunger by Covid-19
          </h2>
          <Image
            src={"/AppealNew/food/5.jpg"}
            alt=""
            width={700}
            height={700}
            className="h-full w-full"
          />
          <p className="text-base text-center pt-8 py-3">
            Covid-19 is worsening the hunger crisis in many countries all over
            the globe, pushing already food-insecure families to the brink of
            starvation. According to the UN, the effects of coronavirus could
            double world hunger.
          </p>
          <p className="text-base text-center py-3">
            Covid-19 could possibly bring on another global pandemic, a hunger
            pandemic. Our hunger relief programmes are now more important than
            ever to help people fight the effects of hunger and malnutrition as
            they try and protect themselves from the coronavirus.
          </p>
          <p className="text-base text-center py-3">
            We are working hard to tailor our existing programmes so that we can
            protect even more lives from Covid-19 - thats why ove50% of our food
            distributions and sustainable agricultural projectwill also contain
            hygiene essential deliveries.{" "}
          </p>
          <p className="text-base text-center py-3">
            Donate now and help us feed those most in need!{" "}
          </p>
        </div> */}

      {/* Give a Gift that Grows */}
      {/* <div className="pt-16">
          <h2 className="text-teal-500 font-bold text-xl md:text-3xl text-center pb-4">
            Give a Gift that Grows
          </h2>
          <Image
            src={"/AppealNew/food/4.jpg"}
            alt=""
            width={700}
            height={700}
            className="h-full w-full"
          />
          <p className="text-base text-center pt-8 py-3">
            Change the lives of entire communities for generations to come by
            providing support through one of our sustainable food projects.
            Although we feed the hungry by providing meals and food packs in
            order to help relieve the immediate hunger, ultimately Penny Appeals
            objective is to establish long-term, sustainable food projects that
            reduce the dependency of hunger-struck countries on immediate food
            aid.
          </p>
          <p className="text-base text-center py-3">
            Our sustainable food projects include training sessions on growing a
            variety of crops, allocating responsibilities for growing and
            procuring vegetables, and selling the produce in local markets; all
            part of the means to improve the long-term health and economic
            security of thousands of families.
          </p>
        </div> */}
      {/* </div> */}
    </div>
  );
};
export default DonateSection;
