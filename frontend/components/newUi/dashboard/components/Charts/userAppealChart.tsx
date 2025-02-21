// "use client";
// import React, { useEffect, useState } from "react";
// import { VectorMap } from "@react-jvectormap/core";
// import { usAea } from "@react-jvectormap/unitedstates";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/components/newUi/config/firebase";
// import { takeCoverage } from "v8";

// const UserAppealDonationChart = () => {
//   const [quickDonationData, setQuickDonationData] = useState<any>([]);
//   const [appealData, setAppealData] = useState<any>([]);

//   // new code start

//   // new code end

//   const getDataFromFireStoreAppealDonation = async () => {
//     try {
//       const collectionRef = collection(db, "userAppealDonation");
//       const querySnapshot = await getDocs(collectionRef);
//       const data: any = [];

//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       return data;
//     } catch (error) {
//       console.error("Error fetching data from Firestore:", error);
//       return [];
//     }
//   };
//   const getDataFromFireStoreQuickDonation = async () => {
//     try {
//       const collectionRef = collection(db, "userQuickDonation");
//       const querySnapshot = await getDocs(collectionRef);
//       const data: any = [];

//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       return data;
//     } catch (error) {
//       console.error("Error fetching data from Firestore:", error);
//       return [];
//     }
//   };
  // useEffect(() => {
  //   getDataFromFireStoreQuickDonation().then((result) => {
  //     setQuickDonationData(result);
  //   });
  //   getDataFromFireStoreAppealDonation().then((result) => {
  //     setAppealData(result);
  //   });
  // }, []);

  // function downloadFileAppealDonation(data: any) {
  //   let filterData = appealData.filter(
  //     (title: any) => data === title.userData.donationTitle
  //   );
  //   // Add header
  //   let csvData = "Donation Title" + "," + "Donation" + "," + "Date" + "\n";
  //   filterData = filterData.filter((data: any) =>
  //     data.userData.date ? data.userData.date.split(",")[0] == datePicker : null
  //   );
  //   // Add data
  //   filterData.forEach(function (row: any) {
  //     csvData +=
  //       row.userData.donationTitle +
  //       "," +
  //       row.userData.donation +
  //       "," +
  //       row.userData.date +
  //       "\n";
  //   });

  //   // Download the CSV file
  //   let anchor = document.createElement("a");
  //   anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
  //   anchor.target = "_blank";
  //   anchor.download = `${data}.csv`;
  //   anchor.click();
  // }
  // function downloadFileXLS(data: any) {
  //   let filterData = appealData.filter(
  //     (title: any) => data === title.userData.donationTitle
  //   );
  //   // // Add header
  //   let csvData =
  //     "First Name" +
  //     "," +
  //     "Contact No" +
  //     "," +
  //     "Donation" +
  //     "," +
  //     "Donation Title" +
  //     "," +
  //     "Email" +
  //     "," +
  //     "Date" +
  //     "\n";

  //   filterData = filterData.filter((data: any) =>
  //     data.userData.date ? data.userData.date.split(",")[0] == datePicker : null
  //   );
  //   filterData.forEach(function (row: any) {
  //     csvData +=
  //       row.userData.firstName +
  //       "," +
  //       row.userData.contactNo +
  //       "," +
  //       row.userData.donation +
  //       "," +
  //       row.userData.donationTitle +
  //       "," +
  //       row.userData.email +
  //       "," +
  //       row.userData.date +
  //       "\n";
  //   });

  //   // Download the CSV file
  //   let anchor = document.createElement("a");
  //   anchor.href = "data:text/xlsx," + encodeURI(csvData);
  //   anchor.target = "_blank";
  //   anchor.download = `${data}.xlsx`;
  //   anchor.click();
  // }
  // let datePicker: any;
  // const datePickerFunc = (e: any) => {
  //   datePicker = e.target.value;
  //   datePicker =
  //     datePicker.split("-")[2] +
  //     "/" +
  //     datePicker.split("-")[1] +
  //     "/" +
  //     datePicker.split("-")[0];
  //   console.log("date picker function is working", datePicker);
  // };

  // function downloadFileQuickDonation() {
  //   // Add header
  //   let csvData = "Donation Title" + "," + "Donation" + "," + "Date" + "\n";

  //   // Add data
  //   let arr: any = [];
  //   arr = quickDonationData.filter((data: any) =>
  //     data.userData.date ? data.userData.date.split(",")[0] == datePicker : null
  //   );
  //   arr.forEach(function (row: any) {
  //     csvData +=
  //       row.userData.donationTitle +
  //       "," +
  //       row.userData.donation +
  //       "," +
  //       row.userData.date +
  //       "\n";
  //   });
  //   // Download the CSV file
  //   let anchor = document.createElement("a");
  //   anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
  //   anchor.target = "_blank";
  //   anchor.download = "quickDonation.csv";
  //   anchor.click();
  // }
  // function downloadFileQuickDonationXlsxFile() {
  //   // Add header
  //   let csvData =
  //     "Email" +
  //     "," +
  //     "Address-1" +
  //     "," +
  //     "Address-2" +
  //     "," +
  //     "City" +
  //     "," +
  //     "Country" +
  //     "," +
  //     "Postal-Code" +
  //     "," +
  //     "Date" +
  //     "\n";
  //   let arr: any = [];
  //   arr = quickDonationData.filter((data: any) =>
  //     data.date ? data.date.split(",")[0] == datePicker : null
  //   );
  //   // Add data
  //   arr?.forEach(function (row: any) {
  //     csvData +=
  //       row.userData.email +
  //       "," +
  //       row.userData.address1 +
  //       "," +
  //       row.userData.address2 +
  //       "," +
  //       row.userData.city +
  //       "," +
  //       row.userData.country +
  //       "," +
  //       row.userData.postalCode +
  //       "," +
  //       row.date +
  //       "\n";
  //   });
  //   // Download the CSV file
  //   let anchor = document.createElement("a");
  //   anchor.href = "data:text/xlsx," + encodeURI(csvData);
  //   anchor.target = "_blank";
  //   anchor.download = "reclaimGifts.xlsx";
  //   anchor.click();
  // }


// new update start code 21/01/2024



"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/components/newUi/config/firebase";
import DatePicker from "react-datepicker"; 
import { parse, isValid } from "date-fns";

const UserAppealDonationChart = () => {
  const [quickDonationData, setQuickDonationData] = useState<any>([]);
  const [appealData, setAppealData] = useState<any>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  // Function to handle date changes
  const handleDateChange = (newStartDate: string, newEndDate: string) => {
    setStartDate(newStartDate); // Set the start date
    setEndDate(newEndDate); // Set the end date
    console.log("Start Date:", newStartDate); // Debug log
    console.log("End Date:", newEndDate); // Debug log
  };

  const getDataFromFireStoreAppealDonation = async () => {
    try {
      const collectionRef = collection(db, "userAppealDonation");
      const querySnapshot = await getDocs(collectionRef);
      const data: any = [];

      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
      return [];
    }
  };

  const getDataFromFireStoreQuickDonation = async () => {
    try {
      const collectionRef = collection(db, "userQuickDonation");
      const querySnapshot = await getDocs(collectionRef);
      const data: any = [];

      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
      return [];
    }
  };

  useEffect(() => {
    getDataFromFireStoreQuickDonation().then((result) => {
      setQuickDonationData(result);
    });
    getDataFromFireStoreAppealDonation().then((result) => {
      setAppealData(result);
    });
  }, []);

  const filterDataByDateRange = (data: any[], start: string, end: string) => {
    if (!start || !end) {
      console.log("No date range provided, returning all data.");
      return data; // Return all data if no date range is provided.
    }

  

    // Convert start and end dates to Date objects
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();

    // Debug: Check the parsed dates
    console.log(
      `Filtering data from ${new Date(startDate)} to ${new Date(endDate)}`
    );

    return data.filter((item) => {
      // Ensure the date in the item is parsed correctly
      const itemDate = item.userData?.date
        ? new Date(item.userData.date).getTime()
        : null;

      // Debug: Check item date
      console.log(
        `Checking item: ${item.userData?.date}, Parsed item date: ${itemDate}`
      );

      return itemDate && itemDate >= startDate && itemDate <= endDate;
    });
  };

  function downloadFileAppealDonation(donationTitle: string) {
    // Filter data by donation title and date range
    const filteredData = filterDataByDateRange(
      appealData.filter(
        (item: any) => item.userData.donationTitle === donationTitle
      ),
      startDate,
      endDate
    );

    // Check if filtered data exists
    if (filteredData.length === 0) {
      console.log(
        `No data found for the donation title "${donationTitle}" in the selected date range.`
      );
      return;
    }

    // Generate CSV data
    let csvData = "Donation Title,Donation,Date\n";
    filteredData.forEach((row: any) => {
      csvData += `${row.userData.donationTitle},${row.userData.donation},${row.userData.date}\n`;
    });

    // Download the file
    const anchor = document.createElement("a");
    anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
    anchor.target = "_blank";
    anchor.download = `${donationTitle}.csv`;
    anchor.click();
  }


  function downloadFileXLS(donationTitle: string) {
    // Filter data by donation title and date range
    const filteredData = filterDataByDateRange(
      appealData.filter(
        (item: any) => item.userData.donationTitle === donationTitle
      ),
      startDate,
      endDate
    );

    // Check if filtered data exists
    if (filteredData.length === 0) {
      console.log(
        `No data found for the donation title "${donationTitle}" in the selected date range.`
      );
      return;
    }

    // Generate CSV data
    let csvData = "First Name,Contact No,Donation,Donation Title,Email,Date\n";
    filteredData.forEach((row: any) => {
      csvData += `${row.userData.firstName},${row.userData.contactNo},${row.userData.donation},${row.userData.donationTitle},${row.userData.email},${row.userData.date}\n`;
    });

    // Download the file
    const anchor = document.createElement("a");
    anchor.href = "data:text/xlsx;charset=utf-8," + encodeURI(csvData);
    anchor.target = "_blank";
    anchor.download = `${donationTitle}.xlsx`;
    anchor.click();
  }

function downloadQuickDonationCSV() {
  // Filter data by date range
  const filteredData = filterDataByDateRange(
    quickDonationData,
    startDate,
    endDate
  );

  // Check if filtered data exists
  if (filteredData.length === 0) {
    console.log(
      `No data found in the selected date range for quick donations.`
    );
    return;
  }

  // Generate CSV data
  let csvData = "Donation Title,Donation,Date\n";
  filteredData.forEach((row: any) => {
    csvData += `${row.userData.donationTitle},${row.userData.donation},${row.userData.date}\n`;
  });

  // Download the file
  const anchor = document.createElement("a");
  anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
  anchor.target = "_blank";
  anchor.download = "quickDonation.csv";
  anchor.click();
}

function downloadQuickDonationXLS() {
  // Filter data by date range
  const filteredData = filterDataByDateRange(
    quickDonationData,
    startDate,
    endDate
  );

  // Check if filtered data exists
  if (filteredData.length === 0) {
    console.log(
      `No data found in the selected date range for quick donations.`
    );
    return;
  }

  // Generate CSV data for XLS
  let csvData = "Email,Address-1,Address-2,City,Country,Postal-Code,Date\n";
  filteredData.forEach((row: any) => {
    csvData += `${row.userData.email},${row.userData.address1},${row.userData.address2},${row.userData.city},${row.userData.country},${row.userData.postalCode},${row.userData.date}\n`;
  });

  // Download the file
  const anchor = document.createElement("a");
  anchor.href = "data:text/xlsx;charset=utf-8," + encodeURI(csvData);
  anchor.target = "_blank";
  anchor.download = "quickDonation.xlsx";
  anchor.click();
}




  // Function to handle date changes
  const handleStartDateChange = (date: Date) => {
    setStartDate(date.toISOString());
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date.toISOString());
  };

  // Define the datePickerFunc to handle the change event for startDate and endDate
  const datePickerFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  // new update end code 21/01/2024


  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-6 shadow-default xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black">Users</h4>
      <div id="mapOne" className="mapOne map-btn h-90">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <hr className="h-[2px] bg-teal-500 w-full" />
            <span className="text-teal-500">Appeal</span>
            <hr className="h-[2px] bg-teal-500 w-full" />
          </div>

          <div className="flex justify-end gap-3 items-end">
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={datePickerFunc} // Using the datePickerFunc
              className="bg-gray-300 py-1 h-full"
            />
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={datePickerFunc} // Using the datePickerFunc
              className="bg-gray-300 py-1 h-full"
            />
          </div>
          {/* palestine */}
          <div className="flex items-center justify-between ">
            <p>Winter Emergency</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileAppealDonation("Winter Emergency")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Winter Emergency")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Sadaqah */}
          <div className="flex items-center justify-between ">
            <p>Sadaqah</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileAppealDonation("Sadaqah")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Sadaqah")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Zakat */}
          <div className="flex items-center justify-between ">
            <p>Zakat</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileAppealDonation("Zakat")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Zakat")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Food Box */}
          <div className="flex items-center justify-between ">
            <p>Food Box</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileAppealDonation("Food Box")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Food Box")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Orphan */}
          <div className="flex items-center justify-between ">
            <p>Palestine Emergency</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() =>
                  downloadFileAppealDonation("Palestine Emergency")
                }
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Palestine Emergency")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* hand pump */}
          <div className="flex items-center justify-between ">
            <p>Hand Pump</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileAppealDonation("Hand Pump Donation")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Hand Pump Donation")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Water well */}
          <div className="flex items-center justify-between ">
            <p>Water Well</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileAppealDonation("Water Well")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Water Well")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Masjid */}
          <div className="flex items-center justify-between ">
            <p>Ramadan</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileAppealDonation("Ramadan")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Ramadan")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Orphan */}
          <div className="flex items-center justify-between ">
            <p>Orphan</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileAppealDonation("Orphan")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Orphan")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Hand Pump */}
          <div className="flex items-center justify-between ">
            <p>Hand Pump</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileAppealDonation("Hand Pump")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Hand Pump")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Masjid */}
          <div className="flex items-center justify-between ">
            <p>Masjid</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileAppealDonation("Masjid")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Masjid")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>

          {/* Quick Donation */}
          <div className="flex gap-2 items-center">
            <hr className="h-[2px] bg-teal-500 w-2/6" />
            <span className="text-teal-500 ">Quick Donations</span>
            <hr className="h-[2px] bg-teal-500 w-2/6" />
          </div>
          <div className="flex justify-end gap-3 items-end">
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={datePickerFunc} // Using the datePickerFunc
              className="bg-gray-300 py-1 h-full"
            />
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={datePickerFunc} // Using the datePickerFunc
              className="bg-gray-300 py-1 h-full"
            />
          </div>
          {/* Reclaim Gifts */}
          <div className="flex items-center justify-between ">
            <p>Quick Donations</p>
            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadQuickDonationCSV()}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadQuickDonationXLS()}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserAppealDonationChart;


// umar apko q mana kar raha taa ka sir ko website na dekoooo


// "use client";
// import React, { useEffect, useState } from "react";
// import { VectorMap } from "@react-jvectormap/core";
// import { usAea } from "@react-jvectormap/unitedstates";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/components/newUi/config/firebase";

// const UserAppealDonationChart = () => {
//   const [quickDonationData, setQuickDonationData] = useState<any>([]);
//   const [appealData, setAppealData] = useState<any>([]);
//   const getDataFromFireStoreAppealDonation = async () => {
//     try {
//       const collectionRef = collection(db, "userAppealDonation");
//       const querySnapshot = await getDocs(collectionRef);
//       const data: any = [];

//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       return data;
//     } catch (error) {
//       console.error("Error fetching data from Firestore:", error);
//       return [];
//     }
//   };
//   const getDataFromFireStoreQuickDonation = async () => {
//     try {
//       const collectionRef = collection(db, "userQuickDonation");
//       const querySnapshot = await getDocs(collectionRef);
//       const data: any = [];

//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       return data;
//     } catch (error) {
//       console.error("Error fetching data from Firestore:", error);
//       return [];
//     }
//   };
//   useEffect(() => {
//     getDataFromFireStoreQuickDonation().then((result) => {
//       setQuickDonationData(result);
//     });
//     getDataFromFireStoreAppealDonation().then((result) => {
//       setAppealData(result);
//     });
//   }, []);

//   function downloadFileAppealDonation(data: any) {
//     const filterData = appealData.filter(
//       (title: any) => data === title.userData.donationTitle
//     );
//     // Add header
//     let csvData = "Donation Title" + "," + "Donation" + "," + "Date" + "\n";

//     // Add data
//     filterData.forEach(function (row: any) {
//       csvData +=
//         row.userData.donationTitle +
//         "," +
//         row.userData.donation +
//         "," +
//         row.userData.date +
//         "\n";
//     });

//     // Download the CSV file
//     let anchor = document.createElement("a");
//     anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
//     anchor.target = "_blank";
//     anchor.download = `${data}.csv`;
//     anchor.click();
//   }
//   function downloadFileQuickDonation() {
//     // Add header
//     let csvData = "Donation Title" + "," + "Donation" + "," + "Date" + "\n";

//     // Add data
//     quickDonationData.forEach(function (row: any) {
//       csvData +=
//         row.userData.donationTitle +
//         "," +
//         row.userData.donation +
//         "," +
//         row.userData.date +
//         "\n";
//     });
//     // Download the CSV file
//     let anchor = document.createElement("a");
//     anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
//     anchor.target = "_blank";
//     anchor.download = "quickDonation.csv";
//     anchor.click();
//   }

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-6 shadow-default xl:col-span-7">
//       <h4 className="mb-2 text-xl font-semibold text-black">Users</h4>
//       <div id="mapOne" className="mapOne map-btn h-90">
//         <div className="flex flex-col gap-4">
//           <div className="flex gap-2 items-center">
//             <hr className="h-[2px] bg-teal-500 w-full" />
//             <span className="text-teal-500">Appeal</span>
//             <hr className="h-[2px] bg-teal-500 w-full" />
//           </div>
//           {/* palestine */}
//           <div className="flex items-center justify-between ">
//             <p>Winter Emergency</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Winter Emergency")}
//               className="bg-teal-500 text-sm  p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Sadaqah */}
//           <div className="flex items-center justify-between ">
//             <p>Sadaqah</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Sadaqah")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Zakat */}
//           <div className="flex items-center justify-between ">
//             <p>Zakat</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Zakat")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Food Box */}
//           <div className="flex items-center justify-between ">
//             <p>Food Box</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Food Box")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Orphan */}
//           <div className="flex items-center justify-between ">
//             <p>Palestine Emergency</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Palestine Emergency")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* hand pump */}
//           <div className="flex items-center justify-between ">
//             <p>Hand Pump</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Hand Pump Donation")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Water well */}
//           <div className="flex items-center justify-between ">
//             <p>Water Well</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Water Well")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Masjid */}
//           <div className="flex items-center justify-between ">
//             <p>Ramadan</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Ramadan")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Orphan */}
//           <div className="flex items-center justify-between ">
//             <p>Orphan</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Orphan")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Hand Pump */}
//           <div className="flex items-center justify-between ">
//             <p>Hand Pump</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Hand Pump")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Masjid */}
//           <div className="flex items-center justify-between ">
//             <p>Masjid</p>

//             <button
//               onClick={() => downloadFileAppealDonation("Masjid")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>

//           {/* Quick Donation */}
//           <div className="flex gap-2 items-center">
//             <hr className="h-[2px] bg-teal-500 w-2/6" />
//             <span className="text-teal-500 ">Quick Donations</span>
//             <hr className="h-[2px] bg-teal-500 w-2/6" />
//           </div>
//           {/* Reclaim Gifts */}
//           <div className="flex items-center justify-between ">
//             <p>Quick Donations</p>

//             <button
//               onClick={() => downloadFileQuickDonation()}
//               className="bg-teal-500 text-sm  p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserAppealDonationChart;
