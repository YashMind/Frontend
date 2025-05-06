"use client";
import { createChatbotLeads } from "@/store/slices/chats/chatSlice";
import { AppDispatch } from "@/store/store";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";

interface FormFields {
  name?: string;
  contact?: string;
  email?: string;
  message?: string;
  type?: string;
  bot_id?: number;
  chat_id?: number;
}

interface LeadGenFormProps {
  bot_id: number;
  chat_id: number;
  is_name: boolean;
  is_phone: boolean;
  is_mail: boolean;
  is_message: boolean;
  name: string;
  contact: string;
  mail: string;
  message: string;
  required_name: boolean;
  required_phone: boolean;
  required_mail: boolean;
  required_message: boolean;
  submit_text_color: string;
  submit_button_color: string;
  submission_message_heading: string;
  sumbission_message: string;
  submit_button_text: string;
  submit_button_text_color: string;
}

const LeadGenForm: React.FC<Partial<LeadGenFormProps>> = (fields) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        bot_id: yup.number(),
        chat_id: yup.number(),
        name:
          fields.is_name && fields.required_name
            ? yup.string().required("Name is required")
            : yup.string(),
        contact:
          fields.is_phone && fields.required_phone
            ? yup
                .string()
                .required("Contact is required")
                .matches(/^\d+$/, "Contact must be a number")
            : yup.string(),
        email:
          fields.is_mail && fields.required_mail
            ? yup
                .string()
                .email("Invalid email address")
                .required("Email is required")
            : yup.string(),
        type: yup.string().required("Type is required"),
        message:
          fields.is_message && fields.required_message
            ? yup.string().required("Message is required")
            : yup.string(),
      })
    ),
    defaultValues: {
      bot_id: 0,
      chat_id: 0,
      name: "",
      contact: "",
      email: "",
      type: "Lead",
      message: "",
    },
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      // TODO: Replace with actual API call using thunk
      data.bot_id = fields.bot_id;
      data.chat_id = fields.chat_id;
      dispatch(createChatbotLeads({ payload: data }))
        .unwrap()
        .then(() => {
          setIsSubmitted(true);
          setIsError(false);
        })
        .catch(() => {
          setIsSubmitted(false);
          setIsError(true);
        });
    } catch (error) {
      setIsError(true);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="space-y-2 my-2 max-w-2xl">
      {!isSubmitted && !isError && (
        <div className="space-y-2 bg-green-50 rounded-lg p-1 text-base text-gray-800 ">
          <h1 className="text-2xl font-semibold">Get in touch</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 p-2">
            {fields.is_name && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  {fields.name || "Name"}{" "}
                  {fields.required_name && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  {...register("name", {
                    required: fields.required_name && "Name is required",
                  })}
                  id="name"
                  type="text"
                  className={`mt-1 block w-full rounded-md border p-1 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
            )}

            {fields.is_phone && (
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700"
                >
                  {fields.contact || "Phone"}{" "}
                  {fields.required_phone && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  {...register("contact", {
                    required: fields.required_phone && "Contact is required",
                  })}
                  id="phone"
                  type="tel"
                  className={`mt-1 block w-full rounded-md border p-1 ${
                    errors.contact ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.contact && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors?.contact?.message}
                  </p>
                )}
              </div>
            )}

            {fields.is_mail && (
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {fields.mail || "Email"}{" "}
                  {fields.required_mail && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <input
                  {...register("email", {
                    required: fields.required_mail && "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  id="email"
                  type="email"
                  className={`mt-1 block w-full rounded-md border p-1 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            )}

            {fields.is_message && (
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  {fields.message || "Message"}{" "}
                  {fields.required_message && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <textarea
                  {...register("message", {
                    required: fields.required_message && "Message is required",
                  })}
                  id="message"
                  rows={3}
                  className={`mt-1 block w-full rounded-md border p-1 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>
            )}

            {isError && (
              <p className="text-red-600">
                Submission failed. Please try again.
              </p>
            )}

            <button
              type="submit"
              style={{
                color: fields.submit_text_color || "#fff",
                backgroundColor: fields.submit_button_color || "#2563eb",
              }}
              className="w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              {fields.submit_button_text}
            </button>
          </form>
        </div>
      )}
      {isSubmitted && (
        <div className="p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-green-800">
            {fields.submission_message_heading}
          </h3>
          <p className="text-green-700">{fields.sumbission_message}</p>
        </div>
      )}
      {isError && (
        <div className="p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-red-800">
            Some Error occured
          </h3>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setIsError(false);
            }}
            className="text-red-700 p-2 bg-red-100 rounded-lg shadow border border-red-200"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default LeadGenForm;
