"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { revokeAccess } from "@/store/slices/invitations/invitationSlice";

interface InvitedUser {
  sharing_id: number;
  bot_id: number;
  chatbot_name: string;
  status: string;
  created_at: string;
  updated_at: string;
  shared_email: string;
  user_name: string | null;
  user_id: number | null;
}

interface RevokeConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: InvitedUser | null;
}

const RevokeConfirmationModal = ({ isOpen, onClose, user }: RevokeConfirmationModalProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const revokeLoading = useSelector(
    (state: RootState) => state.invitations.revokeLoading
  );

  const handleConfirmRevoke = async () => {
    if (user) {
      try {
        await dispatch(revokeAccess(user.sharing_id));
        onClose();
      } catch (error) {
        console.log("Error revoking access:", error);
      }
    }
  };

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Confirm Revoke Access</h2>
          <button
            onClick={onClose}
            disabled={revokeLoading}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold disabled:opacity-50"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                Revoke Access Confirmation
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                This action cannot be undone.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-gray-900 mb-2">User Details:</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">Name:</span> {user.user_name || "Unknown User"}</p>
              <p><span className="font-medium">Email:</span> {user.shared_email}</p>
              <p><span className="font-medium">Chatbot:</span> {user.chatbot_name}</p>
              <p><span className="font-medium">Status:</span>
                <span className={`ml-1 px-2 py-1 rounded-full text-xs ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
              </p>
            </div>
          </div>

          <p className="text-gray-700">
            Are you sure you want to revoke access for <strong>{user.user_name || user.shared_email}</strong>
            to the chatbot <strong>{user.chatbot_name}</strong>?
          </p>

          <p className="text-sm text-red-600 mt-2">
            The user will immediately lose access to this chatbot and will need to be re-invited to regain access.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            disabled={revokeLoading}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmRevoke}
            disabled={revokeLoading}
            className={`px-6 py-2 rounded-md text-white font-medium transition-colors ${revokeLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
              }`}
          >
            {revokeLoading ? (
              <div className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Revoking...
              </div>
            ) : (
              "Revoke Access"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevokeConfirmationModal;
