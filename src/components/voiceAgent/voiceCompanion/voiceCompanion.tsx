import Image from "next/image";
import React from "react";

const VoiceCompanion = () => {
  return (
    <div className="  text-center m-auto">
      <Image
        alt="alt"
        className="m-auto"
        src="/images/Voice-Companion2.png"
        height={704}
        width={629}
      />
      <h2
        className="text-[28px] md:text-[44px] py-4 text-white w-full md:w-[768px] m-auto mt-[43px] text-center "
        style={{ fontFamily: "'Audiowide', sans-serif" }}
      >
        Why Vocal AI is your Ultimate{" "}
        <span className="text-[#34C8FB]">Voice Companion</span>
      </h2>
    </div>
  );
};

export default VoiceCompanion;
