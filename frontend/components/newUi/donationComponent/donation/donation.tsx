"use client";
import { useContentContext } from "../../contextApi/contentContext";
import { DonationSectionPage } from "../../donation/donation";

export default function DonationSec({ allData }: { allData: any }) {
  const img = allData[0].content.photo;
  const title = allData[0].content.sec;
  const desc = allData[0].content.text;
  return (
    <div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
