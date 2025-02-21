"use client";
import { useContentContext } from "../../contextApi/contentContext";
import { DonationSectionPage } from "../../donation/donation";

export default function ZakatDonation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Zakat Donation" === title.content.sec
  );
  const img = foodBoxData[0]?.content?.photo || "/AppealNew/Zakat/zakat4.jpeg";
  const title = foodBoxData[0]?.content?.sec || "Zakat Donation";
  const desc =
    foodBoxData[0]?.content?.text ||
    `Zakat is one of the five pillars of Islam and it is an obligatory act.  The meaning of Zakat is “to purify”.  In essence, Zakat is purity or to purify.  To purify our own wealth all Muslims are obliged to pay a portion of their wealth.Zakat is an obligation upon any Muslim who has reached puberty, is sane and has had more than the minimum required amount of wealth (Nisaab) for one year. Please use our Zakat Calculator below to work out your Zakat.`;

  ("");
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
