"use client";
import React, { useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import { registerWhatsappPhoneNumber } from "@/store/slices/chats/chatSlice";
import { AppDispatch } from "@/store/store";
import toast from "react-hot-toast";

interface PhoneDialogProps {
  isOpen?: boolean;
  onClose: () => void;
  botId?: number;
}

const PhoneDialog: React.FC<PhoneDialogProps> = ({
  isOpen,
  onClose,
  botId,
}) => {
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    setPhone("");
    setError(null);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClose]);

  const handleRegister = () => {
    if (!botId) {
      toast.error("Bot not found");
      return;
    }
    if (!phone) {
      setError("Phone number is required");
    }
    dispatch(
      registerWhatsappPhoneNumber({
        whatsapp_number: "+" + phone,
        bot_id: botId,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Number registered successfully");
        handleClose();
      })
      .catch((e) => {
        toast.error(e.message || "Some error occured");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40  flex items-center justify-center text-black">
      <div
        ref={dialogRef}
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative"
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <FiX size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Enter Your Phone Number
        </h2>
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={setPhone}
          inputStyle={{
            width: "100%",
            height: "40px",
            fontSize: "16px",
            borderRadius: "8px",
          }}
        />
        {error && <p className="text-sm text-red-500 py-1">{error}</p>}

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleRegister}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDialog;
