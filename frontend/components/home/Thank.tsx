import React from "react";

const Thank = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-20">
      <div className="grid grid-cols-2 items-center">
        <div className="col-span-1">
          <div className="grid grid-cols-4 items-center gap-x-4">
            <div className="col-span-1">
              <img
                src="https://www.qgiv.com/_resources/images/icon-awards-lux.svg"
                className="w-full"
                alt=""
              />
            </div>
            <div className="col-span-3 text-[24px] text-[#394146]">
              Thank you to our clients and industry experts for recognizing us!
              <span className="text-[#d38935]"> We are blushing.</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-3 gap-20">
          <div className="col-span-1">
            <img
              src="https://www.qgiv.com/_resources/images/badge-2022-front-runners-2x.png"
              className="w-full"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://www.qgiv.com/_resources/images/badge-g2-high-performer-2023-2x.png"
              className="w-full"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://www.qgiv.com/_resources/images/badge-capterra-shortlist-2022-2x.png"
              className="w-full"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://www.qgiv.com/_resources/images/badge-g2-leader-summer-2023-2x.png"
              className="w-full"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://www.qgiv.com/_resources/images/badge-g2-easiest-setup-2023-2x.png"
              className="w-full"
              alt=""
            />
          </div>
          <div className="col-span-1">
            <img
              src="https://www.qgiv.com/_resources/images/badge-2022-bronze-stevie-winner-2x.png"
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thank;
