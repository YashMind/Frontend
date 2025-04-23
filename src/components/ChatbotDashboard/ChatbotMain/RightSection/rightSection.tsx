"use client"
import Image from 'next/image'
import React from 'react'
interface ShowModalProps {
    showModal: () => void;
  }
const RightSection = ({showModal}:ShowModalProps) => {
  return (
    <div className="hidden lg:block w-[10%] bg-[#2a2561] rounded-[58px]">
            <div className="w-[70px] h-[70px] xl:w-[100px] xl:h-[100px] bg-white rounded-full flex items-center justify-center m-auto mb-5">
              <Image
                className="m-auto mb-4 w-[40px] xl:w-[58px] h-auto"
                alt="alt"
                src="/images/face1.png"
                width={58}
                height={68}
              />
            </div>
            <Image
              className="m-auto"
              alt="alt"
              src="/images/face2.png"
              height={68}
              width={58}
            />
            <hr className="bg-[linear-gradient(90deg,#501794_49.49%,#3E70A1_50.51%)] p-[1px] rounded-md my-6"></hr>
            <Image
              className="m-auto"
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
