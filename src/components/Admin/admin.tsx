"use client";
import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar/adminSidebar";
import AdminTopbar from "./AdminMain/AdminTopbar/adminTopbar";
import AdminMain from "./AdminMain/adminMain";
import UserManagement from "./UserManagement/userManagement";
import SubscriptionPlans from "./SubscriptionPlans/subscriptionPlans";
import TokenAnalytics from "./TokenAnalytics/tokenAnalytics";
import AdminUsersRoles from "./AdminUsersRoles/adminUsersRoles";
import EnterpriseClients from "./EnterpriseClients/enterpriseClients";
import ProductMonitoring from "./ProductMonitoring/productMonitoring";
import BillingSettings from "./BillingSettings/billingSettings";
import SupportComminications from "./support&communication/support&communication";
import LogsActivity from "./logs&activity/logs&activity";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getMeData } from "@/store/slices/auth/authSlice";
import { getAllUsers, getMyPermissions } from "@/store/slices/admin/adminSlice";
import { useRouter } from "next/navigation";
import { AdminAllUsers } from "@/types/adminType";

const Admin = ({ adminPage }: { adminPage: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [allUsersData, setAllUsersData] = useState<AdminAllUsers | []>([])

  const router = useRouter();
  const permissions = useSelector((state: RootState) => state.admin.myPermissions)
  const userData = useSelector((state: RootState) => state.auth.userData);

  const role = userData?.role;
  useEffect(() => {
    if (!allUsersData?.data?.length) {
      dispatch(
        getAllUsers({
          page: 1,
          limit: 10,
        })
      ).unwrap().then(res => setAllUsersData(res));;
    }
  }, [allUsersData?.data?.length]);

  useEffect(() => {
    dispatch(getMeData({ router }));
  }, [])

  useEffect(() => {

    if (role && !permissions.length) {
      dispatch(getMyPermissions());
    }
  }, [role])

  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          {/* Sidebar */}
          <AdminSidebar adminPage={adminPage} />

          <div className="dashboard-right flex-1 mr-[30px] mb-[60px]">
            <AdminTopbar allUsersData={allUsersData} />
            {adminPage === "dashboard" ? <AdminMain /> : null}
            {adminPage === "overview" ? <AdminMain /> : null}
            {adminPage === "users-management" ? <UserManagement /> : null}
            {adminPage === "subscription-plans" ? <SubscriptionPlans /> : null}
            {adminPage === "token-analytics" ? <TokenAnalytics /> : null}
            {adminPage === "users-roles" ? <AdminUsersRoles /> : null}
            {adminPage === "enterprise-clients" ? <EnterpriseClients /> : null}
            {adminPage === "product-monitoring" ? <ProductMonitoring /> : null}
            {adminPage === "billing-settings" ? <BillingSettings /> : null}
            {adminPage === "support-communication" ? (
              <SupportComminications />
            ) : null}
            {adminPage === "logs-activity" ? <LogsActivity /> : null}
            {/* popup start */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
