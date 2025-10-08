"use client"
import React, { useEffect, useState } from "react";
import ContentRenderer from "./ContentRenderer";
import { ChatbotSettings } from "@/types/chatTypes";

const ChatMessages = ({
    message,
    chatbotSetting,
    handleGeneratedButtonClick
}: {
    message: any;
    chatbotSetting: Partial<ChatbotSettings>
    handleGeneratedButtonClick: (btn: string) => void;
}) => {

    // console.log("🚀 --------------------------------------------------------🚀")
    // console.log("🚀 ~ file: chatMessage.tsx:26 ~ newMessages:", newMessages)
    // console.log("🚀 --------------------------------------------------------🚀")

    const [content, setContent] = useState<{ message: string, buttons: string[] } | null>()
    useEffect(() => {
        if (message) {
            const cont = extractArrayAndContent(message)
            setContent({ message: cont.text, buttons: cont.array })
        }
    }, [message])

    function extractArrayAndContent(response: any) {
        const result = {
            array: [],
            text: response,
        };

        // Remove code block wrappers like ```html, ```json, or ```
        let cleanedResponse = response
            .replace(/```(html|json)?/gi, "")
            .replace(/```/g, "")
            .trim();

        const arrayMatch = cleanedResponse.match(/\[.*?\]/); // Match first array
        if (arrayMatch) {
            const arrayStr = arrayMatch[0];
            try {
                const parsedArray = JSON.parse(arrayStr);
                if (Array.isArray(parsedArray)) {
                    result.array = parsedArray;
                }
            } catch (e) {
                console.warn("Failed to parse array:", e);
            }

            // Remove the array from the text
            cleanedResponse = cleanedResponse.replace(arrayStr, "").trim();
        }

        result.text = cleanedResponse;
        return result;
    }
    return (
        <div >
            <p style={{
                backgroundColor: chatbotSetting?.message_bg ?? "lightslategray",
                color: chatbotSetting?.message_color ?? "black",
            }}
                className="rounded-xl p-4"
            >
                <ContentRenderer content={content?.message} />
            </p>
            {content?.buttons?.map((btn: string, i: number) => (
                <button
                    key={i}
                    type="button"
                    className="px-1 py-1 m-2 text-white transition duration-200 ease-in-out transform bg-gray-500 rounded-lg hover:bg-gray-600 focus:outline-none active:bg-gray-700 hover:scale-105"
                    onClick={() => handleGeneratedButtonClick(btn)}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
}

export default ChatMessages;
