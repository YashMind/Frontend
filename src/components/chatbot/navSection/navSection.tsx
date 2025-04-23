import React from "react";

const NavSection = () => {
  return (
    <nav className="bg-white">
      <ul className="flex justify-center gap-12 py-4 text-black font-medium">
        <li>
          <a href="#features" className="hover:text-[#2C1F94] transition">
            Feature
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-[#2C1F94] transition">
            Pricing
          </a>
        </li>
        <li>
          <a href="#reviews" className="hover:text-[#2C1F94] transition">
            Reviews
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:text-[#2C1F94] transition">
            FAQs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavSection;
