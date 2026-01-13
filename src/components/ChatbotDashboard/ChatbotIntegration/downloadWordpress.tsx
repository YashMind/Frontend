import { useState, useRef } from "react";
import { FiCopy, FiDownload, FiX } from "react-icons/fi";

interface AccessDownloadDialogProps {
  token: string;
  fileUrl: string;
  fileName?: string;
  isOpen: boolean;
  onClose: () => void;
}

const AccessDownloadDialog = ({
  token,
  fileUrl,
  isOpen,
  fileName = "yashraa.zip",
  onClose,
}: AccessDownloadDialogProps) => {
  const [tokenCopied, setTokenCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleCopyToken = () => {
    navigator.clipboard.writeText(token);
    setTokenCopied(true);
    setTimeout(() => setTokenCopied(false), 2000);
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    setError(null);
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Failed to fetch ZIP file.");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      }, 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Download failed");
    } finally {
      setIsDownloading(false);
    }
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center text-black">
      <div
        ref={dialogRef}
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <FiX size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Your Access Details
        </h2>

        {/* Token Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Access Token
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={token}
              readOnly
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm font-mono truncate"
            />
            <button
              onClick={handleCopyToken}
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              title="Copy token"
            >
              <FiCopy size={16} />
            </button>
          </div>
          {tokenCopied && (
            <p className="text-xs text-green-600 mt-1">Token copied!</p>
          )}
        </div>

        {/* Download Button */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Download File
          </label>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition disabled:bg-blue-400"
          >
            {isDownloading ? (
              <span className="animate-spin">↻</span>
            ) : (
              <FiDownload size={16} />
            )}
            {isDownloading ? "Downloading..." : "Download ZIP"}
          </button>
          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessDownloadDialog;
