import React from "react";
import Image from "next/image";
const AdminUsersRoles = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          

          <div className="dashboard-right flex-1 mr-[30px]">
            {/* admin users */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Admin Users & Roles</h2>
                <button className="bg-[#18B91F] hover:bg-green-600 text-white px-4 py-1 rounded text-xs">
                  Add Admin
                </button>
              </div>
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <div className="px-8 py-6  border-b border-gray-700 text-base">
                  <h5> Admin Users</h5>
                </div>
                <table className="w-full text-left mx-8 my-4">
                  <thead className="text-xs uppercase text-gray-400 border-b border-[#0B1739]">
                    <tr>
                      <th className="p-6">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
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
                    <tr className="border-b border-[#0B1739] hover:bg-[#1A1F3C] ">
                      <td className="p-6">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                        />
                      </td>
                      <td className="p-6 font-medium text-xs">Sarah Johnson</td>
                      <td className="p-6 text-xs text-gray-300">
                        sarah@company.com
                      </td>
                      <td className="p-6 text-xs">
                        <span className="bg-[#18B91F] text-white text-xs px-2 py-1 rounded-full">
                          Super Admin
                        </span>
                      </td>
                      <td className="p-6 text-xs text-gray-400">
                        Today, 09:42 AM
                      </td>
                      <td className="p-6 text-xs">
                        <span className="bg-[#18B91F] text-white text-xs px-3 py-1 rounded-full">
                          Active
                        </span>
                      </td>
                      <td className="p-6 space-x-2 flex">
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
                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                          />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#1A1F3C] border-b border-[#0B1739]">
                      <td className="p-6">
                        <input
                          type="checkbox"
                          className="form-checkbox accent-purple-500"
                        />
                      </td>
                      <td className="p-6 font-medium text-xs">Michael Chen</td>
                      <td className="p-6 text-xs text-gray-300">
                        michael@company.com
                      </td>
                      <td className="p-6 text-xs">
                        <span className="bg-[#C38F00] text-white text-xs px-2 py-1 rounded-full">
                          Billing Admin
                        </span>
                      </td>
                      <td className="p-6 text-xs text-gray-400">
                        Yesterday, 03:15 PM
                      </td>
                      <td className="p-6">
                        <span className="bg-[#18B91F] text-white text-xs px-3 py-1 rounded-full">
                          Active
                        </span>
                      </td>
                      <td className="p-6 space-x-2 flex">
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
                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                          />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* roles management */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Role Management</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Super Admin Card */}
                <div className="bg-[#0A1330] border border-[#343B4F] rounded-lg p-5">
                  <div className="flex justify-between items-center bg-[#081028] px-4 py-2 rounded">
                    <h3 className="font-semibold text-white">Super Admin</h3>
                    <span className="text-xs text-gray-400">Full Access</span>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium mb-2">Permissions</p>
                    <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                      <li>Full system access</li>
                      <li>Manage all admin accounts</li>
                      <li>Configure roles & permissions</li>
                      <li>View all activity logs</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-300">2 admins</span>
                    <button className="text-sm bg-[#3B0459] text-white px-4 py-1 rounded">
                      Edit role
                    </button>
                  </div>
                </div>

                {/* Billing Admin Card */}
                <div className="bg-[#0A1330] border border-[#343B4F] rounded-lg p-5">
                  <div className="flex justify-between items-center bg-[#081028] px-4 py-2 rounded">
                    <h3 className="font-semibold text-white">Billing Admin</h3>
                    <span className="text-xs text-gray-400">
                      Financial Access
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium mb-2">Permissions</p>
                    <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                      <li>Manage payment gateways</li>
                      <li>View and issue invoices</li>
                      <li>Configure tax settings</li>
                      <li>Process refunds</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-300">1 admin</span>
                    <button className="text-sm bg-[#3B0459] text-white px-4 py-1 rounded hover:bg-purple-700">
                      Edit role
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* product Admin Card */}
                <div className="bg-[#0A1330] border border-[#343B4F] rounded-lg p-5">
                  <div className="flex justify-between items-center bg-[#081028] px-4 py-2 rounded">
                    <h3 className="font-semibold text-white">Product Admin</h3>
                    <span className="text-xs text-gray-400">
                      Technical Access
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium mb-2">Permissions</p>
                    <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                      <li>Configure API settings</li>
                      <li>Manage model deployments</li>
                      <li>View usage analytics</li>
                      <li>Access developer tools</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-300">1 admins</span>
                    <button className="text-sm bg-[#3B0459] text-white px-4 py-1 rounded">
                      Edit role
                    </button>
                  </div>
                </div>

                {/* Support Card */}
                <div className="bg-[#0A1330] border border-[#343B4F] rounded-lg p-5">
                  <div className="flex justify-between items-center bg-[#081028] px-4 py-2 rounded">
                    <h3 className="font-semibold text-white">Support</h3>
                    <span className="text-xs text-gray-400">
                      Limited Access
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium mb-2">Permissions</p>
                    <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                      <li>Access support tickets</li>
                      <li>View client accounts</li>
                      <li>Basic troubleshooting</li>
                      <li> Escalate issues</li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-gray-300">1 admin</span>
                    <button className="text-sm bg-[#3B0459] text-white px-4 py-1 rounded hover:bg-purple-700">
                      Edit role
                    </button>
                  </div>
                </div>
              </div>

              {/* Activity Log */}
              <h2 className="text-xl font-semibold mb-4">Activity Log</h2>
              <div className=" border border-[#343B4F] rounded-lg ">
                <div className="flex justify-start gap-20 items-center mb-4 p-5 border-b border-[#343B4F]">
                  <label className="text-sm font-medium">All Activities</label>
                  <input
                    type="text"
                    placeholder="dd-mm-yyyy"
                    className="bg-[#FFFFFF] text-sm text-[#626161] border w-32 border-gray-600 rounded px-5 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Activity Item 1 */}
                <div className="px-4 py-3 mb-2">
                  <span>Today, 10:15 AM</span>
                </div>
                <div className="bg-[#0A1330] rounded px-4 py-3 mb-2">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                    <div className="text-base">
                      <p className="font-semibold text-sm text-white">
                        New admin added
                      </p>
                      <p className="text-sm text-gray-300">
                        Created new support admin account for emily@company.com
                        with Support role
                      </p>
                    </div>
                    <div>
                      <span>Sarah Johnson</span>
                    </div>
                  </div>
                </div>

                {/* Activity Item 2 */}
                <div className="px-4 py-3 mb-2">
                  <span>Yesterday, 03:42 PM</span>
                </div>
                <div className="bg-[#0A1330] rounded px-4 py-3 mb-2">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                    <div className="text-base">
                      <p className="font-semibold text-sm text-white">
                        Role modified
                      </p>
                      <p className="text-sm text-gray-300">
                        Updated permissions for Billing Admin role to include
                        refund processing
                      </p>
                    </div>
                    <div>
                      <span>Michael Chen</span>
                    </div>
                  </div>
                </div>

                {/* Activity Item 3 */}
                <div className="px-4 py-3 mb-2">
                  <span>Yesterday, 11:20 AM</span>
                </div>
                <div className="bg-[#0A1330]  rounded px-4 py-3 mb-8">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                    <div className="text-base">
                      <p className="font-semibold text-sm text-white">
                        Admin deactivated
                      </p>
                      <p className="text-sm text-gray-300">
                        Deactivated admin account for david@company.com due to
                        departure
                      </p>
                    </div>
                    <div>
                      <span>Sarah Johnson</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersRoles;
