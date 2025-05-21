"use client";
import HistoryBackButton from "@/components/utils/historyBackButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { getChatbots } from "@/store/slices/chats/chatSlice";
import {
  getAvailableUsers,
  sendInvitations,
  resetInvitationState,
} from "@/store/slices/invitations/invitationSlice";
import { toasterError } from "@/services/utils/toaster";
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

const InviteUserClient = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedChatbot, setSelectedChatbot] = useState<ChatbotOption | null>(
    null
  );
  const [selectedUsers, setSelectedUsers] = useState<UserOption[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get chatbots from Redux store
  const chatbots = useSelector((state: RootState) => state.chat.chatbots || {});
  console.log("Chatbots from Redux:", chatbots);

  // Get available users from Redux store
  const availableUsers = useSelector(
    (state: RootState) => state.invitations.users
  );
  console.log("Available users from Redux:", availableUsers);

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

  // Fetch chatbots and available users on component mount
  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined") {
      dispatch(getChatbots());
      dispatch(getAvailableUsers());

      // Reset invitation state when component unmounts
      return () => {
        dispatch(resetInvitationState());
      };
    }
  }, [dispatch]);

  // Handle form submission
  const handleSubmit = () => {
    if (!selectedChatbot) {
      toasterError("Please select a chatbot", 2000, "id");
      return;
    }

    if (selectedUsers.length === 0) {
      toasterError("Please select at least one user", 2000, "id");
      return;
    }

    setIsSubmitting(true);

    // Extract email values from selected users
    const userEmails = selectedUsers.map((user) => user.value);

    // Log what we're sending
    console.log("Sending invitation with:", {
      chatbotId: selectedChatbot.value,
      userEmails: userEmails,
    });

    // Send invitations
    dispatch(
      sendInvitations({
        chatbotId: selectedChatbot.value,
        userEmails: userEmails,
      })
    );
  };

  // Reset form after successful invitation
  useEffect(() => {
    if (invitationSuccess) {
      setSelectedChatbot(null);
      setSelectedUsers([]);
      setIsSubmitting(false);
    }
  }, [invitationSuccess]);

  // Handle error state
  useEffect(() => {
    if (invitationError) {
      setIsSubmitting(false);
    }
  }, [invitationError]);

  // Format chatbots for react-select
  const chatbotOptions: ChatbotOption[] = [];

  // Handle different response structures
  if (chatbots) {
    // Case 1: If chatbots is an array directly
    if (Array.isArray(chatbots)) {
      chatbots.forEach((chatbot: any) => {
        if (chatbot && chatbot.id && chatbot.chatbot_name) {
          chatbotOptions.push({
            value: chatbot.id,
            label: chatbot.chatbot_name,
          });
        }
      });
    }
    // Case 2: If chatbots has a data property that is an array
    else if (
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
    }
    // Case 3: If chatbots is an object with numeric keys (like an object map)
    else if (typeof chatbots === "object" && chatbots !== null) {
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

  console.log("Formatted chatbot options:", chatbotOptions);

  // Format users for react-select
  const userOptions: UserOption[] = [];

  // Handle different response structures
  if (availableUsers) {
    // Case 1: If availableUsers is an array directly
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
    }
    // Case 2: If availableUsers has a data property that is an array
    else if (
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
    }
    // Case 3: If availableUsers is an object with numeric keys
    else if (typeof availableUsers === "object" && availableUsers !== null) {
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

  console.log("Formatted user options:", userOptions);

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61]">
      <HistoryBackButton />
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mt-4 mb-6">
          <h1 className="text-4xl font-bold text-white">Invite User</h1>
        </div>
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-4">
              {/* Use the dynamically imported SelectComponents */}
              <SelectComponents
                chatbotOptions={chatbotOptions}
                userOptions={userOptions}
                onChatbotChange={(option) => setSelectedChatbot(option)}
                onUsersChange={(options) => setSelectedUsers(options)}
                isDisabled={invitationLoading}
              />

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || invitationLoading}
                  className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                    isSubmitting || invitationLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {isSubmitting || invitationLoading
                    ? "Sending Invitations..."
                    : "Send Invitations"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteUserClient;
