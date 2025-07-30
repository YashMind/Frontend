"use client";
import {
  getAllSubscriptionPlans,
  getPublicSubscriptionPlans,
} from "@/store/slices/admin/adminSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

interface UserProfileData {
  activate_plan?: boolean;
}

const PriceSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('monthly');
 

  const { publicSubscriptionPlansData } = useSelector(
    (state: RootState) => state.admin
  );
  const userData: UserProfileData | null = useSelector(
  (state: RootState) => state.auth.loggedInUser
  );

  useEffect(() => {
    dispatch(getPublicSubscriptionPlans());
  }, [dispatch]);
  // Filter plans based on selected type (first 3 are monthly, next 3 are annual)
  const filteredPlans = publicSubscriptionPlansData?.data?.filter((item: any, index: number) => {
    if (selectedPlan === 'monthly') {
      return index < 3; // First 3 plans are monthly
    } else {
      return index >= 3; // Next 3 plans are annual
    }
  });
  
  return (
    <div className="price mt-[81px]" id="pricing">
      <div className="container px-4">
        <h1
          className="font-normal text-[24px] sm:text-[30px] text-white text-center sm:text-left"
          style={{ fontFamily: "'Audiowide', sans-serif" }}
        >
          Pricing & Plans
        </h1>
        <img src="/images/heading.png" className="mx-auto sm:mx-0 mt-2" />
         <div className="flex justify-center mt-8 mb-6">
          <div className="bg-[#1B1441] border border-[#FFFFFF33] rounded-full p-1 flex">
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedPlan === 'monthly'
                  ? 'bg-gradient-to-r from-[#501794] to-[#40659F] text-white'
                  : 'text-[#FFFFFFA1] hover:text-white'
              }`}
            >
              Monthly Plan
            </button>
            <button
              onClick={() => setSelectedPlan('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedPlan === 'annual'
                  ? 'bg-gradient-to-r from-[#501794] to-[#40659F] text-white'
                  : 'text-[#FFFFFFA1] hover:text-white'
              }`}
            >
              Annual Plan
            </button>
          </div>
        </div>
        <div className="pt-12">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans?.map((item: any, index) => {
              const isPro = item.name === "Pro";
              const isEnterprise = item.name === "Enterprise";
              const isBasic = item.name === "Basic";

              const wrapperClass = isPro
                ? "p-[2.31px] rounded-tr-[18px] rounded-bl-[18px] bg-gradient-to-r from-[#4E2295] to-[#42579D] h-full"
                : "bg-[#1B1441] rounded-tr-[18px] rounded-bl-[18px] border border-[#FFFFFF33] p-6 text-white flex flex-col justify-between";

              const innerClass = isPro
                ? "bg-[#1B1441] rounded-tr-[16px] rounded-bl-[16px] backdrop-blur-[32.8px] shadow px-5 py-8 text-white flex flex-col justify-between h-full "
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
                        {item.currency === "USD" && "$"}
                        {item.currency === "INR" && "₹"}
                        {item.pricing}{" "}
                        <span className="text-xs font-normal text-[#FFFFFFA1] mr-3.5">
                          /{selectedPlan === 'monthly' ? 'month' : 'year'}
                        </span>
                        {item.name === "Basic" && selectedPlan === 'monthly' && (
                          <Link
                            href={"/activate-trial"}
                            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-400 text-white text-sm font-medium rounded-full hover:from-green-600 hover:to-teal-500 transition-colors ml-2"
                          >
                            7-Day Free Trial
                          </Link>
                        )}
                      </h2>

                      {item.is_active ? (
                        <button
                          onClick={() => router.push("/gateways/" + item.id)}
                          className="w-full rounded-full bg-gradient-to-r from-[#501794] to-[#40659F] py-2 mb-6 text-white font-medium text-[17px]"
                        >
                          Choose This Plan
                        </button>
                      ) : (
                        <p className="text-red-500 font-semibold mb-4">
                          This Plan is Not Active Right Now
                        </p>
                      )}

                      <ul className="space-y-2 text-sm">
                        {item.features &&
                          item.features
                            .split(",")
                            .map((feature: any, idx: any) => (
                              <li className="flex gap-2" key={idx}>
                                <img src="/images/star.png" /> {feature.trim()}
                              </li>
                            ))}
                      </ul>
                    </div>

                    {
                      <div className="mb-2 mt-10 self-stretch">
                        <hr
                          className={
                            " border-transparent [border-image-source:linear-gradient(98.8deg,#DE4DBC_26.92%,#1D86C2_68.19%,#2B126F_132.4%)] [border-image-slice:1] mb-2"
                          }
                        />
                        <p className="text-xs">• 100% Satisfaction Guarantee</p>
                        <p className="text-xs">• 24 x 7 Customer Support</p>
                      </div>
                    }
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
