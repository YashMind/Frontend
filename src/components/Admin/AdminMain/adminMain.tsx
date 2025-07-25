import Image from "next/image";
import { RootState } from "@/store"; 
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminTransactions } from "@/store/slices/admin/tokenAnalytic"; 
import { fetchCountryNames } from "@/store/slices/auth/country";
import { AppDispatch } from "@/store/store";

const AdminMain = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(100);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [countryStats, setCountryStats] = useState<Array<{country: string, count: number}>>([]);

  const tokenCredit = useSelector((state: RootState) => state.tokenCredit);
  const transactionsState = useSelector((state: RootState) => state.tokens.transactions);
  const transactionsData = transactionsState?.data;

  const transactions = transactionsData?.transactions || [];
  const total_revenue = transactionsData?.total_revenue || 0;
  const pagination = transactionsData?.pagination || {};

  const countryState = useSelector((state: RootState) => state.countries);
  const countryNames = countryState.countries || [];
  const countriesLoading = countryState.loading;
  const countriesError = countryState.error;

  // Fixed: Move the country counting logic to a separate useEffect that depends on countryNames
  useEffect(() => {
    const countCountries = (countryNames: string[]) => {
      const countryCountMap: Record<string, number> = {};

      countryNames.forEach((countryCode) => {
        countryCountMap[countryCode] = (countryCountMap[countryCode] || 0) + 1;
      });

      const sortedCountries = Object.entries(countryCountMap)
        .sort((a, b) => b[1] - a[1])
        .map(([country, count]) => ({ country, count }));

      console.log("Sorted countries by user count:", sortedCountries);
      return sortedCountries;
    };

    if (countryNames && countryNames.length > 0) {
      const stats = countCountries(countryNames);
      setCountryStats(stats);
    } else {
      setCountryStats([]);
    }
  }, [countryNames]); // Fixed: Added dependency array

  useEffect(() => {
    dispatch(fetchAdminTransactions({ page: currentPage, perPage }));
  }, [dispatch, currentPage, perPage]);

  useEffect(() => {
    dispatch(fetchCountryNames());
  }, [dispatch]);

  // Fixed: Added proper TypeScript types for parameters
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const formatCurrency = (amount: number | string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Number(amount));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusBadge = (status: string) => {
    const statusLower = status.toLowerCase();
    if (['completed', 'success', 'paid', 'confirmed'].includes(statusLower)) {
      return "bg-[#05C16833] text-[#14CA74] px-2 py-1 rounded text-xs";
    } else if (['pending', 'processing'].includes(statusLower)) {
      return "bg-[#FFB01633] text-[#FDB52A] px-2 py-1 rounded text-xs";
    } else {
      return "bg-red-100 text-red-800 px-2 py-1 rounded text-xs";
    }
  };

  // Helper function to get unique countries count
  const getUniqueCountriesCount = () => {
    return new Set(countryNames).size;
  };

  return (
    <div>
      {/* Total revenue */}
      <div className="total-revenu mt-[17]">
        <div className="text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0B1739]">
            {/* Total Revenue Card */}
            <div className="col-span-2 p-4 border border-[#343B4F] shadow">
              <h2 className="text-lg font-semibold mb-2">Total revenue</h2>
              <div className="text-3xl font-bold">
                {loading ? (
                  <span>Loading...</span>
                ) : error ? (
                  <span className="text-red-400">Error loading revenue</span>
                ) : (
                  <>
                    {formatCurrency(total_revenue || 0)}
                    <span className="text-green-400 text-sm ml-2">24.8%</span>
                  </>
                )}
              </div>

              <Image
                alt="Revenue chart"
                src="/images/img3.png"
                className="w-full"
                height={394}
                width={593}
              />
            </div>

            {/* Right Side Cards */}
            <div className="">
              {/* Total Profit Card */}
              <div className="bg-[#151A2E] border border-[#343B4F] shadow p-[25]">
                <h2 className="text-lg font-semibold">Total profit</h2>
                <div className="text-2xl font-bold">
                  $144.6K{" "}
                  <span className="text-green-400 text-sm ml-2">28.5%</span>
                </div>
                <Image
                  alt="Profit chart"
                  className=""
                  src="/images/img4.png"
                  height={123}
                  width={320}
                />
                <div className="text-xs text-gray-400 mt-2">
                  Last 12 months{" "}
                  <span className="text-purple-400 ml-2 cursor-pointer">
                    View report
                  </span>
                </div>
              </div>

              {/* Total Sessions Card */}
              <div className="bg-[#151A2E] rounded-xl shadow-md p-[25]">
                <h2 className="text-lg font-semibold mb-2">Total sessions</h2>
                <div className="text-2xl font-bold">
                  400 <span className="text-green-400 text-sm ml-2">16.%</span>
                </div>
                <Image
                  alt="Sessions chart"
                  className=""
                  src="/images/img1.png"
                  height={171}
                  width={312}
                />
                <div className="text-xs text-green-400 mt-2">
                  ● Live <span className="text-white ml-2">10k visitors</span>
                  <span className="text-purple-400 ml-2 cursor-pointer">
                    View report
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report overviews */}
      <div className="flex justify-between items-center mb-6 mt-[40px]">
        <h1 className="text-xl font-semibold">Reports overview</h1>
        <div className="flex gap-2">
          <button className="bg-[#13192f] text-white px-3 py-2 text-sm rounded flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 9h10M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
              />
            </svg>
            Select date
          </button>
          <button className="bg-[#13192f] text-white px-3 py-2 text-sm rounded">
            Export data ↓
          </button>
          <button className="bg-[#9d34da] text-white px-3 py-2 text-sm rounded">
            Create report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Alerts Section */}
        <div className="bg-[#13192f] p-6 rounded-xl">
          <h2 className="text-sm text-gray-400 mb-4">
            Alerts (Quota overuse, payment failures)
          </h2>
          <div className="flex justify-center mb-4">
            {/* Circular Chart Placeholder */}
            <svg width="160" height="80" viewBox="0 0 160 80">
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="transparent"
                stroke="#e74c3c"
                strokeWidth="15"
                strokeDasharray="120"
                strokeDashoffset="0"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="transparent"
                stroke="#3498db"
                strokeWidth="15"
                strokeDasharray="60"
                strokeDashoffset="-120"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="transparent"
                stroke="#1abc9c"
                strokeWidth="15"
                strokeDasharray="30"
                strokeDashoffset="-180"
              />
            </svg>
          </div>
          <div className="text-center text-3xl font-semibold">23,648</div>
          <p className="text-center text-sm text-gray-400">Users by device</p>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#d946ef] rounded-full"></span>{" "}
                Desktop users
              </span>
              <span>15,624</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#38bdf8] rounded-full"></span>{" "}
                Phone app users
              </span>
              <span>5,546</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#22d3ee] rounded-full"></span>{" "}
                Laptop users
              </span>
              <span>2,478</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="bg-[#13192f] p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm text-gray-400">Recent Transactions</h2>
            <button 
              className="text-sm text-white bg-[#0d1224] border border-gray-600 px-2 py-1 rounded"
              onClick={() => dispatch(fetchAdminTransactions({ page: currentPage, perPage }))}
              disabled={loading}
            >
              {loading ? "Loading..." : "Refresh"}
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
                  <th className="py-2">Order ID</th>
                  <th className="py-2">User</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Amount</th>
                </tr>
              </thead>
              <tbody className="text-white divide-y divide-gray-700">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="py-4 text-center text-gray-400">
                      Loading transactions...
                    </td>
                  </tr>
                ) : transactions && transactions.length > 0 ? (
                  transactions.slice(0, 6).map((transaction: any) => (
                    <tr key={transaction.id}>
                      <td className="py-2">
                        {transaction.order_id || `#${transaction.id}`}
                      </td>
                      <td className="py-2">
                        {transaction.user?.email || transaction.user?.name || 'N/A'}
                      </td>
                      <td className="py-2">
                        {formatDate(transaction.created_at)}
                      </td>
                      <td className="py-2">
                        <span className={getStatusBadge(transaction.status)}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="py-2">
                        {formatCurrency(transaction.amount)}
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

          {/* Pagination */}
          {pagination && pagination.total_pages > 1 && (
            <div className="flex justify-between items-center mt-4 text-sm">
              <span className="text-gray-400">
                Page {pagination.page} of {pagination.total_pages} 
                ({pagination.total_transactions} total)
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page === 1 || loading}
                  className="px-3 py-1 bg-[#0d1224] border border-gray-600 rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page === pagination.total_pages || loading}
                  className="px-3 py-1 bg-[#0d1224] border border-gray-600 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Users by country - Enhanced */}
      <div className="bg-[#0B1739] mt-5 text-white p-6 rounded-xl w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <p className="text-base pb-2 text-white">Users by country</p>
          <button 
            className="text-sm text-gray-400 bg-[#0A1330] p-2 hover:text-white"
            onClick={() => dispatch(fetchCountryNames())}
            disabled={countriesLoading}
          >
            {countriesLoading ? "Refreshing..." : "Refresh ↓"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <div>
            <div className="flex items-end gap-2">
              <h2 className="text-3xl font-semibold">
                {countryNames.length > 0 ? `${getUniqueCountriesCount()} Countries` : "No Data"}
              </h2>
              {countryNames.length > 0 && (
                <span className="text-[#14CA74] bg-[#05C16833] bg-opacity-30 px-2 py-0.5 text-sm rounded">
                  {Math.floor((getUniqueCountriesCount() / 250) * 100)}% Coverage
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400 mt-1">
              Total users: {countryNames.length}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              {countriesLoading ? "Loading..." : countriesError || "Global Distribution"}
            </p>
          </div>
        </div>

        {countriesError && (
          <div className="text-red-400 text-sm mb-4 p-2 bg-red-900/20 rounded">
            Error loading countries: {countriesError}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Country List - Enhanced with stats */}
          <div className="w-full lg:w-1/3 space-y-4 max-h-96 overflow-y-auto">
            {countriesLoading ? (
              <div className="text-center text-gray-400 py-4">Loading countries...</div>
            ) : countryStats.length > 0 ? (
              countryStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{stat.country}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-[#14CA74] font-medium">
                      {stat.count} {stat.count === 1 ? 'user' : 'users'}
                    </span>
                    <div className="w-16 bg-gray-700 rounded-full h-1 mt-1">
                      <div 
                        className="bg-[#14CA74] h-1 rounded-full" 
                        style={{ width: `${(stat.count / Math.max(...countryStats.map(s => s.count))) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))
            ) : countryNames.length > 0 ? (
              // Fallback to unique country names if stats aren't available
              [...new Set(countryNames)].map((name, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white">{name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400">
                      {countryNames.filter(c => c === name).length} users
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

          {/* Right Map */}
          {/* <div className="w-full lg:w-2/3 relative">
            <img
              src="images/graph-image.png"
              alt="World map with highlighted regions"
              className="w-full rounded-lg"
            />
            {countryNames.length > 0 && (
              <div className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2 bg-[#1B2040] text-cyan-300 p-4 rounded-lg shadow-xl">
                <p className="text-sm font-semibold">{getUniqueCountriesCount()} Countries</p>
                <p className="text-xs text-white">{countryNames.length} Total Users</p>
                <p className="text-xs text-gray-300">Global Coverage</p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminMain;