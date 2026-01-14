import { useRouter } from "next/navigation";
import React from "react";
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createChatbot } from "@/store/slices/chats/chatSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { CreatebotForm } from "@/types/chatTypes";
import { promptTypes } from "../../ChatbotAI/chatbotAI";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface EditUserModalProps {
  show: boolean;
  onHide: () => void;
}

const DOMAIN_OPTIONS = promptTypes.map((domain) => ({
  value: domain,
  label: domain,
}));

const schema = yup.object().shape({
  chatbot_name: yup.string().required("Bot name is required"),
  public: yup.boolean().optional(),
  domain: yup.string().required("Please select a domain"),
});

const CreatebotModal = ({ show, onHide }: EditUserModalProps) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatebotForm>({
    resolver: yupResolver(schema) as Resolver<CreatebotForm>,
    defaultValues: {
      public: true,
    }
  });

  const onSubmit = (data: CreatebotForm) => {
    dispatch(createChatbot({ payload: data, router }))
      .unwrap()
      .then(() => {
        onHide();
        reset();
      });
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onHide}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#1a1440]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-6 border-b border-white/5 flex justify-between items-center text-white">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Create New Bot
              </h2>
              <button
                onClick={onHide}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
              {/* Bot Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Bot Name
                </label>
                <input
                  {...register("chatbot_name")}
                  type="text"
                  placeholder="e.g. Customer Support AI"
                  className={`w-full bg-white/5 border ${errors.chatbot_name ? 'border-red-500/50' : 'border-white/10'} text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 placeholder:text-gray-500 transition-all`}
                />
                {errors.chatbot_name && (
                  <p className="text-red-400 text-xs ml-1">
                    {errors.chatbot_name.message as string}
                  </p>
                )}
              </div>

              {/* Domain */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Select Domain
                </label>
                <select
                  {...register("domain")}
                  className={`w-full bg-white/5 border ${errors.domain ? 'border-red-500/50' : 'border-white/10'} text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 appearance-none cursor-pointer transition-all`}
                >
                  <option value="" className="bg-[#1a1440]">Choose a domain...</option>
                  {DOMAIN_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#1a1440]">
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.domain && (
                  <p className="text-red-400 text-xs ml-1">
                    {errors.domain.message as string}
                  </p>
                )}
              </div>


              {/* Public Toggle */}
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <div>
                  <h4 className="text-sm font-semibold text-white">Public Availability</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Allow anyone to interact with your bot</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    {...register("public")}
                    type="checkbox"
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600/50 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-500 transition-all duration-300"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-5 shadow-inner"></div>
                </label>
              </div>

              {/* Footer Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                  Create Bot
                </button>
                <button
                  type="button"
                  onClick={onHide}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 rounded-xl border border-white/10 transition-all active:scale-95 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CreatebotModal;

