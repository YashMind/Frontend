import { useTimezone } from "@/context/TimeZoneContext";
import React from "react";
import { formatDateTimeWithTz } from "./utils/formatDateTime";

interface LogItem {
  id: number;
  username: string;
  role: string;
  action: string;
  log_activity: string;
  created_at: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  logs: LogItem[];
  total: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const ITEMS_PER_PAGE = 5;

export const ActivityLogsModal: React.FC<Props> = ({ isOpen, onClose, logs, total, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  const { isLoading, timezone } = useTimezone()

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-8 w-[700px] max-w-full shadow-2xl relative">
        <h2 className="text-xl font-bold mb-4">Activity Logs</h2>

        <table className="w-full text-sm mb-4 border-collapse border border-gray-600">
          <thead>
            <tr>
              <th className="border border-gray-600 p-2 text-left">User</th>
              <th className="border border-gray-600 p-2 text-left">Role</th>
              <th className="border border-gray-600 p-2 text-left">Action</th>
              <th className="border border-gray-600 p-2 text-left">Activity</th>
              <th className="border border-gray-600 p-2 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(logs) && logs.length > 0 ? (
              logs.map(log => (
                <tr key={log.id} className="even:bg-[#14254a]">
                  <td className="border border-gray-600 p-2">{log.username}</td>
                  <td className="border border-gray-600 p-2">{log.role}</td>
                  <td className="border border-gray-600 p-2">{log.action}</td>
                  <td className="border border-gray-600 p-2">{log.log_activity}</td>
                  <td className="border border-gray-600 p-2">{!isLoading ? formatDateTimeWithTz(log.created_at, timezone) : "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">No logs found.</td>
              </tr>
            )}
          </tbody>

        </table>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 bg-white text-gray-800 rounded disabled:opacity-50 ${currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
          >
            Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 bg-white text-gray-800 rounded disabled:opacity-50 ${currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
              }`}
          >
            Next
          </button>
        </div>

        <button onClick={onClose} className="cursor-pointer absolute top-3 right-3 text-white text-xl font-bold">×</button>
      </div>
    </div>
  );
};
