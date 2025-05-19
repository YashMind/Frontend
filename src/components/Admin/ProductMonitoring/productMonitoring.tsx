"use client";
import React, { useEffect, useState } from "react";
import {
  updateBotProductStatus,
  getAllBotProducts,
  getAllTokenBots,
  updateTools,
} from "@/store/slices/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import AddEditProduct from "./AddEditProduct/addEditProduct";

const ProductMonitoring = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { tokenBotsData, productMonitoringData } = useSelector(
    (state: RootState) => state.admin
  );

  useEffect(() => {
    dispatch(
      getAllTokenBots({})
    );

    dispatch(
      getAllBotProducts({})
    );
  }, [dispatch]);


  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            <div className="  text-white p-6 space-y-10 ">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">Product Monitoring</h2>
                </div>

                <div className=" border border-gray-700 rounded-lg overflow-hidden pb-8 pt-3">
                  <div className="flex justify-between items-cente py-4 px-8 border-b border-[#343B4F]">
                    <div className="text-base text-gray-300">
                      Featuring Toggles
                    </div>
                  </div>

                  <div className="">
                    <div className="flex items-center justify-between px-8 py-5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs flex gap-1 items-center justify-start">
                          Name
                        </span>
                      </div>
                    </div>

                    {productMonitoringData &&
                      productMonitoringData?.data?.map((item: any, index: any) => {
                        return (
                          <div
                            className="flex items-center justify-between px-8 py-5 bg-[#0A1330]"
                            key={index}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-xs">
                                {item?.name}
                              </span>
                            </div>

                            {/* Toggle switch */}
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={item?.status === "active"}
                                onChange={() => {
                                  const newStatus = item.status === "active" ? "deactive" : "active";
                                  dispatch(updateBotProductStatus({ id: item.id, status: newStatus }));
                                }}
                              />

                              <div className="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-[#1e1b4b] transition duration-300"></div>
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            {/* bot status */}
            <div className="  text-white p-6 space-y-10 ">
              {/* Product Monitoring */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">Tools Used</h2>
                </div>

                <div className=" border border-gray-700 rounded-lg overflow-hidden pb-8 pt-3">
                  <div className="flex justify-between items-cente py-4 px-8 border-b border-[#343B4F]">
                    <div className="text-base text-gray-300">
                      Featuring Toggles
                    </div>
                  </div>
                  {/* Item Row */}
                  <div className="">
                    {/* Name Row */}
                    <div className="flex items-center justify-between px-8 py-5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs flex gap-1 items-center justify-start">
                          Name
                        </span>
                      </div>
                    </div>

                    {/* Chatbot Row */}
                    {tokenBotsData?.data &&
                      tokenBotsData?.data?.map((item:any, index:any) => {
                        return (
                          <div
                            className="flex items-center justify-between px-8 py-5 bg-[#0A1330]"
                            key={index}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-xs">{item?.name}</span>
                            </div>

                            {/* Toggle switch */}
                             <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={item?.status === "active"}
                                onChange={() => {
                                  const newStatus = item.status === "active" ? "deactive" : "active";
                                  dispatch(updateTools({ id: item.id, status: newStatus }));
                                }}
                              />
                              <div className="w-11 h-6 bg-gray-600 rounded-full peer-checked:bg-[#1e1b4b] transition duration-300"></div>
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/* Voice Start */}
            <div className=" bg-[#0B1739] rounded-3xl p-6 m-6 text-white mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Voice Agent Stats Card */}
                <div className="bg-[#081028] rounded-2xl p-8  shadow-md">
                  <div className="flex  gap-10 items-center mb-5">
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        Voice Agent Stats
                      </h3>
                    </div>
                    <div className="w-10 rounded-full h-10 bg-[#0A1330]  flex justify-center items-center">
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
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-white/90 mb-4">
                      Avg call duration: 0.4
                    </p>
                    <p className="text-sm text-white/90">Success rate: 98%</p>
                  </div>
                </div>
                {/* Chat LLM Logs Card */}
                <div className="bg-[#081028] rounded-2xl p-8  shadow-md">
                  <div className="flex gap-10 items-center mb-5">
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        Chat LLM Logs
                      </h3>
                    </div>
                    <div className="w-10 rounded-full h-10 bg-[#0A1330]  flex justify-center items-center">
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
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-white/90 mb-4">
                      Response Time : 120 ms
                    </p>
                    <p className="text-sm text-white/90">
                      Modal used : John Doe
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <AddEditProduct
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMonitoring;
