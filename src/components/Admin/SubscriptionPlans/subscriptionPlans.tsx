"use client";
import React, { useEffect, useState } from "react";
import AddEditPlan from "./AddEditPlan/addEditPlan";
import {
  deleteSubscriptionsPlan,
  getAllSubscriptionPlans,
} from "@/store/slices/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
const SubscriptionPlans = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("asc");
  const [planData, setPlanData] = useState<any>({});
  const dispatch = useDispatch<AppDispatch>();
  const { subscriptionPlansData } = useSelector(
    (state: RootState) => state.admin
  );
  useEffect(() => {
    dispatch(
      getAllSubscriptionPlans({
        page,
        limit,
        search,
        sortBy,
        sortOrder,
      })
    );
  }, [dispatch, search, page, limit, sortBy, sortOrder]);

  const deleteSubscriptionPlan = ({ id }: { id?: number }) => {
    dispatch(deleteSubscriptionsPlan({ plan_id: id }));
  };
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            <h2 className="text-2xl font-semibold mt-[40px]">
              Subscription Plans
            </h2>
            {/* new user list start */}
            <div className="max-w-full overflow-x-auto mt-5 bg-[#0B1739] p-5 rounded">
              <div className="flex justify-between border-b border-[#1f355c]">
                <h1 className="text-white text-lg font-semibold mb-4 ">
                  All Plans
                </h1>
                <button
                  className="cursor-pointer bg-[#18B91F] text-xs font-medium text-white px-[10px] py-[5px] mb-2  rounded hover:bg-green-600"
                  onClick={() => {
                    setPlanData({});
                    setModalShow(true);
                  }}
                >
                  Add Plan
                </button>
              </div>
              <table className="min-w-full overflow-hidden text-sm">
                <thead>
                  <tr className="text-left text-gray-300 ">
                    <th className="p-4">
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 bg-[#CB3CFF] form-checkbox rounded-sm focus:outline-none"
                      />
                    </th>
                    <th className="p-4 text-xs font-medium flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                      Name
                    </th>
                    <th className="p-4 text-xs font-medium">Pricing</th>
                    <th className="p-4 text-xs font-medium">Token Limits</th>
                    <th className="p-4 text-xs font-medium">Features</th>
                    <th className="p-4 text-xs font-medium">Users Active</th>
                    <th className="p-4 text-xs font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {subscriptionPlansData.data &&
                    subscriptionPlansData?.data?.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-[#0A1330] hover:bg-[#1A2C56]"
                        >
                          <td className="p-4">
                            <input
                              type="checkbox"
                              className="form-checkbox appearance-none w-4 h-4  rounded-sm bg-[#CB3CFF]"
                              readOnly
                            />
                          </td>
                          <td className="p-4 flex items-center text-xs gap-2">
                            {item?.name}
                          </td>
                          <td className="p-4 text-[#AEB9E1] text-xs">
                            $ {item?.pricing}
                          </td>
                          <td className="p-4 text-[#AEB9E1] text-xs">
                            {item?.token_limits}
                          </td>
                          <td className="p-4 text-[#AEB9E1] text-xs">
                            {item?.features}
                          </td>
                          <td className="p-4 text-[#AEB9E1] text-xs">
                            {item?.users_active}
                          </td>
                          <td className="p-4 relative">
                            <div className="flex gap-2 items-center">
                              <button
                                className="cursor-pointer text-gray-300 hover:text-white"
                                onClick={() => {
                                  setModalShow(true);
                                  setPlanData(item);
                                }}
                              >
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
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                  />
                                </svg>
                              </button>
                              <button
                                className="cursor-pointer text-gray-300 hover:text-white"
                                onClick={() =>
                                  deleteSubscriptionPlan({ id: item?.id })
                                }
                              >
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
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <AddEditPlan
              show={modalShow}
              onHide={() => setModalShow(false)}
              planData={planData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
