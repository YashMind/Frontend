"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getMeData, logoutUser } from "@/store/slices/auth/authSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ChatbotHeader = ({
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
    <div className="bg-white mt-3">
      <nav
        className={`${addBgColor ? "bg-[#2B255C]" : "bg-[#2D2095]"} ${
          fix ? "fixed" : ""
        } w-full z-20 rounded-[36px] top-0 my-0.5`}
      >
        <div className="container">
          <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto gap-4 p-4">
            {/* Logo */}
            <div className="flex justify-center md:justify-start md:w-auto w-full">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <Image
                  alt="alt"
                  src="/images/bot-logo.png"
                  height={150}
                  width={150}
                />
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex md:order-2 items-center justify-between w-full md:w-auto mt-4 md:mt-0">
              <div className="flex items-center gap-3 md:gap-4">
                <Link
                  href="/"
                  className="text-white bg-[#05BDFD] text-[15px] rounded-[18px] font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Return to Home
                </Link>

                {/* Dropdown */}
                <div className="relative inline-block text-left" ref={menuRef}>
                  {userData?.email!=="" ? <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="focus:outline-none"
                  >
                    <svg
                      width="21"
                      height="22"
                      className="mx-[18px]"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7917 4.09546C11.691 4.09546 12.5534 4.45267 13.1892 5.08851C13.825 5.72436 14.1823 6.58674 14.1823 7.48596C14.1823 8.38518 13.825 9.24757 13.1892 9.88341C12.5534 10.5193 11.691 10.8765 10.7917 10.8765C9.89253 10.8765 9.03014 10.5193 8.3943 9.88341C7.75846 9.24757 7.40125 8.38518 7.40125 7.48596C7.40125 6.58674 7.75846 5.72436 8.3943 5.08851C9.03014 4.45267 9.89253 4.09546 10.7917 4.09546ZM10.7917 12.5717C14.5383 12.5717 17.5728 14.089 17.5728 15.9622V17.6575H4.01074V15.9622C4.01074 14.089 7.04524 12.5717 10.7917 12.5717Z"
                        fill="white"
                      />
                    </svg>
                  </button> : null}
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

                {/* User Name */}
                <p className="text-white font-semibold text-[15px] hidden md:block">
                  {userData?.fullName}
                </p>

                {/* Mobile Menu Toggle */}
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:absolute md:w-full md:left-0 md:bg-[#2a2562] md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded={isMenuOpen}
                  onClick={() => handleToggle()}
                >
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
            </div>

            {/* Navbar Links */}
            <div
              className={`${
                isMenuOpen ? "flex flex-col mt-4" : "hidden"
              } w-full md:flex md:flex-row md:w-auto md:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col items-center text-[15px] font-normal p-4 md:p-0 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 rounded-lg [font-family:'Roboto_Flex',sans-serif] border md:border-none ">
                <li>
                  <Link
                    href="/chatbot-dashboard/main"
                    className={`block py-2 px-3 text-white ${
                      bot === 1 ? "bg-[#434343]" : ""
                    } rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-blue-500`}
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
                    } rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-blue-500`}
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
                    href="/llm"
                    className={`block py-2 px-3 text-white ${
                      bot === 3 ? "bg-[#434343]" : ""
                    } rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:text-blue-500`}
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
        </div>
      </nav>
    </div>
  );
};

export default ChatbotHeader;
