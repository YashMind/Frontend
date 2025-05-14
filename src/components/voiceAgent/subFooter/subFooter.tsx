import Image from "next/image";
import React from "react";

const SubFooter = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row center-img md:items-start gap-20 text-white p-6 md:p-10 rounded-xl space-y-6 md:space-y-0">
        {/* Image Section */}
        <div className="relative bg-clr">
          <Image
            alt="Horace Cole"
            className="relative z-2"
            src="/images/person.png"
            height={480}
            width={330}
          />
          <div className="text-right py-[22px] text-lg font-extrabold  relative z-2">
            <h4 className="text-sm font-semibold text-white">Horace Cole</h4>
            <p className="text-sm text-[#808080]">Senior Brand Specialist</p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-[#0B0D2E] p-6 pl-6 md:pl-[90px] relative w-full md:w-[650px] pb-6 md:pb-[110px] bg-bottom">
          {/* Quotation mark */}
          <Image
            alt="Quote mark"
            className="absolute -left-[22px] -top-[50px] z-2 md:-left-[22px] md:-top-[6px] w-[70px] md:w-[90px]"
            src="/images/Quotes.png"
            height={90}
            width={90}
          />

          {/* Quote Text */}
          <h2 className="text-2xl md:text-[48px] font-bold mb-4">
            Seamless, smart, and truly transformative.
          </h2>
          <div className="lft-border">
            <p className="text-sm md:text-base font-medium text-white leading-relaxed mb-4">
              Yashraa’s VoiceAgent exceeded all expectations. The AI handled
              real-time customer queries with astonishing accuracy and a natural
              tone, making our brand feel more approachable and intelligent.
            </p>
            <p className="text-sm md:text-base font-medium leading-relaxed mb-4">
              The integration was effortless, and their support team ensured
              everything aligned with our branding and internal workflows. It’s
              not just automation— it’s next-level interaction.
            </p>
            <p className="text-sm md:text-base font-medium">
              Thanks, team Yashraa!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
