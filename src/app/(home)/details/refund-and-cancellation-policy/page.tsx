import React from 'react'

const RefundAndCancellationPolicy = () => {
    return (
        <div
            className="h-full min-h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center py-12 pt-48"
            style={{ backgroundImage: "url('/images/banner.png')" }}
        >
            <div className="bg-white text-gray-800 py-12 px-4 lg:px-24 rounded-lg shadow-xl max-w-4xl mx-auto">
                <div className="max-w-3xl mx-auto p-6">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-10 text-indigo-600">
                        Refund And Cancellation Policy
                    </h2>

                    <div className="space-y-8 text-gray-700">
                        <div className="policy-section">
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">1. Cancellations</h3>
                            <div className="space-y-4 ml-4">
                                <div>
                                    <h4 className="font-medium text-gray-800">Service-Based Products:</h4>
                                    <p className="text-gray-600">You may cancel your service within 24 hours of purchase for a full refund, provided the service has not yet commenced.</p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-800">Digital Products:</h4>
                                    <p className="text-gray-600">Due to the nature of digital content, cancellations are only accepted prior to download or access being granted.</p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-800">Physical Products:</h4>
                                    <p className="text-gray-600">Orders may be cancelled before shipping. Once shipped, please refer to our return policy.</p>
                                </div>
                            </div>
                        </div>

                        <div className="policy-section">
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">2. Refunds</h3>
                            <div className="space-y-4 ml-4">
                                <div>
                                    <h4 className="font-medium text-gray-800">Eligibility for Refund:</h4>
                                    <p className="text-gray-600">Refunds are granted if:</p>
                                    <ul className="list-disc ml-6 text-gray-600 space-y-2 mt-2">
                                        <li>The product or service is defective or not as described.</li>
                                        <li>The cancellation request is made within the eligible timeframe.</li>
                                        <li>The issue is reported within 7 days of delivery or service start.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-800">Non-refundable Items:</h4>
                                    <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                        <li>Downloaded digital products.</li>
                                        <li>Customized or personalized items.</li>
                                        <li>Services already rendered.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium text-gray-800">Processing Time:</h4>
                                    <p className="text-gray-600">Approved refunds will be processed within 5–10 business days to the original payment method.</p>
                                </div>
                            </div>
                        </div>

                        <div className="policy-section">
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">3. How to Request a Refund or Cancellation</h3>
                            <p className="text-gray-600 ml-4">Please contact us at <a href="mailto:admin@yashraa.ai" className="text-indigo-600 hover:underline">admin@yashraa.ai</a> with your order number and reason for the request. We will respond within 48 hours.</p>
                        </div>

                        <div className="policy-section">
                            <h3 className="text-xl font-semibold text-indigo-500 mb-4">4. Changes to This Policy</h3>
                            <p className="text-gray-600 ml-4">We reserve the right to modify this policy at any time. Changes will be posted on this page with an updated effective date.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RefundAndCancellationPolicy