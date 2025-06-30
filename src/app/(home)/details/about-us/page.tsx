import Link from "next/link";
import React from "react";
import { FiCheckCircle, FiLayers, FiDollarSign, FiTrendingUp, FiShield } from "react-icons/fi";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Welcome to</span>
                    <span className="block text-indigo-600">YASHRAA</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Your All-in-One AI Tools Platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              At YASHRAA, we believe that AI should be accessible, adaptable, and empowering for businesses of all sizes.
              We are a next-generation AI tools platform offering a wide range of subscription-based AI products and services — all under one roof.
            </p>
            <p className="mt-6 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              Our platform connects businesses, entrepreneurs, developers, and creators with cutting-edge AI technologies that drive innovation and efficiency. Whether you're looking to streamline operations, enhance customer experiences, or automate complex processes — YASHRAA has you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Platform Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Innovation</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Platform Model
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div>
                <p className="text-lg text-gray-500">
                  Unlike traditional single-solution providers, YASHRAA operates as an All-in-One AI Tools Platform where you can explore, and subscribe to a variety of AI-powered tools across multiple domains.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  With flexible pricing plans and seamless integrations, YASHRAA lets you build your own AI stack tailored to your business needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Platform Connects:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <FiLayers className="h-6 w-6 text-indigo-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      Businesses, entrepreneurs, developers, and creators with cutting-edge AI technologies
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <FiTrendingUp className="h-6 w-6 text-indigo-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      Multiple AI solutions across different domains in one place
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Offerings
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Comprehensive AI tools for every business need
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  icon: <FiCheckCircle className="h-6 w-6 text-indigo-500" />,
                  title: "AI-Powered Chatbots",
                  description: "Engage customers, automate support, and drive conversions with intelligent chatbots trained for your industry."
                },
                {
                  icon: <FiCheckCircle className="h-6 w-6 text-indigo-500" />,
                  title: "AI Voice Agents",
                  description: "Deploy natural-sounding voice agents for inbound and outbound calls, voice support, and conversational experiences."
                },
                {
                  icon: <FiCheckCircle className="h-6 w-6 text-indigo-500" />,
                  title: "Advanced LLM Chat APIs",
                  description: "Access multiple large language models (LLMs) through our unified API — compare results, choose your preferred model, and pay-as-you-go."
                },
                {
                  icon: <FiCheckCircle className="h-6 w-6 text-indigo-500" />,
                  title: "AI Automation Tools",
                  description: "Automate repetitive tasks, data processing, content generation, and more using our growing library of AI tools."
                },
                {
                  icon: <FiCheckCircle className="h-6 w-6 text-indigo-500" />,
                  title: "Third-Party AI Integrations",
                  description: "Explore AI models from top providers (OpenAI, Anthropic, DeepSeek, Gemini, and more) — all integrated within one user-friendly platform."
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12 bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-200 font-semibold tracking-wide uppercase">Advantages</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Why Choose YASHRAA?
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  icon: <FiLayers className="h-8 w-8 text-white" />,
                  title: "All-in-One Platform",
                  description: "Discover and manage all your AI tools in one place."
                },
                {
                  icon: <FiDollarSign className="h-8 w-8 text-white" />,
                  title: "Flexible Pricing",
                  description: "Pay-as-you-go & subscriptions for startups to enterprises."
                },
                {
                  icon: <FiTrendingUp className="h-8 w-8 text-white" />,
                  title: "Constant Innovation",
                  description: "Stay updated with the latest AI advancements."
                },
                {
                  icon: <FiShield className="h-8 w-8 text-white" />,
                  title: "Privacy & Compliance",
                  description: "Your data protected under strict privacy standards with full GDPR compliance."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-lg leading-6 font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-base text-indigo-100">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Purpose</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Driving AI Accessibility
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Our Mission</h3>
                <p className="mt-2 text-base text-gray-500">
                  To democratize access to powerful AI technologies, helping businesses unlock new opportunities through intelligent automation and innovation.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Our Vision</h3>
                <p className="mt-2 text-base text-gray-500">
                  To become the world's leading All-in-One AI Tools Platform — empowering every business with the tools to thrive in the AI-driven future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to transform your business with AI?</span>
            <span className="block text-indigo-600">Start exploring YASHRAA today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}