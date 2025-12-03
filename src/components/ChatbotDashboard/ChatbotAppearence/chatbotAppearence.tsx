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
import {
  ColorPickerField,
  Field,
  IFormInput,
  ImageField,
  SoundUploadField,
} from "./Fields";
import LeadGenSelection from "./LeadGenSelection";
import { toasterSuccess } from "@/services/utils/toaster";

const ChatbotAppearence = ({ botId }: { botId?: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const chatbotSetting = useSelector(
    (state: RootState) => state.appearance.settings
  );
  const [initialValues, setInitialValues] = useState<IFormInput | null>(null);

  useEffect(() => {
    if (!botId) return;

    // Fetch if chatbotSetting is missing or for a different bot
    if (!chatbotSetting || chatbotSetting.bot_id != botId) {
      dispatch(fetchChatbotSettings(botId));
    }
  }, [botId, chatbotSetting, dispatch]);

  useEffect(() => {
    if (chatbotSetting) {
      // Initialize form values when chatbotSetting is fetched
      setInitialValues(chatbotSetting);
    }
  }, [chatbotSetting]);

  const { register, handleSubmit, setValue, watch, reset } =
    useForm<IFormInput>({
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

        // Branding
        chat_window_bg: chatbotSetting?.chat_window_bg || "",
        send_button_color: chatbotSetting?.send_button_color || "",
        chat_icon_color: chatbotSetting?.chat_icon_color || "",
        user_message_bg: chatbotSetting?.user_message_bg || "",
        user_message_color: chatbotSetting?.user_message_color || "",
        dots_color: chatbotSetting?.dots_color || "",
        message_bg: chatbotSetting?.message_bg || "",
        live_message_bg: chatbotSetting?.live_message_bg,
        message_color: chatbotSetting?.message_color || "",
        live_message_color: chatbotSetting?.live_message_color,
        chat_icon: chatbotSetting?.chat_icon
          ? pathToImage(chatbotSetting?.chat_icon)
          : undefined,
        image: chatbotSetting?.image
          ? pathToImage(chatbotSetting?.image)
          : undefined,
        // Lead collection
        lead_collection: chatbotSetting?.lead_collection || false,
        name_lead_gen: chatbotSetting?.name_lead_gen || "Name",
        is_name_lead_gen: chatbotSetting?.is_name_lead_gen || true,
        required_name_lead_gen: chatbotSetting?.required_name_lead_gen || false,
        mail_lead_gen: chatbotSetting?.mail_lead_gen || "Email",
        is_mail_lead_gen: chatbotSetting?.is_mail_lead_gen || false,
        required_mail_lead_gen: chatbotSetting?.required_mail_lead_gen || false,
        phone_lead_gen: chatbotSetting?.phone_lead_gen || "Phone",
        is_phone_lead_gen: chatbotSetting?.is_phone_lead_gen || false,
        required_phone_lead_gen:
          chatbotSetting?.required_phone_lead_gen || false,
        message_lead_gen: chatbotSetting?.message_lead_gen || "Message",
        is_message_lead_gen: chatbotSetting?.is_message_lead_gen || false,
        required_message_lead_gen:
          chatbotSetting?.required_message_lead_gen || false,
        submission_message_heading_lead_gen:
          chatbotSetting?.submission_message_heading_lead_gen || "Thanks",
        sumbission_message_lead_gen:
          chatbotSetting?.sumbission_message_lead_gen ||
          "Your query have been submitted.",
        submit_text_lead_gen: chatbotSetting?.submit_text_lead_gen || "Submit",
        submit_button_color_lead_gen:
          chatbotSetting?.submit_button_color_lead_gen || "#555555",

        popup_sound: chatbotSetting?.popup_sound || "",
      },
    });

  useEffect(() => {
    if (chatbotSetting) {
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
      if (chatbotSetting?.lead_collection !== undefined) {
        setValue("lead_collection", chatbotSetting.lead_collection);
      }

      if (chatbotSetting?.name_lead_gen !== undefined) {
        setValue("name_lead_gen", chatbotSetting.name_lead_gen);
      }

      setValue("is_name_lead_gen", chatbotSetting?.is_name_lead_gen ?? true);

      if (chatbotSetting?.required_name_lead_gen !== undefined) {
        setValue(
          "required_name_lead_gen",
          chatbotSetting.required_name_lead_gen
        );
      }

      if (chatbotSetting?.mail_lead_gen !== undefined) {
        setValue("mail_lead_gen", chatbotSetting.mail_lead_gen);
      }

      if (chatbotSetting?.is_mail_lead_gen !== undefined) {
        setValue("is_mail_lead_gen", chatbotSetting.is_mail_lead_gen);
      }

      if (chatbotSetting?.required_mail_lead_gen !== undefined) {
        setValue(
          "required_mail_lead_gen",
          chatbotSetting.required_mail_lead_gen
        );
      }

      if (chatbotSetting?.phone_lead_gen !== undefined) {
        setValue("phone_lead_gen", chatbotSetting.phone_lead_gen);
      }

      if (chatbotSetting?.is_phone_lead_gen !== undefined) {
        setValue("is_phone_lead_gen", chatbotSetting.is_phone_lead_gen);
      }

      if (chatbotSetting?.required_phone_lead_gen !== undefined) {
        setValue(
          "required_phone_lead_gen",
          chatbotSetting.required_phone_lead_gen
        );
      }

      if (chatbotSetting?.message_lead_gen !== undefined) {
        setValue("message_lead_gen", chatbotSetting.message_lead_gen);
      }

      if (chatbotSetting?.is_message_lead_gen !== undefined) {
        setValue("is_message_lead_gen", chatbotSetting.is_message_lead_gen);
      }

      if (chatbotSetting?.required_message_lead_gen !== undefined) {
        setValue(
          "required_message_lead_gen",
          chatbotSetting.required_message_lead_gen
        );
      }

      if (chatbotSetting?.submission_message_heading_lead_gen !== undefined) {
        setValue(
          "submission_message_heading_lead_gen",
          chatbotSetting.submission_message_heading_lead_gen
        );
      }

      if (chatbotSetting?.sumbission_message_lead_gen !== undefined) {
        setValue(
          "sumbission_message_lead_gen",
          chatbotSetting.sumbission_message_lead_gen
        );
      }

      if (chatbotSetting?.submit_text_lead_gen !== undefined) {
        setValue("submit_text_lead_gen", chatbotSetting.submit_text_lead_gen);
      }

      if (chatbotSetting?.submit_button_color_lead_gen !== undefined) {
        setValue(
          "submit_button_color_lead_gen",
          chatbotSetting.submit_button_color_lead_gen
        );
      }

      if (chatbotSetting?.popup_sound !== undefined) {
        const popup_sound = pathToImage(chatbotSetting.popup_sound);
        popup_sound
          ? setValue("popup_sound", popup_sound)
          : setValue("popup_sound", "");
      }
    }
  }, [chatbotSetting, setValue]);

  const hasChanges = () => {
    if (!initialValues) return true;

    const currentValues = watch();
    return JSON.stringify(currentValues) !== JSON.stringify(initialValues);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!hasChanges()) {
      toast.error(
        "No changes to save. Please make some changes before saving."
      );
      return;
    }
    const action = chatbotSetting
      ? updateChatbotSettings
      : createChatbotSettings;

    if (
      !data.chat_icon ||
      ((data.chat_icon as any) instanceof FileList &&
        data.chat_icon.length === 0)
    ) {
      data.chat_icon = "";
    }
    if (
      !data.image ||
      ((data.image as any) instanceof FileList && data.image.length === 0)
    ) {
      data.image = "";
    }

    if (typeof data.chat_icon === "object" && data.chat_icon) {
      const chatIcon = new FormData();
      if (data.chat_icon[0]) {
        chatIcon.append("file", data.chat_icon[0]);
      } else {
        chatIcon.append("file", data.chat_icon);
      }
      await dispatch(uploadDocument({ payload: chatIcon }))
        .unwrap()
        .then((res) => {
          setValue("chat_icon", res?.url);
          data.chat_icon = res?.url;
        });
    }

    if (typeof data.image === "object" && data.image && data.image) {
      const image = new FormData();
      image.append("file", data.image);
      await dispatch(uploadDocument({ payload: image }))
        .unwrap()
        .then((res) => {
          setValue("image", res?.url);
          data.image = res?.url;
        });
    }

    if (
      typeof data.popup_sound === "object" &&
      data.popup_sound &&
      data.popup_sound
    ) {
      const popup_sound = new FormData();
      popup_sound.append("file", data.popup_sound);
      await dispatch(uploadDocument({ payload: popup_sound }))
        .unwrap()
        .then((res) => {
          setValue("popup_sound", res?.url);
          data.popup_sound = res?.url;
        });
    }

    await dispatch(
      action({
        id: botId!,
        data: {
          bot_id: botId,
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
          user_message_color: data.user_message_color,
          dots_color: data.dots_color,
          message_bg: data.message_bg,
          message_color: data.message_color,
          live_message_bg: data.live_message_bg,
          live_message_color: data.live_message_color,
          image: typeof data.image === "string" ? data.image : undefined,
          chat_icon:
            typeof data.chat_icon === "string" ? data.chat_icon : undefined,
          lead_collection: data.lead_collection,
          name_lead_gen: data.name_lead_gen,
          is_name_lead_gen: data.is_name_lead_gen || true,
          required_name_lead_gen: data.required_name_lead_gen,
          mail_lead_gen: data.mail_lead_gen,
          is_mail_lead_gen: data.is_mail_lead_gen,
          required_mail_lead_gen: data.required_mail_lead_gen,
          phone_lead_gen: data.phone_lead_gen,
          is_phone_lead_gen: data.is_phone_lead_gen,
          required_phone_lead_gen: data.required_phone_lead_gen,
          message_lead_gen: data.message_lead_gen,
          is_message_lead_gen: data.is_message_lead_gen,
          required_message_lead_gen: data.required_message_lead_gen,
          submission_message_heading_lead_gen:
            data.submission_message_heading_lead_gen,
          sumbission_message_lead_gen: data.sumbission_message_lead_gen,
          submit_text_lead_gen: data.submit_text_lead_gen,
          submit_button_color_lead_gen: data.submit_button_color_lead_gen,
          popup_sound: data.popup_sound,
        },
      })
    )
      .unwrap()
      .then(() => {
        toasterSuccess("Chatbot updated successfully", 10000, "id");
        // toast.success("Chatbot updated successfully");
      })
      .catch((e) => {
        toast.error(e.message || "something went wrong ");
      });
  };
  useEffect(() => {
    if (chatbotSetting) {
      reset(chatbotSetting); // this updates the form fields with new data
    }
  }, [chatbotSetting, reset]);

  const handleResetAppearance = async () => {
    const settings = await dispatch(fetchChatbotSettings(botId!)).unwrap();
    reset(settings);
  };

  return (
    <div className="m-4">
      {" "}
      <h2 className="text-2xl font-bold mb-4 max-md:ml-12">
        Bot visualisation
      </h2>
      <p className="text-sm font-light my-[22px]">
        Make your chatbot match your brand — customize its look and feel here.
      </p>
      <div className="flex max-md:flex-wrap-reverse gap-2 w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:basis-3/4  "
        >
          <div className="space-y-2 flex-1 bg-[#9e99b6] p-2 rounded-xl">
            <Field
              name="title_value"
              label="Title"
              description="Displayed on the shared webpage"
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
              description="Initial greeting message from the chatbot  "
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
              description="Sample questions shown to users (separate using commas)"
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
              description="Displayed inside the query input field"
              type="text"
              checkbox={true}
              checkbox_value={watch("placeholder_is_active")}
              checkbox_name={"placeholder_is_active"}
              placeholder="Enter placeholder"
              value={watch("placeholder_value")}
              register={register}
            />
            <LeadGenSelection register={register} watch={watch} />
            <div className="bg-white rounded-2xl shadow-md p-4 w-full">
              <div className="flex justify-between items-center mb-4 bg">
                <div>
                  <h2 className="font-medium text-gray-900 text-base">
                    Style Of Bot
                  </h2>
                  <p className="text-sm text-[#727272]">
                    Upload Your Bot avatar & set color
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 h-full">
                <div className="basis-1/2 space-y-2">
                  <ImageField
                    label="Chatbot avatar"
                    name="image"
                    value={pathToImage(watch("image")) || "/images/face2.webp"}
                    register={register}
                    setValue={setValue}
                  />
                  <ColorPickerField
                    name="message_bg"
                    label="Bot message background"
                    register={register}
                    defaultValue={watch("message_bg")}
                  />{" "}
                  <ColorPickerField
                    name="message_color"
                    label="Bot message text color"
                    defaultValue={watch("message_color")}
                    register={register}
                  />{" "}
                  <ColorPickerField
                    name="user_message_bg"
                    label="User message background"
                    defaultValue={watch("user_message_bg")}
                    register={register}
                  />
                  <ColorPickerField
                    name="user_message_color"
                    label="User message text color"
                    defaultValue={watch("user_message_color")}
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
                    value={
                      pathToImage(watch("chat_icon")) || "/images/face2.webp"
                    }
                    register={register}
                    setValue={setValue}
                  />
                  {/* <ColorPickerField
                    name="live_message_bg"
                    label="Live chat message background"
                    defaultValue={watch("live_message_bg")}
                    register={register}
                  />
                  <ColorPickerField
                    name="live_message_color"
                    label="Live chat message text color"
                    defaultValue={watch("live_message_color")}
                    register={register}
                  />{" "} */}
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

            <SoundUploadField
              initialSound={watch("popup_sound") || null}
              onSoundChange={(file) => setValue("popup_sound", file as any)}
            />

            <div className="mt-[23] flex gap-3">
              <button
                type="button"
                onClick={async (e: any) => await handleResetAppearance()}
                className=" cursor-pointer bg-[#340555] text-white px-4 py-2 text-base  font-semibold rounded-[10px]"
              >
                Reset Appearence
              </button>
              <button className=" cursor-pointer bg-[#01BEED] text-white px-4 py-2 text-base  font-semibold rounded-[10px]">
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
