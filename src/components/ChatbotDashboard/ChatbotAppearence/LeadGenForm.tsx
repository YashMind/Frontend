import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
  is_name: boolean;
  is_phone: boolean;
  is_mail: boolean;
  is_message: boolean;
  required_name: boolean;
  required_phone: boolean;
  required_mail: boolean;
  required_message: boolean;
  name: string;
  contact: string;
  mail: string;
  message: string;
  submit_text_color: string;
  submit_button_color: string;
  submission_message_heading: string;
  sumbission_message: string;
  submit_button_text: string;
  submit_button_text_color: string;
}

const schema = yup.object().shape({
  bot_id: yup.number(),
  chat_id: yup.number(),
  name: yup.string().required("Name is required"),
  contact: yup
    .string()
    .required("Contact is required")
    .matches(/^\d+$/, "Contact must be a number"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  type: yup.string().required("Type is required"),
  message: yup.string().required("Message is required"),
});

const LeadGenForm: React.FC<Partial<LeadGenFormProps>> = (fields) => {
  //const [isSubmitted, setIsSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
  const [isError, setIsError] = React.useState(false);
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="space-y-2 my-2">
      <div className="space-y-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 text-base text-white border border-white/10">
        <h1 className="text-xl font-semibold">Get in touch</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-1">
          {fields.is_name && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80 mb-1"
              >
                {fields.name || "Name"}{" "}
                {fields.required_name && (
                  <span className="text-red-400">*</span>
                )}
              </label>
              <input
                {...register("name", {
                  required: fields.required_name && "Name is required",
                })}
                id="name"
                type="text"
                className={`mt-1 block w-full rounded-lg border p-2 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 ${errors.name ? "border-red-400" : "border-white/10"
                  } shadow-sm`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}

          {fields.is_phone && (
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-white/80 mb-1"
              >
                {fields.contact || "Phone"}{" "}
                {fields.required_phone && (
                  <span className="text-red-400">*</span>
                )}
              </label>
              <input
                {...register("contact", {
                  required: fields.required_phone && "Contact is required",
                })}
                id="phone"
                type="tel"
                className={`mt-1 block w-full rounded-lg border p-2 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 ${errors.contact ? "border-red-400" : "border-white/10"
                  } shadow-sm`}
              />
              {errors.contact && (
                <p className="mt-1 text-sm text-red-400">
                  {errors?.contact?.message}
                </p>
              )}
            </div>
          )}

          {fields.is_mail && (
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-1"
              >
                {fields.mail || "Email"}{" "}
                {fields.required_mail && (
                  <span className="text-red-400">*</span>
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
                className={`mt-1 block w-full rounded-lg border p-2 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 ${errors.email ? "border-red-400" : "border-white/10"
                  } shadow-sm`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}

          {fields.is_message && (
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-1"
              >
                {fields.message || "Message"}{" "}
                {fields.required_message && (
                  <span className="text-red-400">*</span>
                )}
              </label>
              <textarea
                {...register("message", {
                  required: fields.required_message && "Message is required",
                })}
                id="message"
                rows={3}
                className={`mt-1 block w-full rounded-lg border p-2 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white/30 ${errors.message ? "border-red-400" : "border-white/10"
                  } shadow-sm`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>
          )}

          {isError && (
            <p className="text-red-400">Submission failed. Please try again.</p>
          )}

          <button
            type="submit"
            style={{
              color: fields.submit_text_color || "#fff",
              backgroundColor: fields.submit_button_color || "#2563eb",
            }}
            className="w-full py-2.5 px-4 rounded-lg shadow-lg text-sm font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
          >
            {fields.submit_button_text}
          </button>
        </form>
      </div>
      <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
        <h3 className="text-lg font-semibold mb-1 text-white">
          {fields.submission_message_heading}
        </h3>
        <p className="text-white/80 text-sm">{fields.sumbission_message}</p>
      </div>
    </div>
  );
};

export default LeadGenForm;
