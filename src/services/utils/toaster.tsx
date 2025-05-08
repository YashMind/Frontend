// utils/toaster.ts
import { toast } from "react-hot-toast";

// You can customize global styles using className or custom renderers if needed
export const toasterSuccess = (
  message: string,
  time: number = 3000,
  customId?: string | number
) => {
  toast.success(message || "Process completed successfully", {
    id: customId?.toString(),
    duration: time,
    position: "top-center",
    className: "text-sm bg-green-600 text-white px-4 py-2 rounded-md shadow",
  });
};

export const toasterError = (
  message: string,
  time: number = 3000,
  customId?: string | number
) => {
  toast.error(message || "An error has been encountered", {
    id: customId?.toString(),
    duration: time,
    position: "top-center",
    className: "text-sm bg-red-600 text-white px-4 py-2 rounded-md shadow font-bold",
  });
};

export const toasterInfo = (
  message: string,
  time: number = 3000,
  customId?: string | number
) => {
  toast(message || "Here's some information", {
    id: customId?.toString(),
    duration: time,
    position: "top-center",
    className: "text-sm bg-blue-600 text-white px-4 py-2 rounded-md shadow",
  });
};

export const toasterWarning = (
  message: string,
  time: number = 3000,
  customId?: string | number
) => {
  toast(message || "Warning issued", {
    id: customId?.toString(),
    duration: time,
    position: "top-center",
    className: "text-sm bg-yellow-500 text-white px-4 py-2 rounded-md shadow",
  });
};
