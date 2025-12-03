import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminTransactions } from "@/store/slices/admin/tokenAnalytic";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { AppDispatch, RootState } from "@/store/store";

const GraphChart = () => {
  const transactionsState = useSelector(
    (state: RootState) => state.tokens?.transactions
  );
  const dispatch = useDispatch<AppDispatch>();
  const [groupBy, setGroupBy] = useState<"daily" | "monthly" | "yearly">(
    "monthly"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await dispatch(
          fetchAdminTransactions({ page: 1, perPage: 100, groupBy })
        );
      } catch (err) {
        setError("Failed to load transaction data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch, groupBy]);

  const transactionsData: any = transactionsState?.data;
  const groupedData = transactionsData
    ? transactionsData[`${groupBy}_data`]
    : null;

  const [formattedData, setFormattedData] = useState<any[]>([]);

  useEffect(() => {
    if (!groupedData) return;

    const periodsSet = new Set<string>();

    ["success", "pending"].forEach((status) => {
      if (groupedData[status]) {
        Object.keys(groupedData[status]).forEach((currency) => {
          groupedData[status][currency].forEach((entry: any) => {
            periodsSet.add(entry.period);
          });
        });
      }
    });

    const periods = Array.from(periodsSet).sort();

    const result = periods.map((period) => {
      const entry: any = { period };

      ["success", "pending"].forEach((status) => {
        if (groupedData[status]) {
          Object.keys(groupedData[status]).forEach((currency) => {
            const currencyData = groupedData[status][currency].find(
              (d: any) => d.period === period
            );
            const key = `${status}_${currency}`;
            entry[key] = currencyData ? currencyData.total_amount : 0;
          });
        }
      });

      return entry;
    });

    setFormattedData(result);
  }, [groupedData]);

  // Color palette for chart lines
  const successColors = ["#4ade80", "#22d3ee", "#a78bfa"];
  const pendingColors = ["#f59e0b", "#ef4444", "#ec4899"];

  return (
    <div className="space-y-4 p-4 bg-[#1E2130] rounded-lg border border-[#343B4F] shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-lg font-semibold text-white">Transaction Trends</h3>

        <div className="flex items-center gap-2">
          <label htmlFor="groupBy" className="text-sm text-gray-400">
            Group by:
          </label>
          <select
            id="groupBy"
            value={groupBy}
            onChange={(e) =>
              setGroupBy(e.target.value as "daily" | "monthly" | "yearly")
            }
            className="bg-[#252A41] border border-[#343B4F] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className=" flex items-center justify-center">
          <div className="animate-pulse flex items-center space-x-2 text-gray-400">
            <div className="w-4 h-4 rounded-full bg-[#343B4F] animate-bounce"></div>
            <span>Loading chart data...</span>
          </div>
        </div>
      ) : error ? (
        <div className=" flex flex-col items-center justify-center text-red-400 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>{error}</span>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 text-sm rounded bg-[#343B4F] hover:bg-[#3C4254] transition-colors text-white"
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={formattedData}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
              <XAxis
                dataKey="period"
                tick={{ fill: "#A0AEC0" }}
                tickMargin={10}
              />
              <YAxis
                tick={{ fill: "#A0AEC0" }}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <Tooltip
                contentStyle={{
                  background: "#1A202C",
                  borderColor: "#2D3748",
                  borderRadius: "0.5rem",
                  color: "#E2E8F0",
                }}
                formatter={(value, name) => [
                  Number(value).toLocaleString(),
                  name
                    .toString()
                    .replace("_", " ")
                    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
                ]}
                labelStyle={{ color: "#CBD5E0" }}
              />
              <Legend
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value) =>
                  value
                    .toString()
                    .replace("_", " ")
                    .replace(/(^\w|\s\w)/g, (m: any) => m.toUpperCase())
                }
              />

              {formattedData.length > 0 && (
                <>
                  {Object.keys(groupedData?.success || {}).map(
                    (currency, index) => (
                      <Line
                        key={`success_${currency}`}
                        dataKey={`success_${currency}`}
                        stroke={successColors[index % successColors.length]}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6 }}
                        name={`Success ${currency}`}
                        type="monotone"
                      />
                    )
                  )}
                  {Object.keys(groupedData?.pending || {}).map(
                    (currency, index) => (
                      <Line
                        key={`pending_${currency}`}
                        dataKey={`pending_${currency}`}
                        stroke={pendingColors[index % pendingColors.length]}
                        strokeWidth={2}
                        dot={false}
                        strokeDasharray="4 4"
                        activeDot={{ r: 6 }}
                        name={`Pending ${currency}`}
                        type="monotone"
                      />
                    )
                  )}
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {formattedData.length === 0 && !isLoading && !error && (
        <div className=" flex items-center justify-center text-gray-400">
          No transaction data available
        </div>
      )}
    </div>
  );
};

export default GraphChart;
