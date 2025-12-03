"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { formatDate } from "../utils/formatDateTime";
import { useTimezone } from "@/context/TimeZoneContext";

interface PayPalPaymentResponse {
  status: string;
  orderID: string;
  details: any;
  error?: string;
}

export default function PayPalReturn() {
  const searchParams = useSearchParams();
  const { isLoading, timezone } = useTimezone();
  const [status, setStatus] = useState("Verifying payment...");
  const [paymentDetails, setPaymentDetails] =
    useState<PayPalPaymentResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setError("No payment token found in the URL");
      return;
    }

    const verifyPayment = async () => {
      try {
        setStatus("Capturing PayPal payment...");

        const apiUrl =
          process.env.NODE_ENV === "development"
            ? `http://localhost:8000/api/payment/capture-paypal-order/${token}`
            : `/api/payment/capture-paypal-order/${token}`;

        const response = await axios.post<PayPalPaymentResponse>(apiUrl);

        setPaymentDetails(response.data);

        if (response.data.status === "success") {
          setStatus("Payment successful!");
        } else {
          setStatus(`Payment status: ${response.data.status}`);
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
  }, [searchParams]);

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6">PayPal Payment Status</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="mb-4">{status}</p>

        {paymentDetails && (
          <div className="space-y-2">
            <p>
              <strong>Order ID:</strong> {paymentDetails.orderID}
            </p>
            <p>
              <strong>Status:</strong>
              <span
                className={`ml-2 ${
                  paymentDetails.status === "success"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {paymentDetails.status}
              </span>
            </p>

            {paymentDetails.details && (
              <>
                <p>
                  <strong>Amount:</strong>{" "}
                  {paymentDetails.details.purchase_units?.[0]?.amount?.value}{" "}
                  {
                    paymentDetails.details.purchase_units?.[0]?.amount
                      ?.currency_code
                  }
                </p>
                <p>
                  <strong>Payment Time:</strong>{" "}
                  {formatDate(paymentDetails.details.create_time, timezone)}
                </p>
                <p>
                  <strong>Payer Email:</strong>{" "}
                  {paymentDetails.details.payer?.email_address}
                </p>
                <p>
                  <strong>Payer Name:</strong>{" "}
                  {paymentDetails.details.payer?.name?.given_name}{" "}
                  {paymentDetails.details.payer?.name?.surname}
                </p>
              </>
            )}
          </div>
        )}
      </div>

      <button
        onClick={() => (window.location.href = "/")}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Return to Home
      </button>
    </div>
  );
}
