"use client";

import Select from "react-select";
import { useEffect, useState } from "react";

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
  userOptions: UserOption[];
  onChatbotChange: (option: ChatbotOption | null) => void;
  onUsersChange: (options: UserOption[]) => void;
  isDisabled: boolean;
  selectedChatbot: ChatbotOption | null;
  selectedUsers: UserOption[];
}

export default function SelectComponents({
  chatbotOptions,
  userOptions,
  onChatbotChange,
  onUsersChange,
  isDisabled,
  selectedChatbot,
  selectedUsers,
}: SelectComponentsProps) {
  // Use local state to avoid hydration issues
  const [mounted, setMounted] = useState(false);

  // Only render after component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle chatbot selection
  const handleChatbotChange = (newValue: any) => {
    onChatbotChange(newValue as ChatbotOption);
  };

  // Handle users selection
  const handleUsersChange = (newValue: any) => {
    onUsersChange(newValue as UserOption[]);
  };

  if (!mounted) {
    // Return placeholder elements during SSR and initial client render
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
          Select Users to Invite
        </label>
        <Select
          isMulti
          value={selectedUsers}
          onChange={handleUsersChange}
          options={userOptions}
          placeholder="Select users to invite"
          className="text-black cursor-pointer"
          classNamePrefix="select"
          isDisabled={isDisabled}
          styles={{
            multiValueRemove: (base) => ({
              ...base,
              cursor: "pointer",
            }),
          }}
        />
      </div>
    </>
  );
}
