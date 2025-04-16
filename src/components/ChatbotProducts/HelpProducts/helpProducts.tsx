import React from 'react'

const HelpProducts = () => {
  return (
    <div className=" help-suport p-6 md:p-10 text-white bg-[#2B245D] rounded-lg space-y-6">
            <div>
              <h2 className="font-semibold text-[21px]">Help & Support</h2>
              <p className="text-xs font-light mt-[8px]">
                If you need assistance, please fill out the form below, and our
                support team will get back to you shortly.
              </p>
            </div>

            {/* Subject */}
            <div className="flex flex-col space-y-2 w-[422]">
              <label
                htmlFor="subject"
                className="mb-[8px] text-lg font-medium text-white"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter your issue subject"
                className="bg-[#171821] text-white rounded-md p-[12px] pr-[40px] outline-none placeholder-[#D2D2D2] text-sm font-medium appearance-none w-full"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col space-y-2 ">
              <label
                htmlFor="message"
                className="mb-[8px] text-lg font-medium text-white"
              >
                Message:
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Describe Your Issue In Details...."
                className="bg-[#171821] text-white rounded-md p-[12px] pr-[40px] outline-none placeholder-[#D2D2D2] text-sm font-medium appearance-none w-full"
              />
            </div>

            {/* Button */}
            <button className="bg-[#2F0448] px-6 py-2 rounded-[8px] text-white font-mediumtext-lg">
              Save
            </button>
          </div>
  )
}

export default HelpProducts
