"use client"
import React from "react";
import AdminSidebar from "./AdminSidebar/adminSidebar";
import AdminTopbar from "./AdminMain/AdminTopbar/adminTopbar";
import AdminMain from "./AdminMain/adminMain";
import UserManagement from "./UserManagement/userManagement";
import SubscriptionPlans from "./SubscriptionPlans/subscriptionPlans";
import TokenAnalytics from "./TokenAnalytics/tokenAnalytics";
import AdminUsersRoles from "./AdminUsersRoles/adminUsersRoles";
import EnterpriseClients from "./EnterpriseClients/enterpriseClients";
const Admin = ({adminPage}:{adminPage: string}) => {
  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          {/* Sidebar */}
          <AdminSidebar adminPage={adminPage}/>

          <div className="dashboard-right flex-1 mr-[30px] mb-[60px]">
            <AdminTopbar />
            {adminPage === "dashboard" ? <AdminMain /> : null }
            {adminPage === "users-management" ? <UserManagement /> : null }
            {adminPage === "subscription-plans" ? <SubscriptionPlans /> : null }
            {adminPage === "token-analytics" ? <TokenAnalytics /> : null }
            {adminPage === "users-roles" ? <AdminUsersRoles /> : null }
            {adminPage === "enterprise-clients" ? <EnterpriseClients /> : null }
            {/* popup start */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
