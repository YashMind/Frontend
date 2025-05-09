// components/InfoPage.tsx
'use client';
import React from "react";

interface Step {
  title: string;
  description: string;
}

interface InfoPageProps {
  title: string;
  steps: Step[];
}

export default function InfoPage({ title, steps }: InfoPageProps) {
  return (
    <div
      className="h-full min-h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center py-12"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="bg-white text-gray-800 py-12 px-4 lg:px-24 rounded-lg shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-10 text-indigo-600">
          {title}
        </h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
