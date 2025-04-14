import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HomeHeader = () => {
  const [navItem, setNavItem] = useState<number>(1);
  const router = useRouter();
  return (
    <nav className="  fixed w-full left-0 top-0 z-[9]   ">
      <div className="container">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-[31px]">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-4xl font-semibold whitespace-nowrap  text-white">
              LOGO
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white  f  text-lg px-4 py-2 text-center cursor-pointer"
              onClick={() => router.push("/signin")}
            >
              Sign in
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex gap-6  py-2  rounded-[43px] backdrop-blur-md  text-white bg-[#FFFFFF45]">
              <li>
                <Link
                  href="/"
                  className={`${
                    navItem === 1
                      ? "bg-white text-black rounded-[27px] px-3"
                      : ""
                  } text-lg font-normal py-2   cursor-pointer`}
                  onClick={() => setNavItem(1)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/chatbot"
                  className={` ${
                    navItem === 2
                      ? "bg-white text-black rounded-[27px] px-3"
                      : ""
                  } text-lg font-normal py-2 hover:text-gray-300 px-3 cursor-pointer`}
                  onClick={() => setNavItem(2)}
                >
                  Chat Bot
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={`${
                    navItem === 3
                      ? "bg-white text-black rounded-[27px] px-3"
                      : ""
                  } text-lg font-normal py-2  hover:text-gray-300 px-3 cursor-pointer`}
                  onClick={() => setNavItem(3)}
                >
                  Voice Agent
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={`${
                    navItem === 4
                      ? "bg-white text-black rounded-[27px] px-3"
                      : ""
                  } text-lg font-normal py-2 px-3 hover:text-gray-300 cursor-pointer`}
                  onClick={() => setNavItem(4)}
                >
                  Chat LLM
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeHeader;
