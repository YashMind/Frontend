import Link from "next/link";
import React from "react";
import { IoIosPeople, IoIosStar } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import ProfileSettings from "@/components/settings/profile";
import HelpAndSupport from "@/components/settings/helpAndSupport";
import ChatbotDashboardHeader from "@/components/ChatbotDashboard/ChatbotHeader/chatbotHeader";
import InviteUserClient from "@/components/invite-user/InviteUserClient";
import Chats from "@/components/settings/chats";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <>
      <ChatbotDashboardHeader addBgColor={true} fix={true} />
      <div className="flex items-stretch p-4 h-screen bg-gradient-to-br from-[#1a1440] to-[#2a0e61] pt-44">
        <div className="basis-1/5 rounded-xl bg-white/30 text-white py-4 space-y-3 ">
          <Link
            className={`p-2 flex gap-2 mx-4  ${
              slug === "profile"
                ? " bg-white rounded-lg text-black shadow-md"
                : ""
            }`}
            href={"/settings/profile"}
          >
            {" "}
            <IoPerson size={25} />
            Profile
          </Link>
          <Link
            className={`p-2 flex gap-2 mx-4  ${
              slug === "teams"
                ? " bg-white rounded-lg text-black shadow-md"
                : ""
            }`}
            href={"/settings/teams"}
          >
            <IoIosPeople size={25} />
            Team and Invitations
          </Link>
          <Link
            className={`p-2 flex gap-2 mx-4  ${
              slug === "help" ? " bg-white rounded-lg text-black shadow-md" : ""
            }`}
            href={"/settings/help"}
          >
            <BsQuestionCircleFill size={25} />
            Help and Support
          </Link>
          <Link
            className={`p-2 flex gap-2 mx-4  ${
              slug === "chats"
                ? " bg-white rounded-lg text-black shadow-md"
                : ""
            }`}
            href={"/settings/chats"}
          >
            <FaGear size={25} />
            Settings
          </Link>
        </div>
        <div className="basis-4/5 rounded-xl">
          {slug == "profile" && <ProfileSettings />}
          {slug == "help" && <HelpAndSupport />}
          {slug == "teams" && <InviteUserClient />}
          {slug == "chats" && <Chats />}
        </div>
      </div>
    </>
  );
};

export default page;
