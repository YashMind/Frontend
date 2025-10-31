"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import {
  fetchWhatsappRegistration,
  registerWhatsappPhoneNumber,
  updateWhatsappRegistration,
  deactivateWhatsappRegistration,
  deleteWhatsappRegistration,
} from "@/store/slices/chats/chatSlice";
import { AppDispatch } from "@/store/store";
import toast from "react-hot-toast";
import {
  FiArrowLeft,
  FiChevronDown,
  FiChevronUp,
  FiEye,
  FiEyeOff,
  FiHelpCircle,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import ConfirmationModal from "./deactivateWhatsappConfirmation";
import Link from "next/link";

const MASK = "••••••••••••"; // Consistent mask for all sensitive fields

const RegisterWhatsAppPage = ({ botId }: { botId: number }) => {
  const [formData, setFormData] = useState({
    is_active: false,
    whatsapp_number: "",
    access_token: "",
    phone_number_id: "",
    business_account_id: "",
    webhook_secret: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showAccessToken, setShowAccessToken] = useState(false);
  const [showWebhookSecret, setShowWebhookSecret] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDocs, setShowDocs] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [webhookSetupMode, setWebhookSetupMode] = useState(false);
  const [initialWebhookSecret, setInitialWebhookSecret] = useState("");
  const [isAccessTokenChanged, setIsAccessTokenChanged] = useState(false);
  const [isWebhookSecretChanged, setIsWebhookSecretChanged] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    const loadRegistration = async () => {
      try {
        const res = await dispatch(fetchWhatsappRegistration(botId)).unwrap();
        if (res) {
          setFormData({
            is_active: res.is_active,
            whatsapp_number: "+" + res.whatsapp_number,
            phone_number_id: res.phone_number_id,
            business_account_id: res.business_account_id,
            access_token: res.access_token ? MASK : "",
            webhook_secret: res.webhook_secret ? MASK : "",
          });
          setInitialWebhookSecret(res.webhook_secret || "");
          setIsRegistered(true);

          // Reset change trackers
          setIsAccessTokenChanged(false);
          setIsWebhookSecretChanged(false);
        }
      } catch (error) {
        setIsRegistered(false);
      }
    };
    loadRegistration();
  }, [botId, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Track changes to sensitive fields
    if (name === "access_token") {
      setIsAccessTokenChanged(true);
    } else if (name === "webhook_secret") {
      setIsWebhookSecretChanged(true);
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Clear previous errors
    setError(null);

    // Validate required fields
    const requiredFields = [
      { name: "whatsapp_number", label: "WhatsApp Business Number" },
      { name: "phone_number_id", label: "Phone Number ID" },
      { name: "business_account_id", label: "Business Account ID" },
    ];

    for (const field of requiredFields) {
      if (!formData[field.name as keyof typeof formData]) {
        setError(`${field.label} is required`);
        return false;
      }
    }

    // Validate new registrations
    if (!isRegistered) {
      if (!formData.access_token || formData.access_token === MASK) {
        setError("Access Token is required");
        return false;
      }
      if (!formData.webhook_secret || formData.webhook_secret === MASK) {
        setError("Webhook Verification Token is required");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!botId) {
      toast.error("Bot not found");
      return;
    }

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const whatsapp_number = formData.whatsapp_number.replace(/\D/g, '');
      const payload: any = {
        bot_id: botId,
        whatsapp_number,
        phone_number_id: formData.phone_number_id,
        business_account_id: formData.business_account_id,
      };

      // Only include changed tokens
      if (isAccessTokenChanged && formData.access_token !== MASK) {
        payload.access_token = formData.access_token;
      }
      if (isWebhookSecretChanged && formData.webhook_secret !== MASK) {
        payload.webhook_secret = formData.webhook_secret;
      }

      if (!isRegistered) {
        await dispatch(registerWhatsappPhoneNumber(payload)).unwrap();
        setInitialWebhookSecret(formData.webhook_secret);
        setWebhookSetupMode(true);
        toast.success("WhatsApp integration saved! Now configure your webhook.");
      } else {
        await dispatch(updateWhatsappRegistration(payload)).unwrap();
        toast.success("WhatsApp integration updated successfully!");
        router.push(`/chatbot-dashboard/integration/${botId}`);
      }
    } catch (e: any) {
      console.log("Operation failed:", e);
      toast.error(e.message || "Failed to process WhatsApp integration");
      setError(e.message || "Operation failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };


  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleDeactivate = async () => {
    setIsDeleting(true);
    try {
      await dispatch(deactivateWhatsappRegistration(botId)).unwrap();
      toast.success("WhatsApp integration deactivated successfully!");
      router.push(`/chatbot-dashboard/integration/${botId}`);
    } catch (e: any) {
      console.log("Deactivation failed:", e);
      toast.error(e || "Failed to deactivate WhatsApp integration");
    } finally {
      setIsDeleting(false);
      setShowDeactivateModal(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await dispatch(deleteWhatsappRegistration(botId)).unwrap();
      toast.success("WhatsApp integration deleting successfully!");
      router.push(`/chatbot-dashboard/integration/${botId}`);
    } catch (e: any) {
      console.log("Deleting failed:", e);
      toast.error(e || "Failed to delete WhatsApp integration");
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  const completeWebhookSetup = () => {
    setWebhookSetupMode(false);
    router.push(`/chatbot-dashboard/integration/${botId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link
            href="#" // You can't use router.back() directly in href
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
            className="mr-4 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <FiArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">
            {isRegistered ? "Manage" : "Connect"} WhatsApp Business Account
          </h1>
        </div>
      </header>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
        {webhookSetupMode ? (
          <div className="max-w-2xl h-fit my-auto mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Webhook Configuration
              </h2>
              <p className="text-gray-600">
                Follow these steps to complete your WhatsApp integration setup
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-800">Step 1: Configure Webhook in Facebook</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                  <li>Go to <a href="https://developers.facebook.com/apps/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Developer Portal</a></li>
                  <li>Select your WhatsApp Business app</li>
                  <li>Navigate to "WhatsApp" → "Configuration" → "Webhooks"</li>
                  <li>Click on "Edit" for the "Messages" subscription</li>
                  <li>Set the Callback URL to:
                    <code className="block bg-gray-100 p-2 rounded mt-1 text-xs">
                      https://yashraa.ai/api/whatsapp/webhook
                    </code>
                  </li>
                  <li>Set the Verification Token to:
                    <code className="block bg-gray-100 p-2 rounded mt-1 text-xs">
                      {initialWebhookSecret}
                    </code>
                  </li>
                  <li>Subscribe to the following fields: "messages", "message_template_status_update"</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-800">Step 2: Verify Webhook</h3>
                <p className="text-sm text-gray-700">
                  After saving the webhook configuration, Facebook will send a verification request.
                  Our system will automatically verify it using the token you provided.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={completeWebhookSetup}
                  className="w-full py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-lg"
                >
                  I've completed the webhook setup
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl h-fit my-auto mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {isRegistered && (
              <div className="bg-green-50 border-b border-green-100 p-4 flex items-center">
                <FaWhatsapp className="text-green-600 mr-2 text-xl" />
                <span className="text-green-800 font-medium">
                  WhatsApp is already connected to this bot
                </span>
              </div>
            )}

            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                WhatsApp Business Integration
              </h2>
              <p className="text-gray-600">
                {isRegistered
                  ? "Update your WhatsApp Business Account connection"
                  : "Connect your WhatsApp Business Account to start interacting with customers"}
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Webhook Verification Token
                    {!isRegistered && <span className="text-red-500 ml-1">*</span>}
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
                  <p className="mt-1 text-xs text-gray-500">
                    {isWebhookSecretChanged
                      ? "Update your webhook settings on Facebook after changing this"
                      : "Leave unchanged to keep existing token"}
                  </p>
                </div>

              </div>

              {/* Access Token */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Facebook Access Token
                  {!isRegistered && <span className="text-red-500 ml-1">*</span>}
                </label>
                <div className="relative">
                  <input
                    type={showAccessToken ? "text" : "password"}
                    name="access_token"
                    value={formData.access_token}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                    placeholder="Enter your access token"
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
                  {isRegistered && !isAccessTokenChanged
                    ? "Leave unchanged to keep existing token"
                    : "Token from Facebook Developer Portal"}
                </p>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              <div className="pt-4 flex gap-4">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${isLoading ? "opacity-80 cursor-not-allowed" : "shadow-lg"
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
                      {isRegistered ? "Updating..." : "Connecting..."}
                    </span>
                  ) : isRegistered ? (
                    "Update Integration"
                  ) : (
                    "Connect WhatsApp Account"
                  )}
                </button>

                {isRegistered && (
                  formData.is_active ? (
                    <button
                      type="button"
                      onClick={() => setShowDeactivateModal(true)}
                      disabled={isDeleting}
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all shadow-lg"
                    >
                      {isDeleting ? (
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
                          Disconnecting...
                        </span>
                      ) : (
                        <>
                          <FiTrash2 size={18} />
                          Disconnect
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className={`flex-1 py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${isLoading ? "opacity-80 cursor-not-allowed" : "shadow-lg"}`}
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
                          Connecting...
                        </span>
                      ) : (
                        "Connect"
                      )}
                    </button>
                  )
                )}
              </div>
              <div>
                {isRegistered && <button
                  type="button"
                  onClick={() => setShowDeleteModal(true)}
                  disabled={isDeleting}
                  className="flex w-full justify-center gap-2 py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all shadow-lg"
                >
                  {isDeleting ? (
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
                      Deleteing...
                    </span>
                  ) : (
                    <>
                      <FiTrash2 size={18} />
                      Delete
                    </>
                  )}
                </button>}
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
                    whatsapp_business_messaging or messages
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
          </div>)}

        {/* Documentation Sidebar */}
        {showDocs && (
          <div className="hidden lg:block w-1/3 bg-white border-l border-gray-200 overflow-y-auto">
            <div className="p-6 sticky top-0 bg-white border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">
                Where to Find These Details
              </h2>
              <button
                onClick={() => setShowDocs(false)}
                className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* WhatsApp Business Number */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => toggleSection("whatsappNumber")}
                >
                  <span>WhatsApp Business Number</span>
                  {expandedSection === "whatsappNumber" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                {expandedSection === "whatsappNumber" && (
                  <div className="p-4 text-sm text-gray-700 space-y-2">
                    <p>
                      This is the phone number associated with your WhatsApp
                      Business account.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Go to{" "}
                        <a
                          href="https://business.facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Facebook Business Manager
                        </a>
                      </li>
                      <li>Navigate to your Business Settings</li>
                      <li>Under "Accounts", select "WhatsApp Accounts"</li>
                      <li>
                        Find your phone number in the list of registered numbers
                      </li>
                      <li>
                        Format: Include country code without '+' (e.g.,
                        14155552671 for US)
                      </li>
                    </ol>
                    <div className="mt-2 p-3 bg-blue-50 rounded border border-blue-100">
                      <p className="font-medium text-blue-800">Tip:</p>
                      <p>
                        This must be the same number registered in your Facebook
                        Business Manager.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Phone Number ID */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => toggleSection("phoneNumberId")}
                >
                  <span>Phone Number ID</span>
                  {expandedSection === "phoneNumberId" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                {expandedSection === "phoneNumberId" && (
                  <div className="p-4 text-sm text-gray-700 space-y-2">
                    <p>
                      A unique identifier for your WhatsApp Business phone
                      number.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Go to{" "}
                        <a
                          href="https://developers.facebook.com/apps/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Facebook Developer Portal
                        </a>
                      </li>
                      <li>Select your WhatsApp Business app</li>
                      <li>
                        Navigate to "WhatsApp" → "API Setup" in the left menu
                      </li>
                      <li>
                        Find "Phone number ID" under "Phone numbers" section
                      </li>
                    </ol>
                    <div className="mt-2 p-3 bg-yellow-50 rounded border border-yellow-100">
                      <p className="font-medium text-yellow-800">Note:</p>
                      <p>
                        This is different from your WhatsApp Business phone
                        number.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Business Account ID */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => toggleSection("businessAccountId")}
                >
                  <span>Business Account ID</span>
                  {expandedSection === "businessAccountId" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                {expandedSection === "businessAccountId" && (
                  <div className="p-4 text-sm text-gray-700 space-y-2">
                    <p>
                      The ID of your WhatsApp Business account in Meta's system.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Go to{" "}
                        <a
                          href="https://business.facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Facebook Business Manager
                        </a>
                      </li>
                      <li>Navigate to Business Settings</li>
                      <li>Under "Accounts", select "WhatsApp Accounts"</li>
                      <li>Click on your WhatsApp Business account</li>
                      <li>Find the ID in the URL or account details page</li>
                    </ol>
                    <div className="mt-2 p-3 bg-blue-50 rounded border border-blue-100">
                      <p className="font-medium text-blue-800">Format:</p>
                      <p>Typically a long numeric ID (e.g., 123456789012345)</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Access Token */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => toggleSection("accessToken")}
                >
                  <span>Facebook Access Token</span>
                  {expandedSection === "accessToken" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                {expandedSection === "accessToken" && (
                  <div className="p-4 text-sm text-gray-700 space-y-2">
                    <p>
                      A temporary token that grants API access to your WhatsApp
                      Business account.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Go to{" "}
                        <a
                          href="https://developers.facebook.com/apps/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Facebook Developer Portal
                        </a>
                      </li>
                      <li>Select your WhatsApp Business app</li>
                      <li>Navigate to "WhatsApp" → "API Setup"</li>
                      <li>Click on "Generate Access Token"</li>
                      <li>Copy the token (it will be shown only once)</li>
                    </ol>
                    <div className="mt-2 p-3 bg-red-50 rounded border border-red-100">
                      <p className="font-medium text-red-800">Important:</p>
                      <p>
                        Store this securely as it provides access to your
                        WhatsApp account. It will be encrypted in our system.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Webhook Secret */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => toggleSection("webhookSecret")}
                >
                  <span>Webhook Verification Token</span>
                  {expandedSection === "webhookSecret" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                {expandedSection === "webhookSecret" && (
                  <div className="p-4 text-sm text-gray-700 space-y-2">
                    <p>
                      A secret token to verify webhook requests from WhatsApp.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Go to{" "}
                        <a
                          href="https://developers.facebook.com/apps/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Facebook Developer Portal
                        </a>
                      </li>
                      <li>Select your WhatsApp Business app</li>
                      <li>
                        Navigate to "WhatsApp" → "Configuration" → "Webhooks"
                      </li>
                      <li>Click on "Edit" for the "Messages" subscription</li>
                      <li>Find or set the verification token</li>
                    </ol>
                    <div className="mt-2 p-3 bg-green-50 rounded border border-green-100">
                      <p className="font-medium text-green-800">
                        Best Practice:
                      </p>
                      <p>
                        Use a strong, random string that's hard to guess. You
                        can generate one using password managers.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* General Help Section */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-medium text-blue-800 mb-2">
                  Need More Help?
                </h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>
                    <a
                      href="https://developers.facebook.com/docs/whatsapp/cloud-api/get-started"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center"
                    >
                      <FiHelpCircle className="mr-1" /> WhatsApp Cloud API
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://business.facebook.com/help"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center"
                    >
                      <FiHelpCircle className="mr-1" /> Facebook Business Help
                      Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center"
                    >
                      <FiHelpCircle className="mr-1" /> Setup Video Tutorial
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Show Docs Button (when sidebar is hidden) */}
        {!showDocs && (
          <button
            onClick={() => setShowDocs(true)}
            className="hidden lg:block fixed right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-l-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            <FiHelpCircle size={24} />
          </button>
        )}
      </main>

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={showDeactivateModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeactivate}
        title="Disconnect WhatsApp Account"
        message="Are you sure you want to disconnect this WhatsApp Business Account? Your bot will no longer be able to send or receive WhatsApp messages."
        confirmText={isDeleting ? "Disconnecting..." : "Disconnect"}
        confirmColor="red"
      />
      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        title="Delete WhatsApp Account"
        message="Are you sure you want to delete this WhatsApp Business Account? Your bot will no longer be able to send or receive WhatsApp messages."
        confirmText={isDeleting ? "Deleting..." : "Delete"}
        confirmColor="red"
      />
    </div>
  );
};

export default RegisterWhatsAppPage;
