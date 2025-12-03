"use client";
import { getMeData } from "@/store/slices/auth/authSlice";
import { createTicket } from "@/store/slices/supportTicket/slice";
import { AppDispatch, RootState } from "@/store/store";
import { TicketCreateData } from "@/types/supportTickets";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // or your preferred state management dispatch
// import { AppDispatch } from '@/store'; // update with your store path

const SupportForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const userData: any = useSelector((state: RootState) => state.auth.userData);

  useEffect(() => {
    dispatch(getMeData({ router }));
  }, []);

  const validateForm = () => {
    let isValid = true;

    if (!subject.trim()) {
      setSubjectError("Subject is required");
      isValid = false;
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const payload: TicketCreateData = {
        subject,
        message,
        user_email: userData.email,
      };
      await dispatch(createTicket(payload))
        .unwrap()
        .then(() => {
          // Reset form on successful submission
          setSubject("");
          setMessage("");
          setSubjectError("");
          setMessageError("");
          onSuccess();
        });
    } catch (error) {
      console.log("Submission failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDiscard = () => {
    setSubject("");
    setMessage("");
    setSubjectError("");
    setMessageError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6 text-gray-100">
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-white mb-2"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setSubjectError("");
            }}
            className={`bg-gray-900 w-full px-4 py-2 rounded-lg focus:outline-none ${
              subjectError
                ? "border border-red-500"
                : "border border-gray-900 focus:border-white"
            }`}
            placeholder="Enter subject..."
            disabled={isLoading}
          />
          {subjectError && (
            <p className="text-red-500 text-sm mt-1">{subjectError}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setMessageError("");
            }}
            className={`bg-gray-900 w-full px-4 py-2 rounded-lg focus:outline-none h-96 ${
              messageError
                ? "border border-red-500"
                : "border border-gray-900 focus:border-white"
            }`}
            placeholder="Describe your issue..."
            disabled={isLoading}
          />
          {messageError && (
            <p className="text-red-500 text-sm mt-1">{messageError}</p>
          )}
        </div>

        <div className="flex gap-4 justify-end">
          <button
            type="button"
            onClick={handleDiscard}
            className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
            disabled={isLoading}
          >
            Discard
          </button>

          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SupportForm;
