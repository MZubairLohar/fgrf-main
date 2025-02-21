"use client";
import { useContentContext } from "../../contextApi/contentContext";
import { DonationSectionPage } from "../../donation/donation";

export default function WinterDonation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Winter Emergency Donation" === title.content.sec
  );
  const img = foodBoxData[0]?.content?.photo || "/AppealNew/winter/8.png";
  const title = foodBoxData[0]?.content?.sec || "Winter Emergency Donation";
  const desc =
    foodBoxData[0]?.content?.text ||
    `Allah will fulfil the needs
Our beloved Rasool صلی اللہ علیہ وسلم  has said, ‘He who fulfils the need of any
person, Allah will fulfil his needs in the religion and the
world.’ (Sahih Muslim, Kitab-uz-Zikr wad-Du’a, pp. 1447, Hadees 2699)`;

  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
