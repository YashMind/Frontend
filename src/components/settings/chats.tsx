"use client";
import {
  archiveUserChatsMessages,
  deleteAllBotsChats,
  getChatbots,
} from "@/store/slices/chats/chatSlice";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { CheckmarkIcon } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../DeleteConfirmationModal";
import ArchivedMessageModal from "./ArchivedMessagesModal";

const Chats = () => {
  const [state, setState] = useState({
    showDeleteChats: false,
    viewArchivedChats: false,
    showArchiveChats: false,
  });
  const dispatch = useDispatch<AppDispatch>();
  const chatbots = useSelector((state: RootState) => state.chat.chatbots || {});
  useEffect(() => {
    if (!chatbots || chatbots.length == 0) {
      dispatch(getChatbots());
    }
  }, [dispatch]);
  return (
    <div className="max-w-3xl mx-auto px-4 py-2">
      <h1 className="text-2xl font-bold text-white mb-8">Settings</h1>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">General</h2>

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">View Archived Chats</h3>
              <p className="text-gray-500 text-sm mt-1">
                View and manage your archived chats
              </p>
            </div>
            <button
              onClick={() =>
                setState((prev) => ({ ...prev, viewArchivedChats: true }))
              }
              type="button"
              className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
            >
              <CheckmarkIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Archive All Chats</h3>
              <p className="text-gray-500 text-sm mt-1">
                Move all your chats to archive
              </p>
            </div>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              onClick={() =>
                setState((prev) => ({ ...prev, showArchiveChats: true }))
              }
            >
              <CheckmarkIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Delete All Chats</h3>
              <p className="text-gray-500 text-sm mt-1">
                Permanently delete all your chats. This action cannot be undone.
              </p>
            </div>
            <button
              onClick={() =>
                setState((prev) => ({ ...prev, showDeleteChats: true }))
              }
              type="button"
              className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-100"
            >
              <CheckmarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Data Control
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          You can control all your data here.
        </p>

        <div className="space-y-6">
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option disabled selected>
              Select bot
            </option>
            {chatbots.map((chatbot) => (
              <option
                key={chatbot.id}
                value={chatbot.id}
                className="text-gray-900"
              >
                {chatbot.chatbot_name}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Export data
          </button>
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={state.showDeleteChats}
        onClose={() =>
          setState((prev) => ({ ...prev, showDeleteChats: false }))
        }
        onConfirm={() => dispatch(deleteAllBotsChats())}
        title="Are you sure you want to delete all chats in your chatbots? This action cannot be undone."
      />
      <ConfirmDeleteModal
        isOpen={state.showArchiveChats}
        onClose={() =>
          setState((prev) => ({ ...prev, showArchiveChats: false }))
        }
        onConfirm={() => dispatch(archiveUserChatsMessages())}
        title="Are you sure you want to archive chats in your chatbots?"
        actionTitle="Archive"
      />

      <ArchivedMessageModal
        isOpen={state.viewArchivedChats}
        onClose={() =>
          setState((prev) => ({ ...prev, viewArchivedChats: false }))
        }
      />
    </div>
  );
};

export default Chats;
