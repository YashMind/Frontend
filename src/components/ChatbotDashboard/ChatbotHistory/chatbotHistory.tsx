"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { deleteChats, getChatbotsUserHistory } from "@/store/slices/chats/chatSlice";
import { formatDistanceToNow } from "date-fns";
import { FaEye } from "react-icons/fa6";
import { MdSimCardDownload } from "react-icons/md";

const ChatbotHistory = ({ botId }: { botId?: number }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const chatUserHistory = useSelector(
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
    const allRowIds = Object.keys(chatUserHistory).map((id) => Number(id));
    setSelectedIds(isChecked ? allRowIds : []);
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const isDisabled = selectedIds.length === 0;

  
  const handleDeleteChat = () => {
    dispatch(deleteChats({bot_id:botId, chat_ids:selectedIds}));
  }
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold my-4">Chat History</h2>
      {/* <table></table> */}
      <div className="bg-white rounded-b-xl overflow-hidden text-sm w-[550px] xl:w-full rounded-[40px] mb-8 mr-3">
        {/* Top Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#9592AE] px-6 py-4 ">
          <div className="flex items-center gap-2">
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all ${
                  isDisabled
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
                disabled={isDisabled}
              >
                Export
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all ${
                  isDisabled
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                }`}
                disabled={isDisabled}
                onClick={()=>handleDeleteChat()}
              >
                Delete
              </button>
            </div>

            <div className="relative w-full max-w-xs">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
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
                className="border border-white placeholder-white  pl-9  py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-500 w-[140px]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-md  border border-white text-white bg-[#928eb0] focus:outline-none focus:ring-2 focus:ring-purple-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Feb/2/2025</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-[#340555] text-white rounded  text-[11px] font-bold py-[7px] px-[11px]">
              Configure mails
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full  text-left text-gray-800">
            <thead className="bg-white text-gray-600 border-y border-gray-300">
              <tr>
                <th className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-[#5E2EFF]"
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Country
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Started
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Status
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Language
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Last message
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Platform
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#f7f6fd]">
              {chatUserHistory?.data && Object.entries(chatUserHistory?.data).map(
                ([chatId, messages]: any, idx) => {
                  const lastMessage = messages[messages?.length - 2];
                  const timeAgo = formatDistanceToNow(
                    new Date(lastMessage?.created_at),
                    { addSuffix: true }
                  );

                  return (
                    <tr key={chatId} className="border-b border-gray-200">
                      <td className="p-4">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-[#5E2EFF]"
                          checked={selectedIds.includes(Number(chatId))}
                          onChange={(e) =>
                            handleSelectRow(Number(chatId), e.target.checked)
                          }
                        />
                      </td>
                      <td className="p-4 text-xs font-medium text-black">
                        India
                      </td>
                      <td className="p-4 text-xs font-medium text-black">
                        {timeAgo}
                      </td>
                      <td className="p-4 text-xs font-medium text-black">
                        Original
                      </td>
                      <td className="p-4 text-xs font-medium text-black">
                        Original
                      </td>
                      <td className=" truncate max-w-[150px] p-4 text-xs font-medium text-black">
                        {lastMessage?.message?.slice(0, 25)}...
                      </td>
                      <td className="py-4">
                        <span className="bg-[#DEDEDE] px-3 py-1 rounded-full text-xs font-medium text-black">
                          Web
                        </span>
                      </td>
                      <td className="py-4 flex items-center gap-2">
                        <button>
                          <FaEye size={20} />
                        </button>
                        <button>
                          <MdSimCardDownload size={20} />
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 px-6 py-4 bg-white border-t border-gray-200">
          <button className="text-sm text-[#9E9E9E] font-medium disabled:opacity-50"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}>
            Previous
          </button>
          {chatUserHistory?.totalPages>=1 ? 
          <button className={`w-6 h-6 ${page===1 ? "bg-[#624DE3]" : "bg-gray-200"}   text-black rounded-[7px] text-sm`}>
            1
          </button> : null}
          {chatUserHistory?.totalPages >1 ? 
          <button className="w-6 h-6 bg-gray-200 text-black rounded-[7px] text-sm" disabled>
          ...
          </button> : null}
          {chatUserHistory?.totalPages>1 ? 
          <button className={`w-6 h-6 ${chatUserHistory?.totalPages===page ? "bg-[#624DE3]" : "bg-gray-200"} text-black rounded-[7px] text-sm`}>
            {chatUserHistory?.totalPages}
          </button>:null}
          <button className="text-sm text-[#9E9E9E] font-medium"
          onClick={() => setPage(page + 1)}
          disabled={chatUserHistory?.totalPages===page}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotHistory;
