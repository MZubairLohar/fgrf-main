"use client";
import { useContentContext } from "../../contextApi/contentContext";
import { DonationSectionPage } from "../../donation/donation";

export default function FoodBoxDonation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Food Box Donation" === title.content.sec
  );
  const img = foodBoxData[0]?.content?.photo || "/AppealNew/food/4.jpg";
  const title = foodBoxData[0]?.content?.sec || "Food Box Donation";
  const desc =
    foodBoxData[0]?.content?.text ||
    `It was asked from the final Messenger of Allah  صلی اللہ علیہ وسلم  which aspect of Islam is
better? \n He replied: that you provide food `;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
