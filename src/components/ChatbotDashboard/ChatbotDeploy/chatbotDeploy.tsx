"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import toast from "react-hot-toast";
import { QRCodeCanvas } from "qrcode.react";
import Head from "next/head";
import { ChatbotsData } from "@/types/chatTypes";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";
import { fetchChatbotSettings } from "@/store/slices/chats/appearanceSettings";
import { pathToImage } from "@/services/utils/helpers";

const ChatbotDeploy = () => {
  const dispatch = useDispatch<AppDispatch>();
  const chatbotData: ChatbotsData = useSelector(
    (state: RootState) => state.chat.chatbotData
  );
  const settings = useSelector((state: RootState) => state.appearance.settings);

  const inputRef1: any = useRef(null);
  const inputRef2: any = useRef(null);
  const inputRef3: any = useRef(null);

  useEffect(() => {
    if (chatbotData) dispatch(fetchChatbotSettings(chatbotData.id));
  }, [chatbotData]);

  const handleCopy = (inputRef: any) => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          toasterSuccess("Copied to clipboard!", 10000, "id");
          // toast.success("Copied to clipboard!")
        })
        .catch((err) => {
          toasterError("Failed to Copy!", 10000, "id");
          // toast.error("Failed to copy!")
        });
    }
  };

  const chatbotUrl = `${process.env.NEXT_PUBLIC_UI_URL}/embed/${chatbotData?.token}`;

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "chatbot-qr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const iframeCode = `<iframe style="width: 400px; height: 600px;" src="${process.env.NEXT_PUBLIC_UI_URL}/embed/${chatbotData?.token}"></iframe>`;

  const embedScript = `
  <script defer src="${process.env.NEXT_PUBLIC_UI_URL}/embed.js" 
    data-bot-id="${chatbotData?.token}"
    ${settings?.chat_icon
      ? `data-icon="${pathToImage(settings.chat_icon)}"`
      : ""
    }
    ${settings?.popup_sound
      ? `data-sound="${pathToImage(settings.popup_sound)}"`
      : ""
    }
  ></script>
`.replace(/\n\s+/g, " "); // Remove line breaks and extra spaces

  return (
    <div className="m-4">
      <h2 className="text-2xl font-bold mb-8 text-white max-md:ml-12">Deploy</h2>
      <div className="bg-white/5 backdrop-blur-md min-h-screen flex items-center justify-center p-4 rounded-[28px] border border-white/10">
        <div className="w-full max-w-6xl space-y-6">
          {/* Top Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center border border-white/10">
            {/* Left */}
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Image
                  className="m-auto opacity-90 invert"
                  alt="link icon"
                  src="/images/direct-link.png"
                  height={100}
                  width={90}
                  style={{ width: 'auto', height: '100px' }}
                />
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-white text-2xl font-bold text-center">
                  Share via Link
                </h2>
                <p className="font-light text-sm text-gray-300 text-center mt-2">
                  Easily provide access to your chatbot using the URL below or
                  the provided QR code.
                </p>
              </div>
              <div className="relative">
                <input
                  ref={inputRef1}
                  type="text"
                  className="w-full bg-black/30 text-white border border-white/10 px-4 py-3 rounded-xl text-sm placeholder-gray-500 focus:border-indigo-500 outline-none transition-all"
                  value={`${process.env.NEXT_PUBLIC_UI_URL}/embed/${chatbotData?.token}`}
                  readOnly
                />
                <span className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-white transition-colors">
                  <Image
                    className="invert opacity-70 hover:opacity-100 transition-opacity"
                    alt="copy"
                    src="/images/file.png"
                    height={16}
                    width={18}
                    onClick={() => handleCopy(inputRef1)}
                  />
                </span>
              </div>
            </div>

            {/* Right (QR) */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="p-4 bg-white rounded-xl shadow-lg">
                <QRCodeCanvas value={chatbotUrl} size={250} />
              </div>
              <button
                onClick={() => downloadQRCode()}
                className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-2 rounded-lg shadow-lg border border-indigo-500/50 transition-all"
              >
                Download QR Code
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Display Script Inside Webpage */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 space-y-4 border border-white/10">
              <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-2">
                <Image
                  className="m-auto opacity-90 invert"
                  alt="embed icon"
                  src="/images/direct-link.png"
                  height={80}
                  width={70}
                  style={{ width: 'auto', height: '80px' }}
                />
              </div>
              <div className="text-center">
                <h2 className="text-white text-xl font-bold text-center">
                  Embed in Website Header
                </h2>
                <p className="font-light text-sm text-gray-300 text-center mt-2">
                  Insert the code snippet below into your website’s header to
                  make the chatbot appear on every page.
                </p>
              </div>
              <div className="relative">
                <textarea
                  ref={inputRef2}
                  className="w-full bg-black/30 text-white border border-white/10 px-4 py-3 rounded-xl text-sm placeholder-gray-500 h-24 resize-none focus:border-emerald-500 outline-none transition-all font-mono"
                  value={embedScript}
                  readOnly
                />
                <span className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-white transition-colors">
                  <Image
                    className="invert opacity-70 hover:opacity-100 transition-opacity"
                    alt="copy"
                    src="/images/file.png"
                    height={16}
                    width={18}
                    onClick={() => handleCopy(inputRef2)}
                  />
                </span>
              </div>
            </div>

            {/* Add to a Website */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 space-y-4 border border-white/10">
              <div className="bg-white/10 p-4 rounded-full w-fit mx-auto mb-2">
                <Image
                  className="m-auto mb-4 opacity-90 invert"
                  alt="iframe icon"
                  src="/images/image-3.png"
                  height={80}
                  width={70}
                  style={{ width: 'auto', height: '80px' }}
                />
              </div>
              <div className="text-center">
                <h2 className="text-white text-xl font-bold text-center">
                  Embed in Webpage
                </h2>
                <p className="font-light text-sm text-gray-300 text-center mt-2">
                  Use an i-frame to showcase the chatbot directly within a
                  webpage — fully interactive and ready to go.
                </p>
              </div>
              <div className="relative">
                <textarea
                  ref={inputRef3}
                  readOnly
                  value={iframeCode}
                  className="h-24 w-full bg-black/30 text-white border border-white/10 px-4 py-3 rounded-xl text-sm placeholder-gray-500 resize-none focus:border-emerald-500 outline-none transition-all font-mono"
                />

                <span className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-white transition-colors">
                  <Image
                    className="invert opacity-70 hover:opacity-100 transition-opacity"
                    alt="copy"
                    src="/images/file.png"
                    height={16}
                    width={18}
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
