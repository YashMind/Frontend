import Image from 'next/image'
import React from 'react'

const SubFooter = () => {
  return (
    <div className="container">
        <div className="flex flex-col md:flex-row center-img md:items-start gap-20 text-white p-6 md:p-10 rounded-xl space-y-6 md:space-y-0 mb-[50px] ">
          {/* Image Section */}
          <div className="relative bg-clr ">
            <Image
              alt="alt"
              className="relative z-2"
              src="/images/person.png"
              height={480}
              width={330}
            />
            <div className="text-right py-[22px] text-lg font-extrabold  relative z-2">
              <h4 className="text-sm font-semibold text-white">Horace Cole</h4>
              <p className="text-sm text-[#808080]">Senior Brand Specialist</p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-[#0B0D2E] p-6 pl-6 md:pl-[90px] relative w-full md:w-[650px] pb-6 md:pb-[110px] bg-bottom">
            {/* Quotation mark */}
            <Image
              alt="alt"
              className="absolute -left-[22px] -top-[50px] z-2 md:-left-[22px] md:-top-[6px] w-[70px] md:w-[90px]"
              src="/images/Quotes.png"
              height={90}
              width={90}
            />

            {/* Quote Text */}
            <h2 className="text-2xl md:text-[48px] font-bold mb-4">
              Et enim aperiam molestiae nesciunt
            </h2>
            <div className="lft-border">
              <p className="text-sm md:text-base font-medium text-white leading-relaxed mb-4">
                Nisi ea sed eos. Et eaque dolor consequatur iste corporis. Et
                minima esse vel harum omnis corporis sint. Assumenda temporibus
                non architecto voluptatum officiis tempora maiores sapiente.
                Enim mollitia voluptate ipsa explicabo dolorem.
              </p>
              <p className="text-sm md:text-base font-medium leading-relaxed mb-4">
                Et vel velit et accusamus et accusamus. Et pariatur id ut qui
                quidem est laboriosam saepe ratione et. Voluptate laudantium
                natus recusandae cupiditate rem velit ut cum ipsa ipsa.
              </p>
              <p className="text-sm md:text-base font-medium">Thanks, guys!</p>
            </div>
            {/* Bottom bar */}
          </div>
        </div>
      </div>
  )
}

export default SubFooter
