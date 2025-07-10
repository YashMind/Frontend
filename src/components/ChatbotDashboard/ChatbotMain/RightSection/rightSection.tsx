"use client"
import { getChatbots } from '@/store/slices/chats/chatSlice';
import { AppDispatch, RootState } from '@/store/store';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
interface ShowModalProps {
  showModal: () => void;
  botId?: number;
}
const RightSection = ({ showModal, botId }: ShowModalProps) => {
  const dispatch = useDispatch<AppDispatch>()

  const { chatbots } = useSelector((state: RootState) => state.chat)

  useEffect(() => {
    if (!chatbots) {
      dispatch(getChatbots());
    }
  }, [dispatch]);


  return (
    <div >
      <div className="flex flex-col gap-4 p-4">
        {chatbots?.map((chatbot) => {
          const getImageUrl = () => {
            if (!chatbot.image) return "/images/bot2.png";

            if (typeof chatbot.image === 'string') {
              if (chatbot.image.startsWith('http')) {
                return chatbot.image;
              }
              return `${process.env.NEXT_PUBLIC_BACKEND_URL}${chatbot.image}`;
            }

            return "/images/bot2.png";
          };

          const imageUrl = getImageUrl();
          const isActive = botId === chatbot.id;

          return (
            <Link
              key={`chatbot-${chatbot.id}`} // Better key using unique id
              href={`/chatbot-dashboard/overview/${chatbot.id}`}
              className="cursor-pointer rounded-full transition-all hover:scale-105 hover:bg-white/10"
              aria-label={`Go to ${chatbot.chatbot_name} dashboard`}
            >
              <div className={`p-2 rounded-full ${isActive ? 'bg-white/20' : ''}`}>
                <Image
                  className="rounded-full object-cover"
                  src={imageUrl}
                  alt={`${chatbot.chatbot_name} avatar`} // More descriptive alt text
                  width={58}
                  height={58} // Made equal for perfect circle
                  quality={85} // Optimize image loading
                  title={chatbot.chatbot_name}
                  style={{
                    aspectRatio: '1/1' // Ensures perfect square
                  }}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div className='sticky bg-[#2a2561] bottom-0 w-full'>

        <hr className="bg-[linear-gradient(90deg,#501794_49.49%,#3E70A1_50.51%)] p-[1px] rounded-md my-6"></hr>
        <Image
          className="m-auto cursor-pointer"
          alt="alt"
          src="/images/plus.png"
          height={24}
          width={24}
          onClick={() => showModal()}

        />
      </div>
    </div>
  )
}

export default RightSection
