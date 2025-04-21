import React from "react";
import Image from "next/image";
const LogsActivity = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">

          <div className="dashboard-right flex-1 mr-[30px]">
            <div className="min-h-screen  text-white font-sans space-y-10">
              {/* logos and activity */}
              <section className="mt-[50px]">
                <h2 className="text-xl font-semibold mb-[30px]">
                  Logs & Activity
                </h2>
                <div className=" bg-[#0B1739] p-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  text-white rounded-[28px]">
                  {/* API Calls Card */}
                  <div className="bg-[#081028] p-4 rounded-md shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)] space-y-1">
                    <div className="flex gap-2">
                      <h3 className=" text-base font-medium">API Calls</h3>
                      <Image
                        alt="alt"
                        src="/images/iconlogs.png"
                        height={24}
                        width={24}
                      />
                    </div>
                    <p className="text-xs font-medium text-white mt-3">
                      User: user@example.com
                    </p>
                    <p className="text-xs font-medium text-white my-3">
                      Product: 98%
                    </p>
                    <p className="text-xs font-medium text-white">Time: 1234</p>
                  </div>

                  {/* Error Card */}
                  <div className="bg-[#081028] p-4 rounded-md shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)] space-y-1">
                    <div className="flex gap-2">
                      <h3 className=" text-base font-medium ">Error</h3>
                      <Image
                        alt="alt"
                        src="/images/comment.png"
                        height={24}
                        width={24}
                      />
                    </div>
                    <p className="text-xs font-medium text-white my-3">
                      Chat failures: 3
                    </p>
                    <p className="text-xs font-medium text-white ">
                      Voice Disconnect: 2
                    </p>
                  </div>

                  {/* Admin Card */}
                  <div className="bg-[#081028] p-4 rounded-md shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)] space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Admin</h3>
                      <Image
                        alt="alt"
                        src="/images/shape.png"
                        height={22}
                        width={22}
                      />
                    </div>
                    <p className="text-xs font-medium text-white my-3">
                      Who did What : ___
                    </p>
                    <p className="text-xs font-medium text-white ">When: ___</p>
                  </div>

                  {/* AI Card */}
                  <div className="bg-[#081028] p-4 rounded-md shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)] space-y-1">
                    <div className="flex gap-2">
                      <h3 className="font-semibold">AI</h3>
                      <Image
                        alt="alt"
                        src="/images/ai-line.png"
                        height={24}
                        width={24}
                      />
                    </div>
                    <p className="text-xs font-medium text-white ">
                      Accuracy: 120 ms
                    </p>
                    <p className="text-xs font-medium text-white my-3">
                      Fallback: ___
                    </p>
                    <p className="text-xs font-medium text-white ">
                      Latency: 2.2ms
                    </p>
                  </div>
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

export default LogsActivity;
