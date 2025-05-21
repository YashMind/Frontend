import React, { useState, useEffect } from "react";

interface AddApiKeysProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (tool: string, apiKey: string) => void;
    selectedTool: string; // e.g., "ChatGPT"
}

const AddApiKeys: React.FC<AddApiKeysProps> = ({
    isOpen,
    onClose,
    onConfirm,
    selectedTool,
}) => {
    const [apiKey, setApiKey] = useState("");

    useEffect(() => {
        setApiKey(""); // clear input when modal opens
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
            <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[400px] max-w-full shadow-2xl relative">
                <h2 className="text-xl font-bold mt-1">Add API Key for {selectedTool}</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-4 mt-4">
                    Please enter the API key for {selectedTool} below.
                </p>

                <input
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder={`Enter ${selectedTool} API key`}
                    className="w-full px-4 py-2 rounded-md text-white ring ring-white-500"
                />

                <div className="mt-8 flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="cursor-pointer px-4 py-2 text-sm font-medium rounded-md bg-white text-gray-800 hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onConfirm(selectedTool, apiKey);
                            onClose();
                        }}
                        className="cursor-pointer px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white "
                    >
                        Save API Key
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddApiKeys;
