import React from "react";

const cardData = [
  // {
  //   title: "Instagram",
  //   description:
  //     "Use your chatbot to respond to incoming messages to your Instagram business account.",
  //   img: "/images/icon1.png",
  //   borderColor: "#DF437E",
  //   bgColor: "#CC39A2",
  // },
  {
    title: "Whatsapp",
    description:
      "Connect your chatbot to a WhatsApp business number for automatic 24/7 responses.",
    img: "/images/logos_whatsapp-icon.png",
    borderColor: "#60D669",
    bgColor: "#60D669",
  },
  {
    title: "Wordpress",
    description:
      "Connect your bot with Slack workspaces for a seamless integration.",
    img: "/images/wordpress.png",
    borderColor: "#0073AA",
    bgColor: "#0073AA",
  },
  {
    title: "Zapier",
    description:
      "Use AI-powered automation with Zapier AI Actions to create more intelligent workflows.",
    img: "/images/logos_zapier.png",
    borderColor: "#FF4F00",
    bgColor: "#FF4F00",
  },
  {
    title: "Slack",
    description:
      "Connect your bot with Slack workspaces for a seamless integration.",
    img: "/images/devicon_slack.png",
    borderColor: "#EBB02E",
    bgColor: "#EBB02E",
  },
  // {
  //   title: "Messenger",
  //   description:
  //     "Use your chatbot to automatically reply to your Facebook pages messages or comments.",
  //   img: "/images/facebook-messenger-icon 1.png",
  //   borderColor: "#466CFF",
  //   bgColor: "#466CFF",
  // },
];

const IntegerationCard = ({
  title,
  description,
  img,
  borderColor,
  bgColor,
}: any) => (
  <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative my-[22px]">
    <div
      className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center"
      style={{ borderColor }}
    >
      <img className="" src={img} alt={title} />
    </div>
    <h2 className="pt-[9px] font-medium text-sm">{title}</h2>
    <p className="text-xs py-[9px] font-light">{description}</p>
    <button
      className="text-white px-4 py-1 rounded-full text-[12px] font-bold cursor-pointer"
      style={{ backgroundColor: bgColor }}
    >
      Connect
    </button>
  </div>
);

const OurChatbots = () => {
  return (
    <div className="relative h-screen z-80">
      {/* Background Image */}
      <div
        className="absolute -z-10 inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ai-generated-2nd.png')", zIndex: '-10' }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute -z-10 inset-0 bg-[linear-gradient(360deg,_#0083FF_-17.49%,_#1300AF_4.72%,_#2B255C_98.87%)] opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 block lg:flex items-center justify-between gap-12 container h-full">
        {/* Left Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-2/3 text-center">
          {cardData.map((card, index) => (
            <IntegerationCard key={index} {...card} />
          ))}
        </div>

        {/* Right Section */}
        <div className="text-center text-white sm:text-left w-full lg:w-1/3">
          <h2
            className="text-3xl md:text-4xl font-normal mb-4 leading-snug text-center lg:text-right mt-[10px] lg:mt-0"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            Our Chatbots <br />
            <span className="text-cyan-400 text-center lg:text-right">
              Integrate With
            </span>
          </h2>
          <p className="font-bold text-base mb-6 text-center lg:text-right ">
            Let our chatbots help your customers across multiple <br />
            social media channels at once
          </p>
          <div className=" text-center lg:text-right">
            <button className="cursor-pointer bg-white text-black px-6 py-2 rounded-full text-lg font-semibold shadow-md mb-8">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChatbots;

// import React from "react";

// const OurChatbots = () => {
//   return (
//     <div className="bg-[#1D0F8DED]  md:px-20 text-white py-[64px]">
//       <div className="block lg:flex items-center justify-between gap-12 container">
//         {/* Left Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6  w-full lg:w-2/3 text-center">
//           {/* Card 1 */}
//           <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative">
//             <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#DF437E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
//               <img className="" src="/images/icon1.png" />
//             </div>
//             <h2 className="pt-[9px] font-medium text-sm">Instagram</h2>
//             <p className="text-xs py-[9px] font-light">
//               Use your chatbot to respond to incoming messages to your Instagram
//               business account.
//             </p>
//             <button className="bg-[#CC39A2] text-white px-4 py-1 rounded-full text-[12px] font-bold">
//               Export All
//             </button>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative ">
//             <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#60D669] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
//               <img className="" src="/images/logos_whatsapp-icon.png" />
//             </div>
//             <h2 className="pt-[9px] font-medium text-sm">Whatsapp</h2>
//             <p className="text-xs py-[9px] font-light">
//               Connect your chatbot to a WhatsApp business number for automatic
//               24/7 responses.
//             </p>
//             <button className="bg-[#60D669] text-white px-4 py-1 rounded-full text-[12px] font-bold">
//               Export All
//             </button>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative my-[22px]">
//             <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#0073AA] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
//               <img className="" src="/images/wordpress.png" />
//             </div>
//             <h2 className="pt-[9px] font-medium text-sm">Wordpress</h2>
//             <p className="text-xs py-[9px] font-light">
//               Connect your bot with Slack workspaces for a seamless integration.
//             </p>
//             <button className="bg-[#0073AA] text-white px-4 py-1 rounded-full text-[12px] font-bold">
//               Export All
//             </button>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative my-[22px]">
//             <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#FF4F00] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
//               <img className="" src="/images/logos_zapier.png" />
//             </div>
//             <h2 className="pt-[9px] font-medium text-sm">Zapier</h2>
//             <p className="text-xs py-[9px] font-light">
//               Use AI-powered automation with Zapier AI Actions to create more
//               intelligent workflows.
//             </p>
//             <button className="bg-[#FF4F00] text-white px-4 py-1 rounded-full text-[12px] font-bold">
//               Export All
//             </button>
//           </div>

//           {/* Card 5 */}
//           <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative">
//             <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#EBB02E] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
//               <img className="" src="/images/devicon_slack.png" />
//             </div>
//             <h2 className="pt-[9px] font-medium text-sm">Slack</h2>
//             <p className="text-xs py-[9px] font-light">
//               Connect your bot with Slack workspaces for a seamless integration.
//             </p>
//             <button className="bg-[#EBB02E] text-white px-4 py-1 rounded-full text-[12px] font-bold">
//               Export All
//             </button>
//           </div>

//           {/* Card 6 */}
//           <div className="bg-white text-black rounded-2xl pb-[12px] pt-[25px]  px-[47px] shadow-lg relative ">
//             <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-[#466CFF] bg-[#D9D9D9] rounded-full h-[58px] w-[58px] flex justify-center items-center">
//               <img className="" src="/images/facebook-messenger-icon 1.png" />
//             </div>
//             <h2 className="pt-[9px] font-medium text-sm">Messenger</h2>
//             <p className="text-xs py-[9px] font-light">
//               Use your chatbot to automatically reply to your Facebook pages
//               messages or comments.
//             </p>
//             <button className="bg-[#466CFF] text-white px-4 py-1 rounded-full text-[12px] font-bold">
//               Export All
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="text-center sm:text-left w-full lg:w-1/3">
//           <h2
//             className="text-3xl md:text-4xl font-normal mb-4 leading-snug text-center lg:text-right mt-[10px] lg:mt-0"
//             style={{ fontFamily: "'Audiowide', sans-serif" }}
//           >
//             Our Chatbots <br />
//             <span className="text-cyan-400 text-center lg:text-right">
//               Integrate With
//             </span>
//           </h2>
//           <p className="font-bold text-base mb-6 text-center lg:text-right ">
//             Let our chatbots help your customers across multiple <br />
//             social media channels at once
//           </p>
//           <div className=" text-center lg:text-right">
//             <button className="bg-white text-black px-6 py-2 rounded-full text-lg  font-semibold shadow-md mb-8">
//               Try Now
//             </button>
//           </div>
//           <img src="/images/chat1.png" alt="Robot" className="m-auto" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurChatbots;
