"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GrOverview } from "react-icons/gr";
import { HiUsers } from "react-icons/hi2";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaWatchmanMonitoring } from "react-icons/fa6";
import { LuActivity } from "react-icons/lu";
import { MdSettingsAccessibility } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoMdPricetags } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { SiEnterprisedb } from "react-icons/si";
import { GiSatelliteCommunication } from "react-icons/gi";
import { logoutUser } from "@/store/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import ConfirmDeleteModal from "@/components/DeleteConfirmationModal";


const menuItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: <RiDashboardHorizontalFill size={25} />, key: "dashboard" },
  { label: "Overview", path: "/admin/overview", icon: <GrOverview size={25} />, key: "overview" },
  { label: "Users Management", path: "/admin/users-management", icon: <HiUsers size={25} />, key: "users-management" },
  { label: "Subscription Plans", path: "/admin/subscription-plans", icon: <MdOutlineSubscriptions size={25} />, key: "subscription-plans" },
  { label: "Token Analytics", path: "/admin/token-analytics", icon: <IoAnalyticsSharp size={25} />, key: "token-analytics" },
  { label: "Product Monitoring", path: "/admin/product-monitoring", icon: <FaWatchmanMonitoring size={25} />, key: "product-monitoring" },
  { label: "Logs & Activity", path: "/admin/logs-activity", icon: <LuActivity size={25} />, key: "logs-activity" },
  { label: "Enterprise Clients", path: "/admin/enterprise-clients", icon: <SiEnterprisedb size={25} />, key: "enterprise-clients" },
  { label: "Billing Settings", path: "/admin/billing-settings", icon: <MdSettingsAccessibility size={25} />, key: "billing-settings" },
  { label: "Admin Users & Roles", path: "/admin/users-roles", icon: <FaUsers size={25} />, key: "users-roles" },
  { label: "Support & Communication", path: "/admin/support-communication", icon: <GiSatelliteCommunication size={25} />, key: "support-communication" },
  { label: "Pricing", path: "/admin/pricing", icon: <IoMdPricetags size={25} />, key: "pricing", hasArrow: true },
];

const AdminSidebar = ({ adminPage }: { adminPage: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();


  const handleConfirmDelete = async () => {
      await dispatch(logoutUser({ router }));

  };


  return (
    <aside className="w-[294px] bg-[#081028] flex flex-col gap-2 rounded-tl-[15px] rounded-bl-[15px]">
      <div className="text-center my-[40px]">
        <Image alt="Logo" src="/images/yash-removebg-preview.png" height={150} width={150} className="ml-10" />
      </div>
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Log out Account?"
        message={`Are you sure you want to Logout your Account?`}
      />
      <nav className="flex flex-col gap-2 px-4 mt-[30px] shadow-2xl shadow-[#0105114D] rounded-md">
        {menuItems.map(({ label, path, icon, key, hasArrow }) => (
          <Link
            href={path}
            key={key}
            className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-sm ${adminPage === key ? "text-[#CB3CFF]" : "text-[#767F9C]"
              }`}
          >
            <div className="flex items-center gap-3">
              {icon}
              <span>{label}</span>
            </div>
            {hasArrow && (
              <Image alt="arrow" src="/images/right-icon.png" height={12} width={12} />
            )}
          </Link>
        ))}

        <button
          onClick={()=> setIsModalOpen(true)}
          className="flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
        >
          <div className="flex items-center gap-3">
            <LuLogOut size={25} />
            <span>Logout</span>
          </div>
          <Image alt="arrow" src="/images/right-icon.png" height={12} width={12} />
        </button>
      </nav>

      <hr className="border-b border-[#FFFFFF]" />

      <Link
        href="/admin/settings"
        className={`flex items-center justify-between gap-2 px-3 ml-4 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-sm ${adminPage === "settings" ? "text-[#CB3CFF]" : "text-[#767F9C]"
          }`}
      >
        <div className="flex items-center gap-3">
          <IoSettingsSharp size={25} />
          <span>Settings</span>
        </div>
        <Image alt="arrow" src="/images/right-icon.png" height={12} width={12} />
      </Link>

      <Link
        href="/admin/account-settings"
        className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-sm ${adminPage === "account-settings" ? "text-[#CB3CFF]" : "text-white"
          }`}
      >
        <div className="flex items-center gap-3">
          <Image alt="User" src="/images/men.png" height={32} width={32} />
          <span>
            John Carter <br />
            <span className="text-[#AEB9E1] text-xs">Account settings</span>
          </span>
        </div>
        <Image alt="arrow" src="/images/right-icon.png" height={12} width={12} />
      </Link>
    </aside>
  );
};

export default AdminSidebar;
