"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDashboardContext } from "../../contextApi/dashboardContext";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const { setAuthHandler } = useDashboardContext();
  const [modalOpen, setModalOpen] = useState(true);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoader(true);

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
      (admin) => admin.email === email && admin.password === password
    );

    if (validAdmin) {
      localStorage.setItem(
        "Auth-admin",
        JSON.stringify({
          email: validAdmin.email,
          password: validAdmin.password,
          role: validAdmin.role,
        })
      );

      //  Ensure authentication state is set immediately
      setAuthHandler(true);

      //  Close modal after authentication state is updated
      setModalOpen(false);
      setLoader(false);

      //  Redirect to respective dashboard
      router.push(
        validAdmin.role === "admin" ? "/admin/dashboard" : "/admin1/dashboard"
      );
    } else {
      alert("Invalid email or password. Please try again.");
      setLoader(false);
    }
  };

  return (
    <Transition.Root show={modalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setModalOpen(false)}
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
          <div className="fixed inset-0 bg-green backdrop-blur-lg bg-opacity-30 bg-blend-multiply transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative md:w-[400px] transform rounded-lg bg-lightGreen shadow-xl transition-all sm:my-8 p-3">
                <div className="flex w-full h-full flex-col justify-center text-black">
                  <div className="sm:mx-auto sm:w-full sm:max-w-md border p-5 pb-10 border-green rounded-xl bg-teal-600">
                    <form onSubmit={submitHandler} className="space-y-6">
                      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Sign in to Your Account!
                      </h2>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        placeholder="email..."
                        required
                        className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
                      />

                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        placeholder="password"
                        required
                        className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
                      />

                      <button
                        type="submit"
                        disabled={loader}
                        className={`flex w-full mx-auto items-center gap-2 justify-center rounded-3xl px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm ${
                          loader
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-teal-400 hover:bg-teal-500"
                        }`}
                      >
                        {loader && (
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                        {loader ? "Signing in..." : "Sign in"}
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

export default AuthForm;
