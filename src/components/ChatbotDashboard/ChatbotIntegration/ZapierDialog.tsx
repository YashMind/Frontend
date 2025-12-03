import { FiX, FiCopy } from "react-icons/fi";
import { useRef, useState } from "react";

interface ZapierDialogProps {
  link: any;
  token: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ZapierDialog = ({
  link,
  token,
  isOpen,
  onClose,
}: ZapierDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const [tokenCopied, setTokenCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const handleCopyToken = () => {
    navigator.clipboard.writeText(token);
    setTokenCopied(true);
    setTimeout(() => setTokenCopied(false), 2000);
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

        {/* Link Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Shareable Link
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={link}
              readOnly
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm truncate"
            />
            <button
              onClick={handleCopyLink}
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              title="Copy link"
            >
              <FiCopy size={16} />
            </button>
          </div>
          {linkCopied && (
            <p className="text-xs text-green-600 mt-1">Link copied!</p>
          )}
        </div>

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
          <div className="text-sm text-gray-600">
            Use this token for verification
          </div>
          {tokenCopied && (
            <p className="text-xs text-green-600 mt-1">Token copied!</p>
          )}
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
