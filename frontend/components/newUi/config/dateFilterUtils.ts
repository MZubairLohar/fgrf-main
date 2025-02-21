import { db } from "./firebase"; // Your firebase.ts file
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
export const fetchFilteredData = async (startDate: string, endDate: string) => {
  try {
    // Convert start and end dates to JavaScript Date objects
    const formattedStart = new Date(startDate);
    const formattedEnd = new Date(endDate);

    // Ensure start and end dates are valid before querying Firestore
    if (isNaN(formattedStart.getTime()) || isNaN(formattedEnd.getTime())) {
      console.error("Invalid date format provided.");
      return [];
    }

    // Convert to Firestore Timestamp objects for comparison
    const startTimestamp = Timestamp.fromDate(formattedStart);
    const endTimestamp = Timestamp.fromDate(formattedEnd);

    // Create the query to fetch data within the date range
    const q = query(
      collection(db, "websiteVisitors"),
      where("timestamp", ">=", startTimestamp),
      where("timestamp", "<=", endTimestamp)
    );

    const querySnapshot = await getDocs(q);
    const data: any[] = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error fetching filtered data:", error);
    return [];
  }
};
