import React from "react";
import ChatbotHeader from "@/components/chatbot/header/chatbotHeader";
import LlmBanner from "./llmBanner/llmBanner";
import WorkFlowAi from "./workFlowAi/workFlowAi";
import AiArea from "./aiArea/aiArea";
import CornerAi from "./cornerAi/cornerAi";
import ChatgptSection from "./chatgptSection/chatgptSection";
import LlmSlider from "./llmSlider/llmSlider";
import LlmPriceSection from "./llmPriceSection/llmPriceSection";
import LlmFaqs from "./llmFaqs/llmFaqs";
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
