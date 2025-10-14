"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import AddEditPaymentWayModal from "./AddEditPaymentWay/addEditPaymentWay";
import {
  AddUpdatePaymentGateway,
  deletePaymentsGateway,
  getAllPaymentGateway,
} from "@/store/slices/admin/adminSlice";
import { fetchAdminTransactions } from "@/store/slices/admin/tokenAnalytic";
import Settings from "./Settings";
import { formatDateOrTimeAgo } from "@/components/utils/formatDateTime";
import { useTimezone } from "@/context/TimeZoneContext";

const BillingSettings = () => {
  const { timezone } = useTimezone()
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({});
  const dispatch = useDispatch<AppDispatch>();

  // Add pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 7;

  const { paymentGatewayData } = useSelector((state: RootState) => state.admin);
  const {
    data: transactions,
    loading: transactionsLoading,
    error: transactionsError,
  } = useSelector(
    (state: RootState) =>
      state.tokens.transactions ?? {
        data: null,
        loading: true,
        error: null,
      }
  );
  const transactionsState = useSelector(
    (state: RootState) => state.tokens.transactions
  );


  // Get transactions array
  const transactionsList = transactions?.transactions || [];

  // Calculate pagination
  const totalPages = Math.ceil(transactionsList.length / transactionsPerPage);
  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;
  const paginatedTransactions = transactionsList.slice(startIndex, endIndex);

  useEffect(() => {

    dispatch(getAllPaymentGateway());

    dispatch(fetchAdminTransactions({}));
  }, [dispatch]);

  // Reset to first page when transactions change
  useEffect(() => {
    setCurrentPage(1);
  }, [transactionsList.length]);

  const deletePaymentGateway = ({ id }: { id?: number }) => {
    dispatch(deletePaymentsGateway({ id: id }));
  };

  function downloadTransaction(transactionData: any, order_id: string) {
    const jsonStr = JSON.stringify(transactionData, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = order_id + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const toggleGatewayStatus = (item: any) => {
    dispatch(
      AddUpdatePaymentGateway({
        payload: {
          ...item,
          status: item.status == "active" ? "inactive" : "active",
        },
      })
    );
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            {/* Next Page Start */}
            <div className=" text-white font-sans space-y-10">
              {/* Billing Settings */}
              <section>
                <h2 className="text-2xl  font-semibold mb-[28px] ">
                  Billing Settings
                </h2>
                <div className="rounded-xl border border-[#343B4F]  shadow-md overflow-x-auto mb-[50px]">
                  <div className="flex justify-between items-center p-[28] border-b border-[#343B4F]">
                    <h3 className="text-white font-medium text-base ">
                      Payment Gateways
                    </h3>
                  </div>
                  <table className="w-full text-left text-sm">
                    <thead className="text-white/70">
                      <tr>
                        <th className="py-[20px] px-[28px]">Name</th>
                        <th className="py-[20px] px-[28px] flex justify-start items-center">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                              />
                            </svg>
                          </span>
                          <span>Last sync</span>
                        </th>
                        <th className="py-[20px] px-[28px]">Status</th>
                        <th className="py-[20px] px-[28px]">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/90 ">
                      {paymentGatewayData &&
                        paymentGatewayData?.map((item, index) => {
                          return (
                            <tr
                              className="border-t border-white/10"
                              key={index}
                            >
                              <td className="py-[20px] px-[28px]">
                                {item?.payment_name}
                              </td>
                              <td className="py-[20px] px-[28px] text-[#AEB9E1]">
                                Today 09:42 AM
                              </td>
                              <td className="py-[20px] px-[28px]">
                                <span
                                  className={`${item?.status.toLowerCase() === "active"
                                    ? "bg-[#18B91F]"
                                    : "bg-[#C38F00]"
                                    } text-xs font-medium text-[#FBEDED] px-2 py-0.5 rounded-full`}
                                >
                                  {item?.status.toUpperCase()}
                                </span>
                              </td>
                              <td className="flex gap-2 py-[20px] px-[28px]">
                                <button
                                  className="bg-green-600 text-xs px-2 py-1 rounded cursor-pointer"
                                  onClick={() => {
                                    toggleGatewayStatus(item);
                                  }}
                                >
                                  Toggle status
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Invoice History */}
              <section>
                <h2 className="text-2xl  font-semibold mb-[28px]">
                  Invoice History
                </h2>
                <div className="border border-[#343B4F] rounded-xl shadow-md overflow-x-auto">
                  <div className="flex border-b border-[#343B4F] justify-between items-center p-[28px]">
                    <h3 className="text-white font-medium text-base ">
                      Transaction
                    </h3>
                    <span className="text-sm text-gray-400">
                      {transactionsList.length} total transactions
                    </span>
                  </div>
                  <table className="w-full text-left text-sm">
                    <thead className="text-white/70 ">
                      <tr>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Order ID #
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Payment ID #
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Client
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Date
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Amount
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Plan
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Status
                          </div>
                        </th>
                        <th className=" py-[20px] px-[28px]">
                          <div className="flex gap-1 items-center">
                            {" "}
                            <Image
                              alt="alt"
                              src="/images/user.png"
                              height={10}
                              width={10}
                            />{" "}
                            Action
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-white/90">
                      {transactionsLoading ? (
                        <tr>
                          <td colSpan={8} className="text-center py-4">
                            <h2 className="text-white/90">Loading ...</h2>
                          </td>
                        </tr>
                      ) : transactionsError ? (
                        <tr>
                          <td colSpan={8} className="text-center py-4">
                            <h2 className="text-white/90">
                              {typeof transactionsError === "object" &&
                                "msg" in transactionsError
                                ? transactionsError.msg
                                : String(transactionsError)}
                            </h2>
                          </td>
                        </tr>
                      ) : paginatedTransactions.length > 0 ? (
                        paginatedTransactions.map((transaction) => (
                          <tr
                            key={transaction.id}
                            className="border-t border-white/10"
                          >
                            <td className="py-[20px] px-[28px] ">
                              {transaction.order_id ?? "-"}
                            </td>
                            <td className="py-[20px] px-[28px] ">
                              {transaction.payment_id ?? "—"}
                            </td>
                            <td className=" py-[20px] px-[28px] text-[#AEB9E1]">
                              {transaction.user?.name}
                            </td>
                            <td className=" py-[20px] px-[28px] text-[#AEB9E1]">
                              {formatDateOrTimeAgo(transaction.created_at, timezone)}
                            </td>
                            <td className="py-[20px] px-[28px] text-[#AEB9E1] ">
                              {transaction.amount} {transaction.currency}
                            </td>
                            <td className="  py-[20px] px-[28px] text-[#AEB9E1]">
                              {transaction.plan?.name}
                            </td>
                            <td className=" py-[20px] px-[28px] text-[#AEB9E1]">
                              <span
                                className={`
                              text-xs px-2 py-0.5 rounded-full
                              ${transaction.status === "created"
                                    ? "bg-blue-100 text-blue-800"
                                    : ""
                                  }
                              ${transaction.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : ""
                                  }
                              ${transaction.status === "success"
                                    ? "bg-green-500 text-white"
                                    : ""
                                  }
                              ${transaction.status === "failed"
                                    ? "bg-red-100 text-red-800"
                                    : ""
                                  }
                              ${transaction.status === "refunded"
                                    ? "bg-purple-100 text-purple-800"
                                    : ""
                                  }
                              ${transaction.status === "cancelled"
                                    ? "bg-gray-200 text-gray-700"
                                    : ""
                                  }
                            `}
                              >
                                {transaction.status}
                              </span>
                            </td>
                            <td>
                              <div className="flex gap-2 py-[20px] px-[28px]">
                                {transaction.transaction_data && (
                                  <button
                                    onClick={() =>
                                      downloadTransaction(
                                        transaction.transaction_data,
                                        transaction.order_id
                                      )
                                    }
                                  >
                                    <Image
                                      alt="alt"
                                      src="/images/download.png"
                                      height={16}
                                      width={16}
                                    />
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={8} className="text-center py-4">
                            <h2 className="text-white/90">
                              No transactions found
                            </h2>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {/* Pagination Controls */}
                  {transactionsList.length > transactionsPerPage && (
                    <div className="flex justify-between items-center p-[28px] border-t border-[#343B4F]">
                      <span className="text-sm text-gray-400">


                        {transactionsList.length} transactions (Page{" "}
                        {currentPage} of {totalPages})
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="px-4 py-2 bg-[#0d1224] border border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1a223c] transition-colors text-sm"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 bg-[#0d1224] border border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1a223c] transition-colors text-sm"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* billing-alerts */}
              <section>
                <h2 className="text-2xl  font-semibold mb-[28]"></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  bg-[#0B1120] text-white border-[#343B4F] border py-[35px] px-[22px] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)] rounded-[12px] ">
                  <Settings />

                  {/* Usage Threshold Alerts */}
                  {/* <div className="px-[13px] py-[34px] border border-[#343B4F] rounded-[12px] bg-[#0A1330] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)]">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-base ">
                        Usage Threshold Alerts
                      </h3>

                      <div className="relative inline-block w-10 align-middle ">
                        <input
                          type="checkbox"
                          id="toggle3"
                          className="sr-only peer"
                        />

                        <div className="w-10 h-5 bg-gray-600 rounded-full peer-checked:bg-green-500 transition duration-300"></div>
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                      </div>
                    </div>
                    <div className="bg-[#081028] p-3 mt-[30]">
                      <p className="text-sm font-semibold text-white my-3">
                        Receive notifications when clients approach their usage
                        limits
                      </p>
                      <div className="flex flex-col gap-2 text-sm text-gray-200 mt-2">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="quota"
                            className="accent-blue-500"
                          />
                          80% of quota reached
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="quota"
                            className="accent-blue-500"
                          />
                          100% of quota reached
                        </label>
                      </div>
                    </div>
                  </div> */}
                </div>
              </section>
            </div>
            <AddEditPaymentWayModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              userData={userData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSettings;