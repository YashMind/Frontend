"use client";

import Link from "next/link";

export default function AcceptInviteTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Accept Invite Test Page</h1>
        <p className="mb-4 text-center">
          This is a test page to verify routing is working correctly.
        </p>
        <div className="mt-6 text-center">
          <Link 
            href="/dashboard" 
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
