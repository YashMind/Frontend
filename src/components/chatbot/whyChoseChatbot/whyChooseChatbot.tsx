import Image from "next/image";
import React from "react";

const features = [
  {
    id: "01",
    title: "Chat History",
    description:
      "Take a look at each and every conversation that’s taken place within any of your chatbots.",
    icon: "/images/chat.png",
    iconSize: { width: 46, height: 46 },
  },
  {
    id: "02",
    title: "Bot Personas",
    description:
      "Change the bot prompt to change the character and purpose of the chatbot for your needs.",
    icon: "/images/bot-icon.png",
    iconSize: { width: 35, height: 33 },
  },
  {
    id: "04",
    title: "Import Your Data",
    description:
      "Import PDFs, TXT, DOCX, CSV, XLS files, Google Sheets, Websites, and YouTube Videos into your chatbot .",
    icon: "/images/import-icon.png",
    iconSize: { width: 35, height: 33 },
  },
  {
    id: "05",
    title: "Privacy & Security",
    description:
      "We use military grade encryption on all uploaded data for your security and peace of mind.",
    icon: "/images/lock-icon.png",
    iconSize: { width: 35, height: 33 },
  },
  {
    id: "06",
    title: "Branding",
    description:
      "Customise your chatbot with your own avatar, text colours and chatbot bubble to match your own branding.",
    icon: "/images/brand-icon.png",
    iconSize: { width: 35, height: 33 },
  },
  {
    id: "07",
    title: "Multi Channel",
    description:
      "Take a look at each and every conversation that's taken place within any of your chatbots.",
    icon: "/images/Channel.png",
    iconSize: { width: 35, height: 33 },
  },
  {
    id: "08",
    title: "Control Access",
    description:
      "Choose to share your Chatbot publicly by embedding or keep for private use within your FastBots account.",
    icon: "/images/access.png",
    iconSize: { width: 35, height: 33 },
  },
];

const FeatureCard = ({ icon, iconSize, id, title, description }: any) => (
  <div className="w-[235px] mb-[30px]">
    <div className="flex justify-between items-center">
      <div className="">
        <Image
          alt={title}
          src={icon}
          width={iconSize.width}
          height={iconSize.height}
        />
      </div>
      {/* <div className="text-sm font-light">{id}</div> */}
    </div>
    <div>
      <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">{title}</h4>
      <p className="text-xs font-light leading-relaxed ">{description}</p>
    </div>
  </div>
);

const WhyChooseChatbot = () => {
  return (
    <div
      id="features"
      className="bg-white pt-[88px] px-4 lg:px-24 bg-no-repeat bg-left-bottom "
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row  gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left bg-center ">
          <h2
            className="text-3xl lg:text-4x text-[40px] font-normal text-black mb-4"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Import. Brand. Scale. Succeed.<span className="text-[#34C8FB]  ">All in One Bot</span>
          </h2>
          <p className="text-black font-bold text-base leading-relaxed max-w-md mx-auto lg:mx-0 mt-[22px]">
            Yashraa’s AI Bots deliver an unmatched experience with versatile features: access chat history, create tailored bot personas,Import business-critical data. Prioritizing privacy and security, while offering seamless branding options the perfect solution to enhance customer interactions, improve efficiency, and future-proof your business with AI.
          </p>
          <div className="relative">

            <img src="/images/ai-generated-img.png" className="absolute w-[80%]" />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 m-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseChatbot;

// import Image from "next/image";
// import React from "react";

// const WhyChooseChatbot = () => {
//   return (
//     <div
//       id="features"
//       className="bg-white mt-[88px] px-4 lg:px-24 bg-no-repeat bg-left-bottom lg:bg-[url('/images/roboot.png')]"
//     >
//       <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row  gap-10">
//         {/* Left Section */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <h2
//             className="text-3xl lg:text-4x text-[40px] font-normal text-black mb-4"
//             style={{ fontFamily: "'Audiowide', sans-serif" }}
//           >
//             Why Choose <span className="text-[#34C8FB]  ">ChatBot ai?</span>
//           </h2>
//           <p className="text-black font-bold text-base leading-relaxed max-w-md mx-auto lg:mx-0 mt-[22px]">
//             We pride ourselves on making it easy for individuals and business
//             owners around the world to use artificial intelligence to become
//             more productive.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 m-auto ">
//           <div className="w-[235px]">
//             <div className="flex justify-between items-center">
//               <div className="">
//                 <Image
//                   alt="alt"
//                   src="/images/chat.png"
//                   height={46}
//                   width={46}
//                 />
//               </div>
//               <div className="text-sm font-light">01</div>
//             </div>
//             <div>
//               <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
//                 Chat History
//               </h4>
//               <p className="text-xs font-light leading-relaxed ">
//                 Take a look at each and every conversation that’s taken place
//                 within any of your chatbots.
//               </p>
//             </div>
//           </div>

//           <div className="w-[235px] mb-[30px]">
//             <div className="flex justify-between items-center">
//               <div className="">
//                 <Image
//                   alt="alt"
//                   src="/images/bot-icon.png"
//                   height={33}
//                   width={35}
//                 />
//               </div>
//               <div className="text-sm font-light">02</div>
//             </div>
//             <div>
//               <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
//                 Bot Personas
//               </h4>
//               <p className="text-xs font-light leading-relaxed ">
//                 Change the bot prompt to change the character and purpose of the
//                 chatbot for your needs.
//               </p>
//             </div>
//           </div>

//           <div className="w-[235px] mb-[30px]">
//             <div className="flex justify-between items-center">
//               <div className="">
//                 <Image
//                   alt="alt"
//                   src="/images/ai-icon.png"
//                   height={33}
//                   width={35}
//                 />
//               </div>
//               <div className="text-sm font-light">03</div>
//             </div>
//             <div>
//               <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
//                 Choose Your AI
//               </h4>
//               <p className="text-xs font-light leading-relaxed ">
//                 Select from Open AI GPTs, Claude 3.5, or Google Gemini language
//                 models, depending on your requirements.
//               </p>
//             </div>
//           </div>
//           <div className="w-[235px] mb-[30px]">
//             <div className="flex justify-between items-center">
//               <div className="">
//                 <Image
//                   alt="alt"
//                   src="/images/import-icon.png"
//                   height={33}
//                   width={35}
//                 />
//               </div>
//               <div className="text-sm font-light">04</div>
//             </div>
//             <div>
//               <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
//                 Import Your Data
//               </h4>
//               <p className="text-xs font-light leading-relaxed ">
//                 Import PDFs, TXT, DOCX, CSV, XLS files, Google Sheets, Websites,
//                 and YouTube Videos into your chatbot .
//               </p>
//             </div>
//           </div>

//           <div className="w-[235px] mb-[30px]">
//             <div className="flex justify-between items-center">
//               <div className="">
//                 <Image
//                   alt="alt"
//                   src="/images/lock-icon.png"
//                   height={33}
//                   width={35}
//                 />
//               </div>
//               <div className="text-sm font-light">05</div>
//             </div>
//             <div>
//               <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
//                 Privacy & Security
//               </h4>
//               <p className="text-xs font-light leading-relaxed ">
//                 We use military grade encryption on all uploaded data for your
//                 security and peace of mind.
//               </p>
//             </div>
//           </div>
//           <div className="w-[235px] mb-[30px]">
//             <div className="flex justify-between items-center">
//               <div className="">
//                 <Image
//                   alt="alt"
//                   src="/images/brand-icon.png"
//                   height={33}
//                   width={35}
//                 />
//               </div>
//               <div className="text-sm font-light">06</div>
//             </div>
//             <div>
//               <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
//                 Branding
//               </h4>
//               <p className="text-xs font-light leading-relaxed ">
//                 Customise your chatbot with your own avatar, text colours and
//                 chatbot bubble to match your own branding.
//               </p>
//             </div>
//           </div>

//           <div className="w-[235px] mb-[30px]">
//             <div className="flex justify-between items-center">
//               <div className="">
//                 <Image
//                   alt="alt"
//                   src="/images/Channel.png"
//                   height={33}
//                   width={35}
//                 />
//               </div>
//               <div className="text-sm font-light">07</div>
//             </div>
//             <div>
//               <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
//                 Multi Channel
//               </h4>
//               <p className="text-xs font-light leading-relaxed ">
//                 Take a look at each and every conversation that's taken place
//                 within any of your chatbots.
//               </p>
//             </div>
//           </div>
//           <div className="w-[235px] mb-[30px]">
//             <div className="flex justify-between items-center">
//               <div className="">
//                 <Image
//                   alt="alt"
//                   src="/images/access.png"
//                   height={33}
//                   width={35}
//                 />
//               </div>
//               <div className="text-sm font-light">08</div>
//             </div>
//             <div>
//               <h4 className=" text-black mb-1 text-lg font-bold py-[14px]">
//                 Control Access
//               </h4>
//               <p className="text-xs font-light leading-relaxed ">
//                 Choose to share your Chatbot publicly by embedding or keep for
//                 private use within your FastBots account.
//               </p>
//             </div>
//           </div>
//           {/* Add the remaining blocks similarly... */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseChatbot;
