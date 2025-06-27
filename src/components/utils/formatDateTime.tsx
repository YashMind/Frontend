import {
    formatDistanceToNowStrict,
    isAfter,
    subDays,
    addMinutes,
    parseISO
} from 'date-fns';
import { toZonedTime, format } from 'date-fns-tz';

// Get user's timezone (safe for server-side rendering)
export const getUserTimezone = (): string => {
    if (typeof Intl !== 'undefined' && Intl.DateTimeFormat) {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    return 'UTC'; // Fallback for server-side or unsupported environments
};

// Calculate offset in minutes between UTC and user's timezone
const getTimezoneOffset = (date: Date, timeZone: string): number => {
    try {
        const utcDate = new Date(date.toISOString());
        const tzDate = new Date(date.toLocaleString('en-US', { timeZone }));
        return (utcDate.getTime() - tzDate.getTime()) / (1000 * 60);
    } catch {
        return 0; // Fallback to UTC if calculation fails
    }
};

// Adjust UTC date to local timezone before conversion
export const formatDate = (dateString: string): string => {
    const timeZone = getUserTimezone();
    const utcDate = parseISO(dateString);

    // Adjust for timezone offset
    const offsetMinutes = getTimezoneOffset(utcDate, timeZone);
    const localDate = addMinutes(utcDate, offsetMinutes);

    const zonedDate = toZonedTime(localDate, timeZone);
    return format(zonedDate, 'MMMM d, yyyy', { timeZone });
};

export const formatTime = (dateString: string): string => {
    const timeZone = getUserTimezone();
    const utcDate = parseISO(dateString);

    // Adjust for timezone offset
    const offsetMinutes = getTimezoneOffset(utcDate, timeZone);
    const localDate = addMinutes(utcDate, offsetMinutes);

    const zonedDate = toZonedTime(localDate, timeZone);
    return format(zonedDate, 'hh:mm a', { timeZone });
};

// Additional utility to show date with timezone abbreviation
export const formatDateTimeWithTz = (dateString: string): string => {
    const timeZone = getUserTimezone();
    const utcDate = parseISO(dateString);

    const offsetMinutes = getTimezoneOffset(utcDate, timeZone);
    const localDate = addMinutes(utcDate, offsetMinutes);

    const zonedDate = toZonedTime(localDate, timeZone);
    return format(zonedDate, 'MMMM d, yyyy hh:mm a zzz', { timeZone });
};

export const formatDateOrTimeAgo = (dateString: string): string => {
    const timeZone = getUserTimezone();
    const utcDate = parseISO(dateString);

    // Calculate and apply timezone offset
    const offsetMinutes = getTimezoneOffset(utcDate, timeZone);
    const localDate = addMinutes(utcDate, offsetMinutes);

    const twoDaysAgo = subDays(new Date(), 2);

    if (isAfter(localDate, twoDaysAgo)) {
        return `${formatDistanceToNowStrict(localDate, { addSuffix: true })}`;
    } else {
        // Using date-fns-tz for consistent formatting
        const datePart = format(toZonedTime(localDate, timeZone), 'MMMM d, yyyy', { timeZone });
        const timePart = format(toZonedTime(localDate, timeZone), 'hh:mm a', { timeZone });

        return `${datePart} at ${timePart}`;
    }
};
