import React from 'react'

const Testimonials = () => {
  return (
    <div className=" Testimonials">
        <div className="container">
          <h1
            className="font-normal text-[30px] text-white"
            style={{
              fontFamily: "'Audiowide', sans-serif",
            }}
          >
            Testimonials
          </h1>
          <img src="/images/heading.png" />
          {/* silder */}
          <div className="flex">
            <div className="slide"></div>
          </div>
        </div>
      </div>
  )
}

export default Testimonials;
