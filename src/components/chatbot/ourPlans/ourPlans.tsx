import React from "react";

const OurPlans = () => {
  return (
    <div className="tab-sec my-[40px]">
      <div className="container">
        <div className="flex items-center justify-center mb-[73px] bg-white">
          <span className="mr-3 font-medium text-indigo-900">Monthly</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-blue-500 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-300 transition duration-300"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
          </label>

          <span className="ml-3 font-medium text-gray-700">Annually</span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-md p-[41px] w-full md:w-1/3 hover:bg-[#2D2095] hover:text-white plan-hover group">
            <div className="flex gap-3">
              <div className="">
                <img src="/images/price1.png" />
              </div>
              <div>
                <h3 className="text-[17px] font-medium text-[#6F6C90] group-hover:text-white">
                  For individuals
                </h3>
                <h2 className="text-[23px] font-bold mb-2 text-[#170F49] group-hover:text-white">
                  Basic
                </h2>
              </div>
            </div>
            <p className="text-[#6F6C90] mb-4 text-[14px] group-hover:text-white">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>
            <p className="text-[52px] font-bold text-[#170F49] group-hover:text-white">
              $99{" "}
              <span className="text-[19px] font-medium text-[#6F6C90] group-hover:text-white">
                /monthly
              </span>
            </p>
            <h4 className="mt-6 mb-2 font-bold text-left text-[#170F49] text-[17px] group-hover:text-white">
              What's included
            </h4>
            <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
              <li className="flex items-center group-hover:text-white">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" />
                </span>{" "}
                All analytics features
              </li>
              <li className="flex items-center group-hover:text-white">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" />
                </span>{" "}
                Up to 250,000 tracked visits
              </li>
              <li className="flex items-center group-hover:text-white">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" />
                </span>{" "}
                Normal support
              </li>
              <li className="flex items-center group-hover:text-white">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" />
                </span>{" "}
                Up to 3 team members
              </li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
              Get started
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-[41px] w-full md:w-1/3 hover:bg-[#2D2095] hover:text-white plan-hover group">
            <div className="flex gap-3">
              <div>
                <img src="/images/price-2.png" className="" />
              </div>
              <div>
                <h3 className="text-[17px] font-medium text-[#6F6C90] group-hover:text-white">
                  For startups
                </h3>
                <h2 className="text-[23px] font-bold mb-2 text-[#170F49] group-hover:text-white">
                  Pro
                </h2>
              </div>
            </div>
            <p className="text-[#6F6C90] mb-4 text-[14px] group-hover:text-white">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>
            <p className="text-[52px] font-bold text-[#170F49] group-hover:text-white">
              $199{" "}
              <span className="text-[19px] font-medium text-[#6F6C90] group-hover:text-white">
                /monthly
              </span>
            </p>
            <h4 className="mt-6 mb-2 font-bold text-left text-[#170F49] text-[17px] group-hover:text-white">
              What’s included
            </h4>
            <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
              <li className="flex items-center group-hover:text-white ">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" className="" />
                </span>
                All analytics features
              </li>
              <li className="flex items-center group-hover:text-white ">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" className="" />
                </span>
                Up to 1,000,000 tracked visits
              </li>
              <li className="flex items-center group-hover:text-white ">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" className="" />
                </span>
                Premium support
              </li>
              <li className="flex items-center group-hover:text-white">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" className="" />
                </span>
                Up to 10 team members
              </li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
              Get started
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-[41px] w-full md:w-1/3 hover:bg-[#2D2095] hover:text-white plan-hover group">
            <div className="flex gap-3">
              <div className="">
                <img src="/images/price-3.png" />
              </div>
              <div>
                <h3 className="text-[17px] font-medium text-[#6F6C90] group-hover:text-white">
                  For big companies
                </h3>
                <h2 className="text-[23px] font-bold mb-2 text-[#170F49] group-hover:text-white">
                  Enterprise
                </h2>
              </div>
            </div>
            <p className="text-[#6F6C90] mb-4 text-[14px] group-hover:text-white">
              Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
              elit.
            </p>
            <p className="text-[52px] font-bold text-[#170F49] group-hover:text-white">
              $399{" "}
              <span className="text-[19px] font-medium text-[#6F6C90] group-hover:text-white">
                /monthly
              </span>
            </p>
            <h4 className="mt-6 mb-2 font-bold text-left text-[#170F49] text-[17px] group-hover:text-white">
              What’s included
            </h4>
            <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
              <li className="flex items-center group-hover:text-white">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" />
                </span>{" "}
                All analytics features
              </li>
              <li className="flex items-center group-hover:text-white">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" />
                </span>{" "}
                Up to 5,000,000 tracked visits
              </li>
              <li className="flex items-center group-hover:text-white">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" />
                </span>{" "}
                Dedicated support
              </li>
              <li className="flex items-center group-hover:text-white">
                <span className="text-blue-500 mr-2">
                  <img src="/images/Check Circle.png" />
                </span>{" "}
                Up to 50 team members
              </li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPlans;
