import type { Metadata } from "next";
import "../../../app/globals.css";

// import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/newUi/navBar/Navbar";
import Footer from "@/components/newUi/Footer/Footer";
import Fgrflogo from "@/components/newUi/home/PermenantLogo";
import DonationProvider from "@/components/newUi/contextApi/donationProvider";
import DonationModal from "@/components/newUi/donation/donationModal";
import ContentProvider from "@/components/newUi/contextApi/contentProvider";
// import Navbar from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "FGRF | Faizan Global Relief Foundation UK",
  description: "FGRF | Faizan Global Relief Foundation UK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DonationProvider>
          <ContentProvider>
            <Navbar />
            {/* <DonationModal /> */}
            {/* myCode */}
            {/* <Navbar /> */}
            <div>
              <Fgrflogo />
            </div>
            {children}
            <Footer />
          </ContentProvider>
        </DonationProvider>
      </body>
    </html>
  );
}
