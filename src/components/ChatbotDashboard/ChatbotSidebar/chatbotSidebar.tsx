"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiChatHistoryFill } from "react-icons/ri";
import { FaUserClock } from "react-icons/fa";
import { MdOutlineDatasetLinked } from "react-icons/md";
import { RxUpload } from "react-icons/rx";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { MdOutlineSettingsRemote } from "react-icons/md";
import { PiUploadFill } from "react-icons/pi";
import { MdOutlineCastConnected } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

const ChatbotSidebar = ({botPage, botId}:{botPage?: string, botId?: number}) => {
  return (
    <div className="w-[400px] lg:w-[260px] bg-black text-white p-4 flex flex-col gap-6 rounded-tl-[58px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[58px]">
      {/* Section: Overview */}
      <div>
        <p className="text-white text-sm flex items-center gap-2 font-light">
          <Image
            className=""
            alt="alt"
            src="/images/dashboard.png"
            height={20}
            width={20}
          />{" "}
          <Link href={`/chatbot-dashboard/overview/${botId}`} className={`${botPage==="overview" ? "text-[#01BEED]":""}`}>Overview</Link>
        </p>
      </div>

      {/* Section: Activity */}
      <div className="flex flex-col gap-3">
        <p className="text-gray-400">Activity</p>
        <p className={`flex items-center gap-2 text-xs font-light ${botPage==="chat-history" ? "text-[#01BEED]":""}`}>
         <RiChatHistoryFill />
          <Link className="text-xs font-light" href={`/chatbot-dashboard/chat-history/${botId}`}>Chat logs</Link>
          {botPage==="chat-history" ? <BiSolidRightArrow /> : null }
        </p>
        <p className={`flex items-center gap-2 text-xs font-light ${botPage==="chat-leads" ? "text-[#01BEED]":""}`}>
          <FaUserClock /> 
          <Link className="text-xs font-light" href={`/chatbot-dashboard/chat-leads/${botId}`}>Leads</Link>
          {botPage==="chat-leads" ?  <BiSolidRightArrow /> : null }
        </p>
      </div>

      {/* Section: Training Data */}
      <div className="flex flex-col gap-3 text-[13px]">
        <p className="text-gray-400">Training Data</p>
        <p className={`flex items-center gap-2 ${botPage==="links-docs" ? "text-[#01BEED]":""}`}>
        <MdOutlineDatasetLinked />
        <Link className="text-xs font-light" href={`/chatbot-dashboard/links-docs/${botId}`}>Data Input</Link>
        {botPage==="links-docs" ?  <BiSolidRightArrow /> : null }
        </p>
        <p className={`flex items-center gap-2 text-xs font-light ${botPage==="texts" ? "text-[#01BEED]":""}`}>
        <RxUpload /> 
        <Link className="text-xs font-light" href={`/chatbot-dashboard/texts/${botId}`}>Content Upload</Link>
        {botPage==="texts" ?  <BiSolidRightArrow /> : null }
        </p>
        <p className={`flex items-center gap-2 text-xs font-light ${botPage==="faqs" ? "text-[#01BEED]":""}`}>
        <HiOutlineChatBubbleBottomCenterText />
        <Link className="text-xs font-light" href={`/chatbot-dashboard/faqs/${botId}`}>FAQs</Link>
        {botPage==="faqs" ?  <BiSolidRightArrow /> : null }
        </p>
      </div>

      {/* Section: Behaviour */}
      <div className="flex flex-col gap-3 text-[13px]">
        <p className="text-gray-400">Behaviour</p>
        <p className={`flex items-center gap-2 text-xs font-light ${botPage==="ai" ? "text-[#01BEED]":""}`}>
        <AiOutlineDeploymentUnit />
        <Link className="text-xs font-light" href={`/chatbot-dashboard/ai/${botId}`}>Response Tuning</Link>
        {botPage==="ai" ?  <BiSolidRightArrow /> : null }
        </p>
      </div>

      {/* Section: Deployment */}
      <div className="flex flex-col gap-3 text-[13px]">
        <p className="text-gray-400">Deployment</p>
        <p className={`flex items-center gap-2 text-xs font-light ${botPage==="appearence" ? "text-[#01BEED]":""}`}>
        <MdOutlineSettingsRemote />
        <Link className="text-xs font-light" href={`/chatbot-dashboard/appearence/${botId}`}>Visual Setting</Link>
        {botPage==="appearence" ?  <BiSolidRightArrow /> : null }
        </p>
        <p className={`flex items-center gap-2 text-xs font-light ${botPage==="deploy" ? "text-[#01BEED]":""}`}>
        <PiUploadFill />
        <Link className="text-xs font-light" href={`/chatbot-dashboard/deploy/${botId}`}>Launch Setting</Link>
        {botPage==="deploy" ?  <BiSolidRightArrow /> : null }
        </p>
      </div>

      {/* Section: Advance */}
      <div className="flex flex-col gap-3">
        <p className="text-gray-400">Advance</p>
        <p className={`flex items-center gap-2 text-xs font-light ${botPage==="integration" ? "text-[#01BEED]":""}`}>
        <MdOutlineCastConnected />
        <Link className="text-xs font-light" href={`/chatbot-dashboard/integration/${botId}`}>Connect Apps</Link>
        {botPage==="integration" ?  <BiSolidRightArrow /> : null }
        </p>
        <p className={`flex items-center gap-2 text-xs font-light ${botPage==="settings" ? "text-[#01BEED]":""}`}>
        <FiSettings />
        <Link className="text-xs font-light" href={`/chatbot-dashboard/settings/${botId}`}>Settings Preferences</Link>
        {botPage==="settings" ?  <BiSolidRightArrow /> : null }

        </p>
      </div>
    </div>
  );
};

export default ChatbotSidebar;
