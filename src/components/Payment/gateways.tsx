"use client";
import {
  getAllPaymentGateway,
  getPublicSubscriptionPlans,
  getUserDataOverview,
  processDowngradeAfterPayment,
} from "@/store/slices/admin/adminSlice";
import { getMeData } from "@/store/slices/auth/authSlice";
import {
  createPaymentOrderCashfree,
  createPaymentOrderPaypal,
  createPaymentOrderRazorPay,
} from "@/store/slices/payments/slice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsArrowRight } from "react-icons/bs";
import { FaPaypal, FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { isWithinPlanLimits } from "@/lib/planUtils";

interface PaymentResponse {
  payment_session_id?: string;
  approve_url?: string;
  order_id?: string;
  cf_order_id?: number;
  success?: boolean;
  error?: string;
  message?: string;
  razorpay_order_id?: string;
  razorpay_key_id?: string;
}

const Gateways = ({
  plan_id,
  credit,
}: {
  plan_id?: string;
  credit?: string;
}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedGateway, setSelectedGateway] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [cashfreeLoaded, setCashfreeLoaded] = useState(false);
  const [razorpayLoaded, setrazorpayLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const userData: UserProfileData | null = useSelector(
    (state: RootState) => state.auth.userData
  );

  const { loading, paymentGatewayData } = useSelector(
    (state: RootState) => state.admin
  );

  const { publicSubscriptionPlansData } = useSelector(
    (state: RootState) => state.admin
  );

  useEffect(() => {
    dispatch(getMeData({ router }));
    dispatch(getAllPaymentGateway());
    // prefetch public plans to avoid an extra call during payment flow
    dispatch(getPublicSubscriptionPlans());
  }, [dispatch, router]);

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
  const handleRazorPay = () => {
    setrazorpayLoaded(true);
  };
  const openCashfreeCheckout = async (
    paymentSessionId: string,
    selectionId: string | null
  ) => {
    try {
      if (!window.Cashfree) {
        throw new Error("Cashfree SDK not loaded");
      }
      setIsRedirecting(true);

      const checkoutOptions = {
        paymentSessionId: paymentSessionId,
        redirectTarget: "_self",
        returnUrl: `${window.location.origin}/payment/return?selection_id=${
          selectionId || ""
        }`,
        components: ["order-details", "card", "upi"],
      };

      await window.Cashfree.checkout(checkoutOptions);
    } catch (error) {
      setError("Failed to open payment page");
      setIsRedirecting(false);
    }
  };

  const openRazorpayCheckout = async (
    orderData: any,
    selectionId: string | null
  ) => {
    try {
      // Type-safe check for Razorpay
      if (!(window as any).Razorpay) {
        throw new Error("Razorpay SDK not loaded");
      }
      setIsRedirecting(true);

      const options = {
        key: orderData.razorpay_key_id,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Your Company Name",
        description: "Payment for subscription",
        order_id: orderData.razorpay_order_id,
        handler: async function (response: any) {
          try {
            if (selectionId) {
              setIsProcessing(true);
              await dispatch(
                processDowngradeAfterPayment({
                  selection_id: selectionId,
                  payment_reference: orderData.order_id,
                })
              ).unwrap();
              toast.success("Downgrade processed successfully");
            }

            router.push(`/payment/success?order_id=${orderData.order_id}`);
          } catch (error: any) {
            console.error("Downgrade processing failed:", error);
            router.push(
              `/payment/success?order_id=${orderData.order_id}&downgrade_error=true`
            );
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: userData?.fullName || "",
          email: userData?.email || "",
          contact: "9876543210",
        },
        notes: {
          order_id: orderData.order_id,
          selection_id: selectionId,
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Use type assertion
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      setError("Failed to open payment page");
      setIsRedirecting(false);
    }
  };

  const handleGatewaySelect = (gateway: string) => {
    setSelectedGateway(gateway);
  };

  const handlePaymentRequest = async () => {
    if (!selectedGateway || !userData) return;

    setIsProcessing(true);
    setError(null);
    const urlParams = new URLSearchParams(window.location.search);
    const selectionId = urlParams.get("selection_id");
    const payload = {
      customer_id: userData.id!,
      plan_id: plan_id ? parseInt(plan_id) : undefined,
      credit: credit ? parseInt(credit) : undefined,
      return_url: `${window.location.origin}/payment/return?selection_id=${
        selectionId || ""
      }`,
      selection_id: selectionId || undefined,
    };

    try {
      // SKIP downgrade/limits check if user comes from downgrade page (has selection_id)
      if (plan_id && userData && !selectionId) {
        // ← Added !selectionId condition
        const selectedPlanId = parseInt(plan_id);

        // fetch public plans list (returns array)
        let plans: any[] = [];
        try {
          plans = await dispatch(getPublicSubscriptionPlans()).unwrap();
        } catch (err) {
          // fallback to state if thunk failed or already present
          plans = publicSubscriptionPlansData?.data || [];
        }

        const selectedPlan = Array.isArray(plans)
          ? plans.find((p) => p.id === selectedPlanId)
          : undefined;

        // If we found a plan, run overview check
        if (selectedPlan) {
          let overview: any = {};
          try {
            overview = await dispatch(getUserDataOverview()).unwrap();
          } catch (err) {
            // if overview fetch fails, allow payment to proceed (best-effort)
            overview = null;
          }

          if (overview) {
            const fits = isWithinPlanLimits(overview, selectedPlan);
            if (!fits) {
              toast.error(
                "Your current data exceeds the limits of the selected plan. Redirecting to downgrade help page."
              );
              router.push(
                `/credits-and-plans/downgrade?plan=${selectedPlanId}`
              );
              return;
            }
          }
        }
      }

      let response: PaymentResponse;

      if (selectedGateway === "cashfree") {
        const res = await dispatch(
          createPaymentOrderCashfree(payload)
        ).unwrap();
        response = res;
        await openCashfreeCheckout(res.payment_session_id!, selectionId);
      } else if (selectedGateway === "paypal") {
        const res = await dispatch(createPaymentOrderPaypal(payload)).unwrap();
        response = res;

        if (res.approve_url) {
          setIsRedirecting(true);
          window.location.href = res.approve_url;
        } else {
          throw new Error("No PayPal approval URL received");
        }
      } else if (selectedGateway === "razorpay") {
        const res = await dispatch(
          createPaymentOrderRazorPay(payload)
        ).unwrap();
        response = res;

        if (res.razorpay_order_id) {
          await openRazorpayCheckout(res, selectionId);
        } else {
          throw new Error("No Razorpay order ID received");
        }
      }

      toast.success("Payment initiated successfully");
    } catch (e: any) {
      const errorMsg = e.detail?.message || e.message || "Payment failed";
      setError(errorMsg);
      toast.error(`Payment error: ${errorMsg}`);
    } finally {
      setIsProcessing(false);
    }
  };

  // Check if any payment gateway is active
  const activeGateways =
    paymentGatewayData?.filter((item) => item.status === "active") || [];

  const cashfreeUrl = process.env.NEXT_PUBLIC_CASHFREE_URL;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <Script
        src={cashfreeUrl}
        onLoad={handleCashfreeLoad}
        onError={() => setError("Failed to load Cashfree SDK")}
      />
      <Script
        strategy="afterInteractive"
        id="razorpay-sdk"
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={handleRazorPay}
        onError={() => setError("Failed to load Razorpay SDK")}
      />

      {!cashfreeLoaded && selectedGateway === "cashfree" && (
        <div className="bg-blue-100 p-4 rounded mb-4">
          Loading payment gateway...
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {(isRedirecting || (isProcessing && selectedGateway === "paypal")) && (
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
            {selectedGateway === "cashfree"
              ? "Opening Cashfree payment page..."
              : "Redirecting to PayPal..."}
          </div>
        </div>
      )}

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Select Payment Method
            </h2>
            <p className="mt-2 text-gray-600">
              Choose your preferred payment gateway
            </p>
          </div>

          <div className="space-y-4">
            {activeGateways.some(
              (g) => g.payment_name.toLowerCase() === "razorpay"
            ) && (
              <div
                onClick={() => handleGatewaySelect("razorpay")}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedGateway === "razorpay"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaRupeeSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      RazorPay
                    </h3>
                    <p className="text-gray-600">
                      Pay with UPI, Cards, Net Banking
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PayPal Option */}
            {activeGateways.some(
              (g) => g.payment_name.toLowerCase() === "paypal"
            ) && (
              <div
                onClick={() => handleGatewaySelect("paypal")}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedGateway === "paypal"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaPaypal className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      PayPal
                    </h3>
                    <p className="text-gray-600">
                      Pay with your PayPal account
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Cashfree Option */}
            {activeGateways.some(
              (g) => g.payment_name.toLowerCase() === "cashfree"
            ) && (
              <div
                onClick={() => handleGatewaySelect("cashfree")}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedGateway === "cashfree"
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 hover:border-indigo-300"
                }`}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaRupeeSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Cashfree
                    </h3>
                    <p className="text-gray-600">
                      Pay with UPI, Cards, Net Banking
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {!loading ? (
            activeGateways.length > 0 ? (
              <div className="mt-8">
                <button
                  onClick={handlePaymentRequest}
                  disabled={!selectedGateway || isProcessing}
                  className={`w-full flex justify-center items-center py-3 px-4 rounded-md shadow-sm text-white font-medium ${
                    !selectedGateway
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  } ${isProcessing ? "opacity-75" : ""}`}
                >
                  {isProcessing ? (
                    "Processing..."
                  ) : (
                    <>
                      Continue to Payment
                      <BsArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <h2 className="mx-auto text-center text-xl font-semibold text-red-500">
                No active payment methods available
              </h2>
            )
          ) : (
            <h2 className="mx-auto text-center text-xl font-semibold text-gray-500">
              Loading payment methods...
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gateways;
