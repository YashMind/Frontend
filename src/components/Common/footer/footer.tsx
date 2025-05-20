import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeFooter = () => {
  return (
    <footer
      className="text-white px-4 sm:px-6 md:px-12 pt-10"
      style={{
        backgroundImage:
          "linear-gradient(89.97deg, #002b58 -37.97%, #3b0459 99.97%), linear-gradient(#1f064a33 0%, #0003 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Plan */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            <Image
              alt="alt"
              src="/images/yash-removebg-preview.png"
              className="cursor-pointer"
              height={150}
              width={150}
            />
          </h1>
          <p className="text-sm md:text-base text-gray-300 font-normal mb-4">
            Pick the plan that fits your needs and start unlocking powerful AI
            features today.
          </p>
          <button className="cursor-pointer w-full bg-gradient-to-r from-[#501794] via-[#5e3aa1] to-[#40659F] font-medium hover:opacity-90 text-white text-sm py-2 px-4 rounded-full transition">
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
              <Link href="/">Home</Link>
            </li>
            {/* <li>
              <Link href="/details/llm">LLM</Link>
            </li> */}
            <li>
              <Link href="/chatbot">Chat Bot</Link>
            </li>
            <li>
              <Link href="/voice-agent">Voice Agent</Link>
            </li>
            <li>
              <Link href="/details/terms&condition">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/details/privacy-policy">Privacy Policy</Link>
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
              <Link href="/details/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/details/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/details/refund-and-cancellation-policy">
                  Refund and Cancellation policy
                </Link>
              
            </li>
            <li>
              <Link href="/details/contact-us">Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-8 [font-family:'Roboto_Flex',sans-serif]">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <Link href="#">
              <img src="/images/facebook (3).png" alt="Facebook" />
            </Link>
            <Link href="#">
              <img src="/images/social.png" alt="Twitter" />
            </Link>
            <Link href="#">
              <img src="/images/instra.png" alt="Instagram" />
            </Link>
            <Link href="#">
              <img src="/images/transfer.png" alt="LinkedIn" />
            </Link>
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
                Have questions or need assistance?
                <br />
                We're here to help.
                <br />
                Reach out to our team for support or inquiries.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mob-block">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="..." stroke="white" />
              </svg>
              <p>support@yashmind.in</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mob-block">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="..." stroke="white" />
              </svg>
              <p>+91-9529786418</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-7xl mx-auto mt-10 text-center border-t border-white pt-6">
        <p className="font-light text-xs left-1/2">
          Copyright 2025 © YASHRAA TECHNOLOGIES PRIVATE LIMITED. All Rights
          Reserved.
        </p>
      </div>
      <p className="font-light text-xs py-1 pt-10">
        "YASHRAA" {"\t \t"} is the registered trademark of the YASHRAA
        TECHNOLOGIES PRIVATE LIMITED.
      </p>
    </footer>
  );
};

export default HomeFooter;
