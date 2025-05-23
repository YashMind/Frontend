"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { acceptInvitation } from "@/store/slices/invitations/invitationSlice";
import Link from "next/link";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";

interface AcceptInviteClientProps {
  token: string;
}

export default function AcceptInviteClient({ token }: AcceptInviteClientProps) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Get invitation state from Redux
  const loading = useSelector((state: RootState) => state.invitations.loading);
  const error = useSelector((state: RootState) => state.invitations.error);
  const success = useSelector((state: RootState) => state.invitations.success);
  const [inviteDetails, setInviteDetails] = useState<any>(null);

  useEffect(() => {
    if (token) {
      console.log(`Accepting invitation with token: ${token}`);

      // Direct API call for debugging
      const directApiCall = async () => {
        try {
          console.log("Making direct API call to accept invitation");
          const response = await fetch(`/api/chatbot/accept-invite/${token}`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log("API Response status:", response.status);
          const data = await response.json();
          console.log("API Response data:", data);

          if (response.ok) {
            setInviteDetails(data);
            toasterSuccess(
              "Invitation accepted successfully!",
              3000,
              "accept-invite"
            );
          } else {
            toasterError(
              data.detail || "Failed to accept invitation",
              3000,
              "accept-invite"
            );
          }
        } catch (error) {
          console.error("Direct API call error:", error);
          toasterError("Error connecting to the server", 3000, "accept-invite");
        }
      };

      // Try both methods
      directApiCall();

      dispatch(acceptInvitation(token))
        .unwrap()
        .then((result) => {
          console.log("Redux accept invitation result:", result);
          setInviteDetails(result);
        })
        .catch((err) => {
          console.error("Error in Redux acceptInvitation:", err);
        });
    }
  }, [token, dispatch]);

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
            <p className="mb-4">
              {error.includes("logged in") ? (
                <>
                  Please{" "}
                  <Link
                    href="/auth/login"
                    className="text-indigo-600 hover:underline"
                  >
                    log in
                  </Link>{" "}
                  with the email address that received this invitation and try
                  again.
                </>
              ) : (
                "Please contact the person who sent you this invitation for assistance."
              )}
            </p>
            <div className="mt-6">
              <Link
                href="/dashboard"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        )}

        {success && !loading && (
          <div className="text-center py-6">
            <p className="mb-4">
              You now have access to the shared chatbot. You can access it from
              your dashboard.
            </p>
            <div className="mt-6">
              <Link
                href="/dashboard"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
