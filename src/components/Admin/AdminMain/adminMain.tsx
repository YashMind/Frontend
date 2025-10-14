import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminTransactions } from "@/store/slices/admin/tokenAnalytic";
import { fetchCountryNames } from "@/store/slices/auth/country";
import GraphChart from "./GraphChart";
import UserByPlanGaph from "./UserByPlanGaph";
import { AppDispatch } from "@/store/store";
import { formatDateOrTimeAgo, formatDateTimeWithTz } from "@/components/utils/formatDateTime";
import { useTimezone } from "@/context/TimeZoneContext";

const AdminMain = () => {
  const { timezone, isLoading } = useTimezone();
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(100);
  const [error, setError] = useState<string | null>(null);
  const [countryStats, setCountryStats] = useState<
    Array<{ country: string; count: number }>
  >([]);

  // Add state for local transaction pagination
  const [transactionPage, setTransactionPage] = useState(1);
  const transactionsPerPage = 7;

  const [refreshing, setRefreshing] = useState(false);

  const tokenCredit = useSelector((state: RootState) => state.tokenCredit);
  const transactionsState = useSelector(
    (state: RootState) => state.tokens.transactions
  );
  const transactionsData = transactionsState?.data;

  const transactions = transactionsData?.transactions || [];
  const revenueByCurrency = transactionsData?.revenue_by_currency || {
    INR: 0,
    USD: 0,
  };
  const transactionLoading = transactionsState?.loading || false;
  const transactionError = transactionsState?.error;
  const pagination = transactionsData?.pagination || {};

  const countryState = useSelector((state: RootState) => state.countries);
  const countryNames = countryState.countries || [];
  const countriesLoading = countryState.loading;
  const countriesError = countryState.error;

  // Calculate pagination for transactions
  const totalTransactionPages = Math.ceil(transactions.length / transactionsPerPage);
  const startIndex = (transactionPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;
  const paginatedTransactions = transactions.slice(startIndex, endIndex);

  useEffect(() => {
    const countCountries = (countryNames: string[]) => {
      const countryCountMap: Record<string, number> = {};

      countryNames.forEach((countryCode) => {
        countryCountMap[countryCode] = (countryCountMap[countryCode] || 0) + 1;
      });

      const sortedCountries = Object.entries(countryCountMap)
        .sort((a, b) => b[1] - a[1])
        .map(([country, count]) => ({ country, count }));

      return sortedCountries;
    };

    if (countryNames && countryNames.length > 0) {
      const stats = countCountries(countryNames);
      setCountryStats(stats);
    } else {
      setCountryStats([]);
    }
  }, [countryNames]);

  useEffect(() => {
    dispatch(fetchAdminTransactions({ page: currentPage, perPage }));
  }, [dispatch, currentPage, perPage]);

  useEffect(() => {
    dispatch(fetchCountryNames());
  }, [dispatch]);

  // Reset to first page when transactions data changes
  useEffect(() => {
    setTransactionPage(1);
  }, [transactions.length]);

  const handleRefreshTransactions = async () => {
    setRefreshing(true);
    try {
      await dispatch(fetchAdminTransactions({ page: currentPage, perPage })).unwrap();
    } catch (err) {
      setError("Failed to refresh transactions");
      console.error("Refresh error:", err);
    } finally {
      setRefreshing(false);
    }
  };

  const handleRefreshCountries = async () => {
    try {
      await dispatch(fetchCountryNames()).unwrap();
    } catch (err) {
      setError("Failed to refresh countries");
      console.error("Refresh error:", err);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleTransactionPageChange = (newPage: number) => {
    setTransactionPage(newPage);
  };

  const formatCurrency = (amount: number, currency?: string) => {
    if (!currency) {
      return new Intl.NumberFormat("en-US").format(amount);
    }

    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      }).format(amount);
    } catch (e) {
      return `${currency} ${new Intl.NumberFormat("en-US").format(amount)}`;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getStatusBadge = (status: string) => {
    const statusLower = status.toLowerCase();
    if (["completed", "success", "paid", "confirmed"].includes(statusLower)) {
      return "bg-[#05C16833] text-[#14CA74] px-2 py-1 rounded text-xs";
    } else if (["pending", "processing"].includes(statusLower)) {
      return "bg-[#FFB01633] text-[#FDB52A] px-2 py-1 rounded text-xs";
    } else {
      return "bg-red-100 text-red-800 px-2 py-1 rounded text-xs";
    }
  };

  const getUniqueCountriesCount = () => {
    return new Set(countryNames).size;
  };

  return (
    <div className="min-h-screen mt-5 bg-[#0B1739] text-white p-6">
      <div className="max-w-7xl  mx-auto">
        {/* Header */}
        <header className="flex m-3 justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => {
                handleRefreshTransactions();
                handleRefreshCountries();
              }}
              disabled={transactionLoading || countriesLoading}
            >
              {transactionLoading || countriesLoading ? "Refreshing..." : "Refresh All Data"}
            </button>
          </div>
        </header>

        {/* Total revenue */}
        <div className="total-revenu mt-4">
          <div className="text-white space-y-6">
            <div className="p-6 rounded-lg border border-[#343B4F] shadow-lg bg-[#1E2130]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Total Revenue</h2>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#343B4F] text-[#8A92B2]">INR</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#343B4F] text-[#8A92B2]">USD</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-lg border border-[#343B4F] bg-[#252A41]">
                  {countriesLoading ? (
                    <div className="flex items-center justify-center h-20">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-[#343B4F] h-3 w-3"></div>
                        <div className="flex-1 space-y-3">
                          <div className="h-4 bg-[#343B4F] rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  ) : countriesError ? (
                    <div className="text-red-400 flex items-center space-x-2">
                      <span>Failed to load revenue data</span>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm text-[#8A92B2]">Indian Rupee</p>
                      <p className="text-2xl font-bold text-white">
                        {formatCurrency(revenueByCurrency.INR, "INR")}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-5 rounded-lg border border-[#343B4F] bg-[#252A41]">
                  {countriesLoading ? (
                    <div className="flex items-center justify-center h-20">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-[#343B4F] h-3 w-3"></div>
                        <div className="flex-1 space-y-3">
                          <div className="h-4 bg-[#343B4F] rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  ) : countriesError ? (
                    <div className="text-red-400 flex items-center space-x-2">
                      <span>Failed to load revenue data</span>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm text-[#8A92B2]">US Dollar</p>
                      <p className="text-2xl font-bold text-white">
                        {formatCurrency(revenueByCurrency.USD, "USD")}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 rounded-lg border border-[#343B4F] bg-[#252A41]">
                <GraphChart />
              </div>
            </div>

            <div className="bg-[#151A2E] border border-[#343B4F] shadow p-6 rounded-lg">
              <UserByPlanGaph />
            </div>
          </div>
        </div>

        {/* Report overviews */}
        <div className="flex justify-between items-center mb-6 mt-10">
          <h1 className="text-xl font-semibold">Reports overview</h1>
        </div>

        <div className="grid  gap-6">
          {/* Users by country Section */}
          <div className="bg-[#13192f] p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <p className="text-base pb-2 text-white">Users by country</p>
              <button
                className="text-sm text-gray-400 bg-[#0A1330] p-2 hover:text-white rounded-lg"
                onClick={handleRefreshCountries}
                disabled={countriesLoading}
              >
                {countriesLoading ? "Refreshing..." : "Refresh ↓"}
              </button>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <div className="flex items-end gap-2">
                  <h2 className="text-3xl font-semibold">
                    {countryNames.length > 0
                      ? `${getUniqueCountriesCount()} Countries`
                      : "No Data"}
                  </h2>
                  {countryNames.length > 0 && (
                    <span className="text-[#14CA74] bg-[#05C16833] bg-opacity-30 px-2 py-0.5 text-sm rounded">
                      {Math.floor((getUniqueCountriesCount() / 250) * 100)}%
                      Coverage
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  Total users: {countryNames.length}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-sm text-gray-400">
                  {countriesLoading
                    ? "Loading..."
                    : countriesError || "Global Distribution"}
                </p>
              </div>
            </div>

            {countriesError && (
              <div className="text-red-400 text-sm mb-4 p-2 bg-red-900/20 rounded">
                Error loading countries: {countriesError}
              </div>
            )}

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {countriesLoading ? (
                <div className="text-center text-gray-400 py-4">
                  Loading countries...
                </div>
              ) : countryStats.length > 0 ? (
                countryStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">
                        {stat.country}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-[#14CA74] font-medium">
                        {stat.count} {stat.count === 1 ? "user" : "users"}
                      </span>
                      <div className="w-16 bg-gray-700 rounded-full h-1 mt-1">
                        <div
                          className="bg-[#14CA74] h-1 rounded-full"
                          style={{
                            width: `${(stat.count /
                              Math.max(...countryStats.map((s) => s.count))) *
                              100
                              }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : countryNames.length > 0 ? (
                [...new Set(countryNames)].map((name, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white">{name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-400">
                        {countryNames.filter((c) => c === name).length} users
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-400 py-4">
                  No country data available
                </div>
              )}
            </div>
          </div>

          {/* Recent Transactions Table */}
          <div className="bg-[#13192f] p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm text-gray-400">Recent Transactions</h2>
              <button
                className="text-sm text-white bg-[#0d1224] border border-gray-600 px-4 py-2 rounded-lg hover:bg-[#1a223c] transition-colors"
                onClick={handleRefreshTransactions}
                disabled={transactionLoading || refreshing}
              >
                {transactionLoading || refreshing ? "Loading..." : "Refresh Transactions"}
              </button>
            </div>

            {error && (
              <div className="text-red-400 text-sm mb-4 p-2 bg-red-900/20 rounded">
                Error: {error}
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-gray-400 text-left">
                  <tr>
                    <th className="py-1 ">Order ID</th>
                    <th className="py-1 ">User</th>
                    <th className="py-1 ">Date</th>
                    <th className="py-1 ">Status</th>
                    <th className="py-1 ">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-white divide-y divide-gray-700">
                  {transactionLoading ? (
                    <tr>
                      <td colSpan={5} className="py-4 text-center text-gray-400">
                        Loading transactions...
                      </td>
                    </tr>
                  ) : paginatedTransactions && paginatedTransactions.length > 0 ? (
                    paginatedTransactions.map((transaction: any) => (
                      <tr key={transaction.id}>
                        <td className="py-1 ">
                          {transaction.order_id || `#${transaction.id}`}
                        </td>
                        <td className="py-1 ">
                          {transaction.user?.email ||
                            transaction.user?.name ||
                            "N/A"}
                        </td>
                        <td className="py-1 ">
                          {formatDateOrTimeAgo(transaction.created_at, timezone)}
                        </td>
                        <td className="py-1 ">
                          <span className={getStatusBadge(transaction.status)}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="py-1 ">
                          {formatCurrency(transaction.amount, transaction.currency)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-4 text-center text-gray-400">
                        No transactions found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Local pagination for displayed transactions */}
            {transactions.length > transactionsPerPage && (
              <div className="flex justify-between items-center mt-4 text-sm border-t border-gray-700 pt-4">
                <span className="text-gray-400">
                  Showing {startIndex + 1} to {Math.min(endIndex, transactions.length)} of {transactions.length} transactions
                  (Page {transactionPage} of {totalTransactionPages})
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleTransactionPageChange(transactionPage - 1)}
                    disabled={transactionPage === 1}
                    className="px-3 py-1 bg-[#0d1224] border border-gray-600 rounded disabled:opacity-50 hover:bg-[#1a223c] transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => handleTransactionPageChange(transactionPage + 1)}
                    disabled={transactionPage === totalTransactionPages}
                    className="px-3 py-1 bg-[#0d1224] border border-gray-600 rounded disabled:opacity-50 hover:bg-[#1a223c] transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* API pagination (if needed for loading more data) */}
            {pagination && pagination.total_pages > 1 && (
              <div className="flex justify-between items-center mt-4 text-sm border-t border-gray-700 pt-4">
                <span className="text-gray-400">
                  API Page {pagination.page} of {pagination.total_pages}
                  ({pagination.total_transactions} total transactions)
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePageChange(pagination.page - 1)}
                    disabled={pagination.page === 1 || transactionLoading}
                    className="px-3 py-1 bg-[#0d1224] border border-gray-600 rounded disabled:opacity-50 hover:bg-[#1a223c] transition-colors"
                  >
                    Load Previous
                  </button>
                  <button
                    onClick={() => handlePageChange(pagination.page + 1)}
                    disabled={
                      pagination.page === pagination.total_pages || transactionLoading
                    }
                    className="px-3 py-1 bg-[#0d1224] border border-gray-600 rounded disabled:opacity-50 hover:bg-[#1a223c] transition-colors"
                  >
                    Load Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;