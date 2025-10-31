"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toasterSuccess } from "@/services/utils/toaster";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { addAnnouncement, deleteAnnouncement, fetchAnnouncements, updateAnnouncement } from "@/store/slices/admin/announcementSlice";

interface AnnouncementModalProps {
    show: boolean;
    onHide: () => void;
}

interface Announcement {
    id: number;
    title: string;
    content: string;
    created_at?: string;
}

interface FormValues {
    title: string;
    content: string;
}

const AnnouncementModal = ({ show, onHide }: AnnouncementModalProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: announcements, loading, error } = useSelector(
        (state: RootState) => state.announcements
    );
    const [editingId, setEditingId] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    // Fetch announcements when modal opens
    useEffect(() => {
        if (show) {
            dispatch(fetchAnnouncements());
        }
    }, [show, dispatch]);

    // Submit handler
    const onSubmit = async (formData: FormValues) => {
        try {
            if (editingId) {
                await dispatch(
                    updateAnnouncement({
                        id: editingId,
                        title: formData.title,
                        content: formData.content,
                    })
                ).unwrap();
                toasterSuccess("Announcement updated successfully!", 5000, "id");
            } else {
                await dispatch(
                    addAnnouncement({
                        title: formData.title,
                        content: formData.content,
                    })
                ).unwrap();
                toasterSuccess("Announcement created successfully!", 5000, "id");
            }
            reset();
            setEditingId(null);
        } catch (error: any) {
            console.log("Error submitting announcement:", error);
        }
    };

    // Delete handler
    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this announcement?")) return;
        try {
            await dispatch(deleteAnnouncement(id)).unwrap();
            toasterSuccess("Announcement deleted successfully!", 4000, "id");
        } catch (error: any) {
            console.log("Error deleting announcement:", error);
        }
    };

    // Edit handler
    const handleEdit = (announcement: Announcement) => {
        setEditingId(announcement.id);
        reset({ title: announcement.title, content: announcement.content });
    };

    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
            <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[900px] max-w-full shadow-5xl relative overflow-y-auto max-h-[90vh]">
                <button
                    onClick={() => {
                        onHide();
                        reset();
                        setEditingId(null);
                    }}
                    className="cursor-pointer absolute top-4 right-4 text-white text-2xl font-bold"
                >
                    &times;
                </button>

                <h2 className="text-xl font-semibold mb-6">
                    {editingId ? "Edit Announcement" : "Manage Announcements"}
                </h2>

                {/* Add / Edit form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-8">
                    <div>
                        <label className="block mb-1 text-sm font-medium">Title</label>
                        <input
                            type="text"
                            {...register("title", { required: "Title is required" })}
                            className="w-full px-4 py-2 rounded bg-[#162251] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter announcement title"
                        />
                        {errors.title && (
                            <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">Content</label>
                        <textarea
                            {...register("content", { required: "Content is required" })}
                            rows={4}
                            className="w-full px-4 py-2 rounded bg-[#162251] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter announcement content"
                        />
                        {errors.content && (
                            <p className="text-red-400 text-sm mt-1">{errors.content.message}</p>
                        )}
                    </div>

                    <div className="flex gap-4 mt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="cursor-pointer bg-[#18B91F] px-6 py-2 rounded text-white hover:bg-green-600 transition"
                        >
                            {editingId ? "Update" : "Add Announcement"}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                onClick={() => {
                                    reset();
                                    setEditingId(null);
                                }}
                                className="cursor-pointer border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
                            >
                                Cancel Edit
                            </button>
                        )}
                    </div>
                </form>

                <hr className="border-gray-600 my-4" />

                {/* Announcements list */}
                <h3 className="text-lg font-semibold mb-4">Current Announcements</h3>
                {announcements.length === 0 ? (
                    <p className="text-gray-400 text-sm">No announcements available.</p>
                ) : (
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                        {announcements.map((announcement) => (
                            <div
                                key={announcement.id}
                                className="bg-[#162251] p-4 rounded border border-gray-600 flex justify-between items-start"
                            >
                                <div>
                                    <h4 className="text-md font-semibold">{announcement.title}</h4>
                                    <p className="text-gray-300 text-sm mt-1">{announcement.content}</p>
                                    {announcement.created_at && (
                                        <p className="text-xs text-gray-400 mt-2">
                                            {new Date(announcement.created_at).toLocaleString()}
                                        </p>
                                    )}
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleEdit(announcement)}
                                        className="text-blue-400 hover:text-blue-300 text-sm"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(announcement.id)}
                                        className="text-red-400 hover:text-red-300 text-sm"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnnouncementModal;
