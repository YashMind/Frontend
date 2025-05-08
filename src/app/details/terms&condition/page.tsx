import React from "react";

export default function TermsConditions() {
  const steps = [
    {
      title: "1. Acceptance of Terms",
      description:
        "By accessing and using our services, you agree to comply with and be bound by these terms and conditions. If you do not agree, do not use our services.",
    },
    {
      title: "2. Use of Services",
      description:
        "You agree to use our services only for lawful purposes and in accordance with the terms provided here. Any unauthorized use is prohibited.",
    },
    {
      title: "3. User Responsibilities",
      description:
        "You are responsible for ensuring that your information is accurate and up-to-date. You also agree not to misuse our services or engage in any activities that disrupt the functionality of the service.",
    },
    {
      title: "4. Limitation of Liability",
      description:
        "We will not be held liable for any damages resulting from the use or inability to use our services. We are not responsible for any third-party content or actions.",
    },
    {
      title: "5. Termination of Services",
      description:
        "We reserve the right to suspend or terminate your access to our services at any time if you violate the terms and conditions or for any other reason at our discretion.",
    },
    {
      title: "6. Changes to Terms",
      description:
        "We may update these terms from time to time, and we will notify users of significant changes. Continued use of the service after changes constitutes acceptance of the updated terms.",
    },
  ];

  return (
    <div
      className="h-full min-h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center py-12"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="bg-white text-gray-800 py-12 px-4 lg:px-24 rounded-lg shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-10 text-indigo-600">
          Terms and Conditions
        </h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-indigo-50 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
