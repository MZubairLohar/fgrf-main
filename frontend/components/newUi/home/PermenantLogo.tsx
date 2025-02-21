"use client";
import Link from "next/link";
import { useDonationContext } from "../contextApi/donationContext";

const Fgrflogo = () => {
  const amountDonation = useDonationContext();
  const modal = amountDonation.donationModal;
  const setModal = amountDonation.setDonationModalHandler;
  return (
    <div className="relative z-50 ">
      <div className="flex flex-col gap-1 w-24 fixed bottom-5 right-5">
        <img
          src="./pLogo.png"
          alt=""
          className="z-50 w-10 ml-5 animate-bounce"
        />
        {/* <div className=" bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-2 py-0">
          <Link
            href={"/donation"}
            className="overflow-hidden relative group bg-white text-black p-1 z-50 text-xs "
          >
            <span className="absolute w-32 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-10 bg-[#19afaf] top-1/2 group-hover:h-60 group-hover:-translate-y-32 ease"></span>
            <span className="relative group-hover:text-white">Donate Now</span>
          </Link>
        </div> */}
        <Link
          href={"/donation"}
          onClick={() => setModal(!modal)}
          className="w-24 mx-auto relative group overflow-hidden rounded-md bg-gradient-to-t from-sky-800 via-green-200 to-sky-800 px-2"
        >
          <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative group overflow-hidden bg-white text-sky-900 font-extrabold p-0.5 text-xs">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#19afaf] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>

            <span className="relative group-hover:text-white">Donate now</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Fgrflogo;
