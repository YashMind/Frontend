import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormFields {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

interface LeadGenFormProps {
  is_name: boolean;
  is_phone: boolean;
  is_mail: boolean;
  is_message: boolean;
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
    formState: { errors },
  } = useForm<FormFields>();
  //   const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      // TODO: Replace with actual API call using thunk
      console.log("Form data:", data);
      //   setIsSubmitted(true);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      //   setIsSubmitted(false);
    }
  };

  return (
    <div className="space-y-2">
      <div className="space-y-2 bg-green-50 rounded-lg p-1 text-2xl text-gray-800 font-semibold">
        <h1>Get in touch</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 p-2">
          {fields.is_name && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name{" "}
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
                className={`mt-1 block w-full rounded-md border ${
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
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone{" "}
                {fields.required_phone && (
                  <span className="text-red-500">*</span>
                )}
              </label>
              <input
                {...register("phone", {
                  required: fields.required_phone && "Phone is required",
                })}
                id="phone"
                type="tel"
                className={`mt-1 block w-full rounded-md border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:border-blue-500 focus:ring-blue-500`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
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
                Email{" "}
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
                className={`mt-1 block w-full rounded-md border ${
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
                Message{" "}
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
                className={`mt-1 block w-full rounded-md border ${
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
            <p className="text-red-600">Submission failed. Please try again.</p>
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
      <div className="p-6 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-green-800">
          {fields.submission_message_heading}
        </h3>
        <p className="text-green-700">{fields.sumbission_message}</p>
      </div>
    </div>
  );
};

export default LeadGenForm;
