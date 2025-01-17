import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useCart from "../../../hooks/useCart/useCart";
import useAxios from "../../../hooks/useAxios/useAxios";
import { AuthContext } from "../../Auth/Providers/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxios();
  const [carts, refetch] = useCart();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  const navigate = useNavigate()

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment method error");
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // payment confirm
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transection id", paymentIntent.id);
        setTransectionId(paymentIntent.id);
      }
    }
    const payment = {
      email: user.email,
      price: totalPrice,
      transectionId: paymentIntent.id,
      date: new Date(),
      cartIds: carts.map((item) => item._id),
      menuIds: carts.map((item) => item.menuId),
      status: "pending",
    };
    const res = await axiosSecure.post("/payments", payment);
    console.log("payment is saved", res.data);
    refetch()
    if (res.data?.paymentResult?.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Your payment has been successed.',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/dashboard/payment-history')
    }
  };

  return (
    <form className="mx-6" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-400 my-2">{error}</p>
      {transectionId && (
        <p className="text-green-400 my-2">
          Your transection id is {transectionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
