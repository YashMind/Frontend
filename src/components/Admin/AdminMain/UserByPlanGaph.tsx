import React, { useEffect, useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersByPlan } from "@/store/slices/admin/tokenAnalytic";
import { RootState, AppDispatch } from "@/store";

// Custom tooltip that shows all plans for a period
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1A202C] p-3 shadow-lg rounded-md border border-[#2D3748] text-white">
        <p className="font-semibold">{`Period: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm mt-1">
            {entry.name}: <span className="font-semibold text-[#4ade80]">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function UserByPlanGraph() {
  const dispatch = useDispatch<AppDispatch>();
  const [filter, setFilter] = useState("monthly");

  const usersByPlanState = useSelector((state: RootState) => state.tokens?.usersByPlan);
  const { data: usersByPlan = [], loading = false, error = null } = usersByPlanState || {};

  useEffect(() => {
    dispatch(fetchUsersByPlan({ filter }));
  }, [dispatch, filter]);

  const totalUsers = usersByPlan.reduce((sum, item) => sum + (item.user_count || 0), 0);

  const mostPopularPlan = useMemo(() => {
    return usersByPlan.length
      ? usersByPlan.reduce((max, plan) => (plan.user_count > max.user_count ? plan : max), usersByPlan[0])
      : null;
  }, [usersByPlan]);

  // Unique plan names and periods
  const uniquePlans = useMemo(() => [...new Set(usersByPlan.map(item => item.plan))], [usersByPlan]);
  const uniquePeriods = useMemo(() => [...new Set(usersByPlan.map(item => item.period))], [usersByPlan]);

  // Data formatted for recharts
  const transformedData = useMemo(() => {
    return uniquePeriods.map(period => {
      const entry: Record<string, any> = { period };
      uniquePlans.forEach(plan => {
        const matched = usersByPlan.find(d => d.period === period && d.plan === plan);
        entry[plan] = matched ? matched.user_count : 0;
      });
      return entry;
    });
  }, [usersByPlan, uniquePlans, uniquePeriods]);
console.log('usersByPlan:', usersByPlan);
console.log('uniquePeriods:', uniquePeriods);
  return (
    <div className="space-y-4 p-4 bg-[#1E2130] rounded-lg border border-[#343B4F] shadow">
      {/* Header + Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Users by Plan</h3>
          <p className="text-sm text-gray-400">Distribution of users across subscription plans</p>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="filter" className="text-sm text-gray-400">Filter:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#252A41] border border-[#343B4F] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="bi-annual">Bi-Annual</option>
            <option value="yearly">Yearly</option>
           
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#252A41] p-4 rounded-lg border border-[#343B4F]">
          <p className="text-sm text-gray-400 mb-1">Total Users</p>
          <p className="text-xl font-bold text-white">{totalUsers}</p>
        </div>

        <div className="bg-[#252A41] p-4 rounded-lg border border-[#343B4F]">
          <p className="text-sm text-gray-400 mb-1">Plan Types</p>
          <p className="text-xl font-bold text-white">{uniquePlans.length}</p>
        </div>

        <div className="bg-[#252A41] p-4 rounded-lg border border-[#343B4F]">
          <p className="text-sm text-gray-400 mb-1">Most Popular</p>
          <p className="text-sm font-bold text-white truncate">
            {mostPopularPlan ? `${mostPopularPlan.plan} (${mostPopularPlan.user_count})` : "N/A"}
          </p>
        </div>
      </div>

      {/* Chart */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse flex items-center space-x-2 text-gray-400">
            <div className="w-4 h-4 rounded-full bg-[#343B4F] animate-bounce"></div>
            <span>Loading user data...</span>
          </div>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-64 text-red-400 gap-2">
          <span>{error}</span>
          <button
            onClick={() => dispatch(fetchUsersByPlan({ filter }))}
            className="mt-2 px-4 py-2 text-sm rounded bg-[#343B4F] hover:bg-[#3C4254] transition-colors text-white"
          >
            Try Again
          </button>
        </div>
      ) : usersByPlan.length > 0 ? (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={transformedData}>
  <CartesianGrid stroke="#2D3748" strokeDasharray="3 3" /> 
  <XAxis dataKey="period" angle={-20} textAnchor="end" />
  <YAxis />
  <Tooltip content={<CustomTooltip />} />
  <Legend />
  {uniquePlans.map((plan, index) => (
    <Line
      key={plan}
      type="monotone"
      dataKey={plan}
      name={plan}
      stroke={['#4ade80', '#60a5fa', '#f87171', '#fbbf24'][index % 4]}
      strokeWidth={2}
      dot={false}
    />
  ))}
</LineChart>

          </ResponsiveContainer>
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-400">
          <div className="text-center">
            <p>No user data available</p>
            <p className="text-sm mt-1">Try changing your filter or check back later</p>
          </div>
        </div>
      )}
    </div>
  );
}
