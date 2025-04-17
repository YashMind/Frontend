import React from "react";
import AdminComponent from "@/components/Admin/admin";
interface ChatbotPageProps {
    params: Promise<{ adminPage: string }>;
  }
const AdminPage = async(props: ChatbotPageProps) => {
  const { adminPage } = await props.params;
  return <AdminComponent adminPage={adminPage} />;
};

export default AdminPage;
