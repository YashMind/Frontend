"use client"
import React from "react";
import AdminSidebar from "./AdminSidebar/adminSidebar";
import AdminTopbar from "./AdminMain/AdminTopbar/adminTopbar";
import AdminMain from "./AdminMain/adminMain";
const Admin = ({adminPage}:{adminPage: string}) => {
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          {/* Sidebar */}
          <AdminSidebar adminPage={adminPage}/>

          <div className="dashboard-right flex-1 mr-[30px] mb-[60px]">
            <AdminTopbar />
            <AdminMain />

            {/* popup start */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
