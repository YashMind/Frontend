"use client";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import React, { useEffect, useState, useRef } from "react";
import { getMeData, logoutUser } from "@/store/slices/auth/authSlice";
import ConfirmDeleteModal from "@/components/DeleteConfirmationModal";
import { fetchAnnouncements } from "@/store/slices/admin/announcementSlice";
import { pathToImage } from "@/services/utils/helpers";

const ChatbotDashboardHeader = ({
  fix,
  addBgColor,
  role,
  chatbotError,
}: {
  fix: boolean;
  addBgColor: boolean;
  role?: string;
  chatbotError?: any;
}) => {
  const [bot, setBot] = useState<number>(1);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);
  const dispatch = useDispatch<AppDispatch>();

  const userData = useSelector((state: RootState) => state.auth.userData);

  const pathname = usePathname();
  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, []);

  useEffect(() => {
    if (pathname.includes("/voice-agent")) {
      setBot(2);
    } else if (pathname.includes("/chat-llm")) {
      setBot(3);
    } else if (pathname.includes("/chatbot-dashboard/main")) {
      setBot(1);
    }
  }, [pathname]);

  const { loading, data: announcements } = useSelector(
    (state: RootState) => state.announcements
  );

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    dispatch(getMeData({ router }));
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleConfirmDelete = async () => {
    await dispatch(logoutUser({ router }));
  };

  return (
    <nav
      className={`${addBgColor ? "bg-[#2B255C]" : "bg-[#2D2095]"} ${
        fix ? "fixed" : ""
      } w-full z-90 pt-2 ${
        announcements?.length > 0 ? "md:max-h-[12%] py-2" : "md:max-h-[8%] py-4"
      } `}
    >
      {/* 🔹 Main Navbar Content */}
      <div
        className={`container mx-auto  flex flex-wrap items-center justify-between ${
          announcements?.length > 0 ? "py-4 md:py-5" : "py-2 md:py-4"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center">
            <Image
              alt="Logo"
              src="/images/yashraa_header.svg"
              height={120}
              width={120}
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 text-gray-400"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links - Hidden on mobile unless menu is open */}
        {!chatbotError && (
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 p-4 md:p-0 mt-4 md:mt-0 rounded-lg">
              <li>
                <Link
                  href="/chatbot-dashboard/main"
                  className={`block py-2 px-4 text-white ${
                    bot === 1 ? "bg-[#434343]" : ""
                  } rounded-[26px] hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-300 transition-colors`}
                  onClick={() => {
                    setBot(1);
                    setIsMenuOpen(false);
                  }}
                >
                  Chat Bot
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/voice-agent"
                  className={`block py-2 px-4 text-white ${bot === 2 ? "bg-[#434343]" : ""
                    } rounded-[26px] hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-300 transition-colors`}
                  onClick={() => {
                    setBot(2);
                    setIsMenuOpen(false);
                  }}
                >
                  Voice Agent
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/chatllm"
                  className={`block py-2 px-4 text-white ${bot === 3 ? "bg-[#434343]" : ""
                    } rounded-[26px] hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-300 transition-colors`}
                  onClick={() => {
                    setBot(3);
                    setIsMenuOpen(false);
                  }}
                >
                  Chat LLM
                </Link>
              </li> */}
            </ul>
          </div>
        )}

        {/* User Controls Section */}
        <div className="hidden md:flex items-center space-x-3 md:space-x-4">
          {role &&
            [
              "super admin",
              "billing admin",
              "product admin",
              "support admin",
            ].includes(
              role
                .replace(/^"(.*)"$/, "$1")
                .trim()
                .toLowerCase()
            ) && (
              <Link
                href="/admin/overview"
                className="bg-white p-2 px-4 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Admin Dash
              </Link>
            )}

          <Link
            href="/#pricing"
            className="text-white bg-[#05BDFD] text-sm rounded-[18px] font-semibold hover:bg-[#04a9e0] px-3 py-2 md:px-4 transition-colors"
          >
            Upgrade Plan
          </Link>
          {!pathname.includes("/chatbot-dashboard/main") && (
            <Link
              href="/chatbot-dashboard/main"
              className="text-white bg-[#05BDFD] text-sm rounded-[18px] font-semibold hover:bg-[#04a9e0] px-3 py-2 md:px-4 transition-colors"
            >
              Dashboard
            </Link>
          )}

          <div className="flex items-center space-x-2">
            <div className="relative inline-block text-left" ref={menuRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none cursor-pointer"
                aria-label="User menu"
              >
                {userData?.picture ? (
                  <Image
                    alt={"profile pic"}
                    src={pathToImage(userData.picture) as string}
                    width={100}
                    height={100}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <FaUser size={18} color="white" />
                )}
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <Link
                      href="/settings/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    {/* <Link
                      href="/settings/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link> */}
                    <Link
                      href="/settings/teams"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Invite User
                    </Link>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
            <p className="text-white font-semibold text-sm md:text-base">
              {userData?.fullName}
            </p>
          </div>
        </div>

        {/* Mobile User Controls - Shows when menu is open */}
        {isMenuOpen && (
          <div className="w-full md:hidden mt-4 space-y-3">
            {role &&
              [
                "Super Admin",
                "Billing Admin",
                "Product Admin",
                "Support Admin",
              ].includes(role.replace(/^"(.*)"$/, "$1").trim()) && (
                <Link
                  href="/admin/overview"
                  className="block w-full text-center bg-white p-2 px-4 rounded-full font-semibold text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Dash
                </Link>
              )}

            <Link
              href="/"
              className="block w-full text-center text-white bg-[#05BDFD] text-sm rounded-[18px] font-semibold px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="flex flex-col items-start justify-start  pt-2 text-white">
              <Link
                href="/settings/profile"
                className="block py-2 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              {/* <Link
                href="/settings/profile"
                className="block py-2 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Settings
              </Link> */}
              <Link
                href="/settings/teams"
                className="block py-2 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Invite User
              </Link>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className=" py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
              <p className="text-white text-xsself-center">
                {userData?.fullName}
              </p>
            </div>
          </div>
        )}
      </div>

      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Log out Account?"
        message={`Are you sure you want to Logout your Account?`}
      />
    </nav>
  );
};

export default ChatbotDashboardHeader;
