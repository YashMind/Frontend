"use client";
import HistoryBackButton from "@/components/utils/historyBackButton";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState } from "react";
import dynamic from "next/dynamic";

// Import InvitedUsersTable with no SSR
const InvitedUsersTable = dynamic(() => import("./InvitedUsersTable"), {
  ssr: false,
});

// Import InvitationModal with no SSR
const InvitationModal = dynamic(() => import("./InvitationModal"), {
  ssr: false,
});

// Import ErrorBoundary with no SSR
const ErrorBoundary = dynamic(() => import("./ErrorBoundary"), {
  ssr: false,
});

const InviteUserClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get invited users from Redux store
  const invitedUsers = useSelector(
    (state: RootState) => state.invitations.invitedUsers
  );

  // Handle successful invitation from modal
  const handleInvitationSuccess = () => {
    // The table will automatically refresh its data
    // No need to manually refresh here since the table manages its own state
  };

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61]">
      <HistoryBackButton />
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mt-4 mb-6">
          <h1 className="text-4xl font-bold text-white">Invited Users</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add Invitation
          </button>
        </div>

        {/* Invited Users Table - Show all invited users */}
        <ErrorBoundary>
          <InvitedUsersTable invitedUsers={invitedUsers} />
        </ErrorBoundary>

        {/* Invitation Modal */}
        <InvitationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleInvitationSuccess}
        />
      </div>
    </div>
  );
};

export default InviteUserClient;
