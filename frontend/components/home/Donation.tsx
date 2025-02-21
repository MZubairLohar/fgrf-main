import { useEffect, useState } from 'react';
import OurProject from './OurProject';
import DonationSlider from './donationSlider';

const Donation = () => {
  // State to track the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll events
  const handleScroll = () => {
    // Update the scroll position in the state
    setScrollPosition(window.scrollY);
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the darkness level based on the scroll position
  const darknessLevel = Math.min((scrollPosition - 1500) / 200, 1);
  const bgDarknessLevel = Math.max(0, darknessLevel);

  // Style object for dynamic background color
  const divStyle = {
    backgroundColor: `rgba(0, 0, 0, ${bgDarknessLevel})`,
  };
  return (
    <>
      <div
        className="max-w-[1200px] mx-auto px-2 flex flex-col items-center "
        id="modalStart"
      >
        <div className="mb-6 px-6 py-1 border-4 border-[#faf8f8] shadow-xl bg-[#efeff1] rounded-full">
          <h2 className="sm:text-3xl text-3xl font-semibold text-center">
            Donation
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center lg:gap-x-10 gap-y-4">
          <div className="col-span-1 bg-gray-200 rounded-lg border-[8px] border-gray-100 h-[420px] shadow-md">
            {/* <div className="flex flex-col items-center justify-center h-full gap-y-4 px-2">
              <h2 className="text-[#477d94] text-2xl font-bold text-center">
                We Work in Different countries
              </h2>
              <p className="text-sm leading-relaxed text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                velit suscipit in temporibus. Explicabo quam iusto dolorem,
                natus cumque distinctio voluptate alias illum repellat dicta
                eligendi omnis esse nesciunt commodi.
              </p>
              <div className="bg-yellow-300 text-center py-1 rounded-full w-60">
                Donate with PayPal
              </div>
              <div className="border border-[#477d94] text-center py-1 rounded-full w-60">
                Donate with Debit
              </div>
            </div> */}

            <DonationSlider />
            {/* <img
              src="./img/a water well.png"
              className="w-full h-full"
              alt=""
            /> */}
          </div>
          <div className="col-span-1 relative bg-center bg-no-repeat bg-cover flex justify-center items-center md:h-[420px] h-[320px]"></div>
          <div className="col-span-1 py-7 border-4 my-6 px-5 border-t-[#faf8f8] border-r-[#faf8f8] border-l-[#faf8f8] shadow-2xl bg-gradient-to-t from-[#faf8f8] to-[#e1e2e6] rounded-3xl">
            <div className="flex flex-col items-center justify-between h-full gap-y-4 px-2">
              <h2 className="text-sm font-bold text-center">
                We Work in Different countries
              </h2>
              <p className="md:text-xl text-base  font-semibold leading-relaxed text-center">
                FGRF is a need of era, having its vast network spread having its
                vast network is more than thirteen countries and huge human
                resource availability makes it distinguished among other
                organizations
              </p>
              <button className="text-center text-sm border-4 border-gray-200 border-b-gray-100 shadow-2xl bg-gradient-to-t from-[#faf8f8] to-[#e1e2e6] rounded-full w-40 outline-none">
                Donate with
                <br />
                PayPal
              </button>
            </div>
          </div>
        </div>
      </div>
      <OurProject />
      <div id="modalEnd" className="scrollable-div h-[120vh] relative z-[-4]" >
      </div>
    </>
  );
};

export default Donation;
