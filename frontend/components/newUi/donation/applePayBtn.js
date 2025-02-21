import {
  useStripe,
  // useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
const MyApplePayBtn = ({ amount }) => {
  const stripe = useStripe();
  // const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const pr = stripe.paymentRequest({
      currency: "usd",
      country: "US",
      requestPayerEmail: true,
      requestPayerName: true,
      total: {
        label: "Demo payment",
        amount: 20,
      },
    });
    pr.canMakePayment().then((result) => {
      if (result) {
        pr.on("paymentmethod", async (e) => {});
        setPaymentRequest(pr);
      }
    });
  }, [stripe]);
  return (
    <div>
      {paymentRequest && (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      )}
    </div>
  );
};
export default MyApplePayBtn;
