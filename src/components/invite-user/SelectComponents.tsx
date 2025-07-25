"use client";

import Select from "react-select";
import { useEffect, useState, useRef } from "react";

// ... (keep your existing interfaces)

export default function SelectComponents({
  chatbotOptions,
  onChatbotChange,
  onUsersChange,
  isDisabled,
  selectedChatbot,
  selectedUsers,
}: SelectComponentsProps) {
  const [mounted, setMounted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChatbotChange = (newValue: any) => {
    onChatbotChange(newValue as ChatbotOption);
  };

  const addEmail = () => {
    const email = inputValue.trim();
    if (email && isValidEmail(email)) {
      const newUser = { value: email, label: email };
      // Create new array reference to ensure state update
      const updatedUsers = [...selectedUsers, newUser];
      onUsersChange(updatedUsers);
      setInputValue("");
      inputRef.current?.focus(); // Maintain focus after adding
      return true;
    }
    return false;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      addEmail();
    } else if (e.key === "Backspace" && inputValue === "" && selectedUsers.length > 0) {
      const newUsers = [...selectedUsers];
      newUsers.pop();
      onUsersChange(newUsers);
    }
  };

  const handleBlur = () => {
    addEmail();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const removeTag = (index: number) => {
    const newUsers = [...selectedUsers];
    newUsers.splice(index, 1);
    onUsersChange(newUsers);
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (!mounted) {
    return (
      <>
        <div className="h-10 bg-gray-100 rounded animate-pulse mb-4"></div>
        <div className="h-10 bg-gray-100 rounded animate-pulse"></div>
      </>
    );
  }

  return (
    <>
      {/* Chatbot Selector (unchanged) */}
      <div>
        <label className="block text-sm font-medium text-gray-500 mb-2">
          Select Chatbot
        </label>
        <Select
          value={selectedChatbot}
          onChange={handleChatbotChange}
          options={chatbotOptions}
          placeholder="Select a chatbot"
          className="text-black cursor-pointer"
          classNamePrefix="select"
          isDisabled={isDisabled}
        />
      </div>

      {/* Email Input Section */}
      <div>
        <label className="block text-sm font-medium text-gray-500 mb-2">
          Enter User Emails (comma separated)
        </label>
        <div
          className={`min-h-10 p-2 border rounded-md flex flex-wrap gap-2 items-center ${isDisabled ? "bg-gray-100" : "bg-white"}`}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Display selected users */}
          {selectedUsers.map((user, index) => (
            <div
              key={user.value} // Changed to use email as key for better stability
              className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
            >
              {user.label}
              {!isDisabled && (
                <button
                  type="button"
                  className="ml-1 text-blue-500 hover:text-blue-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTag(index);
                  }}
                >
                  &times;
                </button>
              )}
            </div>
          ))}
          
          {/* Email input field */}
          {!isDisabled && (
            <input
              ref={inputRef} 
              type="text"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              placeholder={selectedUsers.length === 0 ? "user@example.com" : ""}
              className="flex-1 min-w-[100px] outline-none " 
              disabled={isDisabled}
            />
          )}
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Type comma or press enter to add email
        </p>
      </div>
    </>
  );
}