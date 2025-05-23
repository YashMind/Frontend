"use client"
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import SidebarProducts from "@/components/ChatbotProducts/SidebarProducts/sidebarProducts";
import ProfileProducts from "@/components/ChatbotProducts/ProfileProducts/profileProducts";
import PreferenceProducts from "@/components/ChatbotProducts/PreferenceProducts/preferenceProducts";
import HelpProducts from "@/components/ChatbotProducts/HelpProducts/helpProducts";
import TeamProducts from "@/components/ChatbotProducts/TeamProducts/teamProducts";
import SettingProducts from "@/components/ChatbotProducts/SettingProducts/settingProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { AppDispatch } from "@/store/store";
import { getAllBotProducts } from "@/store/slices/admin/adminSlice";

const ChatbotProducts = ({ product }: { product: string }) => {

  const dispatch = useDispatch<AppDispatch>()
  // const { botProducts } = useSelector((state) => state.);
  useEffect(() => {
    dispatch(getAllBotProducts({}))
  }, [])
  return (
    <div className="bg-[#2F0448] h-screen">+
      {/* header */}
      <ChatbotHeader fix={false} addBgColor={true} />
      {/* sidebar */}
      <div className="bg-[#1E1B3A] text-white min-h-screen flex m-[10px] pb-[10px]">
        {/* Sidebar */}
        <SidebarProducts productMenu={product} />

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6 bg-[#2B255C] ml-[8px]">
          {/* Profile Section */}
          {product === "profile" ? <ProfileProducts /> : null}

          {/* Preferences */}
          {product === "preference" ? <PreferenceProducts /> : null}

          {/* help and suport */}
          {product === "help" ? <HelpProducts /> : null}

          {/* Team */}
          {product === "team" ? <TeamProducts /> : null}

          {/* Settings */}
          {product === "settings" ? <SettingProducts /> : null}
        </main>
      </div>
    </div>
  );
};

export default ChatbotProducts;
