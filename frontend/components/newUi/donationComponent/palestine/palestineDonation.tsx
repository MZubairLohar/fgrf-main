"use client";
import { useContentContext } from "../../contextApi/contentContext";
import { DonationSectionPage } from "../../donation/donation";

export default function PalestineDonation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Palestine Emergency Donation" === title.content.sec
  );
  const img = foodBoxData[0]?.content?.photo || "/AppealNew/palestine/6.png";
  const title = foodBoxData[0]?.content?.sec || "Palestine Emergency Donation";
  const desc =
    foodBoxData[0]?.content?.text ||
    `Allah will remove trouble
 beloved Rasool صلی اللہ علیہ وآلہ وسلم has said ,
‘He who relieves the
worldly suffering of any Muslim, Allah will remove the trouble of the Day of Judgement from
him.’
(Sunan-ut-Tirmizi, Kitab-ul-Hudood, vol. 3, pp. 115) `;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
