"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const ChatbotSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[260px]  bg-black text-white p-4 flex flex-col gap-6  rounded-tl-[58px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[58px]">
      {/* Section: Overview */}
      <div>
        <div className="mob-show mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>
        <p className="text-white text-sm flex items-center gap-2 font-light">
          <Image
            className=""
            alt="alt"
            src="/images/dashboard.png"
            height={20}
            width={20}
          />{" "}
          <Link
            href="/chatbot-dashboard/overview"
            className={`${
              pathname === "/chatbot-dashboard/overview" ? "text-[#01BEED]" : ""
            }`}
          >
            Overview
          </Link>
        </p>
      </div>

      {/* Section: Activity */}
      <div className="flex flex-col gap-3">
        <p className="text-gray-400">Activity</p>
        <p
          className={`flex items-center gap-2 ${
            pathname === "/chatbot-dashboard/chat-history"
              ? "text-[#01BEED]"
              : ""
          }`}
        >
          <RiChatHistoryFill />
          <Link href="/chatbot-dashboard/chat-history">Chat logs</Link>
          {pathname === "/chatbot-dashboard/chat-history" ? (
            <BiSolidRightArrow />
          ) : null}
        </p>
        <p
          className={`flex items-center gap-2 ${
            pathname === "/chatbot-dashboard/chat-leads" ? "text-[#01BEED]" : ""
          }`}
        >
          <FaUserClock />
          <Link href="/chatbot-dashboard/chat-leads">Leads</Link>
          {pathname === "/chatbot-dashboard/chat-leads" ? (
            <BiSolidRightArrow />
          ) : null}
        </p>
      </div>

      {/* Section: Training Data */}
      <div className="flex flex-col gap-3">
        <p className="text-gray-400">Training Data</p>
        <p
          className={`flex items-center gap-2 ${
            pathname === "/chatbot-dashboard/links-docs" ? "text-[#01BEED]" : ""
          }`}
        >
          <MdOutlineDatasetLinked />
          <Link href="/chatbot-dashboard/links-docs">Data Input</Link>
          {pathname === "/chatbot-dashboard/links-docs" ? (
            <BiSolidRightArrow />
          ) : null}
        </p>
        <p
          className={`flex items-center gap-2 ${
            pathname === "/chatbot-dashboard/texts" ? "text-[#01BEED]" : ""
          }`}
        >
          <RxUpload />
          <Link href="/chatbot-dashboard/texts">Content Upload</Link>
          {pathname === "/chatbot-dashboard/texts" ? (
            <BiSolidRightArrow />
          ) : null}
        </p>
        <p
          className={`flex items-center gap-2 ${
            pathname === "/chatbot-dashboard/faqs" ? "text-[#01BEED]" : ""
          }`}
        >
          <HiOutlineChatBubbleBottomCenterText />
          <Link href="/chatbot-dashboard/faqs">FAQs</Link>
          {pathname === "/chatbot-dashboard/faqs" ? (
            <BiSolidRightArrow />
          ) : null}
        </p>
      </div>

      {/* Section: Behaviour */}
      <div className="flex flex-col gap-3">
        <p className="text-gray-400">Behaviour</p>
        <p
          className={`flex items-center gap-2 ${
            pathname === "/chatbot-dashboard/ai" ? "text-[#01BEED]" : ""
          }`}
        >
          <AiOutlineDeploymentUnit />
          <Link href="/chatbot-dashboard/ai">Response Tuning</Link>
          {pathname === "/chatbot-dashboard/ai" ? <BiSolidRightArrow /> : null}
        </p>
      </div>

      {/* Section: Deployment */}
      <div className="flex flex-col gap-3">
        <p className="text-gray-400">Deployment</p>
        <p
          className={`flex items-center gap-2 ${
            pathname === "/chatbot-dashboard/appearence" ? "text-[#01BEED]" : ""
          }`}
        >
          <MdOutlineSettingsRemote />
          <Link href="/chatbot-dashboard/appearence">Visual Setting</Link>
          {pathname === "/chatbot-dashboard/appearence" ? (
            <BiSolidRightArrow />
          ) : null}
        </p>
        <p
          className={`flex items-center gap-2 ${
            pathname === "/chatbot-dashboard/deploy" ? "text-[#01BEED]" : ""
          }`}
        >
          <PiUploadFill />
          <Link href="/chatbot-dashboard/deploy">Launch Setting</Link>
          {pathname === "/chatbot-dashboard/deploy" ? (
            <BiSolidRightArrow />
          ) : null}
        </p>
      </div>

      {/* Section: Advance */}
      <div className="flex flex-col gap-3">
        <p className="text-gray-400">Advance</p>
        <p
          className={`flex items-center gap-2 ${
            pathname === "/chatbot-dashboard/integration"
              ? "text-[#01BEED]"
              : ""
          }`}
        >
          <MdOutlineCastConnected />
          <Link href="/chatbot-dashboard/integration">Connect Apps</Link>
          {pathname === "/chatbot-dashboard/integration" ? (
            <BiSolidRightArrow />
          ) : null}
        </p>
        <p
          className={`flex items-center gap-2 ${
            pathname === "/chatbot-dashboard/settings" ? "text-[#01BEED]" : ""
          }`}
        >
          <FiSettings />
          <Link href="/chatbot-dashboard/settings">Settings Preferences</Link>
          {pathname === "/chatbot-dashboard/settings" ? (
            <BiSolidRightArrow />
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default ChatbotSidebar;
