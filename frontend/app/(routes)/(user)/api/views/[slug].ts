// import { db } from "@/components/newUi/config/firebase";
// import { collection } from "firebase/firestore";

// export default async function handler(req:any, res:any) {
//   const {
//     query: { slug },
//     method,
//   } = req;

//   switch (method) {
//     case "GET":
//       try {
//         const pageRef = collection(db, "userReclaimGifts");
//         const page = await pageRef.get();

//         if (!page.exists) {
//           res.status(404).json({ success: false });
//           return;
//         }

//         await pageRef.update({
//           views: page.data().views + 1,
//         });

//         res.status(200).json({ success: true });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false });
//       }
//       break;
//     default:
//       res.setHeader("Allow", ["GET"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
