import { useTimezone } from "@/context/TimeZoneContext";
import React, { useState, useEffect, useMemo } from "react";
import { formatDateTimeWithTz } from "./utils/formatDateTime";

interface ErrorLogItem {
  id: number;
  username?: string;
  subject?: string;
  message: string;
  reason?: string;
  created_at: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  logs: ErrorLogItem[];
  total?: any;
  currentPage?: number; // Add this
  onPageChange?: (page: number) => void; // Add this
}

const ITEMS_PER_PAGE = 5;

export const ErrorLogsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  logs,
  total,
  currentPage = 1, // Default value
  onPageChange, // Destructure this prop
}) => {
  const { isLoading, timezone } = useTimezone();

  // Use the currentPage prop instead of local state
  const [internalPage, setInternalPage] = useState(currentPage);

  // Filter logs to only show ChatBot Exception errors
  const filteredLogs = useMemo(() => {
    return logs.filter((log) => log.subject?.includes("ChatBot Exception"));
  }, [logs]);

  // Calculate pagination values
  const totalItems = filteredLogs.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Get current page items
  const currentItems = useMemo(() => {
    const startIndex = (internalPage - 1) * ITEMS_PER_PAGE;
    return filteredLogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [internalPage, filteredLogs]);

  // Reset to first page when logs change
  useEffect(() => {
    setInternalPage(1);
  }, [logs]);

  // Sync with parent component's page
  useEffect(() => {
    if (currentPage !== internalPage) {
      setInternalPage(currentPage);
    }
  }, [currentPage]);

  if (!isOpen) return null;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setInternalPage(page);
      // Call parent's onPageChange if provided
      if (onPageChange) {
        onPageChange(page);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-8 w-[700px] max-w-full shadow-2xl relative max-h-[80vh] overflow-auto">
        <h2 className="text-xl font-bold mb-4">Error Logs</h2>

        <table className="w-full text-sm mb-4 border-collapse border border-gray-600">
          <thead>
            <tr>
              <th className="border border-gray-600 p-2 text-left">Message</th>
              <th className="border border-gray-600 p-2 text-left">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((log) => (
                <tr key={log.id} className="even:bg-[#14254a]">
                  <td className="border border-gray-600 p-2">{log.message}</td>
                  <td className="border border-gray-600 p-2">
                    {!isLoading
                      ? formatDateTimeWithTz(log.created_at, timezone)
                      : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="text-center py-4">
                  No error logs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => handlePageChange(internalPage - 1)}
              disabled={internalPage === 1}
              className={`px-3 py-1 bg-white text-gray-800 rounded disabled:opacity-50 ${
                internalPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Prev
            </button>

            <span className="text-sm">
              Page {internalPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(internalPage + 1)}
              disabled={internalPage === totalPages}
              className={`px-3 py-1 bg-white text-gray-800 rounded disabled:opacity-50 ${
                internalPage === totalPages
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              Next
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          className="cursor-pointer absolute top-3 right-3 text-white text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};
