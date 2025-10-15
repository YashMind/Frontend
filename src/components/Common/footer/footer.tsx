import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";



export const FaXTwitter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M18.244 2H21.5l-7.375 8.418L22 22h-6.184l-4.8-6.087L5.72 22H2.5l7.834-8.944L2 2h6.318l4.347 5.593L18.244 2zm-1.09 18h1.657L8.49 4H6.728l10.426 16z" />
  </svg>
);
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
          <Link
            href="/#pricing"
            className="cursor-pointer w-full bg-gradient-to-r from-[#501794] via-[#5e3aa1] to-[#40659F] font-medium hover:opacity-90 text-white text-sm py-2 px-4 rounded-full transition"
          >
            Choose a Plan
          </Link>
        </div>

        {/* About Links */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-8 [font-family:'Roboto_Flex',sans-serif]">
            About
          </h2>
          <ul className="text-sm space-y-2 [font-family:'Roboto_Flex',sans-serif]">
            <li>
              <Link href="/details/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/details/faq">FAQs</Link>
            </li>
            <li>
              <Link href="/chatbot">Chat Bot</Link>
            </li>
            <li>
              <Link href="/voice-agent">Voice Agent</Link>
            </li>
            <li>
              <Link href="/chatllm">Chat LLM</Link>
            </li>
            <li>
              <Link href="/details/contact-us">Contact us</Link>
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
              <Link href="/details/terms&condition">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/details/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/details/refund-and-cancellation-policy">
                Refund and Cancellation policy
              </Link>
            </li>
            <li>
              <Link href="/details/gdpr">GDPR</Link>
            </li>
            <li>
              <Link href="/details/code-of-conduct">Use Code of Conduct</Link>
            </li>
            <li>
              <Link href="/details/disclaimer-and-liability">
                Disclaimer & Limitation of Liability Statement
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-8 [font-family:'Roboto_Flex',sans-serif]">
            Follow Us
          </h2>
          <div className="flex space-x-4 text-2xl text-white">
            <a
              href="https://www.youtube.com/@YashraaAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/share/16fLSGGJEN/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/_yashraa_ai_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://web.telegram.org/k/#-2561704830"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb60ltZ1HspzbzM8dN1y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href=" https://www.linkedin.com/company/108015181/admin/page-posts/published/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/YashraaA16816"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
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
              <p>
                <a href="mailto:support@yashraa.ai">support@yashraa.ai</a>
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mob-block">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="..." stroke="white" />
              </svg>
              <p>
                <a href="tel:+91-8623893563">+91-8623893563</a>
              </p>
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
        YASHRAA {"\t \t"} is registered trademark of YASHRAA TECHNOLOGIES
        PRIVATE LIMITED.
      </p>
    </footer>
  );
};

export default HomeFooter;
