"use client";
import { useContentContext } from "../../contextApi/contentContext";
import { DonationSectionPage } from "../../donation/donation";

export default function WaterWellDonation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Water Well Donation" === title.content.sec
  );
  const img = foodBoxData[0]?.content?.photo || "/AppealNew/waterWell/1.jpg";
  const title = foodBoxData[0]?.content?.sec || "Water Well Donation";
  const desc =
    foodBoxData[0]?.content?.text ||
    `Hadrat Sayyidunā Sa'd bin 'Ubadah رضی اللہ عنہ asked, "Ya Rasūlullah َصَّلى اللُه َتَعاَلى َعَلْيِه وآلہ وسلم ! My mother has passed away (I want to give some Şadaqah (charity) on behalf of
her), which Şadaqah would be the best for her?" The Holy Prophet صَّلى اللُه َتَعاَلى َعَلْيِه وآلہ وسلم 
replied, 'Water.' So, Sayyiduna Sa'd رضى الله عنه got a well dug and said, "This is for Sa'd's
mother." (Sunan Abū Davod Sharif, V2, P53, Hadis 1681, Dar-ul-Fikr Beirut)`;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
