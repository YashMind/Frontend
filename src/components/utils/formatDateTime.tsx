import { formatDistanceToNowStrict, isAfter, subDays } from 'date-fns';
import { toZonedTime, format } from 'date-fns-tz';

export const getUserTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export const formatDate = (dateString: string) => {
    const timeZone = getUserTimezone();
    const zonedDate = toZonedTime(dateString, timeZone);
    return format(zonedDate, 'MMMM d, yyyy', { timeZone });
};

export const formatTime = (dateString: string) => {
    const timeZone = getUserTimezone();
    const zonedDate = toZonedTime(dateString, timeZone);
    return format(zonedDate, 'hh:mm aaaa', { timeZone });
};

export const formatDateOrTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const twoDaysAgo = subDays(new Date(), 2);

    if (isAfter(date, twoDaysAgo)) {
        return `${formatDistanceToNowStrict(date, { addSuffix: true })}`;
    } else {
        const datePart = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: getUserTimezone(),
        });

        const timePart = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: getUserTimezone(),
        });

        return `${datePart} at ${timePart}`;
    }
};
