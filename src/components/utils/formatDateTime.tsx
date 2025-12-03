import {
  formatDistanceToNowStrict,
  isAfter,
  subDays,
  addMinutes,
  parseISO,
  isValid as isValidDate,
} from "date-fns";
import { toZonedTime, format } from "date-fns-tz";

const ensureUTC = (dateStr: string): string =>
  dateStr.endsWith("Z") || dateStr.includes("+") ? dateStr : dateStr + "Z";

// Client-side timezone detection (synchronous)
const getClientTimezone = (): string => {
  if (typeof Intl !== "undefined" && Intl.DateTimeFormat) {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  return "UTC";
};

// Server-side timezone from cookie (with fallback)
export const getUserTimezone = async (): Promise<string> => {
  if (typeof window === "undefined") {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/timezone`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) throw new Error("Failed to fetch timezone");

      const { timezone } = await response.json();

      // Remove any surrounding quotes from the timezone
      const cleanedTimezone = timezone ? timezone.replace(/^"|"$/g, "") : null;
      return cleanedTimezone || process.env.TZ || "UTC";
    } catch (error) {
      return process.env.TZ || "UTC";
    }
  }

  try {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("timezone="))
      ?.split("=")[1];

    if (cookieValue) {
      // Decode and remove quotes
      const decodedValue = decodeURIComponent(cookieValue);
      return decodedValue.replace(/^"|"$/g, "");
    }

    const detectedTimezone = getClientTimezone();
    // Set cookie without quotes
    document.cookie = `timezone=${encodeURIComponent(
      detectedTimezone
    )}; path=/; max-age=31536000`;
    return detectedTimezone;
  } catch (error) {
    return "UTC";
  }
};

// Calculate offset in minutes between UTC and user's timezone
const getTimezoneOffset = (date: Date, timeZone: string): number => {
  try {
    const utcDate = new Date(date.toISOString());
    const tzDate = new Date(date.toLocaleString("en-US", { timeZone }));
    return (utcDate.getTime() - tzDate.getTime()) / (1000 * 60);
  } catch {
    return 0;
  }
};

// Synchronous formatting functions
export const formatDate = (dateString: string, timeZone: string): string => {
  try {
    const date = parseISO(ensureUTC(dateString));
    if (!isValidDate(date)) throw new Error("Invalid date");
    const zonedDate = toZonedTime(date, timeZone);
    return format(zonedDate, "MMMM d, yyyy", { timeZone });
  } catch (err) {
    console.log("formatDate error:", err);
    return "-";
  }
};

export const formatTime = (dateString: string, timeZone: string): string => {
  const date = parseISO(ensureUTC(dateString)); // parse ISO string to Date object (UTC)
  const zonedDate = toZonedTime(date, timeZone); // convert to timezone
  return format(zonedDate, "hh:mm a", { timeZone }); // format with timezone context
};

export const formatDateTimeWithTz = (
  dateString: string,
  timeZone: string
): string => {
  const utcDate = parseISO(ensureUTC(dateString));
  const zonedDate = toZonedTime(utcDate, timeZone);
  return format(zonedDate, "MMMM d, yyyy hh:mm a zzz", { timeZone });
};

export const formatDateOrTimeAgo = (
  dateString: string,
  timeZone: string,
  ago: number = 2
): string => {
  const utcDate = parseISO(ensureUTC(dateString));
  const zonedDate = toZonedTime(utcDate, timeZone);
  const twoDaysAgo = subDays(new Date(), ago);

  if (isAfter(zonedDate, twoDaysAgo)) {
    return `${formatDistanceToNowStrict(zonedDate, { addSuffix: true })}`;
  }

  const datePart = format(zonedDate, "MMMM d, yyyy", { timeZone });
  const timePart = format(zonedDate, "hh:mm a", { timeZone });
  return `${datePart} at ${timePart}`;
};
