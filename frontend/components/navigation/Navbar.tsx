"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NavModal from "../modal/NavbarModal";

export default function Navbar() {
  const pathName = usePathname();
  const [getValue, setGetValue] = useState("Our Partners");
  const handleClick = (event: any) => {
    const clickedVal = event.target.textContent;
    setGetValue(clickedVal);
  };

  const [open, setOpen] = useState(false);
  const navItem = [
    {
      name: "Our Partners",
      href: "/",
    },
    {
      name: "Achievement",
      href: "/achievements",
    },
    {
      name: "Our Department",
      href: "",
    },
    {
      name: "Project",
      href: "",
    },
    {
      name: "CEO Message",
      href: "",
    },
  ];
  return (
    <>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 lg:w-full w-[95%] ">
        <div
          style={{ backgroundImage: `url(./img/new-img/Button-06.png)` }}
          className="relative rounded-xl flex items-center justify-between md:mx-auto max-w-4xl px-3 lg:px-10 h-14 w-full bg-no-repeat bg-cover bg-center"
        >
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start h-full">
            <div className="flex-shrink-0 flex items-center p-1 rounded-lg">
              <Link href="/">
                <img
                  className="w-12 lg:block md:block cursor-pointer"
                  src="/img/fgrf.png"
                  alt="tokenLauncher"
                />
              </Link>
              <div></div>
            </div>
            <div className="hidden h-full absolute inset-y-0 right-0 lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="h-full">
                <div
                  className={`flex items-center font-raleway-font text-black h-full gap-x-2`}
                >
                  {navItem.map((data, index) => (
                    <div
                      onClick={handleClick}
                      className={`w-28 rounded-full h-9 border-4 border-[#faf8f8] shadow-inner bg-[#efeff1] flex justify-center items-center ${pathName == data.href && "bg-sky-300 bg-opacity-25"
                        }`}
                      key={index}
                    >
                      <Link
                        href={data.href}
                        className="cursor-pointer hover:text-light-blue py-2 rounded-md lg:text-xs xl:text-sm font-semibold"
                      >
                        <div className="text-xs">{data.name}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-32 w-28 font-bold h-10 border-4 border-[#faf8f8] shadow-inner bg-[#efeff1] hidden text-black rounded-full lg:flex lg:justify-center lg:gap-2 lg:items-center lg:text-xs xl:text-sm">
            Donation
          </div>
          <div className="lg:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 text-black`}
              onClick={() => setOpen(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div className="w-full lg:block hidden h-16 -mt-2">
          <div
            style={{ backgroundImage: `url(./img/new-img/VUyGCc.png)` }}
            className="max-w-2xl mx-auto h-full bg-no-repeat bg-center bg-contain flex items-center"
          >
            <form
              className="max-w-2xl mx-auto gap-x-16 w-full flex justify-around"
              action=""
              method="post"
            >
              <div className="flex gap-x-5 items-center">
                <div className="w-32 h-8 bg-[#edeef0] shadow-inner border-4 border-[#faf9f9] rounded-md flex justify-center items-center">
                  <span className="hover:text-light-blue rounded-md lg:text-xs xl:text-xs font-semibold text-black">
                    DONATE TO FUND
                  </span>
                </div>
                <div className="w-36 h-8 bg-[#edeef0] shadow-inner border-4 border-[#faf9f9] rounded-md flex justify-center items-center">
                  <span className="w-8 h-8 hover:text-light-blue px-3 py-2 rounded-md lg:text-xs xl:text-xs font-semibold text-black">
                    <strong>&#163;</strong>
                  </span>
                  <div className="w-28 h-8 bg-[#edeef0] shadow-inner border-4 border-[#faf9f9] rounded-md flex justify-around items-center">
                    <div>
                      <input
                        type="number"
                        id="small-input"
                        placeholder="Amount"
                        className="block w-full p-2 text-gray-900 bg-transparent sm:text-xs outline-none focus:border-transparent focus:ring-0 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="w-28 h-8 bg-[#edeef0] shadow-inner border-4 border-[#faf9f9] rounded flex justify-around items-center">
                  <select
                    id="countries"
                    className="bg-transparent rounded-lg text-gray-900 text-sm block w-full p-2.5 peer outline-none"
                    required
                  >
                    <option value="single">Single</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                <div className="w-32 h-8 bg-[#edeef0] shadow-inner border-4 border-[#faf9f9] rounded flex justify-center items-center">
                  <button className="cursor-pointer hover:text-light-blue px-3 py-2 rounded-md lg:text-xs xl:text-xs text-black font-extrabold">
                    DONATE NOW
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <NavModal open={open} setOpen={setOpen} />
    </>
  );
}


