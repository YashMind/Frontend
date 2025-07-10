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
      <h2 className="text-2xl font-bold mb-4 max-md:ml-12">Leads</h2>

      <div className="bg-white rounded-b-xl overflow-hidden  text-sm w-full rounded-[40px] mb-8 mr-3 ">
        {/* Top Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#9592AE] px-6 py-4 ">
          <div className="flex items-center gap-2">
            <label htmlFor="entries" className="text-black font-medium">
              Show
            </label>
            <select
              id="entries"
              className=" px-2 py-1 bg-[#E0E0E0] rounded-md text-black outline-0"
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setPage(1);
              }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-black font-medium">Entries</span>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all ${isDisabled
                ? "bg-red-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
                }`}
              disabled={isDisabled}
              onClick={() => handleDeleteChatbotLeads()}
            >
              Delete
            </button>
            <div className="relative w-full max-w-xs">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

              </span>
              <input
                type="text"
                placeholder="Search..."
                className="border border-white placeholder-white  pl-9  py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-500 w-[140px]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMailDialogOpen(true)} className="cursor-pointer bg-[#340555] text-white rounded text-sm font-bold py-[7px] px-[11px]">
              Configure mails
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-fit md:w-full  text-left text-gray-800">
            <thead className="bg-white text-gray-600 border-y border-gray-300 ">
              <tr>
                <th className="px-4 min-w-5 ">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-[#5E2EFF]"
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-[14px] text-sm font-bold text-black min-w-5 px-2">Name</th>
                <th className="py-[14px] text-sm font-bold text-black min-w-5 px-2">Email</th>
                <th className="py-[14px] text-sm font-bold text-black min-w-5 px-2">
                  Contact
                </th>
                <th className="py-[14px] text-sm font-bold text-black min-w-5 px-2">
                  Message
                </th>
                <th className="py-[14px] text-sm font-bold text-black min-w-5 px-2">
                  Submitted
                </th>
                <th className="py-[14px] text-sm font-bold text-black min-w-5 px-2">Type</th>
                <th className="py-[14px] text-sm font-bold text-black min-w-5 px-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-[#f7f6fd]">
              {chatbotLeadsData?.data &&
                chatbotLeadsData?.data?.map((item, index) => {
                  const timeAgo = !isLoading && formatDateOrTimeAgo(item?.created_at, timezone, 10);
                  return (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-4 min-w-5 px-4">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-[#5E2EFF]"
                          checked={selectedIds.includes(Number(item?.id))}
                          onChange={(e) =>
                            handleSelectRow(Number(item?.id), e.target.checked)
                          }
                        />
                      </td>
                      <td className="text-xs font-medium text-black min-w-5 px-2">
                        {item?.name}
                      </td>
                      <td className="text-xs font-medium text-black min-w-5 px-2">
                        {item?.email}
                      </td>
                      <td className="text-xs font-medium text-black min-w-5 px-2">
                        {item?.contact}
                      </td>
                      <td className=" truncate max-w-[150px] text-xs font-medium text-black min-w-5 px-2">
                        {item?.message?.slice(0, 20)}...
                      </td>
                      <td className="text-xs font-medium text-black min-w-5 px-2 text-nowrap">
                        {timeAgo}
                      </td>
                      <td className="">
                        <span className="bg-[#DEDEDE] py-1 rounded-full text-xs font-medium text-black min-w-5 px-2">
                          {item?.type}
                        </span>
                      </td>
                      <td className="py-4 flex items-center gap-2 min-w-5 px-2">
                        {/* <button>
                        <Image
                          className="m-auto mb-4"
                          alt="alt"
                          src="/images/eye.png"
                          height={24}
                          width={24}
                        />
                      </button> */}
                        <button onClick={() => handleViewChats(item?.chat_id)}>
                          <FaEye size={20} />
                        </button>
                        {/* <button>
                        <Image
                          className="m-auto mb-4"
                          alt="alt"
                          src="/images/bx_edit.png"
                          height={24}
                          width={24}
                        />
                      </button> */}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table></div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 px-6 py-4 bg-white border-t border-gray-200">
          <button
            className="text-sm text-[#9E9E9E] font-medium disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          {chatbotLeadsData?.total_pages >= 1 ? (
            <button
              className={`w-6 h-6 ${page === 1 ? "bg-[#624DE3]" : "bg-gray-200"
                }   text-black rounded-[7px] text-sm`}
            >
              1
            </button>
          ) : null}
          {chatbotLeadsData?.total_pages > 1 ? (
            <button
              className="w-6 h-6 bg-gray-200 text-black rounded-[7px] text-sm"
              disabled
            >
              ...
            </button>
          ) : null}
          {chatbotLeadsData?.total_pages > 1 ? (
            <button
              className={`w-6 h-6 ${chatbotLeadsData?.total_pages === page
                ? "bg-[#624DE3]"
                : "bg-gray-200"
                } text-black rounded-[7px] text-sm`}
            >
              {chatbotLeadsData?.total_pages}
            </button>
          ) : null}
          <button
            className="text-sm text-[#9E9E9E] font-medium disabled:opacity-50"
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
