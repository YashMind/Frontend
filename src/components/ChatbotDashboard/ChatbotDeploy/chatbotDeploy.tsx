"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import toast from "react-hot-toast";
import { QRCodeCanvas } from 'qrcode.react';
import Head from "next/head";
import { ChatbotsData } from "@/types/chatTypes";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";


const ChatbotDeploy = () => {
  const chatbotData: ChatbotsData = useSelector((state: RootState)=> state.chat.chatbotData);
  
  const inputRef1: any = useRef(null);
  const inputRef2: any = useRef(null);
  const inputRef3: any = useRef(null);
  
  const handleCopy = (inputRef:any) => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value)
      .then(() => {
        toasterSuccess("Copied to clipboard!",2000,"id")
        // toast.success("Copied to clipboard!")
      })
      .catch((err) => {
        toasterError("Failed to Copy!",2000,"id")
        // toast.error("Failed to copy!")
      });
    }
  };
  
  const chatbotUrl = `${process.env.NEXT_PUBLIC_UI_URL}/embed/${chatbotData?.token}`;

  const downloadQRCode = () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'chatbot-qr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const iframeCode = `<iframe style="width: 400px; height: 600px;" src="${process.env.NEXT_PUBLIC_UI_URL}/embed/${chatbotData?.token}"></iframe>`;

  const embedScript = `<script defer src="${process.env.NEXT_PUBLIC_UI_URL}/embed.js" data-bot-id="${chatbotData?.token}"></script>`;

  return (
    <div className="w-full m-10">
      <h2 className="text-2xl font-bold my-[30]">Deploy</h2>
      <div className="bg-[#312d63] min-h-screen flex items-center justify-center p-4 rounded-[28px]">
        <div className="w-full max-w-6xl space-y-6">
          {/* Top Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left */}
            <div className="space-y-4">
              <Image
                className="m-auto mb-4"
                alt="alt"
                src="/images/direct-link.png"
                height={216}
                width={198}
              />

              <div className="text-center md:text-left">
                <h2 className=" text-black text-2xl font-medium text-center">
                  Direct Link
                </h2>
                <p className="font-light text-xs text-black text-center">
                  Share access to your chatbot by using the link below or with
                  the QR code.
                </p>
              </div>
              <div className="relative">
                <input
                  ref={inputRef1}
                  type="text"
                  className="w-full bg-[#D9D9D9] text-[#727272] px-4 py-2 rounded-full text-sm placeholder-[#727272]"
                  value={`${process.env.NEXT_PUBLIC_UI_URL}/embed/${chatbotData?.token}`}
                  readOnly
                />
                <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                  <Image
                    className=""
                    alt="alt"
                    src="/images/file.png"
                    height={14}
                    width={16}
                    onClick={()=> handleCopy(inputRef1)}
                  />
                </span>
              </div>
            </div>

            {/* Right (QR) */}
            <div className="flex flex-col items-center justify-center gap-4">
              <QRCodeCanvas value={chatbotUrl} size={304} />
              <button onClick={() => downloadQRCode()} className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-6 py-1.5 rounded">
                Download QR
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Display Script Inside Webpage */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
              <Image
                className="m-auto mb-4"
                alt="alt"
                src="/images/direct-link.png"
                height={216}
                width={198}
              />
              <div className="text-center">
                <h2 className=" text-black text-2xl font-medium text-center">
                  Display Inside Webpage
                </h2>
                <p className=" font-light text-xs text-black text-center">
                  Add the code below to the header of your Website to display
                  the chatbot on all pages.
                </p>
              </div>
              <div className="relative">
              <textarea
                ref={inputRef2}
                className="w-full bg-[#D9D9D9] text-[#727272] px-4 py-2 rounded-xl text-sm placeholder-[#727272] h-20"
                value={embedScript}
                readOnly
              />
                <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                  <Image
                    className=""
                    alt="alt"
                    src="/images/file.png"
                    height={14}
                    width={16}
                    onClick={()=> handleCopy(inputRef2)}
                  />
                </span>
              </div>
              
            </div>

            {/* Add to a Website */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
              <Image
                className="m-auto mb-4"
                alt="alt"
                src="/images/image-3.png"
                height={132}
                width={121}
              />
              <div className="text-center">
                <h2 className=" text-black text-2xl font-medium text-center">
                  Add to a Website
                </h2>
                <p className=" font-light text-xs text-black text-center">
                  Display the open chatbot window inside a webpage with an
                  i-frame, ready to use.
                </p>
              </div>
              <div className="relative">
               
                <textarea
                  ref={inputRef3}
                  readOnly
                  value={iframeCode}
                  className="h-20 w-full bg-[#D9D9D9] text-[#727272] px-4 py-2 rounded-xl text-sm placeholder-[#727272]"
                />

                
                <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                  <Image
                    className=""
                    alt="alt"
                    src="/images/file.png"
                    height={14}
                    width={16}
                    onClick={()=> handleCopy(inputRef3)}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDeploy;
