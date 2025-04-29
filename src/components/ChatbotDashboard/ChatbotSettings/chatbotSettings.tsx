import React from "react";

const ChatbotSettings = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold my-[24] ">Settings</h2>

      <div className="bg-[#312d63] min-h-screen p-4 w-[675px] rounded-[38px] mb-5">
        <div className="w-full  py-[50] ">
          {/* Basic Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-5">
            <div className="bg-black text-white px-4 py-2 font-bold text-[22px]">
              Basic
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between text-sm font-light text-black">
                <label>Enter the name of your bot</label>
                <div className="flex items-center gap-1 text-xs">
                  <span className="font-bold">Public</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-black transition duration-300"></div>
                    <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
                  </label>
                </div>
              </div>
              <input
                type="text"
                placeholder="Jhon Doe"
                className=" px-4 py-2 rounded-full bg-[#D9D9D9] text-sm focus:outline-none text-[#727272] placeholder-[#727272]"
              />
              <div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 text-sm font-bold rounded-[10px]">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-5">
            <div className="bg-black  text-white px-4 py-2 font-bold text-[22px]">
              Security
            </div>
            <div className="p-4 space-y-4 font-light text-gray-700 text-base">
              <div className="flex justify-between items-center">
                <span>
                  Allow these domains only to add the chatbot to their website
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-9 h-5 bg-black rounded-full peer peer-checked:bg-black transition duration-300"></div>
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <span>Enable rate limiting</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-black transition duration-300"></div>
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-full transition duration-300"></div>
                </label>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 text-sm font-bold rounded-[10px]">
                Save
              </button>
            </div>
          </div>

          {/* Delete Account Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-5">
            <div className="bg-black text-white px-4 py-2 font-bold text-[22px]">
              Delete Account
            </div>
            <div className="p-4 space-y-4 text-base text-black  font-light">
              <p>
                Deleting a bot is a permanent action that cannot be reversed.
                Deleting the bot will delete all documents indexed against it
                and all history.
              </p>
              <input
                type="text"
                placeholder="Jhon Doe"
                className="px-4 py-2 rounded-full bg-[#D9D9D9] text-sm focus:outline-none text-[#727272] placeholder-[#727272]"
              />
              <div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 text-sm font-bold rounded-[10px]">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* email branding Section */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-5">
            <div className="bg-black text-white px-4 py-2 font-bold text-[22px]">
              Email Branding
            </div>
            <div className="p-4 space-y-4 text-base text-black  font-light">
              <p>
                Email branding and removing chatbots branding is not available
                on your plan
              </p>

              <div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 text-sm font-bold rounded-[10px]">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>

            {/* Custom Domain Section */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-5">
            <div className="bg-black text-white px-4 py-2 font-bold text-[22px]">
            Custom Domain
            </div>
            <div className="p-4 space-y-4 text-base text-black  font-light">
              <p>
              Custom domains ar not available on your plan
              </p>

              <div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-1.5 text-sm font-bold rounded-[10px]">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSettings;
