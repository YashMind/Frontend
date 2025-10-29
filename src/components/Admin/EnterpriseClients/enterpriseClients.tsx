import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getEnterpriseUsers } from "@/store/slices/admin/enterpriseThunks";
import { FaPen, FaUser } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { updateMessageRate } from "@/store/slices/admin/adminSlice";
import { toasterError } from "@/services/utils/toaster";
import toast from "react-hot-toast";

interface EditEnterpriseUserModalProps {
  user: any;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedRate: number) => void;
}

const EnterpriseClients = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { enterpriseUsers, loading } = useSelector((state: RootState) => state.admin);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    dispatch(getEnterpriseUsers({ page, limit, search }));
  }, [dispatch, page, limit, search]);

  const totalPages = Math.ceil(enterpriseUsers.total / limit);

  const onEditSave = (id: string, rate: number) => {
    toast.dismiss()
    if (rate < 1) {
      toasterError("Message rate should be greater than 0")
      return
    }
    dispatch(updateMessageRate({ id: id, base_rate_per_message: rate })).unwrap().then(() => {

      setEditModal(false)
      dispatch(getEnterpriseUsers({ page, limit, search }));
    }).catch((err) => {
      toasterError(err.message || "Some error occured")
    })
  }

  return (
    <div className="bg-[#081028] text-white min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Enterprise Clients</h2>
        <input
          type="text"
          placeholder="Search by name or email..."
          className="bg-[#1A2C65] text-white rounded px-4 py-2 text-sm"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset to first page on new search
          }}
        />
      </div>

      <div className="border border-gray-700 rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#0B1739] text-gray-300 uppercase text-xs">
            <tr>
              <th className="p-4 flex gap-2 items-center">
                <FaUser /> Name
              </th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
              <th className="p-4">Plan</th>
              <th className="p-4">Messages Per credit</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {enterpriseUsers.data?.length > 0 ? (
              enterpriseUsers.data.map((user: any) => (
                <tr key={user.id} className="border-b border-[#0B1739] hover:bg-[#1A1F3C]">
                  <td className="p-4">{user.fullName}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">
                    <span className="bg-green-600 px-3 py-1 rounded-full text-xs">
                      {user.status || "Active"}
                    </span>
                  </td>
                  <td className="p-4">{user.plan}</td>
                  <td className="p-4">{user.base_rate_per_message}</td>
                  <td className="p-4"><button className="cursor-pointer" onClick={() => { setEditModal(true); setSelectedUser(user) }}><FaPen /></button></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-400">
                  {loading ? "Loading..." : "No enterprise clients found."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className={`px-3 py-1 rounded ${page === 1 ? "bg-gray-700 text-gray-500" : "bg-[#1A2C65] text-white hover:bg-[#243a7f]"}`}
        >
          Previous
        </button>

        <span className="text-sm text-gray-300">
          Page {page} of {totalPages || 1}
        </span>

        <button
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage((p) => p + 1)}
          className={`px-3 py-1 rounded ${page === totalPages || totalPages === 0
            ? "bg-gray-700 text-gray-500"
            : "bg-[#1A2C65] text-white hover:bg-[#243a7f]"
            }`}
        >
          Next
        </button>
      </div>
      <EditEnterpriseUserModal isOpen={editModal} onClose={() => setEditModal(false)} onSave={(rate) => onEditSave(selectedUser?.id, rate)} user={selectedUser} />
    </div>
  );
};





const EditEnterpriseUserModal: React.FC<EditEnterpriseUserModalProps> = ({
  user,
  isOpen,
  onClose,
  onSave,
}) => {
  const [rate, setRate] = useState<number | string>("");

  useEffect(() => {
    if (user) setRate(user.base_rate_per_message || 0);
  }, [user]);

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#101B3F] text-white rounded-lg w-full max-w-md p-6 relative shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Enterprise User</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              value={user.fullName || ""}
              readOnly
              className="w-full bg-[#1A2C65] text-gray-400 px-3 py-2 rounded-md cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="text"
              value={user.email || ""}
              readOnly
              className="w-full bg-[#1A2C65] text-gray-400 px-3 py-2 rounded-md cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Messages Per credit
            </label>
            <input
              type="number"
              value={rate}
              min={1}
              onChange={(e) => setRate(e.target.value)}
              className="w-full bg-[#1A2C65] text-white px-3 py-2 rounded-md"
              placeholder="Enter base rate"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(Number(rate))}
            className="px-4 py-2 bg-[#624DE3] hover:bg-[#4E3AB2] rounded-md text-sm"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};



export default EnterpriseClients;
