"use client";
import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/components/newUi/config/firebase";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
let Sep: any = [[], []];
let Oct: any = [[], []];
let Nov: any = [[], []];
let Dec: any = [[], []];
let Jan: any = [[], []];
let Feb: any = [[], []];
let Mar: any = [[], []];
let Apr: any = [[], []];
let May: any = [[], []];
let Jun: any = [[], []];
let Jul: any = [[], []];
let Aug: any = [[], []];
const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    // events: {
    //   beforeMount: (chart) => {
    //     chart.windowResizeHandler();
    //   },
    // },
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 1000,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [content, setContent] = useState<any>([]);
  const getDataFromFirestore = async () => {
    try {
      const collectionRef = collection(db, "userAppealDonation");
      const collectionRef2 = collection(db, "userDonation");
      const collectionRef3 = collection(db, "userQuickDonation");
      const collectionRef4 = collection(db, "userReclaimGifts");
      const querySnapshot = await getDocs(collectionRef);
      const querySnapshot2 = await getDocs(collectionRef2);
      const querySnapshot3 = await getDocs(collectionRef3);
      const querySnapshot4 = await getDocs(collectionRef4);
      const data: any = [];
      const data2: any = [];
      const data3: any = [];
      const data4: any = [];

      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      querySnapshot2.forEach((doc) => {
        data2.push({ id: doc.id, ...doc.data() });
      });
      querySnapshot3.forEach((doc) => {
        data3.push({ id: doc.id, ...doc.data() });
      });
      querySnapshot4.forEach((doc) => {
        data4.push({ id: doc.id, ...doc.data() });
      });

      return [data, data2, data3, data4];
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
      return [];
    }
  };
  useEffect(() => {
    getDataFromFirestore().then((result: any) => {
      setContent(result);
    });
  }, []);

  let allDates: any = [];
  let dates = content.map((data: any) =>
    data.map((d: any) =>
      d.userData?.date?.split(",")[0] !== undefined
        ? d.userData?.date?.split(",")[0]
        : null
    )
  );
  let datesReclaim = content[3]?.map((data: any) =>
    data.date?.split(",")[0] !== undefined ? data?.date?.split(",")[0] : null
  );
  allDates = dates[0] + dates[1] + dates[2];
  let monthsData =
    allDates && allDates?.split(",").map((d: any) => d.split("/")[1]);
  let reclaimGiftData =
    datesReclaim &&
    datesReclaim?.map((d: any) =>
      d?.split("/")[1] !== undefined ? d?.split("/")[1] : null
    );

  reclaimGiftData &&
    reclaimGiftData?.map((data: any) =>
      data === "09" || data === "9"
        ? Sep[1].push(data)
        : data === "10"
        ? Oct[1].push(data)
        : data === "11"
        ? Nov[1].push(data)
        : data === "12"
        ? Dec[1].push(data)
        : data === "08" || data === "8"
        ? Aug[1].push(data)
        : data === "06" || data === "6"
        ? Jun[1].push(data)
        : data === "05" || data === "5"
        ? May[1].push(data)
        : data === "04" || data === "4"
        ? Apr[1].push(data)
        : data === "03" || data === "3"
        ? Mar[1].push(data)
        : data === "02" || data === "2"
        ? Feb[1].push(data)
        : data === "01" || data === "1"
        ? Jan[1].push(data)
        : null
    );
  monthsData &&
    monthsData?.map((data: any) =>
      data === "09" || data === "9"
        ? Sep[0].push(data)
        : data === "10"
        ? Oct[0].push(data)
        : data === "11"
        ? Nov[0].push(data)
        : data === "12"
        ? Dec[0].push(data)
        : data === "08" || data === "8"
        ? Aug[0].push(data)
        : data === "06" || data === "6"
        ? Jun[0].push(data)
        : data === "05" || data === "5"
        ? May[0].push(data)
        : data === "04" || data === "4"
        ? Apr[0].push(data)
        : data === "03" || data === "3"
        ? Mar[0].push(data)
        : data === "02" || data === "2"
        ? Feb[0].push(data)
        : data === "01" || data === "1"
        ? Jan[0].push(data)
        : null
    );

  let userData = {
    name: "User Donates",
    data: [
      Sep[0].length,
      Oct[0].length,
      Nov[0].length,
      Dec[0].length,
      Jan[0].length,
      Feb[0].length,
      Mar[0].length,
      Apr[0].length,
      May[0].length,
      Jun[0].length,
      Jul[0].length,
      Aug[0].length,
    ],
  };
  let reclaim = {
    name: "ReclaimGifts",
    data: [
      Sep[1].length,
      Oct[1].length,
      Nov[1].length,
      Dec[1].length,
      Jan[1].length,
      Feb[1].length,
      Mar[1].length,
      Apr[1].length,
      May[1].length,
      Jun[1].length,
      Jul[1].length,
      Aug[1].length,
    ],
  };

  // const [state, setState] = useState<ChartOneState>({
  let series = [userData, reclaim];

  // NextJS Requirement
  const isWindowAvailable = () => typeof window !== "undefined";

  if (!isWindowAvailable()) return <></>;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-6 pb-5 shadow-default  sm:px-6 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full  gap-3 sm:gap-5">
          <div className="flex ">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-[16px] items-center justify-center rounded-full border border-primary">
              <span className="block h-2 w-full max-w-[9px] rounded-full bg-teal-500"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-teal-500">Total ReclaimGifts</p>
            </div>
          </div>
          <div className="flex ">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-[16px] items-center justify-center rounded-full border border-primary">
              <span className="block h-2 w-full max-w-[9px] rounded-full bg-indigo-600"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-indigo-600">
                Total User Donates
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5 h-[355px] w-[105%]">
          {Sep[0].length > 9 ? (
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              width="100%"
              height="100%"
            />
          ) : (
            <p>loading-------</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartOne;

// "use client";
// import { ApexOptions } from "apexcharts";
// import React, { useState } from "react";
// import dynamic from "next/dynamic";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

// const options: ApexOptions = {
//   legend: {
//     show: false,
//     position: "top",
//     horizontalAlign: "left",
//   },
//   colors: ["#3C50E0", "#80CAEE"],
//   chart: {
//     // events: {
//     //   beforeMount: (chart) => {
//     //     chart.windowResizeHandler();
//     //   },
//     // },
//     fontFamily: "Satoshi, sans-serif",
//     height: 335,
//     type: "area",
//     dropShadow: {
//       enabled: true,
//       color: "#623CEA14",
//       top: 10,
//       blur: 4,
//       left: 0,
//       opacity: 0.1,
//     },

//     toolbar: {
//       show: false,
//     },
//   },
//   responsive: [
//     {
//       breakpoint: 1024,
//       options: {
//         chart: {
//           height: 300,
//         },
//       },
//     },
//     {
//       breakpoint: 1366,
//       options: {
//         chart: {
//           height: 350,
//         },
//       },
//     },
//   ],
//   stroke: {
//     width: [2, 2],
//     curve: "straight",
//   },
//   // labels: {
//   //   show: false,
//   //   position: "top",
//   // },
//   grid: {
//     xaxis: {
//       lines: {
//         show: true,
//       },
//     },
//     yaxis: {
//       lines: {
//         show: true,
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   markers: {
//     size: 4,
//     colors: "#fff",
//     strokeColors: ["#3056D3", "#80CAEE"],
//     strokeWidth: 3,
//     strokeOpacity: 0.9,
//     strokeDashArray: 0,
//     fillOpacity: 1,
//     discrete: [],
//     hover: {
//       size: undefined,
//       sizeOffset: 5,
//     },
//   },
//   xaxis: {
//     type: "category",
//     categories: [
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//     ],
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     title: {
//       style: {
//         fontSize: "0px",
//       },
//     },
//     min: 0,
//     max: 100,
//   },
// };

// interface ChartOneState {
//   series: {
//     name: string;
//     data: number[];
//   }[];
// }

// const ChartOne: React.FC = () => {
//   const [state, setState] = useState<ChartOneState>({
//     series: [
//       {
//         name: "Product One",
//         data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
//       },

//       {
//         name: "Product Two",
//         data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
//       },
//       {
//         name: "Product Three",
//         data: [30, 25, 36, 10, 45, 35, 43, 52, 59, 37, 19, 51],
//       },
//     ],
//   });

//   const handleReset = () => {
//     setState((prevState) => ({
//       ...prevState,
//     }));
//   };

//   handleReset;

//   // NextJS Requirement
//   const isWindowAvailable = () => typeof window !== "undefined";

//   if (!isWindowAvailable()) return <></>;

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-6 pb-5 shadow-default  sm:px-6 xl:col-span-8">
//       <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
//         <div className="flex w-full  gap-3 sm:gap-5">
//           <div className="flex min-w-72">
//             <span className="mt-1 mr-2 flex h-4 w-full max-w-[16px] items-center justify-center rounded-full border border-primary">
//               <span className="block h-2 w-full max-w-[9px] rounded-full bg-teal-500"></span>
//             </span>
//             <div className=" w-full">
//               <p className="font-semibold text-teal-500">Total Revenue</p>
//               <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
//             </div>
//           </div>
//           <div className="flex min-w-72">
//             <span className="mt-1 mr-2 flex h-4 w-full max-w-[16px] items-center justify-center rounded-full border border-primary">
//               <span className="block h-2 w-full max-w-[9px] rounded-full bg-indigo-600"></span>
//             </span>
//             <div className="w-full">
//               <p className="font-semibold text-indigo-600">Total Donations</p>
//               <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full max-w-44 justify-end">
//           <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
//             <button className="rounded  py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card">
//               Day
//             </button>
//             <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card">
//               Week
//             </button>
//             <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card">
//               Month
//             </button>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div id="chartOne" className="-ml-5 h-[355px] w-[105%]">
//           <ReactApexChart
//             options={options}
//             series={state.series}
//             type="area"
//             width="100%"
//             height="100%"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChartOne;
