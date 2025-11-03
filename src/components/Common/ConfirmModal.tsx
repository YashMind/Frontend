"use client";
import React from "react";

type Props = {
    open: boolean;
    title?: string;
    content?: React.ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    loading?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function ConfirmModal({ open, title, content, confirmLabel = "Confirm", cancelLabel = "Cancel", loading = false, onConfirm, onCancel }: Props) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-40" onClick={onCancel}></div>
            <div className="relative bg-white rounded shadow-lg max-w-lg w-full p-6 z-10">
                {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
                <div className="text-sm text-gray-700 mb-4">{content}</div>
                <div className="flex justify-end gap-3">
                    <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded">{cancelLabel}</button>
                    <button onClick={onConfirm} disabled={loading} className="px-4 py-2 bg-red-600 text-white rounded">
                        {loading ? "Working..." : confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
