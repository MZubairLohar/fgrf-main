// import AppealSection from "@/components/donationApeal/Appeal";

import AppealSection from "@/components/newUi/appeal/Appeal";

export default function Appeal() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat bg-blend-multiply"
      style={{
        backgroundImage: `url("./finalIconAssets/Assest/Secondpage/bgasset.png")`,
        height: "100%",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <AppealSection />
      </div>
    </div>
  );
}
