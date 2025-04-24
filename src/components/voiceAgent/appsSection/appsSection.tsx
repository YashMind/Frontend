import Image from "next/image";
import React from "react";

const AppsSection = () => {
  return (
    <div className="container">
      <div className="text-white px-6 md:px-16 py-10 md:py-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 overflow-hidden">
        {/* Left: Image Box */}
        <div className="w-full md:w-[40%] flex justify-center">
          <Image
            alt="alt"
            src="/images/ai-app.png"
            height={450}
            width={450}
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-auto"
          />
        </div>

        {/* Right: Heading and Icons */}
        <div className="flex flex-col justify-start items-center md:items-start gap-6 w-full md:w-[60%]">
          <h2
            className="text-[32px] sm:text-[36px] md:text-[40px] text-center md:text-left w-full md:w-[526px]"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Integrate with more than{" "}
            <span className="text-[#34C8FB]">30+ apps</span>
          </h2>

          {/* Icons grid */}
          <div className="mt-4 w-full overflow-hidden">
            {/* Right to Left Scroll Row */}
            <div className="RightToLeft flex whitespace-nowrap w-max">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {[...Array(6)].map((_, j) => (
                    <Image
                      key={`rtl-${i}-${j}`}
                      alt="alt"
                      src="/images/slide-img1.png"
                      height={52}
                      width={52}
                      className="mx-2 w-[40px] sm:w-[48px] md:w-[52px] h-auto"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>

            {/* Spacer */}
            <div className="h-4" />

            {/* Left to Right Scroll Row */}
            <div className="LeftToRight flex whitespace-nowrap w-max">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {[...Array(6)].map((_, j) => (
                    <Image
                      key={`ltr-${i}-${j}`}
                      alt="alt"
                      src="/images/slide-img1.png"
                      height={52}
                      width={52}
                      className="mx-2 w-[40px] sm:w-[48px] md:w-[52px] h-auto"
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsSection;
