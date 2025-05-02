import React, { useEffect, useState } from "react";
import ChatbotDummy from "./chatbotDummy";
import { useDispatch, useSelector } from "react-redux";
import {
  createChatbotSettings,
  fetchChatbotSettings,
  updateChatbotSettings,
} from "@/store/slices/chats/appearanceSettings";
import { AppDispatch, RootState } from "@/store/store";
import {
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import toast from "react-hot-toast";
import { uploadDocument } from "@/store/slices/chats/chatSlice";
import { pathToImage } from "@/services/utils/helpers";

interface IFormInput {
  title_value: string;
  welcome_message_value: string;
  suggestions_value: string;
  placeholder_value: string;
  title_is_active: boolean;
  welcome_message_is_active: boolean;
  suggestions_is_active: boolean;
  placeholder_is_active: boolean;
  chat_window_bg: string;
  send_button_color: string;
  chat_icon_color: string;
  user_message_bg: string;
  dots_color: string;
  message_bg: string;
  live_message_bg: string;
  chat_icon: string;
  image: string;
}

type ImageFieldProps = {
  name: string;
  label: string;
  value?: string;
  description?: string;
  register?: any;
};

type FieldProps = {
  name: any;
  label: string;
  description: string;
  type?: "text" | "textarea";
  checkbox?: boolean;
  checkbox_value?: boolean;
  checkbox_name?: any;
  placeholder?: string;
  value?: string | boolean;
  register: UseFormRegister<IFormInput>;
};

type ColorPickerFieldProps = {
  name: any;
  label: string;
  description?: string;
  defaultValue?: string;
  className?: string;
  register: UseFormRegister<IFormInput>;
};

const ChatbotAppearence = ({ botId }: { botId?: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const chatbotSetting = useSelector(
    (state: RootState) => state.appearance.settings
  );
  useEffect(() => {
    if (botId && !chatbotSetting) dispatch(fetchChatbotSettings(botId));
  }, []);
  const { register, handleSubmit, setValue, watch } = useForm<IFormInput>({
    defaultValues: {
      title_value: chatbotSetting?.title_value || "",
      welcome_message_value: chatbotSetting?.welcome_message_value || "",
      suggestions_value: chatbotSetting?.suggestions_value || "",
      placeholder_value: chatbotSetting?.placeholder_value || "",
      title_is_active: chatbotSetting?.title_is_active || false,
      welcome_message_is_active:
        chatbotSetting?.welcome_message_is_active || false,
      suggestions_is_active: chatbotSetting?.suggestions_is_active || false,
      placeholder_is_active: chatbotSetting?.placeholder_is_active || false,
      chat_window_bg: chatbotSetting?.chat_window_bg || "",
      send_button_color: chatbotSetting?.send_button_color || "",
      chat_icon_color: chatbotSetting?.chat_icon_color || "",
      user_message_bg: chatbotSetting?.user_message_bg || "",
      dots_color: chatbotSetting?.dots_color || "",
      message_bg: chatbotSetting?.message_bg || "",
      live_message_bg: chatbotSetting?.live_message_bg,
      chat_icon: chatbotSetting?.chat_icon,
      image: chatbotSetting?.image,
    },
  });

  useEffect(() => {
    if (chatbotSetting) {
      // Conditionally set each value if the property exists in chatbotSetting
      if (chatbotSetting?.title_value)
        setValue("title_value", chatbotSetting.title_value);
      if (chatbotSetting?.welcome_message_value)
        setValue("welcome_message_value", chatbotSetting.welcome_message_value);
      if (chatbotSetting?.suggestions_value)
        setValue("suggestions_value", chatbotSetting.suggestions_value);
      if (chatbotSetting?.placeholder_value)
        setValue("placeholder_value", chatbotSetting.placeholder_value);
      if (chatbotSetting?.title_is_active !== undefined)
        setValue("title_is_active", chatbotSetting.title_is_active);
      if (chatbotSetting?.welcome_message_is_active !== undefined)
        setValue(
          "welcome_message_is_active",
          chatbotSetting.welcome_message_is_active
        );
      if (chatbotSetting?.suggestions_is_active !== undefined)
        setValue("suggestions_is_active", chatbotSetting.suggestions_is_active);
      if (chatbotSetting?.chat_window_bg !== undefined)
        setValue("chat_window_bg", chatbotSetting.chat_window_bg);
      if (chatbotSetting?.user_message_bg !== undefined)
        setValue("user_message_bg", chatbotSetting.user_message_bg);
      if (chatbotSetting?.message_bg !== undefined)
        setValue("message_bg", chatbotSetting.message_bg);
      if (chatbotSetting?.dots_color !== undefined)
        setValue("dots_color", chatbotSetting.dots_color);
      if (chatbotSetting?.live_message_bg !== undefined)
        setValue("live_message_bg", chatbotSetting.live_message_bg);
      if (chatbotSetting?.send_button_color !== undefined)
        setValue("send_button_color", chatbotSetting.send_button_color);
      if (chatbotSetting?.chat_icon !== undefined) {
        const chat_icon = pathToImage(chatbotSetting.chat_icon);
        chat_icon
          ? setValue("chat_icon", chat_icon)
          : setValue("chat_icon", "");
      }
      if (chatbotSetting?.image !== undefined) {
        const image = pathToImage(chatbotSetting.image);
        image ? setValue("image", image) : setValue("image", "");
      }
    }
  }, [chatbotSetting, setValue]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const action = chatbotSetting
      ? updateChatbotSettings
      : createChatbotSettings;

    if (typeof data.chat_icon === "object") {
      const chatIcon = new FormData();
      if (data.chat_icon[0]) {
        chatIcon.append("file", data.chat_icon[0]);
        await dispatch(uploadDocument({ payload: chatIcon }))
          .unwrap()
          .then((res) => {
            setValue("chat_icon", res?.url);
            data.chat_icon = res?.url;
          });
      }
    }
    if (typeof data.image === "object") {
      const image = new FormData();
      if (data.image[0]) {
        image.append("file", data.image[0]);
        await dispatch(uploadDocument({ payload: image }))
          .unwrap()
          .then((res) => {
            setValue("image", res?.url);

            data.image = res?.url;
          });
      }
    }
    console.log("form data", data);
    await dispatch(
      action({
        id: botId!,
        data: {
          bot_id: botId && parseInt(botId),
          title_value: data.title_value,
          welcome_message_value: data.welcome_message_value,
          suggestions_value: data.suggestions_value,
          placeholder_value: data.placeholder_value,
          title_is_active: data.title_is_active,
          welcome_message_is_active: data.welcome_message_is_active,
          suggestions_is_active: data.suggestions_is_active,
          placeholder_is_active: data.placeholder_is_active,
          chat_window_bg: data.chat_window_bg,
          send_button_color: data.send_button_color,
          chat_icon_color: data.chat_icon_color,
          user_message_bg: data.user_message_bg,
          dots_color: data.dots_color,
          message_bg: data.message_bg,
          live_message_bg: data.live_message_bg,
          image: data.image,
          chat_icon: data.chat_icon,
        },
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Chatbot updated successfully");
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const handleResetAppearance = (
    e: React.MouseEventHandler<HTMLButtonElement>
  ) => {
    dispatch(fetchChatbotSettings(botId!));
  };

  console.log(watch());

  return (
    <div className="w-full">
      {" "}
      <h2 className="text-2xl font-bold mt-[30]">Appearence</h2>
      <p className="text-sm font-light my-[22px]">
        You can customise the look and feel of your chatbot interface here.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <div className="space-y-2 flex-1 bg-[#9e99b6] p-[36] rounded-[20px]">
          <Field
            name="title_value"
            label="Title"
            description="To be shown on the shared website"
            type="text"
            checkbox={true}
            checkbox_value={watch("title_is_active")}
            checkbox_name={"title_is_active"}
            placeholder="Enter title"
            value={watch("title_value")}
            register={register}
          />
          <Field
            name="welcome_message_value"
            label="Welcome Message"
            description="The introductory message from the chatbot"
            type="text"
            checkbox={true}
            checkbox_value={watch("welcome_message_is_active")}
            checkbox_name={"welcome_message_is_active"}
            placeholder="Enter welcome message"
            value={watch("welcome_message_value") || "Hi, how can i help you?"}
            register={register}
          />
          <Field
            name="suggestions_value"
            label="Suggestions"
            description="Questions to be shown to user (1 suggestion per line)"
            type="textarea"
            checkbox={true}
            checkbox_value={watch("suggestions_is_active")}
            checkbox_name={"suggestions_is_active"}
            placeholder="Enter suggestions"
            value={watch("suggestions_value")}
            register={register}
          />
          <Field
            name="placeholder_value"
            label="Placeholder"
            description="To be shown in the query input"
            type="text"
            checkbox={true}
            checkbox_value={watch("placeholder_is_active")}
            checkbox_name={"placeholder_is_active"}
            placeholder="Enter placeholder"
            value={watch("placeholder_value")}
            register={register}
          />
          <div className="bg-white rounded-2xl shadow-md p-6 w-full">
            <div className="flex justify-between items-center mb-4 bg">
              <div>
                <h2 className="font-medium text-gray-900 text-base">Styling</h2>
                <p className="text-sm text-[#727272]">
                  Upload your avatar and set colors
                </p>
              </div>
            </div>
            <div className="flex m-1 gap-4">
              <div className="basis-1/2 space-y-2">
                <ImageField
                  label="Chatbot avatar"
                  name="image"
                  value={watch("image")}
                  register={register}
                />
                <ColorPickerField
                  name="message_bg"
                  label="Chat message background"
                  register={register}
                  defaultValue={watch("message_bg")}
                />{" "}
                <ColorPickerField
                  name="user_message_bg"
                  label="User chat message background"
                  defaultValue={watch("user_message_bg")}
                  register={register}
                />
                <ColorPickerField
                  name="chat_window_bg"
                  label="Chat window background"
                  defaultValue={watch("chat_window_bg")}
                  register={register}
                />{" "}
              </div>
              <div className="basis-1/2 space-y-2">
                <ImageField
                  label="Start chat icon"
                  name="chat_icon"
                  value={watch("chat_icon")}
                  register={register}
                />
                <ColorPickerField
                  name="live_message_bg"
                  label="Live chat message background"
                  defaultValue={watch("live_message_bg")}
                  register={register}
                />{" "}
                <ColorPickerField
                  name="dots_color"
                  label="Loading dots color"
                  defaultValue={watch("dots_color")}
                  register={register}
                />
                <ColorPickerField
                  name="send_button_color"
                  label="Send button color"
                  defaultValue={watch("send_button_color")}
                  register={register}
                />
              </div>
            </div>
          </div>

          <div className="mt-[23] flex gap-3">
            <button
              type="button"
              onClick={(e) => handleResetAppearance(e)}
              className="bg-[#340555] text-white px-4 py-2 text-base  font-semibold rounded-[10px]"
            >
              Reset Appearence
            </button>
            <button className="bg-[#01BEED] text-white px-4 py-2 text-base  font-semibold rounded-[10px]">
              Save Changes
            </button>
          </div>
        </div>

        <ChatbotDummy chatbotSettings={watch()} />
      </form>
    </div>
  );
};

export default ChatbotAppearence;

const Field = ({
  name,
  label,
  description,
  type,
  checkbox = false,
  checkbox_value = false,
  checkbox_name,
  placeholder,
  value,
  register,
}: FieldProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-medium text-gray-900 text-base">{label}</h2>
          <p className="text-sm text-[#727272]">{description}</p>
        </div>

        {checkbox && checkbox_name && (
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              {...register(checkbox_name)}
              checked={checkbox_value as boolean}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-[#9592AD] transition-colors duration-300"></div>
            <div className="absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
          </label>
        )}
      </div>
      {type === "text" && (
        <input
          type="text"
          placeholder={placeholder}
          {...register(name)}
          className="w-full p-3 rounded-full bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
        />
      )}
      {type === "textarea" && (
        <textarea
          cols={5}
          placeholder={placeholder}
          {...register(name)}
          className="w-full p-3 rounded-xl bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
        />
      )}
    </div>
  );
};

export const ColorPickerField = ({
  name,
  label,
  description,
  defaultValue = "#ffffff",
  className = "",
  register,
}: ColorPickerFieldProps) => {
  const [color, setColor] = useState(defaultValue);
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Sync with form state
  useEffect(() => {
    setColor(defaultValue);
  }, [defaultValue]);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    // Trigger form change event
    const event = {
      target: {
        name,
        value: newColor,
      },
    };
    register(name).onChange(event);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^#[0-9A-F]{0,6}$/i.test(value)) {
      const formattedValue =
        value.length > 0 ? `#${value.replace("#", "").slice(0, 6)}` : "";
      handleColorChange(formattedValue);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div>
        <label className="block text-sm font-medium text-gray-900">
          {label}
        </label>
        {description && (
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            type="button"
            className="w-10 h-10 rounded-md border border-gray-300 shadow-sm flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
            aria-label="Open color picker"
            onClick={() => setShowColorPicker(!showColorPicker)}
          >
            <div
              className="w-8 h-8 rounded-sm border border-gray-200"
              style={{ backgroundColor: color }}
            />
          </button>

          {showColorPicker && (
            <div className="absolute z-10 mt-2 p-3 bg-white rounded-md shadow-lg border border-gray-200">
              <div className="flex flex-col space-y-3">
                <div className="grid grid-cols-6 gap-1">
                  {[
                    "#FF0000",
                    "#00FF00",
                    "#0000FF",
                    "#FFFF00",
                    "#FF00FF",
                    "#00FFFF",
                    "#FF5733",
                    "#33FF57",
                    "#3357FF",
                    "#FF33F5",
                    "#33FFF5",
                    "#F5FF33",
                    "#FFFFFF",
                    "#CCCCCC",
                    "#999999",
                    "#666666",
                    "#333333",
                    "#000000",
                  ].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      className="w-6 h-6 rounded-sm border border-gray-200 hover:border-gray-400"
                      style={{ backgroundColor: preset }}
                      onClick={() => {
                        handleColorChange(preset);
                        setShowColorPicker(false);
                      }}
                      aria-label={`Select color ${preset}`}
                    />
                  ))}
                </div>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="w-full h-8 cursor-pointer text-black"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={color.replace("#", "")}
                    onChange={handleTextChange}
                    className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm text-black"
                    maxLength={6}
                    placeholder="#FFFFFF"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="relative flex-1">
          <input
            type="text"
            {...register(name)}
            value={color}
            onChange={handleTextChange}
            className="block w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            placeholder="#FFFFFF"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">#</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageField = ({
  name,
  label,
  description,
  value,
  register,
}: ImageFieldProps) => {
  const [preview, setPreview] = useState<string>("/dummy-avatar.png");
  useEffect(() => {
    if (value && (value instanceof File || value instanceof Blob)) {
      const imageUrl = URL.createObjectURL(value);
      setPreview(imageUrl);

      // Revoke URL on cleanup to avoid memory leaks
      return () => URL.revokeObjectURL(imageUrl);
    } else if (typeof value === "string") {
      setPreview(value);
    }
  }, [value]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div>
      <div className="relative w-24 h-24 mx-auto">
        {/* File input - hidden but clickable */}
        <input
          type="file"
          accept="image/*"
          {...register(name, {
            onChange: handleImageChange,
          })}
          className="peer absolute w-full h-full opacity-0 z-10 cursor-pointer"
        />
        {/* Image Preview */}
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Optional visual feedback on hover */}
        <div className="absolute inset-0 bg-black/10 bg-opacity-10 rounded-full opacity-0 peer-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex justify-between items-center mb-4 text-gray-700">
        <div>
          <h2 className="font-medium text-sm">{label}</h2>
          {description && (
            <p className="text-xs text-[#727272]">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
