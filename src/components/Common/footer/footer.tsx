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
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-white pt-8">
          <h2 className="font-bold text-lg [font-family:'Roboto_Flex',sans-serif]">
            Contact Us
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm ">
            {/* Location */}
            <div className="flex items-start gap-3 mob-block">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="..." stroke="white" />
              </svg>
              <p>
                Lorem ipsum dolor sit amet
                <br />
                consectetur.20815
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mob-block">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="..." stroke="white" />
              </svg>
              <p>lorem@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mob-block">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="..." stroke="white" />
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
