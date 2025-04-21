"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
import { getMeData, logoutUser } from "@/store/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";

const AdminSidebar = ({ adminPage }: { adminPage: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleLogOut = () => {
    dispatch(logoutUser({ router }));
  };
  return (
    <aside className="w-[294px] bg-[#081028]   flex flex-col gap-2 rounded-tl-[15px] rounded-bl-[15px]">
      <h2 className="text-xl font-semibold text-center my-[40px]">Logo</h2>
      <div className="relative px-4">
        <Image
          className="absolute left-8 top-1/2 transform -translate-y-1/2"
          alt="search icon"
          src="/images/search2.png"
          height={16}
          width={16}
        />
        <input
          type="text"
          placeholder="Search for..."
          className="w-full py-[15px] pl-10 pr-3 rounded-[26px] bg-[#0B1739] placeholder-[#AEB9E1] text-sm font-medium focus:outline-none text-[#AEB9E1] border border-[#343B4F] shadow-[0px_2px_4px_0px_#01051133]"
        />
      </div>

      <nav className="flex flex-col gap-2 px-4 mt-[30px] shadow-2xl shadow-[#0105114D] rounded-md">
        <Link
          href="/admin/dashboard"
          className={`flex items-center text-sm font-medium gap-2 px-3 py-[10px]  ${
            adminPage === "dashboard" ? "text-[#CB3CFF]" : ""
          } rounded-[15px]`}
        >
          <RiDashboardHorizontalFill size={25} />

          <span>Dashboard</span>
        </Link>
        <Link
          href="/admin/overview"
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-sm ${
            adminPage === "overview" ? "text-[#CB3CFF]" : ""
          }  text-[#767F9C]`}
        >
          <GrOverview size={25} />
          <span>Overview</span>
        </Link>
        <Link
          href="/admin/users-management"
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-sm  ${
            adminPage === "users-management" ? "text-[#CB3CFF]" : ""
          }`}
        >
          <HiUsers size={25} />
          <span>Users Management</span>
        </Link>
        <Link
          href="/admin/subscription-plans"
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${
            adminPage === "subscription-plans" ? "text-[#CB3CFF]" : ""
          }  text-sm text-[#767F9C]`}
        >
          <MdOutlineSubscriptions size={25} />
          <span>Subscription Plans</span>
        </Link>
        <Link
          href="/admin/token-analytics"
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${
            adminPage === "token-analytics" ? "text-[#CB3CFF]" : ""
          } text-[#767F9C] text-sm`}
        >
          <IoAnalyticsSharp size={25} />

          <span>Token Analytics</span>
        </Link>
        <Link
          href="/admin/product-monitoring"
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${
            adminPage === "product-monitoring" ? "text-[#CB3CFF]" : ""
          } text-[#767F9C] text-sm`}
        >
          <FaWatchmanMonitoring size={25} />
          <span>Product Monitoring</span>
        </Link>

        <Link
          href="/admin/logs-activity"
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${
            adminPage === "logs-activity" ? "text-[#CB3CFF]" : ""
          } text-[#767F9C] text-sm`}
        >
          <LuActivity size={25} />
          <span>Logs & Activity</span>
        </Link>
        <Link
          href="/admin/billing-settings"
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${
            adminPage === "billing-settings" ? "text-[#CB3CFF]" : ""
          } text-[#767F9C] text-sm`}
        >
          <MdSettingsAccessibility size={25} />

          <span>Billing Settings</span>
        </Link>
        <Link
          href="/admin/users-roles"
          className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${
            adminPage === "users-roles" ? "text-[#CB3CFF]" : ""
          } text-[#767F9C] text-sm`}
        >
          <FaUsers size={25} />
          <span>Admin Users & Roles</span>
        </Link>

        <Link
          href="/signin"
          className="flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
          onClick={() => handleLogOut()}
        >
          <div className="flex gap-3">
            <LuLogOut size={25} />
            <span>Logout</span>
          </div>

          <Image
            alt="alt"
            src="/images/right-icon.png"
            height={12}
            width={12}
          />
        </Link>
        <Link
          href="/admin/pricing"
          className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${
            adminPage === "pricing" ? "text-[#CB3CFF]" : ""
          } text-[#767F9C] text-sm`}
        >
          <div className="flex gap-3">
            <IoMdPricetags size={25} />
            <span>Pricing</span>
          </div>

          <Image
            alt="alt"
            src="/images/right-icon.png"
            height={12}
            width={12}
          />
        </Link>
      </nav>
      <hr className="border-b border-[#FFFFFF]"></hr>

      <Link
        href="/admin/settings"
        className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${
          adminPage === "settings" ? "text-[#CB3CFF]" : ""
        } text-[#767F9C] text-sm`}
      >
        <div className="flex gap-3">
          <IoSettingsSharp size={25} />
          <span>Settings</span>
        </div>

        <Image alt="alt" src="/images/right-icon.png" height={12} width={12} />
      </Link>

      <Link
        href="/admin/account-settings"
        className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${
          adminPage === "account-settings" ? "text-[#CB3CFF]" : ""
        } text-white text-sm`}
      >
        <div className="flex gap-3">
          {" "}
          <Image alt="alt" src="/images/men.png" height={32} width={32} />
          <span>
            John Carter <br></br>{" "}
            <span className="text-[#AEB9E1] text-xs ">Account settings</span>
          </span>
        </div>

        <Image alt="alt" src="/images/right-icon.png" height={12} width={12} />
      </Link>
    </aside>
  );
};

export default AdminSidebar;
