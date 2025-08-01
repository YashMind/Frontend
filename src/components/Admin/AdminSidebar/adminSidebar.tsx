"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
import { SiEnterprisedb } from "react-icons/si";
import { GiSatelliteCommunication } from "react-icons/gi";
import { logoutUser } from "@/store/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import ConfirmDeleteModal from "@/components/DeleteConfirmationModal";
import { formatName } from "@/services/utils/helpers";
import { RiDashboardHorizontalFill } from "react-icons/ri";


const menuItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: <RiDashboardHorizontalFill size={25} />, key: "dashboard" },
  { label: "Overview", path: "/admin/overview", icon: <GrOverview size={25} />, key: "overview" },
  { label: "client management", path: "/admin/users-management", icon: <HiUsers size={25} />, key: "users-management" },
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

export const accessPoints = [
  {
    label: "Overview",
    icon: <GrOverview size={25} />,
    link: '/admin/overview',
    value: 'overview'
  },
  {
    label: "Cilent Management",
    icon: <HiUsers size={25} />,
    link: '/admin/users-management',
    value: 'users-management'
  }, {
    label: "Subscription plans",
    icon: <MdOutlineSubscriptions size={25} />,
    link: '/admin/subscription-plans',
    value: 'subscription-plans'
  }, {
    label: "Token Analytics",
    icon: <IoAnalyticsSharp size={25} />,
    link: '/admin/token-analytics',
    value: 'token-analytics'
  }, {
    label: "Product Monitoring",
    icon: <FaWatchmanMonitoring size={25} />,
    link: '/admin/product-monitoring',
    value: 'product-monitoring'
  }, {
    label: "Logs & Activity",
    icon: <LuActivity size={25} />,
    link: '/admin/logs-activity',
    value: 'logs-activity'
  }, {
    label: "Enterprise Clients",
    icon: <SiEnterprisedb size={25} />,
    link: '/admin/enterprise-clients',
    value: 'enterprise-clients'
  }, {
    label: "Billing Settings",
    icon: <MdSettingsAccessibility size={25} />,
    link: '/admin/billing-settings',
    value: 'billing-settings',
    mandatory_role: ["super admin"]
  }, {
    label: "Admin Users & Roles",
    icon: <FaUsers size={25} />,
    link: '/admin/users-roles',
    value: 'users-roles'
  }, {
    label: "Support & Communication",
    icon: <GiSatelliteCommunication size={25} />,
    link: '/admin/support-communication',
    value: 'support-communication'
  }
]


const AdminSidebar = ({ adminPage }: { adminPage: string }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { myPermissions, permissionsLoading } = useSelector((state: RootState) => state.admin)
  const userData: UserProfileData = useSelector(
    (state: RootState) => state.auth.userData
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmDelete = async () => {
    await dispatch(logoutUser({ router }));

  };

  return (
    <aside className="w-[294px] bg-[#081028]   flex flex-col gap-2 rounded-tl-[15px] rounded-bl-[15px]">
      <h2 className="text-xl font-semibold text-center my-[40px]">
        <Image
          alt="alt"
          src="/images/yash-removebg-preview.png"
          height={150}
          width={150}
          unoptimized
          className="ml-10"
        />

      </h2>
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Log out Account?"
        message={`Are you sure you want to Logout your Account?`}
      />
      <nav className="flex flex-col gap-2 px-4 mt-[30px] shadow-2xl shadow-[#0105114D] rounded-md">

        {permissionsLoading ? (
          <div className="animate-pulse space-y-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-14 bg-[#1c1e2e] rounded w-4/4"></div>
            ))}
          </div>
        ) : myPermissions ? (
          accessPoints.map((item) => {
            if (myPermissions.includes(item.value))
              return (
                <Link
                  key={item.value}
                  href={`/admin/${item.value}`}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${adminPage === item.value ? "text-[#CB3CFF]" : ""
                    } text-[#767F9C] text-sm`}
                >
                  {item.icon}
                  <span className="ml-4">{item.label}</span>
                </Link>
              );
          })
        ) : (
          <h2>No Permissions found</h2>
        )}


        <button
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer w-full text-left flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
        >
          <div className="flex items-center gap-6">
            <LuLogOut size={25} />
            <span>Logout</span>
          </div>
          <Image
            alt="alt"
            src="/images/right-icon.png"
            height={12}
            width={12}
          />
        </button>
      </nav>
      <hr className="border-b border-[#FFFFFF]" />
      <Link
        href=""
        className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${adminPage === "account-settings" ? "text-[#CB3CFF]" : ""
          } text-white text-sm`}
      >
        <div className="flex items-center gap-3 ml-4">
          <Image alt="User" src="/images/user1.png" height={32} width={32} />
          <span>
            {userData?.fullName ? formatName(userData.fullName) : ""} <br />
            {/* <span className="text-[#AEB9E1] text-xs">Account settings</span> */}
          </span>
        </div>
      </Link>
    </aside>
  );
};

export default AdminSidebar;
