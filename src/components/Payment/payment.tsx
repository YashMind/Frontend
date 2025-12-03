"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Script from "next/script";

type FormData = {
  amount: number;
  name: string;
  email: string;
  phone: string;
};

interface CashfreeOrderResponse {
  payment_link?: string;
  payment_session_id?: string;
  cf_order_id?: number;
  order_id?: string;
  success?: boolean;
  error?: string;
  message?: string;
}

// Declare Cashfree global variable
declare global {
  interface Window {
    Cashfree: any;
  }
}

export default function PaymentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] =
    useState<CashfreeOrderResponse | null>(null);
  const [cashfreeLoaded, setCashfreeLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      amount: 100,
      name: "",
      email: "",
      phone: "",
    },
  });

  // Initialize Cashfree SDK when script loads
  const handleCashfreeLoad = () => {
    try {
      const env = process.env.NEXT_PUBLIC_CASHFREE_ENV || "TEST";
      const mode = env === "TEST" ? "sandbox" : "production";

      if (window.Cashfree) {
        window.Cashfree = window.Cashfree({
          mode: mode,
        });
        setCashfreeLoaded(true);
      }
    } catch (error) {
      setError("Failed to load payment system");
    }
  };

  const openCashfreeCheckout = async (paymentSessionId: string) => {
    try {
      if (!window.Cashfree) {
        throw new Error("Cashfree SDK not loaded");
      }

      setIsRedirecting(true);

      const checkoutOptions = {
        paymentSessionId: paymentSessionId,
        redirectTarget: "_self",
        returnUrl:
          typeof window !== "undefined"
            ? `${window.location.origin}/payment/return`
            : "",
        components: [
          "order-details",
          "card",
          "netbanking",
          "app",
          "upi",
          "paylater",
        ],
      };

      await window.Cashfree.checkout(checkoutOptions);
    } catch (error) {
      setError("Failed to open payment page");
      setIsRedirecting(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setResponseData(null);

    try {
      if (!cashfreeLoaded) {
        throw new Error(
          "Payment system is still loading. Please wait and try again."
        );
      }

      const orderData = {
        order_amount: data.amount,
        customer_name: data.name,
        customer_email: data.email,
        customer_phone: data.phone,
        customer_id: 3, // Replace with your customer ID
        plan_id: 2, // This is a sample plan id
        return_url:
          typeof window !== "undefined"
            ? `${window.location.origin}/payment/return`
            : "",
        notify_url:
          typeof window !== "undefined"
            ? `${window.location.origin}/api/webhook`
            : "",
      };

      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:8000/api/payment/cashfree/create-order"
          : "/api/payment/cashfree/create-order";

      const response = await axios.post<CashfreeOrderResponse>(
        apiUrl,
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResponseData(response.data);

      if (response.data.payment_session_id) {
        await openCashfreeCheckout(response.data.payment_session_id);
      } else {
        setError(
          response.data.message ||
            "Payment session not created. Please try again."
        );
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorData = err.response?.data;
        setError(
          errorData?.detail?.message ||
            errorData?.message ||
            "Failed to create payment order"
        );
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const cashfreeUrl = process.env.NEXT_PUBLIC_CASHFREE_URL;

  return (
    <>
      {/* Load Cashfree SDK */}
      <Script
        src={cashfreeUrl}
        onLoad={handleCashfreeLoad}
        onError={() => setError("Failed to load payment system")}
      />

      <div className="container mx-auto p-4 max-w-md">
        <h1 className="text-2xl font-bold mb-6">Make Payment</h1>

        {!cashfreeLoaded && (
          <div className="bg-blue-100 p-4 rounded mb-4">
            Loading payment gateway...
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
            {responseData?.error && (
              <div className="mt-2 text-sm">
                <p>Details: {responseData.error}</p>
                {responseData.order_id && (
                  <p>Order ID: {responseData.order_id}</p>
                )}
              </div>
            )}
          </div>
        )}

        {isRedirecting && (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
            <div className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Opening Cashfree payment page...
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount (INR)
            </label>
            <input
              id="amount"
              type="number"
              {...register("amount", {
                required: "Amount is required",
                min: { value: 1, message: "Amount must be at least ₹1" },
              })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                errors.amount ? "border-red-500" : ""
              }`}
            />
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">
                {errors.amount.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number (10 digits required)",
                },
              })}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || isRedirecting || !cashfreeLoaded}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : isRedirecting ? (
              "Opening Payment Page..."
            ) : !cashfreeLoaded ? (
              "Loading..."
            ) : (
              "Proceed to Pay"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
