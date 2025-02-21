"use client";
import { useContentContext } from "@/components/newUi/contextApi/contentContext";
import DonationSec from "@/components/newUi/donationComponent/donation/donation";
import FoodBoxDonation from "@/components/newUi/donationComponent/foodBoxDonation/foodBoxDonation";
import HandPumpDonation from "@/components/newUi/donationComponent/handPumpDonation/handPumpDonation";
import IftarDonation from "@/components/newUi/donationComponent/iftarDonation/iftarDonation";
import MasjidDonation from "@/components/newUi/donationComponent/masjidDonation/masjidDonation";
import OrphanDonation from "@/components/newUi/donationComponent/orphanDonation/orphanDonation";
import PalestineDonation from "@/components/newUi/donationComponent/palestine/palestineDonation";
import WaterWellDonation from "@/components/newUi/donationComponent/waterWellDonation/waterWellDonation";
import WinterDonation from "@/components/newUi/donationComponent/winterEmergency/winterEmergencyDonation";
import ZakatDonation from "@/components/newUi/donationComponent/zakatDonation/zakatDonation";

const Donation = ({ params }: { params: { slug: string } }) => {
  const donation = params.slug;
  const contentContext = useContentContext();
  const data = contentContext.content;
  let allData;
  if (
    donation === "iftar-donation" ||
    donation === "zakat-donation" ||
    donation === "food-box-donation" ||
    donation === "winter-emergency-donation" ||
    donation === "palestine-emergency-donation" ||
    donation === "orphan-donation" ||
    donation === "hand-pump-donation" ||
    donation === "water-well-donation" ||
    donation === "masjid-donation"
  ) {
    return (
      <div>
        {/* iftar */}
        {donation === "iftar-donation" ? (
          <div className="bg-gray-200">
            <IftarDonation />
          </div>
        ) : donation === "zakat-donation" ? (
          <div className="bg-gray-200">
            <ZakatDonation />
          </div>
        ) : donation === "food-box-donation" ? (
          <div className="bg-gray-200">
            <FoodBoxDonation />
          </div>
        ) : donation === "winter-emergency-donation" ? (
          <div className="bg-gray-200">
            <WinterDonation />
          </div>
        ) : donation === "palestine-emergency-donation" ? (
          <div className="bg-gray-200">
            <PalestineDonation />
          </div>
        ) : donation === "orphan-donation" ? (
          <div className="bg-gray-200">
            <OrphanDonation />
          </div>
        ) : donation === "hand-pump-donation" ? (
          <div className="bg-gray-200">
            <HandPumpDonation />
          </div>
        ) : donation === "water-well-donation" ? (
          <div className="bg-gray-200">
            <WaterWellDonation />
          </div>
        ) : (
          donation === "masjid-donation" && (
            <div className="bg-gray-200">
              <MasjidDonation />
            </div>
          )
        )}
      </div>
    );
  } else {
    allData = data.filter(
      (title: any) =>
        donation.toLocaleLowerCase().split("-").join(" ") === title.content.sec
    );

    return (
      <div className="bg-gray-200">
        <DonationSec allData={allData} />
      </div>
    );
  }
};
export default Donation;
