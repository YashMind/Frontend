"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getMeData, isLoggedin } from "@/store/slices/auth/authSlice";
import { FaArrowLeftLong, FaArrowRightLong, FaForward } from "react-icons/fa6";
import { BiArrowFromLeft, BiArrowToRight } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HomeHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();
  const userData: UserProfileData | null = useSelector(
    (state: RootState) => state.auth.loggedInUser
  );

  useEffect(() => {
    dispatch(isLoggedin())
  }, [])
  const [navItem, setNavItem] = useState<number>(1);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (pathname == "/") {
      setNavItem(1);
    }
    if (pathname == "/chatbot") {
      setNavItem(2);
    }
    if (pathname == "/voice-agent") {
      setNavItem(3);
    }
  }, [pathname]);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };


  return (
    <nav className="fixed w-full left-0 top-0 z-[9]">
      <div className="container">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-[31px]">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-4xl font-semibold whitespace-nowrap  text-white">
              <Image
                alt="alt"
                src="/images/yash-removebg-preview.png"
                height={150}
                width={150}
              />
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <button
              type="button"
              className="text-white  f  text-lg px-4 py-2 text-center cursor-pointer"
              onClick={() => router.push("/auth/signin")}
            >
              Sign in
            </button> */}
            {userData ? <button
              className="flex items-center gap-2 py-[14px] px-6 text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer"
              onClick={() => router.push("/chatbot-dashboard/main")}
            >
              Dashboard <FaArrowRightLong size={20} />
            </button> : <button
              className="py-[14px] px-[43px] text-white text-base font-medium rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer"
              onClick={() => router.push("/auth/signin")}
            >
              Sign In
            </button>}
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
            className={`${isMenuOpen
              ? "flex flex-col items-center justify-center"
              : "hidden"
              }  w-full md:flex md:flex-row md:w-auto md:order-1 `}
            id="navbar-sticky"
          >
            <ul className="flex flex-col items-center gap-6 px-4 py-4 md:flex-row md:items-start  rounded-[43px] bg-[#bfbaff4f]/90 backdrop-blur-md  text-white ">
              <li>
                <Link
                  href="/"
                  className={`${navItem === 1
                    ? "bg-white text-black rounded-[27px] px-3"
                    : ""
                    } text-lg font-normal py-2   cursor-pointer`}
                  onClick={() => {
                    setNavItem(1);
                    setIsMenuOpen(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/chatbot"
                  className={` ${navItem === 2
                    ? "bg-white text-black rounded-[27px] px-3"
                    : ""
                    } text-lg font-normal py-2 hover:text-gray-300 px-3 cursor-pointer`}
                  onClick={() => {
                    setNavItem(2);
                    setIsMenuOpen(false);
                  }}
                >
                  Chat Bot
                </Link>
              </li>
              <li>
                <Link
                  href="/voice-agent"
                  className={`${navItem === 3
                    ? "bg-white text-black rounded-[27px] px-3"
                    : ""
                    } text-lg font-normal py-2  hover:text-gray-300 px-3 cursor-pointer`}
                  onClick={() => {
                    setNavItem(3);
                    setIsMenuOpen(false);
                  }}
                >
                  Voice Agent
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/"
                  className={`${
                    navItem === 4
                      ? "bg-white text-black rounded-[27px] px-3"
                      : ""
                  } text-lg font-normal py-2 px-3 hover:text-gray-300 cursor-pointer`}
                  onClick={() => {
                    setNavItem(4);
                    setIsMenuOpen(false);
                  }}
                >
                  Chat LLM
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeHeader;
