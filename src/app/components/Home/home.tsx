import React from "react";

const Home = () => {
  return (
    <div>
      <nav className="  fixed w-full left-0 top-0 z-[9]   ">
        <div className="container">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-[31px]">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            /> */}
              <span className="self-center text-4xl font-semibold whitespace-nowrap  text-white">
                LOGO
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white  f  text-lg px-4 py-2 text-center "
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
              <ul className="flex gap-6  py-2 rounded-[43px] backdrop-blur-md  text-white bg-[#FFFFFF45]">
                <li>
                  <a
                    href="#"
                    className="text-lg font-normal py-2 bg-white text-black rounded-[27px] px-3 "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg font-normal  hover:text-gray-300 px-3"
                  >
                    Chat Bot
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg font-normal py-2  hover:text-gray-300 px-3"
                  >
                    Voice Agent
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg font-normal py-2 px-3 hover:text-gray-300"
                  >
                    Chat LLM
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* banner section */}
      <div
        className="home-banner h-full lg:h-screen bg-center bg-cover bg-no-repeat banner "
        style={{ backgroundImage: "url('/images/home-banner.png')" }}
      >
        <div className="container">
          <div className="banner-text pt-40 text-white">
            <h2
              className="text-[74px]"
              style={{
                fontFamily: "'Audiowide', sans-serif",
              }}
            >
              AI That Thinks Ahead
            </h2>
            <p>
              Innovative AI solutions designed to simplify and accelerate your
              workflow.
            </p>
            <button className="px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
