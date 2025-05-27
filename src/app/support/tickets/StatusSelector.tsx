import { useState } from 'react';

const statusOptions = [
    'pending',
    'in process',
    'resolved',
    'Invalid',
    'issue/bug'
];

interface StatusSelectorProps {
    currentStatus: string;
    onStatusChange: (status: string) => void;
}

const StatusSelector = ({ currentStatus, onStatusChange }: StatusSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
                {currentStatus}
            </button>

            {isOpen && (
                <div className="z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {statusOptions.map((status) => (
                            <button
                                key={status}
                                onClick={() => {
                                    onStatusChange(status);
                                    setIsOpen(false);
                                }}
                                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StatusSelector;