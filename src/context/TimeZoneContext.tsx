'use client';

import { getUserTimezone } from '@/components/utils/formatDateTime';
import { createContext, useContext, useEffect, useState } from 'react';

type TimezoneContextType = {
    timezone: string;
    isLoading: boolean;
};

const TimezoneContext = createContext<TimezoneContextType>({
    timezone: 'UTC',
    isLoading: true,
});

export function TimezoneProvider({ children }: { children: React.ReactNode }) {
    const [timezone, setTimezone] = useState('UTC');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTimezone = async () => {
            try {
                const tz = await getUserTimezone();
                setTimezone(tz);
            } catch (error) {
                console.error('Failed to load timezone:', error);
                setTimezone('UTC');
            } finally {
                setIsLoading(false);
            }
        };

        fetchTimezone();
    }, []);

    return (
        <TimezoneContext.Provider value={{ timezone, isLoading }}>
            {children}
        </TimezoneContext.Provider>
    );
}

export function useTimezone() {
    return useContext(TimezoneContext);
}