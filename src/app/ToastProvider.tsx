'use client';

import { Toaster, ToastBar, toast } from 'react-hot-toast';

export default function ToastProvider() {
    return (
        <Toaster position="top-center">
            {(t) => (
                <ToastBar toast={t}>
                    {({ icon, message }) => (
                        <div className="flex items-center justify-between w-full rounded-md ">
                            <div className="flex items-center gap-2">
                                {icon}
                                {message}
                            </div>
                            {t.type !== 'loading' && (
                                <button
                                    onClick={() => toast.dismiss(t.id)}
                                    className="text-xl font-bold ml-4 cursor-pointer"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    )}
                </ToastBar>

            )}
        </Toaster>
    );
}
