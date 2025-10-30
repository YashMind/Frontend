"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { QRCodeCanvas } from 'qrcode.react';
import { ChatbotsData } from "@/types/chatTypes";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";
import { fetchChatbotSettings } from "@/store/slices/chats/appearanceSettings";
import { pathToImage } from "@/services/utils/helpers";


const ChatbotDeploy = () => {
  const dispatch = useDispatch<AppDispatch>()
  const chatbotData: ChatbotsData = useSelector((state: RootState) => state.chat.chatbotData);
  const settings = useSelector((state: RootState) => state.appearance.settings)

  const inputRef1: any = useRef(null);
  const inputRef2: any = useRef(null);
  const inputRef3: any = useRef(null);

  useEffect(() => {
    if (chatbotData)
      dispatch(fetchChatbotSettings(chatbotData.id))
  }, [chatbotData])

  const handleCopy = (inputRef: any) => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value)
        .then(() => {
          toasterSuccess("Copied to clipboard!", 10000, "id")
          // toast.success("Copied to clipboard!")
        })
        .catch((err) => {
          toasterError("Failed to Copy!", 10000, "id")
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

  const embedScript = `
  <script defer src="${process.env.NEXT_PUBLIC_UI_URL}/embed.js" 
    data-bot-id="${chatbotData?.token}"
    ${settings?.chat_icon ? `data-icon="${pathToImage(settings.chat_icon)}"` : ''}
    ${settings?.popup_sound ? `data-sound="${pathToImage(settings.popup_sound)}"` : ''}
  ></script>
`.replace(/\n\s+/g, ' '); // Remove line breaks and extra spaces

  console.log(embedScript)

  return (
    <div className="m-4">
      <h2 className="text-2xl font-bold mb-8 max-md:ml-12">Deploy</h2>
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
                  Share via Link
                </h2>
                <p className="font-light text-xs text-black text-center">
                  Easily provide access to your chatbot using the URL below or the provided QR code.
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
                    onClick={() => handleCopy(inputRef1)}
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
                  Embed in Website Header
                </h2>
                <p className=" font-light text-xs text-black text-center">
                  Insert the code snippet below into your website’s header to make the chatbot appear on every page.
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
                    onClick={() => handleCopy(inputRef2)}
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
                  Embed in Webpage
                </h2>
                <p className=" font-light text-xs text-black text-center">
                  Use an i-frame to showcase the chatbot directly within a webpage — fully interactive and ready to go.
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
                    onClick={() => handleCopy(inputRef3)}
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
