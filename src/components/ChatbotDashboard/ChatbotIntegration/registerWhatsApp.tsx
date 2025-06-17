"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { registerWhatsappPhoneNumber } from "@/store/slices/chats/chatSlice";
import { AppDispatch } from "@/store/store";
import toast from "react-hot-toast";
import { FiArrowLeft, FiEye, FiEyeOff, FiHelpCircle } from "react-icons/fi";

const RegisterWhatsAppPage = ({ botId }: { botId: number }) => {
  const [formData, setFormData] = useState({
    whatsapp_number: "",
    access_token: "",
    phone_number_id: "",
    business_account_id: "",
    webhook_secret: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAccessToken, setShowAccessToken] = useState(false);
  const [showWebhookSecret, setShowWebhookSecret] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.whatsapp_number) {
      setError("WhatsApp Business Number is required");
      return false;
    }
    if (!formData.access_token) {
      setError("Access Token is required");
      return false;
    }
    if (!formData.phone_number_id) {
      setError("Phone Number ID is required");
      return false;
    }
    if (!formData.business_account_id) {
      setError("Business Account ID is required");
      return false;
    }
    if (!formData.webhook_secret) {
      setError("Webhook Secret is required");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!botId) {
      toast.error("Bot not found");
      return;
    }

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await dispatch(
        registerWhatsappPhoneNumber({
          bot_id: botId,
          whatsapp_number: formData.whatsapp_number,
          access_token: formData.access_token,
          phone_number_id: formData.phone_number_id,
          business_account_id: formData.business_account_id,
          webhook_secret: formData.webhook_secret,
        })
      ).unwrap();

      toast.success("WhatsApp integration successful!");
      router.push(`/chatbot-dashboard/integration/${botId}`);
    } catch (e: any) {
      console.error("Registration failed:", e);
      toast.error(e || "Failed to integrate WhatsApp");
      setError(e || "Integration failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={() => router.back()}
            className="mr-4 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <FiArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">
            Connect WhatsApp Business Account
          </h1>
        </div>
      </header>

      <main className="flex-grow py-8 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              WhatsApp Business Integration
            </h2>
            <p className="text-gray-600">
              Connect your WhatsApp Business Account to start interacting with
              customers
            </p>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp Business Number */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp Business Number
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="whatsapp_number"
                    value={formData.whatsapp_number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., 98xxxxxxxx"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <FiHelpCircle className="text-gray-400" />
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  The number registered in Facebook Business Manager
                </p>
              </div>

              {/* Phone Number ID */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number ID
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="phone_number_id"
                  value={formData.phone_number_id}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 987456321789654"
                />
              </div>

              {/* Business Account ID */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Account ID
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="business_account_id"
                  value={formData.business_account_id}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., 123456789098765"
                />
              </div>

              {/* Webhook Secret */}
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Webhook Verification Token
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showWebhookSecret ? "text" : "password"}
                    name="webhook_secret"
                    value={formData.webhook_secret}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                    placeholder="Verification token"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowWebhookSecret(!showWebhookSecret)}
                  >
                    {showWebhookSecret ? (
                      <FiEyeOff className="text-gray-500" />
                    ) : (
                      <FiEye className="text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Access Token */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Facebook Access Token
                <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type={showAccessToken ? "text" : "password"}
                  name="access_token"
                  value={formData.access_token}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                  placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowAccessToken(!showAccessToken)}
                >
                  {showAccessToken ? (
                    <FiEyeOff className="text-gray-500" />
                  ) : (
                    <FiEye className="text-gray-500" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Token from Facebook Developer Portal with
                whatsapp_business_messaging permissions
              </p>
            </div>

            {error && (
              <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <div className="pt-4">
              <button
                onClick={handleRegister}
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${
                  isLoading ? "opacity-80 cursor-not-allowed" : "shadow-lg"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Integrating WhatsApp...
                  </span>
                ) : (
                  "Connect WhatsApp Account"
                )}
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border-t border-blue-100 p-6">
            <h3 className="font-medium text-blue-800 flex items-center">
              <FiHelpCircle className="mr-2" />
              Configuration Instructions
            </h3>
            <ul className="mt-2 text-sm text-blue-700 space-y-1">
              <li>• Your credentials will be encrypted and stored securely</li>
              <li>
                • Use the webhook URL:{" "}
                <code className="bg-blue-100 px-1 rounded">
                  https://yashraa.ai/api/whatsapp/webhook
                </code>
              </li>
              <li>
                • Ensure your webhook verification token matches the one in
                Facebook settings
              </li>
              <li>
                • Grant{" "}
                <code className="bg-blue-100 px-1 rounded">
                  whatsapp_business_messaging
                </code>{" "}
                permissions
              </li>
            </ul>
            <div className="mt-3">
              <a
                href="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Facebook API Documentation
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterWhatsAppPage;
