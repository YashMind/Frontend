import Image from "next/image";
import { useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IFormInput {
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
  lead_collection: boolean;
  name_lead_gen: string;
  is_name_lead_gen: boolean;
  required_name_lead_gen: boolean;
  mail_lead_gen: string;
  is_mail_lead_gen: boolean;
  required_mail_lead_gen: boolean;
  phone_lead_gen: string;
  is_phone_lead_gen: boolean;
  required_phone_lead_gen: boolean;
  message_lead_gen: string;
  is_message_lead_gen: boolean;
  required_message_lead_gen: boolean;
  submit_text_lead_gen: string;
  submit_button_color_lead_gen: string;
  submission_message_heading_lead_gen: string;
  sumbission_message_lead_gen: string;
}

export type ImageFieldProps = {
  name: string;
  label: string;
  value?: string;
  description?: string;
  register?: any;
};

export type FieldProps = {
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

export type ColorPickerFieldProps = {
  name: any;
  label: string;
  description?: string;
  defaultValue?: string;
  className?: string;
  register: UseFormRegister<IFormInput>;
};

export const Field = ({
  name,
  label,
  description,
  type,
  checkbox = false,
  checkbox_value = false,
  checkbox_name,
  placeholder,
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
    <div className={`space-y-2 ${className} text-gray-900`}>
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

export const ImageField = ({
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
          className="peer absolute w-full h-full opacity-0 z-10 cursor-pointer "
        />
        {/* Image Preview */}
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover pointer-events-none"
            width={150}
            height={150}
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
