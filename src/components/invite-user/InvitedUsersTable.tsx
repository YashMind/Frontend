"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { useState, useEffect, useCallback } from "react";
import { getInvitedUsers } from "@/store/slices/invitations/invitationSlice";
import dynamic from "next/dynamic";
import { formatDate } from "../utils/formatDateTime";
import { useTimezone } from "@/context/TimeZoneContext";

// Import RevokeConfirmationModal with no SSR
const RevokeConfirmationModal = dynamic(
  () => import("./RevokeConfirmationModal"),
  {
    ssr: false,
  }
);

// Import Pagination with no SSR
const Pagination = dynamic(() => import("./Pagination"), {
  ssr: false,
});

// Import SearchFilter with no SSR
const SearchFilter = dynamic(() => import("./SearchFilter"), {
  ssr: false,
});

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

interface InvitedUsersTableProps {
  invitedUsers: InvitedUser[];
}

const InvitedUsersTable = ({ invitedUsers }: InvitedUsersTableProps) => {
  const { isLoading, timezone } = useTimezone()
  const dispatch = useDispatch<AppDispatch>();
  const [isRevokeModalOpen, setIsRevokeModalOpen] = useState(false);
  const [userToRevoke, setUserToRevoke] = useState<InvitedUser | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const revokeLoading = useSelector(
    (state: RootState) => state.invitations.revokeLoading
  );

  const loading = useSelector((state: RootState) => state.invitations.loading);

  const handleRevokeClick = (user: InvitedUser) => {
    setUserToRevoke(user);
    setIsRevokeModalOpen(true);
  };

  const handleCloseRevokeModal = () => {
    setIsRevokeModalOpen(false);
    setUserToRevoke(null);
  };

  // Get pagination info from Redux store
  const pagination = useSelector(
    (state: RootState) => state.invitations.pagination
  );

  // Use server-side pagination data
  const totalItems = pagination?.total_items || 0;
  const totalPages = pagination?.total_pages || 0;
  const currentItems = invitedUsers || [];

  // Function to fetch data with current filters
  const fetchData = useCallback(
    (
      page = currentPage,
      pageSize = itemsPerPage,
      search = searchTerm,
      status = selectedStatus
    ) => {
      try {
        dispatch(
          getInvitedUsers({
            page,
            pageSize,
            search: search?.trim() || undefined,
            status: status !== "all" ? status : undefined,
          })
        );
      } catch (error) {
        console.log("Error fetching invited users:", error);
      }
    },
    [dispatch, currentPage, itemsPerPage, searchTerm, selectedStatus]
  );

  // Debounced search function
  const debouncedSearch = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (searchValue: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setCurrentPage(1);
          fetchData(1, itemsPerPage, searchValue, selectedStatus);
        }, 300); // 300ms delay
      };
    })(),
    [fetchData, itemsPerPage, selectedStatus]
  );

  // Pagination handlers
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchData(page, itemsPerPage, searchTerm, selectedStatus);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
    fetchData(1, newItemsPerPage, searchTerm, selectedStatus);
  };

  // Search and filter handlers
  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    // Use debounced search to avoid too many API calls
    debouncedSearch(newSearchTerm);
  };

  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status);
    setCurrentPage(1);
    fetchData(1, itemsPerPage, searchTerm, status);
  };

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, []); // Only run on mount



  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "active":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "pending":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case "revoked":
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  if (!invitedUsers || invitedUsers.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          All Invited Users
        </h3>
        <div className="text-center py-8">
          <p className="text-gray-500">No users have been invited yet.</p>
          <p className="text-sm text-gray-400 mt-2">
            Click "Add Invitation" to invite users to your chatbots.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        All Invited Users ({totalItems} of {invitedUsers.length})
      </h3>

      {/* Search and Filter */}
      <SearchFilter
        onSearchChange={handleSearchChange}
        onStatusFilter={handleStatusFilter}
        searchTerm={searchTerm}
        selectedStatus={selectedStatus}
      />

      <div className="overflow-x-auto relative">
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
            <div className="flex items-center space-x-2">
              <svg
                className="animate-spin h-5 w-5 text-indigo-600"
                viewBox="0 0 24 24"
              >
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
              <span className="text-sm text-gray-600">Loading...</span>
            </div>
          </div>
        )}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Chatbot
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invited Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((user) => (
              <tr key={user.sharing_id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.user_name || "Unknown User"}
                  </div>
                  {user.user_id && (
                    <div className="text-sm text-gray-500">
                      ID: {user.user_id}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {user.shared_email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.chatbot_name}
                  </div>
                  <div className="text-sm text-gray-500">
                    Bot ID: {user.bot_id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusBadge(user.status)}>
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {!isLoading ? formatDate(user.created_at, timezone) : '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {user.status !== "revoked" && (
                    <button
                      onClick={() => handleRevokeClick(user)}
                      disabled={revokeLoading}
                      className={`text-red-600 hover:text-red-900 ${revokeLoading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                      Revoke Access
                    </button>
                  )}
                  {user.status === "revoked" && (
                    <span className="text-gray-400">Access Revoked</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalItems > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      )}

      {/* Revoke Confirmation Modal */}
      <RevokeConfirmationModal
        isOpen={isRevokeModalOpen}
        onClose={handleCloseRevokeModal}
        user={userToRevoke}
      />
    </div>
  );
};

export default InvitedUsersTable;
