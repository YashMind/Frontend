import Link from "next/link";
import React from "react";

const NavSection = () => {
  return (
    <nav className="bg-white">
      <ul className="flex justify-center gap-12 py-4 text-black font-medium">
        <li>
          <Link href="#features" className="hover:text-[#2C1F94] transition">
            Feature
          </Link>
        </li>
        <li>
          <Link href="#pricing" className="hover:text-[#2C1F94] transition">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="#reviews" className="hover:text-[#2C1F94] transition">
            Reviews
          </Link>
        </li>
        <li>
          <Link href="#faq" className="hover:text-[#2C1F94] transition">
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavSection;
