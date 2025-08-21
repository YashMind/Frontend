import React, { useEffect, useState } from "react";
import AddEditToken from "./AddEditToken/addEditToken";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import {
  deleteTokenBots,
  getTopConsumptionUsers,
} from "@/store/slices/admin/adminSlice";
import Image from "next/image";
import { fetchAdminTokenCreditReport } from "@/store/slices/admin/tokenAnalytic";

import { fetchMessageStats  } from "@/store/slices/admin/messageSlice";
import { MessageGraph } from "./MessageGraph";


interface TokenUsage {
  token_limit: number;
  bot_id: number;
  user_id: number;
  open_ai_request_token: number;
  user_request_token: number;
  whatsapp_request_tokens: number;
  slack_request_tokens: number;
  wordpress_request_tokens: number;
  zapier_request_tokens: number;
  user_credit_id: number;
  id: number;
  combined_token_consumption: number;
  open_ai_response_token: number;
  user_response_token: number;
  whatsapp_response_tokens: number;
  slack_response_tokens: number;
  wordpress_response_tokens: number;
  zapier_response_tokens: number;
  message_limit: number;
  user_request_message: number;
  whatsapp_request_messages: number;
  slack_request_messages: number;
  wordpress_request_messages: number;
  zapier_request_messages: number;
  combined_message_consumption: number;
  open_ai_response_message: number;
  user_response_message: number;
  whatsapp_response_messages: number;
  slack_response_messages: number;
  wordpress_response_messages: number;
  zapier_response_messages: number;
}

interface User {
  id: number;
  email: string;
  name: string;
}

interface Credit {
  plan_id: number;
  id: number;
  expiry_date: string;
  credits_consumed: number;
  token_per_unit: number;
  user_id: number;
  trans_id: number;
  start_date: string;
  credits_purchased: number;
  credit_balance: number;
  chatbots_allowed: number;
  user: User;
  token_usage: TokenUsage[];
  message_per_unit: number;
  credits_consumed_messages: number;
  credit_balance_messages: number;
}

interface Pagination {
  page: number;
  per_page: number;
  total_credits: number;
  total_history: number;
  total_pages_credits: number;
  total_pages_history: number;
}

interface TokenCreditReportResponse {
  credits: Credit[];
  history_credits: any[]; // You might want to define a proper type for history credits
  pagination: Pagination;
}

const TokenAnalytics = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("asc");
  const [tokenData, setTokenData] = useState<any>({});
  const dispatch = useDispatch<AppDispatch>();
  const { topTokenUsersData } = useSelector((state: RootState) => state.admin);


  // const { total:totalMessages, loading:messagesLoading, error } = useSelector((state: RootState) => state.messages);
 const { total: totalMessages, loading: messagesLoading, error } = useSelector(
    (state: RootState) => state.messages
  );


  const {
    data: tokensCredits,
    loading: tokensCreditsLoading,
    error: tokensCreditsError,
  } = useSelector((state: RootState) => state.tokens.admin);
  useEffect(() => {
    dispatch(getTopConsumptionUsers());
    dispatch(fetchAdminTokenCreditReport({}));
  }, [dispatch, search, page, limit, sortBy, sortOrder]);

  const deleteTokenBot = ({ id }: { id?: number }) => {
    dispatch(deleteTokenBots({ token_bot_id: id }));
  };

   useEffect(() => {
    dispatch(fetchMessageStats());
  }, [dispatch]);

  


  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            {/* graph start */}
            <div className="pt-10 text-white">
              <h2 className="text-2xl font-semibold mb-6">Message Analytics</h2>
              <div className="grid grid-cols-1  gap-6">
                {/* Token Usage Trends */}
                <div className="bg-[#0E1A47] rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white/80 flex gap-2 justify-start items-center font-semibold text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
                          />
                        </svg>
                        Token Usage Trends
                      </h3>
                    </div>
                    {/* <div className="flex justify-center gap-2 items-center text-[#AEB9E1] text-sm">
                      <div className="p-1 bg-[#CB3CFF] rounded-full"></div>
                      <h6>Revenue</h6>
                    </div>
                    <div className="flex justify-center gap-2 items-center text-[#AEB9E1] text-sm">
                      <div className="p-1 bg-[#00C2FF] rounded-full"></div>
                      <h6>Expenses</h6>
                    </div> */}
                    


                  </div>
                 

                  <MessageGraph/>





 {/* Total Messages Card
                //  <div className="bg-[#0E1A47] rounded-xl p-4 shadow-lg flex flex-col items-center justify-center mt-4">
                //   <h3 className="text-white/80 font-semibold text-base mb-2">
                //     Total Messages by Month
                //   </h3>
                //   {messagesLoading ? (
                //     <p className="text-white">Loading...</p>
                //   ) : error ? (
                //     <p className="text-red-500">{error}</p>
                //   ) : totalMessages.length === 0 ? (
                //     <p className="text-white">No messages found</p>
                //   ) : (
                //     <ul className="text-white">
                //       {totalMessages.map((item) => (
                //         <li key={item.month} className="text-white text-lg">
                //           {item.month}: {item.totalMessages}
                //         </li>
                //       ))}
                //     </ul>
                //   )}
                // </div>  */}


                








                </div>

                {/* Breakdown by Product */}
                {/* <div className="bg-[#0E1A47] rounded-xl p-4 shadow-lg">
                  <h3 className="text-white/80 font-semibold flex justify-start gap-2 items-center text-base mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                      />
                    </svg>
                    Breakdown by Product
                  </h3>
                  <div className="flex justify-center">
                    <img src="/images/token-graph-1.png" alt="" />
                  </div>
                  <div className="flex gap-4 justify-center mt-4 text-base font-medium">
                    <span className="bg-[#8CA6FF] text-white px-3 py-2 rounded">
                      ChatBot
                    </span>
                    <span className="bg-[#01BEED] text-white px-3 py-2 rounded">
                      Voice Agent
                    </span>
                    <span className="bg-[#E0AC0D] text-white px-3 py-2 rounded">
                      LLM
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
            {/* token price start */}
            {/* products wise division */}
        

            {/* user list start */}
            {/* user list start */}
            <div className="max-w-full overflow-x-auto mt-5 bg-[#0B1739] p-5">
              <div className="flex justify-between border-b border-[#1f355c]">
                <h1 className="text-white text-lg font-semibold mb-4 ">
                  Top 10 Users by Token Consumption
                </h1>
              </div>
              <table className="min-w-full overflow-hidden text-sm">
                <thead>
                  <tr className="text-left text-gray-300 ">
                    <th className="p-4">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 bg-[#CB3CFF] form-checkbox rounded-sm focus:outline-none"
                        readOnly
                      />
                    </th>
                    <th className="p-4 text-xs font-medium flex items-center gap-1">
                      <Image
                        alt="alt"
                        src="/images/user.png"
                        height={10}
                        width={10}
                      />{" "}
                      Name
                    </th>
                    <th className="p-4 text-xs font-medium">Email</th>
                    <th className="p-4 text-xs font-medium">Plan</th>
                    <th className="p-4 text-xs font-medium">Message Consumed</th>
                    <th className="p-4 text-xs font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {topTokenUsersData?.map((item, index) => {
                    return (
                      <tr
                        className="bg-[#0A1330] hover:bg-[#1A2C56]"
                        key={index}
                      >
                        <td className="p-4">
                          <input
                            type="checkbox"
                            className="form-checkbox appearance-none w-4 h-4  rounded-sm bg-[#CB3CFF]"
                          />
                        </td>
                        <td className="p-4 flex items-center text-xs gap-2">
                          <img src="/images/Avatar Circle.png" alt="" />
                          {item?.fullName}
                        </td>
                        <td className="p-4 text-[#AEB9E1] text-xs">
                          {item?.email}
                        </td>
                        <td className="p-4 text-[#AEB9E1] text-xs">
                          {item?.plan.name}
                        </td>
                        <td className="p-4 text-[#AEB9E1] text-xs">
                          {item?.messageUsed}
                        </td>

                        <td className="p-4">
                          {item?.status ? (
                            <span className="bg-[#AEB9E133] text-[#AEB9E1] text-xs px-2 py-1 rounded">
                              {item?.status}
                            </span>
                          ) : null}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <AddEditToken
              show={modalShow}
              onHide={() => setModalShow(false)}
              tokenData={tokenData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenAnalytics;
