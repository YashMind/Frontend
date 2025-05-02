import React, { useEffect, useState } from "react";
import ChatbotDummy from "./chatbotDummy";
import { useDispatch, useSelector } from "react-redux";
import {
  createChatbotSettings,
  fetchChatbotSettings,
  updateChatbotSettings,
} from "@/store/slices/chats/appearanceSettings";
import { AppDispatch, RootState } from "@/store/store";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { uploadDocument } from "@/store/slices/chats/chatSlice";
import { pathToImage } from "@/services/utils/helpers";
import { ColorPickerField, Field, IFormInput, ImageField } from "./Fields";
import LeadGenSelection from "./LeadGenSelection";

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
      lead_collection: chatbotSetting?.lead_collection || false,
      name_lead_gen: chatbotSetting?.name_lead_gen || "Name",
      is_name_lead_gen: chatbotSetting?.is_name_lead_gen || false,
      required_name_lead_gen: chatbotSetting?.required_name_lead_gen || false,
      mail_lead_gen: chatbotSetting?.mail_lead_gen || "Email",
      is_mail_lead_gen: chatbotSetting?.is_mail_lead_gen || false,
      required_mail_lead_gen: chatbotSetting?.required_mail_lead_gen || false,
      phone_lead_gen: chatbotSetting?.phone_lead_gen || "Phone",
      is_phone_lead_gen: chatbotSetting?.is_phone_lead_gen || false,
      required_phone_lead_gen: chatbotSetting?.required_phone_lead_gen || false,
      message_lead_gen: chatbotSetting?.message_lead_gen || "Message",
      is_message_lead_gen: chatbotSetting?.is_message_lead_gen || false,
      required_message_lead_gen:
        chatbotSetting?.required_message_lead_gen || false,
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

  return (
    <div className="w-full">
      {" "}
      <h2 className="text-2xl font-bold mt-[30]">Appearence</h2>
      <p className="text-sm font-light my-[22px]">
        You can customise the look and feel of your chatbot interface here.
      </p>
      <div className="flex gap-2 w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="basis-3/4 ">
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
              value={
                watch("welcome_message_value") || "Hi, how can i help you?"
              }
              register={register}
            />
            <Field
              name="suggestions_value"
              label="Suggestions"
              description="Questions to be shown to user (use , for sepration)"
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
            <LeadGenSelection register={register} watch={watch} />
            <div className="bg-white rounded-2xl shadow-md p-6 w-full">
              <div className="flex justify-between items-center mb-4 bg">
                <div>
                  <h2 className="font-medium text-gray-900 text-base">
                    Styling
                  </h2>
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
        </form>
        <ChatbotDummy chatbotSettings={watch()} />
      </div>
    </div>
  );
};

export default ChatbotAppearence;
