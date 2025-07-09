"use client";
import React, { MouseEvent, useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { updateChatbotWithoutRouter } from "@/store/slices/chats/chatSlice";
import {
  createPrompt,
  fetchBotPrompts,
} from "@/store/slices/chats/tuningSlice";
import toast from "react-hot-toast";
import { toasterError, toasterSuccess } from "@/services/utils/toaster";
// yup schema
const schema = yup.object().shape({
  type: yup.string().required("Prompt type is a required field"),
  prompt: yup.string().required("Prompt is a required field"),
});

type Prompts = {
  type: string;
  prompt: string;
};
export const promptTypes = [
  "Human Resources",
  "Healthcare",
  "Entertainment Venues",
  "Finance and Banking",
  "Education (Schools)",
  "Tech Support",
  "Nonprofit Organizations",
  "Automotive Services",
  "Restaurant and Food Service",
  "E-commerce",
  "Insurance Companies",
  "Legal Services",
  "Real Estate",
  "General Customer Service",
  "Job Recruitment",
  "Hospitality (Hotels)",
  "Event Management",
  "Travel Agencies",
  "Fitness Centers"
];

const ChatbotAI = ({ botId }: { botId?: number }) => {
  const { chatbotData } = useSelector((state: RootState) => state.chat);
  const prompts = useSelector((state: RootState) =>
    botId !== undefined ? state.tuning.promptsByBotId[botId] : []
  );

  const [creativity, setCreativity] = useState<number>(
    chatbotData.creativity || 0
  );

  const [saved, setSaved] = useState<boolean>(true);

  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Prompts>({
    resolver: yupResolver(schema),
    defaultValues: {
      type: "E-commerce",
      prompt: "",
    },
  });

  useEffect(() => {
    if (prompts && prompts.length) {
      const defaultPrompt: any = prompts[0];
      if (defaultPrompt) {
        setValue("type", defaultPrompt.type);
        setValue("prompt", defaultPrompt.prompt);
      } else {
        setValue("type", "E-commerce");
      }
    }
  }, [prompts]);

  useEffect(() => {
    if (prompts) {
      const selectedType = watch("type");
      const prompt = prompts.find((item: any) => item.type === selectedType);

      if (prompt) {
        setValue("prompt", prompt.prompt);
      } else {
        setValue("prompt", "");
      }
    }
  }, [watch("type")]);

  useEffect(() => {
    if (botId) dispatch(fetchBotPrompts(botId));
  }, []);

  const onSubmit = (data: Prompts) => {
    if (promptTypes.includes(data.type) && data.prompt.trim() != "" && botId) {
      dispatch(createPrompt({ prompts: [{ ...data }], bot_id: botId }))
        .unwrap()
        .then(() => {
          toasterSuccess("Prompt Updated Successfully", 2000, "id");
          // toast.success("Prompt Updated Successfully");
          dispatch(fetchBotPrompts(botId));
          setSaved(true);
        })
        .catch((e) => {
          toasterError(e, 2000, "id");
          // toast.error(e);
        });
    }
  };

  const onDelete = () => {
    if (botId)
      dispatch(
        createPrompt({
          bot_id: botId,
          prompts: [{ prompt: "", type: watch("type") }],
        })
      )
        .unwrap()
        .then(() => {
          toasterSuccess("Prompt Deleted Successfully", 2000, "id");
          // toast.success("Prompt Deleted Successfully");
          setValue("prompt", "");
          dispatch(fetchBotPrompts(botId));
          setSaved(true);
        })
        .catch((e) => {
          toast.error(e);
        });
  };

  const handleCreativityChange = (e: any) => {
    const val = e.target.value;
    if (val > 0 && val < 100) {
      dispatch(
        updateChatbotWithoutRouter({ payload: { id: botId, creativity: val } })
      );
    }
  };

  return (
    <div className="w-full m-4">
      <h2 className="text-2xl font-bold mb-4 max-md:ml-12">AI</h2>
      <div className="w-full overflow-hidden">
        {/* AI Creativity Section */}
        <div className="bg-white rounded-xl p-6 pb-10 mb-6 ">
          <h2 className="text-lg font-bold text-black mb-1">AI Temperature</h2>
          <p className="text-sm text-gray-700 mb-4">
            Adjust the slider to control how creative or precise the bot’s responses are . this is known as the ‘temperature’ setting.
          </p>
          {/* Progress bar */}
          <div className="w-full rounded-full">
            <div className="relative">
              <input
                type="range"
                id="percentage-slider"
                min="0"
                max="100"
                value={creativity}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                onChange={(e) => {
                  setCreativity(parseInt(e.target.value));
                }}
                onMouseUp={(e) => {
                  handleCreativityChange(e);
                }}
              />

              <div className="flex mt-2 px-1">
                <span className="text-sm text-gray-500 absolute top-5 left-0">{creativity}%</span>
                <span className="text-sm text-gray-500 absolute top-5 right-0">100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Instruction Prompt Section */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-lg font-bold text-black mb-1">
            Custom Behavior Instructions

          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Tell the bot how you’d like it to act in different domains. Your instructions here will guide the AI’s behavior during conversations.
          </p>

          {/* Dropdown + Buttons */}
          <div className="flex flex-wrap gap-y-2 items-center justify-between mb-4">
            <select
              className="bg-[#797879] text-sm font-bold px-4 py-2 rounded-md border-transparent outline-0"
              {...register("type")}
              value={watch("type")}
              onChange={(e) => {
                const target = e.target.value;
                if (!saved) {
                  showConfirmToast(
                    `The Changes in ${watch(
                      "type"
                    )} is not saved yet. you want to delete changes?
                    `,
                    () => {
                      setValue("type", target);
                      setSaved(true);
                    },
                    () => null
                  );
                } else {
                  setValue("type", e.target.value);
                }
              }}
            >
              {promptTypes.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
            <div className="flex  gap-2">
              <button
                onClick={() => onDelete()}
                className="bg-[#4B4351] text-white text-sm px-4 py-2 rounded-md cursor-pointer"
              >
                Delete
              </button>
              <button
                className="cursor-pointer bg-[#340555] text-white text-sm px-4 py-2 rounded-md "
                type="submit"
                form="dynamicQAForm"
              >
                Add Prompt
              </button>
            </div>
          </div>

          {/* Prompt Box */}

          <form onSubmit={handleSubmit(onSubmit)} id="dynamicQAForm">
            <div className="flex flex-col h-[300px]">
              <h3 className="font-bold text-sm mb-2 text-black">
                Chatbot Role and Function
              </h3>
              <textarea
                placeholder="Enter your content training here"
                className="flex-grow bg-[#DADADA] rounded-xl p-4 placeholder-[#727272] text-black resize-none outline-none text-sm font-bold"
                {...register("prompt")}
                onChange={(e) => {
                  setValue("prompt", e.target.value);
                  setSaved(false);
                }}
              />
              {errors.prompt && (
                <span className="text-red-500">{errors?.prompt?.message}</span>
              )}
            </div>
          </form>

          {/* Reset Button */}
          <div className="flex justify-end mt-2">
            <button
              onClick={() => {
                reset();
                setSaved(false);
              }}
              className="cursor-pointer bg-[#625A67] px-4 py-1 rounded-md text-sm"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const showConfirmToast = (
  message: string,
  onConfirm: () => void,
  onDismiss: () => void
) => {
  // TODO: Need Designing
  toast.dismiss();
  toast(
    (t) => (
      <div>
        <p>{message}</p>
        <div style={{ marginTop: "8px" }}>
          <button
            onClick={() => {
              onConfirm();
              toast.dismiss(t.id);
            }}
            style={{ marginRight: "8px" }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              onDismiss();
              toast.dismiss(t.id);
            }}
          >
            No
          </button>
        </div>
      </div>
    ),
    { duration: 60000 }
  );
};

export default ChatbotAI;
