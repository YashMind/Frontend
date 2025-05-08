"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AddEditAdminUserModal from "./AddEditAdminUser/addEditAdminUser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  deleteAdminUser,
  getAdminsLogsActivity,
  getAdminUsers,
  updateUserByAdmin,
} from "@/store/slices/admin/adminSlice";
import { formatDistanceToNow } from "date-fns";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const AdminUsersRoles = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [adminUserData, setAdminUserData] = useState<any>({});
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuOpenId, setMenuOpenId] = useState<any>({});
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();

  const { adminUsers, adminsLogsActivityData } = useSelector(
    (state: RootState) => state.admin
  );

  useEffect(() => {
    dispatch(getAdminUsers());
    dispatch(getAdminsLogsActivity({ date_filter: selectedDate }));
  }, [dispatch, selectedDate]);

  const handleDeleteAdminUser = (item: AdminSignUpForm) => {
    dispatch(deleteAdminUser({ id: item?.id }));
  };

  const handleUpdateStatus = (data: any) => {
    dispatch(
      updateUserByAdmin({
        payload: data,
        page: 1,
        limit: 10,
      })
    );
    setIsMenuOpen(false);
  };

  const handleDateString = (dateString: string) => {
    const date = new Date(dateString);
    const updatedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return updatedDate;
  };

  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            {/* admin users */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Admin Users & Roles</h2>
                <button
                  className="bg-[#18B91F] hover:bg-green-600 text-white px-4 py-1 rounded text-xs"
                  onClick={() => {
                    setAdminUserData({});
                    setModalShow(true);
                  }}
                >
                  Add Admin
                </button>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <div className="px-8 py-6  border-b border-gray-700 text-base">
                  <h5>Admin Users</h5>
                </div>
                <table className="w-full text-left mx-8 my-4">
                  <thead className="text-xs uppercase text-gray-400 border-b border-[#0B1739]">
                    <tr>
                      <th className="p-6">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                          readOnly
                        />
                      </th>
                      <th className="p-6 flex gap-1 justify-start items-center text-white">
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
                        <span>Name</span>
                      </th>
                      <th className="p-6 text-white">email</th>
                      <th className="p-6 text-white">Role</th>
                      <th className="p-6 text-white">Last Active</th>
                      <th className="p-6 text-white">status</th>
                      <th className="p-6 text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminUsers &&
                      adminUsers?.map((item, index) => {
                        const timeAgo = item?.last_active
                          ? formatDistanceToNow(new Date(item.last_active), {
                              addSuffix: true,
                            })
                          : null;
                        return (
                          <tr
                            className="border-b border-[#0B1739] hover:bg-[#1A1F3C] "
                            key={index}
                          >
                            <td className="p-6">
                              <input
                                type="checkbox"
                                className="form-checkbox accent-purple-500"
                                checked={item?.status === "Active"}
                                readOnly
                              />
                            </td>
                            <td className="p-6 font-medium text-xs">
                              {item?.fullName}
                            </td>
                            <td className="p-6 text-xs text-gray-300">
                              {item?.email}
                            </td>
                            <td className="p-6 text-xs">
                              <span className="bg-[#18B91F] text-white text-xs px-2 py-1 rounded-full">
                                {item?.role}
                              </span>
                            </td>

                            <td className="p-6 text-xs text-gray-400">
                              {timeAgo}
                            </td>
                            <td className="p-6 text-xs">
                              {item?.status ? (
                                <span className="bg-[#18B91F] text-white text-xs px-3 py-1 rounded-full">
                                  {item?.status}
                                </span>
                              ) : null}
                            </td>
                            <td className="p-6 space-x-2 flex relative">
                              <div className="flex gap-2 items-center">
                                <MdEdit
                                  onClick={() => {
                                    setModalShow(true);
                                    setAdminUserData(item);
                                  }}
                                  size={20}
                                />

                                <MdDeleteForever
                                  size={20}
                                  onClick={() => {
                                    handleDeleteAdminUser(item);
                                  }}
                                />
                                {/* dropdown start */}
                                <PiDotsThreeOutlineVerticalFill
                                  size={20}
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                    setMenuOpenId(item);
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
            {isMenuOpen && menuOpenId && (
              <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[400px] max-w-full shadow-5xl relative">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-4 right-4 text-white text-2xl font-bold"
                  >
                    &times;
                  </button>
                  <div className="right-0 bg-white text-black rounded shadow-lg group-hover:block z-10">
                    <ul className="text-sm">
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600"
                        onClick={() =>
                          handleUpdateStatus({
                            id: menuOpenId?.id,
                            status: "Suspend",
                          })
                        }
                      >
                        Suspend
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600"
                        onClick={() =>
                          handleUpdateStatus({
                            id: menuOpenId?.id,
                            status: "active",
                          })
                        }
                      >
                        Activate
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Reset token quote
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {/* roles management */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold mb-4">Role Management</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Super Admin Card */}
                {adminUsers?.map((item, index) => {
                  return (
                    <div
                      className="bg-[#0A1330] border border-[#343B4F] rounded-lg p-5"
                      key={index}
                    >
                      <div className="flex justify-between items-center bg-[#081028] px-4 py-2 rounded">
                        <h3 className="font-semibold text-white">
                          {item?.role}
                        </h3>
                        <span className="text-xs text-gray-400">
                          {item?.role === "Super Admin"
                            ? "Full Access"
                            : item?.role === "Billing Admin"
                            ? "Financial Access"
                            : item?.role === "Product Admin"
                            ? "Technical Access"
                            : item?.role === "Support Admin"
                            ? "Limited Access"
                            : ""}
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="font-medium mb-2">Permissions</p>
                        <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                          {item?.role_permissions?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center mt-6">
                        <span className="text-sm text-gray-300"></span>
                        <button
                          className="text-sm bg-[#3B0459] text-white px-4 py-1 rounded"
                          onClick={() => {
                            setModalShow(true);
                            setAdminUserData(item);
                          }}
                        >
                          Edit role
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Activity Log */}
              <h2 className="text-xl font-semibold mb-4">Activity Log</h2>
              <div className=" border border-[#343B4F] rounded-lg ">
                <div className="flex justify-start gap-20 items-center mb-4 p-5 border-b border-[#343B4F]">
                  <label className="text-sm font-medium">All Activities</label>
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-[#FFFFFF] text-sm text-[#626161] border w-55 border-gray-600 rounded px-5 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Activity Item 1 */}
                {adminsLogsActivityData?.last_added_admin?.created_at ? (
                  <div className="px-4 py-3 mb-2">
                    <span>
                      {handleDateString(
                        adminsLogsActivityData?.last_added_admin?.created_at
                      )}
                    </span>
                  </div>
                ) : null}
                {adminsLogsActivityData?.last_added_admin?.created_at ? (
                  <div className="bg-[#0A1330] rounded px-4 py-3 mb-2">
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                      <div className="text-base">
                        <p className="font-semibold text-sm text-white">
                          New admin added
                        </p>
                        <p className="text-sm text-gray-300">
                          Created new{" "}
                          {adminsLogsActivityData?.last_added_admin?.role}{" "}
                          account for{" "}
                          {adminsLogsActivityData?.last_added_admin?.email} with{" "}
                          {adminsLogsActivityData?.last_added_admin?.role} role
                        </p>
                      </div>
                      <div>
                        <span>
                          {adminsLogsActivityData?.last_added_admin?.fullName}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Activity Item 2 */}
                {adminsLogsActivityData?.last_role_updated?.created_at ? (
                  <div className="px-4 py-3 mb-2">
                    <span>
                      {handleDateString(
                        adminsLogsActivityData?.last_role_updated?.created_at
                      )}
                    </span>
                  </div>
                ) : null}
                {adminsLogsActivityData?.last_role_updated?.created_at ? (
                  <div className="bg-[#0A1330] rounded px-4 py-3 mb-2">
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                      <div className="text-base">
                        <p className="font-semibold text-sm text-white">
                          Role modified
                        </p>
                        <p className="text-sm text-gray-300">
                          Updated permissions for{" "}
                          {adminsLogsActivityData?.last_role_updated?.role} role
                          to include new permissions
                        </p>
                      </div>
                      <div>
                        <span>
                          {adminsLogsActivityData?.last_role_updated?.fullName}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Activity Item 3 */}
                {adminsLogsActivityData?.last_suspended_admin?.created_at ? (
                  <div className="px-4 py-3 mb-2">
                    <span>
                      {handleDateString(
                        adminsLogsActivityData?.last_suspended_admin?.created_at
                      )}
                    </span>
                  </div>
                ) : null}
                {adminsLogsActivityData?.last_suspended_admin?.created_at ? (
                  <div className="bg-[#0A1330]  rounded px-4 py-3 mb-8">
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                      <div className="text-base">
                        <p className="font-semibold text-sm text-white">
                          Admin deactivated
                        </p>
                        <p className="text-sm text-gray-300">
                          Deactivated{" "}
                          {adminsLogsActivityData?.last_suspended_admin?.role}{" "}
                          account for{" "}
                          {adminsLogsActivityData?.last_suspended_admin?.status}{" "}
                          due to departure
                        </p>
                      </div>
                      <div>
                        <span>
                          {
                            adminsLogsActivityData?.last_suspended_admin
                              ?.fullName
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <AddEditAdminUserModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            adminUserData={adminUserData}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminUsersRoles;
