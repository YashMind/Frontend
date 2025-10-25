"use client";
import { getMeData } from "@/store/slices/auth/authSlice";
import { activateTrial } from "@/store/slices/payments/slice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

const TrialActivationPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const userData = useSelector((state: RootState) => state.auth.loggedInUser);
  const isLoading = useSelector((state: RootState) => state.auth.loading);
  const [error, setError] = useState();

  useEffect(() => {
    dispatch(getMeData({ router, returnPath: "/activate-trial" }));
  }, [dispatch]);

  const handleActivateTrial = () => {
    dispatch(activateTrial())
      .unwrap()
      .then(() => {
        router.push("/chatbot-dashboard/main");
      })
      .catch((e) => {
        toast.error(e.message, {
          duration: 10000,
        });
        setError(e.message);
      });
  };

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-8 max-w-md w-full text-center">
          <div className="animate-pulse text-white">Loading user data...</div>
        </div>
      </div>
    );
  }

  if (userData.activate_plan) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Subscription Status
            </h2>
            <div className="w-16 h-1 bg-purple-400 mx-auto"></div>
          </div>

          <div className="bg-purple-900 bg-opacity-30 rounded-lg p-4 mb-6 border border-purple-400">
            <p className="text-white text-center">
              Your account already has active subscription benefits. To modify
              your plan, please visit our{" "}
              <Link
                href={"/#pricing"}
                className="underline text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                upgrade
              </Link>{" "}
              options.
            </p>
          </div>

          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition duration-200"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-purple-900 to-blue-900  p-4">
      <div className="flex items-center gap-5 justify-center">
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-8 max-w-md w-full backdrop-blur-sm">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Start Your 7-Day Free Trial
            </h1>
            <div className="w-20 h-1 bg-purple-400 mx-auto"></div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="ml-3 text-gray-200">
                Full access to Basic plan features for 7 days
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="ml-3 text-gray-200">
                No credit card required to start
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="ml-3 text-gray-200">
                Cancel anytime during trial with no charges
              </p>
            </div>
          </div>

          <div className="bg-purple-900 bg-opacity-30 rounded-lg p-4 mb-6 border border-purple-400">
            <p className="text-white text-center">
              After 7 days, you'll need to choose a plan to continue using our
              services.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900 bg-opacity-50 text-red-100 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleActivateTrial}
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition duration-200 ${isLoading
              ? "bg-purple-700 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
              }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
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
                Activating...
              </span>
            ) : (
              "Activate Free Trial"
            )}
          </button>

          <p className="mt-4 text-center text-gray-300 text-sm">
            By clicking "Activate Free Trial", you agree to our{" "}
            <a href="/terms" className="text-purple-300 hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>
        <video
          width="560"
          height="315"
          controls
          className="rounded-lg shadow-lg"
        >
          <source
            src="https://youtu.be/FeowaacCfKA?si=svLjKBvO9XDmxOIp"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className=" flex justify-center flex-col  items-center gap-4 my-16">
        <div className="text-center mb-12">
          <h1
            className="text-3xl font-extrabold text-white
 sm:text-4xl"
          >
            Contact Us
          </h1>
          <p className="mt-3 text-xl text-white">We'd love to hear from you</p>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg w-[50%] shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-start justify-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-medium text-gray-900 ml-6">Phone</h3>
              <p className="text-lg font-medium text-gray-900 ml-6">
                <p className="hover:text-indigo-500">
                  +91-8623893563
                </p>
              </p>
              <p className="text-lg font-medium text-gray-900 ml-3">:</p>

              <p className="text-lg font-medium text-gray-900 ml-6">Yash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialActivationPage;
