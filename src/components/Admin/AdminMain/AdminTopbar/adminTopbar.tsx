"use client";
import { formatName } from "@/services/utils/helpers";
import { RootState } from "@/store/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

interface AdminTopbarProps {
  allUsersData: AdminAllUsers;
}

const AdminTopbar = ({ allUsersData }: AdminTopbarProps) => {
  const userData: UserProfileData = useSelector(
    (state: RootState) => state.auth.userData
  );

  const metrics = [
    {
      label: "Total users",
      icon: "/images/user.png",
      value: allUsersData?.total_count,
      changeIcon: "/images/top-arrow.png",
      changeColor: "#14CA74",
      bgColor: "#05C16833",
      borderColor: "#05C16833",
    },
    {
      label: "Tokens Consumed This Month",
      icon: "/images/Views-icon.png",
      value: allUsersData?.tokens_consumed ?? 0,
      changeIcon: "/images/arrow-down.png",
      changeColor: "#FF5A65",
      bgColor: "#FF5A6533",
      borderColor: "#FF5A6533",
    },
    {
      label: "New sign ups",
      icon: "/images/add.png",
      value: allUsersData?.total_signups,
      changeIcon: "/images/top-arrow.png",
      changeColor: "#14CA74",
      bgColor: "#05C16833",
      borderColor: "#05C16833",
    },
    {
      label: "Subscriptions",
      icon: "/images/Features-Icon.png",
      value: allUsersData?.total_subscriptions ?? 0,
      changeIcon: "/images/top-arrow.png",
      changeColor: "#14CA74",
      bgColor: "#05C16833",
      borderColor: "#05C16833",
    },
  ];

  const MetricCard = ({
    label,
    icon,
    value,
    changeIcon,
    changeColor,
    bgColor,
    borderColor,
  }: (typeof metrics)[0]) => (
    <div className="bg-[#0B1739] p-[18] rounded-lg shadow-md border border-[#343B4F]">
      <div className="flex items-center justify-between text-sm text-gray-400 mb-2 font-medium ">
        <span className="flex items-center gap-2">
          <Image alt="icon" src={icon} height={12} width={12} />
          {label}
        </span>
        <span className="text-white">•••</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-2xl font-semibold">{value}</div>
        <div
          className="text-sm flex items-center px-[4] py-[2] rounded-[2px]"
          style={{
            color: changeColor,
            backgroundColor: bgColor,
            border: `1px solid ${borderColor}`,
          }}
        >
          <span>
            <Image alt="change" src={changeIcon} height={8} width={8} />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="ml-10 text-2xl font-semibold mt-[40px]">
        Welcome back,{" "}
        {userData?.fullName ? formatName(userData.fullName) : ""}
      </h2>
      <p className="ml-10 text-[#AEB9E1] text-xs font-normal">
        Measure your advertising ROI and report website traffic.
      </p>

      {/* cards */}
      <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-[30px]">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default AdminTopbar;
