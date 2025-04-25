import React from "react";

const LlmFaqs = () => {
  return (
    <section id="faq">
      <div className="bg-white px-6  my-[27px]">
        <div className="container mx-auto">
          <div className=" flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Left side - Robot Image */}
            <div className="w-full max-md:w-auto lg:w-1/2 flex justify-center">
              <img
                src="/images/faq.png"
                alt="FAQ Robot"
                className="max-w-full"
              />
            </div>

            {/* Right side - Static FAQ */}
            <div className="w-full md:w-1/2 bg-gradient-to-b from-[#2D2095] to-[#2D2095] text-white rounded-2xl p-6 md:p-10 space-y-6">
              <h2 className="font-bold text-[32px] md:text-[40px] ">
                Do you have questions?
              </h2>

              {/* Static FAQ Items */}
              <div className="border-b border-white/30 pb-4">
                <p className="text-xl font-semibold">What is this platform?</p>
                <p className="text-sm text-[#FAFAFA] mt-2">
                  This platform is designed to help you manage FAQs efficiently
                  with a beautiful UI.
                </p>
              </div>

              <div className="border-b border-white/30 pb-4">
                <p className="text-xl font-semibold">How do I get started?</p>
                <p className="text-sm text-[#FAFAFA] mt-2">
                  Simply sign up and follow the onboarding steps to create your
                  first FAQ section.
                </p>
              </div>

              <div className="border-b border-white/30 pb-4">
                <p className="text-xl font-semibold">Is it mobile friendly?</p>
                <p className="text-sm text-[#FAFAFA] mt-2">
                  Yes, this design is fully responsive and optimized for all
                  devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LlmFaqs;
