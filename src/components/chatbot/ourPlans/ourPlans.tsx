import React from 'react'

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
            <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-1/3 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-[58px] w-[58px] flex justify-center items-center rounded-full bg-blue-100">
                  <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-sm text-gray-500">For individuals</h3>
              <h2 className="text-xl font-semibold mb-2">Basic</h2>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.
              </p>
              <p className="text-3xl font-bold">
                $99{" "}
                <span className="text-base font-medium text-gray-500">
                  /monthly
                </span>
              </p>
              <h4 className="mt-6 mb-2 font-semibold text-left">
                What's included
              </h4>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> All analytics
                  features
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Up to 250,000
                  tracked visits
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Normal support
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Up to 3 team
                  members
                </li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                Get started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-[#501794] to-[#40659F] rounded-2xl shadow-xl p-6 w-full md:w-1/3 text-center text-white relative">
              <div className="absolute top-4 right-4 bg-white text-sm text-gray-700 px-2 py-1 rounded-full">
                Popular
              </div>
              <div className="flex justify-center mb-4">
                <div className="h-[58px] w-[58px] flex justify-center items-center rounded-full bg-white/30">
                  <div className="h-6 w-6 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-sm text-white/80">For startups</h3>
              <h2 className="text-xl font-semibold mb-2">Pro</h2>
              <p className="text-white/90 mb-4">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.
              </p>
              <p className="text-3xl font-bold">
                $199{" "}
                <span className="text-base font-medium text-white/80">
                  /monthly
                </span>
              </p>
              <h4 className="mt-6 mb-2 font-semibold text-left">
                What's included
              </h4>
              <ul className="text-left text-sm text-white space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-white mr-2">✔</span> All analytics
                  features
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✔</span> Up to 1,000,000
                  tracked visits
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✔</span> Premium support
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✔</span> Up to 10 team
                  members
                </li>
              </ul>
              <button className="bg-white text-blue-600 py-2 px-6 rounded-full font-medium hover:bg-gray-100 transition">
                Get started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-1/3 text-center">
              <div className="flex justify-center mb-4">
                <div className="h-[58px] w-[58px] flex justify-center items-center rounded-full bg-blue-100">
                  <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-sm text-gray-500">For big companies</h3>
              <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                adipiscing elit.
              </p>
              <p className="text-3xl font-bold">
                $399{" "}
                <span className="text-base font-medium text-gray-500">
                  /monthly
                </span>
              </p>
              <h4 className="mt-6 mb-2 font-semibold text-left">
                What's included
              </h4>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> All analytics
                  features
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Up to 5,000,000
                  tracked visits
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Dedicated
                  support
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✔</span> Up to 50 team
                  members
                </li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OurPlans;
