import { useEffect, useRef, useCallback } from "react";

interface ChatbotSetting {
  placeholder_is_active?: boolean;
  placeholder_value?: string;
}

interface AutoResizingTextareaProps {
  register?: any; // Consider using proper type from react-hook-form if using that
  errors?: {
    message?: any;
  };
  chatbotSetting?: ChatbotSetting | null;
  chatMessages?: any[]; // Replace 'any' with your specific message type
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AutoResizingTextarea = ({
  register,
  errors,
  chatbotSetting,
  chatMessages,
  value,
  onChange,
}: AutoResizingTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, []);

  useEffect(() => {
    handleInput(); // adjust on mount and when value changes
  }, [value, handleInput]);

  return (
    <textarea
      {...register("message")}
      ref={(e) => {
        if (register?.ref) {
          register.ref(e);
        }
        textareaRef.current = e;
      }}
      onChange={onChange}
      onInput={handleInput}
      value={value}
      placeholder={
        chatbotSetting?.placeholder_is_active
          ? chatbotSetting?.placeholder_value
          : "Type a message..."
      }
      className={`${errors?.message ? "border-red-500" : ""} ${
        chatMessages?.length ? "pl-12" : ""
      } w-full p-2 text-sm rounded-md border text-black border-gray-300 bg-gray-50 focus:outline-none resize-none overflow-hidden`}
      rows={1}
    />
  );
};

export default AutoResizingTextarea;
