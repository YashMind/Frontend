import Image from 'next/image'
import React from 'react'

const ChatbotHeader = () => {
  return (
    <nav className="bg-[#2B255C] fixed w-full z-20 rounded-[36px] top-0 my-[10px] px-[40px] mt-[0px] ">
        <div className=" flex flex-wrap items-center justify-between mx-auto gap-0 p-4 md:gap-4">
          <div className="w-full flex justify-center md:justify-start md:w-auto">
            <a
              className="flex items-center space-x-3 rtl:space-x-reverse"
              href="/"
            >
              <Image
                alt="alt"
                src="/images/bot-logo.png"
                height={80}
                width={65}
              />
            </a>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <a
              className="text-white bg-[#05BDFD] text-[15px] rounded-[18px] font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href="/"
            >
              Return to Home
            </a>
            <div className="relative inline-block text-left">
              <button className="focus:outline-none">
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
                  ></path>
                </svg>
              </button>
            </div>
            <p className="text-white font-semibold text-[15px]"></p>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
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
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full md:flex md:flex-row md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col items-center text-[15px] font-normal p-4 md:p-0 mt-4 [font-family:'Roboto_Flex',sans-serif] border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  className="block py-2 px-3 text-white bg-[#05BDFD] rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                  href="/chatbot-dashboard"
                >
                  Chat Bot
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 text-white rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  href="/voice-agent"
                >
                  Voice Agent
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 text-white rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  href="/chatbot"
                >
                  Chat LLM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default ChatbotHeader
