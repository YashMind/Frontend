import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Turn Conversations into Actions with AI Agents",
    description:
      "Enhance your chatbot’s capabilities by connecting it to Zapier & AI actions.",
  },
  {
    title: "Automated Translations for Global Engagement",
    description:
      "If your chatbot serves users worldwide, language barriers could make communication challenging.",
  },
  {
    title: "Turn Conversations into Leads Automatically",
    description:
      "With Fastdata, lead collection is effortless by allowing your chatbot to gather contact details directly from users during conversations.",
  },
  {
    title: "Keep Your Bot Up-to-Date With Automated Retraining",
    description:
      "Keeping your chatbot up-to-date is crucial when managing a website that frequently changes content or receives updates.",
  },
];

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div>
    <div className="mb-2 flex items-start gap-2">
      <Image alt="icon" src="/images/Frame-icon.png" height={29} width={29} />
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    <p className="text-xs text-white font-light mb-4">{description}</p>
    <button className="cursor-pointer bg-[#0073AA] text-white text-xs px-6 py-2 rounded-[22px] font-bold">
      Try Now
    </button>
  </div>
);

const TurnConversation = () => {
  return (
    <div className="bg-[#2C1F94] py-20 lg:px-24 text-white ">
      <div className="container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-16">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[1]} />
          </div>

          {/* Center Image */}
          <div className="flex justify-center mb-12 lg:mb-0">
            <Image
              alt="Laptop screen"
              src="/images/laptop-screen.png"
              height={384}
              width={483}
            />
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-16">
            <FeatureCard {...features[2]} />
            <FeatureCard {...features[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnConversation;

// import Image from "next/image";
// import React from "react";

// const TurnConversation = () => {
//   return (
//     <div className="bg-[#2C1F94] py-20 lg:px-24 text-white mb-[78px]">
//       <div className="container">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
//           {/* Left Column Features */}
//           <div className="flex flex-col gap-16">
//             <div>
//               <div className="mb-2">
//                 <Image
//                   alt="alt"
//                   src="/images/Frame-icon.png"
//                   height={29}
//                   width={29}
//                 />
//                 <h3 className="font-bold text-lg">
//                   Turn Conversations into Actions with AI Agents
//                 </h3>
//               </div>
//               <p className="text-xs text-white font-light mb-4">
//                 Enhance your chatbot’s capabilities by connecting it to Zapier &
//                 AI actions.
//               </p>
//               <button className="cursor-pointer bg-[#0073AA] text-white text-xs px-6 py-2 rounded-[22px] font-bold">
//                 Try Now
//               </button>
//             </div>

//             <div>
//               <div className="mb-2">
//                 <Image
//                   alt="alt"
//                   src="/images/Frame-icon.png"
//                   height={29}
//                   width={29}
//                 />
//                 <h3 className="font-bold text-lg">
//                   Automated Translations for Global Engagement
//                 </h3>
//               </div>
//               <p className="text-xs text-white font-light mb-4">
//                 If your chatbot serves users worldwide, language barriers could
//                 make communication challenging.
//               </p>
//               <button className="cursor-pointer bg-[#0073AA] text-white text-xs px-6 py-2 rounded-[22px] font-bold">
//                 Try Now
//               </button>
//             </div>
//           </div>

//           {/* Center Image */}
//           <div className="flex justify-center mb-12 lg:mb-0">
//             <Image
//               alt="alt"
//               src="/images/laptop-screen.png"
//               height={384}
//               width={483}
//             />
//           </div>

//           {/* Right Column Features */}
//           <div className="flex flex-col gap-16">
//             <div>
//               <div className="mb-2">
//                 <Image
//                   alt="alt"
//                   src="/images/Frame-icon.png"
//                   height={29}
//                   width={29}
//                 />
//                 <h3 className="font-bold text-lg">
//                   Turn Conversations into Leads Automatically
//                 </h3>
//               </div>
//               <p className="text-xs text-white font-light mb-4">
//                 With Fastdata, lead collection is effortless by allowing your
//                 chatbot to gather contact details directly from users during
//                 conversations.
//               </p>
//               <button className="cursor-pointer bg-[#0073AA] text-white text-xs px-6 py-2 rounded-[22px] font-bold">
//                 Try Now
//               </button>
//             </div>

//             <div>
//               <div className="mb-2">
//                 <Image
//                   alt="alt"
//                   src="/images/Frame-icon.png"
//                   height={29}
//                   width={29}
//                 />
//                 <h3 className="font-bold text-lg">
//                   Keep Your Up-to-Date With Automated Retraining
//                 </h3>
//               </div>
//               <p className="text-xs text-white font-light mb-4">
//                 Keeping your chatbot up-to-date is crucial when managing a
//                 website that frequently changes content or receives updates.
//               </p>
//               <button className="cursor-pointer bg-[#0073AA] text-white text-xs px-6 py-2 rounded-[22px] font-bold">
//                 Try Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TurnConversation;
