import Link from "next/link";
import React from "react";
import { IoIosPeople } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";
import ProfileSettings from "@/components/settings/profile";
import HelpAndSupport from "@/components/settings/helpAndSupport";
import ChatbotDashboardHeader from "@/components/ChatbotDashboard/ChatbotHeader/chatbotHeader";
import InviteUserClient from "@/components/invite-user/InviteUserClient";
import Chats from "@/components/settings/chats";
import NoticesAndAnnouncements from "@/components/settings/notices";
import { cookies } from "next/headers";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value;
  return (
    <div className="h-full min-h-screen">
      <ChatbotDashboardHeader addBgColor={true} fix={true} role={role} />
      <div className="flex flex-col lg:flex-row items-stretch p-2 sm:p-4 bg-gradient-to-br from-[#1a1440] to-[#2a0e61] min-h-screen">
        {/* Sidebar - becomes horizontal on small screens */}
        <div className="lg:basis-1/5 mt-18 rounded-xl bg-white/30 text-white py-2 lg:py-4 space-y-1 lg:space-y-3 mb-4 lg:mb-0 lg:sticky lg:top-16 overflow-y-auto">
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-1 lg:gap-3 px-1 lg:px-0">
            <Link
              className={`p-2 flex gap-2 items-center justify-center lg:justify-start lg:mx-4 whitespace-nowrap ${slug === "profile"
                ? " bg-white rounded-lg text-black shadow-md"
                : ""
                }`}
              href={"/settings/profile"}
            >
              <IoPerson size={20} className="lg:size-[25px]" />
              <span className="text-sm lg:text-base">Profile</span>
            </Link>
            <Link
              className={`p-2 flex gap-2 items-center justify-center lg:justify-start lg:mx-4 whitespace-nowrap ${slug === "teams"
                ? " bg-white rounded-lg text-black shadow-md"
                : ""
                }`}
              href={"/settings/teams"}
            >
              <IoIosPeople size={20} className="lg:size-[25px]" />
              <span className="text-sm lg:text-base">Team</span>
            </Link>
            <Link
              className={`p-2 flex gap-2 items-center justify-center lg:justify-start lg:mx-4 whitespace-nowrap ${slug === "notice"
                ? " bg-white rounded-lg text-black shadow-md"
                : ""
                }`}
              href={"/settings/notice"}
            >
              <IoIosPeople size={20} className="lg:size-[25px]" />
              <span className="text-sm lg:text-base">Notice and Announcements</span>
            </Link>
            <Link
              className={`p-2 flex gap-2 items-center justify-center lg:justify-start lg:mx-4 whitespace-nowrap ${slug === "help"
                ? " bg-white rounded-lg text-black shadow-md"
                : ""
                }`}
              href={"/settings/help"}
            >
              <BsQuestionCircleFill size={20} className="lg:size-[25px]" />
              <span className="text-sm lg:text-base">Help</span>
            </Link>
            {/* <Link
              className={`p-2 flex gap-2 items-center justify-center lg:justify-start lg:mx-4 whitespace-nowrap ${slug === "chats"
                ? " bg-white rounded-lg text-black shadow-md"
                : ""
                }`}
              href={"/settings/chats"}
            >
              <FaGear size={20} className="lg:size-[25px]" />
              <span className="text-sm lg:text-base">Settings</span>
            </Link> */}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:basis-4/5 rounded-xl lg:ml-4 mt-16">
          {slug == "profile" && <ProfileSettings />}
          {slug == "notice" && <NoticesAndAnnouncements />}
          {slug == "help" && <HelpAndSupport />}
          {slug == "teams" && <InviteUserClient />}
          {slug == "chats" && <Chats />}
        </div>
      </div>
    </div>
  );
};

export default page;