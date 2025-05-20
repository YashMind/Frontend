"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
import { getMeData, logoutUser } from "@/store/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";

export const accessPoints = [
  {
    label: "Overview",
    icon: <GrOverview size={25} />,
    link: '/admin/overview',
    value: 'overview'
  },
  {
    label: "Users Management",
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
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleLogOut = () => {
    dispatch(logoutUser({ router }));
  };



  const { myPermissions, permissionsLoading } = useSelector((state: RootState) => state.admin)

  return (
    <aside className="w-[294px] bg-[#081028]   flex flex-col gap-2 rounded-tl-[15px] rounded-bl-[15px]">
      <h2 className="text-xl font-semibold text-center my-[40px]">
        <Image
          alt="alt"
          src="/images/yash-removebg-preview.png"
          height={150}
          width={150}
          className="ml-10"
        />
      </h2>
      <nav className="flex flex-col gap-2 px-4 mt-[30px] shadow-2xl shadow-[#0105114D] rounded-md">


        {permissionsLoading ? <div className="animate-pulse">Loading ...</div> : myPermissions ? accessPoints.map((item) => {
          if (myPermissions.includes(item.value))
            return <Link
              href={`/admin/${item.value}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${adminPage === item.value ? "text-[#CB3CFF]" : ""
                } text-[#767F9C] text-sm`}
            >
              {item.icon}
              <span className="ml-4">{item.label}</span>
            </Link>
        }) : <h2>No Permissions found</h2>}

        <Link
          href="/auth/signin"
          className="flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium text-[#767F9C] text-sm"
          onClick={() => handleLogOut()}
        >
          <div className="flex gap-3">
            <LuLogOut size={25} />
            <span className="ml-4">Logout</span>
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
        className={`flex items-center justify-between gap-2 px-3 ml-4 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${adminPage === "settings" ? "text-[#CB3CFF]" : ""
          } text-[#767F9C] text-sm`}
      >
        <div className="flex gap-3">
          <IoSettingsSharp size={25} />
          <span className="ml-4">Settings</span>
        </div>

        <Image alt="alt" src="/images/right-icon.png" height={12} width={12} />
      </Link>

      <Link
        href="/admin/account-settings"
        className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-[#2B1B55] font-medium ${adminPage === "account-settings" ? "text-[#CB3CFF]" : ""
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
