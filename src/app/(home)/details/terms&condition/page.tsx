import React from "react";

export default function TermsConditions() {
  return (
    <div
      className="h-full min-h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center py-12 pt-48"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="bg-white text-gray-800 py-12 px-4 lg:px-24 rounded-lg shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-10 text-indigo-600">
          Terms and Conditions
        </h2>
        <div className="prose prose-indigo max-w-none text-gray-700">
          <p>
            These Terms of Service govern your use of the website located at{" "}
            <a href="https://yashraa.ai" className="text-indigo-600 underline">https://yashraa.ai</a> and any related services or products provided by YASHRAA ("we", "our", "us").
          </p>

          <p>
            By accessing our website and/or using our services, you agree to abide by these Terms of Service and comply with all applicable laws and regulations. If you do not agree with these Terms of Service, you are prohibited from using this website or any of the services we offer.
          </p>

          <p>
            We reserve the right to review and amend these Terms of Service at any time and at our sole discretion. Changes will be effective immediately upon being posted on this website. Continued use of our platform constitutes your acceptance of any updated Terms of Service.
          </p>

          <h3>Limitations of Use</h3>
          <ul className="list-disc pl-5">
            <li>Modify, copy, distribute, create derivative works from, decompile, reverse engineer, or attempt to extract source code from any part of our platform or related services.</li>
            <li>Remove or alter any copyright, trademark, or proprietary notices contained within the website or related materials.</li>
            <li>Mirror, duplicate, or replicate our services on any other website, server, or platform.</li>
            <li>Use this platform to transmit any unlawful, harassing, defamatory, abusive, obscene, fraudulent, or otherwise objectionable content.</li>
            <li>Engage in spamming, phishing, or distributing unsolicited advertising or promotional materials.</li>
            <li>Harvest, collect, or gather data from users without consent, or attempt to breach the privacy or data security of any user or third party.</li>
            <li>Use our services to infringe upon the intellectual property rights, privacy, or other legal rights of others.</li>
            <li>Use this platform in a manner that could disrupt our networks, services, or infrastructure.</li>
            <li>Violate any applicable laws or regulations in your jurisdiction while using our platform.</li>
          </ul>

          <h3>Intellectual Property</h3>
          <p>
            All intellectual property, including but not limited to text, graphics, images, logos, software, and documentation available on this website and through our services is owned by or licensed to YASHRAA and protected under applicable copyright, trademark, and intellectual property laws.
          </p>
          <p>
            A limited, non-transferable license is granted to users for personal, non-commercial use. This does not constitute a transfer of ownership. This license will terminate automatically if you breach these Terms of Service.
          </p>

          <h3>Subscriptions and Payments</h3>
          <ul className="list-disc pl-5">
            <li>Access to certain services or products offered by YASHRAA is subject to subscription fees, as displayed on the pricing page or as otherwise communicated to you.</li>
            <li>All subscriptions auto-renew unless cancelled before the next billing cycle.</li>
            <li>Payments are non-refundable, unless otherwise stated in writing.</li>
            <li>We reserve the right to modify subscription prices or introduce new charges upon reasonable notice.</li>
          </ul>

          <h3>Liability Disclaimer</h3>
          <p>
            Our platform and services are provided on an “as is” and “as available” basis. We make no warranties, express or implied, and hereby disclaim all implied warranties including merchantability, fitness for a particular purpose, non-infringement, and accuracy of data.
          </p>
          <ul className="list-disc pl-5">
            <li>Any consequential, indirect, incidental, special, punitive, or exemplary damages;</li>
            <li>Any loss of profit, business, opportunity, goodwill, or data;</li>
            <li>Any damages arising from errors, delays, interruptions, or inability to use our services.</li>
          </ul>

          <h3>Accuracy of Information</h3>
          <p>
            The information and materials on our website are provided for general informational purposes only. While we aim to ensure accuracy, we make no guarantees or warranties regarding the completeness, reliability, or accuracy of the content. You acknowledge that any reliance on such materials is at your own risk.
          </p>

          <h3>Third-Party Links</h3>
          <p>
            Our website may contain links to third-party websites or services. We do not endorse or assume responsibility for the content, policies, or practices of any third-party sites. You access any third-party sites at your own risk.
          </p>

          <h3>User Content</h3>
          <p>
            By submitting content to YASHRAA (including reviews, feedback, or other materials), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, publish, and display such content in connection with our platform and services.
          </p>
          <p>
            You represent that you own or have the right to submit such content, and that it does not violate any third-party rights.
          </p>

          <h3>Right to Terminate</h3>
          <p>
            We reserve the right to suspend or terminate your access to our website or services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is otherwise harmful to other users, us, or third parties.
          </p>

          <h3>Severability</h3>
          <p>
            If any provision of these Terms of Service is found to be invalid or unenforceable, that provision will be severed from these Terms, and the remaining provisions will remain in full force and effect.
          </p>

          <h3>Governing Law</h3>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of Nagpur, Maharashtra (India). You agree to submit to the exclusive jurisdiction of the courts of Nagpur, Maharashtra (India) to resolve any disputes arising from these Terms of Service or your use of the platform.
          </p>
        </div>
      </div>
    </div>
  );
}
