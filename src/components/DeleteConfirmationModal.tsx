import React from "react";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
      <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[400px] max-w-full shadow-2xl relative">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-white/80 leading-relaxed">{message}</p>

        <div className="mt-8 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 text-sm font-medium rounded-md bg-white text-gray-800 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="cursor-pointer px-4 py-2 text-sm font-medium rounded-md bg-red-600 text-white hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
