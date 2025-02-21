"use client";
import React, { useEffect, useState } from "react";
import { VectorMap } from "@react-jvectormap/core";
import { usAea } from "@react-jvectormap/unitedstates";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/components/newUi/config/firebase";
import { Timestamp } from "firebase/firestore"; // Import Timestamp from Firestore

const UserDonationChart = () => {
  const [donationData, setDonationData] = useState<any>([]);
  const [reclaimData, setReclaimData] = useState<any>([]);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");


  // Function to handle date changes
  const handleDateChange = (newStartDate: string, newEndDate: string) => {
    setStartDate(newStartDate); // Set the start date
    setEndDate(newEndDate); // Set the end date
    console.log("Start Date:", newStartDate); // Debug log
    console.log("End Date:", newEndDate); // Debug log
  };

  // Fetch data from Firestore
  const getDataFromFirestoreDonation = async () => {
    try {
      const collectionRef = collection(db, "userDonation");
      const querySnapshot = await getDocs(collectionRef);
      const data: any = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (error) {
      console.error("Error fetching donation data:", error);
      return [];
    }
  };

  const getDataFromFirestoreReclaimGifts = async () => {
    try {
      const collectionRef = collection(db, "userReclaimGifts");
      const querySnapshot = await getDocs(collectionRef);
      const data: any = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (error) {
      console.error("Error fetching reclaim gifts data:", error);
      return [];
    }
  };

  useEffect(() => {
    getDataFromFirestoreDonation().then((result) => {
      setDonationData(result);
    });
    getDataFromFirestoreReclaimGifts().then((result) => {
      setReclaimData(result);
    });
  }, []);

  // Filter data by date range (including debugging)
  const filterDataByDateRange = (data: any[], start: string, end: string) => {
    if (!start || !end) {
      console.log("No date range provided, returning all data.");
      return data; // Return all data if no date range is provided.
    }

    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();

    console.log(
      `Filtering data from ${new Date(startDate)} to ${new Date(endDate)}`
    );

    return data.filter((item) => {
      const userData = item.userData || {};
      let itemDate = userData.date;

      // If date is a Firestore Timestamp, convert it to a JavaScript Date object
      if (itemDate instanceof Timestamp) {
        itemDate = itemDate.toDate();
      } else {
        // Ensure itemDate is a valid date string and convert it to Date object
        itemDate = new Date(itemDate);
      }

      const itemDateTime = itemDate.getTime();

      console.log(
        `Checking item: ${userData.date}, Parsed item date: ${itemDateTime}`
      );

      return (
        itemDateTime && itemDateTime >= startDate && itemDateTime <= endDate
      );
    });
  };

  function downloadFileDonation(donationTitle: string) {
  // Filter data by donation title and date range
  const filteredData = filterDataByDateRange(
    donationData.filter(
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

  // Add header
  let csvData =
    "First Name," +
    "Contact No," +
    "Donation," +
    "Donation Title," +
    "Email," +
    "Date\n";

  filteredData.forEach((row: any) => {
    csvData +=
      row.userData.firstName +
      "," +
      row.userData.contactNo +
      "," +
      row.userData.donation +
      "," +
      row.userData.donationTitle +
      "," +
      row.userData.email +
      "," +
      row.userData.date +
      "\n";
  });

  // Download the CSV file
  let anchor = document.createElement("a");
  anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
  anchor.target = "_blank";
  anchor.download = `${donationTitle}.csv`;
  anchor.click();
}

function downloadFileXLS(donationTitle: string) {
  // Filter data by donation title and date range
  const filteredData = filterDataByDateRange(
    donationData.filter(
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

  // Add header
  let csvData =
    "First Name," +
    "Contact No," +
    "Donation," +
    "Donation Title," +
    "Email," +
    "Date\n";

  filteredData.forEach((row: any) => {
    csvData +=
      row.userData.firstName +
      "," +
      row.userData.contactNo +
      "," +
      row.userData.donation +
      "," +
      row.userData.donationTitle +
      "," +
      row.userData.email +
      "," +
      row.userData.date +
      "\n";
  });

  // Download the file
  let anchor = document.createElement("a");
  anchor.href = "data:text/xlsx;charset=utf-8," + encodeURI(csvData);
  anchor.target = "_blank";
  anchor.download = `${donationTitle}.xlsx`;
  anchor.click();
}


    // XLS
    // let excelData: any;
    // // Prepare data for excel.You can also use html tag for create table for excel.
    // filterData.forEach((rowItem: any, rowIndex: any) => {
    //   if (0 === rowIndex) {
    //     // This is for header.
    //     rowItem.forEach((colItem: any, colIndex: any) => {
    //       excelData += colItem + ",";
    //     });
    //     excelData += "\r\n";
    //   } else {
    //     // This is data.
    //     rowItem.forEach((colItem: any, colIndex: any) => {
    //       excelData += colItem + ",";
    //     });
    //     excelData += "\r\n";
    //   }
    // });
    // // Create the blob url for the file.
    // let excelData2 = "data:text/xlsx," + encodeURI(excelData);
    // // Download the xlsx file.
    // let a = document.createElement("a");
    // a.setAttribute("href", excelData2);
    // a.setAttribute("download", "filename.xlsx");
    // document.body.appendChild(a);
    // a.click();
  // }

 function downloadFileReclaimGifts() {
   // Filter data by date range
   const filteredData = filterDataByDateRange(reclaimData, startDate, endDate);

   // Check if filtered data exists
   if (filteredData.length === 0) {
     console.log(`No data found in the selected date range for reclaim gifts.`);
     return;
   }

   // Add header
   let csvData =
     "Email," +
     "Address-1," +
     "Address-2," +
     "City," +
     "Country," +
     "Postal-Code," +
     "Date\n";

   filteredData.forEach((row: any) => {
     csvData +=
       row.userData.email +
       "," +
       row.userData.address1 +
       "," +
       row.userData.address2 +
       "," +
       row.userData.city +
       "," +
       row.userData.country +
       "," +
       row.userData.postalCode +
       "," +
       row.date +
       "\n";
   });

   // Download the CSV file
   let anchor = document.createElement("a");
   anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
   anchor.target = "_blank";
   anchor.download = "reclaimGifts.csv";
   anchor.click();
 }

 function downloadFileXLSReclaimGifts() {
   // Filter data by date range
   const filteredData = filterDataByDateRange(reclaimData, startDate, endDate);

   // Check if filtered data exists
   if (filteredData.length === 0) {
     console.log(`No data found in the selected date range for reclaim gifts.`);
     return;
   }

   // Add header
   let csvData =
     "Email," +
     "Address-1," +
     "Address-2," +
     "City," +
     "Country," +
     "Postal-Code," +
     "Date\n";

   filteredData.forEach((row: any) => {
     csvData +=
       row.userData.email +
       "," +
       row.userData.address1 +
       "," +
       row.userData.address2 +
       "," +
       row.userData.city +
       "," +
       row.userData.country +
       "," +
       row.userData.postalCode +
       "," +
       row.date +
       "\n";
   });

   // Download the file
   let anchor = document.createElement("a");
   anchor.href = "data:text/xlsx;charset=utf-8," + encodeURI(csvData);
   anchor.target = "_blank";
   anchor.download = "reclaimGifts.xlsx";
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

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-6 shadow-default xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black">Users</h4>
      <div id="mapOne" className="mapOne map-btn h-90">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <hr className="h-[2px] bg-teal-500 w-full" />
            <span className="text-teal-500">Donations</span>
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
            <p>Palestine</p>
            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() =>
                  downloadFileDonation("Palestine Emergency Donation")
                }
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>
              <button
                onClick={() => downloadFileXLS("Palestine Emergency Donation")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Food Pack */}
          <div className="flex items-center justify-between ">
            <p>Food Pack</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileDonation("Food Box Donation")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>

              <button
                onClick={() => downloadFileXLS("Food Box Donation")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Winter */}
          <div className="flex items-center justify-between ">
            <p>Winter</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() =>
                  downloadFileDonation("Winter Emergency Donation")
                }
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>

              <button
                onClick={() => downloadFileXLS("Winter Emergency Donation")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>
          {/* Iftar */}
          <div className="flex items-center justify-between ">
            <p>Iftar</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileDonation("Iftar Donation")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>

              <button
                onClick={() => downloadFileXLS("Iftar Donation")}
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
                onClick={() => downloadFileDonation("Orphan Donation")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>

              <button
                onClick={() => downloadFileXLS("Orphan Donation")}
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
                onClick={() => downloadFileDonation("Hand Pump Donation")}
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
                onClick={() => downloadFileDonation("Water Well Donation")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>

              <button
                onClick={() => downloadFileXLS("Water Well Donation")}
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
                onClick={() => downloadFileDonation("Masjid Donation")}
                className="bg-teal-500 text-sm p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>

              <button
                onClick={() => downloadFileXLS("Masjid Donation")}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download XLSX file{" "}
              </button>
            </div>
          </div>

          {/* Reclaim Gifts */}
          <div className="flex gap-2 items-center">
            <hr className="h-[2px] bg-teal-500 w-full" />
            <span className="text-teal-500 ">ReclaimGifts</span>
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
          {/* Reclaim Gifts */}
          <div className="flex items-center justify-between ">
            <p>Reclaim Gifts</p>

            <div className="flex justify-center gap-4 items-center">
              <button
                onClick={() => downloadFileReclaimGifts()}
                className="bg-teal-500 text-sm  p-2 text-white"
              >
                {" "}
                Download CSV file{" "}
              </button>

              <button
                onClick={() => downloadFileReclaimGifts()}
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

export default UserDonationChart;




// existing code before the changes  22/1/25

// "use client";
// import React, { useEffect, useState } from "react";
// import { VectorMap } from "@react-jvectormap/core";
// import { usAea } from "@react-jvectormap/unitedstates";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/components/newUi/config/firebase";

// const UserDonationChart = () => {
//   const [donationData, setDonationData] = useState<any>([]);
//   const [reclaimData, setReclaimData] = useState<any>([]);
//   const getDataFromFirestoreDonation = async () => {
//     try {
//       const collectionRef = collection(db, "userDonation");
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
//   const getDataFromFirestoreReclaimGifts = async () => {
//     try {
//       const collectionRef = collection(db, "userReclaimGifts");
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
//     getDataFromFirestoreDonation().then((result) => {
//       setDonationData(result);
//     });
//     getDataFromFirestoreReclaimGifts().then((result) => {
//       setReclaimData(result);
//     });
//   }, []);
//   let datePicker: any;
//   const datePickerFunc = (e: any) => {
//     datePicker = e.target.value;
//     datePicker =
//       datePicker.split("-")[2] +
//       "/" +
//       datePicker.split("-")[1] +
//       "/" +
//       datePicker.split("-")[0];
//   };
//   function downloadFileDonation(data: any) {
//     let filterData = donationData.filter(
//       (title: any) => data === title.userData.donationTitle
//     );
//     // Add header
//     let csvData =
//       "First Name" +
//       "," +
//       "Contact No" +
//       "," +
//       "Donation" +
//       "," +
//       "Donation Title" +
//       "," +
//       "Email" +
//       "," +
//       "Date" +
//       "\n";

//     filterData = filterData.filter((data: any) =>
//       data.userData.date ? data.userData.date.split(",")[0] == datePicker : null
//     );
//     filterData.forEach(function (row: any) {
//       csvData +=
//         row.userData.firstName +
//         "," +
//         row.userData.contactNo +
//         "," +
//         row.userData.donation +
//         "," +
//         row.userData.donationTitle +
//         "," +
//         row.userData.email +
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
//   function downloadFileXLS(data: any) {
//     let filterData = donationData.filter(
//       (title: any) => data === title.userData.donationTitle
//     );
//     // // Add header
//     let csvData =
//       "First Name" +
//       "," +
//       "Contact No" +
//       "," +
//       "Donation" +
//       "," +
//       "Donation Title" +
//       "," +
//       "Email" +
//       "," +
//       "Date" +
//       "\n";

//     filterData = filterData.filter((data: any) =>
//       data.userData.date ? data.userData.date.split(",")[0] == datePicker : null
//     );
//     filterData.forEach(function (row: any) {
//       csvData +=
//         row.userData.firstName +
//         "," +
//         row.userData.contactNo +
//         "," +
//         row.userData.donation +
//         "," +
//         row.userData.donationTitle +
//         "," +
//         row.userData.email +
//         "," +
//         row.userData.date +
//         "\n";
//     });

//     // Download the CSV file
//     let anchor = document.createElement("a");
//     anchor.href = "data:text/xlsx," + encodeURI(csvData);
//     anchor.target = "_blank";
//     anchor.download = `${data}.xlsx`;
//     anchor.click();

//     // XLS
//     // let excelData: any;
//     // // Prepare data for excel.You can also use html tag for create table for excel.
//     // filterData.forEach((rowItem: any, rowIndex: any) => {
//     //   if (0 === rowIndex) {
//     //     // This is for header.
//     //     rowItem.forEach((colItem: any, colIndex: any) => {
//     //       excelData += colItem + ",";
//     //     });
//     //     excelData += "\r\n";
//     //   } else {
//     //     // This is data.
//     //     rowItem.forEach((colItem: any, colIndex: any) => {
//     //       excelData += colItem + ",";
//     //     });
//     //     excelData += "\r\n";
//     //   }
//     // });
//     // // Create the blob url for the file.
//     // let excelData2 = "data:text/xlsx," + encodeURI(excelData);
//     // // Download the xlsx file.
//     // let a = document.createElement("a");
//     // a.setAttribute("href", excelData2);
//     // a.setAttribute("download", "filename.xlsx");
//     // document.body.appendChild(a);
//     // a.click();
//   }

//   function downloadFileReclaimGifts() {
//     // Add header
//     let csvData =
//       "Email" +
//       "," +
//       "Address-1" +
//       "," +
//       "Address-2" +
//       "," +
//       "City" +
//       "," +
//       "Country" +
//       "," +
//       "Postal-Code" +
//       "," +
//       "Date" +
//       "\n";
//     let arr: any = [];
//     arr = reclaimData.filter((data: any) =>
//       data.date ? data.date.split(",")[0] == datePicker : null
//     );
//     // Add data
//     arr?.forEach(function (row: any) {
//       csvData +=
//         row.userData.email +
//         "," +
//         row.userData.address1 +
//         "," +
//         row.userData.address2 +
//         "," +
//         row.userData.city +
//         "," +
//         row.userData.country +
//         "," +
//         row.userData.postalCode +
//         "," +
//         row.date +
//         "\n";
//     });
//     // Download the CSV file
//     let anchor = document.createElement("a");
//     anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
//     anchor.target = "_blank";
//     anchor.download = "reclaimGifts.csv";
//     anchor.click();
//   }
//   function downloadFileXLSdownloadReclaimGifts() {
//     // Add header
//     let csvData =
//       "Email" +
//       "," +
//       "Address-1" +
//       "," +
//       "Address-2" +
//       "," +
//       "City" +
//       "," +
//       "Country" +
//       "," +
//       "Postal-Code" +
//       "," +
//       "Date" +
//       "\n";
//     let arr: any = [];
//     arr = reclaimData.filter((data: any) =>
//       data.date ? data.date.split(",")[0] == datePicker : null
//     );
//     // Add data
//     arr?.forEach(function (row: any) {
//       csvData +=
//         row.userData.email +
//         "," +
//         row.userData.address1 +
//         "," +
//         row.userData.address2 +
//         "," +
//         row.userData.city +
//         "," +
//         row.userData.country +
//         "," +
//         row.userData.postalCode +
//         "," +
//         row.date +
//         "\n";
//     });
//     // Download the CSV file
//     let anchor = document.createElement("a");
//     anchor.href = "data:text/xlsx," + encodeURI(csvData);
//     anchor.target = "_blank";
//     anchor.download = "reclaimGifts.xlsx";
//     anchor.click();
//   }

//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-6 shadow-default xl:col-span-7">
//       <h4 className="mb-2 text-xl font-semibold text-black">Users</h4>
//       <div id="mapOne" className="mapOne map-btn h-90">
//         <div className="flex flex-col gap-4">
//           <div className="flex gap-2 items-center">
//             <hr className="h-[2px] bg-teal-500 w-full" />
//             <span className="text-teal-500">Donations</span>
//             <hr className="h-[2px] bg-teal-500 w-full" />
//           </div>
//           <div className="flex gap-2 justify-between">
//             <p>Select Your Option:</p>
//             <div className="flex  gap-4 items-center">
//               <input
//                 type="date"
//                 onChange={datePickerFunc}
//                 className="bg-gray-300 py-1 px-2 h-full "
//               ></input>
//               {/* <select
//                 className="bg-gray-300 p-1.5 h-full"
//                 onChange={weekPickerData}
//               >
//                 <option>This Week</option>
//                 <option>Last Week</option>
//               </select> */}
//             </div>
//           </div>
//           {/* palestine */}
//           <div className="flex items-center justify-between ">
//             <p>Palestine</p>
//             <div className="flex justify-center gap-4 items-center">
//               <button
//                 onClick={() =>
//                   downloadFileDonation("Palestine Emergency Donation")
//                 }
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download CSV file{" "}
//               </button>
//               <button
//                 onClick={() => downloadFileXLS("Palestine Emergency Donation")}
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download XLSX file{" "}
//               </button>
//             </div>
//           </div>
//           {/* Food Pack */}
//           <div className="flex items-center justify-between ">
//             <p>Food Pack</p>

//             <div className="flex justify-center gap-4 items-center">
//               <button
//                 onClick={() => downloadFileDonation("Food Box Donation")}
//                 className="bg-teal-500 text-sm p-2 text-white"
//               >
//                 {" "}
//                 Download CSV file{" "}
//               </button>

//               <button
//                 onClick={() => downloadFileXLS("Food Box Donation")}
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download XLSX file{" "}
//               </button>
//             </div>
//           </div>
//           {/* Winter */}
//           <div className="flex items-center justify-between ">
//             <p>Winter</p>

//             <div className="flex justify-center gap-4 items-center">
//               <button
//                 onClick={() =>
//                   downloadFileDonation("Winter Emergency Donation")
//                 }
//                 className="bg-teal-500 text-sm p-2 text-white"
//               >
//                 {" "}
//                 Download CSV file{" "}
//               </button>

//               <button
//                 onClick={() => downloadFileXLS("Winter Emergency Donation")}
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download XLSX file{" "}
//               </button>
//             </div>
//           </div>
//           {/* Iftar */}
//           <div className="flex items-center justify-between ">
//             <p>Iftar</p>

//             <div className="flex justify-center gap-4 items-center">
//               <button
//                 onClick={() => downloadFileDonation("Iftar Donation")}
//                 className="bg-teal-500 text-sm p-2 text-white"
//               >
//                 {" "}
//                 Download CSV file{" "}
//               </button>

//               <button
//                 onClick={() => downloadFileXLS("Iftar Donation")}
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download XLSX file{" "}
//               </button>
//             </div>
//           </div>
//           {/* Orphan */}
//           <div className="flex items-center justify-between ">
//             <p>Orphan</p>

//             <div className="flex justify-center gap-4 items-center">
//               <button
//                 onClick={() => downloadFileDonation("Orphan Donation")}
//                 className="bg-teal-500 text-sm p-2 text-white"
//               >
//                 {" "}
//                 Download CSV file{" "}
//               </button>

//               <button
//                 onClick={() => downloadFileXLS("Orphan Donation")}
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download XLSX file{" "}
//               </button>
//             </div>
//           </div>
//           {/* hand pump */}
//           <div className="flex items-center justify-between ">
//             <p>Hand Pump</p>

//             <div className="flex justify-center gap-4 items-center">
//               <button
//                 onClick={() => downloadFileDonation("Hand Pump Donation")}
//                 className="bg-teal-500 text-sm p-2 text-white"
//               >
//                 {" "}
//                 Download CSV file{" "}
//               </button>

//               <button
//                 onClick={() => downloadFileXLS("Hand Pump Donation")}
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download XLSX file{" "}
//               </button>
//             </div>
//           </div>
//           {/* Water well */}
//           <div className="flex items-center justify-between ">
//             <p>Water Well</p>

//             <div className="flex justify-center gap-4 items-center">
//               <button
//                 onClick={() => downloadFileDonation("Water Well Donation")}
//                 className="bg-teal-500 text-sm p-2 text-white"
//               >
//                 {" "}
//                 Download CSV file{" "}
//               </button>

//               <button
//                 onClick={() => downloadFileXLS("Water Well Donation")}
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download XLSX file{" "}
//               </button>
//             </div>
//           </div>
//           {/* Masjid */}
//           <div className="flex items-center justify-between ">
//             <p>Masjid</p>

//             <div className="flex justify-center gap-4 items-center">
//               <button
//                 onClick={() => downloadFileDonation("Masjid Donation")}
//                 className="bg-teal-500 text-sm p-2 text-white"
//               >
//                 {" "}
//                 Download CSV file{" "}
//               </button>

//               <button
//                 onClick={() => downloadFileXLS("Masjid Donation")}
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download XLSX file{" "}
//               </button>
//             </div>
//           </div>

//           {/* Reclaim Gifts */}
//           <div className="flex gap-2 items-center">
//             <hr className="h-[2px] bg-teal-500 w-full" />
//             <span className="text-teal-500 ">ReclaimGifts</span>
//             <hr className="h-[2px] bg-teal-500 w-full" />
//           </div>
//           <div className="flex gap-2 justify-between">
//             <p>Select Starting Date:</p>
//             <div className="flex gap-4 items-center">
//               <input
//                 type="date"
//                 onChange={datePickerFunc}
//                 className="bg-gray-300 py-1 px-2 h-full "
//               ></input>
//               {/* <select className="bg-gray-300 p-1.5 h-full">
//                 <option>This Week</option>
//                 <option>Last Week</option>
//               </select> */}
//             </div>
//           </div>
//           <div className="flex gap-2 justify-between">
//             <p>Select Ending Date:</p>
//             <div className="flex gap-4 items-center">
//               <input
//                 type="date"
//                 onChange={datePickerFunc}
//                 className="bg-gray-300 py-1 px-2 h-full "
//               ></input>
//               {/* <select className="bg-gray-300 p-1.5 h-full">
//                 <option>This Week</option>
//                 <option>Last Week</option>
//               </select> */}
//             </div>
//           </div>
//           {/* Reclaim Gifts */}
//           <div className="flex items-center justify-between ">
//             <p>Reclaim Gifts</p>

//             <div className="flex justify-center gap-4 items-center">
//               <button
//                 onClick={() => downloadFileReclaimGifts()}
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download CSV file{" "}
//               </button>

//               <button
//                 onClick={() => downloadFileXLSdownloadReclaimGifts()}
//                 className="bg-teal-500 text-sm  p-2 text-white"
//               >
//                 {" "}
//                 Download XLSX file{" "}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDonationChart;

// existing code before changes 22/1/25

// "use client";
// import React, { useEffect, useState } from "react";
// import { VectorMap } from "@react-jvectormap/core";
// import { usAea } from "@react-jvectormap/unitedstates";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/components/newUi/config/firebase";

// const UserDonationChart = () => {
//   const [donationData, setDonationData] = useState<any>([]);
//   const [reclaimData, setReclaimData] = useState<any>([]);
//   const getDataFromFirestoreDonation = async () => {
//     try {
//       const collectionRef = collection(db, "userDonation");
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
//   const getDataFromFirestoreReclaimGifts = async () => {
//     try {
//       const collectionRef = collection(db, "userReclaimGifts");
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
//     getDataFromFirestoreDonation().then((result) => {
//       setDonationData(result);
//     });
//     getDataFromFirestoreReclaimGifts().then((result) => {
//       setReclaimData(result);
//     });
//   }, []);

//   function downloadFileDonation(data: any) {
//     const filterData = donationData.filter(
//       (title: any) => data === title.userData.donationTitle
//     );
//     // Add header
//     let csvData =
//       "First Name" +
//       "," +
//       "Contact No" +
//       "," +
//       "Donation" +
//       "," +
//       "Donation Title" +
//       "," +
//       "Email" +
//       "," +
//       "Date" +
//       "\n";

//     // Add data
//     filterData.forEach(function (row: any) {
//       csvData +=
//         row.userData.firstName +
//         "," +
//         row.userData.contactNo +
//         "," +
//         row.userData.donation +
//         "," +
//         row.userData.donationTitle +
//         "," +
//         row.userData.email +
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
//   function downloadFileReclaimGifts() {
//     console.log("reclaimData---->", reclaimData);
//     // Add header
//     let csvData =
//       "Email" +
//       "," +
//       "Address-1" +
//       "," +
//       "Address-2" +
//       "," +
//       "City" +
//       "," +
//       "Country" +
//       "," +
//       "Postal-Code" +
//       "," +
//       "Date" +
//       "\n";

//     // Add data
//     reclaimData.forEach(function (row: any) {
//       csvData +=
//         row.userData.email +
//         "," +
//         row.userData.address1 +
//         "," +
//         row.userData.address2 +
//         "," +
//         row.userData.city +
//         "," +
//         row.userData.country +
//         "," +
//         row.userData.postalCode +
//         "," +
//         row.userData.date +
//         "\n";
//     });
//     // Download the CSV file
//     let anchor = document.createElement("a");
//     anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);
//     anchor.target = "_blank";
//     anchor.download = "reclaimGifts.csv";
//     anchor.click();
//   }
//   return (
//     <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-6 shadow-default xl:col-span-7">
//       <h4 className="mb-2 text-xl font-semibold text-black">Users</h4>
//       <div id="mapOne" className="mapOne map-btn h-90">
//         <div className="flex flex-col gap-4">
//           <div className="flex gap-2 items-center">
//             <hr className="h-[2px] bg-teal-500 w-full" />
//             <span className="text-teal-500">Donations</span>
//             <hr className="h-[2px] bg-teal-500 w-full" />
//           </div>
//           {/* palestine */}
//           <div className="flex items-center justify-between ">
//             <p>Palestine</p>

//             <button
//               onClick={() =>
//                 downloadFileDonation("Palestine Emergency Donation")
//               }
//               className="bg-teal-500 text-sm  p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Food Pack */}
//           <div className="flex items-center justify-between ">
//             <p>Food Pack</p>

//             <button
//               onClick={() => downloadFileDonation("Food Box Donation")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Winter */}
//           <div className="flex items-center justify-between ">
//             <p>Winter</p>

//             <button
//               onClick={() => downloadFileDonation("Winter Emergency Donation")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>
//           {/* Iftar */}
//           <div className="flex items-center justify-between ">
//             <p>Iftar</p>

//             <button
//               onClick={() => downloadFileDonation("Iftar Donation")}
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
//               onClick={() => downloadFileDonation("Orphan Donation")}
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
//               onClick={() => downloadFileDonation("Hand Pump Donation")}
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
//               onClick={() => downloadFileDonation("Water Well Donation")}
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
//               onClick={() => downloadFileDonation("Masjid Donation")}
//               className="bg-teal-500 text-sm p-2 text-white"
//             >
//               {" "}
//               Download CSV file{" "}
//             </button>
//           </div>

//           {/* Reclaim Gifts */}
//           <div className="flex gap-2 items-center">
//             <hr className="h-[2px] bg-teal-500 w-full" />
//             <span className="text-teal-500 ">ReclaimGifts</span>
//             <hr className="h-[2px] bg-teal-500 w-full" />
//           </div>
//           {/* Reclaim Gifts */}
//           <div className="flex items-center justify-between ">
//             <p>Reclaim Gifts</p>

//             <button
//               onClick={() => downloadFileReclaimGifts()}
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

// export default UserDonationChart;