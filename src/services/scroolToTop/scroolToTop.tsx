"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div className="container relative">
      <div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-[30px] right-[20px] z-50 p-3 rounded-full bg-white text-black shadow-md hover:bg-gray-800 hover:text-white transition-all h-[40px] w-[40px] flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7.97339L9 0.973389L17 7.97339"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
