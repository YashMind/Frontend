"use client";
import { getPublicSubscriptionPlans } from "@/store/slices/admin/adminSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { subscribe } from "node:diagnostics_channel";
import SubscriptionPlans from "@/components/Admin/SubscriptionPlans/subscriptionPlans";

interface SubscriptionPlan {
  id: number;
  name: string;
  pricing: number;
  currency: string;
  duration_days: number;
  is_active: boolean;
  features: string;
}

const PriceSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<'Weekly' | '15 Days' | 'monthly' | 'quarterly' | 'biannual' | 'annual'>('monthly');

  const { publicSubscriptionPlansData, loading, error } = useSelector(
    (state: RootState) => state.admin
  );

  useEffect(() => {
    dispatch(getPublicSubscriptionPlans());
    console.log("+++++++++++++++++++")
  }, [dispatch]);

  console.log(publicSubscriptionPlansData)

  // Filter plans based on duration_days
  const filteredPlans = Object.values(publicSubscriptionPlansData).filter((item: SubscriptionPlan) => {
    switch (selectedPlan) {
      case 'Weekly':
        return item.duration_days == 7;
      case '15 Days':
        return item.duration_days == 15;
      case 'monthly':
        return item.duration_days == 30;
      case 'quarterly':
        return item.duration_days == 90;
      case 'biannual':
        return item.duration_days == 180;
      case 'annual':
        return item.duration_days == 365;
      default:
        return false;
    }
  });

  //  check if the plan exist 
  const hasPlansOfType = (type: string) => {
    return Object.values(publicSubscriptionPlansData).some((plan: SubscriptionPlan) => {
      switch (type) {
        case 'Weekly':
          return plan.duration_days == 7;
        case '15 Days':
          return plan.duration_days == 15;
        case 'monthly':
          return plan.duration_days == 30;
        case 'quarterly':
          return plan.duration_days == 90;
        case 'biannual':
          return plan.duration_days == 180;
        case 'annual':
          return plan.duration_days == 365;
        default:
          return false;
      }
    });
  };


  const getDurationText = (days: number) => {
    if (days <= 7) return 'Weekly';
    if (days <= 15) return '15 Days';
    if (days <= 31) return 'month';
    if (days <= 93) return '3 months';
    if (days <= 183) return '6 months';
    return 'year';
  };

  return (
    <div className="price mt-[81px]" id="pricing">
      <div className="container px-4">
        <h1 className="font-normal text-[24px] sm:text-[30px] text-white text-center sm:text-left"
          style={{ fontFamily: "'Audiowide', sans-serif" }}>
          Pricing & Plans
        </h1>
        <img src="/images/heading.png" className="mx-auto sm:mx-0 mt-2" alt="Heading" />

        {/* Plan Selection Buttons - Always visible */}
        <div className="flex justify-center mt-8 mb-6">
          <div className="bg-[#1B1441] border border-[#FFFFFF33] rounded-full p-1 flex">
            {['Weekly', '15 Days', 'monthly', 'quarterly', 'biannual', 'annual'].map((planType) =>
              hasPlansOfType(planType) ? (
                <button
                  key={planType}
                  onClick={() => setSelectedPlan(planType as any)}
                  className={`px-4 cursor-pointer py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedPlan === planType
                    ? 'bg-gradient-to-r from-[#501794] to-[#40659F] text-white'
                    : 'text-[#FFFFFFA1] hover:text-white'
                    }`}
                >
                  {planType.charAt(0).toUpperCase() + planType.slice(1)} Plan
                </button>
              ) : null
            )}

          </div>
        </div>

        {/* Loading State */}
        {loading && <div className="text-white text-center py-8">Loading plans...</div>}

        {/* Error State */}
        {error && <div className="text-red-500 text-center py-8">Error: {error}</div>}

        {/* Plans Display */}
        {!loading && !error && (
          <div className="pt-12">
            {(!filteredPlans || filteredPlans.length === 0) ? (
              <div className="text-white text-center py-8">
                No {selectedPlan} plans available
              </div>
            ) : (
              <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlans.map((item: SubscriptionPlan) => {
                  const isPro = item.name === "Pro";
                  const wrapperClass = isPro
                    ? "p-[2.31px] rounded-tr-[18px] rounded-bl-[18px] bg-gradient-to-r from-[#4E2295] to-[#42579D] h-full"
                    : "bg-[#1B1441] rounded-tr-[18px] rounded-bl-[18px] border border-[#FFFFFF33] p-6 text-white flex flex-col justify-between";

                  const innerClass = isPro
                    ? "bg-[#1B1441] rounded-tr-[16px] rounded-bl-[16px] backdrop-blur-[32.8px] shadow px-5 py-8 text-white flex flex-col justify-between h-full"
                    : "";

                  return (
                    <div key={item.id} className={wrapperClass}>
                      <div className={innerClass}>
                        {/* ... rest of your plan card JSX ... */}
                        <div>
                          <h3 className="text-lg font-bold" style={{ fontFamily: "'Audiowide', sans-serif" }}>
                            {item.name}
                          </h3>
                          <img src="/images/Line.png" alt="Divider" />

                          <p className="text-sm font-normal mt-[10px] mb-[15px]">
                            {item.name === "Basic"
                              ? "Ideal for small teams starting with AI-powered chatbots and limited crawling."
                              : item.name === "Pro"
                                ? "For growing teams needing more power, integrations, and access."
                                : "Ultimate access with high limits, all features, and max scalability."}
                          </p>

                          <h2 className="text-[28px] font-semibold pb-[20px]">
                            {item.currency === "USD" ? "$" : "₹"}
                            {item.pricing}{" "}
                            <span className="text-xs font-normal text-[#FFFFFFA1] mr-3.5">
                              /{getDurationText(item.duration_days)}
                            </span>
                            {item.name === "Basic" && selectedPlan === 'monthly' && (
                              <Link href="/activate-trial"
                                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-400 text-white text-sm font-medium rounded-full hover:from-green-600 hover:to-teal-500 transition-colors ml-2">
                                7-Day Free Trial
                              </Link>
                            )}
                          </h2>

                          {item.is_active ? (
                            <Link
                              href={`/gateways/${item.id}`}
                              className="block w-full text-center rounded-full bg-gradient-to-r from-[#501794] to-[#40659F] py-2 mb-6 text-white font-medium text-[17px]">
                              Choose This Plan
                            </Link>
                          ) : (
                            <p className="text-red-500 font-semibold mb-4">
                              This Plan is Not Active Right Now
                            </p>
                          )}

                          <ul className="space-y-2 text-sm">
                            {item.features?.split(",").map((feature: string, idx: number) => (
                              <li className="flex gap-2" key={idx}>
                                <img src="/images/star.png" alt="Feature icon" />
                                {feature.trim()}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-2 mt-10 self-stretch">
                          <hr className="border-transparent [border-image-source:linear-gradient(98.8deg,#DE4DBC_26.92%,#1D86C2_68.19%,#2B126F_132.4%)] [border-image-slice:1] mb-2" />
                          <p className="text-xs">• 100% Satisfaction Guarantee</p>
                          <p className="text-xs">• 24 x 7 Customer Support</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceSection;