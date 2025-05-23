"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { createChatbotFaqs, deleteChatbotsAllFaqs, deleteChatbotsFaqs, getChatbotsFaqs } from "@/store/slices/chats/chatSlice";
import { ChatbotFaqsQuesAnswer } from "@/types/chatTypes";

const schema = yup.object().shape({
  questions: yup.array().of(
    yup.object().shape({
      question: yup.string().required("Question is required"),
      answer: yup.string().required("Answer is required"),
    })
  ),
});

const ChatbotQA = ({botId}:{botId?: number}) => {
  const dispatch = useDispatch<AppDispatch>();
  const chatbotFaqs:ChatbotFaqsQuesAnswer[] = useSelector((state: RootState)=> state.chat.chatbotFaqs);
  const {
    register,
    control,
    handleSubmit,
    reset,
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

  const onSubmit = (data: any) => {
    data.bot_id = Number(botId);
    data.questions = data.questions?.filter((item:ChatbotFaqsQuesAnswer)=> !item?.faqId);
    dispatch(createChatbotFaqs({payload:data}));
  };

  useEffect(()=>{
    dispatch(getChatbotsFaqs({bot_id: botId}));
  }, [])

  useEffect(() => {
    if (chatbotFaqs && chatbotFaqs?.length > 0) {
      reset({
        questions: chatbotFaqs.map((faq: ChatbotFaqsQuesAnswer) => ({
          question: faq.question,
          answer: faq.answer,
          faqId: faq.id,
        })),
      });
    }
  }, [chatbotFaqs, reset]);

  const handleDeleteAllFaqs = () => {
    dispatch(deleteChatbotsAllFaqs({bot_id: botId}));
    remove();
  }

  const handleDeleteFaq = (item:ChatbotFaqsQuesAnswer, index:number) => {
    if(item?.faqId){
      dispatch(deleteChatbotsFaqs({bot_id: botId, faq_id: item?.faqId}));
    }
    remove(index)
  }

  return (
    <div className="w-full m-5">
      <h2 className="text-2xl font-bold my-4">Q & A</h2>
      <div className="bg-[#2E265C] ">
        {/* Header */}
        <div className="bg-[#FFFFFF80] rounded-t-xl flex items-center justify-between px-5 py-2">
          <div className="flex items-center gap-8">
            <button
              className="cursor-pointer w-8 h-8 bg-white rounded-full flex items-center justify-center text-3xl  font-bold text-[#2E265C]"
              onClick={() => append({ question: "", answer: "" })}
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
            fields.map((item:any, index:number) => {
              return (
                <div className="bg-white rounded-b-xl p-5" key={index}>
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
                    <textarea
                      {...register(`questions.${index}.question`)}
                      placeholder="Enter Question............"
                      className="w-full bg-[#D9D9D9] p-2 rounded-md resize-none text-[#727272] placeholder-[#727272] text-sm font-bold"
                      rows={2}
                    />
                    {errors.questions?.[index]?.question && (
                      <span className="text-red-500 text-xs font-semibold">
                        {errors.questions[index].question?.message}
                      </span>
                    )}
                    <textarea
                      {...register(`questions.${index}.answer`)}
                      placeholder="Enter Answer............"
                      className="w-full bg-[#D9D9D9] p-2 rounded-md resize-none text-[#727272] placeholder-[#727272] text-sm font-bold"
                      rows={3}
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
