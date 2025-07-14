import Link from "next/link";
import React from "react";

const NavSection = () => {
  return (
    <nav className="text-white bg-gradient-to-r from-50% from-purple-900 to-blue-900 pt-16">
      <ul className="flex justify-end gap-8 pt-4 pb-2 px-4 font-medium">
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
