"use client"
import React, {useState} from 'react'
import Link from 'next/link';

const ChatbotHeader = () => {
  const [bot, setBot] = useState<number>(1) 
  return (
    <nav className="bg-[#2D2095] fixed w-full z-20  rounded-[36px] top-0   my-9">
        <div className="container">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse "
            >
              <img src="/images/bot-logo.png" alt=""/>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
              <Link
                href="/"
                className="text-white bg-[#05BDFD] text-[15px] rounded-[18px]  font-semibold focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                
                Return to Home
              </Link>
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

              <p className="text-white font-semibold text-[15px]">User</p>
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
              <ul className="flex flex-col items-center  text-[15px] font-normal p-4 md:p-0 mt-4  [font-family:'Roboto_Flex',sans-serif]  border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
                <li>
                  <Link
                    href="/chatbot"
                    className={`block py-2 px-3 text-white ${bot===1 ? "bg-[#434343]" : ""} rounded-[26px]
                    hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                    aria-current="page"
                    onClick={()=> setBot(1)}
                  >
                    Chat Bot
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chatbot"
                    className={`block py-2 px-3 text-white ${bot===2 ? "bg-[#434343]" : ""} rounded-[26px]  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                    onClick={()=> setBot(2)}
                  >
                    Voice Agent
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chatbot"
                    className={`block py-2 px-3 text-white ${bot===3 ? "bg-[#434343]" : ""} rounded-[26px] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                    onClick={()=> setBot(3)}
                  >
                    Chat LLM
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default ChatbotHeader;
