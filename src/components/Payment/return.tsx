import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { PaymentVerificationResponse } from "@/types/payment";
import { formatDateTimeWithTz } from "../utils/formatDateTime";
import { useTimezone } from "@/context/TimeZoneContext";

export default function PaymentReturn() {
  const router = useRouter();
  const { isLoading, timezone } = useTimezone();
  const [status, setStatus] = useState("Verifying payment...");
  const [orderDetails, setOrderDetails] =
    useState<PaymentVerificationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { order_id, payment_id } = router.query;

    if (!order_id) {
      setError("No order ID found in the URL");
      return;
    }

    const verifyPayment = async () => {
      try {
        setStatus("Verifying payment status...");

        const response = await axios.post<PaymentVerificationResponse>(
          "/api/verify-payment",
          {
            order_id,
            payment_id: payment_id as string | undefined,
          }
        );

        setOrderDetails(response.data);

        if (response.data.payment_status === "SUCCESS") {
          setStatus("Payment successful!");
        } else {
          setStatus(`Payment status: ${response.data.payment_status}`);
        }
      } catch (err) {
        setError(
          axios.isAxiosError(err)
            ? err.response?.data?.detail || "Failed to verify payment"
            : "An unexpected error occurred"
        );
        setStatus("Payment verification failed");
      }
    };

    verifyPayment();
  }, [router.query]);

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Payment Status</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="mb-4">{status}</p>

        {orderDetails && (
          <div className="space-y-2">
            <p>
              <strong>Order ID:</strong> {orderDetails.order_id}
            </p>
            <p>
              <strong>Amount:</strong> ₹{orderDetails.order_amount.toFixed(2)}
            </p>
            <p>
              <strong>Status:</strong>
              <span
                className={`ml-2 ${
                  orderDetails.payment_status === "SUCCESS"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {orderDetails.payment_status}
              </span>
            </p>
            {orderDetails.payment_time && (
              <p>
                <strong>Payment Time:</strong>{" "}
                {formatDateTimeWithTz(orderDetails.payment_time, timezone)}
              </p>
            )}
            {orderDetails.payment_method && (
              <p>
                <strong>Payment Method:</strong> {orderDetails.payment_method}
              </p>
            )}
            {orderDetails.payment_id && (
              <p>
                <strong>Payment ID:</strong> {orderDetails.payment_id}
              </p>
            )}
          </div>
        )}
      </div>

      <button
        onClick={() => router.push("/")}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Return to Home
      </button>
    </div>
  );
}
