import React from "react";

export default function PrivacyPolicy() {
  const steps = [
    {
      title: "1. Information We Collect",
      description:
        "We collect personal information that you provide directly to us, such as your name, email address, and other details when you use our services or contact us.",
    },
    {
      title: "2. How We Use Information",
      description:
        "Your information is used to provide, maintain, and improve our services, respond to your queries, and send you updates or promotional materials if opted-in.",
    },
    {
      title: "3. Information Sharing",
      description:
        "We do not sell or rent your personal data. Information may be shared with third-party service providers under strict confidentiality agreements for operational purposes.",
    },
    {
      title: "4. Data Security",
      description:
        "We use strong security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
    },
    {
      title: "5. Your Rights",
      description:
        "You have the right to access, correct, or delete your personal data. Contact us to make requests regarding your data or to opt out of communications.",
    },
  ];

  return (
    <div
      className="h-full min-h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center py-12 pt-48"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="bg-white text-gray-800 py-12 px-4 lg:px-24 rounded-lg shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-10 text-indigo-600">
          Privacy Policy
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
