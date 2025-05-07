"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import EditUserModal from "./EditUser/editUser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { updateUserByAdmin } from "@/store/slices/admin/adminSlice";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdEdit } from "react-icons/md";

const UserManagement = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuOpenId, setMenuOpenId] = useState<number>();
  const [userData, setUserData] = useState<any>({});

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  const dispatch = useDispatch<AppDispatch>();
  const { allUsersData } = useSelector((state: RootState) => state.admin);

  const handleDateString = (dateString: string) => {
    const date = new Date(dateString);
    const updatedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return updatedDate;
  };

  const handleUpdateStatus = (data: any) => {
    dispatch(
      updateUserByAdmin({
        payload: data,
        page,
        limit,
        search,
        sortBy,
        sortOrder,
      })
    );
    setIsMenuOpen(false);
  };
  return (
    <div className="">
      <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
        <div className="dashboard-right flex-1 mr-[30px]">
          {/* user list start */}
          <div className="max-w-full overflow-x-auto mt-5 bg-[#0B1739] p-5">
            <div className="flex justify-between border-b border-[#1f355c]">
              <h1 className="text-white text-lg font-semibold mb-4 ">
                All Users
              </h1>
              <div className="text-sm text-gray-400 mt-4">
                <span>
                  {allUsersData?.current_page} - {allUsersData?.total_pages} of{" "}
                  {allUsersData?.total_count}{" "}
                </span>
              </div>
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
                  <th className="p-4 text-xs font-medium">Email</th>
                  <th className="p-4 text-xs font-medium">Plan</th>
                  <th className="p-4 text-xs font-medium">Token Used</th>
                  <th className="p-4 text-xs font-medium">Signup Date</th>
                  <th className="p-4 text-xs font-medium">Status</th>
                  <th className="p-4 text-xs font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {allUsersData?.data &&
                  allUsersData?.data?.map((item, index) => {
                    return (
                      <tr
                        className="bg-[#0A1330] hover:bg-[#1A2C56] relative"
                        key={index}
                      >
                        <td className="p-4">
                          <input
                            type="checkbox"
                            className="form-checkbox appearance-none w-4 h-4  rounded-sm bg-[#CB3CFF]"
                            readOnly
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
                          {item?.plan}
                        </td>
                        <td className="p-4 text-[#AEB9E1] text-xs">
                          {item?.tokenUsed}
                        </td>
                        <td className="p-4 text-[#AEB9E1] text-xs">
                          {handleDateString(item?.created_at)}
                        </td>
                        <td className="p-4">
                          {item?.status ? (
                            <span className="bg-[#AEB9E133] text-[#AEB9E1] text-xs px-2 py-1 rounded">
                              {item?.status}
                            </span>
                          ) : null}
                        </td>
                        <td className="p-4 relative">
                          <div className="flex gap-2 items-center">
                            <MdEdit
                              onClick={() => {
                                setUserData(item);
                                setModalShow(true);
                              }}
                              size={20}
                            />
                            {/* dropdown start */}
                            <PiDotsThreeOutlineVerticalFill
                              size={20}
                              className="cursor-pointer"
                              onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                                setMenuOpenId(item?.id);
                              }}
                            />
                            {isMenuOpen && menuOpenId === item.id && (
                              <div className="absolute right-20 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
                                <div className="py-1">
                                  {/* <button
                                    className="w-full block px-4 py-2 text-xs border-b-1 border-[#CACACA] text-[#5C5C5C] hover:bg-gray-100 text-left"
                                  >
                                    View Detail
                                  </button> */}
                                  <button
                                    className="w-full block px-4 py-2 text-xs border-b border-[#CACACA] text-[#FF0000] hover:bg-gray-100 text-left"
                                    onClick={() =>
                                      handleUpdateStatus({
                                        id: item?.id,
                                        status: "Suspend",
                                      })
                                    }
                                  >
                                    Suspend
                                  </button>
                                  <button
                                    className="w-full block px-4 py-2 border-b border-[#CACACA] text-xs text-[#0FB100] hover:bg-gray-100 text-left"
                                    onClick={() =>
                                      handleUpdateStatus({
                                        id: item?.id,
                                        status: "Active",
                                      })
                                    }
                                  >
                                    Activate
                                  </button>
                                  <button
                                    className="w-full block px-4 py-2   text-xs text-[#CD6600] hover:bg-gray-100 text-left"
                                    onClick={() =>
                                      handleUpdateStatus({
                                        id: item?.id,
                                        tokenUsed: 0,
                                      })
                                    }
                                  >
                                    Reset token quote
                                  </button>
                                </div>
                              </div>
                            )}
                            {/* dropdown end */}
                            {isMenuOpen && menuOpenId === item.id && (
                              <div className="relative group">
                                <button className="text-gray-300 hover:text-white">
                                  <i className="fas fa-ellipsis-v"></i>
                                </button>
                                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg hidden group-hover:block z-10">
                                  <ul className="text-sm">
                                    {/* <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                    View Detail
                                  </li> */}
                                    <li
                                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600"
                                      onClick={() =>
                                        handleUpdateStatus({
                                          id: item?.id,
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
                                          id: item?.id,
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
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <EditUserModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            userData={userData}
          />
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 px-6 py-4 border-t">
            <button
              className="text-sm text-[#9E9E9E] font-medium disabled:opacity-50"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            {allUsersData?.total_pages >= 1 ? (
              <button
                className={`w-6 h-6 ${
                  page === 1 ? "bg-[#624DE3]" : "bg-gray-200"
                }   text-black rounded-[7px] text-sm`}
              >
                1
              </button>
            ) : null}
            {allUsersData?.total_pages > 1 ? (
              <button
                className="w-6 h-6 bg-gray-200 text-black rounded-[7px] text-sm"
                disabled
              >
                ...
              </button>
            ) : null}
            {allUsersData?.total_pages > 1 ? (
              <button
                className={`w-6 h-6 ${
                  allUsersData?.total_pages === page
                    ? "bg-[#624DE3]"
                    : "bg-gray-200"
                } text-black rounded-[7px] text-sm`}
              >
                {allUsersData?.total_pages}
              </button>
            ) : null}
            <button
              className="text-sm text-[#9E9E9E] font-medium disabled:opacity-50"
              onClick={() => setPage(page + 1)}
              disabled={allUsersData?.total_pages === page}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
