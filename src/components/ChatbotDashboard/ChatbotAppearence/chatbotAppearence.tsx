import React, { useEffect } from "react";
import ChatbotDummy from "./chatbotDummy";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatbotSettings } from "@/store/slices/chats/appearanceSettings";
import { AppDispatch, RootState } from "@/store/store";

const ChatbotAppearence = ({ botId }: { botId?: number }) => {
  const dispatch = useDispatch<AppDispatch>();

  const chatbotSetting = useSelector(
    (state: RootState) => state.appearance.settings
  );

  useEffect(() => {
    if (botId && !chatbotSetting) dispatch(fetchChatbotSettings(botId));
  }, []);

  return (
    <div className="w-full">
      {" "}
      <h2 className="text-2xl font-bold mt-[30]">Appearence</h2>
      <p className="text-sm font-light my-[22px]">
        You can customise the look and feel of your chatbot interface here.
      </p>
      <div className="flex gap-2">
        <div className="space-y-2 flex-1 bg-[#9e99b6] p-[36] rounded-[20px]">
          <div className="bg-white rounded-2xl shadow-md p-6 w-full ">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className=" font-medium text-gray-900 text-base">Title</h2>
                <p className="text-sm  text-[#727272]">
                  To be shown in the shared website
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-[#9592AD] transition-colors duration-300"></div>
                <div className="absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
              </label>
            </div>

            <input
              type="text"
              placeholder="Enter title"
              className="w-full p-3 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
            />

            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-xl">
              Save
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 w-full ">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className=" font-medium text-gray-900 text-base">
                  Welcome Message
                </h2>
                <p className="text-sm  text-[#727272]">
                  The introductory message from the chatbot
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-[#9592AD] transition-colors duration-300"></div>
                <div className="absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
              </label>
            </div>

            <input
              type="text"
              placeholder="Enter title"
              className="w-full p-3 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
            />

            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-xl">
              Save
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 w-full ">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className=" font-medium text-gray-900 text-base">
                  Suggestions
                </h2>
                <p className="text-sm  text-[#727272]">
                  Questions to be shown to user (1 suggestion per line)
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-[#9592AD] transition-colors duration-300"></div>
                <div className="absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
              </label>
            </div>

            <input
              type="text"
              placeholder="Enter title"
              className="w-full p-3 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
            />

            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-xl">
              Save
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 w-full ">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className=" font-medium text-gray-900 text-base">
                  Placeholder
                </h2>
                <p className="text-sm  text-[#727272]">
                  To be shown in the query input
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-[#9592AD] transition-colors duration-300"></div>
                <div className="absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
              </label>
            </div>

            <input
              type="text"
              placeholder="Enter title"
              className="w-full p-3 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
            />

            <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-4 py-2 rounded-xl">
              Save
            </button>
          </div>

          <div className="mt-[23] flex gap-3">
            <button className="bg-[#340555] text-white px-4 py-2 text-base  font-semibold rounded-[10px]">
              Reset Appearence
            </button>
            <button className="bg-[#01BEED] text-white px-4 py-2 text-base  font-semibold rounded-[10px]">
              Save Changes
            </button>
          </div>
        </div>

        <ChatbotDummy
          chatbotSettings={{
            title_value: "Test Chatbot",
            title_is_active: true,
            welcome_message_value: "Hi, How are you?",
            welcome_message_is_active: true,
            suggestions_value: "This is a suggestion",
            suggestions_is_active: true,
            placeholder_value: "Ask me anything...",
            placeholder_is_active: true,
            lead_collection: false,
            send_button_color: "#135de8",
            // chat_icon: "#135de8",
            chat_icon_color: "#135de8",
            user_message_bg: "#135de8",
            // image: "string",
            dots_color: "#135de8",
            message_bg: "#c2c2c2",
            live_message_bg: "#135de8",
          }}
        />
      </div>
    </div>
  );
};

export default ChatbotAppearence;
