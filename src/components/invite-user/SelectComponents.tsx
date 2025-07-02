"use client";

import Select from "react-select";
import { useEffect, useState, useRef } from "react";

interface ChatbotOption {
  value: number;
  label: string;
}

interface UserOption {
  value: string;
  label: string;
}

interface SelectComponentsProps {
  chatbotOptions: ChatbotOption[];
  onChatbotChange: (option: ChatbotOption | null) => void;
  onUsersChange: (options: UserOption[]) => void;
  isDisabled: boolean;
  selectedChatbot: ChatbotOption | null;
  selectedUsers: UserOption[];
}

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      const email = inputValue.trim();
      if (email && isValidEmail(email)) {
        const newUser = { value: email, label: email };
        onUsersChange([...selectedUsers, newUser]);
        setInputValue("");
      }
    } else if (e.key === "Backspace" && inputValue === "" && selectedUsers.length > 0) {
      // Remove last tag when backspace is pressed on empty input
      const newUsers = [...selectedUsers];
      newUsers.pop();
      onUsersChange(newUsers);
    }
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
    // Simple email validation regex
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

      <div>
        <label className="block text-sm font-medium text-gray-500 mb-2">
          Enter User Emails (comma separated)
        </label>
        <div
          className={`min-h-10 p-2 border rounded-md flex flex-wrap gap-2 items-center ${isDisabled ? "bg-gray-100" : "bg-white"}`}
          onClick={() => inputRef.current?.focus()}
        >
          {selectedUsers.map((user, index) => (
            <div
              key={index}
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
          {!isDisabled && (
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={selectedUsers.length === 0 ? "user@example.com" : ""}
              className="flex-1 min-w-[100px] outline-none bg-white"
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