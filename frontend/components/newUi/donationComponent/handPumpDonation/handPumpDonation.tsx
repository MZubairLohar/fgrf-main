"use client";
import { useContentContext } from "../../contextApi/contentContext";
import { DonationSectionPage } from "../../donation/donation";

export default function HandPumpDonation() {
  const contentContext = useContentContext();
  const data = contentContext.content;
  const foodBoxData = data.filter(
    (title: any) => "Hand Pump Donation" === title.content.sec
  );
  const img = foodBoxData[0]?.content?.photo || "/AppealNew/handPump/3.jpg";
  const title = foodBoxData[0]?.content?.sec || "hHand Pump Donation";
  const desc =
    foodBoxData[0]?.content?.text ||
    `Thanks to your unwavering dedication and generosity,we've accomplished extraordinary feats in our mission to provide clean, life-giving water to those in need.Through sheer determination and collective effort, we've triumphed in constructing an astounding 5000 wells and water systems across regions plagued by thirst and hardship.These wells aren't just sources of water; they're beacons of hope, symbols of resilience, and catalysts for change. `;
  // const img = ;
  // const title = ;
  // const desc =
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
