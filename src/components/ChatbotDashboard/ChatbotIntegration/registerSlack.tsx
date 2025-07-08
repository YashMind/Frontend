"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

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
    FiRefreshCw,
    FiExternalLink,
    FiCheckSquare,
} from "react-icons/fi";
import { FaSlack } from "react-icons/fa";
import Link from "next/link";
import ConfirmationModal from "./deactivateWhatsappConfirmation";
import { deleteSlackInstallation, getSlackCredentials, registerSlackCredentials, startSlackOAuth, updateSlackCredentials } from "@/store/slices/chats/slackIntegration";
import { useTimezone } from "@/context/TimeZoneContext";
import { formatDate } from "@/components/utils/formatDateTime";

const RegisterSlackPage = ({ botId }: { botId: number }) => {
    const { timezone, isLoading } = useTimezone()
    const [formData, setFormData] = useState({
        client_id: "",
        client_secret: "",
        signing_secret: "",
    });
    const [installation, setInstallation] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [hasCredentials, setHasCredentials] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDocs, setShowDocs] = useState(true);
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [isConnecting, setIsConnecting] = useState(false);
    const [showClientSecret, setShowClientSecret] = useState(false);
    const [showSigningSecret, setShowSigningSecret] = useState(false);
    const [redirectURI, setRedirectURI] = useState(null)
    const [activeManifestTab, setActiveManifestTab] = useState('yaml')
    const [expandedDoc, setExpandedDoc] = useState()

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    useEffect(() => {
        const loadRegistration = async () => {
            try {
                const res = await dispatch(getSlackCredentials(botId)).unwrap();

                if (res) {
                    setFormData({
                        client_id: res.client_id || "",
                        client_secret: res.client_secret ? "••••••••••••••" : "",
                        signing_secret: res.signing_secret ? "••••••••••••" : "",
                    });

                    if (res.team_id) {
                        setInstallation(res);
                        setIsRegistered(true);
                    }

                    setHasCredentials(true);
                }
            } catch (error) {
                setIsRegistered(false);
                setHasCredentials(false);
            }
        };
        loadRegistration();
    }, [botId, dispatch]);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };
    const toggleDoc = (section: string) => {
        setExpandedDoc(expandedDoc === section ? null : section);
    };

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await dispatch(deleteSlackInstallation(botId)).unwrap();
            toast.success("Slack integration deactivated successfully!");
            router.push(`/chatbot-dashboard/integration/${botId}`);
        } catch (e: any) {
            console.error("Deactivation failed:", e);
            toast.error(e || "Failed to deactivate Slack integration");
        } finally {
            setIsDeleting(false);
            setShowDeleteModal(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveCredentials = async () => {
        if (!formData.client_id || !formData.client_secret || !formData.signing_secret) {
            setError("All fields are required");
            return;
        }

        try {
            if (hasCredentials) {
                await dispatch(
                    updateSlackCredentials({
                        bot_id: botId,
                        client_id: formData.client_id,
                        client_secret: formData.client_secret,
                        signing_secret: formData.signing_secret,
                    })
                ).unwrap();
                toast.success("Slack credentials updated successfully!");
            } else {
                await dispatch(
                    registerSlackCredentials({
                        bot_id: botId,
                        client_id: formData.client_id,
                        client_secret: formData.client_secret,
                        signing_secret: formData.signing_secret,
                    })
                ).unwrap();
                toast.success("Slack credentials saved!");
                setHasCredentials(true);
            }
        } catch (e: any) {
            console.error("Failed to save credentials:", e);
            toast.error(e || "Failed to save Slack credentials");
            setError(e || "Operation failed. Please check your credentials.");
        }
    };

    const startOAuthFlow = async () => {
        if (!formData.client_id) {
            setError("Client ID is required to start OAuth");
            return;
        }

        setIsConnecting(true);
        try {
            const redirectUrl = await dispatch(startSlackOAuth({
                bot_id: botId,
                client_id: formData.client_id
            })).unwrap();



            // if (redirectUrl) {
            //     window.location.href = redirectUrl
            //     // router.push(redirectUrl);
            // }

        } catch (e: any) {
            console.error("OAuth initiation failed:", e);
            toast.error(e || "Failed to start OAuth flow");
            setError(e || "OAuth initiation failed");
            setIsConnecting(false);
        } finally {
            setIsConnecting(false)
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
            <header className="bg-white shadow-sm py-4 px-6">
                <div className="max-w-4xl mx-auto flex items-center">
                    <Link
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            router.back();
                        }}
                        className="mr-4 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        <FiArrowLeft size={20} />
                    </Link>
                    <h1 className="text-xl font-semibold text-gray-800">
                        {isRegistered ? "Manage" : "Connect"} Slack App
                    </h1>
                </div>
            </header>

            <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
                <div className="max-w-2xl w-full h-fit my-auto mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    {isRegistered && installation ? (
                        <>
                            <div className="bg-purple-50 border-b border-purple-100 p-4 flex items-center">
                                <FaSlack className="text-purple-600 mr-2 text-xl" />
                                <span className="text-purple-800 font-medium">
                                    Slack is connected to this bot
                                </span>
                            </div>

                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    Slack Workspace Connected
                                </h2>
                                <p className="text-gray-600">
                                    Your bot is connected to a Slack workspace
                                </p>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <div className="flex items-start">
                                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex items-center justify-center">
                                            <FaSlack className="text-gray-500 text-2xl" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-gray-800">
                                                {installation.team_name}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Team ID: {installation.team_id}
                                            </p>
                                            <div className="mt-2 flex items-center text-sm">
                                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                                                    Active
                                                </span>
                                                <span className="ml-3 text-gray-500">
                                                    Connected on:{" "}
                                                    {!isLoading ? formatDate(installation.installed_at, timezone) : "-"}
                                                </span>
                                            </div>
                                        </div>
                                        {isRegistered && <button
                                            type="button"
                                            onClick={() => setShowDeleteModal(true)}
                                            disabled={isDeleting}
                                            className="flex w-fit justify-center ml-auto gap-2 py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all shadow-lg"
                                        >

                                            <FiTrash2 size={18} />
                                        </button>}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {hasCredentials ? "Connect to Slack" : "Register Your Slack App"}
                                </h2>
                                <p className="text-gray-600">
                                    {hasCredentials
                                        ? "Connect your Slack workspace to enable chatbot interactions"
                                        : "Enter your Slack app credentials to connect to your workspace"}
                                </p>
                            </div>

                            <div className="p-6 space-y-6">
                                {!hasCredentials && (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Client ID
                                                <span className="text-red-500 ml-1">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="client_id"
                                                value={formData.client_id}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                                placeholder="e.g., 1234567890.1234567890"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Client Secret
                                                <span className="text-red-500 ml-1">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showClientSecret ? "text" : "password"}
                                                    name="client_secret"
                                                    value={formData.client_secret}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-10"
                                                    placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                    onClick={() => setShowClientSecret(!showClientSecret)}
                                                >
                                                    {showClientSecret ? (
                                                        <FiEyeOff className="text-gray-500" />
                                                    ) : (
                                                        <FiEye className="text-gray-500" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Signing Secret
                                                <span className="text-red-500 ml-1">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showSigningSecret ? "text" : "password"}
                                                    name="signing_secret"
                                                    value={formData.signing_secret}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-10"
                                                    placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                    onClick={() => setShowSigningSecret(!showSigningSecret)}
                                                >
                                                    {showSigningSecret ? (
                                                        <FiEyeOff className="text-gray-500" />
                                                    ) : (
                                                        <FiEye className="text-gray-500" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        {error && (
                                            <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                                                {error}
                                            </div>
                                        )}

                                        <button
                                            onClick={saveCredentials}
                                            className="w-full py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all shadow-lg"
                                        >
                                            Save Credentials
                                        </button>
                                    </div>
                                )}

                                {hasCredentials && (
                                    <div className="space-y-6">
                                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                                            <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                                <FaSlack className="text-purple-600 text-3xl" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                Connect Your Workspace
                                            </h3>
                                            <p className="text-gray-600 max-w-md mx-auto mb-6">
                                                Authorize our app to access your Slack workspace using your credentials.
                                            </p>

                                            <a
                                                // onClick={() => startOAuthFlow()}
                                                href={`${process.env.NEXT_PUBLIC_API_URL}/slack/oauth/start?bot_id=${botId}&client_id=${formData.client_id}`}

                                                className={`py-3 px-8 rounded-lg font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all shadow-lg flex items-center justify-center mx-auto ${isConnecting ? "opacity-80" : ""
                                                    }`}
                                            >
                                                {isConnecting ? (
                                                    <span className="flex items-center justify-center">
                                                        <FiRefreshCw className="animate-spin mr-2" />
                                                        Connecting...
                                                    </span>
                                                ) : (
                                                    <>
                                                        <FaSlack className="mr-2 text-lg" />
                                                        Connect to Slack
                                                    </>
                                                )}
                                            </a>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <span className="text-blue-600 font-bold">1</span>
                                                </div>
                                                <h4 className="font-semibold text-gray-800 mb-1">
                                                    Authorize
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    Click to start Slack authorization
                                                </p>
                                            </div>

                                            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <span className="text-blue-600 font-bold">2</span>
                                                </div>
                                                <h4 className="font-semibold text-gray-800 mb-1">
                                                    Install
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    Add our app to your Slack workspace
                                                </p>
                                            </div>

                                            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                                                    <span className="text-blue-600 font-bold">3</span>
                                                </div>
                                                <h4 className="font-semibold text-gray-800 mb-1">
                                                    Complete
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    Return here to finish setup
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    <div className="bg-purple-50 border-t border-purple-100 p-6">
                        <h3 className="font-medium text-purple-800 flex items-center">
                            <FiHelpCircle className="mr-2" />
                            How It Works
                        </h3>
                        <ul className="mt-2 text-sm text-purple-700 space-y-1">
                            <li>• Create your own Slack app at api.slack.com</li>
                            <li>• We use Slack's OAuth 2.0 for secure authentication</li>
                            <li>• Your bot will be added to your Slack workspace</li>
                            <li>• We'll automatically configure event subscriptions</li>
                        </ul>
                    </div>
                </div>

                {/* Documentation Sidebar */}
                {showDocs && (
                    <div className="hidden lg:block w-1/3 bg-white border-l border-gray-200 overflow-y-auto">
                        <div className="p-6 sticky top-0 bg-white border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">
                                Integration Guide
                            </h2>
                            <button
                                onClick={() => setShowDocs(false)}
                                className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        <div className="p-2 space-y-4">
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                                    onClick={() => toggleDoc("manifest")}
                                >
                                    <span>Using App Manifest (Recommended)</span>
                                    {expandedDoc === "manifest" ? <FiChevronUp /> : <FiChevronDown />}
                                </button>

                                {expandedDoc === "manifest" && (
                                    <div className="p-4 text-sm text-gray-700 space-y-4">
                                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                                            <h4 className="font-medium text-blue-800 mb-2">Setup Instructions:</h4>
                                            <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                                                <li>Go to <a href="https://api.slack.com/apps" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Slack API Portal</a></li>
                                                <li>Click "Create New App"</li>
                                                <li>Select "From an app manifest"</li>
                                                <li>Choose your workspace</li>
                                                <li>Select your preferred format below and copy the manifest</li>
                                                <li>Paste into Slack's manifest editor and click "Create"</li>
                                            </ol>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg">
                                            <div className="flex border-b border-gray-200">
                                                <button
                                                    className={`px-4 py-2 text-sm font-medium ${activeManifestTab === 'yaml' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                                                    onClick={() => setActiveManifestTab('yaml')}
                                                >
                                                    YAML Format
                                                </button>
                                                <button
                                                    className={`px-4 py-2 text-sm font-medium ${activeManifestTab === 'json' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                                                    onClick={() => setActiveManifestTab('json')}
                                                >
                                                    JSON Format
                                                </button>
                                            </div>

                                            <div className="p-4">
                                                {activeManifestTab === 'yaml' && (
                                                    <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                                                        <pre className="text-xs text-gray-800">
                                                            {`display_information:
  name: yashraa test
features:
  bot_user:
    display_name: [Your app name]
    always_online: false
  slash_commands:
    - command: /ask
      url: https://yashraa.ai/api/slack/commands
      description: Ask a question 
      usage_hint: Type your question after the command
      should_escape: false
oauth_config:
  redirect_urls:
    - https://yashraa.ai/api/slack/oauth/callback
  scopes:
    bot:
      - app_mentions:read
      - channels:history
      - chat:write
      - commands
      - groups:history
      - im:history
settings:
  org_deploy_enabled: false
  socket_mode_enabled: false
  token_rotation_enabled: false`}
                                                        </pre>
                                                    </div>
                                                )}

                                                {activeManifestTab === 'json' && (
                                                    <div className="bg-gray-50 p-4 rounded-md overflow-x-auto">
                                                        <pre className="text-xs text-gray-800">
                                                            {`{
  "display_information": {
    "name": "yashraa test"
  },
  "features": {
    "bot_user": {
      "display_name": [Your app name],
      "always_online": false
    },
    "slash_commands": [
      {
        "command": "/ask",
        "url": "https://yashraa.ai/api/slack/commands",
        "description": "Ask a question",
        "usage_hint": "Type your question after the command",
        "should_escape": false
      }
    ]
  },
  "oauth_config": {
    "redirect_urls": [
      "https://yashraa.ai/api/slack/oauth/callback"
    ],
    "scopes": {
      "bot": [
        "app_mentions:read",
        "channels:history",
        "chat:write",
        "commands",
        "groups:history",
        "im:history"
      ]
    }
  },
  "settings": {
    "org_deploy_enabled": false,
    "socket_mode_enabled": false,
    "token_rotation_enabled": false
  }
}`}
                                                        </pre>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="text-xs text-gray-500">
                                            <p><strong>Note:</strong> Make sure to replace placeholder URLs with your actual endpoints if different from the examples.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="p-2 space-y-4">
                            <div className="border border-gray-200 rounded-lg overflow-hidden"></div>
                            <button
                                className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                                onClick={() => toggleDoc("scratch")}
                            >
                                <span>Using Scratch</span>
                                {expandedDoc === "scratch" ? <FiChevronUp /> : <FiChevronDown />}
                            </button>

                            {expandedDoc == "scratch" && <div className="p-6 space-y-4">
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                                        onClick={() => toggleSection("createApp")}
                                    >
                                        <span>Creating Your Slack App</span>
                                        {expandedSection === "createApp" ? (
                                            <FiChevronUp />
                                        ) : (
                                            <FiChevronDown />
                                        )}
                                    </button>
                                    {expandedSection === "createApp" && (
                                        <div className="p-4 text-sm text-gray-700 space-y-2">
                                            <ol className="list-decimal pl-5 space-y-1">
                                                <li>
                                                    Go to{" "}
                                                    <a
                                                        href="https://api.slack.com/apps"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-purple-600 hover:underline"
                                                    >
                                                        Slack API Portal
                                                    </a>
                                                </li>
                                                <li>Click "Create New App"</li>
                                                <li>Choose "From scratch"</li>
                                                <li>Enter your app name and select your workspace</li>
                                                <li>Click "Create App"</li>
                                            </ol>
                                        </div>
                                    )}
                                </div>

                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                                        onClick={() => toggleSection("getCredentials")}
                                    >
                                        <span>Getting Credentials</span>
                                        {expandedSection === "getCredentials" ? (
                                            <FiChevronUp />
                                        ) : (
                                            <FiChevronDown />
                                        )}
                                    </button>
                                    {expandedSection === "getCredentials" && (
                                        <div className="p-4 text-sm text-gray-700 space-y-2">
                                            <ol className="list-decimal pl-5 space-y-1">
                                                <li>In your Slack app, go to "Basic Information"</li>
                                                <li>
                                                    Under "App Credentials", find:
                                                    <ul className="list-disc pl-5 mt-1">
                                                        <li>Client ID</li>
                                                        <li>Client Secret</li>
                                                        <li>Signing Secret</li>
                                                    </ul>
                                                </li>
                                                <li>Copy these values into the form</li>
                                            </ol>
                                        </div>
                                    )}
                                </div>



                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                                        onClick={() => toggleSection("redirect")}
                                    >
                                        <span>Redirect URI Setup</span>
                                        {expandedSection === "redirect" ? (
                                            <FiChevronUp />
                                        ) : (
                                            <FiChevronDown />
                                        )}
                                    </button>
                                    {expandedSection === "redirect" && (
                                        <div className="p-4 text-sm text-gray-700 space-y-2">
                                            <ol className="list-decimal pl-5 space-y-1">
                                                <li>In your Slack app dashboard:
                                                    <ul className="list-disc pl-5 mt-1">
                                                        <li>Go to sidebar → <strong>Features</strong></li>
                                                        <li>Under Features header → <strong>OAuth & Permissions</strong></li>
                                                    </ul>
                                                </li>
                                                <li>Scroll to <strong>"Redirect URLs"</strong> section</li>
                                                <li>Click <strong>"Add New Redirect URL"</strong></li>
                                                <li>Add this URL:
                                                    <code className="bg-gray-100 px-1 rounded block mt-1 font-mono">
                                                        https://yashraa.ai/api/slack/oauth/callback
                                                    </code>
                                                </li>
                                                <li>Click <strong>"Save URLs"</strong></li>
                                            </ol>
                                        </div>
                                    )}
                                </div>

                                {/* Updated Permissions Section */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                                        onClick={() => toggleSection("permissions")}
                                    >
                                        <span>Required Bot Permissions</span>
                                        {expandedSection === "permissions" ? (
                                            <FiChevronUp />
                                        ) : (
                                            <FiChevronDown />
                                        )}
                                    </button>
                                    {expandedSection === "permissions" && (
                                        <div className="p-4 text-sm text-gray-700 space-y-2">
                                            <ol className="list-decimal pl-5 space-y-1">
                                                <li>Go to <strong>Features → OAuth & Permissions</strong></li>
                                                <li>Scroll to <strong>"Scopes"</strong> section</li>
                                                <li>Under <strong>"Bot Token Scopes"</strong>, click <strong>"Add an OAuth Scope"</strong></li>
                                                <li>Add these scopes:
                                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                                        <li>
                                                            <code className="bg-gray-100 px-1 rounded">app_mentions:read</code> - Read mentions
                                                        </li>
                                                        <li>
                                                            <code className="bg-gray-100 px-1 rounded">channels:history</code> - Read channel messages
                                                        </li>
                                                        <li>
                                                            <code className="bg-gray-100 px-1 rounded">chat:write</code> - Send messages
                                                        </li>
                                                        <li>
                                                            <code className="bg-gray-100 px-1 rounded">commands</code> - Add slash commands
                                                        </li>
                                                        <li>
                                                            <code className="bg-gray-100 px-1 rounded">groups:history</code> - Read private channels
                                                        </li>
                                                        <li>
                                                            <code className="bg-gray-100 px-1 rounded">im:history</code> - Read direct messages
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="pt-2"><strong>Important:</strong> Reinstall the app after adding scopes</li>
                                            </ol>
                                        </div>
                                    )}
                                </div>

                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                                        onClick={() => toggleSection("appHome")}
                                    >
                                        <span>App Home Configuration</span>
                                        {expandedSection === "appHome" ? (
                                            <FiChevronUp />
                                        ) : (
                                            <FiChevronDown />
                                        )}
                                    </button>
                                    {expandedSection === "appHome" && (
                                        <div className="p-4 text-sm text-gray-700 space-y-2">
                                            <ol className="list-decimal pl-5 space-y-1">
                                                <li>Go to <strong>Features → App Home</strong></li>
                                                <li>Under <strong>"Your App's Presence in Slack"</strong>:
                                                    <ul className="list-disc pl-5 mt-1">
                                                        <li>Edit Bot display name</li>
                                                        <li>Set bot presence (online/offline)</li>
                                                    </ul>
                                                </li>
                                                <li>Scroll to <strong>"Show Tabs"</strong> section</li>
                                                <li>Check this box:
                                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-2">
                                                        <div className="flex items-start">
                                                            <div className="flex-shrink-0">
                                                                <FiCheckSquare className="h-5 w-5 text-yellow-500" />
                                                            </div>
                                                            <div className="ml-3">
                                                                <p className="text-sm text-yellow-700">
                                                                    <strong>Allow users to send Slash commands and messages from the messages tab</strong>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>Click <strong>"Save Changes"</strong></li>
                                            </ol>
                                        </div>
                                    )}
                                </div>

                                {/* New Slash Command Section */}
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        className="w-full p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                                        onClick={() => toggleSection("slashCommand")}
                                    >
                                        <span>Slash Command Setup</span>
                                        {expandedSection === "slashCommand" ? (
                                            <FiChevronUp />
                                        ) : (
                                            <FiChevronDown />
                                        )}
                                    </button>
                                    {expandedSection === "slashCommand" && (
                                        <div className="p-4 text-sm text-gray-700 space-y-2">
                                            <ol className="list-decimal pl-5 space-y-1">
                                                <li>Go to <strong>Features → Slash Commands</strong></li>
                                                <li>Click <strong>"Create New Command"</strong></li>
                                                <li>Configure command:
                                                    <ul className="list-disc pl-5 mt-1">
                                                        <li><strong>Command:</strong> <code>/ask</code></li>
                                                        <li><strong>Request URL:</strong>
                                                            <code className="bg-gray-100 px-1 rounded block mt-1 font-mono">
                                                                https://yashraa.ai/api/slack/commands
                                                            </code>
                                                        </li>
                                                        <li><strong>Short Description:</strong> Ask questions to the assistant</li>
                                                        <li><strong>Usage Hint:</strong> [your_question]</li>
                                                    </ul>
                                                </li>
                                                <li>Click <strong>"Save"</strong></li>
                                                <li><strong>Reinstall the app</strong> for changes to take effect</li>
                                            </ol>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <h3 className="font-medium text-purple-800 mb-2">
                                        Need More Help?
                                    </h3>
                                    <ul className="text-sm text-purple-700 space-y-1">
                                        <li>
                                            <a
                                                href="https://api.slack.com/start"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline flex items-center"
                                            >
                                                <FiHelpCircle className="mr-1" /> Slack API Documentation
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://api.slack.com/authentication/oauth-v2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline flex items-center"
                                            >
                                                <FiHelpCircle className="mr-1" /> OAuth Authentication Guide
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://api.slack.com/tutorials"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline flex items-center"
                                            >
                                                <FiHelpCircle className="mr-1" /> Slack API Tutorials
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>}
                        </div>
                    </div>
                )
                }

                {/* Show Docs Button (when sidebar is hidden) */}
                {
                    !showDocs && (
                        <button
                            onClick={() => setShowDocs(true)}
                            className="hidden lg:block fixed right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-l-lg shadow-lg hover:bg-purple-700 transition-colors"
                        >
                            <FiHelpCircle size={24} />
                        </button>
                    )
                }
            </main >

            {/* Delete Confirmation Modal */}
            {
                isRegistered && (
                    <ConfirmationModal
                        isOpen={showDeleteModal}
                        onClose={() => setShowDeleteModal(false)}
                        onConfirm={handleDelete}
                        title="Delete Slack App"
                        message="Are you sure you want to delete this Slack App? Your bot will no longer be able to interact with Slack."
                        confirmText={isDeleting ? "Deleting..." : "Delete"}
                        confirmColor="red"
                    />
                )
            }
        </div >
    );
};

export default RegisterSlackPage;