import { db } from "@/lib/firebase"; // Adjust the import based on your Firebase setup
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const paymentData = req.body;

  try {
    // Save payment data to Firebase
    const docRef = await addDoc(collection(db, "payments"), paymentData);
    return res.status(200).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error saving to Firebase:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to save payment data" });
  }
}
