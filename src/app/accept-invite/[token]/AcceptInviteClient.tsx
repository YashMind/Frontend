"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { acceptInvitation } from "@/store/slices/invitations/invitationSlice";
import Link from "next/link";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";
import { getMeData } from "@/store/slices/auth/authSlice";

interface AcceptInviteClientProps {
  token: string;
}

export default function AcceptInviteClient({ token }: AcceptInviteClientProps) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector((state: RootState) => state.invitations.loading);
  const error = useSelector((state: RootState) => state.invitations.error);
  const success = useSelector((state: RootState) => state.invitations.success);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [_inviteDetails, setInviteDetails] = useState<any>(null);

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        dispatch(getMeData({ router })).unwrap().then((res) => {
          setIsAuthenticated(res.status == 200);
        }).catch((err) => { throw new Error(err) });
      } catch (_error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (token && isAuthenticated === true) {
      console.log(`Accepting invitation with token: ${token}`);

      const acceptInvite = async () => {
        try {
          console.log("Making API call to accept invitation");
          dispatch(acceptInvitation(token)).unwrap().then((response) => {
            console.log("API Response status:", response.status);
            console.log("API Response data:", response);

            if (response) {
              setInviteDetails(response);
              toasterSuccess(
                "Invitation accepted successfully!",
                10000,
                "accept-invite"
              );

              // Redirect to dashboard after successful acceptance
              setTimeout(() => {
                router.push("/dashboard");
              }, 2000);
            }

          }).catch((err) => {

            toasterError(
              err || "Failed to accept invitation",
              10000,
              "accept-invite"
            );

          })
        } catch (error) {
          console.error("API call error:", error);
          toasterError("Error connecting to the server", 10000, "accept-invite");
        }
      };

      acceptInvite();
    }
  }, [token, isAuthenticated, router]);

  // Show login prompt if not authenticated
  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">
            Authentication Required
          </h1>
          <div className="text-center py-6">
            <p className="mb-4 text-gray-600">
              Please log in to accept this chatbot invitation.
            </p>
            <div className="space-y-4">
              <Link
                href={`/auth/login?redirect=/accept-invite/${token}`}
                className="block w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 text-center"
              >
                Log In
              </Link>
              <Link
                href={`/auth/signup?redirect=/accept-invite/${token}`}
                className="block w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 text-center"
              >
                Sign Up
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Make sure to use the same email address that received this invitation.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Chatbot Invitation
        </h1>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Processing your invitation...</p>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-6">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>{error}</p>
            </div>
            <p className="mb-4 text-gray-600">
              {error.includes("logged in") || error.includes("Authentication") ? (
                <>
                  Please{" "}
                  <Link
                    href={`/auth/login?redirect=/accept-invite/${token}`}
                    className="text-indigo-600 hover:underline"
                  >
                    log in
                  </Link>{" "}
                  with the email address that received this invitation.
                </>
              ) : (
                "Please contact the person who sent you this invitation for assistance."
              )}
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Go Home
              </Link>
            </div>
          </div>
        )}

        {success && !loading && (
          <div className="text-center py-6">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <p>Invitation accepted successfully!</p>
            </div>
            <p className="mb-4 text-gray-600">
              You now have access to the shared chatbot. Redirecting to your dashboard...
            </p>
            <div className="mt-6">
              <Link
                href="/dashboard"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Go to Dashboard Now
              </Link>
            </div>
          </div>
        )}

        {isAuthenticated === null && !loading && !error && !success && (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Checking authentication...</p>
          </div>
        )}
      </div>
    </div>
  );
}