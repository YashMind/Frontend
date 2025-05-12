// components/StatusActionModal.tsx
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onUpdateStatus: (payload: { id: number; status: string }) => void;
  itemId: number;
};

const StatusActionModal: React.FC<Props> = ({ isOpen, onClose, onUpdateStatus, itemId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[400px] max-w-full shadow-5xl relative">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>
        <div className="bg-white text-black rounded shadow-lg z-10">
          <ul className="text-sm">
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-red-600"
              onClick={() => {
                onUpdateStatus({ id: itemId, status: "Suspend" });
                onClose();
              }}
            >
              Suspend
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-green-600"
              onClick={() => {
                onUpdateStatus({ id: itemId, status: "active" });
                onClose();
              }}
            >
              Activate
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Reset token quota
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatusActionModal;
