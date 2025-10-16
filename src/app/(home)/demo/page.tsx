"use client";

import React from "react";
import { motion } from "framer-motion";

const demoSections = [
    {
        title: "Dashboard Overview",
        videos: [
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                desc: 'video desc'
            }, {
                url: "https://www.youtube.com/embed/tgbNymZ7vqY",
                desc: 'video desc'
            }


        ],
    },
    {
        title: "Reports & Analytics",
        videos: [
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                desc: 'video desc'
            }, {
                url: "https://www.youtube.com/embed/tgbNymZ7vqY",
                desc: 'video desc'
            }

        ],
    },
    {
        title: "User Management",
        videos: [
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                desc: 'video desc'
            }, {
                url: "https://www.youtube.com/embed/tgbNymZ7vqY",
                desc: 'video desc'
            }

        ],
    },
];

export default function DemoVideosPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b p-8 mt-16">

            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-8 text-center">
                    Demo Videos
                </h1>

                {demoSections.map((section, i) => (
                    <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                            {section.title}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.videos.map((link, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
                                >
                                    <div className="aspect-video">
                                        <iframe
                                            src={link.url}
                                            title={`Demo video ${idx + 1}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="p-3 text-center text-sm text-gray-800 border-t">
                                        {link.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
