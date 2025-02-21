"use client";
import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/components/newUi/config/firebase";
import { title } from "process";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
// WeekPicker
const weekPickerData = () => {
  const today = new Date();
  const currentDay = today.getDay();
  const startOfCurrentWeek = new Date(today);
  startOfCurrentWeek.setDate(today.getDate() - currentDay);
  startOfCurrentWeek.setHours(0, 0, 0, 0);
  const startOfLastWeek = new Date(startOfCurrentWeek);
  startOfLastWeek.setDate(startOfCurrentWeek.getDate() - 7);
  const endOfLastWeek = new Date(startOfLastWeek);
  endOfLastWeek.setDate(startOfLastWeek.getDate() + 6);

  return {
    start: startOfLastWeek,
    end: endOfLastWeek,
  };
};
const lastWeek = weekPickerData();
console.log(`Start of last week: ${lastWeek.start.toDateString()}`);
console.log(`End of last week: ${lastWeek.end.toDateString()}`);
function getCurrentWeek() {
  const today = new Date();
  const currentDay = today.getDay();
  const startOfCurrentWeek = new Date(today);
  startOfCurrentWeek.setDate(today.getDate() - currentDay);
  startOfCurrentWeek.setHours(0, 0, 0, 0);
  const endOfCurrentWeek = new Date(startOfCurrentWeek);
  endOfCurrentWeek.setDate(startOfCurrentWeek.getDate() + 6);
  return {
    start: startOfCurrentWeek,
    end: endOfCurrentWeek,
  };
}
const currentWeek = getCurrentWeek();
let currentWeekArr = [];
let currentWeekData =
  +currentWeek.start.toDateString().slice(8, 11) <=
  +currentWeek.end.toDateString().slice(8, 11);
if (currentWeekData)
  currentWeekArr.push(+currentWeek.start.toDateString().slice(8, 11));
if (
  +currentWeek.start.toDateString().slice(8, 11) + 6 ===
  +currentWeek.end.toDateString().slice(8, 11)
)
  currentWeekArr.push(
    +currentWeek.end.toDateString().slice(8, 11) - 5,
    +currentWeek.end.toDateString().slice(8, 11) - 4,
    +currentWeek.end.toDateString().slice(8, 11) - 3,
    +currentWeek.end.toDateString().slice(8, 11) - 2,
    +currentWeek.end.toDateString().slice(8, 11) - 1,
    +currentWeek.end.toDateString().slice(8, 11)
  );
console.log("currentWeekArr==========>", currentWeekArr);

const options: ApexOptions = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    // events: {
    //   beforeMount: (chart) => {
    //     chart.windowResizeHandler();
    //   },
    // },
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["S", "M", "T", "W", "T", "F", "S"],
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}
const lastsundayData: any = [];
const lastmondayData: any = [];
const lasttuesdayData: any = [];
const lastwednesdayData: any = [];
const lastthursdayData: any = [];
const lastfridayData: any = [];
const lastsaturdayData: any = [];
const thissundayData: any = [];
const thismondayData: any = [];
const thistuesdayData: any = [];
const thiswednesdayData: any = [];
const thisthursdayData: any = [];
const thisfridayData: any = [];
const thissaturdayData: any = [];

const thisWeekData: any = [];
const lastWeekData: any = [];

const ChartTwo: React.FC = () => {
  const [content, setContent] = useState<any>([]);
  const [reclaimDatas, sertReclaimDatas] = useState<any>([]);
  let totalReclaimGifts: any;
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
      // const filterData = data.filter((item: any) => item.status === "publish");
      totalReclaimGifts = data4.length;
      sertReclaimDatas(totalReclaimGifts);
      // console.log("totalReclaimGifts------------<", totalReclaimGifts);
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
  const calculateMonth = (val: any) => {
    let month;
    if (val === "Jan") {
      month = "01";
    } else if (val === "Feb") {
      month = "02";
    } else if (val === "Mar") {
      month = "03";
    } else if (val === "Apr") {
      month = "04";
    } else if (val === "May") {
      month = "05";
    } else if (val === "Jun") {
      month = "06";
    } else if (val === "Jul") {
      month = "07";
    } else if (val === "Aug") {
      month = "08";
    } else if (val === "Sep") {
      month = "09";
    } else if (val === "Oct") {
      month = "10";
    } else if (val === "Nov") {
      month = "11";
    } else if (val === "Dec") {
      month = "12";
    }
    return month;
  };
  let totalDonations;
  let totalDonation1;
  let totalDonation2;
  let totalDonation3;
  let donationData1: any = [];
  let donationData2: any = [];
  let donationData3: any = [];
  totalDonation1 = content[0]?.map((data: any) =>
    donationData1.push(data.userData.date?.split(",")[0])
  );
  totalDonation2 = content[1]?.map((data: any) =>
    donationData2.push(data.userData.date?.split(",")[0])
  );
  totalDonation3 = content[2]?.map((data: any) =>
    donationData3.push(data.userData.date?.split(",")[0])
  );
  totalDonations = [...donationData1, ...donationData2, ...donationData3];
  // console.log(
  //   "----currnetMont--->",
  //   currentWeek.start.toDateString().slice(4, 7)
  // );
  // this weeek
  totalDonations.map((date: any) => {
    if (
      +date?.split("/")[0] === +currentWeek.start.toDateString().slice(8, 11) &&
      date?.split("/")[1] ===
        calculateMonth(currentWeek.start.toDateString().slice(4, 7))
    ) {
      thissundayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] ===
        +currentWeek.end.toDateString().slice(8, 11) - 5 &&
      date?.split("/")[1] ===
        calculateMonth(currentWeek.start.toDateString().slice(4, 7))
    ) {
      thismondayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] ===
        +currentWeek.end.toDateString().slice(8, 11) - 4 &&
      date?.split("/")[1] ===
        calculateMonth(currentWeek.start.toDateString().slice(4, 7))
    ) {
      thistuesdayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] ===
        +currentWeek.end.toDateString().slice(8, 11) - 3 &&
      date?.split("/")[1] ===
        calculateMonth(currentWeek.start.toDateString().slice(4, 7))
    ) {
      thiswednesdayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] ===
        +currentWeek.end.toDateString().slice(8, 11) - 2 &&
      date?.split("/")[1] ===
        calculateMonth(currentWeek.start.toDateString().slice(4, 7))
    ) {
      thisthursdayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] ===
        +currentWeek.end.toDateString().slice(8, 11) - 1 &&
      date?.split("/")[1] ===
        calculateMonth(currentWeek.start.toDateString().slice(4, 7))
    ) {
      thisfridayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] === +currentWeek.end.toDateString().slice(8, 11) &&
      date?.split("/")[1] === currentWeek.start.toDateString().slice(4, 7)
    ) {
      thissaturdayData.push(+date?.split("/")[0]);
    }
  });
  // last weeek
  totalDonations.map((date: any) => {
    if (
      +date?.split("/")[0] === +lastWeek.start.toDateString().slice(8, 11) &&
      date?.split("/")[1] ===
        calculateMonth(lastWeek.start.toDateString().slice(4, 7))
    ) {
      lastsundayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] === +lastWeek.end.toDateString().slice(8, 11) - 5 &&
      date?.split("/")[1] ===
        calculateMonth(lastWeek.start.toDateString().slice(4, 7))
    ) {
      lastmondayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] === +lastWeek.end.toDateString().slice(8, 11) - 4 &&
      date?.split("/")[1] ===
        calculateMonth(lastWeek.start.toDateString().slice(4, 7))
    ) {
      lasttuesdayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] === +lastWeek.end.toDateString().slice(8, 11) - 3 &&
      date?.split("/")[1] ===
        calculateMonth(lastWeek.start.toDateString().slice(4, 7))
    ) {
      lastwednesdayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] === +lastWeek.end.toDateString().slice(8, 11) - 2 &&
      date?.split("/")[1] ===
        calculateMonth(lastWeek.start.toDateString().slice(4, 7))
    ) {
      lastthursdayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] === +lastWeek.end.toDateString().slice(8, 11) - 1 &&
      date?.split("/")[1] ===
        calculateMonth(lastWeek.start.toDateString().slice(4, 7))
    ) {
      lastfridayData.push(+date?.split("/")[0]);
    } else if (
      +date?.split("/")[0] === +lastWeek.end.toDateString().slice(8, 11) &&
      date?.split("/")[1] === lastWeek.start.toDateString().slice(4, 7)
    ) {
      lastsaturdayData.push(+date?.split("/")[0]);
    }
  });
  console.log("lastsundayData========>", lastsundayData);
  console.log("lastmondayData========>", lastmondayData);
  console.log("lasttuesdayData========>", lasttuesdayData);
  console.log("lastwednesdayData========>", lastwednesdayData);
  console.log("lastthursdayData========>", lastthursdayData);
  console.log("lastfridayData========>", lastfridayData);
  console.log("lastsaturdayData========>", lastsaturdayData);
  const thisWeekDataAllData = [
    thissundayData.length,
    thismondayData.length,
    thistuesdayData.length,
    thiswednesdayData.length,
    thisthursdayData.length,
    thisfridayData.length,
    thissaturdayData.length,
  ];
  const lastWeekDataAllData = [
    lastsundayData.length,
    lastmondayData.length,
    lasttuesdayData.length,
    lastwednesdayData.length,
    lastthursdayData.length,
    lastfridayData.length,
    lastsaturdayData.length,
  ];
  thisWeekData.push(thisWeekDataAllData && thisWeekDataAllData);
  lastWeekData.push(lastWeekDataAllData && lastWeekDataAllData);
  console.log("thisWeekData------>", thisWeekData);
  console.log("lastWeekData------>", lastWeekData);
  const [weekendData, setWeekendData] = useState<any>({
    mydata: thisWeekData?.[1],
    title: "thisWeekData",
  });
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: "Donations",
        data: weekendData?.mydata,
      },
      {
        name: "Users",
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-6 shadow-default xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black ">
            Donations
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name=""
              id=""
              onChange={() =>
                setWeekendData(
                  weekendData?.title === "thisWeekData"
                    ? { mydata: thisWeekData?.[1], title: "thisWeekData" }
                    : { mydata: lastWeekData?.[1], title: "lastWeekData" }
                )
              }
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="">This Week</option>
              <option value="">Last Week</option>
            </select>
            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill="#637381"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ApexCharts
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;

// "use client";
// import { ApexOptions } from "apexcharts";
// import React, { useState } from "react";
// import dynamic from "next/dynamic";
// const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

// const options: ApexOptions = {
//   colors: ["#3C50E0", "#80CAEE"],
//   chart: {
//     // events: {
//     //   beforeMount: (chart) => {
//     //     chart.windowResizeHandler();
//     //   },
//     // },
//     fontFamily: "Satoshi, sans-serif",
//     type: "bar",
//     height: 335,
//     stacked: true,
//     toolbar: {
//       show: false,
//     },
//     zoom: {
//       enabled: false,
//     },
//   },

//   responsive: [
//     {
//       breakpoint: 1536,
//       options: {
//         plotOptions: {
//           bar: {
//             borderRadius: 0,
//             columnWidth: "25%",
//           },
//         },
//       },
//     },
//   ],
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       borderRadius: 0,
//       columnWidth: "25%",
//       borderRadiusApplication: "end",
//       borderRadiusWhenStacked: "last",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },

//   xaxis: {
//     categories: ["M", "T", "W", "T", "F", "S", "S"],
//   },
//   legend: {
//     position: "top",
//     horizontalAlign: "left",
//     fontFamily: "Satoshi",
//     fontWeight: 500,
//     fontSize: "14px",

//     markers: {
//       radius: 99,
//     },
//   },
//   fill: {
//     opacity: 1,
//   },
// };

// interface ChartTwoState {
//   series: {
//     name: string;
//     data: number[];
//   }[];
// }

// const ChartTwo: React.FC = () => {
//   const [state, setState] = useState<ChartTwoState>({
//     series: [
//       {
//         name: "Sales",
//         data: [44, 55, 41, 67, 22, 43, 65],
//       },
//       {
//         name: "Revenue",
//         data: [13, 23, 20, 8, 13, 27, 15],
//       },
//     ],
//   });

//   const handleReset = () => {
//     setState((prevState) => ({
//       ...prevState,
//     }));
//   };
//   handleReset;

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white p-6 shadow-default xl:col-span-4">
//       <div className="mb-4 justify-between gap-4 sm:flex">
//         <div>
//           <h4 className="text-xl font-semibold text-black ">
//             Donation this week
//           </h4>
//         </div>
//         <div>
//           <div className="relative z-20 inline-block">
//             <select
//               name=""
//               id=""
//               className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
//             >
//               <option value="">This Week</option>
//               <option value="">Last Week</option>
//             </select>
//             <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
//               <svg
//                 width="10"
//                 height="6"
//                 viewBox="0 0 10 6"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
//                   fill="#637381"
//                 />
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
//                   fill="#637381"
//                 />
//               </svg>
//             </span>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div id="chartTwo" className="-ml-5 -mb-9">
//           <ApexCharts
//             options={options}
//             series={state.series}
//             type="bar"
//             height={350}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChartTwo;
