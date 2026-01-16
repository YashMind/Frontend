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
          toasterSuccess("Prompt Updated Successfully", 5000, "id");
          // toast.success("Prompt Updated Successfully");
          dispatch(fetchBotPrompts(botId));
          setSaved(true);
        })
        .catch((e) => {
          toasterError(e, 10000, "id");
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
          toasterSuccess("Prompt Deleted Successfully", 10000, "id");
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
    <div className="m-4">
      <h2 className="text-2xl font-bold mb-4 text-white max-md:ml-12">AI Configuration</h2>
      <div className="w-full overflow-hidden flex flex-col gap-6">
        {/* AI Creativity Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            AI Temperature
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Adjust the slider to control how creative or precise the bot’s responses are. Lower values are more precise, higher values are more creative.
          </p>
          {/* Progress bar */}
          <div className="w-full rounded-full px-2">
            <div className="relative">
              <input
                type="range"
                id="percentage-slider"
                min="0"
                max="100"
                value={creativity}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                onChange={(e) => {
                  setCreativity(parseInt(e.target.value));
                }}
                onMouseUp={(e) => {
                  handleCreativityChange(e);
                }}
              />

              <div className="flex justify-between mt-3 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                <span>Precise</span>
                <span className="text-indigo-400">{creativity}%</span>
                <span>Creative</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Instruction Prompt Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Custom Behavior Instructions
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Tell the bot how you’d like it to act in different domains. Your instructions here will guide the AI’s behavior during conversations.
          </p>

          {/* Dropdown + Buttons */}
          <div className="flex flex-wrap gap-4 items-center justify-between mb-6 p-4 bg-white/5 rounded-lg border border-white/5">
            <div className="flex items-center gap-2 flex-grow">
              <span className="text-gray-400 text-sm font-medium whitespace-nowrap">Domain:</span>
              <select
                className="bg-black/30 text-white text-sm font-medium px-4 py-2 rounded-lg border border-white/10 outline-none focus:border-indigo-500 min-w-[200px]"
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
                    <option value={item} key={index} className="bg-gray-900 text-white">
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onDelete()}
                className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-lg cursor-pointer border border-white/10 transition-all font-semibold"
              >
                Delete
              </button>
              <button
                className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg shadow-lg border border-indigo-500/50 transition-all font-semibold"
                type="submit"
                form="dynamicQAForm"
              >
                Add Prompt
              </button>
            </div>
          </div>

          {/* Prompt Box */}

          <form onSubmit={handleSubmit(onSubmit)} id="dynamicQAForm">
            <div className="flex flex-col min-h-[300px]">
              <h3 className="font-bold text-sm mb-3 text-gray-300 uppercase tracking-wide">
                Chatbot Role and Function
              </h3>
              <textarea
                placeholder="Enter detailed instructions for your chatbot here..."
                className="flex-grow bg-black/20 rounded-xl p-4 placeholder-gray-500 text-white resize-none outline-none text-sm font-medium border border-white/10 focus:border-emerald-500 focus:bg-black/30 transition-all leading-relaxed"
                {...register("prompt")}
                onChange={(e) => {
                  setValue("prompt", e.target.value);
                  setSaved(false);
                }}
              />
              {errors.prompt && (
                <span className="text-red-400 mt-2 text-sm">{errors?.prompt?.message}</span>
              )}
            </div>
          </form>

          {/* Reset Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => {
                reset();
                setSaved(false);
              }}
              className="cursor-pointer text-gray-400 hover:text-white hover:underline text-sm transition-colors py-1"
            >
              Reset to Defaults
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
