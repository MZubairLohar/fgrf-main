import { GrFacebook } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-white">
      <div className="lg:max-w-[1000px] mx-auto px-3">
        <div className="lg:flex lg:flex-row flex flex-col lg:items-start lg:gap-y-0 gap-y-3 lg:justify-between lg:py-10 py-6">
          <div className="lg:flex lg:flex-row flex flex-col items-center gap-x-3 lg:items-center">
            <img
              src="https://fgrf.org/web_assets/images/fgrf/newLogo.png"
              className="w-16"
              alt=""
            />
            <p className="text-sm lg:text-left text-center">
              Faizan Global Relief Foundation UK 24 WITTON <br />
              ROAD,BIRMINGHAM B6 6NX, Birmingham, United Kingdom
            </p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-start mx-auto lg:gap-y-0 gap-y-4 md:my-0 my-4 gap-x-6 text-sm">
            <div className="bg-[#148698] flex items-center px-2 gap-3 py-1">
              <div>
                <div className="rounded-full bg-white border p-3">
                  <img
                    src="/img/icons/drop.png"
                    alt="Drop"
                    className="h-8 w-8"
                  />
                </div>
              </div>
              <div className="md:text-2xl text-lg text-white uppercase font-bold">
                <span className="font-extralight">Donate a</span>
                <br /> water well
              </div>
              <div className="bg-white p-2 text-yellow-500 md:text-xl text-base font-[900] rounded-md">
                <p className="flex items-center">
                  &#163; 300{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="md:w-5 md:h-5 w-4 h-4 text-yellow-500 font-extrabold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="flex lg:justify-normal justify-center gap-x-2 text-lg text-[#1eb1af]">
              <a href="https://www.facebook.com/profile.php?id=61550763330971">
                <GrFacebook />
              </a>
              {/* <BsLinkedin /> */}
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2FFGRF%2520UK%3Ffbclid%3DIwAR3uIvtDIUi6K1Gup4R9y6b1AaspToWqg5HOqhDuZTbfg1wjngAu0nZlCiQ&h=AT19ViF2wDZyIoPjKqzB5HXm0cZZHzdvuDqIL_tdCfr_1T_tnHbQCCv_CbC0XFJfIDx1H66wq5Pda5C79DoJUFwqR8R77yprEGLiTIV-4fyjZBNbmY3gteEtsSy9Go1QiOLi">
                <FaXTwitter />
              </a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2FFGRF%2520UK%3Ffbclid%3DIwAR2RqANRfDITwCoKxsivO8vTzi6dVcgL9T-XRafDVugFucxfA9SwGk3lpuw&h=AT2ZW-k7Iw2NqkBXGYQeBYseJnpB2qC-yvNjrUA9C-OKGOLt8hkiL_uI3HyYx-_NhgGIC0Ov8Z8tHy7xmmnHApt1x-tbEO5gNcMZLKHpuBKYwfLJKZu3EPymjWPQt_2n7mxh">
                <GrInstagram />
              </a>
              <BsYoutube />
            </div>
          </div>
        </div>
        <div className="bg-[#88c6d1] w-full h-1 rounded-full"></div>
        <div className="flex flex-wrap justify-center lg:gap-y-0 gap-y-2 gap-x-10 py-2 md:mt-0 mt- text-sm tracking-wider font-light">
          <h3>2023 FGRF.Inc</h3>
        </div>
      </div>
    </section>
  );
};

export default Footer;