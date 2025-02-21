"use client";
import { useEffect, useState } from "react";
import { DashboardContext } from "./dashboardContext";

export default function DashboardProvider({ children }: { children: any }) {
  const [mainSection, setMainSection] = useState("");
  const checkFunc = () => {
    let userimg = localStorage.getItem("Auth-admin");
    const user = userimg ? JSON.parse(userimg) : null;
    const Email = user?.email;
    const userPassword = user?.password;
    if (
      Email === process.env.NEXT_PUBLIC_USER_EMAIL &&
      userPassword === process.env.NEXT_PUBLIC_USER_PASSWORD
    ) {
      return false;
    } else {
      return true;
    }
  };
  const [loggedIn, setLoggedIn] = useState(checkFunc);
  const [midSection, setMidSection] = useState("");
  const [childSection, setChildSection] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem("Auth-admin");
      if (!userData) {
        setLoggedIn(false);
        return;
      }

      const user = JSON.parse(userData);
      const admins = [
        {
          email: process.env.NEXT_PUBLIC_USER_EMAIL,
          password: process.env.NEXT_PUBLIC_USER_PASSWORD,
          role: "admin",
        },
        {
          email: process.env.NEXT_PUBLIC_USER1_EMAIL,
          password: process.env.NEXT_PUBLIC_USER1_PASSWORD,
          role: "admin1",
        },
      ];

      const validAdmin = admins.find(
        (admin) =>
          admin.email === user.email && admin.password === user.password
      );

      if (validAdmin) {
        setLoggedIn(true);
        setUserEmail(user.email);
      } else {
        setLoggedIn(false);
        localStorage.removeItem("Auth-admin"); // Remove invalid session
      }
    };

    checkAuth();
  }, [loggedIn]); // Run every time `loggedIn` changes

  const setMainSectionHandler = (title: any) => {
    setMainSection(title);
  };
  const setMidSectionHandler = (title: any) => {
    setMidSection(title);
  };
  const setChildSectionHandler = (title: any) => {
    setChildSection(title);
  };
  const setAuthHandler = (bol: any) => {
    // setLoggedIn(bol);
    setTimeout(() => {
      let userimg = localStorage.getItem("Auth-admin");
      const user = userimg ? JSON.parse(userimg) : null;
      const userEmail = user?.email;
      const userPassword = user?.password;
      if (
        userEmail === process.env.NEXT_PUBLIC_USER_EMAIL &&
        userPassword === process.env.NEXT_PUBLIC_USER_PASSWORD
      ) {
        setLoggedIn(bol);
      } else {
        // setLoggedIn(bol);
      }
    }, 3000);
  };
  const setImageHandler = (bol: any) => {
    setUserImage(bol);
  };
  const setEmailHandler = (bol: any) => {
    setUserEmail(bol);
  };
  return (
    <DashboardContext.Provider
      value={{
        mainSection: mainSection,
        loggedIn: loggedIn,
        midSection: midSection,
        childSection: childSection,
        userEmail: userEmail,
        userImage: userImage,
        setMainSectionHandler,
        setMidSectionHandler,
        setChildSectionHandler,
        setAuthHandler,
        setImageHandler,
        setEmailHandler,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
