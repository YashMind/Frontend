"use client";
import React, { useEffect, useState } from "react";
import AddBotData from "../ChatbotMain/AddData/addData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  deleteDocLinks,
  getChatbotsDocLinks,
} from "@/store/slices/chats/chatSlice";
import { FiRefreshCcw } from "react-icons/fi";
import { formatLargeNumber } from "@/components/utils/formatLargeNumber";
import { formatDateOrTimeAgo } from "@/components/utils/formatDateTime";
import { useTimezone } from "@/context/TimeZoneContext";

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
  const [activeSourceIndex, setActiveSourceIndex] = useState(0);

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
  const onRefresh = () => {
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
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const allRowIds = activeSource?.link?.map((item) => Number(item?.id)) || [];
    setSelectedIds(isChecked ? allRowIds : []);
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

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
    setUploadDocs(false);
  };

  const isDisabled = selectedIds.length === 0;
  const activeSource = ChatbotDocLinksData.data?.[activeSourceIndex] || null;

  return (
    <div className="m-4">
      <h2 className="max-md:ml-12 text-xl max-w-1/2 font-bold">Links / Docs</h2>

      {!uploadDocs ? (
        <>
          {/* Overall Bot Statistics */}
          <div className="flex flex-wrap bg-[#9592AE] justify-evenly rounded-xl p-3 gap-4 items-center w-full mt-8">
            <StatCard
              title=" All Crawled Links"
              value={ChatbotDocLinksData?.user_target_links}
            />
            <StatCard
              title="All Trained"
              value={ChatbotDocLinksData?.user_target_links > ChatbotDocLinksData?.user_pending_count ? ChatbotDocLinksData?.user_target_links - ChatbotDocLinksData?.user_pending_count : 0}
            />
            <CharStatCard
              title="All Chars"
              value={formatLargeNumber(ChatbotDocLinksData?.user_total_chars)}
              total={formatLargeNumber(ChatbotDocLinksData?.allowed_total_chars)}
            />
            <StatCard
              title="All Pending"
              value={ChatbotDocLinksData?.user_pending_count}
            />
            <StatCard
              title=" All Failed"
              value={ChatbotDocLinksData?.user_failed_count}
            />
          </div>

          {/* Source Tabs */}
          <div className="flex mt-4 ">
            {ChatbotDocLinksData.data?.map((source, index) => (
              <button
                key={index}
                className={`px-4 py-2 max-w-40 rounded-t-lg font-medium truncate ${!(activeSourceIndex === index)
                  ? "bg-[#624DE3] text-white"
                  : "bg-gray-200 text-gray-700"
                  }`}
                onClick={() => {
                  setActiveSourceIndex(index);
                  setSelectedIds([]);
                }}
              >
                {source.source || `Source ${index + 1}`}
              </button>
            ))}
          </div>

          <div className="bg-white ">
            {/* Active Source Statistics */}
            {activeSource && (
              <div className="bg-gray-200 justify-evenly p-4 flex flex-wrap gap-4 items-center w-full ">
                <StatCard
                  title="Crawled Links"
                  value={activeSource?.total_target_links}
                />
                <StatCard
                  title="Trained"
                  value={activeSource?.total_target_links - activeSource?.pending_count}
                />
                <CharStatCard
                  title="Chars"
                  value={formatLargeNumber(activeSource?.total_chars)}
                  total={formatLargeNumber(ChatbotDocLinksData?.allowed_total_chars)}
                />
                <StatCard
                  title="Pending"
                  value={activeSource?.pending_count}
                />
                <StatCard
                  title="Failed"
                  value={activeSource?.failed_count}
                />
              </div>
            )}

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-[#9592AE] px-6 py-4">
              <div className="flex flex-wrap items-center gap-2">
                <ShowEntries limit={limit} setLimit={setLimit} setPage={setPage} />
                <DeleteButton
                  isDisabled={isDisabled}
                  onDelete={handleDeleteDocLinks}
                />
                <SearchBar search={search} setSearch={setSearch} />
              </div>
              <div className="flex items-center gap-3">
                <RefreshButton onClick={() => onRefresh()} />
                <AddDataButton onClick={() => setUploadDocs(true)} />
              </div>
            </div>

            {/* Table */}
            <div className=" text-sm w-full overflow-hidden">
              {activeSource?.link?.length ? (
                <div className="overflow-auto">
                  <Table
                    activeSource={activeSource}
                    selectedIds={selectedIds}
                    handleSelectAll={handleSelectAll}
                    handleSelectRow={handleSelectRow}
                  />
                  <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={ChatbotDocLinksData?.total_pages}
                  />
                </div>
              ) : (
                <div className="text-center py-8 bg-[#f7f6fd] text-gray-500">
                  No data available
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <AddBotData botId={botId} handleBack={handleBack} />
      )}
    </div>
  );
};

// Extracted Components
const StatCard = ({ title, value }: { title: string; value: number | string }) => (
  <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900  p-4">
    <span className="text-base font-semibold">{title}</span>
    <span className="text-3xl font-bold self-end mt-auto">
      {value || 0}
    </span>
  </div>
);

// Extracted Components
const CharStatCard = ({ title, value, total }: { title: string; value: number | string; total: number | string }) => (
  <div className="flex flex-col items-start flex-1 h-32 rounded-xl bg-white text-gray-900  p-4">
    <span className="text-base font-semibold">{title}</span>
    <span className=" flex items-end text-3xl font-bold self-end mt-auto">
      <p>{value || 0}</p>{" "}<p className="text-base font-light"> / {total || 0}</p>
    </span>
  </div>
);

const ShowEntries = ({ limit, setLimit, setPage }: {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => (
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
      className="px-2 py-1 bg-[#E0E0E0] rounded-md text-black outline-0"
    >
      <option value={10}>10</option>
      <option value={25}>25</option>
      <option value={50}>50</option>
    </select>
    <span className="text-gray-700 font-medium">entries</span>
  </div>
);

const DeleteButton = ({ isDisabled, onDelete }: {
  isDisabled: boolean;
  onDelete: () => void;
}) => (
  <button
    className={`px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all ${isDisabled
      ? "bg-gray-300 cursor-not-allowed"
      : "bg-red-500 hover:bg-red-600"
      }`}
    disabled={isDisabled}
    onClick={onDelete}
  >
    Delete
  </button>
);

const SearchBar = ({ search, setSearch }: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => (
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
      className="border border-white placeholder-white pl-9 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-[140px]"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
);

const AddDataButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="cursor-pointer bg-[#340555] text-white rounded text-sm font-bold py-[7px] px-[11px]"
    onClick={onClick}
  >
    Add Links or documents
  </button>
);

const RefreshButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="cursor-pointer bg-[#340555] text-white rounded text-sm font-bold py-[7px] px-[11px] "
    onClick={onClick}
  >
    <FiRefreshCcw size={20} />
  </button>
);

const Table = ({
  activeSource,
  selectedIds,
  handleSelectAll,
  handleSelectRow
}: {
  activeSource: any;
  selectedIds: number[];
  handleSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectRow: (id: number, checked: boolean) => void;
}) => {
  const { timezone, isLoading } = useTimezone()

  return (
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
          <th className="py-[14px] px-2 text-sm font-bold text-black">Status</th>
          <th className="py-[14px] px-2 text-sm font-bold text-black">Chars</th>
          <th className="py-[14px] px-2 text-sm font-bold text-black">Data</th>
          <th className="py-[14px] px-2 text-sm font-bold text-black">Date Added</th>
          <th className="py-[14px] px-2 text-sm font-bold text-black">Retrain</th>
          <th className="py-[14px] px-2 text-sm font-bold text-black">Type</th>
        </tr>
      </thead>
      <tbody className="bg-[#f7f6fd]">
        {activeSource.link?.map((item: any, index: number) => (
          <tr key={index} className="border-b border-gray-200 ">
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
            <td className="text-xs font-medium text-black px-2">
              <div className="flex gap-3">
                <p className="w-2 h-2 bg-[#DE4DBC] rounded-full"></p>
                {item?.status}
              </div>
            </td>
            <td className="py-4 text-xs font-medium text-black px-2">
              {item?.chars}
            </td>
            <td className="py-4 text-xs font-medium text-black max-w-48 overflow-ellipsis">
              {item?.target_link && <a href={item?.target_link}>{item?.target_link}</a>}
              {item?.document_link}
            </td>
            <td className="py-4 text-xs font-medium text-black px-2">
              {!isLoading ? formatDateOrTimeAgo(item?.created_at, timezone) : "-"}
            </td>
            <td className="truncate max-w-[150px] p-4 text-xs font-medium text-black px-2">
              -
            </td>
            <td className="py-4 px-2">
              <span className="bg-[#DEDEDE] py-1 rounded-full text-xs font-medium text-black px-2">
                {item?.train_from}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

const Pagination = ({ page, setPage, totalPages }: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) => (
  <div className="flex justify-center items-center gap-2 px-6 py-4 bg-white border-t border-gray-200">
    <button
      className="text-sm text-[#9E9E9E] font-medium disabled:opacity-50"
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
    >
      Previous
    </button>

    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
      const pageNum = i + 1;
      return (
        <button
          key={pageNum}
          className={`w-6 h-6 ${page === pageNum ? "bg-[#624DE3]" : "bg-gray-200"
            } text-black rounded-[7px] text-sm`}
          onClick={() => setPage(pageNum)}
        >
          {pageNum}
        </button>
      );
    })}

    {totalPages > 5 && (
      <span className="text-gray-700">...</span>
    )}

    <button
      className="text-sm text-[#9E9E9E] font-medium disabled:opacity-50"
      onClick={() => setPage(page + 1)}
      disabled={page === totalPages}
    >
      Next
    </button>
  </div>
);

export default ChatbotLinksDocs;