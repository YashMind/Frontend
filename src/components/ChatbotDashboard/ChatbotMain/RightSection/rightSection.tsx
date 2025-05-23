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
    <div className="hidden lg:block w-[10%] bg-[#2a2561] rounded-[58px]">
      <div className='flex flex-col gap-4 p-4'>
        {chatbots?.map((chatbot) => <Link href={`/chatbot-dashboard/overview/${chatbot.id}`} className='cursor-pointer'> <Image
          className={`m-auto p-2 ${botId == chatbot.id && `bg-white/20 rounded-full`}`}
          alt="alt"
          src={"/images/face2.png"}
          height={68}
          width={58}
          title={chatbot.chatbot_name}
        /></Link>)}
      </div>
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
  )
}

export default RightSection
