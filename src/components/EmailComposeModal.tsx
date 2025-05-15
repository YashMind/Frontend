"use client";
import React, { useEffect, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toasterSuccess } from "@/services/utils/toaster";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface EmailComposeModalProps {
    show: boolean;
    onHide: () => void;
    modalTitle: string;
    modalType: "email" | "announcement" | "notice" | "ticket";
}

interface FormValues {
    title: string;
    description: string;
    recipients?: string[];
}

const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    recipients: yup.array()
        .of(yup.string().email("Invalid email format"))
        .when('$modalType', {
            is: (val: string) => val === 'email' || val === 'notice',
            then: (schema) =>
                schema.min(0, "Invalid recipients"),
            otherwise: (schema) => schema.notRequired(),
        }),

});


const EmailComposeModal = ({
    show,
    onHide,
    modalTitle,
    modalType,
}: EmailComposeModalProps) => {
    const allUsersData = useSelector((state: RootState) => state.admin.allUsersData?.data ?? []);
    console.log(allUsersData)
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema) as Resolver<FormValues>,
        context: { modalType },
    });

    const [expiresAt, setExpiresAt] = useState<Date | null>(null);
    const [sendEmail, setSendEmail] = useState<boolean>(false);


    useEffect(() => {
        if (!show) {
            reset();
            setSendEmail(false);
            setExpiresAt(null);
        }
    }, [show, reset])

    useEffect(() => {
        if (show && modalType === "email" && allUsersData && allUsersData?.length > 0) {
            const defaultRecipients = allUsersData.map((user: any) => user.email);
            reset({ recipients: defaultRecipients });
        }
    }, [show, modalType, allUsersData, reset]);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        let endpoint = "";
        let payload: Record<string, any> = {};
        let successMessage = "";

        switch (modalType) {
            case "email":
                endpoint = `${process.env.NEXT_PUBLIC_API_URL}/admin/send-emails`;
                payload = {
                    title: data.title,
                    description: data.description,
                    recipients: data.recipients,
                };
                successMessage = "Email sent successfully!";
                break;

            case "announcement":
                endpoint = `${process.env.NEXT_PUBLIC_API_URL}/admin/announcements`;
                payload = {
                    title: data.title,
                    content: data.description,
                };
                successMessage = "Announcement created successfully!";
                break;

            case "notice":
                endpoint = `${process.env.NEXT_PUBLIC_API_URL}/admin/notices`;
                payload = {
                    title: data.title,
                    content: data.description,
                    recipients: data.recipients || [],
                    send_email: sendEmail,
                    expires_at: expiresAt?.toISOString() || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
                };
                successMessage = "Notice created successfully!";
                break;

            default:
                console.warn("Unknown modal type");
                return;
        }

        try {
            await axios.post(endpoint, payload);
            toasterSuccess(successMessage, 2000, "id");
            reset();
            onHide();
        } catch (error: any) {
            console.error(`Error submitting ${modalType}:`, error.response?.data || error.message);
        }
    };


    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-50">
            <div className="bg-[#0E1A47] text-white rounded-2xl p-10 w-[800px] max-w-full shadow-5xl relative">
                <button
                    onClick={onHide}
                    className="cursor-pointer absolute top-4 right-4 text-white text-2xl font-bold"
                >
                    &times;
                </button>

                <h2 className="text-xl font-semibold mb-4">{modalTitle}</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {(modalType === "email" ||
                        modalType === "announcement" ||
                        modalType === "notice") && (
                            <>
                                {modalType === "notice" && (
                                    <div className="flex items-center mb-4">
                                        <input
                                            type="checkbox"
                                            id="sendEmail"
                                            checked={sendEmail}
                                            onChange={() => setSendEmail(!sendEmail)}
                                            className="mr-2 cursor-pointer"
                                        />
                                        <label htmlFor="sendEmail" className="text-sm">
                                            Send this notice via email
                                        </label>
                                    </div>
                                )}
                                {((modalType === "notice" && sendEmail) || modalType === "email") && (
                                    <div>
                                        <label className="block mb-1 text-sm font-medium">Recipients</label>
                                        <Select
                                            isMulti
                                            className="text-black cursor-pointer"
                                            classNamePrefix="select"
                                            options={allUsersData.map((user) => ({
                                                value: user.email,
                                                label: `${user.fullName} (${user.email})`,
                                            }))}
                                            value={allUsersData
                                                .map((user) => ({
                                                    value: user.email,
                                                    label: `${user.fullName} (${user.email})`,
                                                }))
                                                .filter((opt: any) => (watch("recipients") || []).includes(opt.value))}
                                            onChange={(selected: any) => {
                                                setValue(
                                                    "recipients",
                                                    selected.map((s: any) => s.value)
                                                );
                                            }}
                                            styles={{
                                                multiValueRemove: (base) => ({
                                                    ...base,
                                                    cursor: "pointer",
                                                }),
                                            }}
                                        />
                                        {errors.recipients && (
                                            <p className="text-red-400 text-sm mt-1">
                                                {errors.recipients.message}
                                            </p>
                                        )}
                                    </div>
                                )}


                                <div>
                                    <label className="block mb-1 text-sm font-medium">Title</label>
                                    <input
                                        type="text"
                                        {...register("title")}
                                        className="w-full px-4 py-2 rounded bg-[#162251] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder={`Enter ${modalType} title`}
                                    />
                                    {errors.title && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.title.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block mb-1 text-sm font-medium">
                                        Description
                                    </label>
                                    <textarea
                                        {...register("description")}
                                        rows={5}
                                        className="w-full px-4 py-2 rounded bg-[#162251] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder={`Enter ${modalType} description`}
                                    />
                                    {errors.description && (
                                        <p className="text-red-400 text-sm mt-1">
                                            {errors.description.message}
                                        </p>
                                    )}
                                </div>
                                {modalType === "notice" && (<div>
                                    <DatePicker
                                        selected={expiresAt}
                                        onChange={(date) => setExpiresAt(date)}
                                        className="w-180 px-4 py-2 rounded bg-[#162251] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholderText="Select expiration date"
                                    />
                                </div>
                                )}
                            </>
                        )}
                    <hr className="border-gray-600 my-6" />

                    <div className="flex justify-start gap-4 mt-6">
                        <button
                            type="button"
                            onClick={onHide}
                            className="cursor-pointer border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
                        >
                            Exit
                        </button>
                        <button
                            type="submit"
                            className="cursor-pointer bg-[#18B91F] px-6 py-2 rounded text-white hover:bg-green-600 transition"
                        >
                            {modalType === "announcement" ? "Create Announcement" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmailComposeModal;
