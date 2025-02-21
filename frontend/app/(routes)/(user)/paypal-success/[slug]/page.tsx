"use client";
import Link from "next/link";
export default function Success({ params }: { params: { slug: string } }) {
  const myParams = params.slug;
  return (
    <div className="bg-gray-200">
      <div
        className="max-w-5xl mx-auto flex justify-center items-center"
        style={{
          height: `calc(100vh - 20vh)`,
        }}
      >
        <div>
          <h2 className="text-green-500 font-bold text-xl md:text-3xl  px-5 text-center">
            Your Paypal Payment has been Successful.
          </h2>
          <h3 className="text-teal-500 font-semibold text-lg md:text-xl py-10 px-5 text-center">
            Thanks For &#163; {myParams} Donation.
          </h3>
          <div className="flex gap-5 justify-center">
            <Link
              href={"/"}
              className="relative overflow-hidden group bg-sky-800 py-3 px-4 text-white rounded-xl hover:shadow-2xl"
            >
              {" "}
              <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-16 bg-gray-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative group-hover:text-teal-500">Home</span>
            </Link>
            <Link
              href={"/donation"}
              className="relative overflow-hidden group bg-teal-500 py-3 text-white px-4 rounded-xl hover:shadow-2xl"
            >
              {" "}
              <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-16 bg-gray-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative group-hover:text-teal-500">
                Donation
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


// new code for paypal payment 


// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Success({ params }: { params: { slug: string } }) {
//   const myParams = params.slug;
//   const [paymentVerified, setPaymentVerified] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Extract payment ID from query params (assuming it's passed in the URL)
//     const paymentId = new URLSearchParams(window.location.search).get(
//       "paymentId"
//     );

//     if (!paymentId) {
//       setLoading(false);
//       return;
//     }

//     // Verify payment with the server
//     fetch("/api/verify-payment", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ paymentId }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           setPaymentVerified(true);
//           // Save payment data to Firebase
//           saveToFirebase(data.payment);
//         } else {
//           console.error("Payment verification failed:", data.message);
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error verifying payment:", error);
//         setLoading(false);
//       });
//   }, []);

//   const saveToFirebase = async (paymentData) => {
//     try {
//       const response = await fetch("/api/save-to-firebase", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(paymentData),
//       });
//       const result = await response.json();
//       if (!result.success) {
//         console.error("Failed to save to Firebase:", result.message);
//       }
//     } catch (error) {
//       console.error("Error saving to Firebase:", error);
//     }
//   };

//   if (loading) {
//     return (
//       <div
//         className="bg-gray-200 flex justify-center items-center"
//         style={{ height: "calc(100vh - 20vh)" }}
//       >
//         <h2 className="text-gray-700 font-bold text-xl md:text-3xl">
//           Verifying payment...
//         </h2>
//       </div>
//     );
//   }

//   if (!paymentVerified) {
//     return (
//       <div
//         className="bg-gray-200 flex justify-center items-center"
//         style={{ height: "calc(100vh - 20vh)" }}
//       >
//         <h2 className="text-red-500 font-bold text-xl md:text-3xl">
//           Payment verification failed. Please try again.
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-200">
//       <div
//         className="max-w-5xl mx-auto flex justify-center items-center"
//         style={{
//           height: `calc(100vh - 20vh)`,
//         }}
//       >
//         <div>
//           <h2 className="text-green-500 font-bold text-xl md:text-3xl  px-5 text-center">
//             Your Paypal Payment has been Successful.
//           </h2>
//           <h3 className="text-teal-500 font-semibold text-lg md:text-xl py-10 px-5 text-center">
//             Thanks For &#163; {myParams} Donation.
//           </h3>
//           <div className="flex gap-5 justify-center">
//             <Link
//               href={"/"}
//               className="relative overflow-hidden group bg-sky-800 py-3 px-4 text-white rounded-xl hover:shadow-2xl"
//             >
//               {" "}
//               <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-16 bg-gray-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
//               <span className="relative group-hover:text-teal-500">Home</span>
//             </Link>
//             <Link
//               href={"/donation"}
//               className="relative overflow-hidden group bg-teal-500 py-3 text-white px-4 rounded-xl hover:shadow-2xl"
//             >
//               {" "}
//               <span className="absolute w-40 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-16 bg-gray-100 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
//               <span className="relative group-hover:text-teal-500">
//                 Donation
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

