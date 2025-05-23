import { FaUser } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import StatusActionModal from "@/components/StatusActionModal";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import ConfirmDeleteModal from "@/components/DeleteConfirmationModal";
import AddEditAdminUserModal from "../AdminUsersRoles/AddEditAdminUser/addEditAdminUser";
import { deleteClientUser, getClientLogsActivity, getClientUsers, updateClientByAdmin, updateTokenStatus, getAllVolumnDiscounts, updateDiscount } from "@/store/slices/admin/adminSlice";
import { toasterError } from "@/services/utils/toaster";

const EnterpriseClients = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [ClientData, setClientData] = useState<any>({});
  const [menuOpenId, setMenuOpenId] = useState<any>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [rates, setRates] = useState<{ [key: number]: string }>({});
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [editDiscountId, setEditDiscountId] = useState<number | null>(null);
  const [editedDiscounts, setEditedDiscounts] = useState<{ [key: number]: string }>({});

  const discounts = useSelector((state: any) => state.admin.data)
  const { clientUsers } = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    dispatch(getAllVolumnDiscounts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getClientUsers());
    dispatch(getClientLogsActivity({ date_filter: selectedDate }));
  }, [dispatch, selectedDate]);

  function formatTokenRange(item: any, index: number, all: any) {
    const curr = item.token;
    const next = all[index + 1]?.token;

    if (next) {
      return `${formatTokens(curr)} - ${formatTokens(next)}`;
    } else {
      return `${formatTokens(curr)}+`;
    }
  }

  function formatTokens(tokens: number) {
    if (tokens >= 1_000_000) {
      return `${tokens / 1_000_000}M`;
    } else if (tokens >= 1_000) {
      return `${tokens / 1_000}K`;
    }
    return `${tokens}`;
  }


  const handleDeleteClick = (item: any) => {
    setSelectedUser(item.id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedUser) {
      await dispatch(deleteClientUser({ id: selectedUser }));
    }
  };

  const handleUpdateStatus = (data: any) => {
    dispatch(
      updateClientByAdmin({ payload: data, page: 1, limit: 10 })
    );
    setIsMenuOpen(false);
  };

  const handleOpenMenu = (itemId: any) => {
    setMenuOpenId(itemId);
    setIsMenuOpen(true);
  };

  const handleEdit = (userId: number, currentRate: string) => {
    setEditUserId(userId);
    setRates((prevRates) => ({
      ...prevRates,
      [userId]: currentRate || "0000",
    }));
  };

  const handleEditDiscount = (id: number, discount: number) => {
    setEditDiscountId(id);
    setEditedDiscounts((prev) => ({ ...prev, [id]: discount.toString() }));
  };

  const handleSave = async (userId: number) => {
    const rateString = rates[userId];
    const rateNumber = Number(rateString) || 0;
    try {
      await dispatch(updateTokenStatus({ id: userId, base_rate_per_token: rateNumber })).unwrap();
      setEditUserId(null);
    } catch (error) {
      console.error(`Failed to save rate for user ${userId}`, error);
    }
  };

const handleSaveDiscount = (id: number) => {
  const val = parseFloat(editedDiscounts[id]);
  if (isNaN(val) || val < 0 || val > 100) {
    toasterError("Discount must be between 0 and 100 %", 2000, "id");
    return;
  }
  dispatch(updateDiscount({ id, discount: val }));
  setEditDiscountId(null);
};


  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            {/* Enterprise Clients */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Enterprise Clients</h2>
                <button
                  onClick={() => {
                    setClientData({});
                    setModalShow(true);
                  }}
                  className="cursor-pointer bg-[#18B91F] hover:bg-green-600 text-white px-4 py-1 rounded text-xs">
                  Add Client
                </button>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <div className="px-8 py-6  border-b border-gray-700 text-base">
                  <h5>All Plans</h5>
                </div>
                <table className="w-full text-left mx-8 my-4">
                  <thead className="text-xs uppercase text-gray-400 border-b border-[#0B1739]">
                    <tr>

                      <th className="p-6 flex gap-2 justify-start items-center text-white">
                        <FaUser className="text-white w-4 h-4" />
                        <span>Name</span>
                      </th>
                      <th className="p-6 text-white">Key Contact</th>
                      <th className="p-6 text-white">status</th>
                      <th className="p-6 text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientUsers &&
                      clientUsers?.map((item: any, index: any) => {
                        return (
                          <tr
                            className="border-b border-[#0B1739] hover:bg-[#1A1F3C] "
                            key={index}
                          >

                            <td className="p-6 font-medium text-xs">
                              {item?.fullName}
                            </td>
                            <td className="p-6 text-xs text-gray-300">
                              {item?.email}
                            </td>
                            <td className="p-6 text-xs">
                              <span className="bg-[#18B91F] text-white text-xs px-3 py-1 rounded-full">
                                {item?.status || "Active"}
                              </span>
                            </td>

                            <td className="p-6 space-x-2 flex relative">
                              <div className="flex gap-2 items-center">
                                <MdEdit
                                  onClick={() => {
                                    setModalShow(true);
                                    setClientData(item);
                                  }}
                                  className="cursor-pointer"
                                  size={20}
                                />

                                <MdDeleteForever
                                  size={20}
                                  onClick={() => handleDeleteClick(item)}
                                  className="cursor-pointer"

                                />
                                {/* dropdown start */}
                                <PiDotsThreeOutlineVerticalFill
                                  size={20}
                                  className="cursor-pointer"
                                  onClick={() => {
                                    handleOpenMenu(item?.id)
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            <ConfirmDeleteModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleConfirmDelete}
              title="Delete Client User?"
              message={`Are you sure you want to delete ?`}
            />
            {isMenuOpen && menuOpenId && (
              <StatusActionModal
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                onUpdateStatus={handleUpdateStatus}
                itemId={menuOpenId}
              />
            )}

            {/* token rate */}
            <div className="px-6 ">
              {/* Custom Token Rate Section */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold"> Custom token rate</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-5 mb-10">
                {/* Left Table */}
                <div className="w-full md:w-1/2 border border-gray-700 rounded-lg">
                  <div className="px-8 py-5 border-b border-gray-600 text-base font-medium">
                    All Users
                  </div>
                  <div className="text-xs">
                    <div className="flex justify-between items-center px-4 py-5">
                      <span className="text-gray-300">Base rate (per token)</span>
                    </div>

                    {clientUsers &&
                      clientUsers.map((item: any, index: number) => (
                        <div
                          key={index}
                          className={`flex justify-between items-center px-4 py-5 ${index % 2 !== 0 ? "bg-[#0A1330]" : ""
                            } ${index === clientUsers.length - 1 ? "mb-5" : ""}`}
                        >
                          <span className="flex items-center gap-2">{item.fullName}</span>

                          {editUserId === item.id ? (
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                value={rates[item.id] || ""}
                                onChange={(e) =>
                                  setRates({ ...rates, [item.id]: e.target.value })
                                }
                                className="bg-transparent border border-gray-600 px-2 py-1 rounded text-white w-20"
                              />
                              <button
                                className="cursor-pointer text-blue-400 text-xs underline"
                                onClick={() => handleSave(item.id)}
                              >
                                <SiTicktick size={18} />
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <span className="text-gray-300">
                                $ {item.base_rate_per_token || "0000"}
                              </span>
                              <button
                                className="cursor-pointer text-blue-400 text-xs underline"
                                onClick={() => handleEdit(item.id, item.base_rate_per_token)}
                              >
                                <MdEdit size={18} />
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Right Table */}
                <div className="w-full md:w-1/2 border border-gray-700 rounded-lg">
                  <div className="flex justify-between items-center px-4 py-5 border-b border-gray-600">
                    <span className="text-base font-medium">Volume Discount</span>
                  </div>

                  <div className="text-xs">
                    <div className="flex justify-between px-4 py-5">
                      <span className="text-gray-300">Min Tokens</span>
                      <span className="text-gray-300">Discount</span>
                    </div>

                    {discounts.map((item: any, index: any) => (
                      <div
                        key={item.id}
                        className={`flex justify-between px-4 py-5 ${index % 2 === 0 ? "bg-[#0A1330]" : ""
                          } ${index === discounts.length - 1 ? "mb-5" : ""}`}
                      >
                        <span>{formatTokenRange(item, index, discounts)}</span>

                        <div className="flex items-center gap-2">
                          {editDiscountId === item.id ? (
                            <>
                              <input
                                type="number"
                                min={0}
                                max={100}
                                step={0.1}                /* optional: allow decimals */
                                value={editedDiscounts[item.id] ?? ""}
                                onChange={(e) => {
                                  const val = parseFloat(e.target.value);
                                  if (val <= 100) {
                                    setEditedDiscounts({ ...editedDiscounts, [item.id]: e.target.value });
                                  }
                                }}
                                className="bg-transparent border border-gray-600 px-2 py-1 rounded text-white w-20 text-right"
                              />
                              <button onClick={() => handleSaveDiscount(item.id)}>
                                <SiTicktick size={18} className="text-blue-400 cursor-pointer" />
                              </button>
                            </>
                          ) : (
                            <>
                              <span>{item.discount}%</span>
                              <button onClick={() => handleEditDiscount(item.id, item.discount)}>
                                <MdEdit size={18} className="text-blue-400 cursor-pointer" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
            {/* Usage Analytics */}
            <div className=" bg-[#0B0F29] text-white p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Usage Analytics</h2>
                <span className="text-xs bg-purple-600 text-white rounded-full px-3 py-1">
                  Last 30 days
                </span>
              </div>

              <div className="rounded-lg overflow-hidden border border-[#1E243A]">
                {/* Tabs */}
                <div className="flex border-b border-[#1E243A] gap-40 py-5 px-3">
                  <button className="px-4 py-2 text-sm font-medium border-b-2 border-white text-white">
                    Chatbot
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white">
                    Voice Agent
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white">
                    LLM
                  </button>
                </div>

                {/* Chart Area */}
                <div className="h-58 flex items-center justify-center bg-[#0A1330] text-base m-6 rounded-2xl text-gray-400">
                  [Usage Chart: Tokens/Messages over time]
                </div>
              </div>
            </div>
            {/*  Contracts & SLA Status  */}
            <div className=" p-6 mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">
                  Contracts & SLA Status
                </h2>
                <button className="bg-purple-600 text-sm px-3 py-1 rounded hover:bg-purple-700">
                  Add Note +
                </button>
              </div>

              <div className="px-6 py-8 rounded-lg border border-[#343B4F] grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-[#0A1330] rounded-md p-4 border border-[#343B4F]">
                  <div className="flex justify-between items-center mb-2 py-5">
                    <span className="font-semibold text-base">Acme Corp</span>
                    <span className="text-base text-gray-400">
                      (Renews in 30 days)
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-gray-300 mb-1">SLA uptime</div>
                    <div className="text-sm text-right text-gray-300 mb-2">
                      94.4%
                    </div>
                  </div>
                  <div className="relative h-3 rounded bg-gray-700 overflow-hidden mb-8">
                    <div
                      className="absolute top-0 left-0 h-3 bg-[#18B91F]"
                      style={{ width: "94.4%" }}
                    ></div>
                  </div>

                  <div className="text-base text-gray-400 pb-5">
                    Notes: Contract includes premium support and custom model
                    fine-tuning.
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#0A1330]  rounded-md p-4 border border-[#343B4F]">
                  <div className="flex justify-between items-center mb-2 py-5">
                    <span className="font-semibold text-base">Globex Inc</span>
                    <span className="text-base text-green-500">Active</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-gray-300 mb-1">SLA uptime</div>
                    <div className="text-sm text-right text-gray-300 mb-2">
                      94.4%
                    </div>
                  </div>
                  <div className="relative h-3 rounded bg-gray-700 overflow-hidden mb-8">
                    <div
                      className="absolute top-0 left-0 h-3 bg-[#18B91F]"
                      style={{ width: "94.4%" }}
                    ></div>
                  </div>
                  <div className="text-base text-gray-400 pb-5">
                    Notes: Data residency requirements in EU. Next review Q3.
                  </div>
                </div>
              </div>
            </div>
            {/*  Support Ticket History */}
            <div className="p-6 mx-auto">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold">
                  Support Ticket History
                </h2>
              </div>

              <div className=" p-5 rounded-lg border border-[#343B4F] grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Open Tickets */}
                <div className="bg-[#0A1330] rounded-md p-6 border border-[#343B4F] ">
                  <div className="flex justify-between items-center mb-5">
                    <span className="font-medium text-sm">Open</span>
                    <span className="w-6 h-6 rounded-full flex justify-center items-center bg-[#7D7373] text-white">
                      3
                    </span>
                  </div>
                  {/* Ticket 1 */}
                  <div className="bg-[#081028] p-3 rounded mb-8">
                    <div className="text-sm font-semibold">
                      Chatbot API Errors
                    </div>
                    <div className="flex justify-between items-center mt-5">
                      <div className="text-xs text-gray-400">Acme Corp</div>
                      <div className="text-xs text-red-500 text-right">
                        High
                      </div>
                    </div>
                  </div>

                  {/* Ticket 2 */}
                  <div className="bg-[#081028] p-3 rounded">
                    <div className="text-sm font-semibold">Billing Dispute</div>
                    <div className="flex justify-between items-center mt-5">
                      <div className="text-xs text-gray-400">Initech</div>
                      <div className="text-xs text-yellow-500 ">Medium</div>
                    </div>
                  </div>
                </div>

                {/* In Progress Tickets */}
                <div className="bg-[#0A1330] rounded-md p-6 border border-[#343B4F] ">
                  <div className="flex justify-between items-center mb-5">
                    <span className="font-medium text-sm">In Progress</span>
                    <span className="w-6 h-6 rounded-full flex justify-center items-center bg-[#7D7373] text-white">
                      2
                    </span>
                  </div>

                  {/* Ticket */}
                  <div className="bg-[#081028] p-3 rounded">
                    <div className="text-sm font-semibold">
                      Custom Model Request
                    </div>
                    <div className="flex justify-between items-center mt-5">
                      <div className="text-xs text-gray-400">Globex Inc</div>
                      <div className="text-xs text-yellow-500">Medium</div>
                    </div>
                  </div>
                </div>

                {/* Resolved Tickets */}
                <div className="bg-[#0A1330] rounded-md p-6 border border-[#343B4F] h-58">
                  <div className="flex justify-between items-center mb-5">
                    <span className="font-medium text-sm">Resolved</span>
                    <span className="w-6 h-6 rounded-full flex justify-center items-center bg-[#7D7373] text-white">
                      5
                    </span>
                  </div>

                  {/* Ticket */}
                  <div className="bg-[#081028] p-3 rounded mb-8">
                    <div className="text-sm font-semibold">Latency Issues</div>

                    <div className="flex justify-between items-center mt-5">
                      <div className="text-xs text-gray-400">Acme Corp</div>
                      <div className="text-xs text-green-500">Low</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddEditAdminUserModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        adminUserData={ClientData}
        roleData={"client"}
      />
    </div>
  );
};

export default EnterpriseClients;
