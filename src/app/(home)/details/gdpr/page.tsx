import React from "react";

export default function GDPRCompliance() {
  return (
    <div
      className="min-h-screen bg-center bg-cover bg-no-repeat py-24 px-4"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">GDPR Compliance</h1>
          <p className="text-white mt-2">(For users located in the European Union and European Economic Area)</p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 space-y-8 text-gray-700">
          {/* Data Controller */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Data Controller</h2>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-semibold">YASHRAA AI Solutions</p>
              <p>Email: <a href="mailto:legal@yashraa.ai" className="text-indigo-600 hover:underline">legal@yashraa.ai</a></p>
            </div>
          </section>

          {/* Purpose of Data Collection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Purpose of Data Collection</h2>
            <p>We collect and process personal data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain access to our AI tools and services</li>
              <li>To manage subscriptions, payments, and customer accounts</li>
              <li>To communicate updates, offers, or support-related information</li>
              <li>To improve platform functionality and user experience</li>
              <li>To comply with applicable legal obligations</li>
            </ul>
          </section>

          {/* Legal Basis for Processing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Legal Basis for Processing</h2>
            <p>We rely on the following legal bases under Article 6 of the GDPR:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Contract performance (Article 6(1)(b))</span> — for delivering services to you</li>
              <li><span className="font-semibold">Legitimate interests (Article 6(1)(f))</span> — to improve services and protect platform integrity</li>
              <li><span className="font-semibold">Consent (Article 6(1)(a))</span> — for sending marketing communications</li>
              <li><span className="font-semibold">Legal obligations (Article 6(1)(c))</span> — for compliance with applicable laws</li>
            </ul>
          </section>

          {/* Categories of Personal Data Processed */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Categories of Personal Data Processed</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, login credentials</li>
              <li>Billing information</li>
              <li>IP address, device and browser data</li>
              <li>Usage data and preferences</li>
            </ul>
          </section>

          {/* Recipients of Personal Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Recipients of Personal Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Internal employees (as necessary for support or account management)</li>
              <li>Secure third-party service providers (such as payment processors, analytics platforms, hosting providers)</li>
            </ul>
          </section>

          {/* International Transfers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">International Transfers</h2>
            <p>Where data is transferred outside of the EEA, we use Standard Contractual Clauses (SCCs) or rely on other lawful transfer mechanisms to ensure an adequate level of data protection.</p>
          </section>

          {/* Data Retention */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Data Retention</h2>
            <p>We retain your personal data only as long as necessary to fulfill the purposes it was collected for, or to comply with legal obligations.</p>
          </section>

          {/* User Rights Under GDPR */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">User Rights Under GDPR</h2>
            <p>As a data subject, you have the following rights under GDPR:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Right of access (Article 15)</span></li>
              <li><span className="font-semibold">Right to rectification (Article 16)</span></li>
              <li><span className="font-semibold">Right to erasure (Article 17)</span></li>
              <li><span className="font-semibold">Right to restriction of processing (Article 18)</span></li>
              <li><span className="font-semibold">Right to data portability (Article 20)</span></li>
              <li><span className="font-semibold">Right to object (Article 21)</span></li>
              <li><span className="font-semibold">Right to withdraw consent (where applicable)</span></li>
              <li><span className="font-semibold">Right to lodge a complaint with your local data protection authority (Article 77)</span></li>
            </ul>
          </section>

          {/* Requirement to Provide Data */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Requirement to Provide Data</h2>
            <p>Providing personal data is necessary for service use. Failure to provide required data may limit your ability to access our services.</p>
          </section>

          {/* Automated Decision-Making */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Automated Decision-Making</h2>
            <p>We do not engage in automated decision-making, including profiling, that produces legal effects or significantly affects you.</p>
          </section>

          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Contact for Data Protection Inquiries</h2>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p>Email: <a href="mailto:legal@yashraa.ai" className="text-indigo-600 hover:underline">legal@yashraa.ai</a></p>
            </div>
          </section>

          {/* Supervisory Authority */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-700">Supervisory Authority</h2>
            <p>You may contact your local EU Data Protection Authority if you believe your rights have been violated.</p>
          </section>
        </div>
      </div>
    </div>
  );
}