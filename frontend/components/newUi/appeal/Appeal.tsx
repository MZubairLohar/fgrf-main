"use client";
import Image from "next/image";
import Link from "next/link";
import AnimationTop from "../home/AnimationTop";
import { motion, useAnimation } from "framer-motion";
import AnimatedComponentLeft from "../home/galleryAnimation/AnimationLeft";
import AnimatedComponentRight from "../home/galleryAnimation/AnimationRight";

const AppealSection = () => {
  const appealList = [
    {
      link: "ramadan",
      img: "/Final/ramadan.png",
      title: "Ramadan 2024",
      desc: "Stand in solidarity with Palestinians in Gaza.",
    },
    {
      link: "zakat",
      img: "/Final/Zakat.png",
      title: "Zakat",
      desc: "Donate your Zakat with FGRF and give to those most in need.",
    },
    {
      link: "sadaqah",
      img: "/Final/Sadaqah.png",
      title: "Sadaqah",
      desc: "Donate your sadaqah online today to make a real difference for someone in need.",
    },
    {
      link: "palestine-emergency",
      img: "/Final/palestine.png",
      title: " Palestine Emergency",
      desc: "Stand in solidarity with Palestinians in Gaza.",
    },
    {
      link: "winter-emergency",
      img: "/Final/winter.png",
      title: "Winter Emergency",
      desc: "You could help save someone’s life during the harsh winter months.",
    },
    // { link: "palestine-emergency", img: "/donation/appeal/giveSahqah.jpg", title: "Sadaqah", desc: "Donate your sadaqah online today to make a real difference for someone in need." },
    {
      link: "food-box",
      img: "/Final/foodBox.png",
      title: "Food Box",
      para: "“Feed for the love of Allah” – Qur’an 76:8",
      desc: "Show your love and compassion by helping to feed our world!",
    },
    {
      link: "hand-pump-project",
      img: "/Final/handPump.png",
      title: "Hand Pump Project",
      para: "“Feed for the love of Allah” – Qur’an 76:8",
      desc: "Show your love and compassion by helping to feed our world!",
    },
    {
      link: "water-well-project",
      img: "/Final/waterwell.png",
      title: "Water well Project",
      para: "“Feed for the love of Allah” – Qur’an 76:8",
      desc: "Show your love and compassion by helping to feed our world!",
    },
    {
      link: "orphan",
      img: "/Final/Orphan.png",
      title: "Orphan Kind",
      desc: "Muhammad (pbuh) was an orphan. Help us to honour and care for orphans around the world.",
    },
    {
      link: "masjid-project",
      img: "/Final/masjid.png",
      title: "Masjid Project",
      desc: "Build a mosque in this world and build your place in Jannah.",
    },

    // { link: "palestine-emergency", img: "/donation/appeal/zakat100.jpg", title: "100% Zakat", desc: "Donate your Zakat with Penny appeal and give to those most in need." },
    // { link: "palestine-emergency", img: "/donation/appeal/afghanistanEmergencey.jpg", title: "Afghanistan Emergency Response", desc: "Help us continue to respond quickly when disaster strikes and save lives." },
    // { link: "palestine-emergency", img: "/donation/appeal/moroccoEarthQuick.jpg", title: "Morocco Earthquake Emergency", desc: "A devastating 6.8 magnitude earthquake has hit Morocco and stunned the world." },
    // { link: "palestine-emergency", img: "/donation/appeal/lebaFloodEmergency.jpg", title: "Libya Floods Emergency", desc: "10,000 missing after unprecedented flooding caused by Storm Daniel across eastern Libya." },
    // { link: "palestine-emergency", img: "/donation/appeal/emergencyResponse.jpg", title: "Emergency Response", desc: "Help us continue to respond quickly when disaster strikes and save lives." },
    // { link: "palestine-emergency", img: "/donation/appeal/turkeyandSeriya.jpg", title: "Turkey & Syria Earthquake Emergency", desc: "Thosands killed after deadly earthquakes hit Turkey." },

    // comments
    // {
    //   link: "yemen-crisis",
    //   img: "/donation/appeal/yemenEmergency.jpg",
    //   title: "Yemen Crisis",
    //   desc: "Yemen is facing the worst famine the world has seen in 100 years. Donate to help us fight famine now.",
    // },
    // {
    //   link: "fidya-or-kaffarah",
    //   img: "/donation/appeal/fidyakafarrah.jpg",
    //   title: " Fidya or Kaffarah",
    //   desc: "Pay your Fidya or Kaffarah if you missed or broke any fasts.",
    // },

    // { link: "palestine-emergency", img: "/donation/appeal/thirstRelief.jpg", title: " Thirst Relief", give: "Give water, give life!", desc: "Build a well in your name or that of a loved one." },
    // { link: "palestine-emergency", img: "/donation/appeal/hifz.jpg", title: " Hifz Orphan", desc: "Combine two of Islam’s greatest rewards. Help an orphan become Hafiz of the Holy Qur'an." },
    // { link: "palestine-emergency", img: "/donation/appeal/sadaqahJariha.jpg", title: " Sadaqah Jariyah", desc: "A blessed form of charity that offers us on-going rewards throughout our lives in this world, as well as in the Hereafter." },
    // { link: "palestine-emergency", img: "/donation/appeal/pakistanFloodEmergency.jpg", title: " Pakistan Emergency", desc: "Millions opeople have been affected by catastrophic monsoon floods." },
    // { link: "palestine-emergency", img: "/donation/appeal/lovepalestine.jpg", title: " Love Palestine", desc: "For just £1 a day, become a friend of Palestine!" },
    // { link: "palestine-emergency", img: "/donation/appeal/orpHandkind.jpg", title: " OrphanKind", desc: "Muhammad (pbuh) was an orphan. Help us to honour and care for orphans around the world." },
    // { link: "palestine-emergency", img: "/donation/appeal/mosqueProject.jpg", title: " The Mosque Project", desc: "Build a mosque in this world and build your palace in Jannah." },
    // { link: "palestine-emergency", img: "/donation/appeal/Qurabani2024.jpg", title: " Qurbani", desc: "Give your Qurbani for just £29 and provide fresh meat to those in need." },
    // { link: "palestine-emergency", img: "/donation/appeal/rebuildingPakistan.jpg", title: " Rebuilding Pakistan", desc: "Give the gift of hope to a family in desperate need and help us Rebuild Pakistan." },
    // { link: "palestine-emergency", img: "/donation/appeal/muharram.jpg", title: " Muharram", desc: "Build a well in the name of the Prophet's (saw) family." },
    // { link: "palestine-emergency", img: "/donation/appeal/fitrana.jpg", title: " Fitrana", desc: "Pay Fitrana Online with Penny Appeal. Donate £3.50 to the poor and needy today." },
    // { link: "palestine-emergency", img: "/donation/appeal/tanzanaiHospital.jpg", title: " Tanzania Cancer Hospital", desc: "We are immensely proud to be supporting Muhimbili National Hospital." },
    // { link: "palestine-emergency", img: "/donation/appeal/eastAfricaEmergency.jpg", title: " East Africa Emergency", desc: "One person is at risk of dying every 48 seconds." },
    // { link: "palestine-emergency", img: "/donation/appeal/bangaldeshAppeal.jpg", title: " Bangladesh Floods", desc: "The monsoon season brings heavy rain and floods, hundreds flee for safety. " },
    // { link: "palestine-emergency", img: "/donation/appeal/educationfirstthumbnail.jpg", title: " Education First", desc: "Give Sadaqah for generations to come. Help us open new schools so children can build brighter futures." },
    // { link: "palestine-emergency", img: "/donation/appeal/rebuildSeriya.jpg", title: " Rebuilding Syria", desc: "After over a decade of brutal war and persecution, an estimated 6.8 million Syrians have been made refugees. " },
    // { link: "palestine-emergency", img: "/donation/appeal/openyoureyes.jpg", title: " Open Your Eyes", desc: "Provide life-changing eye care for those who have avoidable blindness." },
    // { link: "palestine-emergency", img: "/donation/appeal/palestinDates.jpg", title: " Palestine dates", desc: "Our Tin Collection is inspired by some of the holiest Mosques of the Islamic world." },
    // { link: "palestine-emergency", img: "/donation/appeal/ukRainEmergency.jpg", title: " Ukraine Emergency", desc: " Ukraine Emergency" },
    // { link: "palestine-emergency", img: "/donation/appeal/afghanistanEmergencyukapeal.jpg", title: " Afghanistan UK", desc: "Support Afghan families with the help they need having left everything they own behind" },
    // { link: "palestine-emergency", img: "/donation/appeal/prayerbear.jpg", title: " Penny the Bear", desc: "Penny the Prayer Bear teaches children how to pray through playing and having fun!" },
    // { link: "palestine-emergency", img: "/donation/appeal/covidEmergency.jpg", title: " Global Coronavirus Emergency", desc: "The Coronavirus has impacted those already most vulnerable and in desperate need around the world.", donat: "Donate today and help save a life." },
    // { link: "palestine-emergency", img: "/donation/appeal/womenWelfer.jpg", title: " Women's Welfare", desc: "Transform lives forever by empowering women." },
    // { link: "palestine-emergency", img: "/donation/appeal/bookeasOpen.jpg", title: " The Penny Appeal Story", desc: "Small Change, Big Difference - The Penny Appeal Story" },
    // { link: "palestine-emergency", img: "/donation/appeal/fragilelives.jpg", title: " Fragile Lives", desc: "Provide lifesaving support for mothers and babies in Pakistan and Kenya. " },
    // { link: "palestine-emergency", img: "/donation/appeal/betterFuture.png", title: " Better Future", desc: "Act now and give a child a better tomorrow, today" },
    // { link: "palestine-emergency", img: "/donation/appeal/atHome.jpg", title: " Penny Appeal At Home", desc: "Help vulnerable people in the UK with Penny Appeal." },
    // { link: "palestine-emergency", img: "/donation/appeal/stormUnioceemergency.jpg", title: " Storm Eunice", desc: "The Most Devastating Storm in a Generation!" },
    // { link: "palestine-emergency", img: "/donation/appeal/aqiqa.jpg", title: " Aqiqa", desc: "Welcome your child to the world and donate your Aqiqa" },
    // { link: "palestine-emergency", img: "/donation/appeal/syria.jpg", title: " Syria Emergency", desc: "Help the people of Syria re-build their lives after 10 years of war." },
    // { link: "palestine-emergency", img: "/donation/appeal/forgotenChildren.jpg", title: " Forgotten Children", desc: "Be there for the children that the world has forgotten." },
    // { link: "palestine-emergency", img: "/donation/appeal/adoptgran.jpg", title: " Adopt a Gran", desc: "Give an elderly person all they need for health and happiness in later life." },
    // { link: "palestine-emergency", img: "/donation/appeal/lebanonemergency.jpg", title: " Lebanon Emergency", desc: "A catastrophic explosion rocked the Lebanese capital of Beirut, leaving over 20dead and thousands injured." },
    // { link: "palestine-emergency", img: "/donation/appeal/indonesiaemergency.jpg", title: " Indonesia Emergency", desc: "A 6.2 magnitude earthquake rocked West Sulawesi, Indonesia on January 15" },
    // { link: "palestine-emergency", img: "/donation/appeal/giftaid.jpg", title: " Support Our Work", desc: "Donate to support our work and share the reward for all that we do." },
    // { link: "palestine-emergency", img: "/donation/appeal/helpstopHunger.jpg", title: " Holiday Hunger", desc: "3 million children in the UK will suffer from Holiday Hunger during the holidays - help us, help them today!" },
  ];

  return (
    <div className="py-16">
      <div className="flex flex-col items-center max-w-[400px] mx-auto px-3 mb-10">
        <AnimationTop>
          <motion.div
            whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              id="box3d"
              className="border-4 border-[#85d0d0]  w-44 md:w-80 py-1 md:py-3 bg-[#6898b1]  flex justify-center group mx-auto rounded-full shadow-lg"
            >
              <span
                id=""
                className="text-xl md:text-3xl group-hover:text-sky-800 font-bold text-white "
              >
                Our Appeals
              </span>
            </div>
          </motion.div>
        </AnimationTop>
      </div>

      {/* <div className="flex justify-center"> */}
      <div className="flex flex-wrap justify-center gap-5 md:gap-3  lg:gap-6 px-5">
        {appealList.slice(0, 4).map((appeal, index) => (
          <AnimatedComponentLeft key={index}>
            <div
              key={index}
              className="p-2 w-72 rounded-md bg-[#19afaf] hover:shadow-lg"
            >
              <Link
                href={`appeal/${appeal.link}`}
                className="group flex flex-col gap-2 justify-start"
              >
                <div className="zoom-on-hover">
                  <img
                    src={appeal.img}
                    alt=""
                    width={600}
                    height={600}
                    className="h-64 w-full scale-x-150"
                  />
                </div>
                <h3 className="text-center text-lg bg-white text-gray-600 mx-2 py-2 font-semibold">
                  {appeal.title}
                </h3>
                {/* <p className="text-center text-base">{appeal.desc}</p> */}
              </Link>
            </div>
          </AnimatedComponentLeft>
        ))}
        {appealList.slice(4, 8).map((appeal, index) => (
          <AnimatedComponentRight key={index}>
            <div
              key={index}
              className="p-2 w-72  rounded-md bg-[#19afaf] hover:shadow-lg"
            >
              <Link
                href={`appeal/${appeal.link}`}
                className="group flex flex-col gap-2 justify-start"
              >
                <div className="zoom-on-hover">
                  <img
                    src={appeal.img}
                    alt=""
                    width={600}
                    height={600}
                    className="h-64 w-full scale-x-150"
                  />
                </div>
                <h3 className="text-center text-lg bg-white text-gray-600 mx-2 py-2 font-semibold">
                  {appeal.title}
                </h3>
                {/* <p className="text-center text-base">{appeal.desc}</p> */}
              </Link>
            </div>
          </AnimatedComponentRight>
        ))}
        {appealList.slice(8, 10).map((appeal, index) => (
          <AnimatedComponentLeft key={index}>
            <div
              key={index}
              className="p-2 w-72 rounded-md bg-[#19afaf] hover:shadow-lg "
            >
              <Link
                href={`appeal/${appeal.link}`}
                className="group flex flex-col gap-2 justify-start"
              >
                <div className="zoom-on-hover">
                  <img
                    src={appeal.img}
                    alt=""
                    width={600}
                    height={600}
                    className="h-64 w-full scale-x-150"
                  />
                </div>
                <h3 className="text-center text-lg bg-white text-gray-600 mx-2 py-2 font-semibold">
                  {appeal.title}
                </h3>
                {/* <p className="text-center text-base">{appeal.desc}</p> */}
              </Link>
            </div>
          </AnimatedComponentLeft>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};
export default AppealSection;
