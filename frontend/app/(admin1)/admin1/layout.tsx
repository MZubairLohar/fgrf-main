"use client";
// import "./globals.css";
// import "./data-tables-css.css";
// import "./satoshi.css";
import { useState, useEffect } from "react";
// import Sidebar from "@/components/newUi/dashboard/sidebar";
import Loader from "@/components/newUi/dashboard/components/common/Loader";
import Header from "@/components/newUi/dashboard/components/Header";
import Sidebar1 from "@/components/newUi/dashboard/components/Sidebar1";
import DashboardProvider from "@/components/newUi/contextApi/dashboardProvider";
import AuthForm from "@/components/newUi/dashboard/components/authModal";
import ContentProvider from "@/components/newUi/contextApi/contentProvider";
import Sidebar from "@/components/newUi/dashboard/sidebar1";
import About from "../../(routes)/(user)/about/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="bg-gray-200">
          {loading ? (
            <Loader />
          ) : (
            <ContentProvider>
              <DashboardProvider>
                <AuthForm />

                <div className="flex h-screen overflow-hidden">
                  <Sidebar1
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />

                  <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    />
                    <main>
                      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                        {children}
                        <h1 className="text-center text-5xl font-extrabold text-[#075985]">
                          About US
                        </h1>
                        <About />
                      </div>
                    </main>
                  </div>
                </div>
              </DashboardProvider>
            </ContentProvider>
          )}
        </div>
      </body>
    </html>
  );
}
