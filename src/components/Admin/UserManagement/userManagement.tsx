"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import EditUserModal from "./EditUser/editUser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { updateUserByAdmin, getAllUsers } from "@/store/slices/admin/adminSlice";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import { FiSearch, FiFilter, FiChevronDown, FiChevronUp } from "react-icons/fi";
import StatusActionModal from "@/components/StatusActionModal";
import { formatDateTimeWithTz } from "@/components/utils/formatDateTime";
import { useTimezone } from "@/context/TimeZoneContext";

const UserManagement = () => {
  const { timezone, isLoading } = useTimezone()


  const [modalShow, setModalShow] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuOpenId, setMenuOpenId] = useState<any>({});
  const [userData, setUserData] = useState<any>({});

  // Table controls
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");

  // Filters
  const [showFilters, setShowFilters] = useState(false);
  const [planFilter, setPlanFilter] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [tokenFilter, setTokenFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<{ start?: string, end?: string }>({});

  const dispatch = useDispatch<AppDispatch>();
  const { allUsersData } = useSelector((state: RootState) => state.admin);

  // Fetch users when filters or pagination changes
  useEffect(() => {
    const filters = {
      ...(planFilter && { plan: planFilter }),
      ...(statusFilter && { status: statusFilter }),
      ...(tokenFilter && { tokenUsed: tokenFilter }),
      ...(dateFilter.start && { startDate: dateFilter.start }),
      ...(dateFilter.end && { endDate: dateFilter.end }),
    };

    console.log({ planFilter, statusFilter, tokenFilter, dateFilter });

    dispatch(
      getAllUsers({
        page,
        limit,
        search,
        sortBy,
        sortOrder,
        ...filters
      })
    );
  }, [dispatch, page, limit, search, sortBy, sortOrder, planFilter, statusFilter, tokenFilter]);


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

  const handleOpenMenu = (itemId: any) => {
    setMenuOpenId(itemId);
    setIsMenuOpen(true);
  };

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const resetFilters = () => {
    setPlanFilter("");
    setStatusFilter("");
    setTokenFilter("");
    setDateFilter({});
    setSearch("");
    setPage(1);
  };

  return (
    <div className="">
      <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
        <div className="dashboard-right flex-1 mr-[30px]">
          {/* Search and Filters */}
          <div className="mt-5 bg-[#0B1739] p-5">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-white text-lg font-semibold">All Users</h1>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name or email"
                    className="bg-[#0A1330] text-white pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#624DE3]"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setPage(1);
                    }}
                  />
                </div>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 bg-[#624DE3] px-4 py-2 rounded-md text-sm"
                >
                  <FiFilter /> Filters
                </button>
              </div>
            </div>

            {/* Filters dropdown */}
            {showFilters && (
              <div className="bg-[#0A1330] p-4 rounded-md mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Plan</label>
                  <select
                    className="w-full bg-[#081028] text-white p-2 rounded-md text-sm border border-[#1f355c]"
                    value={planFilter}
                    onChange={(e) => {
                      setPlanFilter(e.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="">All Plans</option>
                    <option value="1">Basic</option>
                    <option value="2">Pro</option>
                    <option value="3">Enterprise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Status</label>
                  <select
                    className="w-full bg-[#081028] text-white p-2 rounded-md text-sm border border-[#1f355c]"
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Suspended">Suspended</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Token Used</label>
                  <select
                    className="w-full bg-[#081028] text-white p-2 rounded-md text-sm border border-[#1f355c]"
                    value={tokenFilter}
                    onChange={(e) => {
                      setTokenFilter(e.target.value);
                      setPage(1);
                    }}
                  >
                    <option value="">All</option>
                    <option value="0-1000">0 - 1000</option>
                    <option value="1001-5000">1001 - 5000</option>
                    <option value="5001+">5001+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Signup Date</label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      className="w-full bg-[#081028] text-white p-2 rounded-md text-sm border border-[#1f355c]"
                      value={dateFilter.start || ""}
                      onChange={(e) => setDateFilter({ ...dateFilter, start: e.target.value })}
                    />
                    <input
                      type="date"
                      className="w-full bg-[#081028] text-white p-2 rounded-md text-sm border border-[#1f355c]"
                      value={dateFilter.end || ""}
                      onChange={(e) => setDateFilter({ ...dateFilter, end: e.target.value })}
                    />
                  </div>
                </div>

                <div className="col-span-full flex justify-end">
                  <button
                    onClick={resetFilters}
                    className="text-sm text-[#9E9E9E] hover:text-white"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-between border-b border-[#1f355c]">
              <div className="text-sm text-gray-400 mt-4">
                Showing {allUsersData?.current_page} - {allUsersData?.total_pages} of{" "}
                {allUsersData?.total_count} users
              </div>
            </div>
          </div>

          {/* user list start */}
          <div className="max-w-full overflow-x-auto bg-[#0B1739] p-5">
            <table className="min-w-full overflow-hidden text-sm">
              <thead>
                <tr className="text-left text-gray-300 ">
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
                  <th
                    className="p-4 text-xs font-medium cursor-pointer hover:text-white"
                    onClick={() => handleSort("plan")}
                  >
                    <div className="flex items-center gap-1">
                      Plan
                      {sortBy === "plan" && (
                        sortOrder === "asc" ? <FiChevronUp /> : <FiChevronDown />
                      )}
                    </div>
                  </th>
                  <th
                    className="p-4 text-xs font-medium cursor-pointer hover:text-white"
                    onClick={() => handleSort("tokenUsed")}
                  >
                    <div className="flex items-center gap-1">
                      Token Used
                      {sortBy === "tokenUsed" && (
                        sortOrder === "asc" ? <FiChevronUp /> : <FiChevronDown />
                      )}
                    </div>
                  </th>
                  <th
                    className="p-4 text-xs font-medium cursor-pointer hover:text-white"
                    onClick={() => handleSort("created_at")}
                  >
                    <div className="flex items-center gap-1">
                      Signup Date
                      {sortBy === "created_at" && (
                        sortOrder === "asc" ? <FiChevronUp /> : <FiChevronDown />
                      )}
                    </div>
                  </th>
                  <th
                    className="p-4 text-xs font-medium cursor-pointer hover:text-white"
                    onClick={() => handleSort("status")}
                  >
                    <div className="flex items-center gap-1">
                      Status
                      {sortBy === "status" && (
                        sortOrder === "asc" ? <FiChevronUp /> : <FiChevronDown />
                      )}
                    </div>
                  </th>
                  <th className="p-4 text-xs font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {allUsersData?.data?.length > 0 ? (
                  allUsersData?.data?.map((item, index) => {
                    return (
                      <tr
                        className="bg-[#0A1330] hover:bg-[#1A2C56] relative"
                        key={index}
                      >
                        <td className="p-4 flex items-center text-xs gap-2">
                          <img src="/images/Avatar Circle.png" alt="" />
                          {item?.fullName}
                        </td>
                        <td className="p-4 text-[#AEB9E1] text-xs">
                          {item?.email}
                        </td>
                        <td className="p-4 text-[#AEB9E1] text-xs">
                          {item?.plan == 1 && "Basic"}
                          {item?.plan == 2 && "Pro"}
                          {item?.plan == 3 && "Enterprise"}
                        </td>
                        <td className="p-4 text-[#AEB9E1] text-xs">
                          {item?.tokenUsed}
                        </td>
                        <td className="p-4 text-[#AEB9E1] text-xs">
                          {!isLoading ? formatDateTimeWithTz(item?.created_at, timezone) : "-"}
                        </td>
                        <td className="p-4">
                          <span className="bg-[#AEB9E133] text-[#AEB9E1] text-xs px-2 py-1 rounded">
                            {item?.status || '-'}
                          </span>
                        </td>
                        <td className="p-4 relative">
                          <div className="flex gap-2 items-center">
                            <MdEdit
                              onClick={() => {
                                setUserData(item);
                                setModalShow(true);
                              }}
                              size={20}
                              className="cursor-pointer"
                            />
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
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className="p-4 text-center text-gray-400">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {isMenuOpen && menuOpenId && (
            <StatusActionModal
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              onUpdateStatus={handleUpdateStatus}
              itemId={menuOpenId}
            />
          )}

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
            {allUsersData?.total_pages >= 1 && (
              <button
                className={`w-6 h-6 ${page === 1 ? "bg-[#624DE3]" : "bg-gray-200"} text-black rounded-[7px] text-sm`}
                onClick={() => setPage(1)}
              >
                1
              </button>
            )}
            {allUsersData?.total_pages > 2 && page > 3 && (
              <span className="mx-1">...</span>
            )}
            {page > 2 && (
              <button
                className="w-6 h-6 bg-gray-200 text-black rounded-[7px] text-sm"
                onClick={() => setPage(page - 1)}
              >
                {page - 1}
              </button>
            )}
            {page > 1 && page < allUsersData?.total_pages && (
              <button className="w-6 h-6 bg-[#624DE3] text-white rounded-[7px] text-sm">
                {page}
              </button>
            )}
            {page < allUsersData?.total_pages - 1 && (
              <button
                className="w-6 h-6 bg-gray-200 text-black rounded-[7px] text-sm"
                onClick={() => setPage(page + 1)}
              >
                {page + 1}
              </button>
            )}
            {allUsersData?.total_pages > 2 && page < allUsersData?.total_pages - 2 && (
              <span className="mx-1">...</span>
            )}
            {allUsersData?.total_pages > 1 && (
              <button
                className={`w-6 h-6 ${page === allUsersData?.total_pages ? "bg-[#624DE3]" : "bg-gray-200"} text-black rounded-[7px] text-sm`}
                onClick={() => setPage(allUsersData?.total_pages)}
              >
                {allUsersData?.total_pages}
              </button>
            )}
            <button
              className="text-sm text-[#9E9E9E] font-medium disabled:opacity-50"
              onClick={() => setPage(page + 1)}
              disabled={allUsersData?.total_pages === page || !allUsersData?.total_pages}
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