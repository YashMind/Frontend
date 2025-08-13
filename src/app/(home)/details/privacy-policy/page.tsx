import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen bg-center bg-cover bg-no-repeat py-24 px-4"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 space-y-8 text-gray-700">
          <section className="space-y-4">
            <p className="text-lg">
              Welcome to YASHRAA. We are committed to protecting your privacy
              and ensuring your personal data is handled in a safe and
              responsible manner.
            </p>
            <p className="text-lg">
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website
              https://yashraa.ai, subscribe to our products, or otherwise
              interact with our services. Please read this Privacy Policy
              carefully.
            </p>
            <p className="text-lg font-medium">
              By accessing our website and using our services, you consent to
              the data practices described in this Privacy Policy.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              1. Information We Collect
            </h2>
            <p>We may collect the following categories of information:</p>

            <h3 className="text-xl font-semibold mt-4">
              A. Personal Information
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>
                Billing and payment details (handled securely via third-party
                payment processors)
              </li>
              <li>Account credentials (username and password)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">B. Usage Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Device and browser type</li>
              <li>Operating system</li>
              <li>Date and time of access</li>
              <li>Pages visited</li>
              <li>Features used</li>
              <li>Referring URLs</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">C. Communications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Support tickets</li>
              <li>Emails or messages sent to us</li>
              <li>Reviews or feedback</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              2. How We Use Your Information
            </h2>
            <p>We may use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                To provide, operate, and maintain our platform and services
              </li>
              <li>To process transactions and manage subscriptions</li>
              <li>To personalize your user experience</li>
              <li>
                To send important service updates, transactional communications,
                or promotional materials (you can opt-out at any time)
              </li>
              <li>To respond to your inquiries or support requests</li>
              <li>To improve our website, products, and services</li>
              <li>To comply with legal obligations and enforce our rights</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              3. Legal Bases for Processing
            </h2>
            <p>
              We process your personal data based on one or more of the
              following legal grounds:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Performance of a contract (e.g., delivering services to you)
              </li>
              <li>Your consent</li>
              <li>Compliance with legal obligations</li>
              <li>
                Legitimate business interests (e.g., platform security,
                marketing)
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              4. Sharing of Information
            </h2>
            <p>We do not sell your personal data.</p>
            <p>
              We may share your information with trusted third parties,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processors: for secure transaction processing</li>
              <li>
                Hosting and IT partners: for website and infrastructure services
              </li>
              <li>Analytics providers: to help improve our platform</li>
              <li>
                Law enforcement or regulatory authorities: when required by law
                or to protect our legal rights
              </li>
            </ul>
            <p>
              All third parties we engage are obligated to maintain the
              confidentiality of your information and use it only for the
              purposes specified by us.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data from unauthorized access, disclosure,
              alteration, or destruction.
            </p>
            <p>
              However, no method of transmission over the internet or electronic
              storage is completely secure. We cannot guarantee absolute
              security.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              6. Data Retention
            </h2>
            <p>
              We retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, comply with
              legal requirements, resolve disputes, and enforce agreements.
            </p>
            <p>
              When your data is no longer needed, we securely delete or
              anonymize it.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              7. International Transfers
            </h2>
            <p>
              As an international platform, we may store and process your data
              in locations outside of your country of residence. We take
              appropriate steps to ensure your data is treated securely and in
              accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              8. Your Rights
            </h2>
            <p>
              Depending on your location (e.g., EU/EEA under GDPR, California
              under CCPA), you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access the personal data we hold about you</li>
              <li>The right to correct inaccurate or incomplete data</li>
              <li>
                The right to request deletion of your data ("right to be
                forgotten")
              </li>
              <li>The right to object to or restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="font-medium">
              To exercise any of these rights, please contact us at:{" "}
              <a
                href="mailto:legal@yashraa.ai"
                className="text-indigo-600 hover:underline"
              >
                legal@yashraa.ai
              </a>
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              9. Cookies & Tracking Technologies
            </h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide functionality and improve user experience</li>
              <li>Analyze site usage and trends</li>
              <li>Deliver relevant advertisements (where applicable)</li>
            </ul>
            <p>
              You can control cookie preferences through your browser settings
              or our cookie consent banner.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              10. Children's Privacy
            </h2>
            <p>
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal data from children. If you
              believe we have collected data from a child, please contact us to
              have it removed.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              11. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
              You should review the privacy policies of those third parties.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              12. Changes to This Privacy Policy
            </h2>
            <p>
              We reserve the right to update this Privacy Policy at any time.
              Changes will be effective upon posting on this page. We encourage
              you to review this Privacy Policy periodically.
            </p>
            <p>
              Your continued use of our platform constitutes your acceptance of
              any updates.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">
              13. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your personal data, please contact:
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-semibold">YASHRAA</p>
              <p>
                Email:
                <a
                  href="mailto:legal@yashraa.ai"
                  className="text-indigo-600 hover:underline"
                >
                  legal@yashraa.ai
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://yashraa.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  https://yashraa.ai
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
