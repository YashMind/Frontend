"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ChatbotLinksDocsUpload from "../ChatbotLinksDocsUpload/chatbotLinksDocsUpload";
import ChatbotOverview from "../ChatbotOverview/chatbotOverview";
import AddBotData from "../ChatbotMain/AddData/addData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  deleteDocLinks,
  getChatbotsDocLinks,
} from "@/store/slices/chats/chatSlice";

const ChatbotLinksDocs = ({
  botPage,
  botId,
}: {
  botPage: string;
  botId?: number;
}) => {
  const [uploadDocs, setUploadDocs] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const allRowIds = ChatbotDocLinksData?.data.map((item) => Number(item?.id));
    setSelectedIds(isChecked ? allRowIds : []);
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const isDisabled = selectedIds.length === 0;
  const dispatch = useDispatch<AppDispatch>();
  const { ChatbotDocLinksData } = useSelector((state: RootState) => state.chat);
  useEffect(() => {
    dispatch(
      getChatbotsDocLinks({
        bot_id: botId,
        page,
        limit,
        search,
        sortBy,
        sortOrder,
      })
    );
    setUploadDocs(false);
  }, [dispatch, search, page, limit, sortBy, sortOrder]);

  const handleDeleteDocLinks = () => {
    dispatch(
      deleteDocLinks({
        bot_id: botId,
        doc_ids: selectedIds,
        page,
        limit,
        search,
        sortBy,
        sortOrder,
      })
    );
    setSelectedIds([]);
  };

  const handleBack = () => {
    setUploadDocs(!uploadDocs);
  };
  return (
    <div className="w-full m-12">
      <h2 className="text-2xl font-bold">Links / Docs</h2>
      {!uploadDocs ? (
        <div className="bg-[#9592AE] justify-evenly rounded-[28px] p-4 flex gap-4  items-center w-full my-[30] ">
          {/* Crawled Links */}
          <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900 text-center p-4">
            <span className="text-xl font-semibold">Crawled Links</span>
            <span className="text-3xl font-bold self-end mt-auto">
              {ChatbotDocLinksData?.user_target_links}
            </span>
          </div>

          {/* Chars */}
          <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900 text-center p-4">
            <span className="text-xl font-semibold">Chars</span>
            <span className="text-3xl font-bold self-end mt-auto">
              {ChatbotDocLinksData?.user_total_chars}
            </span>
          </div>

          {/* Failed */}
          <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900 text-center p-4">
            <span className="text-xl font-semibold">Failed</span>
            <span className="text-3xl font-bold self-end mt-auto">
              {ChatbotDocLinksData?.user_failed_count}
            </span>
          </div>

          {/* Pending */}
          <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900 text-center p-4">
            <span className="text-xl font-semibold">Pending</span>
            <span className="text-3xl font-bold self-end mt-auto">
              {ChatbotDocLinksData?.user_pending_count}
            </span>
          </div>

          {/* Indexed */}
          <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900 text-center p-4">
            <span className="text-xl font-semibold">Indexed</span>
            <span className="text-3xl font-bold self-end mt-auto">
              {ChatbotDocLinksData?.user_indexed_count}
            </span>
          </div>
        </div>
      ) : (
        <AddBotData botId={botId} handleBack={handleBack} />
      )}
      {!uploadDocs ? (
        <div className=" overflow-hidden  text-sm w-full   ">
          {/* Top Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#9592AE] px-6 py-4 rounded-4xl">
            <div className="flex items-center gap-2">
              <label htmlFor="entries" className="text-gray-700 font-medium">
                Show
              </label>
              <select
                id="entries"
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setPage(1);
                }}
                className=" px-2 py-1 bg-[#E0E0E0] rounded-md text-black outline-0"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-gray-700 font-medium">entries</span>

              <button
                className={`px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all ${isDisabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
                  }`}
                disabled={isDisabled}
                onClick={() => handleDeleteDocLinks()}
              >
                Delete
              </button>

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
            </div>
            <div className="flex items-center gap-3">
              <button
                className="cursor-pointer bg-[#340555] text-white rounded  text-sm font-bold py-[7px] px-[11px]"
                onClick={() => setUploadDocs(!uploadDocs)}
              >
                {uploadDocs ? "Remove upload view" : "Add Links or documents"}
              </button>
            </div>
          </div>


          <div className="justify-evenly rounded-[28px] p-4 flex gap-4  items-center w-full my-[30] ">
            {/* Crawled Links */}
            <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900 text-center p-4">
              <span className="text-xl font-semibold">Crawled Links</span>
              <span className="text-3xl font-bold self-end mt-auto">
                {ChatbotDocLinksData?.total_target_links}
              </span>
            </div>

            {/* Chars */}
            <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900 text-center p-4">
              <span className="text-xl font-semibold">Chars</span>
              <span className="text-3xl font-bold self-end mt-auto">
                {ChatbotDocLinksData?.total_chars}
              </span>
            </div>

            {/* Failed */}
            <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900 text-center p-4">
              <span className="text-xl font-semibold">Failed</span>
              <span className="text-3xl font-bold self-end mt-auto">
                {ChatbotDocLinksData?.failed_count}
              </span>
            </div>

            {/* Pending */}
            <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900 text-center p-4">
              <span className="text-xl font-semibold">Pending</span>
              <span className="text-3xl font-bold self-end mt-auto">
                {ChatbotDocLinksData?.pending_count}
              </span>
            </div>

            {/* Indexed */}
            <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900 text-center p-4">
              <span className="text-xl font-semibold">Indexed</span>
              <span className="text-3xl font-bold self-end mt-auto">
                {ChatbotDocLinksData?.indexed_count}
              </span>
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-left text-gray-800 rounded-xl">
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
                  Status
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Chars
                </th>
                <th className="py-[14px] text-sm font-bold text-black">Data</th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Date Added
                </th>
                <th className="py-[14px] text-sm font-bold text-black">
                  Retrain
                </th>
                <th className="py-[14px] text-sm font-bold text-black">Type</th>
              </tr>
            </thead>
            <tbody className="bg-[#f7f6fd]">
              {ChatbotDocLinksData?.data &&
                ChatbotDocLinksData?.data?.map((item, index) => {
                  return (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-4">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-[#5E2EFF]"
                          checked={selectedIds.includes(Number(item?.id))}
                          onChange={(e) =>
                            handleSelectRow(Number(item?.id), e.target.checked)
                          }
                        />
                      </td>
                      <td className=" text-xs font-medium text-black ">
                        <div className="flex gap-3">
                          <p className="w-2 h-2 bg-[#DE4DBC] rounded-full"></p>{" "}
                          {item?.status}
                        </div>
                      </td>
                      <td className="py-4 text-xs font-medium text-black">
                        {item?.chars}
                      </td>
                      <td className="py-4 text-xs font-medium text-black">
                        {item?.target_link || item?.document_link}
                      </td>
                      <td className="py-4 text-xs font-medium text-black">
                        {/* 28 Feb 2025 */}
                        {item?.created_at}
                      </td>
                      <td className=" truncate max-w-[150px] p-4 text-xs font-medium text-black">
                        -
                      </td>
                      <td className="py-4">
                        <span className="bg-[#DEDEDE] px-3 py-1 rounded-full text-xs font-medium text-black">
                          {item?.train_from}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 px-6 py-4 bg-white border-t border-gray-200">
            <button
              className="text-sm text-[#9E9E9E] font-medium disabled:opacity-50"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            {ChatbotDocLinksData?.total_pages >= 1 ? (
              <button
                className={`w-6 h-6 ${page === 1 ? "bg-[#624DE3]" : "bg-gray-200"
                  }   text-black rounded-[7px] text-sm`}
              >
                1
              </button>
            ) : null}
            {ChatbotDocLinksData?.total_pages > 1 ? (
              <button
                className="w-6 h-6 bg-gray-200 text-black rounded-[7px] text-sm"
                disabled
              >
                ...
              </button>
            ) : null}
            {ChatbotDocLinksData?.total_pages > 1 ? (
              <button
                className={`w-6 h-6 ${ChatbotDocLinksData?.total_pages === page
                  ? "bg-[#624DE3]"
                  : "bg-gray-200"
                  } text-black rounded-[7px] text-sm`}
              >
                {ChatbotDocLinksData?.total_pages}
              </button>
            ) : null}
            <button
              className="text-sm text-[#9E9E9E] font-medium disabled:opacity-50"
              onClick={() => setPage(page + 1)}
              disabled={ChatbotDocLinksData?.total_pages === page}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}

      {/* table */}
    </div>
  );
};

export default ChatbotLinksDocs;
