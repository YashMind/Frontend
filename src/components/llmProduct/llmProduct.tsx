import React from "react";
import LlmBanner from "./llmBanner/llmBanner";
import WorkFlowAi from "./workFlowAi/workFlowAi";
import ChatgptSection from "./chatgptSection/chatgptSection";
const LlmProduct = () => {
  return (
    <div className="">

      {/* banner sec */}
      <LlmBanner />

      {/* workflow AI */}
      <WorkFlowAi />

      {/* ai area */}
      {/* <AiArea /> */}

      {/* cornor of ai */}
      {/* <CornerAi /> */}
      {/* chat gpt sec */}
      <ChatgptSection />

      {/* slider */}
      {/* <LlmSlider /> */}

      {/* price sec */}
      {/* <LlmPriceSection /> */}

      {/* faq */}
      {/* <LlmFaqs /> */}


    </div>
  );
};

export default LlmProduct;
