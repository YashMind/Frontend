"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  deleteChats,
  getChatbotsUserHistory,
} from "@/store/slices/chats/chatSlice";
import { formatDistanceToNow } from "date-fns";
import { FaEye } from "react-icons/fa6";
import { MdSimCardDownload } from "react-icons/md";
import ViewChatModal from "./viewChats/viewChats";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { format } from "date-fns";
import { ChatbotsData } from "@/types/chatTypes";
import {
  formatDateOrTimeAgo,
  formatDateTimeWithTz,
} from "@/components/utils/formatDateTime";
import { useTimezone } from "@/context/TimeZoneContext";

const ChatbotHistory = ({ botId }: { botId?: number }) => {
  const { timezone, isLoading } = useTimezone();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [currentMessages, setCurrentMessages] = useState<[]>([]);
  const showModal = () => {
    setModalShow(true);
  };
  const dispatch = useDispatch<AppDispatch>();
  const chatUserHistory: any = useSelector(
    (state: RootState) => state.chat.chatbotHistory
  );

  useEffect(() => {
    if (botId) {
      dispatch(getChatbotsUserHistory({ bot_id: botId, page, search }));
    }
  }, [botId, page, search]);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const allRowIds = Object.keys(chatUserHistory?.data).map((id) =>
      Number(id)
    );
    setSelectedIds(isChecked ? allRowIds : []);
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const isDisabled = selectedIds.length === 0;

  const handleDeleteChat = () => {
    dispatch(deleteChats({ bot_id: botId, chat_ids: selectedIds }));
  };
  const handleViewChats = (chats: []) => {
    setModalShow(true);
    setCurrentMessages(chats);
  };

  const handleCreateDownloadPdf = (
    messages: any[],
    platform: string,
    chatBot: ChatbotsData
  ) => {
    const doc = new jsPDF();
    const botId = messages[0]?.bot_id || "Unknown";
    const chatId = messages[0]?.chat_id || "Unknown";
    const userId = messages[0]?.user_id || "Unknown";
    const chatbotCreatedAt = formatDateOrTimeAgo(chatBot?.created_at, timezone);
    const createdAt = formatDateOrTimeAgo(messages[0]?.created_at, timezone);
    const endAt = formatDateOrTimeAgo(
      messages[messages.length - 1]?.created_at,
      timezone
    );

    doc.setFontSize(18);
    doc.text("Chat History", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Chatbot ID", "Chatbot Name", "User Id", "Started On"]],
      body: [[botId, chatBot?.chatbot_name, userId, chatbotCreatedAt]],
      styles: { fontSize: 10 },
      headStyles: { fillColor: [98, 77, 227], textColor: 255 },
    });

    autoTable(doc, {
      startY: 60,
      head: [["Chat ID", "Location", "Started On", "Ended On", "Platform"]],
      body: [[chatId, "Unknown", createdAt, endAt, platform || "WEB"]],
      styles: { fontSize: 10 },
      headStyles: { fillColor: [98, 77, 227], textColor: 255 },
    });

    // const rows = messages.map((msg, idx) => [
    //   idx + 1,
    //   msg.sender === "user" ? "User" : "Bot",
    //   msg.message,
    //   format(new Date(msg.created_at), "PPpp"),
    // ]);

    const rows = messages.map((msg, idx) => {
      return [
        idx + 1,
        msg.sender === "user" ? "User" : "Bot",
        msg.message,
        formatDateOrTimeAgo(msg.created_at, timezone), // Format after subtraction
      ];
    });

    autoTable(doc, {
      startY: 90,
      head: [["#", "Sender", "Message", "Timestamp"]],
      body: rows,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [98, 77, 227], textColor: 255 },
      columnStyles: {
        2: { cellWidth: 100 },
      },
    });

    doc.save(`Chat_History_${chatId}.pdf`);
  };

  const handleExportDownloadPdf = () => {
    if (!chatUserHistory?.data) return;

    selectedIds.forEach((chatId: number) => {
      const messages = chatUserHistory?.data[chatId].messages;
      const platform = chatUserHistory?.data[chatId].platform;
      if (messages && messages.length > 0) {
        handleCreateDownloadPdf(messages, platform, chatUserHistory?.chatBot);
      }
    });
  };

  return (
    <div className="m-4">
      <h2 className="max-md:ml-12 text-2xl font-bold mb-4 text-white">Chat History</h2>
      <div className="rounded-xl overflow-hidden text-sm w-full border border-white/10 shadow-xl">
        {/* Top Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white/5 backdrop-blur-md px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all shadow-lg ${isDisabled
                    ? "bg-white/10 border border-white/5 cursor-not-allowed text-gray-500"
                    : "bg-indigo-600 hover:bg-indigo-700 border border-indigo-500/50"
                  }`}
                disabled={isDisabled}
                onClick={() => handleExportDownloadPdf()}
              >
                Export
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all shadow-lg ${isDisabled
                    ? "bg-white/10 border border-white/5 cursor-not-allowed text-gray-500"
                    : "bg-red-500/80 hover:bg-red-600 border border-red-500/50"
                  }`}
                disabled={isDisabled}
                onClick={() => handleDeleteChat()}
              >
                Delete
              </button>
            </div>

            <div className="relative w-full max-w-xs">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 pl-9 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-fit md:w-full text-left text-gray-300">
            <thead className="bg-white/10 text-gray-200 uppercase text-xs tracking-wider font-semibold border-b border-white/10 backdrop-blur-md">
              <tr>
                <th className="p-4 w-12 text-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-indigo-500 bg-white/10 border-white/30 rounded cursor-pointer"
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-4 px-2 whitespace-nowrap">
                  Started
                </th>
                <th className="py-4 px-2 whitespace-nowrap">
                  Language
                </th>
                <th className="py-4 px-2 whitespace-nowrap">
                  Last message
                </th>
                <th className="py-4 px-2 whitespace-nowrap">
                  Platform
                </th>
                <th className="py-4 px-2 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white/5 divide-y divide-white/5 backdrop-blur-sm">
              {chatUserHistory?.data &&
                Object.entries(chatUserHistory?.data)
                  .sort(
                    ([, a]: any, [, b]: any) =>
                      new Date(b.messages[0].created_at).getTime() -
                      new Date(a.messages[0].created_at).getTime()
                  )
                  .map(([chatId, { platform, messages }]: any, idx) => {
                    const lastMessage = messages[messages?.length - 2];
                    const timeAgo = formatDateOrTimeAgo(
                      lastMessage?.created_at,
                      timezone,
                      10
                    );
                    return (
                      <tr key={chatId} className="hover:bg-white/10 transition-colors duration-150">
                        <td className="p-4 text-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 accent-indigo-500 bg-white/10 border-white/30 rounded cursor-pointer"
                            checked={selectedIds.includes(Number(chatId))}
                            onChange={(e) =>
                              handleSelectRow(Number(chatId), e.target.checked)
                            }
                          />
                        </td>

                        <td className="p-4 text-xs font-medium text-white text-nowrap">
                          {timeAgo}
                        </td>

                        <td className="p-4 text-xs font-medium text-gray-300">
                          English
                        </td>
                        <td className="truncate max-w-[150px] p-4 text-xs font-medium text-gray-400">
                          {lastMessage?.message?.slice(0, 25)}...
                        </td>
                        <td className="py-4 px-2">
                          <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white capitalize border border-white/10">
                            {platform ?? "Web"}
                          </span>
                        </td>
                        <td className="py-4 flex items-center gap-4 px-2">
                          <button
                            onClick={() => handleViewChats(messages)}
                            className="text-gray-400 hover:text-white transition-colors"
                            title="View Chat"
                          >
                            <FaEye size={18} />
                          </button>
                          <button
                            className="text-gray-400 hover:text-indigo-400 transition-colors"
                            title="Download PDF"
                          >
                            <MdSimCardDownload
                              size={20}
                              onClick={() =>
                                handleCreateDownloadPdf(
                                  messages,
                                  platform,
                                  chatUserHistory?.chatBot
                                )
                              }
                            />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 px-6 py-4 bg-white/5 border-t border-white/10 backdrop-blur-md">
          <button
            className="text-sm text-gray-400 hover:text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          {chatUserHistory?.totalPages >= 1 ? (
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${page === 1 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
            >
              1
            </button>
          ) : null}
          {chatUserHistory?.totalPages > 1 ? (
            <button
              className="w-8 h-8 flex items-center justify-center bg-transparent text-gray-500 rounded-lg text-sm cursor-default"
              disabled
            >
              ...
            </button>
          ) : null}
          {chatUserHistory?.totalPages > 1 ? (
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${chatUserHistory?.totalPages === page
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
            >
              {chatUserHistory?.totalPages}
            </button>
          ) : null}
          <button
            className="text-sm text-gray-400 hover:text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            onClick={() => setPage(page + 1)}
            disabled={chatUserHistory?.totalPages === page}
          >
            Next
          </button>
        </div>
      </div>
      <ViewChatModal
        botId={botId}
        show={modalShow}
        onHide={() => setModalShow(false)}
        currentMesssages={currentMessages}
      />
    </div>
  );
};

export default ChatbotHistory;
