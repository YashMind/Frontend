"use client"
import React, {useState, useRef} from "react";

const ChatbotLinksDocsUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const allowedTypes = [
    "text/plain",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
    "text/csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const validateAndAppend = (files: FileList | null) => {
    if (!files) return;
    const validFiles: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (allowedTypes.includes(file.type) && file.size <= 20 * 1024 * 1024) {
        validFiles.push(file);
      }
    }
    setUploadedFiles((prev) => [...prev, ...validFiles]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndAppend(e.target.files);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    validateAndAppend(e.dataTransfer.files);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full mb-4">
      <h2 className="text-2xl font-bold mt-[30]">Links / Docs</h2>
      <div className="bg-[#FFFFFF80] p-4 md:p-6 rounded-2xl text-white mt-[25px]  w-full mx-auto">
        <h2 className="text-2xl font-bold  mb-4">Upload Document</h2>
        <label htmlFor="doc-upload">
        <div className="bg-[#9592ae] p-6 md:p-10 rounded-2xl border-dashed border-2 border-white text-center cursor-pointer"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}>
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 10a1 1 0 011-1h3V4a1 1 0 112 0v5h3a1 1 0 110 2h-3v5a1 1 0 11-2 0v-5H4a1 1 0 01-1-1z" />
            </svg>
          </div>
          <p className="text-white text-2xl font-light md:text-xl  mb-1">
            Choose A file or Drag it here
          </p>
          <p className="text-sm text-white/80">
            Only txt, pdf, docs, doc, csv, xlsx files are allowed
          </p>
          <p className="text-sm text-white/80">
            (Each file should be less than 20.00 MB)
          </p>
        </div>
        <input
          type="file"
          id="doc-upload"
          className="hidden"
          onChange={handleFileChange}
          multiple
        />
      </label>
      {uploadedFiles.length > 0 && (
        <div className="mt-4 bg-white p-4 rounded-xl text-sm font-semibold">
          <p className="mb-2 text-[#340555]">Uploaded Files:</p>
          <ul className="list-disc list-inside text-[#333]">
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default ChatbotLinksDocsUpload;
