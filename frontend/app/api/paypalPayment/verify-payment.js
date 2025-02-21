// import paypal from "@paypal/checkout-server-sdk";

// // Set up PayPal environment
// const clientId = process.env.PAYPAL_CLIENT_ID;
// const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
// const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret); // Use LiveEnvironment for production
// const client = new paypal.core.PayPalHttpClient(environment);

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { paymentId } = req.body;

//   try {
//     // Get payment details from PayPal
//     const request = new paypal.orders.OrdersGetRequest(paymentId);
//     const response = await client.execute(request);

//     // Check if payment is approved
//     if (response.result.status === "COMPLETED") {
//       return res.status(200).json({ success: true, payment: response.result });
//     } else {
//       return res
//         .status(400)
//         .json({ success: false, message: "Payment not completed" });
//     }
//   } catch (error) {
//     console.error("Error verifying payment:", error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Payment verification failed" });
//   }
// }
