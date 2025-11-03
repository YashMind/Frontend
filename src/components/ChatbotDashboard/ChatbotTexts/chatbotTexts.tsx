"use client";
import React, { useEffect } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { updateChatbotWithoutRouter } from "@/store/slices/chats/chatSlice";

// Type for the form (adjust if you already have TrainingText elsewhere)
type TrainingText = {
  text_content: string;
  id?: number;
};

// constants
const LIMIT_NON_SPACE_CHARS = 2000;

const DEFAULT_TEXT = `Company Name: [Enter company name]
Brand Name: [Enter brand name]
Support Page Link: [Enter URL]
Support Email: [Enter email address]
Contact Info: [Phone number, email, etc.]
Company Address: [Full address]

Tone Guidelines: [e.g., Friendly, Professional, Casual]
Formatting Rules: [e.g., Use bullet points, bold keywords]
Custom Phrasing: [e.g., Call users "guests", say "Let's go!" instead of "Start"]
Key Policies: [e.g., Return policy, terms of service]

Company Genre/Industry: [e.g., Education, Health, Tech]
Location: [City, Country]
Website: [Enter website]
Social Media: [Links or handles]
Company Description: [Short summary]
Services Offered: [List of services]`;

// yup schema with custom test (counts excluding whitespace)
const schema = yup.object().shape({
  text_content: yup
    .string()
    .required("Text is a required field")
    .test(
      "max-non-space",
      `Maximum ${LIMIT_NON_SPACE_CHARS} characters (excluding spaces)`,
      (val) => {
        if (!val) return true;
        return val.replace(/\s/g, "").length <= LIMIT_NON_SPACE_CHARS;
      }
    ),
});

const ChatbotTexts = ({ botId }: { botId?: number }) => {
  const { chatbotData } = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch<AppDispatch>();

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isDirty },
  } = useForm<TrainingText>({
    resolver: yupResolver(schema),
    defaultValues: { text_content: "" },
  });

  // Helper: truncate string so that non-space chars <= limit while preserving spaces
  const truncateToLimitPreservingSpaces = (str: string, limit: number) => {
    let count = 0;
    let out = "";
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      const isSpace = /\s/.test(ch);
      if (!isSpace) {
        if (count + 1 > limit) break;
        count++;
      }
      out += ch;
    }
    return out;
  };

  // submit handler
  const onSubmit = (data: TrainingText) => {
    data.id = botId;
    dispatch(updateChatbotWithoutRouter({ payload: data }));
    // keep content (no reset) — you can reset if desired
    // reset();
  };

  // set default text when chatbotData changes
  useEffect(() => {
    const defaultVal = chatbotData?.text_content ?? DEFAULT_TEXT;
    // ensure not exceeding limit (truncate if needed)
    const truncated = truncateToLimitPreservingSpaces(
      defaultVal,
      LIMIT_NON_SPACE_CHARS
    );
    setValue("text_content", truncated, {
      shouldValidate: true,
      shouldDirty: false,
    });
  }, [chatbotData?.text_content, setValue]);

  return (
    <div className="m-4 h-full">
      <h2 className="text-2xl max-w-[50%] font-bold mb-4 max-md:ml-12">
        Train Bot with simple text
      </h2>
      <p className="text-sm font-light">
        Easily enhance your chatbot’s training by adding additional text below.
        It’s a fast and simple way to update your bot with new information.
      </p>

      <div className="flex flex-1 items-center justify-center mt-4">
        <div className="bg-white rounded-2xl w-full p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col min-h-[500px]">
              <Controller
                control={control}
                name="text_content"
                render={({ field }) => {
                  const raw = field.value ?? "";
                  const nonSpaceCount = String(raw).replace(/\s/g, "").length;
                  const remaining = LIMIT_NON_SPACE_CHARS - nonSpaceCount;
                  const percent = Math.min(
                    100,
                    Math.round((nonSpaceCount / LIMIT_NON_SPACE_CHARS) * 100)
                  );

                  // color classes for progress/remaining
                  const progressColor =
                    percent < 80
                      ? "bg-emerald-500"
                      : percent < 100
                      ? "bg-amber-500"
                      : "bg-red-500";
                  const remainingTextClass =
                    remaining <= 50
                      ? remaining <= 0
                        ? "text-red-600"
                        : "text-amber-600"
                      : "text-gray-600";

                  return (
                    <>
                      <label htmlFor="text_content" className="sr-only">
                        Training content
                      </label>
                      <textarea
                        id="text_content"
                        placeholder="Enter your content training here"
                        className="flex-grow bg-[#DADADA] rounded-xl p-4 placeholder-[#727272] text-black resize-none outline-none text-sm font-medium h-full"
                        value={raw}
                        onChange={(e) => {
                          const input = e.target.value;
                          const truncated = truncateToLimitPreservingSpaces(
                            input,
                            LIMIT_NON_SPACE_CHARS
                          );
                          // update field value; this keeps it controlled and prevents exceeding limit
                          field.onChange(truncated);
                        }}
                        // accessibility
                        aria-describedby="charcount helptext"
                        aria-invalid={!!errors.text_content}
                      />

                      {/* validation error */}
                      {errors.text_content && (
                        <span id="error-text" className="text-red-500 mt-2">
                          {errors.text_content.message}
                        </span>
                      )}

                      {/* progress + counts */}
                      <div className="mt-3">
                        {/* <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${progressColor}`}
                            style={{
                              width: `${percent}%`,
                              transition: "width 150ms linear",
                            }}
                          />
                        </div> */}

                        <div className="flex justify-between items-center mt-2">
                          <div id="helptext" className="text-xs text-gray-500">
                            <span id="charcount" aria-live="polite">
                              <strong>{nonSpaceCount}</strong> /{" "}
                              {LIMIT_NON_SPACE_CHARS} characters (excluding
                              spaces)
                            </span>
                            <div
                              className={`text-xs mt-1 ${remainingTextClass}`}
                            >
                              {remaining > 0
                                ? `${remaining} remaining`
                                : remaining === 0
                                ? "Maximum reached"
                                : `${-remaining} over limit`}
                            </div>
                          </div>

                          {/* Save button: disabled if no characters (excluding spaces) */}
                          <div className="flex items-center gap-3">
                            <button
                              type="submit"
                              className={`cursor-pointer p-2 text-white text-sm rounded-md ${
                                nonSpaceCount === 0
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-[#340555] hover:brightness-110"
                              }`}
                              disabled={nonSpaceCount === 0}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotTexts;
