"use client";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import React, { useState, useRef } from "react";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createChatbot,
  createChatbotDocLinks,
  updateChatbot,
  uploadDocument,
} from "@/store/slices/chats/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import toast from "react-hot-toast";
import { ChatbotDocLinksData, UpdateChatbotData } from "@/types/chatTypes";
<<<<<<< HEAD
import { toasterError } from "@/services/utils/toaster";
=======
>>>>>>> 0c299f4b38ef0545613d0f5f3043037f53603d1b

const schema = yup.object().shape({
  target_link: yup.string().url("Please enter a valid URL").notRequired(),
  train_from: yup.string().optional(),
  document_link: yup.string().optional(),
  text_content: yup.string().optional(),
});

const AddBotData = ({
  botId,
  handleBack,
}: {
  botId?: number;
  handleBack: () => void;
}) => {
  const [activeTrainFrom, setActiveTrainFrom] = useState<string | null>(
    "Full website"
  );
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const { chatbotData } = useSelector((state: RootState) => state.chat);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UpdateChatbotData>({
    resolver: yupResolver(schema) as Resolver<UpdateChatbotData>,
    defaultValues: {
      train_from: "Full website",
      target_link: "",
      document_link: "",
      text_content: "",
    },
  });

  const dispatch = useDispatch<AppDispatch>();

  const allowedTypes = [
    "text/plain",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
    "text/csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    dispatch(uploadDocument({ payload: formData }))
      .unwrap()
      .then((res) => {
        setValue("document_link", res?.url);
      });
  };

  const validateAndAppend = (files: FileList | null) => {
    if (!files) return;
    const file = files[0];
    if (allowedTypes.includes(file.type) && file.size <= 20 * 1024 * 1024) {
      setUploadedFiles([file]);
      uploadFile(file);
    }
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

  const onSubmit =
    (formType: "form1" | "form2") => (data: ChatbotDocLinksData) => {
      data.bot_id = botId;
      data.chatbot_name = chatbotData?.chatbot_name;
      if (formType === "form2" && data.document_link === "") {
        toasterError("Please upload a File!",2000,"id")
        // toast.error("please upload a file!");
      } else {
        dispatch(createChatbotDocLinks({ payload: data }));
        handleBack();
        reset();
        setUploadedFiles([]);
      }
    };

  const handleTrainFromClick = (value: string) => {
    setActiveTrainFrom(value);
    setValue("train_from", value);
  };

  return (
    <div className="min-h-screen bg-[#241E4E] text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Left: Add Data Section */}
        <div>
          <h2 className="text-2xl font-bold mb-15">Add Data</h2>

          <h3 className="text-xl font-semibold mb-4">Train from link</h3>
          <p className="text-xs text-gray-300 mb-8">
            Enter the link to a webpage and we will visit all pages
            <br></br>
            starting from it and list them for you to choose from
          </p>
          <form onSubmit={handleSubmit(onSubmit("form1"))}>
            <div className="flex flex-wrap gap-2 mb-9">
              {["Full website", "Webpage", "Pdf", "WordDoc"].map(
                (label: string) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleTrainFromClick(label)}
                    className={`px-4 py-1 rounded-md text-sm font-semibold ${
                      activeTrainFrom === label
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-400 text-white"
                    }`}
                  >
                    {label}
                  </button>
                )
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                {...register("target_link")}
                placeholder="Enter the target link"
                className="bg-white  px-4 py-2 rounded-md w-70 text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#340555] text-white px-4 py-2  rounded-md font-semibold"
              >
                Start
              </button>
            </div>
            {errors.target_link && (
              <span className="text-red-500 mt-2">
                {errors?.target_link?.message}
              </span>
            )}
          </form>
        </div>

        {/* Right: Upload Document Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Upload document</h2>
          <form onSubmit={handleSubmit(onSubmit("form2"))}>
            <label htmlFor="doc-upload">
              <div
                className="bg-[#9f96c1] bg-opacity-50 rounded-2xl p-10 text-center text-white border-2 border-dashed border-white mb-6"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={handleClick}
              >
                <div className="text-3xl mb-2 flex justify-center">
                  <img src="/images/cloud.png" alt="" />
                </div>
                <p className="text-lg font-semibold mb-2">
                  Choose A file or Drag it here
                </p>
                <p className="text-sm mb-3">
                  Only txt, pdf, docs, doc, csv, xlsx files are allowed
                </p>
                <p className="text-sm">
                  (Each file should be less than 20.00 MB)
                </p>
              </div>
              <input
                {...register("document_link")}
                type="file"
                id="doc-upload"
                className="hidden"
                onChange={handleFileChange}
                multiple={false}
              />
            </label>
            {uploadedFiles.length > 0 && (
              <div className="my-2 bg-white p-4 rounded-xl text-sm font-semibold">
                <p className=" text-[#340555]">Uploaded File:</p>
                <ul className="list-disc list-inside text-[#333]">
                  {uploadedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="text-right">
              <button
                type="submit"
                className="bg-[#18B91F] text-white px-10 py-2 rounded-md font-semibold text-right"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBotData;
