"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import Link from "next/link";
import { useDonationContext } from "../contextApi/donationContext";

interface DonationModalProps {}

const DonationModal: React.FC<DonationModalProps> = ({}) => {
  const [detailForm, setDetailForm] = useState(false);
  const cancelButtonRef = useRef(null);
  const emailRef = useRef<any>();
  const lastNameRef = useRef<any>();
  const fistNameRef = useRef<any>();
  const modalAccess = useDonationContext();
  const modal = modalAccess.donationModal;
  const setModal = modalAccess.setDonationModalHandler;

  //   const submitHandler = (e: any) => {
  //     e.preventDefault();
  //     const email = emailRef.current.value;
  //     const password = passwordRef.current.value;
  //     if (signUp && signUpHandler !== undefined) {
  //       const conformPassword = conformPasswordRef.current.value;
  //       signUpHandler(email, password, conformPassword);
  //     }

  //     if (signIn && signInHandler !== undefined) {
  //       signInHandler(email, password);
  //     }
  //   };

  return (
    <Transition.Root show={modal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-green backdrop-blur-[2px] bg-opacity-30 bg-blend-multiply  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex my-16  items-end justify-center p-4 sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0  sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative lg:w-[600px] transform rounded-l  shadow-xl transition-all">
                <div className="flex w-full h-full flex-col justify-center bg-lightGreen text-black">
                  <div className="sm:mx-auto sm:w-full border p-5 border-green rounded-xl bg-gray-200 border-2 border-teal-500">
                    <form className="space-y-6">
                      <div className="flex justify-between">
                        <h2 className=" text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
                          Select Payment Method
                        </h2>
                        <div
                          onClick={() => setModal(!modal)}
                          className="bg-teal-700 p-2 rounded-lg cursor-pointer h-[35px]"
                        >
                          <RxCross1 className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <hr className="h-[2px] bg-teal-500 w-full" />
                      <h2 className=" text-xl font-bold leading-3 tracking-tight text-gray-900 ">
                        Personal Info
                      </h2>
                      <hr className="h-[2px] bg-teal-500 w-full" />
                      <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="first_name"
                            ref={fistNameRef}
                            autoComplete="FistName"
                            placeholder="Fist Name"
                            className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="last_name"
                            ref={lastNameRef}
                            autoComplete="LastName"
                            placeholder="Last Name"
                            className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                            required
                          />
                        </div>
                        <div className="col-span-2">
                          <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Email Address
                          </label>
                          <input
                            type="text"
                            id="last_name"
                            ref={emailRef}
                            className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                            autoComplete="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      <p>Plus an additional £0.96 to cover gateway fees.</p>
                      <div>
                        <h3 className="text-gray-900 font-bold text-xl">
                          Credit Card Info
                        </h3>
                        <hr className="h-[2px] bg-teal-500 w-full" />
                        <p>This is a secure SSL encrypted payment.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-5">
                          <div>
                            <label
                              htmlFor=" CardNumber"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Card Number *
                            </label>
                            <input
                              type="text"
                              id=" CardNumber"
                              ref={fistNameRef}
                              autoComplete="FistName"
                              placeholder="Card Number"
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="CVC"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              CVC *
                            </label>
                            <input
                              type="text"
                              id="CVC"
                              ref={lastNameRef}
                              autoComplete="LastName"
                              placeholder="
CVC"
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="CardholderName"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Cardholder Name *
                            </label>
                            <input
                              type="text"
                              id="CardholderName"
                              ref={emailRef}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                              autoComplete="email"
                              placeholder="Cardholder Name"
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="last_name"
                              className="block mb-2 text-sm font-medium text-gray-900"
                            >
                              Expiration *
                            </label>
                            <input
                              type="text"
                              id="last_name"
                              ref={emailRef}
                              className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                              autoComplete="email"
                              placeholder="Expiration"
                              required
                            />
                          </div>
                        </div>
                        <p className="text-gray-900 font-bold lg:font-extrabold text-lg lg:text-xl">
                          Reclaim Gift Aid
                        </p>
                        <hr className="h-[2px] bg-teal-500 w-full" />
                        <div>
                          <p className="py-4">
                            Add 25% more to your donation at no cost to you. A
                            Gift Aid declaration allows FGRF UK to claim tax
                            back on eligible donations. It means that for every
                            £1 you donate to FGRF UK we can claim back 25p, at
                            no extra cost to you.
                          </p>
                        </div>
                        <div>
                          <p className="text-base text-gray-900 py-3    ">
                            Tell me more »
                          </p>
                          <div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                className="w-4 h-4"
                                onChange={() => setDetailForm(!detailForm)}
                              />
                              <span className="text-base pl-2">
                                Yes, I would like to claim Gift Aid
                              </span>
                            </div>
                            <p className="text-sm py-3">
                              By ticking the &#34;Yes&#34; box, I agree I would
                              like FGRF UK to reclaim the tax on all qualifying
                              donations I have made, as well as any future
                              donations, until I notify them otherwise. I
                              understand that if I pay less Income Tax and/or
                              Capital Gains Tax than the amount of Gift Aid
                              claimed on all my donations in that tax year I may
                              be asked to pay any difference. I understand that
                              FGRF UK will reclaim 25p of tax on every £1 that I
                              give.
                            </p>
                          </div>
                          {detailForm && (
                            <form>
                              <div className="grid gap-6 mb-6 grid-cols-1">
                                <div>
                                  <label
                                    htmlFor="address1"
                                    className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                                  >
                                    Country *
                                  </label>
                                  <select className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5">
                                    <option>United kingdom</option>
                                  </select>
                                </div>
                                <div>
                                  <label
                                    htmlFor="address1"
                                    className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                                  >
                                    Address 1 *
                                  </label>
                                  <input
                                    type="text"
                                    id="address1"
                                    className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                                    placeholder="Address line 1"
                                    required
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor="address2"
                                    className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                                  >
                                    Address 2
                                  </label>
                                  <input
                                    type="text"
                                    id="address2"
                                    className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                                    placeholder="Address line 2"
                                    required
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor="city"
                                    className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                                  >
                                    City *
                                  </label>
                                  <input
                                    type="text"
                                    id="city"
                                    className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                                    placeholder="City"
                                    required
                                  />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                  <div>
                                    <label
                                      htmlFor="country"
                                      className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                                    >
                                      Country *
                                    </label>
                                    <input
                                      type="text"
                                      id="country"
                                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                                      placeholder="Country"
                                      required
                                    />
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="PostalCode "
                                      className="block mb-2 text-sm md:text-lg font-medium text-gray-900"
                                    >
                                      Postal Code *
                                    </label>
                                    <input
                                      type="text"
                                      id="PostalCode "
                                      className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:ring-2 focus:outline-none block w-full p-2.5"
                                      placeholder="Postal Code "
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>
                          )}
                          <div className="grid grid-cols-1 md:grid-cols-2 py-3">
                            <h2 className="bg-teal-500 p-2 rounded-l-lg text-center font-semibold text-lg text-white">
                              Donation Total :
                            </h2>
                            <h2 className="bg-white rounded-r-lg text-center border-2 border-teal-500 p-2 font-semibold text-lg text-gray-900">
                              80.52
                            </h2>
                          </div>
                          <p className="">
                            £50.00 donation plus £0.96 to help cover fees
                          </p>
                        </div>
                      </div>
                      <button className="focus:outline-none border-2 border-teal-500 rounded-lg p-3">
                        Donate Now
                      </button>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DonationModal;
