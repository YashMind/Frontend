"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getMeData, isLoggedin } from "@/store/slices/auth/authSlice";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();
  const userData: UserProfileData | null = useSelector(
    (state: RootState) => state.auth.loggedInUser
  );

  console.log("USER DATA: ", userData);

  useEffect(() => {
    dispatch(isLoggedin())
  }, [])

  const [navItem, setNavItem] = useState<number>(1);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  useEffect(() => {
    if (pathname == "/") setNavItem(1);
    if (pathname == "/chatbot") setNavItem(2);
    if (pathname == "/voice-agent") setNavItem(3);
    if (pathname == "/chat-llm") setNavItem(4);
  }, [pathname]);

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'USD' ? 'INR' : 'USD');
  };

  return (
    <nav className="fixed w-full left-0 top-0 z-[9] bg-gradient-to-r from-50% from-purple-900 to-blue-900 shadow-lg flex items-center ">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              alt="Logo"
              src="/images/yashraa_header.svg"
              height={120}
              width={120}
              className="h-12 w-[80%] md:h-16"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:order-2 space-x-4">
            {/* Currency Toggle */}
            {userData ? (<>
              {!userData.activate_plan && <Link
                href={"/activate-trial"}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-400 text-white text-sm font-medium rounded-full hover:from-green-600 hover:to-teal-500 transition-colors"
              >
                7-Day Free Trial
              </Link>}
              <button
                className="hidden sm:flex items-center gap-2 py-2 px-4 md:py-3 md:px-6 text-white text-sm md:text-base font-medium rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer"
                onClick={() => router.push("/chatbot-dashboard/main")}
              >
                Dashboard <FaArrowRightLong size={16} />
              </button></>

            ) : (
              <>
                <Link
                  href={"/activate-trial"}
                  className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-400 text-white text-sm font-medium rounded-full hover:from-green-600 hover:to-teal-500 transition-colors"
                >
                  7-Day Free Trial
                </Link>
                <button
                  className="py-2 px-4 md:py-3 md:px-6 text-white text-sm md:text-base font-medium rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all cursor-pointer"
                  onClick={() => router.push("/auth/signin")}
                >
                  Sign In
                </button>
              </>
            )}

            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none text-white hover:bg-white/20"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-2 lg:space-x-6 md:mt-0">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded-full ${navItem === 1 ? 'bg-white text-purple-900' : 'text-white hover:bg-white/20'}`}
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
                  className={`block py-2 px-3 rounded-full ${navItem === 2 ? 'bg-white text-purple-900' : 'text-white hover:bg-white/20'}`}
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
                  className={`block py-2 px-3 rounded-full ${navItem === 3 ? 'bg-white text-purple-900' : 'text-white hover:bg-white/20'}`}
                  onClick={() => {
                    setNavItem(3);
                    setIsMenuOpen(false);
                  }}
                >
                  Voice Agent
                </Link>
              </li>
              <li>
                <Link
                  href="/chat-llm"
                  className={`block py-2 px-3 rounded-full ${navItem === 4 ? 'bg-white text-purple-900' : 'text-white hover:bg-white/20'}`}
                  onClick={() => {
                    setNavItem(3);
                    setIsMenuOpen(false);
                  }}
                >
                  Chat LLM
                </Link>
              </li>

              {/* Mobile-only buttons */}
              {!userData && isMenuOpen && (
                <>
                  <li className="md:hidden">
                    <button
                      className="w-full text-left py-2 px-3 rounded-full text-white hover:bg-white/20"
                      onClick={toggleCurrency}
                    >
                      Switch to {currency === 'USD' ? 'INR' : 'USD'}
                    </button>
                  </li>
                  <li className="md:hidden">
                    <button
                      className="w-full text-left py-2 px-3 rounded-full bg-gradient-to-r from-green-500 to-teal-400 text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      7-Day Free Trial
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="md:block right-5 hidden mr-5">
        {/* <div className="w-32 h-8 text-sm bg-white/10 rounded-full flex items-center p-1 relative">
          <div
            className={`absolute top-1 left-2 h-6 w-14 bg-white rounded-full transition-all duration-300 ${currency === 'USD' ? 'translate-x-0' : 'translate-x-full'
              }`}
          ></div>
          <button
            onClick={() => toggleCurrency()}
            className={`relative z-10 w-1/2 text-center font-medium ${currency === 'USD' ? 'text-purple-900' : 'text-white'
              }`}
          >
            USD
          </button>
          <button
            onClick={() => toggleCurrency()}
            className={`relative z-10 w-1/2 text-center font-medium ${currency === 'INR' ? 'text-purple-900' : 'text-white'
              }`}
          >
            INR
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default HomeHeader;