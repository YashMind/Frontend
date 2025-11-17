"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { getChatbots } from "@/store/slices/chats/chatSlice";
import {
  getUninvitedUsers,
  sendInvitations,
  resetInvitationState,
  clearUsersList,
} from "@/store/slices/invitations/invitationSlice";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";
import dynamic from "next/dynamic";

// Import SelectComponents with no SSR
const SelectComponents = dynamic(() => import("./SelectComponents"), {
  ssr: false,
});

interface ChatbotOption {
  value: number;
  label: string;
}

interface UserOption {
  value: string;
  label: string;
}

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const InvitationModal = ({
  isOpen,
  onClose,
  onSuccess,
}: InvitationModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedChatbot, setSelectedChatbot] = useState<ChatbotOption | null>(
    null
  );
  const [selectedUsers, setSelectedUsers] = useState<UserOption[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Get chatbots from Redux store
  const chatbots = useSelector((state: RootState) => state.chat.chatbots || {});

  // Get available users from Redux store
  const availableUsers = useSelector(
    (state: RootState) => state.invitations.users
  );

  // Get invitation status from Redux store
  const invitationSuccess = useSelector(
    (state: RootState) => state.invitations.success
  );
  const invitationError = useSelector(
    (state: RootState) => state.invitations.error
  );
  const invitationLoading = useSelector(
    (state: RootState) => state.invitations.loading
  );

  // Fetch chatbots when modal opens
  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      dispatch(getChatbots({ include_shared: false }));
    }
  }, [isOpen, dispatch]);

  // Email validation function (same as in SelectComponents)
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle form submission
  const handleSubmit = () => {
    if (!selectedChatbot) {
      toasterError("Please select a chatbot", 10000, "id");
      return;
    }

    // Add inputValue as email if valid and not already in selectedUsers
    let usersToSend = [...selectedUsers];
    const trimmedInput = inputValue.trim();
    if (
      trimmedInput &&
      isValidEmail(trimmedInput) &&
      !usersToSend.some((u) => u.value === trimmedInput)
    ) {
      usersToSend.push({ value: trimmedInput, label: trimmedInput });
    }

    if (usersToSend.length === 0) {
      toasterError("Please select at least one user", 10000, "id");
      return;
    }

    setIsSubmitting(true);

    // Extract email values from selected users
    const userEmails = usersToSend.map((user) => user.value);

    // Send invitations
    dispatch(
      sendInvitations({
        chatbotId: selectedChatbot.value,
        userEmails: userEmails,
      })
    );
    // Optionally clear inputValue and selectedUsers after sending
    setInputValue("");
    setSelectedUsers([]);
  };

  // Handle successful invitation
  useEffect(() => {
    if (invitationSuccess) {
      toasterSuccess("Invitations sent successfully!", 10000, "invite-user");

      // Reset form
      setSelectedChatbot(null);
      setSelectedUsers([]);
      setIsSubmitting(false);

      // Call success callback to refresh parent data if provided
      if (onSuccess) {
        onSuccess();
      }

      // Close modal
      onClose();

      // Reset invitation state
      dispatch(resetInvitationState());
    }
  }, [invitationSuccess, onSuccess, onClose, dispatch]);

  // Handle error state
  useEffect(() => {
    if (invitationError) {
      setIsSubmitting(false);
    }
  }, [invitationError]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedChatbot(null);
      setSelectedUsers([]);
      setIsSubmitting(false);
      dispatch(resetInvitationState());
      dispatch(clearUsersList());
    }
  }, [isOpen, dispatch]);

  // Format chatbots for react-select
  const chatbotOptions: ChatbotOption[] = [];

  if (chatbots) {
    if (Array.isArray(chatbots)) {
      chatbots.forEach((chatbot: any) => {
        if (chatbot && chatbot.id && chatbot.chatbot_name) {
          chatbotOptions.push({
            value: chatbot.id,
            label: chatbot.chatbot_name,
          });
        }
      });
    } else if (
      typeof chatbots === "object" &&
      chatbots !== null &&
      "data" in chatbots &&
      Array.isArray((chatbots as any).data)
    ) {
      (chatbots as any).data.forEach((chatbot: any) => {
        if (chatbot && chatbot.id && chatbot.chatbot_name) {
          chatbotOptions.push({
            value: chatbot.id,
            label: chatbot.chatbot_name,
          });
        }
      });
    } else if (typeof chatbots === "object" && chatbots !== null) {
      Object.values(chatbots as Record<string, any>).forEach((chatbot: any) => {
        if (chatbot && chatbot.id && chatbot.chatbot_name) {
          chatbotOptions.push({
            value: chatbot.id,
            label: chatbot.chatbot_name,
          });
        }
      });
    }
  }

  // Format users for react-select
  const userOptions: UserOption[] = [];

  if (availableUsers) {
    if (Array.isArray(availableUsers)) {
      availableUsers.forEach((user: any) => {
        if (user && user.email) {
          const label = user.fullName
            ? `${user.fullName} (${user.email})`
            : user.email;

          userOptions.push({
            value: user.email,
            label: label,
          });
        }
      });
    } else if (
      typeof availableUsers === "object" &&
      availableUsers !== null &&
      "data" in availableUsers &&
      Array.isArray((availableUsers as any).data)
    ) {
      (availableUsers as any).data.forEach((user: any) => {
        if (user && user.email) {
          const label = user.fullName
            ? `${user.fullName} (${user.email})`
            : user.email;

          userOptions.push({
            value: user.email,
            label: label,
          });
        }
      });
    } else if (typeof availableUsers === "object" && availableUsers !== null) {
      Object.values(availableUsers as Record<string, any>).forEach(
        (user: any) => {
          if (user && user.email) {
            const label = user.fullName
              ? `${user.fullName} (${user.email})`
              : user.email;

            userOptions.push({
              value: user.email,
              label: label,
            });
          }
        }
      );
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Send Invitations</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="space-y-6">
            <SelectComponents
              chatbotOptions={chatbotOptions}
              onChatbotChange={(option) => {
                setSelectedChatbot(option);
                if (option && option.value) {
                  dispatch(getUninvitedUsers(option.value));
                } else {
                  dispatch(clearUsersList());
                }
                setSelectedUsers([]);
              }}
              onUsersChange={(options) => setSelectedUsers(options)}
              isDisabled={invitationLoading}
              selectedChatbot={selectedChatbot}
              selectedUsers={selectedUsers}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-4 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            disabled={isSubmitting || invitationLoading}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || invitationLoading}
            className={`px-6 py-2 rounded-md text-white font-medium ${isSubmitting || invitationLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
              }`}
          >
            {isSubmitting || invitationLoading
              ? "Sending..."
              : "Send Invitations"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitationModal;
