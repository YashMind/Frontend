
// import React, { useEffect } from 'react';
// import { 
//   AreaChart, 
//   Area, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   ResponsiveContainer,
//   linearGradient,
//   stop
// } from 'recharts';
// import { fetchTotalMessages } from "@/store/slices/admin/messageSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/store/store";

// export const MessageGraph = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { total: totalMessages, loading: messagesLoading, error } = useSelector(
//     (state: RootState) => state.messages
//   );

//   useEffect(() => {
//     dispatch(fetchTotalMessages());
//   }, [dispatch]);

//   // Transform the data for Recharts
//   const transformMessageData = () => {
//     if (!totalMessages || totalMessages.length === 0) return [];
    
//     return totalMessages.map(item => ({
//       name: item.month, // Month name (e.g., "Jan", "Feb")
//       messages: item.totalMessages, // Message count
//     }));
//   };

//   const chartData = transformMessageData();

//   if (messagesLoading) return <div className="text-white">Loading message data...</div>;
//   if (error) return <div className="text-red-500">Error loading messages: {error}</div>;
//   if (!chartData || chartData.length === 0) return <div className="text-white">No message data available</div>;

//   return (
//     <div className="w-full h-[300px]">
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart
//           data={chartData}
//           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//         >
//           <defs>
//             <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
//               <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
//             </linearGradient>
//           </defs>
//           <XAxis 
//             dataKey="name" 
//             tick={{ fill: '#AEB9E1' }}
//             axisLine={{ stroke: '#343B4F' }}
//           />
//           <YAxis 
//             tick={{ fill: '#AEB9E1' }}
//             axisLine={{ stroke: '#343B4F' }}
//           />
//           <CartesianGrid strokeDasharray="3 3" stroke="#343B4F" />
//           <Tooltip 
//             contentStyle={{
//               backgroundColor: '#0E1A47',
//               borderColor: '#343B4F',
//               color: '#FFFFFF'
//             }}
//             formatter={(value) => [`${value} messages`, 'Count']}
//             labelFormatter={(label) => `Month: ${label}`}
//           />
//           <Area 
//             type="monotone" 
//             dataKey="messages" 
//             stroke="#8884d8" 
//             fillOpacity={1} 
//             fill="url(#colorMessages)" 
//             name="Messages"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };


import React, { useEffect, useState } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { fetchMessageStats } from "@/store/slices/admin/messageSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

type TimeRange = 'monthly' | 'weekly' | 'daily';

export const MessageGraph = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { stats, loading, error } = useSelector(
    (state: RootState) => state.messages
  );
  const [timeRange, setTimeRange] = useState<TimeRange>('monthly');

  useEffect(() => {
    dispatch(fetchMessageStats());
  }, [dispatch]);

  // Transform the data based on selected time range
  const getChartData = () => {
    if (!stats || loading) return [];
    
    switch (timeRange) {
      case 'monthly':
        return stats.monthly.map(item => ({
          name: item.label,
          messages: item.totalMessages,
        }));
      case 'weekly':
        return stats.weekly.map(item => ({
          name: item.label,
          messages: item.totalMessages,
        }));
      case 'daily':
        return stats.last10Days.map(item => ({
          name: item.label,
          messages: item.totalMessages,
        }));
      default:
        return [];
    }
  };

  const chartData = getChartData();

  const getXAxisLabel = () => {
    switch (timeRange) {
      case 'monthly': return 'Month';
      case 'weekly': return 'Week';
      case 'daily': return 'Date';
      default: return '';
    }
  };

  if (loading) return <div className="text-white">Loading message data...</div>;
  if (error) return <div className="text-red-500">Error loading messages: {error}</div>;
  if (!chartData || chartData.length === 0) return <div className="text-white">No message data available</div>;

  return (
    <div className="w-full h-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-white text-lg font-semibold">Message Analytics</h3>
        {/* <div className="flex rounded-md overflow-hidden border border-gray-600">
          <button
            className={`px-4 py-2 text-sm ${timeRange === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setTimeRange('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 text-sm ${timeRange === 'weekly' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setTimeRange('weekly')}
          >
            Weekly
          </button>
          <button
            className={`px-4 py-2 text-sm ${timeRange === 'daily' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setTimeRange('daily')}
          >
            Last 10 Days
          </button>
        </div> */}


        <div className="flex gap-0 justify-center text-xs">
<button
            className={`px-4 py-2 text-sm ${timeRange === 'daily' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setTimeRange('daily')}
          >
                      Daily
                    </button>
                    <button
            className={`px-4 py-2 text-sm ${timeRange === 'weekly' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setTimeRange('weekly')}
          >
                      Weekly
                    </button>


                     <button
             className={`px-4 py-2 text-sm ${timeRange === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            onClick={() => setTimeRange('monthly')}
          >
            Monthly
          </button>


                  </div>

                  
      </div>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
          >
            <defs>
              <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#AEB9E1' }}
              axisLine={{ stroke: '#343B4F' }}
              label={{ value: getXAxisLabel(), position: 'insideBottom', offset: -10, fill: '#AEB9E1' }}
            />
            <YAxis 
              tick={{ fill: '#AEB9E1' }}
              axisLine={{ stroke: '#343B4F' }}
              label={{ value: 'Messages', angle: -90, position: 'insideLeft', fill: '#AEB9E1' }}
            />
            <CartesianGrid strokeDasharray="3 3" stroke="#343B4F" />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#0E1A47',
                borderColor: '#343B4F',
                color: '#FFFFFF',
                borderRadius: '8px'
              }}
              formatter={(value: number) => [`${value} messages`, 'Count']}
              labelFormatter={(label) => `${getXAxisLabel()}: ${label}`}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => <span className="text-white">{value}</span>}
            />
            <Area 
              type="monotone" 
              dataKey="messages" 
              stroke="#8884d8" 
              fillOpacity={1} 
              fill="url(#colorMessages)" 
              name="Messages"
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};