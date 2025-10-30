import React from "react";

const TaskManagement = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-[25px] mt-[60px]">
        <div className="w-full md:w-[60%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
          <h3 className="text-white text-2xl font-bold">
            AI-Powered Task Management
          </h3>
          <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
            Let Yashraa’s voice agent handle repetitive tasks, meeting
            scheduling, and smart reminders. Powered by conversational AI, it
            understands natural language and keeps your operations running
            smoothly—so you can focus on what matters most.
          </p>
          <div className="flex justify-between">
            <img src="/images/both-circle.png" />
            <img src="/images/effective.png" />
          </div>
        </div>
        <div className="w-full md:w-[40%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
          <h3 className="text-white text-2xl font-bold">
            Real-Time Instant Responses
          </h3>
          <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
            Engage users with lightning-fast, intelligent responses. Yashraa’s
            AI listens, interprets, and replies in real time—making every
            interaction seamless, accurate, and human-like across platforms and
            languages.
          </p>
          <img className="m-auto" src="/images/instant.png" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[25px] mt-[25px]">
        <div className="w-full md:w-[40%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
          <h3 className="text-white text-2xl font-bold">24/7 Voice Support</h3>
          <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
            Whether it&apos;s late night or early morning, Yashraa’s voice assistant
            is always available. It offers consistent customer support, captures
            lead queries, and ensures users are never left unanswered.
          </p>
          <img className="m-auto" src="/images/instant.png" />
        </div>

        <div className="w-full md:w-[60%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
          <h3 className="text-white text-2xl font-bold">
            Smarter Workflow Automation
          </h3>
          <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
            Integrate Yashraa’s voice agent into your workflow to automate
            processes, reduce manual intervention, and enhance team
            productivity. From CRM updates to support ticketing—it does it all,
            hands-free.
          </p>
          <div className="flex justify-between">
            <img src="/images/both-circle.png" />
            <img src="/images/effective.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
