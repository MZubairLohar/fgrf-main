"use client";
import { useContentContext } from "../../contextApi/contentContext";
import { DonationSectionPage } from "../../donation/donation";

export default function MasjidDonation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Masjid Donation" === title.content.sec
  );
  const img = foodBoxData[0]?.content?.photo || "/AppealNew/masjid/1.jpg";
  const title = foodBoxData[0]?.content?.sec || "Masjid Donation";
  const desc =
    foodBoxData[0]?.content?.text ||
    `The holy prophet صَّلى اللُه َتَعاَلى َعَلْيِه وآلہ وسلم has said : The one who builds a Masjid for the
pleasure of Allah Almighty; Allah Almighty would build a house for him in paradise. (Sahih
Muslim)
The holy prophet صَّلى اللُه َتَعاَلى َعَلْيِه وآلہ وسلم has said: “whoever builds a masjid for the sake of
Allah Almighty ‘whether it is small or large’ Allah Almighty builds a house for him in paradise.
(Sunan Tirmizi)`;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
