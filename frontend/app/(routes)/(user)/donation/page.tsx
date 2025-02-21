import { DonationSectionPage } from "@/components/newUi/donation/donation";
const img = "";
const title = "";
const desc = "";
export default function Donation() {
  return (
    <div className="bg-white shadow-inner ">
      <div className="max-w-5xl mx-auto"></div>
      <DonationSectionPage image={img} title={title} desc={desc} />
    </div>
  );
}
