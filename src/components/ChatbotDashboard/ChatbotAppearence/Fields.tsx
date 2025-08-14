import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { IoPauseCircleOutline, IoPlayCircleOutline } from "react-icons/io5";

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
  user_message_color: string;
  dots_color: string;
  message_bg: string;
  message_color: string;
  live_message_bg: string;
  live_message_color: string;
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
  popup_sound: string;
  chat_icon_url: string; 
}

export type ImageFieldProps = {
  name: string;
  label: string;
  value?: any;
  description?: string;
  register?: any;
  setValue?:any;
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
    <div className="bg-white rounded-2xl shadow-md p-4 w-full">
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
            <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-indigo-600 transition-colors duration-300"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
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
    <div className={`space-y-1 ${className} text-gray-900`}>
      <div className="flex flex-col md:flex-row items-start  gap-2">
        <div >
          <label className="block text-sm font-medium text-gray-900 whitespace-pre-wrap">
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
        </div>
        <div className="flex gap-2">
          <div className="relative ">
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
              <div className="absolute z-30  mt-2 p-3 bg-white rounded-md shadow-lg border border-gray-200">
                <div className="flex flex-col space-y-3">
                  <div className="grid grid-cols-6 gap-1">
                    {[
                      // Primary brand/accent colors (vibrant but not overwhelming)
                      "#4F46E5",  // Indigo (great for primary actions)
                      "#10B981",  // Emerald (success/confirmation)
                      "#3B82F6",  // Blue (trust/links)
                      "#F59E0B",  // Amber (warnings)
                      "#EF4444",  // Red (errors/important)

                      // Message bubbles (softer versions)
                      "#E0E7FF",  // Light indigo (user messages)
                      "#D1FAE5",  // Light green (bot messages)
                      "#DBEAFE",  // Light blue (system messages)
                      "#FEE2E2",  // Light red (error messages)

                      // Background options
                      "#F9FAFB",  // Lightest gray (main background)
                      "#FFFFFF",  // White (card backgrounds)
                      "#F3F4F6",  // Slightly darker gray (secondary backgrounds)

                      // Text colors
                      "#111827",  // Dark gray (primary text)
                      "#374151",  // Medium gray (secondary text)
                      "#6B7280",  // Lighter gray (disabled/hints)

                      // Status/indicators
                      "#84CC16",  // Lime (active/online)
                      "#F97316",  // Orange (busy/processing)
                      "#8B5CF6",  // Violet (special status)
                      "#EC4899",  // Pink (notifications)

                      // Gradients/special effects
                      "#7C3AED",  // Purple (gradient starts)
                      "#06B6D4",  // Cyan (gradient ends)
                      "#F43F5E",  // Rose (attention grabbers)

                      // Dark mode alternatives
                      "#1F2937",   // Dark background
                      "#4B5563",   // Dark secondary
                      "#9CA3AF"    // Dark text
                    ].map((preset, index) => (
                      <button
                        key={index}
                        type="button"
                        className="w-6 h-6 rounded-sm border border-gray-200 hover:border-gray-400"
                        style={{ backgroundColor: preset }}
                        onClick={(e) => {
                          e.stopPropagation()
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
                      placeholder="FFFFFF"
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
              value={color ? color.slice(1, color.length) : "FFFFFF"}
              onChange={handleTextChange}
              className="block w-full uppercase text-base rounded-md border border-gray-300 py-2 pl-5 pr-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="FFFFFF"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {/* <span className="text-gray-500 sm:text-sm">#</span> */}
            </div>
          </div></div>
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
  setValue,
  
}: ImageFieldProps) => {
  console.log(value)
    console.log(name)
  console.log(label)
 

  const [preview, setPreview] = useState<string>("/images/face2.webp");
  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log("value",value)
    
    if (value && (value instanceof File || value instanceof Blob)) {
      const imageUrl = URL.createObjectURL(value);
      setPreview(imageUrl);

      // Revoke URL on cleanup to avoid memory leaks
      return () => URL.revokeObjectURL(imageUrl);
    } else if (typeof value === "string") {
      console.log('value as string')
      setPreview(value);

    }else {
      console.log("else")
      setPreview("/images/face2.webp"); // Default fallback
    }
  }, [value]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      
      setPreview(imageUrl);
      setValue(name, file);

      
    }
  };

  return (
    <div>
      <div className="relative w-24 h-24 mx-auto  ">
       
        {/* File input - hidden but clickable */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="peer absolute w-full h-full opacity-0 z-10 cursor-pointer image"
          key={preview}
        /> 
        
        {/* Image Preview */}
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src={preview}
            key={preview}

            alt="Preview"
            className="w-full h-full object-cover pointer-events-none"
            width={150}
            height={150}
            onError={() => setPreview("/images/face2.webp")}
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

// interface SoundUploadFieldProps {
//   initialSound?: File | string | null;
//   onSoundChange?: (file: File | null) => void;
// }

// export const SoundUploadField = ({ initialSound = null, onSoundChange }: SoundUploadFieldProps) => {
//   const [soundFile, setSoundFile] = useState<File | string | null>(initialSound);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (!files || files.length === 0) return;

//     const file = files[0];
//     if (!file.type.match('audio.*')) {
//       alert('Please select an audio file');
//       return;
//     }

//     // Simulate upload progress
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += 10;
//       setUploadProgress(progress);
//       if (progress >= 100) {
//         clearInterval(interval);
//         setSoundFile(file);
//         if (onSoundChange) onSoundChange(file);
//       }
//     }, 100);
//   };

//   const handlePlayPause = () => {
//     if (!soundFile || !audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       // Create object URL if needed
//       if (typeof soundFile === 'string') {
//         audioRef.current.src = soundFile;
//       } else {
//         audioRef.current.src = URL.createObjectURL(soundFile);
//       }
//       audioRef.current.play().catch(e => console.error('Playback failed:', e));
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleReplaceSound = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.value = ''; // Reset to allow selecting same file again
//       fileInputRef.current.click();
//     }
//   };

//   const handleRemoveSound = () => {
//     setSoundFile(null);
//     if (onSoundChange) onSoundChange(null);
//     if (isPlaying && audioRef.current) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   useEffect(() => {
//     const audio = audioRef.current;
//     const handleEnded = () => setIsPlaying(false);

//     if (audio) {
//       audio.addEventListener('ended', handleEnded);
//     }

//     return () => {
//       if (audio) {
//         audio.removeEventListener('ended', handleEnded);
//         // Clean up object URLs
//         if (audio.src.startsWith('blob:')) {
//           URL.revokeObjectURL(audio.src);
//         }
//       }
//     };
//   }, []);

//   return (
//     <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-white">
//       <audio ref={audioRef} className="hidden" />

//       <div className="flex items-center justify-between">
//         <h3 className="font-medium text-gray-700">Notification Sound</h3>
//         {soundFile && (
//           <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
//             {typeof soundFile === 'string' ? "Uploaded Sound" : soundFile.name}
//           </span>
//         )}
//       </div>

//       {uploadProgress > 0 && uploadProgress < 100 ? (
//         <div className="w-full bg-gray-200 rounded-full h-2.5">
//           <div
//             className="bg-blue-600 h-2.5 rounded-full"
//             style={{ width: `${uploadProgress}%` }}
//           ></div>
//         </div>
//       ) : soundFile ? (
//         <div className="flex items-center gap-3">
//           <button
//             type="button"
//             onClick={handlePlayPause}
//             className={`flex items-center justify-center w-10 h-10 rounded-full ${isPlaying ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
//               }`}
//             aria-label={isPlaying ? 'Pause sound' : 'Play sound'}
//           >
//             {isPlaying ? (
//               <IoPauseCircleOutline className="w-5 h-5" />
//             ) : (
//               <IoPlayCircleOutline className="w-5 h-5" />
//             )}
//           </button>

//           <div className="flex-1 min-w-0">
//             <p className="text-sm font-medium text-gray-700 truncate">
//               {typeof soundFile === 'string' ? "Custom Sound" : soundFile.name}
//             </p>
//             <p className="text-xs text-gray-500">
//               {typeof soundFile === 'string' ? "Ready" : `${(soundFile.size / 1024).toFixed(1)} KB`}
//             </p>
//           </div>

//           <div className="flex gap-2">
//             <button
//               type="button"
//               onClick={handleReplaceSound}
//               className="text-sm text-blue-600 hover:text-blue-800"
//             >
//               Replace
//             </button>
//             <button
//               type="button"
//               onClick={handleRemoveSound}
//               className="text-sm text-red-600 hover:text-red-800"
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center justify-center py-6 border-2 border-dashed border-gray-300 rounded-lg">
//           <FaUpload className="w-8 h-8 text-gray-400 mb-2" />
//           <p className="text-sm text-gray-500 mb-2">No sound selected</p>
//           <button
//             type="button"
//             onClick={() => fileInputRef.current?.click()}
//             className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
//           >
//             Add Sound
//           </button>
//         </div>
//       )}

//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleFileChange}
//         accept="audio/*"
//         className="hidden"
//       />
//     </div>
//   );
// };




interface SoundUploadFieldProps {
  initialSound?: File | string | null;
  onSoundChange?: (file: File | null) => void;
}

export const SoundUploadField = ({
  initialSound = null,
  onSoundChange
}: SoundUploadFieldProps) => {
  const [soundFile, setSoundFile] = useState<File | string | null>(initialSound);
  const [isPlaying, setIsPlaying] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!file.type.match('audio.*')) {
      alert('Please select an audio file');
      return;
    }

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setSoundFile(file);
        if (onSoundChange) onSoundChange(file);
      }
    }, 100);
  };

  const handlePlayPause = () => {
    if (!soundFile || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Handle both File objects and URL strings
      if (typeof soundFile === 'string') {
        audioRef.current.src = soundFile;
      } else {
        audioRef.current.src = URL.createObjectURL(soundFile);
      }
      audioRef.current.play().catch(e => console.error('Playback failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleReplaceSound = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleRemoveSound = () => {
    setSoundFile(null);
    if (onSoundChange) onSoundChange(null);
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);

    if (audio) {
      audio.addEventListener('ended', handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded);
        if (audio.src.startsWith('blob:')) {
          URL.revokeObjectURL(audio.src);
        }
      }
    };
  }, []);

  useEffect(() => {
    setSoundFile(initialSound)
  }, [initialSound])
  return (
    <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-white">
      <audio ref={audioRef} className="hidden" />

      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-700">Notification Sound</h3>

        {soundFile && (
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {typeof soundFile === 'string' ? "URL Sound" : soundFile.name}
          </span>
        )}
      </div>

      {uploadProgress > 0 && uploadProgress < 100 ? (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      ) : soundFile ? (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePlayPause}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${isPlaying ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
              }`}
            aria-label={isPlaying ? 'Pause sound' : 'Play sound'}
          >
            {isPlaying ? (
              <IoPauseCircleOutline className="w-5 h-5" />
            ) : (
              <IoPlayCircleOutline className="w-5 h-5" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-700 truncate">
              {typeof soundFile === 'string' ? "URL Sound" : soundFile.name}
            </p>
            <p className="text-xs text-gray-500">
              {typeof soundFile === 'string' ? "From URL" : `${(soundFile.size / 1024).toFixed(1)} KB`}
            </p>
          </div>

          <div className="flex gap-2">
            {typeof soundFile !== 'string' && (
              <button
                type="button"
                onClick={handleReplaceSound}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Replace
              </button>
            )}
            <button
              type="button"
              onClick={handleRemoveSound}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-6 border-2 border-dashed border-gray-300 rounded-lg">
          <FaUpload className="w-8 h-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500 mb-2">No sound selected</p>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
          >
            Add Sound
          </button>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="audio/*"
        className="hidden"
      />
    </div>
  );
};