"use client";

import { useState } from "react";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";

export default function ApiTestPage() {
  const [token, setToken] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const testAcceptInvite = async () => {
    if (!token) {
      toasterError("Please enter a token", 3000, "api-test");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      console.log(`Testing accept-invite API with token: ${token}`);
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

      setResponse(data);

      if (response.ok) {
        toasterSuccess("API call successful", 10000, "api-test");
      } else {
        setError(data.detail || "API call failed");
        toasterError(data.detail || "API call failed", 10000, "api-test");
      }
    } catch (err: any) {
      console.error("API call error:", err);
      setError(err.message || "An error occurred");
      toasterError(err.message || "An error occurred", 10000, "api-test");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">API Test Page</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Invitation Token
          </label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter invitation token"
          />
        </div>

        <button
          onClick={testAcceptInvite}
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
            }`}
        >
          {loading ? "Testing..." : "Test Accept Invite API"}
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="font-bold">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {response && (
          <div className="mt-4">
            <p className="font-bold mb-2">API Response:</p>
            <pre className="bg-gray-100 p-3 rounded overflow-auto max-h-60 text-sm">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
