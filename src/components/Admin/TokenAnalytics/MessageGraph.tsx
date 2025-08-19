
import React, { useEffect } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  linearGradient,
  stop
} from 'recharts';
import { fetchTotalMessages } from "@/store/slices/admin/messageSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

export const MessageGraph = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { total: totalMessages, loading: messagesLoading, error } = useSelector(
    (state: RootState) => state.messages
  );

  useEffect(() => {
    dispatch(fetchTotalMessages());
  }, [dispatch]);

  // Transform the data for Recharts
  const transformMessageData = () => {
    if (!totalMessages || totalMessages.length === 0) return [];
    
    return totalMessages.map(item => ({
      name: item.month, // Month name (e.g., "Jan", "Feb")
      messages: item.totalMessages, // Message count
    }));
  };

  const chartData = transformMessageData();

  if (messagesLoading) return <div className="text-white">Loading message data...</div>;
  if (error) return <div className="text-red-500">Error loading messages: {error}</div>;
  if (!chartData || chartData.length === 0) return <div className="text-white">No message data available</div>;

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
          />
          <YAxis 
            tick={{ fill: '#AEB9E1' }}
            axisLine={{ stroke: '#343B4F' }}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="#343B4F" />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#0E1A47',
              borderColor: '#343B4F',
              color: '#FFFFFF'
            }}
            formatter={(value) => [`${value} messages`, 'Count']}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Area 
            type="monotone" 
            dataKey="messages" 
            stroke="#8884d8" 
            fillOpacity={1} 
            fill="url(#colorMessages)" 
            name="Messages"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};