import { FiDownload } from "react-icons/fi";
import { useState } from "react";

interface DownloadButtonProps {
  fileUrl: string;
  fileName?: string;
  className?: string;
  children?: React.ReactNode;
}

export const DownloadButton = ({
  fileUrl,
  fileName = "download.zip",
  className = "",
  children,
}: DownloadButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setIsDownloading(true);
    setError(null);

    try {
      // For external URLs or public files
      if (fileUrl.startsWith("http") || fileUrl.startsWith("/")) {
        const response = await fetch(fileUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = fileName;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();

        // Cleanup
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(blobUrl);
        }, 100);
      } else {
        // Handle local files or other cases
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error("Download failed:", err);
      setError(err instanceof Error ? err.message : "Download failed");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`flex items-center gap-2 px-4 py-1 text-xs w-fit rounded-full
             bg-blue-600 text-white  hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed ${className}`}
      >
        {isDownloading ? (
          <span className="inline-block animate-spin">↻</span>
        ) : (
          <FiDownload size={15} />
        )}
        {children || "Download ZIP"}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
