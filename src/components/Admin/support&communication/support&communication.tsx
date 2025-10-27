"use client";
import EmailComposeModal from "@/components/EmailComposeModal";
import Link from "next/link";
import React, { useState } from "react";
import AnnouncementModal from "./announcementModal";
import NoticeModal from "./noticesModal";

const SupportCard = ({
  title,
  description,
  buttonText,
  href,
  onClick,
}: {
  title: string;
  description: string;
  buttonText: string;
  href?: string;
  onClick?: () => void;
}) => (
  <div className="bg-[#0B1739] py-[23px] px-[11px] rounded-[5px] flex justify-between items-start text-white mb-[27px]">
    <div>
      <h3 className="text-xl font-bold mb-[10px] text-white">{title}</h3>
      <p className="text-base text-white font-medium w-[573px]">
        {description}
      </p>
    </div>
    {!!onClick && <button
      onClick={onClick}
      className="cursor-pointer bg-[#18B91F] hover:bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-md mt-1 md:mt-0"
    >
      {buttonText}
    </button>}

    {href && <Link
      href={href}
      className="cursor-pointer bg-[#18B91F] hover:bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-md mt-1 md:mt-0"
    >
      {buttonText}
    </Link>}
  </div>
);

const SupportCommunications = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalType, setModalType] = useState<"email" | "announcement" | "notice" | "ticket">("email");

  const handleOpenModal = (
    title: string,
    type: "email" | "announcement" | "notice" | "ticket"
  ) => {
    setModalTitle(title);
    setModalType(type);
    setModalShow(true);
  };

  return (
    <div>
      <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
        <div className="dashboard-right flex-1 mr-[30px]">
          <div className="min-h-screen p-6 text-white font-sans space-y-10">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                {modalType}
                Support & Communication
              </h2>

              <SupportCard
                title="View & Respond to Support Tickets"
                description="Manage all customer support requests, respond to queries, and track resolution status."
                buttonText="Open Ticket Center"
                href="/support/tickets"
              />

              <SupportCard
                title="Post Announcements"
                description="Create and publish important announcements to keep your users informed."
                buttonText="Create Announcement"
                onClick={() => handleOpenModal("Create Announcement", "announcement")}
              />

              <SupportCard
                title="Maintenance Notices"
                description="Schedule and notify users about upcoming maintenance windows and service updates."
                buttonText="Manage Notice"
                onClick={() => handleOpenModal("Manage Notice", "notice")}
              />

              <SupportCard
                title="Email Broadcast Tool"
                description="Send emails to all users or specific user groups with important updates or marketing messages."
                buttonText="Compose Email"
                onClick={() => handleOpenModal("Compose Email", "email")}
              />
            </section>
          </div>
          {modalType == "announcement" && <AnnouncementModal onHide={() => setModalShow(false)} show={modalShow} />}
          {modalType == "notice" && <NoticeModal onHide={() => setModalShow(false)} show={modalShow} />}
          {!['announcement', 'notice'].includes(modalType) && <EmailComposeModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            modalTitle={modalTitle}
            modalType={modalType}
          />}
        </div>
      </div>
    </div>
  );
};

export default SupportCommunications;
