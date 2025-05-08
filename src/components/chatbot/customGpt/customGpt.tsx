import Image from "next/image";
import React from "react";

const steps = [
  {
    number: "1",
    title: "Import Data",
    description:
      "Add any Website, DOCX, TXT, PDF, CSV files, or even YouTube videos securely into your chatbot in minutes.",
    image: "/images/laptop2.png",
    imagePosition: "left",
  },
  {
    number: "2",
    title: "Customise Bot",
    description:
      "Choose your welcome message, chat icon and colour scheme to match your brand and needs.",
    image: "/images/emp.png",
    imagePosition: "right",
  },
  {
    number: "3",
    title: "Start Using",
    description:
      "Simply grab the link to your custom chatbot or embed into a Website of your choice.",
    image: "/images/laptop2.png",
    imagePosition: "left",
  },
];

const Step = ({ number, title, description, image, imagePosition }: any) => {
  const imageEl = (
    <div className="flex-shrink-0">
      <Image alt={title} src={image} height={172} width={144} />
    </div>
  );

  const textEl = (
    <div className="w-[247px]">
      <div className="flex items-center space-x-3">
        <span className="bg-white text-black w-[56px] h-[56px] rounded-full flex items-center justify-center text-[22px] font-bold">
          {number}
        </span>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-xs font-light mt-[20px]">{description}</p>
    </div>
  );

  return (
    <div
      className={`flex flex-col lg:flex-row items-start gap-10 ${
        number === "2" ? "my-[76px]" : ""
      }`}
    >
      {imagePosition === "left" ? (
        <>
          {imageEl}
          {textEl}
        </>
      ) : (
        <>
          {textEl}
          {imageEl}
        </>
      )}
    </div>
  );
};

const CustomGpt = () => {
  return (
    <div className="bg-[#2C1F94] text-white py-[42px] px-4 lg:px-24">
      <div className="container flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-2/3 space-y-10">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>

        <div className="lg:w-1/3 text-center mt-12 lg:mt-0">
          <h2
            className="text-[40px] font-normal leading-tight"
            style={{ fontFamily: "'Audiowide', sans-serif" }}
          >
            3 steps to <br />
            your custom <br />
            <span className="text-[#34C8FB]">ChatGPT agent</span>
          </h2>
          <p className="text-base font-bold mt-[22px]">
            Gain a new employee who helps 24/7/365 answer any questions about your business or chosen data.
          </p>
          <div className="text-right">
            <button className="cursor-pointer bg-white text-[#363636] font-semibold px-6 py-2 rounded-[22px] mt-[22px]">
              Try Now
            </button>
          </div>
          <div className="mt-8">
            <Image
              alt="robot"
              src="/images/robot-small.png"
              className="m-auto"
              height={269}
              width={286}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomGpt;



// import Image from "next/image";
// import React from "react";

// const CustomGpt = () => {
//   return (
//     <div className="bg-[#2C1F94] text-white py-[42px] px-4 lg:px-24">
//           <div className="container flex flex-col lg:flex-row justify-between items-center">
//             {/* Left Section */}
//             <div className="lg:w-2/3 space-y-10">
//               {/* Step 1 */}
//               <div className="flex flex-col lg:flex-row items-start gap-10">
//                 <div className="flex-shrink-0">
//                   <Image
//                     alt="alt"
//                     src="/images/laptop2.png"
//                     height={172}
//                     width={144}
//                   />
//                 </div>
//                 <div className="w-[247px]">
//                   <div className="flex items-center space-x-3">
//                     <span className="bg-white text-black w-[56px] h-[56px] rounded-full flex items-center justify-center text-[22px] font-bold">
//                       1
//                     </span>
//                     <h3 className="text-lg font-bold">Import Data</h3>
//                   </div>
//                   <p className="text-xs font-light mt-[20px]">
//                     Add any Website, DOCX, TXT, PDF, CSV files, or even YouTube
//                     videos securely into your chatbot in minutes.
//                   </p>
//                 </div>
//               </div>

//               {/* Step 2 */}
//               <div className="flex flex-col lg:flex-row items-start gap-10 my-[76px]">
//                 <div className="w-[247px]">
//                   <div className="flex items-center space-x-3">
//                     <span className="bg-white text-black w-[56px] h-[56px] rounded-full flex items-center justify-center text-[22px] font-bold">
//                       2
//                     </span>
//                     <h3 className="text-lg font-bold">Customise Bot</h3>
//                   </div>
//                   <p className="text-xs font-light mt-[20px]">
//                     Choose your welcome message, chat icon and colour scheme to
//                     match your brand and needs.
//                   </p>
//                 </div>
//                 <div className="flex-shrink-0">
//                   <Image
//                     alt="alt"
//                     src="/images/emp.png"
//                     height={172}
//                     width={144}
//                   />
//                 </div>
//               </div>

//               {/* Step 3 */}
//               <div className="flex flex-col lg:flex-row items-start gap-10">
//                 <div className="flex-shrink-0">
//                   <Image
//                     alt="alt"
//                     src="/images/laptop2.png"
//                     height={172}
//                     width={144}
//                   />
//                 </div>
//                 <div className="w-[247px]">
//                   <div className="flex items-center space-x-3">
//                     <span className="bg-white text-black w-[56px] h-[56px] rounded-full flex items-center justify-center text-[22px] font-bold">
//                       3
//                     </span>
//                     <h3 className="text-lg font-bold">Start Using</h3>
//                   </div>
//                   <p className="text-xs font-light mt-[20px]">
//                     Simply grab the link to your custom chatbot or embed into a
//                     Website of your choice.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Section */}
//             <div className="lg:w-1/3 text-center mt-12 lg:mt-0">
//               <h2
//                 className="text-[40px] font-normal leading-tight"
//                 style={{ fontFamily: "'Audiowide', sans-serif" }}
//               >
//                 3 steps to <br />
//                 your custom <br />
//                 <span className="text-[#34C8FB]">ChatGPT agent</span>
//               </h2>
//               <p className="text-base font-bold mt-[22px]">
//                 Gain a new employee who helps 24/7/365 answer any questions
//                 about your business or chosen data.
//               </p>
//               <div className="text-right">
//                 <button className="cursor-pointer bg-white text-[#363636] font-semibold px-6 py-2 rounded-[22px] mt-[22px]">
//                   Try Now
//                 </button>
//               </div>
//               <div className="mt-8">
//                 <Image
//                   alt="alt"
//                   src="/images/robot-small.png"
//                   className="m-auto"
//                   height={269}
//                   width={286}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//   );
// };

// export default CustomGpt;
