import React from "react";

export default function Disclaimer() {
  return (
    <div
      className="min-h-screen bg-center bg-cover bg-no-repeat py-24 px-4"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Disclaimer & Limitation of Liability
          </h1>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 space-y-8 text-gray-700">
          {/* Disclaimer Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Disclaimer</h2>
            <p className="text-lg">
              The services and content provided by YASHRAA are for informational
              and operational purposes only and are provided &quot;as is,&quot; without
              warranty of any kind, express or implied.
            </p>

            <h3 className="text-xl font-semibold text-indigo-600 mt-6">
              We do not warrant:
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              <li className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                <span className="font-medium">
                  Accuracy, completeness, or usefulness of generated AI content
                </span>
              </li>
              <li className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                <span className="font-medium">
                  Availability or uninterrupted functionality of services
                </span>
              </li>
              <li className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                <span className="font-medium">
                  That services will meet your particular business outcomes
                </span>
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              Limitation of Liability
            </h2>
            <p>To the fullest extent permitted by law:</p>

            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <p className="font-medium">
                YASHRAA shall not be liable for any indirect, incidental,
                special, consequential or punitive damages, including but not
                limited to: loss of profits, revenue, data, or goodwill.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="font-medium">
                Total liability under this agreement shall not exceed the amount
                paid by you for services in the preceding 3-month period.
              </p>
            </div>
          </section>

          {/* Use of AI Tools */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              Use of AI Tools
            </h2>
            <div className="bg-red-50 p-4 rounded-lg">
              <p>
                User-generated outputs may be inaccurate or non-compliant with
                specific industries (e.g., medical, legal, financial). Users are
                responsible for evaluating and using the output at their own
                risk.
              </p>
            </div>
          </section>

          {/* Indemnity */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Indemnity</h2>
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <p className="font-medium">
                You agree to indemnify and hold harmless YASHRAA, its officers,
                employees, partners, and affiliates from any claims arising from
                your use of the services.
              </p>
            </div>
          </section>

          {/* General */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              General Provisions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                This disclaimer applies to the maximum extent permitted by
                applicable law
              </li>
              <li>
                Some jurisdictions do not allow certain limitations, so some
                provisions may not apply
              </li>
              <li>
                By using our services, you acknowledge and agree to these terms
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              Contact Information
            </h2>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p>For questions regarding this disclaimer:</p>
              <p className="font-medium mt-2">
                Email:
                <a
                  href="mailto:legal@yashraa.ai"
                  className="text-indigo-600 hover:underline"
                >
                  legal@yashraa.ai
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
