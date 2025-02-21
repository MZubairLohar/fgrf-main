import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import axios from "axios";

const asyncStripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutButton = ({ amount }) => {
  const router = useRouter();
  const handler = async () => {
    try {
      const stripe = await asyncStripe;
      // const response = axios.post("/api/stripe/checkout", { amount });
      // const { sessionId } = (await response).data;
      // const { error } = await stripe.redirectToCheckout({ sessionId });
      const error = "Please try another way";
      if (error) {
        router.push("/stripe-error");
      }
    } catch (err) {
      router.push("/stripe-error");
    }
  };

  return (
    <button
      onClick={handler}
      className="bg-blue-700 hover:bg-blue-800 text-sm duration-200 px-10 py-3 text-white md:font-semibold rounded-2xl"
    >
      Pay with Stripe
    </button>
  );
};

export default CheckoutButton;
