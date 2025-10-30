"use client";
import { formatName } from "@/services/utils/helpers";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaPlusCircle, FaStar } from "react-icons/fa";
import { TiEye } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";
import MetricDetailsModal from "@/components/DetailsModal";
import { getRecentSignups } from "@/store/slices/auth/authSlice";
import { useRouter } from "next/navigation";
import { useTimezone } from "@/context/TimeZoneContext";
import { formatDate } from "@/components/utils/formatDateTime";
import { AdminAllUsers } from "@/types/adminType";
import { UserProfileData } from "@/types/authType";

interface AdminTopbarProps {
  allUsersData: AdminAllUsers;
}

interface MetricCardProps {
  label: string;
  icon: React.ReactNode;
  value: number;
  changeIcon: React.ReactNode;
  changeColor: string;
  bgColor: string;
  borderColor: string;
  index: number;
  openDropdownIndex: number | null;
  toggleDropdown: (index: number) => void;
  onMoreDetails: () => void;
  route?: string;

}

const MetricCard = ({
  label,
  icon,
  value,
  changeIcon,
  changeColor,
  bgColor,
  borderColor,
  index,
  openDropdownIndex,
  onMoreDetails,
  route
}: MetricCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <div
      className={`relative bg-[#0B1739] p-4 rounded-lg shadow-md border border-[#343B4F] ${route ? 'cursor-pointer hover:border-[#4a5568]' : ''}`}
      onClick={route ? handleCardClick : undefined}
    >
      <div className="flex items-center justify-between text-sm text-gray-400 mb-2 font-medium">
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
      </div>

      {openDropdownIndex === index && (
        <div className="absolute right-4 top-10 bg-white text-black rounded-md shadow-lg px-3 py-2 z-50 text-sm">
          <p className="cursor-pointer hover:underline" onClick={onMoreDetails}>
            More Details
          </p>
        </div>
      )}

      <div className="flex items-center gap-2">
        <div className="text-2xl font-semibold">{value.toLocaleString()}</div>
        {changeIcon && <div
          className="text-sm flex items-center px-[4px] py-[2px] rounded-[2px]"
          style={{
            color: changeColor,
            backgroundColor: bgColor,
            border: `1px solid ${borderColor}`,
          }}
        >
          {changeIcon}
        </div>
        }
      </div>
    </div>
  );
};

const AdminTopbar = ({ allUsersData }: AdminTopbarProps) => {
  const router = useRouter();
  const { timezone, isLoading } = useTimezone();
  const dispatch = useDispatch<AppDispatch>();

  const recentSignupsCount = useSelector(
    (state: RootState) => state.auth.recentSignups?.count ?? 0
  );
  const recentSignups = useSelector(
    (state: RootState) => state.auth.recentSignups?.data ?? []
  );

  const userData: UserProfileData = useSelector(
    (state: RootState) => state.auth.userData!
  );
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [selectedMetric, setSelectedMetric] = useState<{
    label: string;
    value: number;
  } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getRecentSignups());
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const metrics = [
    {
      label: "Total users",
      icon: <FaUser />,
      value: allUsersData?.total_count ?? 0,
      changeIcon: <GoArrowUpRight />,
      changeColor: "#14CA74",
      bgColor: "#05C16833",
      borderColor: "#05C16833",
      route: "/admin/users-management",
    },
    // {
    //   label: "Total Tokens Consumed",
    //   icon: <TiEye size={20} />,
    //   value: allUsersData?.total_tokens_consumed ?? 0, // Changed from monthly_tokens_consumed
    //   changeIcon: <GoArrowUpRight />, // Changed to up arrow assuming total is always growing
    //   changeColor: "#14CA74", // Changed to green
    //   bgColor: "#05C16833", // Changed to green background
    //   borderColor: "#05C16833", // Changed to green border
    // },
    {
      label: "Total Messages Consumed",
      icon: <TiEye size={20} />,
      value: allUsersData?.total_messages_consumed ?? 0, // Changed from monthly_tokens_consumed
      changeIcon: <GoArrowUpRight />, // Changed to up arrow assuming total is always growing
      changeColor: "#14CA74", // Changed to green
      bgColor: "#05C16833", // Changed to green background
      borderColor: "#05C16833", // Changed to green border
      route: "/admin/token-analytics"
    },
    {
      label: "New sign ups",
      icon: <FaPlusCircle />,
      value: recentSignupsCount ?? 0,
      // changeIcon: <GoArrowUpRight />,
      changeColor: "#14CA74",
      bgColor: "#05C16833",
      borderColor: "#05C16833",
      // route:"/admin/users-management"
    },
    {
      label: "Subscriptions",
      icon: <FaStar />,
      value: allUsersData?.total_subscriptions ?? 0,
      // changeIcon: <GoArrowUpRight />,
      changeColor: "#14CA74",
      bgColor: "#05C16833",
      borderColor: "#05C16833",
      // route:"/admin/billing-settings"
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mt-[40px] px-10">
        <h2 className="text-2xl font-semibold">
          Welcome back,{" "}
          {userData?.fullName ? formatName(userData.fullName) : ""}
        </h2>
        <button
          onClick={() => router.push("/chatbot-dashboard/main")}
          className="cursor-pointer bg-[#18B91F] hover:bg-green-600 text-white px-4 py-1 rounded text-xs"
        >
          Back
        </button>
      </div>
      <p className="ml-10 text-[#AEB9E1] text-xs font-normal">
        Measure your advertising ROI and report website traffic.
      </p>

      <div className="ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-[30px]">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            {...metric}
            index={index}
            openDropdownIndex={openDropdownIndex}
            toggleDropdown={toggleDropdown}
            onMoreDetails={() => {
              if (metric.label === "New sign ups") {
                setSelectedMetric({ label: metric.label, value: metric.value });
                setIsOpen(true);
              }
              setOpenDropdownIndex(null);
            }}
          />
        ))}
      </div>

      <MetricDetailsModal
        isOpen={isOpen}
        metricLabel={selectedMetric?.label ?? ""}
        metricValue={selectedMetric?.value ?? 0}
        count={recentSignupsCount}
        onClose={() => setIsOpen(false)}
      >
        {recentSignups.map((user, idx) => (
          <tr key={idx} className="hover:bg-[#1C2B5E]">
            <td className="border border-gray-700 px-4 py-2">
              {user.fullName}
            </td>
            <td className="border border-gray-700 px-4 py-2">{user.email}</td>
            <td className="border border-gray-700 px-4 py-2">
              {!isLoading ? formatDate(user.created_at, timezone) : "-"}
            </td>
          </tr>
        ))}
      </MetricDetailsModal>
    </div>
  );
};

export default AdminTopbar;
