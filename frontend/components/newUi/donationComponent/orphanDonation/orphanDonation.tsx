"use client";
import { useContentContext } from "../../contextApi/contentContext";
import { DonationSectionPage } from "../../donation/donation";

export default function OrphanDonation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Orphan Donation" === title.content.sec
  );
  const img = foodBoxData[0]?.content?.photo || "/AppealNew/Orphan/4.jpeg";
  const title = foodBoxData[0]?.content?.sec || "Orphan Donation";
  const desc =
    foodBoxData[0]?.content?.text ||
    `This golden teaching of treating orphans with kindness is a definite way of 'improving human
life' and making every individual an honourable person of a society.`;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
