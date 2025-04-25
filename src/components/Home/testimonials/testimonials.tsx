"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./testimonial.css";
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 1,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const slideCount = instanceRef.current?.track.details.slides.length || 0;

  const testimonials = [
    {
      name: "Hannah Schmitt1",
      title: "Lead designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
    },
    {
      name: "Hannah Schmitt2",
      title: "Lead designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
    },
    {
      name: "Hannah Schmitt3",
      title: "Lead designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
    },
    {
      name: "Hannah Schmitt4",
      title: "Lead designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
    },
    {
      name: "Hannah Schmitt5",
      title: "Lead designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
    },
    {
      name: "Hannah Schmitt6",
      title: "Lead designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
    },
  ];
  return (
    <div className=" Testimonials mt-[110px]">
      <div className="container">
        <h1
          className="font-normal text-[30px] text-white text-center md:text-left"
          style={{
            fontFamily: "'Audiowide', sans-serif",
          }}
        >
          Testimonials
        </h1>
        <img src="/images/heading.png" />
        {/* silder */}
        <div className="slide container">
          <section className="py-[55px]  relative custom-gradient-bg">
            <div
              ref={sliderRef}
              className="keen-slider grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[490px] items-center w-[1200px] mx-auto"
            >
              {/* Testimonial Card 1 */}
              {testimonials &&
                testimonials?.map((item, index) => {
                  const isfirstSlide =
                    index === currentSlide % testimonials.length;
                  const isSecondSlide =
                    index === (currentSlide + 1) % testimonials.length;
                  const isThirdSlide =
                    index === (currentSlide + 2) % testimonials.length;
                  return (
                    <div
                      key={index}
                      className="keen-slider__slide rounded-lg py-6  w-[361px] h-[406px] mx-auto"
                      style={{
                        backgroundImage: isfirstSlide
                          ? "url('/images/slide1.png')"
                          : isSecondSlide
                          ? "url('/images/slide2.png')"
                          : "url('/images/slider3.png')",
                        transform: isSecondSlide ? "scale(1.1)" : "",
                        backgroundRepeat: isSecondSlide ? "no-repeat" : "",
                      }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="space-x-4 flex items-center mb-2">
                          <img
                            src="/images/girl.png"
                            alt="User"
                            className="w-[79px] h-[79px] rounded-full"
                          />
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-white">
                            {item?.name} {index + 1}
                          </p>

                          <p className="text-sm text-gray-300">{item?.title}</p>
                          <div className="flex justify-center mt-[9px]">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.08446 11.3907C7.60882 11.3924 7.1416 11.5164 6.72777 11.7508C7.31041 10.2427 8.27675 8.91287 9.53117 7.89292C9.60295 7.83381 9.66237 7.76114 9.70606 7.67907C9.74975 7.597 9.77685 7.50712 9.78581 7.41458C9.79476 7.32203 9.7854 7.22863 9.75826 7.1397C9.73112 7.05077 9.68673 6.96806 9.62762 6.89629C9.56852 6.82452 9.49585 6.76509 9.41378 6.7214C9.33171 6.67771 9.24183 6.65061 9.14928 6.64166C9.05674 6.6327 8.96334 6.64206 8.87441 6.6692C8.78548 6.69635 8.70277 6.74074 8.631 6.79984C6.05906 8.88954 4.91455 11.783 4.91455 13.5769C4.91898 14.2112 5.10801 14.8305 5.45854 15.3591C5.80908 15.8878 6.30596 16.3029 6.88851 16.5539C7.26553 16.7365 7.67841 16.8332 8.09732 16.8368C8.46605 16.8547 8.83457 16.7976 9.18055 16.6688C9.52653 16.5401 9.84275 16.3424 10.1101 16.0878C10.3774 15.8332 10.5902 15.5269 10.7356 15.1876C10.881 14.8483 10.9559 14.4829 10.9559 14.1138C10.9559 13.7446 10.881 13.3793 10.7356 13.04C10.5902 12.7007 10.3774 12.3944 10.1101 12.1398C9.84275 11.8852 9.52653 11.6875 9.18055 11.5587C8.83457 11.43 8.46605 11.3728 8.09732 11.3907H8.08446Z"
                                fill="#7838A6"
                              />
                              <path
                                d="M15.2475 11.3906C14.7718 11.3917 14.3045 11.5157 13.8909 11.7507C14.4733 10.2442 15.4371 8.91478 16.6878 7.8928C16.7661 7.83637 16.832 7.76452 16.8815 7.68166C16.931 7.59881 16.963 7.5067 16.9755 7.41102C16.9881 7.31533 16.9809 7.21809 16.9545 7.12528C16.928 7.03247 16.8829 6.94604 16.8218 6.87134C16.7607 6.79663 16.685 6.73521 16.5993 6.69086C16.5136 6.64651 16.4197 6.62017 16.3234 6.61347C16.2271 6.60676 16.1305 6.61982 16.0395 6.65186C15.9485 6.68389 15.8649 6.73421 15.7941 6.79973C13.2221 8.88943 12.0776 11.7829 12.0776 13.5768C12.0807 14.2039 12.2642 14.8169 12.6062 15.3425C12.9483 15.8681 13.4344 16.2842 14.0066 16.5409C14.3932 16.7289 14.8177 16.8257 15.2475 16.8238C15.6163 16.8418 15.9848 16.7846 16.3308 16.6559C16.6768 16.5271 16.993 16.3294 17.2603 16.0748C17.5276 15.8202 17.7404 15.5139 17.8858 15.1746C18.0312 14.8353 18.1062 14.47 18.1062 14.1008C18.1062 13.7316 18.0312 13.3663 17.8858 13.027C17.7404 12.6877 17.5276 12.3814 17.2603 12.1268C16.993 11.8722 16.6768 11.6745 16.3308 11.5458C15.9848 11.417 15.6163 11.3599 15.2475 11.3778V11.3906Z"
                                fill="#7838A6"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center my-1">
                        <i className="fas fa-quote-left text-purple-400 text-2xl"></i>
                      </div>

                      <p className="text-gray-100 italic text-center text-[12px] w-[70%] mx-auto">
                        {item?.description}
                      </p>
                    </div>
                  );
                })}
            </div>

            {/* Arrows */}
            <div className="mt-6">
              <button
                className="absolute bottom-20   p-3 text-black "
                onClick={() => instanceRef.current?.prev()}
              >
                <img src="/images/arrow-lft.png" />
              </button>
              <button
                className="absolute bottom-20 right-0 p-3"
                onClick={() => instanceRef.current?.next()}
              >
                <img src="/images/arrow-right.png" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[...Array(slideCount)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`w-[16px] h-[16px] rounded-full ${
                      currentSlide === idx
                        ? "bg-[#01BEED]"
                        : "bg-transparent border  border-[#01BEED]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
