"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getMeData, logoutUser } from "@/store/slices/auth/authSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ChatbotDashboardHeader = ({
  fix,
  addBgColor,
}: {
  fix: boolean;
  addBgColor: boolean;
}) => {
  const [bot, setBot] = useState<number>(1);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const dispatch = useDispatch<AppDispatch>();
  const userData: UserProfileData = useSelector(
    (state: RootState) => state.auth.userData
  );

  useEffect(() => {
    dispatch(getMeData());
  }, []);

  const handleLogOut = () => {
    dispatch(logoutUser({ router }));
  };

  return (
    <nav
      className={`${addBgColor ? "bg-[#2B255C]" : "bg-[#2D2095]"} ${
        fix ? "fixed" : ""
      }
     w-full z-20  rounded-[36px] top-0 `}
    >
      <div className=" flex  items-center justify-between mx-auto gap-0 px-[41px] py-[12px] md:gap-4 ">
        <div className=" flex justify-center md:justify-start md:w-auto">
          <Link
            href="/"
            className="flex items-center  space-x-3 rtl:space-x-reverse"
          >
            <Image
              alt="alt"
              src="/images/bot-logo.png"
              height={180}
              width={165}
            />
            <div className="mob-show text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-2">
          <a
            href=""
            className="ext-[#05BDFD] bg-white text-base font-semibold rounded-[18px]   px-4 py-2 "
          >
            Real Count
          </a>

          <Link
            href="/"
            className="text-white bg-[#05BDFD] text-base font-semibold rounded-[18px]   focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Return to Home
          </Link>

          <div className="relative flex items-center gap-2" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <Image
                alt="alt"
                src="/images/Avatar-Circle.png"
                height={32}
                width={32}
              />
            </button>
            <button className="sidebar text-white text-base font-semibold">
              User
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => handleLogOut()}
                    className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="text-white font-semibold text-[15px]">
            {userData?.fullName}
          </p>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={() => handleToggle()}
          >
            {isMenuOpen ? (
              // Cross icon (Close)
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
              // Hamburger icon
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
        <div
          className={`${
            isMenuOpen ? "flex flex-col" : "hidden"
          } w-full md:flex md:flex-row md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center  text-base font-normal p-4 md:p-0 mt-4  [font-family:'Roboto_Flex',sans-serif]  border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
            <li>
              <Link
                href="/chatbot-dashboard/main"
                className={`block py-2 px-3 text-white ${
                  bot === 1 ? "bg-[#05BDFD]" : ""
                } rounded-[26px]
                    hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                aria-current="page"
                onClick={() => {
                  setBot(1);
                  setIsMenuOpen(false);
                }}
              >
                Chat Bot
              </Link>
            </li>
            <li>
              <Link
                href="/voice-agent"
                className={`block py-2 px-3 text-white ${
                  bot === 2 ? "bg-[#434343]" : ""
                } rounded-[26px]  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                onClick={() => {
                  setBot(2);
                  setIsMenuOpen(false);
                }}
              >
                Voice Agent
              </Link>
            </li>
            <li>
              <Link
                href="/chatbot"
                className={`block py-2 px-3 text-white ${
                  bot === 3 ? "bg-[#434343]" : ""
                } rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                onClick={() => {
                  setBot(3);
                  setIsMenuOpen(false);
                }}
              >
                Chat LLM
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ChatbotDashboardHeader;
