import React from "react";

export default function CodeOfConduct() {
  return (
    <div
      className="min-h-screen bg-center bg-cover bg-no-repeat py-24 px-4"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">User Code of Conduct</h1>
          <p className="text-white mt-2">Maintaining a safe and ethical platform for all users</p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 space-y-8 text-gray-700">
          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-lg">
              At YASHRAA, we&apos;re committed to fostering a responsible AI community. This Code of Conduct outlines the standards we expect all users to uphold when accessing our platform and services.
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <p className="font-semibold text-indigo-700">
                Violation of these guidelines may result in immediate suspension or termination of access, at our sole discretion.
              </p>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Prohibited Activities</h2>
            <p>To maintain a safe and ethical platform, YASHRAA users must not:</p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Use AI tools for illegal, harmful, or fraudulent purposes</span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Generate or share hate speech, discrimination, or misinformation</span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Attempt to reverse-engineer or bypass AI safeguards</span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Infringe on third-party intellectual property rights</span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Share private/confidential data of others without consent</span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Exploit the platform for spamming or phishing activities</span>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span>Interfere with system security or performance</span>
              </li>
            </ul>
          </section>

          {/* Consequences */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Consequences of Violations</h2>
            <p>YASHRAA takes violations of this Code of Conduct seriously. Depending on the severity of the violation, we may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Issue warnings and require corrective action</li>
              <li>Temporarily suspend account access</li>
              <li>Permanently terminate accounts</li>
              <li>Report illegal activities to law enforcement</li>
              <li>Take legal action when appropriate</li>
            </ul>
          </section>

          {/* Reporting */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Reporting Concerns</h2>
            <p>If you encounter behavior that violates this Code of Conduct or have any concerns:</p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-semibold">Please contact us immediately at:</p>
              <p>Email: <a href="mailto:legal@yashraa.ai" className="text-indigo-600 hover:underline">legal@yashraa.ai</a></p>
            </div>
            <p>We will investigate all reports promptly and take appropriate action.</p>
          </section>

          {/* Updates */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Policy Updates</h2>
            <p>We may update this Code of Conduct periodically to reflect changes in our platform or legal requirements. The updated version will be posted on our website with the effective date.</p>
          </section>
        </div>
      </div>
    </div>
  );
}