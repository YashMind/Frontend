import React from "react";
import AdminComponent from "@/components/Admin/admin";
interface AdminPageProps {
    params: Promise<{ adminPage: string }>;
  }
const AdminPage = async(props: AdminPageProps) => {
  const { adminPage } = await props.params;
  return <AdminComponent adminPage={adminPage} />;
};

export default AdminPage;
