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
      // faqId optional
    })
  ),
});

const ChatbotQA = ({ botId }: { botId?: number }) => {
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

  // Helper: truncate (including spaces) to the limit
  const truncateToLimit = (s: string, limit: number) =>
    s.length > limit ? s.slice(0, limit) : s;

  const onSubmit = (data: any) => {
    data.bot_id = Number(botId);

    // Defensive: ensure every question/answer is truncated to their limits
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
    dispatch(getChatbotsFaqs({ bot_id: botId }));
  }, [dispatch, botId]);

  useEffect(() => {
    if (chatbotFaqs && chatbotFaqs.length > 0) {
      // ensure each question & answer trimmed to limits
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
    // remove all entries from form
    remove();
  };

  const handleDeleteFaq = (item: ChatbotFaqsQuesAnswer, index: number) => {
    if (item?.faqId) {
      dispatch(deleteChatbotsFaqs({ bot_id: botId, faq_id: item?.faqId }));
    }
    remove(index);
  };

  // watch all questions so UI updates counts live
  const watchedQuestions = watch("questions");

  return (
    <div className="m-4">
      <h2 className="text-2xl font-bold mb-4 max-md:ml-12">Q & A</h2>
      <div className="bg-[#2E265C] ">
        {/* Header */}
        <div className="bg-[#FFFFFF80] rounded-t-xl flex flex-wrap gap-y-2 items-center justify-between px-5 py-2">
          <div className="flex items-center gap-4">
            <button
              className="cursor-pointer w-8 h-8 bg-white rounded-full flex items-center justify-center text-3xl  font-bold text-[#2E265C]"
              onClick={() => append({ question: "", answer: "" })}
              type="button"
            >
              +
            </button>
            <div className="relative">
              <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
                <Image
                  className="m-auto"
                  alt="alt"
                  src="/images/search.png"
                  height={14}
                  width={14}
                />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 py-1 rounded-md outline-none text-sm w-64 border border-white"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#340555] text-white text-sm p-2 font-bold rounded-md cursor-pointer">
              Export All
            </button>
            <button
              className=" bg-[#4B4351] text-white text-sm p-2 font-bold rounded-md cursor-pointer"
              type="button"
              onClick={() => {
                handleDeleteAllFaqs();
              }}
            >
              Delete
            </button>
            <button
              className="bg-[#18B91F]  text-white text-sm p-2 font-bold rounded-md cursor-pointer"
              type="submit"
              form="dynamicQAForm"
            >
              Save
            </button>
          </div>
        </div>

        {/* Question Box */}
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
              const qPercent = Math.min(
                100,
                Math.round((qLen / QUESTION_LIMIT) * 100)
              );
              const qProgressColor =
                qPercent < 80
                  ? "bg-emerald-500"
                  : qPercent < 100
                  ? "bg-amber-500"
                  : "bg-red-500";
              const qRemainingClass =
                qRemaining <= 50
                  ? qRemaining <= 0
                    ? "text-red-600"
                    : "text-amber-600"
                  : "text-gray-600";

              const aLen = currentAnswerValue.length;
              const aRemaining = ANSWER_LIMIT - aLen;
              const aPercent = Math.min(
                100,
                Math.round((aLen / ANSWER_LIMIT) * 100)
              );
              const aProgressColor =
                aPercent < 80
                  ? "bg-emerald-500"
                  : aPercent < 100
                  ? "bg-amber-500"
                  : "bg-red-500";
              const aRemainingClass =
                aRemaining <= 50
                  ? aRemaining <= 0
                    ? "text-red-600"
                    : "text-amber-600"
                  : "text-gray-600";

              return (
                <div className="bg-white rounded-b-xl p-5" key={item.id}>
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-black">Question</h2>
                    <button
                      className="cursor-pointer bg-[#FF0004] text-white px-3 py-1 text-sm rounded-md font-bold"
                      type="button"
                      onClick={() => handleDeleteFaq(item, index)}
                    >
                      Delete
                    </button>
                  </div>

                  <div className="flex flex-col gap-2">
                    {/* Controlled Question with truncation + counter + progress */}
                    <Controller
                      control={control}
                      name={`questions.${index}.question`}
                      render={({ field }) => (
                        <>
                          <textarea
                            {...field}
                            placeholder="Enter Question............"
                            className="w-full bg-[#D9D9D9] p-2 rounded-md resize-none text-[#727272] placeholder-[#727272] text-sm font-bold"
                            rows={2}
                            value={field.value ?? ""}
                            onChange={(e) => {
                              const input = e.target.value;
                              const truncated = truncateToLimit(
                                input,
                                QUESTION_LIMIT
                              );
                              // update the form field (keeps value <= limit)
                              field.onChange(truncated);
                              // also ensure form state updated
                              setValue(
                                `questions.${index}.question`,
                                truncated,
                                { shouldValidate: true, shouldDirty: true }
                              );
                            }}
                            aria-describedby={`question-${index}-count question-${index}-error`}
                            aria-invalid={!!errors.questions?.[index]?.question}
                          />

                          {/* question progress bar */}
                          <div className="mt-2">
                            {/* <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`${qProgressColor}`}
                                style={{
                                  width: `${qPercent}%`,
                                  height: "100%",
                                  transition: "width 150ms linear",
                                }}
                              />
                            </div> */}

                            <div className="flex justify-between items-center mt-1">
                              <div className="text-xs">
                                <span
                                  id={`question-${index}-count`}
                                  aria-live="polite"
                                  className={`${qRemainingClass}`}
                                >
                                  {qLen} / {QUESTION_LIMIT}
                                </span>
                                <span
                                  className={`ml-2 text-xs ${qRemainingClass}`}
                                >
                                  {qRemaining > 0
                                    ? `${qRemaining} remaining`
                                    : qRemaining === 0
                                    ? "Maximum reached"
                                    : `${-qRemaining} over limit`}
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                    {errors.questions?.[index]?.question && (
                      <span
                        id={`question-${index}-error`}
                        className="text-red-500 text-xs font-semibold"
                      >
                        {errors.questions[index].question?.message}
                      </span>
                    )}

                    {/* Controlled Answer with truncation + counter + progress */}
                    <Controller
                      control={control}
                      name={`questions.${index}.answer`}
                      render={({ field }) => (
                        <>
                          <textarea
                            {...field}
                            placeholder="Enter Answer............"
                            className="w-full bg-[#D9D9D9] p-2 rounded-md resize-none text-[#727272] placeholder-[#727272] text-sm font-bold"
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

                          {/* answer progress bar */}
                          <div className="mt-2">
                            {/* <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`${aProgressColor}`}
                                style={{
                                  width: `${aPercent}%`,
                                  height: "100%",
                                  transition: "width 150ms linear",
                                }}
                              />
                            </div> */}

                            <div className="flex justify-between items-center mt-1">
                              <div className="text-xs">
                                <span
                                  id={`answer-${index}-count`}
                                  aria-live="polite"
                                  className={`${aRemainingClass}`}
                                >
                                  {aLen} / {ANSWER_LIMIT}
                                </span>
                                <span
                                  className={`ml-2 text-xs ${aRemainingClass}`}
                                >
                                  {aRemaining > 0
                                    ? `${aRemaining} remaining`
                                    : aRemaining === 0
                                    ? "Maximum reached"
                                    : `${-aRemaining} over limit`}
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    />
                    {errors.questions?.[index]?.answer && (
                      <span className="text-red-500 text-xs font-semibold">
                        {errors.questions[index].answer?.message}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
        </form>
      </div>
    </div>
  );
};

export default ChatbotQA;
