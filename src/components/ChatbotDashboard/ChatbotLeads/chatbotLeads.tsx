import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  deleteChatbotLeads,
  getChatbotsLeadMessages,
  getChatbotsLeads,
} from "@/store/slices/chats/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { formatDistanceToNow } from "date-fns";
import { FaEye } from "react-icons/fa6";
import ViewLeadChatModal from "./viewLeadChats/viewLeadChats";
import { ChatbotLeadsArray } from "@/types/chatTypes";
import { formatDateOrTimeAgo } from "@/components/utils/formatDateTime";
import { useTimezone } from "@/context/TimeZoneContext";
import ConfigureMailDialog from "./configureMailDialog";

const ChatbotLeads = ({
  botPage,
  botId,
}: {
  botPage: string;
  botId?: number;
}) => {
  const { timezone, isLoading } = useTimezone()
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [isMailDialogOpen, setIsMailDialogOpen] = useState<boolean>(false)
  const { chatbotLeadsData } = useSelector((state: RootState) => state.chat);
  const { chatbotData } = useSelector((state: RootState) => state.chat);
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const allRowIds = chatbotLeadsData?.data.map((item) => Number(item?.id));
    setSelectedIds(isChecked ? allRowIds : []);
  };
  const handleSelectRow = (id: number, checked: boolean) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const isDisabled = selectedIds.length === 0;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(
      getChatbotsLeads({
        bot_id: botId,
        page,
        limit,
        search,
        sortBy,
        sortOrder,
      })
    );
  }, [dispatch, search, page, limit, sortBy, sortOrder]);
  const handleDeleteChatbotLeads = () => {
    dispatch(
      deleteChatbotLeads({
        bot_id: botId,
        lead_ids: selectedIds,
        page,
        limit,
        search,
        sortBy,
        sortOrder,
      })
    );
    setSelectedIds([]);
  };

  const handleViewChats = (chat_id: number) => {
    dispatch(getChatbotsLeadMessages({ chat_id: chat_id })).finally(() => {
      setModalShow(true);
    });
  };

  const exportToCSV = (data: any[], fileName = "data.csv") => {
    if (!data || !data.length) {
      console.warn("No data to export");
      return;
    }

    const headers = Object.keys(data[0]);
    const csvRows = [
      headers.join(","), // header row
      ...data.map(row =>
        headers
          .map(field => {
            const val = row[field];
            // Escape quotes and commas
            const safe = typeof val === "string" ? `"${val.replace(/"/g, '""')}"` : val;
            return safe;
          })
          .join(",")
      ),
    ];

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="m-4">
      <h2 className="text-2xl font-bold mb-4 text-white max-md:ml-12">Leads</h2>

      <div className="rounded-xl overflow-hidden text-sm w-full border border-white/10 shadow-xl mb-8 mr-3">
        {/* Top Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white/5 backdrop-blur-md px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <label htmlFor="entries" className="text-gray-300 font-medium text-sm">
                Show
              </label>
              <select
                id="entries"
                className="px-2 py-1 bg-white/10 rounded-md text-white outline-none border border-white/20 focus:border-indigo-500 text-sm"
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setPage(1);
                }}
              >
                <option className="bg-[#2a2561]" value={10}>10</option>
                <option className="bg-[#2a2561]" value={25}>25</option>
                <option className="bg-[#2a2561]" value={50}>50</option>
              </select>
              <span className="text-gray-300 font-medium text-sm">Entries</span>
            </div>

            <button
              className={`px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all shadow-md ${isDisabled
                ? "bg-white/10 border border-white/5 cursor-not-allowed text-gray-500"
                : "bg-red-500/80 hover:bg-red-600 border border-red-500/50 backdrop-blur-sm"
                }`}
              disabled={isDisabled}
              onClick={() => handleDeleteChatbotLeads()}
            >
              Delete
            </button>
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
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMailDialogOpen(true)} className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold py-2 px-4 shadow-lg border border-indigo-500/50 transition-all">
              Configure Mails
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-fit md:w-full text-left text-gray-300">
            <thead className="bg-white/10 text-gray-200 border-b border-white/10 backdrop-blur-md">
              <tr>
                <th className="px-4 min-w-5 py-4 w-12 text-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-indigo-500 bg-white/10 border-white/30 rounded cursor-pointer"
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-4 text-sm font-semibold uppercase tracking-wider min-w-5 px-2">Name</th>
                <th className="py-4 text-sm font-semibold uppercase tracking-wider min-w-5 px-2">Email</th>
                <th className="py-4 text-sm font-semibold uppercase tracking-wider min-w-5 px-2">
                  Contact
                </th>
                <th className="py-4 text-sm font-semibold uppercase tracking-wider min-w-5 px-2">
                  Message
                </th>
                <th className="py-4 text-sm font-semibold uppercase tracking-wider min-w-5 px-2">
                  Submitted
                </th>
                <th className="py-4 text-sm font-semibold uppercase tracking-wider min-w-5 px-2">Type</th>
                <th className="py-4 text-sm font-semibold uppercase tracking-wider min-w-5 px-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white/5 divide-y divide-white/5 backdrop-blur-sm">
              {chatbotLeadsData?.data &&
                chatbotLeadsData?.data?.map((item, index) => {
                  const timeAgo = !isLoading && formatDateOrTimeAgo(item?.created_at, timezone, 10);
                  return (
                    <tr key={index} className="hover:bg-white/10 transition-colors duration-150">
                      <td className="p-4 min-w-5 px-4 text-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-indigo-500 bg-white/10 border-white/30 rounded cursor-pointer"
                          checked={selectedIds.includes(Number(item?.id))}
                          onChange={(e) =>
                            handleSelectRow(Number(item?.id), e.target.checked)
                          }
                        />
                      </td>
                      <td className="text-sm font-medium text-white min-w-5 px-2">
                        {item?.name}
                      </td>
                      <td className="text-sm font-medium text-gray-300 min-w-5 px-2">
                        {item?.email}
                      </td>
                      <td className="text-sm font-medium text-gray-300 min-w-5 px-2">
                        {item?.contact}
                      </td>
                      <td className="truncate max-w-[150px] text-sm font-medium text-gray-400 min-w-5 px-2">
                        {item?.message?.slice(0, 20)}...
                      </td>
                      <td className="text-sm font-medium text-gray-300 min-w-5 px-2 text-nowrap">
                        {timeAgo}
                      </td>
                      <td className="">
                        <span className="bg-white/10 py-1 rounded-full text-xs font-medium text-white min-w-5 px-3 border border-white/10">
                          {item?.type}
                        </span>
                      </td>
                      <td className="py-4 flex items-center gap-2 min-w-5 px-2">
                        <button onClick={() => handleViewChats(item?.chat_id)} className="text-gray-400 hover:text-white transition-colors" title="View Chat">
                          <FaEye size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table></div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 px-6 py-4 bg-white/5 border-t border-white/10 backdrop-blur-md">
          <button
            className="text-sm text-gray-400 hover:text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          {chatbotLeadsData?.total_pages >= 1 ? (
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${page === 1 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
            >
              1
            </button>
          ) : null}
          {chatbotLeadsData?.total_pages > 1 ? (
            <button
              className="w-8 h-8 flex items-center justify-center bg-transparent text-gray-500 rounded-lg text-sm cursor-default"
              disabled
            >
              ...
            </button>
          ) : null}
          {chatbotLeadsData?.total_pages > 1 ? (
            <button
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${chatbotLeadsData?.total_pages === page
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
            >
              {chatbotLeadsData?.total_pages}
            </button>
          ) : null}
          <button
            className="text-sm text-gray-400 hover:text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            onClick={() => setPage(page + 1)}
            disabled={chatbotLeadsData?.total_pages === page}
          >
            Next
          </button>
        </div>
      </div>

      {/* table */}
      <ViewLeadChatModal botId={botId} show={modalShow} onHide={() => setModalShow(false)} />
      <ConfigureMailDialog
        botId={botId}
        email={chatbotData.lead_email}
        open={isMailDialogOpen}
        onClose={() => setIsMailDialogOpen(false)}
      />
    </div>
  );
};

export default ChatbotLeads;
