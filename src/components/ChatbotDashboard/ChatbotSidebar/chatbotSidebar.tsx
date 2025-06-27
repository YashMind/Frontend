"use client";
import React from "react";
import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import {
  MdOutlineDatasetLinked,
  MdOutlineSettingsRemote,
  MdOutlineCastConnected,
} from "react-icons/md";
import { FaUserClock } from "react-icons/fa";
import { RxUpload } from "react-icons/rx";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { PiUploadFill, PiSquaresFourBold } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { RiChatHistoryFill } from "react-icons/ri";

interface SidebarLink {
  label: string;
  icon: React.ReactNode;
  path: string;
  key: string;
}

interface SidebarSection {
  title?: string;
  links: SidebarLink[];
}

const sidebarSections: SidebarSection[] = [
  {
    links: [
      {
        label: "All Chatbots list",
        icon: <PiSquaresFourBold size={20} />,
        path: "main",
        key: "main",
      },
    ],
  }, {
    links: [
      {
        label: "Overview",
        icon: <PiSquaresFourBold size={20} />,
        path: "overview",
        key: "overview",
      },
    ],
  }, {
    title: "Training Data",
    links: [
      {
        label: "Content Upload",
        icon: <MdOutlineDatasetLinked size={20} />,
        path: "links-docs",
        key: "links-docs",
      },
      {
        label: "Data Input",
        icon: <RxUpload size={20} />,
        path: "texts",
        key: "texts",
      },
      {
        label: "FAQs",
        icon: <HiOutlineChatBubbleBottomCenterText size={20} />,
        path: "faqs",
        key: "faqs",
      },
    ],
  }, {
    title: "Behaviour",
    links: [
      {
        label: "Response Tuning",
        icon: <AiOutlineDeploymentUnit size={20} />,
        path: "ai",
        key: "ai",
      },
    ],
  },
  {
    title: "Activity",
    links: [
      {
        label: "Chat logs",
        icon: <RiChatHistoryFill size={20} />,
        path: "chat-history",
        key: "chat-history",
      },
      {
        label: "Leads",
        icon: <FaUserClock size={20} />,
        path: "chat-leads",
        key: "chat-leads",
      },
    ],
  },


  {
    title: "Deployment",
    links: [
      {
        label: "Visual Setting",
        icon: <MdOutlineSettingsRemote size={20} />,
        path: "appearence",
        key: "appearence",
      },
      {
        label: "Launch Setting",
        icon: <PiUploadFill size={20} />,
        path: "deploy",
        key: "deploy",
      },
    ],
  },
  {
    title: "Advance",
    links: [
      {
        label: "Connect Apps",
        icon: <MdOutlineCastConnected size={20} />,
        path: "integration",
        key: "integration",
      },
      {
        label: "Settings Preferences",
        icon: <FiSettings size={20} />,
        path: "settings",
        key: "settings",
      },
    ],
  },
];

const ChatbotSidebar = ({
  botPage,
  botId,
}: {
  botPage?: string;
  botId?: number;
}) => {
  const renderLink = (link: SidebarLink) => {
    const isActive = botPage === link.key;
    return (
      <Link
        key={link.key}
        href={`/chatbot-dashboard/${link.path}/${botId}`}
        className={`flex items-center gap-3 text-sm font-medium py-2 px-3 rounded-lg transition-all
          ${isActive
            ? "bg-[#1C1C1C] text-[#01BEED] font-semibold"
            : "text-gray-300 hover:bg-[#2A2A2A] hover:text-white"
          }`}
      >
        {link.icon}
        <span>{link.label}</span>
        {isActive && (
          <BiSolidRightArrow className="ml-auto animate-pulse text-[#01BEED]" />
        )}
      </Link>
    );
  };

  return (
    <div className="w-[260px] bg-black text-white p-5 flex flex-col gap-8 rounded-tl-[58px] rounded-bl-[58px]">
      {sidebarSections.map(({ title, links }, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {title && (
            <p className="text-xs uppercase text-gray-500 tracking-wide pl-2">
              {title}
            </p>
          )}
          <div className="flex flex-col gap-1">{links.map(renderLink)}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatbotSidebar;
