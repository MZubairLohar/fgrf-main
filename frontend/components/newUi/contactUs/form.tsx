const ContactUsForm = () => {
  return (
    <div className="bg-gray-200 pb-8 px-2">
      <div className="relative max-w-7xl mx-auto bg-white pt-5 rounded-md">
        <h2 className=" text-lg md:2xl lg:text-3xl font-bold text-teal-500 text-center pb-4">
          Contact Form
        </h2>
        <hr className="bg-gray-300 h-[1px] w-full" />
        <div className="py-5">
          <form className="grid grid-cols-1 md:grid-cols-2 px-8 mx-auto gap-8 ">
            <div className="flex flex-col">
              <div className="mb-5">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 outline-none focus:ring-teal-500 focus:shadow-xl focus:border-teal-500 block w-full p-2.5 "
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 outline-none focus:ring-teal-500 focus:shadow-xl focus:border-teal-500 block w-full p-2.5 "
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="number"
                  placeholder="Telephone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 outline-none focus:ring-teal-500 focus:shadow-xl focus:border-teal-500 block w-full p-2.5 "
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 outline-none focus:ring-teal-500 focus:shadow-xl focus:border-teal-500 block w-full p-2.5 "
                  required
                />
              </div>
            </div>
            {/* <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 "
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button> */}
            <div className="flex flex-col gap-2">
              <textarea
                style={{
                  minHeight: 140,
                  maxHeight: 140,
                }}
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-1 outline-none focus:ring-teal-500 focus:shadow-xl focus:border-teal-500 "
                placeholder="Message"
              ></textarea>
              <p className="text-gray-400 text-sm">
                Would you like to add your details to our contact list so that
                we can keep you up to date with news about our fundraising?
              </p>
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      id="remember"
                      type="radio"
                      value="conform"
                      name="conform"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                      required
                    />
                    <span className="text-sm">Yes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      id="remember"
                      type="radio"
                      value="conform"
                      name="conform"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                      required
                    />
                    <span className="text-sm">NO</span>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="right-0 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
