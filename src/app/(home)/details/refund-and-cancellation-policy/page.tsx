import React from 'react';

const RefundAndCancellationPolicy = () => {
    return (
        <div
            className="h-full min-h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center py-12 pt-48"
            style={{ backgroundImage: "url('/images/banner.png')" }}
        >
            <div className="bg-white text-gray-800 py-12 px-4 lg:px-24 rounded-lg shadow-xl max-w-4xl mx-auto">
                <div className="max-w-3xl mx-auto p-6">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-10 text-indigo-600">
                        Refund and Cancellation Policy
                    </h2>

                    <div className="space-y-8 text-gray-700">
                        <p>
                            We strive to provide high-quality AI tools and services. Please review our Refund & Cancellation Policy:
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">Subscriptions</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>All subscriptions (monthly/annual) auto-renew unless canceled.</li>
                                <li>You may cancel your subscription at any time via your YASHRAA account dashboard.</li>
                                <li>Cancellation stops future billing, but no refunds are issued for unused portions of the current billing cycle.</li>
                                <li>If you cancel within 24 hours of an initial new subscription (first purchase only), you may request a refund at: <a href="mailto:support@yashraa.ai" className="text-indigo-600 underline">support@yashraa.ai</a>.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">Non-Subscription (One-Time Purchases)</h3>
                            <p className="ml-4">One-time purchases (if applicable) are non-refundable once delivered.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">Promotions & Trials</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Free trials or discounted offers may be withdrawn/changed at any time.</li>
                                <li>Refunds are not available for discounted offers unless otherwise stated.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">Service Downtime</h3>
                            <p className="ml-4">Temporary outages do not constitute grounds for refunds.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">How to Request Refund</h3>
                            <p className="ml-4">
                                Email: <a href="mailto:support@yashraa.ai" className="text-indigo-600 underline">support@yashraa.ai</a> — Include your account details and reason for request.
                            </p>
                            <p className="ml-4">Refund approvals are at our sole discretion, evaluated on a case-by-case basis.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">User Code of Conduct / Acceptable Use Policy</h3>
                            <p className="ml-4">To maintain a safe and ethical platform, YASHRAA users must not:</p>
                            <ul className="list-disc ml-8 space-y-2">
                                <li>Use AI tools for illegal, harmful, or fraudulent purposes</li>
                                <li>Generate or share hate speech, discrimination, or misinformation</li>
                                <li>Attempt to reverse-engineer or bypass AI safeguards</li>
                                <li>Infringe on third-party IP rights</li>
                                <li>Share private/confidential data of others without consent</li>
                                <li>Exploit the platform for spamming or phishing</li>
                                <li>Interfere with system security or performance</li>
                            </ul>
                            <p className="ml-4 mt-2">Violation may result in immediate suspension or termination of access.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundAndCancellationPolicy;
