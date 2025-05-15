"use client";
import React, { useEffect, useState } from "react";
import AddEditAdminUserModal from "./AddEditAdminUser/addEditAdminUser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  deleteAdminUser,
  getAdminsLogsActivity,
  getAdminUsers,
  getRolePermissions,
  updateUserByAdmin,
} from "@/store/slices/admin/adminSlice";
import { formatDistanceToNow } from "date-fns";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import StatusActionModal from "@/components/StatusActionModal";
import ConfirmDeleteModal from "@/components/DeleteConfirmationModal";
import { FaUser } from "react-icons/fa";
import EditPermissionModal from "@/components/EditPermissionsModal";
import { getAllUsers } from "@/store/slices/admin/adminSlice";
import moment from "moment";

interface RoleWithPermissions {
  id: number;
  role: string;
  permissions: string[];
}
const formatAction = (action: string) => {
  const map: Record<string, string> = {
    update: "Admin Updated",
    delete: "Admin Deleted",
    create_user: "New Person Added",
    active: "Admin Activated",
    Suspend: "Admin Suspended",
    modify_role: "Role Modified",
    role_updated: "Role Updated",
  };
  return map[action] || "Activity";
}
const AdminUsersRoles = () => {
  const permissionsData = [
    {
      id: 1,
      role: "Super Admin",
      permissions: [],
    },
    {
      id: 2,
      role: "Billing Admin",
      permissions: [],
    },
    {
      id: 3,
      role: "Product Admin",
      permissions: [],
    },
    {
      id: 4,
      role: "Support Admin",
      permissions: [],
    },
  ];

  const today = new Date().toISOString().split("T")[0];

  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [showPermissionModal, setShowPermissionModal] = useState<boolean>(false);
  const [rolesWithPermissions, setRolesWithPermissions] = useState<RoleWithPermissions[]>(permissionsData);

  const [selectedDate, setSelectedDate] = useState(today)
  const [adminUserData, setAdminUserData] = useState<any>({});
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuOpenId, setMenuOpenId] = useState<number | null>(null);
  const { adminUsers, adminsLogsActivityData } = useSelector(
    (state: RootState) => state.admin
  );
  useEffect(() => {
    dispatch(getAdminUsers());
    dispatch(getAdminsLogsActivity({ date_filter: selectedDate }));
  }, [dispatch, selectedDate]);

  useEffect(() => {
    async function fetchAllPermissions() {
      const updatedRoles = await Promise.all(
        rolesWithPermissions.map(async (role) => {
          try {
            const res = await dispatch(getRolePermissions(role.role)).unwrap();
            return { ...role, permissions: res.permissions || [] };
          } catch {
            return role;
          }
        })
      );
      setRolesWithPermissions(updatedRoles);
    }

    fetchAllPermissions();
  }, []);


  const handleDeleteClick = (item: any) => {
    setSelectedUser(item.id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedUser) {
      await dispatch(deleteAdminUser({ id: selectedUser }));
      await dispatch(getAdminsLogsActivity({ date_filter: "" }));

      dispatch(
        getAllUsers({
          page: 1,
          limit: 10,
        })
      );
    }
  };

  const handleUpdateStatus = async (data: any) => {
    await dispatch(
      updateUserByAdmin({
        payload: data,
        page: 1,
        limit: 10,
      })
    );
    await dispatch(getAdminsLogsActivity({ date_filter: "" }));

    setIsMenuOpen(false);
  };


  const handleOpenMenu = (itemId: any) => {
    setMenuOpenId(itemId);
    setIsMenuOpen(true);
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
                  className="cursor-pointer bg-[#18B91F] hover:bg-green-600 text-white px-4 py-1 rounded text-xs"
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
                          className="cursor-pointer form-checkbox accent-purple-500"
                          readOnly
                        />
                      </th>
                      <th className="p-6 flex gap-2 justify-start items-center text-white">
                        <FaUser className="text-white w-4 h-4" />
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
                    {adminUsers && adminUsers.length > 0 ? (
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
                                className="cursor-pointer form-checkbox accent-purple-500"
                                // checked={item?.status === "Active"}
                                checked={false}
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
                              <span className="bg-[#18B91F] text-white text-xs px-3 py-1 rounded-full">
                                {item?.status || "Active"}
                              </span>
                            </td>

                            <td className="p-6 space-x-2 flex relative">
                              <div className="flex gap-2 items-center">
                                <MdEdit
                                  onClick={() => {
                                    setModalShow(true);
                                    setAdminUserData(item);
                                  }}
                                  size={20}
                                  className="cursor-pointer"
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
                      })) : (
                      <tr>
                        <td
                          colSpan={7}
                          className="text-center text-sm text-gray-400 py-6"
                        >
                          No users found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {isMenuOpen && menuOpenId && (
              <StatusActionModal
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                onUpdateStatus={handleUpdateStatus}
                itemId={menuOpenId}
              />
            )}

            <ConfirmDeleteModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleConfirmDelete}
              title="Delete Admin User?"
              message={`Are you sure you want to delete ?`}
            />

            {/* roles management */}
            <div className="p-6">

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold mb-4">Role Management</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {rolesWithPermissions.map((item, index) => (
                  <div
                    className="bg-[#0A1330] border border-[#343B4F] rounded-lg p-5"
                    key={index}
                  >
                    <div className="flex justify-between items-center bg-[#081028] px-4 py-2 rounded">
                      <h3 className="font-semibold text-white">{item?.role}</h3>
                      <button
                        className="cursor-pointer text-sm bg-[#3B0459] text-white px-4 py-1 rounded"
                        onClick={() => {
                          setShowPermissionModal(true);
                          setAdminUserData(item);
                        }}
                      >
                        Edit Permissions
                      </button>
                    </div>

                    <div className="mt-4">
                      <p className="font-medium mb-2 ml-4">Permissions</p>
                      {item?.permissions && item.permissions.length > 0 ? (
                        <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                          {item.permissions.map((perm, idx) => (
                            <li key={idx}>{perm}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-400 ml-4">
                          This role has no permissions assigned. Please edit the role to add permissions.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity Log */}
              <h2 className="text-xl font-semibold mb-4">Activity Log</h2>
              <div className=" border border-[#343B4F] rounded-lg ">
                <div className="flex justify-start gap-20 items-center mb-4 p-5 border-b border-[#343B4F]">
                  <label className="text-sm font-medium">All Activities</label>
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-[#FFFFFF] text-sm text-[#626161] border w-55 border-gray-600 rounded px-5 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="bg-[#0A0F2C] pb-12 rounded-lg text-white space-y-6 max-w-2xl mx-auto">
                  {Array.isArray(adminsLogsActivityData) && adminsLogsActivityData.length > 0 ? (
                    adminsLogsActivityData.map((log: any) => (
                      <div
                        key={log.id}
                        className="bg-[#0F1A3D] border border-[#2A3553] rounded-lg p-2"
                      >
                        <div className="text-sm text-gray-400 mb-2">
                          {moment(log.created_at).calendar(null, {
                            sameDay: '[Today], h:mm A',
                            lastDay: '[Yesterday], h:mm A',
                            lastWeek: 'dddd, h:mm A',
                            sameElse: 'MMM D, YYYY, h:mm A',
                          })}
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-white capitalize">
                              {formatAction(log.action)}
                            </h3>
                            <p className="text-sm text-gray-300">{log.log_activity}</p>
                          </div>
                          <div className="text-sm text-gray-400 mt-1">{log.username}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-400 text-center py-6">
                      No Activity Yet.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <AddEditAdminUserModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            adminUserData={adminUserData}
            roleData={"admin"}
          />
          <EditPermissionModal
            show={showPermissionModal}
            onHide={() => setShowPermissionModal(false)}
            adminUserData={adminUserData}
            roleData={adminUserData?.role}
            onUpdatePermissions={(updatedRole) => {
              setRolesWithPermissions((prev: any) =>
                prev.map((r: any) =>
                  r.id === updatedRole.id ? { ...r, permissions: updatedRole.permissions } : r
                )
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminUsersRoles;
