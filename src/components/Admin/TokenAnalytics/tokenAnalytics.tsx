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
              <h2 className="text-2xl font-semibold mb-6">Token Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div className="relative inline-block text-left">
                      {/* Hidden Checkbox Toggle */}
                      <input
                        type="checkbox"
                        id="dropdown-toggle"
                        className="peer hidden"
                      />
                      {/* Button */}
                      <label
                        htmlFor="dropdown-toggle"
                        className="inline-flex items-center justify-between w-46 px-2 py-1 bg-[#0A1330] border border-[#0B1739] rounded-md cursor-pointer text-[#AEB9E1] text-sm"
                      >
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
                            d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                          />
                        </svg>
                        Select Option
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </label>

                      {/* Dropdown Menu */}
                      <div className="peer-checked:block hidden absolute z-10 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200">
                        <ul className="py-1 text-sm text-gray-700">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Option 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Option 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              Option 3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0 justify-center text-xs">
                    <button className="bg-[#C8C8C8] px-2 py-1  text-[#121212]">
                      Daily
                    </button>
                    <button className="bg-white px-2 py-1  text-[#121212]">
                      Weekly
                    </button>
                  </div>
                  {/* <img src="/images/img3.png" alt="" /> */}

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
                <div className="bg-[#0E1A47] rounded-xl p-4 shadow-lg">
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
                </div>
              </div>
            </div>
            {/* token price start */}
            {/* products wise division */}
            <div className="mt-6 p-8 rounded-md text-white border border-[#343B4F] shadow-2xl">
              <div className="flex justify-between border-b border-[#1f355c]">
                <h2 className="text-lg font-semibold mb-4">
                  Breakdown By Product
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead>
                    <tr className=" text-gray-400 uppercase text-xs">
                      <th className="px-6 py-4 font-medium">Product</th>
                      <th className="px-6 py-4 font-medium">Revenue</th>
                      <th className="px-6 py-4 font-medium">Tokens</th>
                      {/* <th className="px-6 py-4 font-medium">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1 */}

                    <tr
                      className=" hover:bg-[#111827] bg-[#0A1330] transition"
                      // key={index}
                    >
                      <td className="px-6 py-4 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#a855f7]"></div>
                        {/* {item?.name} */}Chatbot
                      </td>
                      <td className="px-6 py-4">
                        {tokensCredits?.chatbot_revenue}
                      </td>
                      <td className="px-6 py-4">
                        {tokensCredits?.chatbot_tokens}
                      </td>
                      {/* <td className="px-6 py-4 space-x-2">
                        <button
                          className="text-[#AEB9E1]"
                          onClick={() => {
                            setModalShow(true);
                            // setTokenData(item);
                          }}
                        >
                          <MdEdit size={20} className="cursor-pointer" />
                        </button>
                        <button
                          className="text-[#AEB9E1]"
                        // onClick={() => deleteTokenBot({ id: item?.id })}
                        >
                          <MdDeleteForever size={20} className="cursor-pointer" />
                        </button>
                      </td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

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
                    <th className="p-4 text-xs font-medium">Token Consumed</th>
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
                          {item?.tokenUsed}
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
