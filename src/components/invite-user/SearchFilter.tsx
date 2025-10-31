"use client";
import { useState } from "react";

interface SearchFilterProps {
  onSearchChange: (searchTerm: string) => void;
  onStatusFilter: (status: string) => void;
  searchTerm: string;
  selectedStatus: string;
}

const SearchFilter = ({
  onSearchChange,
  onStatusFilter,
  searchTerm,
  selectedStatus,
}: SearchFilterProps) => {
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
  ];

  const getStatusLabel = (value: string) => {
    return (
      statusOptions.find((option) => option.value === value)?.label ||
      "All Status"
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      {/* Search Input */}
      <div className="flex-1">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by name, email, or chatbot..."
            value={searchTerm}
            onChange={(e) => {
              try {
                onSearchChange(e.target.value);
              } catch (error) {
                console.log("Error in search change:", error);
              }
            }}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg
                className="h-5 w-5 text-gray-400 hover:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Status Filter */}
      <div className="relative">
        <button
          onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
          className="flex items-center justify-between w-full sm:w-48 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <span>{getStatusLabel(selectedStatus)}</span>
          <svg
            className={`w-5 h-5 ml-2 transition-transform ${isStatusDropdownOpen ? "rotate-180" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isStatusDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            {statusOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onStatusFilter(option.value);
                  setIsStatusDropdownOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${option.value === selectedStatus
                    ? "bg-indigo-50 text-indigo-700 font-medium"
                    : "text-gray-700"
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
