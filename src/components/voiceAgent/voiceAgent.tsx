import React from "react";
import VoiceAgentBanner from "./voiceAgentBanner/voiceAgentBanner";
import VoiceCompanion from "./voiceCompanion/voiceCompanion";
import TaskManagement from "./taskManagement/taskManagement";
import HowWorks from "./howWorks/howWorks";
import AppsSection from "./appsSection/appsSection";
import SubFooter from "./subFooter/subFooter";

const VoiceAgent = () => {
  return (
    <main className="bg-gradient-to-b from-[#2B255D] to-[#110FB9] min-h-screen">
      {/* Banner section */}
      <VoiceAgentBanner />

      {/* Voice Companion */}
      <VoiceCompanion />

      {/* Task Management */}
      <TaskManagement />

      {/* How it Works */}
      <HowWorks />

      {/* Apps Integration */}
      <AppsSection />

      {/* FAQ Section */}
      {/* <Faqs /> */}

      {/* Footer */}
      <SubFooter />
    </main>
  );
};

export default VoiceAgent;