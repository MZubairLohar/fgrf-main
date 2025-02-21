"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

export default function NavModal({ open, setOpen }: any) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md bg-white px-4 py-6">
                  <div className="flex justify-between">
                    <h2 className="text-3xl">
                      <img src="/img/fgrf.png" alt="FGRF" className="w-16" />
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => setOpen(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <ul className="mt-10 flex flex-col gap-y-6 items-center">
                    <li className="border-b pb-1">
                      <Link
                        onClick={() => setOpen(false)}
                        className="outline-none"
                        href="/"
                      >
                        Our Partners
                      </Link>
                    </li>
                    <li className="border-b pb-1">
                      <Link
                        onClick={() => setOpen(false)}
                        className="outline-none"
                        href="achievements"
                      >
                        Achievement
                      </Link>
                    </li>
                    <li className="border-b pb-1">
                      <Link
                        onClick={() => setOpen(false)}
                        className="outline-none"
                        href=""
                      >
                        Our Department
                      </Link>
                    </li>
                    <li className="border-b pb-1">
                      <Link
                        onClick={() => setOpen(false)}
                        className="outline-none"
                        href=""
                      >
                        Project
                      </Link>
                    </li>
                    <li className="border-b pb-1">
                      <Link
                        onClick={() => setOpen(false)}
                        className="outline-none"
                        href=""
                      >
                        CEO Message
                      </Link>
                    </li>
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
