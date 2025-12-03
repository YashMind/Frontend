"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { getAdminsLogsActivity } from "@/store/slices/admin/adminSlice";
import { ActivityLogsModal } from "@/components/ActivityLogsModal";
import { fetchAllTickets } from "@/store/slices/supportTicket/slice";
import { ErrorLogsModal } from "@/components/Errormessage";
// import { createErrorMessage }  from "./sli";

const ITEMS_PER_PAGE = 5;

const cardsData = [
  // {
  //   title: "API Calls",
  //   icon: "/images/iconlogs.png",
  //   items: [
  //     "User: user@example.com",
  //     "Product: 98%",
  //     "Time: 1234"
  //   ],
  // },
  {
    title: "Error",
    icon: "/images/comment.png",
  },
  {
    title: "Admin",
    icon: "/images/shape.png",
  },
  // {
  //   title: "AI",
  //   icon: "/images/ai-line.png",
  //   items: [
  //     "Accuracy: 120 ms",
  //     "Fallback: ___",
  //     "Latency: 2.2ms"
  //   ],
  // },
];

const LogsActivity = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFor, setModalFor] = useState<string | null>(null);
  const { adminsLogsActivityData, adminsLogsActivityTotal } = useSelector(
    (state: RootState) => state.admin
  );
  const { tickets, loading, error } = useSelector(
    (state: RootState) => state.tickets
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (modalFor === "Admin") {
      dispatch(
        getAdminsLogsActivity({ date_filter: "", page, limit: ITEMS_PER_PAGE })
      );
    }
    if (modalFor === "Error") {
      dispatch(fetchAllTickets());
    }
    // if (modalFor === "API Calls") {
    //   dispatch(getApiLogs({ date_filter: "", page, limit: ITEMS_PER_PAGE }));
    // }
    // if (modalFor === "AI") {
    //   dispatch(getAILogs({ date_filter: "", page, limit: ITEMS_PER_PAGE }));
    // }
  }, [dispatch, page, modalFor]);

  const closeModal = () => {
    setModalFor(null);
    setPage(1);
  };

  return (
    <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
      <div className="dashboard-right flex-1 mr-[30px]">
        <div className="min-h-screen text-white font-sans space-y-10">
          <section className="mt-[50px]">
            <h2 className="text-xl font-semibold mb-[30px]">Logs & Activity</h2>
            <div className="bg-[#0B1739] p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white rounded-[28px]">
              {cardsData.map(({ title, icon, items }: any) => (
                <div
                  key={title}
                  className="bg-[#081028] p-4 rounded-md shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)] space-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-2 items-center mb-2">
                      <h3 className="text-base font-medium">{title}</h3>
                      <Image
                        alt={`${title} icon`}
                        src={icon}
                        height={24}
                        width={24}
                      />
                    </div>
                    {items?.map((item: any, idx: any) => (
                      <p
                        key={idx}
                        className="text-xs font-medium text-white my-2"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      className="text-sm cursor-pointer p-2 font-medium rounded-md text-white bg-[#9d34da]"
                      onClick={() => {
                        if (title === "Admin") {
                          setModalFor("Admin");
                          setPage(1);
                        }
                        if (title === "Error") {
                          setModalFor("Error");
                          setPage(1);
                        }
                        // if (title === "API Calls") {
                        //   setModalFor("API Calls");
                        //   setPage(1);
                        // }
                        // if (title === "AI") {
                        //   setModalFor("AI");
                        //   setPage(1);
                        // }
                      }}
                    >
                      More Information
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {modalFor === "Admin" && (
              <ActivityLogsModal
                isOpen={true}
                onClose={closeModal}
                logs={
                  Array.isArray(adminsLogsActivityData)
                    ? adminsLogsActivityData
                    : []
                }
                total={adminsLogsActivityTotal}
                currentPage={page}
                onPageChange={(newPage) => {
                  const totalPages = Math.ceil(
                    adminsLogsActivityTotal / ITEMS_PER_PAGE
                  );
                  if (newPage >= 1 && newPage <= totalPages) {
                    setPage(newPage);
                  }
                }}
              />
            )}

            {modalFor === "Error" && (
              <ErrorLogsModal
                isOpen={true}
                onClose={closeModal}
                logs={Array.isArray(tickets) ? tickets : []}
                total={tickets.length}
                currentPage={page}
                onPageChange={(newPage: any) => {
                  const totalPages = Math.ceil(tickets.length / ITEMS_PER_PAGE);
                  if (newPage >= 1 && newPage <= totalPages) {
                    setPage(newPage);
                  }
                }}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default LogsActivity;
