import Link from "next/link";
import React from "react";

const ChatbotFooter = () => {
  return (
    <footer
      className=" text-white  py-[65px] px-8 md:px-16 lg:px-24  bg-center bg-cover bg-no-repeat bg-[#2d2095]"
      style={{
        backgroundImage: "url('/images/footer.png')",
        backgroundColor: "#1210B6",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container [font-family:'Roboto_Flex',sans-serif]">
        <img src="/images/yash-removebg-preview.png" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Product */}
          <div>
            <h3 className="font-bold text-lg my-[30px] ">Product</h3>
            <ul className="font-normal text-sm test-white ">
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="font-bold text-lg my-[30px]">Use Cases</h3>
            <ul className="font-normal text-sm test-white ">
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg my-[30px]">Resources</h3>
            <ul className="font-normal text-sm test-white ">
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg my-[30px]">Company</h3>
            <ul className="font-normal text-sm test-white ">
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
              <li className="mb-[16px]">Lorem Ipsum</li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3 className="text-lg mb-[13px] font-bold">Let's do it!</h3>
            <div className="flex space-x-3 mb-4">
              <img src="/images/1.png" />
              <img src="/images/2.png" />
              <img src="/images/3.png" />
              <img src="/images/4.png" />
              <img src="/images/5.png" />
            </div>
            {/* <div className=" space-x-4">
              <button className="bg-black text-white px-4 py-2 rounded-full  w-full font-normal text-base">
                Get started
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full w-full mt-4 font-normal text-base">
                Contact Us
              </button>
            </div> */}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-white/20 mt-12 pt-4 flex flex-col md:flex-row justify-between ">
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-normal text-sm text-white">
            <Link href="/details/privacy-policy">Privacy Policy</Link>
            <Link href="/details/privacy-policy">Terms of Use</Link>
            <Link href="/details/privacy-policy">Sales and Refunds</Link>
            <Link href="/details/privacy-policy">Legal</Link>
            <Link href="/details/privacy-policy">Site Map</Link>
          </div>
          <div className="mt-2 md:mt-0 font-light text-xs">
            © 2021 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ChatbotFooter;
