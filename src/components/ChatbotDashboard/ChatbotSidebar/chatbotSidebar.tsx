"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BiSolidRightArrow, BiMenu, BiX } from "react-icons/bi";
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
        label: "Links and Docs",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const renderLink = (link: SidebarLink, showLabel = true) => {
    const isActive = botPage === link.key;
    return (
      <Link
        key={link.key}
        href={`/chatbot-dashboard/${link.path}/${botId}`}
        onClick={() => setMobileMenuOpen(false)} // Close sidebar when a link is clicked
        className={`flex items-center gap-3 text-sm font-medium py-2 px-3 rounded-lg transition-all
          ${isActive
            ? "bg-[#1C1C1C] text-[#01BEED] font-semibold"
            : "text-gray-300 hover:bg-[#2A2A2A] hover:text-white"
          }`}
      >
        <span className="flex-shrink-0">{link.icon}</span>
        {showLabel && (
          <>
            <span>{link.label}</span>
            {isActive && (
              <BiSolidRightArrow className="ml-auto animate-pulse text-[#01BEED]" />
            )}
          </>
        )}
      </Link>
    );
  };


  return (
    <>
      {/* Mobile menu button */}
      <div className={`${mobileMenuOpen ? "hidden" : "block"} md:hidden absolute top-4 left-4 z-50`}>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 rounded-lg bg-black text-white"
        >
          <BiMenu size={24} />
        </button>
      </div>

      {/* Mobile sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed overflow-auto no-scrollbar inset-y-10 left-0 z-40 w-64 bg-black text-white p-5 flex flex-col gap-2 transform transition-transform duration-300 ease-in-out md:hidden h-screen
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button for mobile sidebar */}
        <div className="flex justify-end z-30">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-gray-300 hover:text-white cursor-pointer"
          >
            <BiX size={24} color="#ffffff" />
          </button>
        </div>

        <div className="overflow-y-auto z-40">
          {sidebarSections.map(({ title, links }, idx) => (
            <div key={idx} className="flex flex-col gap-2 mb-4">
              {title && (
                <p className="text-xs uppercase text-gray-500 tracking-wide pl-2">
                  {title}
                </p>
              )}
              <div className="flex flex-col gap-1">
                {links.map((link) => renderLink(link, true))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medium screen sidebar (icons only) */}
      <div
        className={`hidden lg:hidden  ${hovered ? "md:block left-20 w-fit" : "md:block w-16"} z-20  bg-black p-3 hover:w-64 transition-all duration-300 ease-in-out rounded-2xl `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex flex-col gap-8 h-full overflow-y-auto">
          {sidebarSections.map(({ title, links }, idx) => (
            <div key={idx} className="flex flex-col gap-2 mb-4">
              {hovered && title && (
                <p className="text-xs uppercase text-gray-500 tracking-wide pl-2">
                  {title}
                </p>
              )}
              <div className="flex flex-col gap-1">
                {links.map((link) => renderLink(link, hovered))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Large screen sidebar (full width) */}
      <div className="hidden h-fit lg:static overflow-auto lg:block w-[260px] bg-black text-white p-5  flex-col gap-8 rounded-2xl  left-0 top-0 ">
        {sidebarSections.map(({ title, links }, idx) => (
          <div key={idx} className="flex flex-col gap-2 mb-4">
            {title && (
              <p className="text-xs uppercase text-gray-500 tracking-wide pl-2">
                {title}
              </p>
            )}
            <div className="flex flex-col gap-1">
              {links.map((link) => renderLink(link, true))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatbotSidebar;