import React from 'react'

const HomeFooter = () => {
  return (
    <footer className=" text-white px-6 md:px-12 py-[px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Plan */}
          <div>
            <h1 className="text-4xl font-semibold mb-4">LOGO</h1>
            <p className="text-base text-gray-300 font-normal mb-4">
              Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus at
              dui habitasse quisque nisl tincidunt.
            </p>
            <button className=" w-full bg-gradient-to-r from-[#501794] via-[#5e3aa1] text-[15px] to-[#40659F] font-medium hover:bg-[#7B68EE] text-white text-sm py-2 px-4 rounded-full transition">
              Choose This Plan
            </button>
          </div>

          {/* About Links */}
          <div>
            <h2 className=" text-xl font-bold mb-8 [font-family:'Roboto_Flex',sans-serif]">
              About
            </h2>
            <ul className="text-sm space-y-2 text-white [font-family:'Roboto_Flex',sans-serif]">
              <li className="pb-4">
                <a href="#">Home</a>
              </li>
              <li className="pb-4">
                <a href="#">LLM</a>
              </li>
              <li className="pb-4">
                <a href="#">Chat Bot</a>
              </li>
              <li className="pb-4">
                <a href="#">Voice agent</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-xl font-bold mb-8 [font-family:'Roboto_Flex',sans-serif]">
              Company
            </h2>
            <ul className="text-sm space-y-2 text-white [font-family:'Roboto_Flex',sans-serif]">
              <li className="pb-4">
                <a href="#">About Us</a>
              </li>
              <li className="pb-4">
                <a href="#">Careers</a>
              </li>
              <li className="pb-4">
                <a href="#">FAQs</a>
              </li>
              <li className="pb-4">
                <a href="#">Teams</a>
              </li>
              <li className="pb-4">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h2 className="text-xl font-bold mb-8 [font-family:'Roboto_Flex',sans-serif]">
              Follow us
            </h2>
            <div className="flex space-x-4 text-xl">
              <a href="#">
                <img className="" src="/images/facebook (3).png" />
              </a>
              <a href="#">
                <img className="" src="/images/social.png" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img className="" src="/images/instra.png" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <img className="" src="/images/transfer.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex container ">
          <div className="w-[25%] "></div>
          <div className="flex justify-between items-center w-[75%] mt-[41px] ">
            <h2 className="font-bold text-lg  [font-family:'Roboto_Flex',sans-serif]">
              Contact Us{" "}
            </h2>
            <div className="flex gap-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_1991)">
                  <path
                    d="M21 10.7751C21 17.7751 12 23.7751 12 23.7751C12 23.7751 3 17.7751 3 10.7751C3 8.3882 3.94821 6.09901 5.63604 4.41119C7.32387 2.72336 9.61305 1.77515 12 1.77515C14.3869 1.77515 16.6761 2.72336 18.364 4.41119C20.0518 6.09901 21 8.3882 21 10.7751Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13.7751C13.6569 13.7751 15 12.432 15 10.7751C15 9.11829 13.6569 7.77515 12 7.77515C10.3431 7.77515 9 9.11829 9 10.7751C9 12.432 10.3431 13.7751 12 13.7751Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_1991">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.775146)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="font-normal text-sm">
                {" "}
                Lorem ipsum dolor sit amet <br></br> consectetur.20815
              </p>
            </div>
            <div className="flex gap-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4.77515H20C21.1 4.77515 22 5.67515 22 6.77515V18.7751C22 19.8751 21.1 20.7751 20 20.7751H4C2.9 20.7751 2 19.8751 2 18.7751V6.77515C2 5.67515 2.9 4.77515 4 4.77515Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6.77515L12 13.7751L2 6.77515"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>lorem@gmail.com</p>
            </div>
            <div className="flex  gap-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0499 5.77515C16.0267 5.96571 16.9243 6.4434 17.628 7.14708C18.3317 7.85076 18.8094 8.74841 18.9999 9.72515L15.0499 5.77515ZM15.0499 1.77515C17.0792 2.00058 18.9715 2.90932 20.4162 4.35215C21.8608 5.79499 22.7719 7.68616 22.9999 9.71515L15.0499 1.77515ZM21.9999 17.6951V20.6951C22.0011 20.9736 21.944 21.2493 21.8324 21.5045C21.7209 21.7597 21.5572 21.9887 21.352 22.177C21.1468 22.3653 20.9045 22.5086 20.6407 22.5979C20.3769 22.6871 20.0973 22.7202 19.8199 22.6951C16.7428 22.3608 13.7869 21.3093 11.1899 19.6251C8.77376 18.0898 6.72527 16.0413 5.18993 13.6251C3.49991 11.0164 2.44818 8.04614 2.11993 4.95515C2.09494 4.67861 2.12781 4.39991 2.21643 4.13677C2.30506 3.87364 2.4475 3.63184 2.6347 3.42677C2.82189 3.2217 3.04974 3.05786 3.30372 2.94567C3.55771 2.83348 3.83227 2.77541 4.10993 2.77515H7.10993C7.59524 2.77037 8.06572 2.94223 8.43369 3.25868C8.80166 3.57513 9.04201 4.01459 9.10993 4.49515C9.23656 5.45521 9.47138 6.39787 9.80993 7.30515C9.94448 7.66307 9.9736 8.05206 9.89384 8.42603C9.81408 8.79999 9.6288 9.14326 9.35993 9.41515L8.08993 10.6851C9.51349 13.1887 11.5864 15.2616 14.0899 16.6851L15.3599 15.4151C15.6318 15.1463 15.9751 14.961 16.3491 14.8812C16.723 14.8015 17.112 14.8306 17.4699 14.9651C18.3772 15.3037 19.3199 15.5385 20.2799 15.6651C20.7657 15.7337 21.2093 15.9784 21.5265 16.3526C21.8436 16.7269 22.0121 17.2047 21.9999 17.6951Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>+1 45676483032</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto mt-[41px] border-t border-white ">
          <p className="text-center font-light text-xs mt-[41px] ">
            © 2025 All Rights Reserved
          </p>
        </div>
      </footer>
  )
}

export default HomeFooter