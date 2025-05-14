import Link from "next/link";
import React from "react";

const NavSection = () => {
  return (
    <nav className="text-white bg-gradient-to-b from-[#2B255C] via-[#1300AF] to-[#0083FF] pt-30">
      <ul className="flex justify-center gap-12 py-4 font-medium">
        <li>
          <Link
            href="#features"
            className="hover:text-[#e6e3ff] transition cursor-pointer"
          >
            Feature
          </Link>
        </li>

        <li>
          <Link
            href="#reviews"
            className="hover:text-[#e6e3ff] transition cursor-pointer"
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="#faq"
            className="hover:text-[#e6e3ff] transition cursor-pointer"
          >
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavSection;
