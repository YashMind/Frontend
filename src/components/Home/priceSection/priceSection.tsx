"use client"
import { getAllSubscriptionPlans } from "@/store/slices/admin/adminSlice";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PriceSection = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { subscriptionPlansData } = useSelector(
    (state: RootState) => state.admin
  );

  useEffect(() => {
    dispatch(
      getAllSubscriptionPlans()
    );
  }, [dispatch]);

  return (
    <div className="price mt-[81px]">
      <div className="container px-4">
        <h1
          className="font-normal text-[24px] sm:text-[30px] text-white text-center sm:text-left"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Pricing & Plans
        </h1>
        <img src="/images/heading.png" className="mx-auto sm:mx-0 mt-2" />

        <div className="pt-12">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscriptionPlansData?.data?.map((item:any, index) => {
              const isPro = item.name === "Pro";
              const isEnterprise = item.name === "Enterprise";
              const isBasic = !isPro && !isEnterprise;

              const wrapperClass = isPro
                ? "p-[2.31px] rounded-tr-[18px] rounded-bl-[18px] bg-gradient-to-r from-[#4E2295] to-[#42579D] h-full"
                : "bg-[#1B1441] rounded-tr-[18px] rounded-bl-[18px] border border-[#FFFFFF33] p-6 text-white flex flex-col justify-between";

              const innerClass = isPro
                ? "bg-[#1B1441] rounded-tr-[16px] rounded-bl-[16px] backdrop-blur-[32.8px] shadow px-5 py-8 text-white flex flex-col justify-between h-full"
                : "";

              return (
                <div key={index} className={wrapperClass}>
                  <div className={innerClass}>
                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{ fontFamily: "'Audiowide', sans-serif" }}
                      >
                        {item.name}
                      </h3>
                      <img src="/images/Line.png" />
                      <p className="text-sm font-normal mt-[10px] mb-[15px]">
                        {item.name === "Basic"
                          ? "Ideal for small teams starting with AI-powered chatbots and limited crawling."
                          : item.name === "Pro"
                            ? "For growing teams needing more power, integrations, and access."
                            : "Ultimate access with high limits, all features, and max scalability."}
                      </p>
                      <h2 className="text-[28px] font-semibold pb-[20px]">
                        ₹{item.pricing}{" "}
                        <span className="text-xs font-normal text-[#FFFFFFA1]">
                          /month
                        </span>
                      </h2>

                      {item.is_active ? (
                        (isPro || isEnterprise) && (
                          <button className="w-full rounded-full bg-gradient-to-r from-[#501794] to-[#40659F] py-2 mb-6 text-white font-medium text-[17px]">
                            Choose This Plan
                          </button>
                        )
                      ) : (
                        <p className="text-red-500 font-semibold mb-4">This Plan is Not Active Right Now</p>
                      )}

                      <ul className="space-y-2 text-sm">
                        {item.features &&
                          item.features.split(",").map((feature:any, idx:any) => (
                            <li className="flex gap-2" key={idx}>
                              <img src="/images/star.png" /> {feature.trim()}
                            </li>
                          ))}
                      </ul>
                    </div>

                    {(isPro || isEnterprise || isBasic) && (
                      <div className="mt-6">
                        <hr
                          className={
                            isPro
                              ? "border-purple-400 mb-4"
                              : isEnterprise
                                ? "border-blue-400 mb-4"
                                : "border-[2.31px] border-transparent [border-image-source:linear-gradient(98.8deg,#DE4DBC_26.92%,#1D86C2_68.19%,#2B126F_132.4%)] [border-image-slice:1] my-[20px]"
                          }
                        />
                        <p className="text-xs">• 100% Satisfaction Guarantee</p>
                        <p className="text-xs">• 24 x 7 Customer Support</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          </div>


        </div>
      </div>
    </div>
  );
};

export default PriceSection;

