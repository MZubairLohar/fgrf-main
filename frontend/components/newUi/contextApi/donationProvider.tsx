"use client";
import { useEffect, useState } from "react";
import { DonationContext } from "./donationContext";

export default function DonationProvider({ children }: { children: any }) {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationTitle, setDonationTitle] = useState("");
  const [donationModal, setDonationModal] = useState(false);

  const setDonationAmountHandler = (data: any) => {
    setDonationAmount(data);
  };
  const setDonationTitleHandler = (data: any) => {
    setDonationTitle(data);
  };
  const setDonationModalHandler = (bol: any) => {
    setDonationModal(bol);
  };
  return (
    <DonationContext.Provider
      value={{
        donationAmount: donationAmount,
        donationTitle: donationTitle,
        donationModal: donationModal,
        setDonationModalHandler,
        setDonationAmountHandler,
        setDonationTitleHandler,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
}
