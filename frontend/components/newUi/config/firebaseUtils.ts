import { db } from "./firebase"; // Import from your firebase.ts
import {
  doc,
  setDoc,
  increment,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

export const logVisitorAndCount = async () => {
  try {
    // Get the user's IP address
    const ipResponse = await fetch("https://api64.ipify.org?format=json");
    const { ip } = await ipResponse.json();

    // Check if the visitor is unique by looking for their IP in Firestore
    const visitorsRef = collection(db, "websiteVisitors");
    const visitorsSnapshot = await getDocs(visitorsRef);
    const existingVisitor = visitorsSnapshot.docs.find((doc) => doc.id === ip);

    if (!existingVisitor) {
      // Save unique visitor data in Firestore
      const visitorData = {
        ip,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      };

      await setDoc(doc(db, "websiteVisitors", ip), visitorData);

      // Increment the total visitor count by 1
      const countRef = doc(db, "visitorStats", "count");
      await setDoc(
        countRef,
        { total: increment(1) },
        { merge: true } // Merge with existing data if present
      );
    } else {
      console.log("Visitor already logged, no count increment.");
    }
  } catch (error) {
    console.error("Error logging visitor:", error);
  }
};

export const getVisitorCount = async (): Promise<number> => {
  try {
    const countRef = doc(db, "visitorStats", "count");
    const countSnap = await getDoc(countRef);

    if (countSnap.exists()) {
      console.log("Fetched visitor count:", countSnap.data());
      return countSnap.data().total || 0;
    }
    console.warn("No visitor count found in Firestore!");
    return 0;
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return 0;
  }
};
