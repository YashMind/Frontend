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
      <h2 className="max-md:ml-12 text-xl max-w-1/2 font-bold mb-6 text-white">Links / Docs</h2>

      {!uploadDocs ? (
        <>
          {/* Overall Bot Statistics */}
          <div className="flex flex-wrap bg-white/5 backdrop-blur-md justify-evenly rounded-xl p-3 gap-4 items-center w-full border border-white/10 shadow-lg">
            <CharStatCard
              title=" All Bots Crawled Links"
              value={ChatbotDocLinksData?.user_target_links > ChatbotDocLinksData?.user_pending_count + ChatbotDocLinksData.user_failed_count ? ChatbotDocLinksData?.user_target_links - ChatbotDocLinksData?.user_pending_count - ChatbotDocLinksData.user_failed_count : 0}
              total={ChatbotDocLinksData?.allowed_total_webpages ? formatLargeNumber(ChatbotDocLinksData?.allowed_total_webpages) : 0}
            />
            <StatCard
              title="All Bots Trained"
              value={ChatbotDocLinksData?.user_target_links > ChatbotDocLinksData?.user_pending_count + ChatbotDocLinksData.user_failed_count ? ChatbotDocLinksData?.user_target_links - ChatbotDocLinksData?.user_pending_count - ChatbotDocLinksData.user_failed_count : 0}
            />
            <CharStatCard
              title="All Bots Chars"
              value={formatLargeNumber(ChatbotDocLinksData?.user_total_chars)}
              total={formatLargeNumber(ChatbotDocLinksData?.allowed_total_chars)}
            />
            <StatCard
              title="All Bots Pending"
              value={ChatbotDocLinksData?.user_pending_count}
            />
            <StatCard
              title=" All Bots Failed"
              value={ChatbotDocLinksData?.user_failed_count}
            />
          </div>

          {/* Source Tabs */}
          <div className="flex mt-8 gap-2 overflow-x-auto no-scrollbar pb-2">
            {ChatbotDocLinksData.data?.map((source, index) => (
              <button
                key={index}
                className={`px-4 py-2 min-w-[120px] rounded-lg font-medium truncate transition-all duration-300 ${!(activeSourceIndex === index)
                  ? "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent"
                  : "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 border border-indigo-400/50"
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

          <div className="mt-4">
            {/* Active Source Statistics */}
            {activeSource && (
              <div className="bg-indigo-600/30 backdrop-blur-sm justify-evenly p-4 flex flex-wrap gap-4 items-center w-full rounded-xl border border-indigo-500/30 mb-6">
                <CharStatCard
                  title="Crawled Links"
                  value={activeSource?.total_target_links - activeSource?.pending_count - activeSource.failed_count}
                  total={ChatbotDocLinksData?.allowed_total_webpages ? formatLargeNumber(ChatbotDocLinksData?.allowed_total_webpages) : 0}
                  transparent
                />
                <StatCard
                  title="Trained"
                  value={activeSource?.total_target_links - activeSource?.pending_count - activeSource.failed_count}
                  transparent
                />
                <CharStatCard
                  title="Chars"
                  value={formatLargeNumber(activeSource?.total_chars)}
                  total={formatLargeNumber(ChatbotDocLinksData?.allowed_total_chars)}
                  transparent
                />
                <StatCard
                  title="Pending"
                  value={activeSource?.pending_count}
                  transparent
                />
                <StatCard
                  title="Failed"
                  value={activeSource?.failed_count}
                  transparent
                />
              </div>
            )}

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white/5 backdrop-blur-md px-6 py-4 rounded-t-xl border border-white/10 border-b-0">
              <div className="flex flex-wrap items-center gap-4">
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
            <div className="text-sm w-full overflow-hidden border border-white/10 rounded-b-xl border-t-0">
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
                <div className="text-center py-12 bg-white/5 text-gray-400 backdrop-blur-md">
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
const StatCard = ({ title, value, transparent }: { title: string; value: number | string, transparent?: boolean }) => (
  <div className={`flex flex-col items-start flex-1 h-32 rounded-xl text-white p-4 transition-all duration-300 hover:-translate-y-1 ${transparent
    ? "bg-white/10 border border-white/10 shadow-lg"
    : "bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/15"
    }`}>
    <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">{title}</span>
    <span className="text-3xl font-bold self-start mt-auto bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
      {value || 0}
    </span>
  </div>
);

// Extracted Components
const CharStatCard = ({ title, value, total, transparent }: { title: string; value: number | string; total: number | string, transparent?: boolean }) => (
  <div className={`flex flex-col items-start flex-1 h-32 rounded-xl text-white p-4 transition-all duration-300 hover:-translate-y-1 ${transparent
    ? "bg-white/10 border border-white/10 shadow-lg"
    : "bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/15"
    }`}>
    <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">{title}</span>
    <span className="flex items-baseline gap-1 mt-auto">
      <p className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{value || 0}</p>
      <p className="text-sm font-light text-gray-400">/ {total || 0}</p>
    </span>
  </div>
);

const ShowEntries = ({ limit, setLimit, setPage }: {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <div className="flex items-center gap-3 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
    <label htmlFor="entries" className="text-gray-300 font-medium text-sm">
      Show
    </label>
    <select
      id="entries"
      value={limit}
      onChange={(e) => {
        setLimit(Number(e.target.value));
        setPage(1);
      }}
      className="px-2 py-1 bg-white/10 rounded-md text-white border border-white/20 outline-none focus:border-indigo-500 text-sm"
    >
      <option className="bg-[#2a2561]" value={10}>10</option>
      <option className="bg-[#2a2561]" value={25}>25</option>
      <option className="bg-[#2a2561]" value={50}>50</option>
    </select>
    <span className="text-gray-300 font-medium text-sm">entries</span>
  </div>
);

const DeleteButton = ({ isDisabled, onDelete }: {
  isDisabled: boolean;
  onDelete: () => void;
}) => (
  <button
    className={`px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all shadow-lg ${isDisabled
      ? "bg-white/10 text-gray-500 cursor-not-allowed border border-white/5"
      : "bg-red-500/80 hover:bg-red-600 border border-red-500/50 backdrop-blur-sm"
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
);

const AddDataButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold py-2 px-4 shadow-lg shadow-indigo-500/20 border border-indigo-500/50 transition-all"
    onClick={onClick}
  >
    Add Links or documents
  </button>
);

const RefreshButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="cursor-pointer bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-bold p-2 border border-white/20 transition-all"
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
    <table className="w-full text-left text-gray-300">
      <thead className="bg-white/10 text-gray-200 uppercase text-xs tracking-wider font-semibold border-b border-white/10 backdrop-blur-md">
        <tr>
          <th className="p-4 w-12 text-center">
            <input
              type="checkbox"
              className="w-4 h-4 accent-indigo-500 bg-white/10 border-white/30 rounded cursor-pointer"
              onChange={handleSelectAll}
            />
          </th>
          <th className="py-4 px-2">Status</th>
          <th className="py-4 px-2">Chars</th>
          <th className="py-4 px-2">Data</th>
          <th className="py-4 px-2">Date Added</th>
          <th className="py-4 px-2">Retrain</th>
          <th className="py-4 px-2">Type</th>
        </tr>
      </thead>
      <tbody className="bg-white/5 divide-y divide-white/5 backdrop-blur-sm">
        {activeSource.link?.map((item: any, index: number) => (
          <tr key={index} className="hover:bg-white/10 transition-colors duration-150">
            <td className="p-4 text-center">
              <input
                type="checkbox"
                className="w-4 h-4 accent-indigo-500 bg-white/10 border-white/30 rounded cursor-pointer"
                checked={selectedIds.includes(Number(item?.id))}
                onChange={(e) =>
                  handleSelectRow(Number(item?.id), e.target.checked)
                }
              />
            </td>
            <td className="text-sm font-medium text-white px-2">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${item?.status?.toLowerCase() === 'trained' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'bg-amber-400'}`}></span>
                {item?.status}
              </div>
            </td>
            <td className="py-4 text-sm text-gray-300 px-2">
              {item?.chars}
            </td>
            <td className="py-4 text-sm text-indigo-300 hover:text-indigo-200 px-2 max-w-[200px] truncate underline decoration-indigo-500/30 underline-offset-2">
              {item?.target_link && <a href={item?.target_link} target="_blank" rel="noreferrer">{item?.target_link}</a>}
              {item?.document_link}
            </td>
            <td className="py-4 text-sm text-gray-300 px-2">
              {!isLoading ? formatDateOrTimeAgo(item?.created_at, timezone) : "-"}
            </td>
            <td className="truncate max-w-[150px] p-4 text-sm text-gray-400 px-2">
              -
            </td>
            <td className="py-4 px-2">
              <span className="bg-white/10 py-1 px-3 rounded-full text-xs font-medium text-white border border-white/10">
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
  <div className="flex justify-center items-center gap-2 px-6 py-4 bg-white/5 border-t border-white/10 backdrop-blur-md">
    <button
      className="px-3 py-1 text-sm font-medium text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
          className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${page === pageNum
            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
            : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          onClick={() => setPage(pageNum)}
        >
          {pageNum}
        </button>
      );
    })}

    {totalPages > 5 && (
      <span className="text-gray-500">...</span>
    )}

    <button
      className="px-3 py-1 text-sm font-medium text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      onClick={() => setPage(page + 1)}
      disabled={page === totalPages}
    >
      Next
    </button>
  </div>
);

export default ChatbotLinksDocs;