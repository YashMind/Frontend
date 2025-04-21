import React from "react";
import Image from "next/image";
const SupportComminications = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            <div className="min-h-screen  p-6 text-white font-sans space-y-10">
              {/* Billing Settings */}
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  {" "}
                  Support & Communication
                </h2>
                <div className="bg-[#0B1739] py-[23px] px-[11] rounded-[5px]  flex justify-between items-start text-white mb-[27px]">
                  {/* Left Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-[10px] text-white">
                      View & Respond to Support Tickets
                    </h3>
                    <p className="text-base text-white font-medium w-[573px]">
                      Manage all customer support requests, respond to queries,
                      and track resolution status.
                    </p>
                  </div>

                  {/* Right Button */}
                  <button className="bg-[#18B91F] hover:bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-md mt-1 md:mt-0">
                    Open Ticket Center
                  </button>
                </div>
                <div className="bg-[#0B1739] py-[23px] px-[11] rounded-[5px]  flex justify-between items-start text-white mb-[27px]">
                  {/* Left Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-[10px] text-white">
                      Post Announcements
                    </h3>
                    <p className="text-base text-white font-medium w-[573px]">
                      Create and publish important announcements to keep your
                      users informed.
                    </p>
                  </div>

                  {/* Right Button */}
                  <button className="bg-[#18B91F] hover:bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-md mt-1 md:mt-0">
                    Create Announcement
                  </button>
                </div>

                <div className="bg-[#0B1739] py-[23px] px-[11] rounded-[5px]  flex justify-between items-start text-white mb-[27px]">
                  {/* Left Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-[10px] text-white">
                      Maintenance Notices
                    </h3>
                    <p className="text-base text-white font-medium w-[573px]">
                      Schedule and notify users about upcoming maintenance
                      windows and service updates.
                    </p>
                  </div>

                  {/* Right Button */}
                  <button className="bg-[#18B91F] hover:bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-md mt-1 md:mt-0">
                    Manage Notice
                  </button>
                </div>

                <div className="bg-[#0B1739] py-[23px] px-[11] rounded-[5px]  flex justify-between items-start text-white mb-[27px]">
                  {/* Left Content */}
                  <div>
                    <h3 className="text-xl font-bold mb-[10px] text-white">
                      Email Broadcast Tool
                    </h3>
                    <p className="text-base text-white font-medium w-[573px]">
                      Send emails to all users or specific user groups with
                      important updates or marketing messages.
                    </p>
                  </div>

                  {/* Right Button */}
                  <button className="bg-[#18B91F] hover:bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-md mt-1 md:mt-0">
                    Compose Email
                  </button>
                </div>
              </section>

              {/* Invoice History */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportComminications;
