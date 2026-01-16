"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  createChatbotFaqs,
  deleteChatbotsAllFaqs,
  deleteChatbotsFaqs,
  getChatbotsFaqs,
  updateChatbotsFaqs,
} from "@/store/slices/chats/chatSlice";
import { ChatbotFaqsQuesAnswer } from "@/types/chatTypes";

const QUESTION_LIMIT = 500;
const ANSWER_LIMIT = 500;

const schema = yup.object().shape({
  questions: yup.array().of(
    yup.object().shape({
      question: yup
        .string()
        .required("Question is required")
        .max(
          QUESTION_LIMIT,
          `Question cannot exceed ${QUESTION_LIMIT} characters`
        ),
      answer: yup
        .string()
        .required("Answer is required")
        .max(ANSWER_LIMIT, `Answer cannot exceed ${ANSWER_LIMIT} characters`),
    })
  ),
});

const ChatbotQA = ({ botId }: { botId?: number }) => {
  // Early return if no botId
  if (!botId) {
    return (
      <div className="m-4">
        <h2 className="text-2xl font-bold mb-4 text-white max-md:ml-12">Q & A</h2>
        <div className="text-center p-8 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
          <p className="text-gray-300">Bot ID is required to manage Q&A.</p>
        </div>
      </div>
    );
  }

  const dispatch = useDispatch<AppDispatch>();
  const chatbotFaqs: ChatbotFaqsQuesAnswer[] = useSelector(
    (state: RootState) => state.chat.chatbotFaqs
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      questions: [{ question: "", answer: "" }],
    },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const truncateToLimit = (s: string, limit: number) =>
    s.length > limit ? s.slice(0, limit) : s;

  const onSubmit = (data: any) => {
    data.bot_id = botId; // botId is guaranteed to be number here

    if (Array.isArray(data.questions)) {
      data.questions = data.questions.map((q: any) => ({
        ...(q || {}),
        question: truncateToLimit(String(q?.question ?? ""), QUESTION_LIMIT),
        answer: truncateToLimit(String(q?.answer ?? ""), ANSWER_LIMIT),
      }));
    }

    const newFaqs = (data.questions ?? []).filter((item: any) => !item?.faqId);
    const updatedFaqs = (data.questions ?? []).filter(
      (item: any) => item?.faqId
    );

    if (newFaqs.length > 0) {
      dispatch(
        createChatbotFaqs({ payload: { bot_id: botId, questions: newFaqs } })
      );
    }
    if (updatedFaqs.length > 0) {
      dispatch(
        updateChatbotsFaqs({
          payload: { bot_id: botId, questions: updatedFaqs },
        })
      );
    }
  };

  useEffect(() => {
    // botId is guaranteed to be number here
    dispatch(getChatbotsFaqs({ bot_id: botId }));
  }, [dispatch, botId]);

  useEffect(() => {
    if (chatbotFaqs && chatbotFaqs.length > 0) {
      reset({
        questions: chatbotFaqs.map((faq: ChatbotFaqsQuesAnswer) => ({
          question: truncateToLimit(faq.question ?? "", QUESTION_LIMIT),
          answer: truncateToLimit(faq.answer ?? "", ANSWER_LIMIT),
          faqId: faq.id,
        })),
      });
    }
  }, [chatbotFaqs, reset]);

  const handleDeleteAllFaqs = () => {
    dispatch(deleteChatbotsAllFaqs({ bot_id: botId }));
    remove();
  };

  const handleDeleteFaq = (item: ChatbotFaqsQuesAnswer, index: number) => {
    if (item?.faqId) {
      dispatch(deleteChatbotsFaqs({ bot_id: botId, faq_id: item?.faqId }));
    }
    remove(index);
  };

  const watchedQuestions = watch("questions");

  return (
    <div className="m-4">
      <h2 className="text-2xl font-bold mb-4 text-white max-md:ml-12">Q & A</h2>
      <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md flex flex-wrap gap-y-4 items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-4 flex-wrap">
            <button
              className="cursor-pointer w-10 h-10 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg transition-all border border-indigo-400/50"
              onClick={() => append({ question: "", answer: "" })}
              type="button"
            >
              +
            </button>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <Image
                  className="m-auto opacity-70"
                  alt="search"
                  src="/images/search.png"
                  height={14}
                  width={14}
                  style={{ filter: "invert(1)" }}
                />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg outline-none text-sm w-64 text-white placeholder-gray-400 focus:border-indigo-500 focus:bg-white/10 transition-all"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 font-semibold rounded-lg shadow-lg border border-indigo-500/50 transition-all cursor-pointer">
              Export All
            </button>
            <button
              className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 font-semibold rounded-lg border border-white/10 transition-all cursor-pointer backdrop-blur-sm"
              type="button"
              onClick={() => {
                handleDeleteAllFaqs();
              }}
            >
              Delete All
            </button>
            <button
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2 font-semibold rounded-lg shadow-lg border border-emerald-500/50 transition-all cursor-pointer"
              type="submit"
              form="dynamicQAForm"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Question Box */}
        <div className="bg-black/20 backdrop-blur-sm p-4 min-h-[500px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            id="dynamicQAForm"
          >
            {fields &&
              fields.map((item: any, index: number) => {
                const currentQuestionValue =
                  (watchedQuestions && watchedQuestions[index]?.question) ??
                  item.question ??
                  "";
                const currentAnswerValue =
                  (watchedQuestions && watchedQuestions[index]?.answer) ??
                  item.answer ??
                  "";

                const qLen = currentQuestionValue.length;
                const qRemaining = QUESTION_LIMIT - qLen;
                const qRemainingClass =
                  qRemaining <= 50
                    ? qRemaining <= 0
                      ? "text-red-400"
                      : "text-amber-400"
                    : "text-gray-400";

                const aLen = currentAnswerValue.length;
                const aRemaining = ANSWER_LIMIT - aLen;
                const aRemainingClass =
                  aRemaining <= 50
                    ? aRemaining <= 0
                      ? "text-red-400"
                      : "text-amber-400"
                    : "text-gray-400";

                return (
                  <div className="bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/5 transition-all duration-300" key={item.id}>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                        Q&A Pair #{index + 1}
                      </h2>
                      <button
                        className="cursor-pointer bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 border border-red-500/30 px-3 py-1 text-sm rounded-lg font-medium transition-colors"
                        type="button"
                        onClick={() => handleDeleteFaq(item, index)}
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex flex-col gap-4">
                      {/* Question Field */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1 ml-1 uppercase tracking-wide">Question</label>
                        <Controller
                          control={control}
                          name={`questions.${index}.question`}
                          render={({ field }) => (
                            <>
                              <textarea
                                {...field}
                                placeholder="Enter the user's question..."
                                className="w-full bg-black/20 p-3 rounded-lg resize-none text-white placeholder-gray-500 text-sm font-medium border border-white/10 focus:border-indigo-500 focus:bg-black/30 outline-none transition-all"
                                rows={2}
                                value={field.value ?? ""}
                                onChange={(e) => {
                                  const input = e.target.value;
                                  const truncated = truncateToLimit(
                                    input,
                                    QUESTION_LIMIT
                                  );
                                  field.onChange(truncated);
                                  setValue(
                                    `questions.${index}.question`,
                                    truncated,
                                    { shouldValidate: true, shouldDirty: true }
                                  );
                                }}
                                aria-describedby={`question-${index}-count question-${index}-error`}
                                aria-invalid={!!errors.questions?.[index]?.question}
                              />

                              <div className="flex justify-end mt-1">
                                <span
                                  className={`text-xs ${qRemainingClass}`}
                                >
                                  {qLen}/{QUESTION_LIMIT}
                                </span>
                              </div>
                            </>
                          )}
                        />
                        {errors.questions?.[index]?.question && (
                          <span
                            id={`question-${index}-error`}
                            className="text-red-400 text-xs font-semibold block mt-1"
                          >
                            {errors.questions[index].question?.message}
                          </span>
                        )}
                      </div>

                      {/* Answer Field */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1 ml-1 uppercase tracking-wide">Answer</label>
                        <Controller
                          control={control}
                          name={`questions.${index}.answer`}
                          render={({ field }) => (
                            <>
                              <textarea
                                {...field}
                                placeholder="Enter the bot's response..."
                                className="w-full bg-black/20 p-3 rounded-lg resize-none text-white placeholder-gray-500 text-sm font-medium border border-white/10 focus:border-emerald-500 focus:bg-black/30 outline-none transition-all"
                                rows={3}
                                value={field.value ?? ""}
                                onChange={(e) => {
                                  const input = e.target.value;
                                  const truncated = truncateToLimit(
                                    input,
                                    ANSWER_LIMIT
                                  );
                                  field.onChange(truncated);
                                  setValue(`questions.${index}.answer`, truncated, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                  });
                                }}
                                aria-describedby={`answer-${index}-count answer-${index}-error`}
                                aria-invalid={!!errors.questions?.[index]?.answer}
                              />

                              <div className="flex justify-end mt-1">
                                <span
                                  className={`text-xs ${aRemainingClass}`}
                                >
                                  {aLen}/{ANSWER_LIMIT}
                                </span>
                              </div>
                            </>
                          )}
                        />
                        {errors.questions?.[index]?.answer && (
                          <span className="text-red-400 text-xs font-semibold block mt-1">
                            {errors.questions[index].answer?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotQA;
