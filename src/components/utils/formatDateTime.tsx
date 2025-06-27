import { formatDistanceToNowStrict, isAfter, subDays } from 'date-fns';
export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Kolkata",
    });
};
export const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
    });
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
            timeZone: 'Asia/Kolkata',
        });

        const timePart = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Kolkata',
        });

        return `${datePart} at ${timePart}`;
    }
};
