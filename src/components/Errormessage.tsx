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
}

const ITEMS_PER_PAGE = 5;

export const ErrorLogsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  logs,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, timezone } = useTimezone();

  // Filter logs to only show ChatBot Exception errors
  const filteredLogs = useMemo(() => {
    return logs.filter(log => log.subject?.includes("ChatBot Exception"));
  }, [logs]);

  // Calculate pagination values
  const totalItems = filteredLogs.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
  // Get current page items
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredLogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, filteredLogs]);

  // Reset to first page when logs change
  useEffect(() => {
    setCurrentPage(1);
  }, [logs]);

  if (!isOpen) return null;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-8 w-[700px] max-w-full shadow-2xl relative max-h-[80vh] overflow-auto">
        <h2 className="text-xl font-bold mb-4">Error Logs</h2>

        <table className="w-full text-sm mb-4 border-collapse border border-gray-600">
          <thead>
            <tr>
              {/* <th className="border border-gray-600 p-2 text-left">Subject</th> */}
              <th className="border border-gray-600 p-2 text-left">Message</th>
              <th className="border border-gray-600 p-2 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((log) => (
                <tr key={log.id} className="even:bg-[#14254a]">
                  {/* <td className="border border-gray-600 p-2">{log.subject || "N/A"}</td> */}
                  <td className="border border-gray-600 p-2">{log.message}</td>
                  <td className="border border-gray-600 p-2">
                    {!isLoading ? formatDateTimeWithTz(log.created_at, timezone) : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No error logs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 bg-white text-gray-800 rounded disabled:opacity-50 ${
                currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Prev
            </button>
            
            {/* <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded ${
                    currentPage === page 
                      ? "bg-blue-500 text-white" 
                      : "bg-white text-gray-800"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div> */}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 bg-white text-gray-800 rounded disabled:opacity-50 ${
                currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
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