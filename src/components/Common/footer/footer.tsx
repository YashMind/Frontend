import React from "react";

const HomeFooter = () => {
  return (
    <footer className="text-white px-4 sm:px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Plan */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">LOGO</h1>
          <p className="text-sm md:text-base text-gray-300 font-normal mb-4">
            Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus at dui
            habitasse quisque nisl tincidunt.
          </p>
          <button className="w-full bg-gradient-to-r from-[#501794] via-[#5e3aa1] to-[#40659F] font-medium hover:opacity-90 text-white text-sm py-2 px-4 rounded-full transition">
            Choose This Plan
          </button>
        </div>

        {/* About Links */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-8 [font-family:'Roboto_Flex',sans-serif]">
            About
          </h2>
          <ul className="text-sm space-y-2 [font-family:'Roboto_Flex',sans-serif]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">LLM</a>
            </li>
            <li>
              <a href="#">Chat Bot</a>
            </li>
            <li>
              <a href="#">Voice Agent</a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-8 [font-family:'Roboto_Flex',sans-serif]">
            Company
          </h2>
          <ul className="text-sm space-y-2 [font-family:'Roboto_Flex',sans-serif]">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-8 [font-family:'Roboto_Flex',sans-serif]">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a href="#">
              <img src="/images/facebook (3).png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/images/social.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/images/instra.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/images/transfer.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-7xl mx-auto mt-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-end gap-6  pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm ">
            {/* Location */}
            <h2 className="font-bold text-lg [font-family:'Roboto_Flex',sans-serif]">
              Contact Us
            </h2>

            <div className="flex items-start gap-3 mob-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <p>
                Lorem ipsum dolor sit amet
                <br />
                consectetur.20815
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mob-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <p>lorem@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mob-block">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.05 5.97339C16.0267 6.16395 16.9244 6.64165 17.6281 7.34532C18.3317 8.049 18.8094 8.94665 19 9.92339L15.05 5.97339ZM15.05 1.97339C17.0793 2.19882 18.9716 3.10756 20.4162 4.5504C21.8609 5.99323 22.772 7.8844 23 9.91339L15.05 1.97339ZM22 17.8934V20.8934C22.0011 21.1719 21.9441 21.4476 21.8325 21.7027C21.7209 21.9579 21.5573 22.187 21.3521 22.3753C21.1468 22.5635 20.9046 22.7069 20.6407 22.7961C20.3769 22.8853 20.0974 22.9185 19.82 22.8934C16.7428 22.559 13.787 21.5075 11.19 19.8234C8.77382 18.2881 6.72533 16.2396 5.18999 13.8234C3.49997 11.2146 2.44824 8.24438 2.11999 5.15339C2.095 4.87686 2.12787 4.59815 2.21649 4.33501C2.30512 4.07188 2.44756 3.83008 2.63476 3.62501C2.82196 3.41994 3.0498 3.2561 3.30379 3.14391C3.55777 3.03172 3.83233 2.97365 4.10999 2.97339H7.10999C7.5953 2.96861 8.06579 3.14047 8.43376 3.45692C8.80173 3.77338 9.04207 4.21284 9.10999 4.69339C9.23662 5.65346 9.47144 6.59612 9.80999 7.50339C9.94454 7.86131 9.97366 8.2503 9.8939 8.62427C9.81415 8.99823 9.62886 9.3415 9.35999 9.61339L8.08999 10.8834C9.51355 13.3869 11.5864 15.4598 14.09 16.8834L15.36 15.6134C15.6319 15.3445 15.9751 15.1592 16.3491 15.0795C16.7231 14.9997 17.1121 15.0288 17.47 15.1634C18.3773 15.5019 19.3199 15.7368 20.28 15.8634C20.7658 15.9319 21.2094 16.1766 21.5265 16.5509C21.8437 16.9252 22.0122 17.403 22 17.8934Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>+1 45676483032</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-7xl mx-auto mt-10 text-center border-t border-white pt-6">
        <p className="font-light text-xs">© 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default HomeFooter;
