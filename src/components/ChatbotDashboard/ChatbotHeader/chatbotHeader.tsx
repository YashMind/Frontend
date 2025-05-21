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

const ChatbotDashboardHeader = ({
  fix,
  addBgColor,
  role,
  chatbotError,
}: {
  fix: boolean;
  addBgColor: boolean;
  role?: string;
  chatbotError?:string;
}) => {

  const router = useRouter();
  const menuRef = useRef(null);
  const dispatch = useDispatch<AppDispatch>();

    const userData: UserProfileData = useSelector(
    (state: RootState) => state.auth.userData
  );

const pathname = usePathname();
const [bot, setBot] = useState<number>(1);

useEffect(() => {
  if (pathname.includes("/voice-agent")) {
    setBot(2);
  } else if (pathname.includes("/llm")) {
    setBot(3);
  } else if (pathname.includes("/chatbot-dashboard/main")) {
    setBot(1);
  }
}, [pathname]);  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
      className={`${addBgColor ? "bg-[#2B255C]" : "bg-[#2D2095]"} ${fix ? "fixed" : ""
        }
     w-full z-20  rounded-[36px] top-0   my-6`}
    >
      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Log out Account?"
        message={`Are you sure you want to Logout your Account?`}
      />
      <div className=" flex  items-center justify-between mx-auto gap-0 px-[41px] py-[12px] md:gap-4 ">
        <div className=" flex justify-center md:justify-start md:w-auto">
          <Link
            href="/"
            className="flex items-center  space-x-3 rtl:space-x-reverse"
          >
            <Image
              alt="alt"
              src="/images/yash-removebg-preview.png"
              height={100}
              width={100}
            />
            <div className="mob-show text-white">
              <HiAdjustmentsHorizontal size={28} />
            </div>
          </Link>
        </div>
        <div className="flex gap-8 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          {role && ["Super Admin", "Billing Admin", "Product Admin", "Support Admin"].includes(role.replace(/^"(.*)"$/, '$1').trim()) && (
            <Link
              href="/admin/overview"
              className="bg-white p-2 px-4 rounded-full font-semibold"
            >
              Admin Dashboard
            </Link>
          )}
          <Link
            href="/"
            className="text-white bg-[#05BDFD] text-[15px] rounded-[18px]  font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Return to Home
          </Link>

          <div className="relative inline-block text-left" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none cursor-pointer"
            >
              <FaUser size={18} color="white" />
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
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
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
        {!chatbotError &&
        <div
          className={`${isMenuOpen ? "flex flex-col" : "hidden"
            } w-full md:flex md:flex-row md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center  text-[15px] font-normal p-4 md:p-0 mt-4  [font-family:'Roboto_Flex',sans-serif]  border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
            <li>
              <Link
                href="/chatbot-dashboard/main"
                className={`block py-2 px-3 text-white ${bot === 1 ? "bg-[#434343]" : ""
                  } rounded-[26px]
                    hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
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
                href="/chatbot-dashboard/voice-agent"
                className={`block py-2 px-3 text-white ${bot === 2 ? "bg-[#434343]" : ""
                  } rounded-[26px]  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-white-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
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
                href="/chatbot-dashboard/llm"
                className={`block py-2 px-3 text-white ${bot === 3 ? "bg-[#434343]" : ""
                  } rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
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
        }
   
      </div>
    </nav>
  );
};

export default ChatbotDashboardHeader;
