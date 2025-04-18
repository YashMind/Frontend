import React from 'react'

const AddBotData = () => {
  return (
    <div className="min-h-screen bg-[#241E4E] text-white p-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {/* Left: Add Data Section */}
      <div>
        <h2 className="text-2xl font-bold mb-15">Add Data</h2>

        <h3 className="text-xl font-semibold mb-4">
          Train from link
        </h3>
        <p className="text-xs text-gray-300 mb-8">
          Enter the link to a webpage and we will visit all pages
          <br></br>
          starting from it and list them for you to choose from
        </p>

        <div className="flex flex-wrap gap-2 mb-9">
          <button className="bg-cyan-500 text-white px-4 py-1 rounded-md text-sm font-semibold">
            Full website
          </button>
          <button className="bg-gray-400 text-white px-4 py-1 rounded-md text-sm font-semibold">
            Webpage
          </button>
          <button className="bg-gray-400 text-white px-4 py-1 rounded-md text-sm font-semibold">
            Pdf
          </button>
          <button className="bg-gray-400 text-white px-4 py-1 rounded-md text-sm font-semibold">
            WordDoc
          </button>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter the target link"
            className="bg-white  px-4 py-2 rounded-md w-70 text-black focus:outline-none"
          />
          <button className="bg-[#340555] text-white px-4 py-2  rounded-md font-semibold">
            Start
          </button>
        </div>
      </div>

      {/* Right: Upload Document Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Upload document</h2>

        <div className="bg-[#9f96c1] bg-opacity-50 rounded-2xl p-10 text-center text-white border-2 border-dashed border-white mb-6">
          <div className="text-3xl mb-2 flex justify-center">
            <img src="/images/cloud.png" alt="" />
          </div>
          <p className="text-lg font-semibold mb-2">
            Choose A file or Drag it here
          </p>
          <p className="text-sm mb-3">
            Only txt, pdf, docs, doc, csv, xlsx files are allowed
          </p>
          <p className="text-sm">
            (Each file should be less than 20.00 MB)
          </p>
        </div>
        <div className="text-right">
          <button className="bg-[#18B91F] text-white px-10 py-2 rounded-md font-semibold text-right">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddBotData;
