"use client";
// import DonateSection from "@/components/donationApeal/feedOurWold/donatSection";
// import FeedOurWoldBannerSection from "@/components/donationApeal/feedOurWold/feedOurWoldBannerSection";
// import FidyaDocSection from "@/components/donationApeal/fidyaORkaffarah/fidyaDocSection";
// import FedyaKaffaraBannerSec from "@/components/donationApeal/fidyaORkaffarah/fidyakaffarahBannerSection";
// import GhazaUnderTakDocs from "@/components/donationApeal/palestineEmergency/gazaUnderTack";
// import PalestinBannerSection from "@/components/donationApeal/palestineEmergency/palestinBannerSection";
// import WinterEmergency from "@/components/donationApeal/winterEmergency/winterEmergency";
// import YemenAppeal from "@/components/donationApeal/yemenCrisis/YemenApppeal";
// import YemanCrisisBannerSection from "@/components/donationApeal/yemenCrisis/yemenCrisisBannerSection";

// import DonateSection from "@/components/newUi/appeal/foodBox/donatSection";
// import FeedOurWoldBannerSection from "@/components/newUi/appeal/foodBox/foodBoxBannerSection";
import FidyaDocSection from "@/components/newUi/appeal/fidyaORkaffarah/fidyaDocSection";
import FedyaKaffaraBannerSec from "@/components/newUi/appeal/fidyaORkaffarah/fidyakaffarahBannerSection";
// import HandPumpBannerSection from "@/components/newUi/appeal/handPump/handPumpBanner";
// import HandPumpDocs from "@/components/newUi/appeal/handPump/handPumpDoc";
// import MasjidBannerSection from "@/components/newUi/appeal/masjid/masjidBanner";
// import MasjidDocs from "@/components/newUi/appeal/masjid/masjidDoc";
// import OrphanBannerSection from "@/components/newUi/appeal/orphan/orphanBanner";
// import OrphanDocs from "@/components/newUi/appeal/orphan/orphanDoc";
import GhazaUnderTakDocs from "@/components/newUi/appeal/palestineEmergency/gazaUnderTack";
// import PalestinBannerSection from "@/components/newUi/appeal/palestineEmergency/palestinBannerSection";
import WinterEmergency from "@/components/newUi/appeal/winterEmergency/winterEmergency";
import YemenAppeal from "@/components/newUi/appeal/yemenCrisis/YemenApppeal";
import YemanCrisisBannerSection from "@/components/newUi/appeal/yemenCrisis/yemenCrisisBannerSection";
// import FoodBoxBannerSection from "@/components/newUi/appeal/foodBox/foodBoxBannerSection";
// import SadaqahBannerSection from "@/components/newUi/appeal/sadaqah/sadaqahBanner";
// import SadaqahDocs from "@/components/newUi/appeal/sadaqah/sadaqahDoc";
// import WaterWellBannerSection from "@/components/newUi/appeal/waterWell/waterWellBanner";
// import WaterWellDocs from "@/components/newUi/appeal/waterWell/waterWellDoc";
// import ZakatBannerSection from "@/components/newUi/appeal/zakat/zakatBanner";
// import ZakatDocs from "@/components/newUi/appeal/zakat/zakatlDoc";
// import RamadanBannerSection from "@/components/newUi/appeal/ramadan/ramdanBanner";
// import RamadanDocs from "@/components/newUi/appeal/ramadan/ramdanlDoc";
import WinterBannerSection from "@/components/newUi/appeal/newAppeals/winterEmergency/winterBannerSec";
import WinterDocs from "@/components/newUi/appeal/newAppeals/winterEmergency/winterDoc";
import PalestineBannerSection from "@/components/newUi/appeal/newAppeals/palestine/plestineBannerSec";
import PalestineDocs from "@/components/newUi/appeal/newAppeals/palestine/plestineDoc";
import ZakatBannerSection from "@/components/newUi/appeal/newAppeals/zakat/zakatBannerSec";
import ZakatDocs from "@/components/newUi/appeal/newAppeals/zakat/zakatDoc";
import SadaqahBannerSection from "@/components/newUi/appeal/newAppeals/sadaqah/sadaqahBannerSec";
import SadaqahDocs from "@/components/newUi/appeal/newAppeals/sadaqah/sadaqahDoc";
import FoodBoxBannerSection from "@/components/newUi/appeal/newAppeals/foodBox/foodBoxBannerSec";
import FoodBoxDocs from "@/components/newUi/appeal/newAppeals/foodBox/foodBoxDoc";
import HandPumpBannerSection from "@/components/newUi/appeal/newAppeals/handPump/handPumpBannerSec";
import HandPumpDocs from "@/components/newUi/appeal/newAppeals/handPump/handPumpDoc";
import WaterWellBannerSection from "@/components/newUi/appeal/newAppeals/waterWell/waterWellBannerSec";
import WaterWellDocs from "@/components/newUi/appeal/newAppeals/waterWell/waterWellDoc";
import OrphanBannerSection from "@/components/newUi/appeal/newAppeals/orphan/orphanBannerSec";
import OrphanDocs from "@/components/newUi/appeal/newAppeals/orphan/orphanDoc";
import MasjidBannerSection from "@/components/newUi/appeal/newAppeals/masjid/masjidBannerSec";
import MasjidDocs from "@/components/newUi/appeal/newAppeals/masjid/masjidDoc";
import RamadanBannerSection from "@/components/newUi/appeal/newAppeals/ramadan/ramadanBannerSec";
import RamadanDocs from "@/components/newUi/appeal/newAppeals/ramadan/ramadanDoc";
import ContentProvider from "@/components/newUi/contextApi/contentProvider";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";
import BannerSectionAppeal from "@/components/newUi/appeal/newAppeals/appeals/bannerSec";
import DocsAppeal from "@/components/newUi/appeal/newAppeals/appeals/doc";

export default function DonationAppeal({
  params,
}: {
  params: { slug: string };
}) {
  const myParams = params.slug;
  const contentContext = useContentContext();
  const data = contentContext.content;
  console.log("allDatacheckoer----->", data);
  let allData;
  if (
    myParams === "palestine-emergency" ||
    myParams === "food-box" ||
    myParams === "winter-emergency" ||
    myParams === "masjid-project" ||
    myParams === "hand-pump-project" ||
    myParams === "orphan" ||
    myParams === "sadaqah" ||
    myParams === "ramadan" ||
    myParams === "zakat" ||
    myParams === "water-well-project"
  ) {
    return (
      <div className=" bg-gray-200">
        {myParams === "palestine-emergency" ? (
          <div className="max-w-7xl mx-auto bg-gray-200">
            {/* <PalestinBannerSection />
          <GhazaUnderTakDocs /> */}
            <PalestineBannerSection />
            <PalestineDocs />
          </div>
        ) : myParams === "food-box" ? (
          <div className="max-w-7xl mx-auto bg-gray-200">
            {/* <DonateSection /> */}
            <FoodBoxBannerSection />
            <FoodBoxDocs />
          </div>
        ) : myParams === "winter-emergency" ? (
          <div className="max-w-7xl mx-auto bg-gray-200">
            {/* <WinterEmergency /> */}
            <WinterBannerSection />
            <WinterDocs />
          </div>
        ) : myParams === "masjid-project" ? (
          <div className="max-w-7xl mx-auto bg-gray-200">
            <MasjidBannerSection />
            <MasjidDocs />
          </div>
        ) : myParams === "hand-pump-project" ? (
          <div className="max-w-7xl mx-auto bg-gray-200">
            <HandPumpBannerSection />
            <HandPumpDocs />
          </div>
        ) : myParams === "orphan" ? (
          <div className="max-w-7xl mx-auto bg-gray-200">
            <OrphanBannerSection />
            <OrphanDocs />
          </div>
        ) : myParams === "sadaqah" ? (
          <div className="max-w-7xl mx-auto bg-gray-200">
            <SadaqahBannerSection />
            <SadaqahDocs />
          </div>
        ) : myParams === "ramadan" ? (
          <div className="max-w-7xl mx-auto bg-gray-200">
            <RamadanBannerSection />
            <RamadanDocs />
          </div>
        ) : myParams === "water-well-project" ? (
          <div className="max-w-7xl mx-auto bg-gray-200">
            <WaterWellBannerSection />
            <WaterWellDocs />
          </div>
        ) : myParams === "zakat" ? (
          <div className="max-w-7xl mx-auto bg-gray-200">
            <ZakatBannerSection />
            <ZakatDocs />
          </div>
        ) : null}
      </div>
    );
  } else {
    allData = data.filter(
      (title: any) =>
        myParams.toLocaleLowerCase().split("-").join(" ") === title.content.sec
    );
    const images = allData[0].content.photo;
    const sect = allData[0].content.sec;
    const slider = allData[0].content.slider;
    const text = allData[0].content.text;
    const video = allData[0].content.video;

    return (
      <div className=" bg-gray-200">
        <div className="max-w-7xl mx-auto bg-gray-200">
          <BannerSectionAppeal images={images} sec={sect} />
          <DocsAppeal slider={slider} text={text} video={video} />
        </div>
        ;
      </div>
    );
  }
}
