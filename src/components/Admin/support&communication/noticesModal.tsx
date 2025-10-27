"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { toasterSuccess } from "@/services/utils/toaster";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    createNotice,
    deleteNotice,
    fetchNotices,
    updateNotice,
} from "@/store/slices/admin/noticesSlice";

interface NoticeModalProps {
    show: boolean;
    onHide: () => void;
}

const NoticeModal: React.FC<NoticeModalProps> = ({ show, onHide }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { notices, loading } = useSelector((state: RootState) => state.notice);

    const [editingNotice, setEditingNotice] = useState<any>(null);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        recipients: [] as string[],
        send_email: false,
        expires_at: null as string | null,
    });

    // 🧩 Prevent background scroll when modal is open
    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [show]);

    useEffect(() => {
        if (show) {
            dispatch(fetchNotices());
        }
    }, [show, dispatch]);

    const resetForm = () => {
        setEditingNotice(null);
        setFormData({
            title: "",
            content: "",
            recipients: [],
            send_email: false,
            expires_at: null,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload = { ...formData };

        if (editingNotice) {
            await dispatch(updateNotice({ id: editingNotice.id, payload: payload }));
            toasterSuccess("Notice updated successfully!");
        } else {
            await dispatch(createNotice(payload));
            toasterSuccess("Notice created successfully!");
        }
        resetForm();
        dispatch(fetchNotices());
    };

    const handleEdit = (notice: any) => {
        setEditingNotice(notice);
        setFormData({
            title: notice.title,
            content: notice.content,
            recipients: notice.recipients || [],
            send_email: notice.send_email,
            expires_at: notice.expires_at ? notice.expires_at : null,
        });
    };

    const handleDelete = async (id: number) => {
        await dispatch(deleteNotice(id));
        toasterSuccess("Notice deleted successfully!");
        dispatch(fetchNotices());
    };

    const handleDateChange = (date: Date | null) => {
        const isoString = date ? date.toISOString() : null;
        setFormData({ ...formData, expires_at: isoString });
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
            {/* Modal Container */}
            <div
                className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[900px] max-w-full shadow-5xl relative overflow-y-auto"
                style={{ maxHeight: "90vh" }}
            >
                <button
                    onClick={() => {
                        onHide();
                        resetForm();
                    }}
                    className="cursor-pointer absolute top-4 right-4 text-white text-2xl font-bold"
                >
                    &times;
                </button>

                <h2 className="text-xl font-semibold mb-6">
                    {editingNotice ? "Edit Notice" : "Manage Notices"}
                </h2>

                {/* ---- Add/Edit Form ---- */}
                <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                    {/* Title */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({ ...formData, title: e.target.value })
                            }
                            className="w-full px-4 py-2 rounded bg-[#162251] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter notice title"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Content</label>
                        <textarea
                            value={formData.content}
                            onChange={(e) =>
                                setFormData({ ...formData, content: e.target.value })
                            }
                            rows={4}
                            className="w-full px-4 py-2 rounded bg-[#162251] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter notice content"
                        />
                    </div>

                    {/* Email Checkbox */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="sendEmail"
                            checked={formData.send_email}
                            onChange={() =>
                                setFormData({ ...formData, send_email: !formData.send_email })
                            }
                            className="mr-2 cursor-pointer"
                        />
                        <label htmlFor="sendEmail" className="text-sm">
                            Send via email
                        </label>
                    </div>

                    {/* Expiry Date */}
                    <div>
                        <DatePicker
                            selected={formData.expires_at ? new Date(formData.expires_at) : null}
                            onChange={handleDateChange}
                            className="w-180 px-4 py-2 rounded bg-[#162251] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholderText="Select expiration date"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={resetForm}
                            className="cursor-pointer border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-black transition"
                        >
                            Clear
                        </button>
                        <button
                            type="submit"
                            className="cursor-pointer bg-[#18B91F] px-6 py-2 rounded text-white hover:bg-green-600 transition"
                        >
                            {editingNotice ? "Update" : "Add"}
                        </button>
                    </div>
                </form>

                {/* ---- Notice List ---- */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Existing Notices</h3>
                    {loading ? (
                        <p>Loading...</p>
                    ) : notices.length === 0 ? (
                        <p className="text-gray-400">No notices found.</p>
                    ) : (
                        <table className="w-full text-sm border border-gray-700 rounded overflow-hidden">
                            <thead className="bg-[#162251]">
                                <tr>
                                    <th className="p-3 text-left">Title</th>
                                    <th className="p-3 text-left">Expires</th>
                                    <th className="p-3 text-left">Email</th>
                                    <th className="p-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notices.map((n: any) => (
                                    <tr key={n.id} className="border-t border-gray-700">
                                        <td className="p-3">{n.title}</td>
                                        <td className="p-3">
                                            {n.expires_at
                                                ? new Date(n.expires_at).toLocaleDateString()
                                                : "-"}
                                        </td>
                                        <td className="p-3">{n.send_email ? "Yes" : "No"}</td>
                                        <td className="p-3 text-right space-x-2">
                                            <button
                                                onClick={() => handleEdit(n)}
                                                className="text-blue-400 hover:underline"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(n.id)}
                                                className="text-red-400 hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NoticeModal;
