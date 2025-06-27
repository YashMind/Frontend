import { formatDistanceToNowStrict, isAfter, subDays } from 'date-fns';
export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: 'Asia/Calcutta',
    });
};
export const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: 'Asia/Calcutta',
    });
};

export const getUserTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
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
