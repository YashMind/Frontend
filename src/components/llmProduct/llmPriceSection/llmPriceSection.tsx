import React from "react";

const LlmPriceSection = () => {
  return (
    <section id="pricing">
      <div className="tab-sec mt-[100px]">
        <div className="container">
          {/* Toggle Switch */}
          <div className="flex  sm:flex-row items-center justify-center bg-white gap-4 sm:gap-2">
            <span className="font-medium text-indigo-900">Monthly</span>

            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-blue-500 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-300 transition duration-300"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
            </label>

            <span className="font-medium text-gray-700">Annually</span>
          </div>

          {/* Plan Buttons */}
          <div className="my-[50px]">
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="bg-[#2D2095] text-white px-6 py-2 rounded-[22px] text-lg font-semibold">
                Chat Bot
              </button>
              <button className="border border-[#2D2095] text-black text-lg font-semibold px-6 py-2 rounded-[22px]">
                Voice agent
              </button>
              <button className="border border-[#2D2095] text-black text-lg font-semibold px-6 py-2 rounded-[22px]">
                Chat LLM
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6">
            {/* CARD */}
            {[...Array(3)].map((_, i) => {
              const data = [
                {
                  title: "Basic",
                  for: "individuals",
                  price: "$99",
                  image: "/images/price1.png",
                  features: [
                    "All analytics features",
                    "Up to 250,000 tracked visits",
                    "Normal support",
                    "Up to 3 team members",
                  ],
                },
                {
                  title: "Pro",
                  for: "startups",
                  price: "$199",
                  image: "/images/price-2.png",
                  features: [
                    "All analytics features",
                    "Up to 1,000,000 tracked visits",
                    "Premium support",
                    "Up to 10 team members",
                  ],
                },
                {
                  title: "Enterprise",
                  for: "big companies",
                  price: "$399",
                  image: "/images/price-3.png",
                  features: [
                    "All analytics features",
                    "Up to 5,000,000 tracked visits",
                    "Dedicated support",
                    "Up to 50 team members",
                  ],
                },
              ][i];

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md p-8 w-full lg:w-1/3 hover:bg-[#2D2095] hover:text-white group transition-all duration-300"
                >
                  <div className="flex gap-3 mb-4">
                    <img src={data.image} alt="" />
                    <div>
                      <h3 className="text-sm font-medium text-[#6F6C90] group-hover:text-white">
                        For {data.for}
                      </h3>
                      <h2 className="text-xl font-bold text-[#170F49] group-hover:text-white">
                        {data.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-[#6F6C90] text-sm mb-4 group-hover:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <p className="text-4xl font-bold text-[#170F49] group-hover:text-white mb-4">
                    {data.price}{" "}
                    <span className="text-lg font-medium text-[#6F6C90] group-hover:text-white">
                      /monthly
                    </span>
                  </p>

                  <h4 className="mt-6 mb-2 font-bold text-[#170F49] text-base group-hover:text-white">
                    What’s included
                  </h4>

                  <ul className="text-sm text-gray-600 space-y-2 mb-6 group-hover:text-white">
                    {data.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-blue-500 mr-2">
                          <img src="/images/Check Circle.png" alt="check" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition">
                    Get started
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LlmPriceSection;
