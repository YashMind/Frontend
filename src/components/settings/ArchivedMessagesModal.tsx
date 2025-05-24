import { useState, useEffect } from "react";
import { FiX, FiSearch, FiArchive, FiMessageSquare } from "react-icons/fi";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchArchivedUserMessages } from "@/store/slices/chats/chatSlice";

interface ChatMessage {
  id: string;
  message: string;
  created_at: string;
  is_user: boolean;
}

interface ChatSession {
  id: string;
  created_at: string;
  messages: ChatMessage[];
}

interface ChatBot {
  chatBotId: string;
  chatBotName: string;
  sessions: Record<string, ChatSession>;
}

interface ArchivedMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ArchivedMessageModal = ({
  isOpen,
  onClose,
}: ArchivedMessageModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    archivedUserMessages: archivedChats,
    error,
    loading,
  } = useSelector((state: RootState) => state.chat);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen && isMounted) {
      dispatch(
        fetchArchivedUserMessages({ page: 1, limit: 10, search: searchQuery })
      );
    }
  }, [isOpen, searchQuery, dispatch, isMounted]);

  const filteredChats =
    archivedChats &&
    archivedChats.data &&
    archivedChats.data.filter(
      (chatBot) =>
        chatBot &&
        Object.values(chatBot.sessions).some((session) => {
          console.log(session);
          return (
            session &&
            session.some((message) =>
              message.message.toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
        })
    );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <FiArchive className="text-purple-600 text-xl" />
              <h3 className="text-lg font-semibold">Archived Messages</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <FiX className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Search bar */}
          <div className="p-4 border-b">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search archived messages..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500" />
              </div>
            ) : error ? (
              <div className="text-center py-8 text-red-500">
                Error loading archived messages: {error}
              </div>
            ) : filteredChats && filteredChats.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <FiArchive className="mx-auto h-12 w-12 mb-4" />
                No archived messages found
              </div>
            ) : (
              <div className="space-y-6">
                {filteredChats &&
                  filteredChats.map((chatBot) => (
                    <div
                      key={chatBot.chatBotId}
                      className="border rounded-lg p-4"
                    >
                      <div className="flex items-center gap-2 mb-4 text-purple-600">
                        <FiMessageSquare className="h-5 w-5" />
                        <h4 className="font-semibold">{chatBot.chatBotName}</h4>
                      </div>

                      {Object.entries(chatBot.sessions).map(
                        ([sessionId, session]) => (
                          <div key={sessionId} className="mb-6 last:mb-0">
                            {/* <div className="text-sm text-gray-500 mb-2">
                              {new Date(
                                session.created_at
                              ).toLocaleDateString()}
                            </div> */}
                            <div className="space-y-3">
                              {session.map((message) => (
                                <div
                                  key={message.id}
                                  className={`p-3 rounded-lg ${
                                    message.sender === "user"
                                      ? "bg-purple-50 ml-8 text-right"
                                      : "bg-gray-50 mr-8"
                                  }`}
                                >
                                  <p className="text-gray-800">
                                    {message.message}
                                  </p>
                                  <time className="text-xs text-gray-500 mt-1 block">
                                    {new Date(
                                      message.created_at
                                    ).toLocaleString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      year: "numeric",
                                      month: "2-digit",
                                      day: "2-digit",
                                    })}
                                  </time>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivedMessageModal;
