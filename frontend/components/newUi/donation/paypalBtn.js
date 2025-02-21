import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const MyPayPalButton = ({ amount, currency }) => {
  const [customerEmailAddress, setCustomerEmailAddress] = useState("");

  const fetchOrderDetails = (orderId) => {
    return fetch(`https://api.paypal.com/v2/checkout/orders/${orderId}`)
      .then((orderDetails) => {
        if (
          orderDetails &&
          orderDetails.payer &&
          orderDetails.payer.email_address
        ) {
          setCustomerEmailAddress(orderDetails.payer.email_address);
          // sendEmail(
          //   orderDetails.payer.email_address,
          //   `Thank you for your ${amount} Donation!`,
          //   "FGRF Thankfull for your Donation."
          // );
          axios
            .post("/api/user", {
              email: orderDetails.payer.email_address,
              amount: amount,
            })
            .then(function (response) {
              console.log("responsePaypall from paypall", response);
            })
            .catch(function (error) {
              console.log("errorPaypall from paypall", error);
            });
        } else {
          console.error("Customer email not available from PayPal.");
        }
      })
      .catch((error) => {
        console.error("Error fetching order details from PayPal:", error);
      });
  };
  const router = useRouter();
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAY_PALL_CLIENT_KEY,
        currency: currency,
      }}
    >
      <PayPalButtons
        style={{
          layout: "horizontal",
          color: "gold",
          shape: "pill",
          label: "paypal",
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: currency,
                },
                // payee: customerEmailAddress,
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            if (details.error) {
              router.push("/paypal-error");
            } else {
              fetchOrderDetails(details.id);
              router.push({
                pathname: `/paypal-success/${amount}`,
              });
            }
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default MyPayPalButton;
