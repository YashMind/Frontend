"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./testimonial.css";
import { RiDoubleQuotesL } from "react-icons/ri";
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


  const testimonials = [
    {
      name: "Ravi Menon",
      title: "Operations Manager, FinTech Startup (India)",
      image: "/images/girl.png",
      description:
        "Yashraa transformed our customer support — instant replies, 24/7 service, and boosted user satisfaction overnight. It feels like having an extra team working for us round the clock!",
    },
    {
      name: "Liam Johnson",
      title: "Founder, U.S. Marketing Agency",
      image: "/images/girl.png",
      description:
        "Absolutely love YASHRAA! Seamless integrations, natural conversation flow, and powerful AI that actually understands customers. Saved us hours daily.",
    },
    {
      name: "Priya Desai",
      title: "Customer Experience Lead, Indian Retail Chain",
      image: "/images/girl.png",
      description:
        "Game-changer for lead generation! The platform captures leads intelligently and nurtures them with personalized interactions. ROI went through the roof.",
    },
    {
      name: "Laura Kim",
      title: "UX Lead, Global Design Studio (Singapore)",
      image: "/images/girl.png",
      description:
        "This AI bot has been a brilliant upgrade to our website — 3x more engagement, faster query resolutions, and happy customers who keep coming back.",
    },
    {
      name: "Sandra Lopez",
      title: "COO, Mexican Hospitality Group",
      image: "/images/girl.png",
      description:
        "If you need a reliable, smart chatbot that learns and evolves — Yashraa's AI bot is hands down the best we’ve used. Blazing fast and super accurate.",
    },
    {
      name: "Chen Wei",
      title: "Product Owner, China-based AI Startup",
      image: "/images/girl.png",
      description:
        "We moved to Yashraa from another platform — the difference is night and day! The conversational intelligence is superb.",
    },
    {
      name: "Emily Carter",
      title: "Head of CX, London-based E-commerce Brand",
      image: "/images/girl.png",
      description:
        "Our business hours don’t matter anymore — Now their bot handles inquiries while we sleep! We've increased sales conversions by 40%.",
    },
    {
      name: "Sophie Martinez",
      title: "CMO, Global SaaS Company (Spain)",
      image: "/images/girl.png",
      description:
        "What impressed us most? Yashraa’s integrations with other popular apps — especially Zapier AI integration — are super helpful.",
    },
    {
      name: "Akira Tanaka",
      title: "Product Manager, Japanese Electronics Retailer",
      image: "/images/girl.png",
      description:
        "Incredible ease of setup and stunning results. YASHRAA paid for itself in the first month.",
    },
    {
      name: "Fatima Khalid",
      title: "Digital Strategist, UAE Real Estate Group",
      image: "/images/girl.png",
      description:
        "Finally, a chatbot that feels genuinely helpful, not robotic. Yashraa's chatbot made our digital experience premium.",
    },
    {
      name: "David Kim",
      title: "Growth Lead, Canadian D2C Brand",
      image: "/images/girl.png",
      description:
        "Our customers love chatting with YASHRAA. We’ve seen customer retention go up and more 5-star reviews rolling in.",
    },
    {
      name: "Isabella Rossi",
      title: "Marketing Director, Italian Fashion Label",
      image: "/images/girl.png",
      description:
        "With YASHRAA's bot, we automated 80% of repetitive queries. Our human agents now focus on high-value conversations.",
    },
    {
      name: "Mark Thompson",
      title: "CEO, Australian IT Consultancy",
      image: "/images/girl.png",
      description:
        "From onboarding to live deployment — the whole platform experience is flawless. And the AI gets smarter every day!",
    },
    {
      name: "Megan Scott",
      title: "VP of Marketing, U.S. Subscription Box Service",
      image: "/images/girl.png",
      description:
        "We were hesitant at first, but this platform delivered beyond expectations. The AI flow logic is top notch.",
    },
    {
      name: "Ankit Sharma",
      title: "Co-founder, Indian EdTech Platform",
      image: "/images/girl.png",
      description:
        "Our marketing team is obsessed with Yashraa’s ability to engage visitors and upsell services — a revenue driver.",
    },
    {
      name: "Claire Dubois",
      title: "Digital Transformation Consultant, France",
      image: "/images/girl.png",
      description:
        "Hands down the most intuitive and effective AI chatbot we’ve tried. YASHRAA is a keeper.",
    },
    {
      name: "Ryan Lee",
      title: "CTO, Korean Enterprise Software Firm",
      image: "/images/girl.png",
      description:
        "Support tickets dropped by 60% after launching YASHRAA on our site. More time, fewer costs.",
    },
    {
      name: "Natalia Petrova",
      title: "Ecommerce Manager, Russian Beauty Brand",
      image: "/images/girl.png",
      description:
        "Finally, an AI chatbot that feels human and delivers value. This AI chatbot is now critical to our sales funnel.",
    }
  ]


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
                testimonials?.map((
                  item, index) => {

                  const isfirstSlide =
                    index === currentSlide % testimonials.length;
                  const isSecondSlide =
                    index === (currentSlide + 1) % testimonials.length;
                  // const isThirdSlide =
                  // index === (currentSlide + 2) % testimonials.length;
                  return (
                    <div
                      key={index}
                      className="keen-slider__slide rounded-lg py-6 pt-24  w-[361px] h-[406px] mx-auto  mt-20"
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
                        {/* <div className="space-x-4 flex items-center mb-2">
                          <Image
                            height={79}
                            width={79}
                            src={item.image}
                            alt="User"
                            quality={10}
                            className="rounded-full"
                          />

                        </div> */}
                        <div className="text-center">
                          <p className="font-semibold text-white mb-1">
                            {item?.name}
                          </p>
                          <div className="flex justify-center">

                            <RiDoubleQuotesL className="text-purple-600" />
                          </div>
                          <p className="text-sm text-gray-300">{item?.title}</p>
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
                <img src="/images/arrow-right.png" className="cursor-pointer" />
              </button>
              <button
                className="absolute bottom-20 right-0 p-3"
                onClick={() => instanceRef.current?.next()}
              >
                <img src="/images/arrow-lft.png" className="cursor-pointer" />
              </button>

              {/* Dots */}
              {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[...Array(slideCount)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`w-[16px] h-[16px] rounded-full cursor-pointer ${currentSlide === idx 
                      ? "bg-[#01BEED]"
                      : "bg-transparent border  border-[#01BEED]"
                      }`}
                  />
                ))}
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
