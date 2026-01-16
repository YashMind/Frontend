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
      className={`${fix ? "fixed" : "relative"} w-full z-[100] transition-all duration-300 ${addBgColor
          ? "bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
        } ${announcements?.length > 0 ? "py-1" : "py-2"}`}
    >
      {/* 🔹 Main Navbar Content */}
      <div
        className={`w-full px-6 flex flex-wrap items-center justify-between transition-all duration-300 ${announcements?.length > 0 ? "py-3 md:py-4" : "py-2 md:py-3"
          }`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-105">
            <Image
              alt="Logo"
              src="/images/yashraa_header.svg"
              height={120}
              width={120}
              className="h-8 md:h-12 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-95"
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        {!chatbotError && (
          <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-4 p-1 rounded-2xl bg-white/5 md:bg-white/5 border border-white/5 md:border-white/10 backdrop-blur-md">
              {[
                { label: "Chat Bot", href: "/chatbot-dashboard/main", id: 1 },
                { label: "Voice Agent", href: "/voice-agent", id: 2 },
                { label: "Chat LLM", href: "/chatllm", id: 3 },
              ].map((link) => (
                <li key={link.id} className="w-full md:w-auto">
                  <Link
                    href={link.href}
                    className={`block py-2 px-6 text-sm font-semibold rounded-xl transition-all duration-300 text-center whitespace-nowrap ${bot === link.id
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/50"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    onClick={() => {
                      setBot(link.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* User Controls Section */}
        <div className="hidden md:flex items-center gap-4">
          {role &&
            ["super admin", "billing admin", "product admin", "support admin"].includes(
              role.replace(/^"(.*)"$/, "$1").trim().toLowerCase()
            ) && (
              <Link
                href="/admin/overview"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white p-2 px-5 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 shadow-lg"
              >
                Admin Dash
              </Link>
            )}

          <Link
            href="/#pricing"
            className="group relative overflow-hidden bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-xl font-bold px-5 py-2.5 transition-all duration-300 shadow-lg shadow-indigo-600/20 active:scale-95"
          >
            <span className="relative z-10">Upgrade Plan</span>
          </Link>

          {!pathname.includes("/chatbot-dashboard/main") && (
            <Link
              href="/chatbot-dashboard/main"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm rounded-xl font-bold px-5 py-2.5 transition-all duration-300 active:scale-95"
            >
              Dashboard
            </Link>
          )}

          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none cursor-pointer group transition-transform active:scale-90"
              >
                <div className="w-9 h-9 rounded-xl border-2 border-indigo-500/50 overflow-hidden shadow-lg shadow-indigo-500/20">
                  {userData?.picture ? (
                    <Image
                      alt={"profile pic"}
                      src={pathToImage(userData.picture) as string}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                      <FaUser size={16} color="white" />
                    </div>
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-[#1a1440]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl z-[110] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-3 border-b border-white/5 bg-white/5">
                    <p className="text-white font-bold text-sm truncate">{userData?.fullName}</p>
                    <p className="text-gray-400 text-xs truncate">{userData?.email}</p>
                  </div>
                  <div className="p-1.5">
                    <Link
                      href="/settings/profile"
                      className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-indigo-600 hover:text-white rounded-xl transition-all"
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/settings/teams"
                      className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-indigo-600 hover:text-white rounded-xl transition-all"
                    >
                      Manage Teams
                    </Link>
                    <div className="h-px bg-white/5 my-1.5" />
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full flex items-center px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
                    >
                      Logout Account
                    </button>
                  </div>
                </div>
              )}
            </div>
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
