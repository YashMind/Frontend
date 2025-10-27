"use client";
import { fetchAnnouncements } from "@/store/slices/admin/announcementSlice";
import { fetchNotices } from "@/store/slices/admin/noticesSlice";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NoticesAndAnnouncements = () => {
    const [selectedTab, setSelectedTab] = useState<"notice" | "announcement">("notice");
    const dispatch = useDispatch<AppDispatch>();
    const { notices, loading: noticeLoading } = useSelector((state: RootState) => state.notice);
    const { data: announcements, loading: announceLoading } = useSelector(
        (state: RootState) => state.announcements
    );

    useEffect(() => {
        dispatch(fetchNotices());
        dispatch(fetchAnnouncements());
    }, [dispatch]);

    const isExpired = (expiresAt: string | null) => {
        if (!expiresAt) return false;
        return new Date(expiresAt) < new Date();
    };

    const renderCards = (items: any[], type: "notice" | "announcement") => {
        if (!items?.length) return <p className="text-gray-400 text-center">No {type}s found.</p>;
        return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {items.map((item, index) => {
                    const expired = isExpired(item.expires_at);
                    return (
                        <div
                            key={index}
                            className={`p-4 rounded-2xl border transition-all duration-200 ${expired
                                    ? "bg-red-50 border-red-400 text-red-700 hover:bg-red-100"
                                    : "bg-white border-gray-200 hover:shadow-md"
                                }`}
                        >
                            <h3
                                className={`font-semibold text-lg ${expired ? "text-red-700" : "text-gray-800"
                                    }`}
                            >
                                {item.title}
                            </h3>
                            <p
                                className={`mt-2 line-clamp-3 ${expired ? "text-red-600" : "text-gray-600"
                                    }`}
                            >
                                {item.content}
                            </p>
                            {item.expires_at && (
                                <p
                                    className={`text-xs mt-3 ${expired ? "text-red-500" : "text-gray-400"
                                        }`}
                                >
                                    Expires: {new Date(item.expires_at).toLocaleString()}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="max-w-5xl mx-auto mt-8 p-4">
            <div className="flex gap-4 border-b mb-4">
                <button
                    className={`pb-2 px-4 font-medium transition-colors ${selectedTab === "notice"
                            ? "border-b-2 border-white text-white"
                            : "text-white/70 hover:text-white"
                        }`}
                    onClick={() => setSelectedTab("notice")}
                >
                    Notices
                </button>
                <button
                    className={`pb-2 px-4 font-medium transition-colors ${selectedTab === "announcement"
                            ? "border-b-2 border-white text-white"
                            : "text-white/70 hover:text-white"
                        }`}
                    onClick={() => setSelectedTab("announcement")}
                >
                    Announcements
                </button>
            </div>

            {selectedTab === "notice"
                ? noticeLoading
                    ? <p className="text-gray-400 text-center">Loading notices...</p>
                    : renderCards(notices, "notice")
                : announceLoading
                    ? <p className="text-gray-400 text-center">Loading announcements...</p>
                    : renderCards(announcements, "announcement")}
        </div>
    );
};

export default NoticesAndAnnouncements;
