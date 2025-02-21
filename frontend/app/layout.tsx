'use client'
import type { Metadata } from "next";
import "./globals.css";
import { useEffect, useState } from "react";
import { getVisitorCount, logVisitorAndCount } from "@/components/newUi/config/firebaseUtils";
import VisitorStatsCard from "@/components/newUi/dashboard/visitorCard/VisitorStatsCard";
import Head from "next/head";

<Head>
  <title>FGRF | Faizan Global Relief Foundation UK</title>
  <meta
    name="description"
    content="FGRF | Faizan Global Relief Foundation UK"
  />
</Head>;

// export const metadata: Metadata = {
//   title: "FGRF | Faizan Global Relief Foundation UK",
// hee
//   description: "FGRF | Faizan Global Relief Foundation UK",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    // Increment visitor count when the layout is mounted
    logVisitorAndCount();

    // Fetch and set the visitor count
    const fetchVisitorCount = async () => {
      const count = await getVisitorCount();
      setVisitorCount(count);
    };

    fetchVisitorCount();
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Main Layout Content */}
        {children}
        
      </body>
    </html>
  );
}
