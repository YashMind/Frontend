"use client";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import React, { useEffect, useState } from "react";
import AddEditPlan from "./AddEditPlan/addEditPlan";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import DropdownActionMenu from "@/components/DropdownActionMenu";
import ConfirmDeleteModal from "@/components/DeleteConfirmationModal";
import { deleteSubscriptionsPlan, getAllSubscriptionPlans, toggleSubscriptionPlanStatus } from "@/store/slices/admin/adminSlice";

type MenuItem = {
  label: string;
  onClick: () => void;
  color?: "red" | "green" | "default" | "black" | "orange";
};

const SubscriptionPlans = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [planData, setPlanData] = useState<any>({});

  const dispatch = useDispatch<AppDispatch>();

  const { subscriptionPlansData } = useSelector(
    (state: RootState) => state.admin
  );

  useEffect(() => {
    dispatch(
      getAllSubscriptionPlans()
    );
  }, [dispatch]);

  const getMenuItems = (item: any): MenuItem[] => [
    {
      label: "View Details",
      onClick: () => alert("Edit"),
      color: "black",
    },
    {
      label: "List of Invoices",
      onClick: () => alert("List of Invoices"),
      color: "black",
    },
    {
      label: item.is_active ? "Deactivate" : "Activate",
      onClick: () => {
        dispatch(
          toggleSubscriptionPlanStatus({
            plan_id: item.id,
            is_active: !item.is_active,
          })
        );
      },
      color: item.is_active ? "red" : "green",
    },
    {
      label: "Failed Payment Retry",
      onClick: () => alert("Failed Payment Retry"),
      color: "red",
    },
  ];


  const handleDeleteClick = (item: any) => {
    setSelectedUser(item.id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedUser) {
      await dispatch(deleteSubscriptionsPlan({ plan_id: selectedUser }));
    }
  };

  return (
    <div>
      <div className="">
        <div className="bg-[#081028] text-white min-h-screen flex gap-[32px]">
          <div className="dashboard-right flex-1 mr-[30px]">
            <h2 className="text-2xl font-semibold mt-[40px]">
              Subscription Plans
            </h2>

            <div className="max-w-full overflow-x-auto min-h-screen mt-5 bg-[#0B1739] p-5 rounded">
              <div className="flex justify-between border-b border-[#1f355c]">
                <h1 className="text-white text-lg font-semibold mb-4 ">
                  All Plans
                </h1>
              </div>
              <table className="min-w-full  text-sm">
                <thead>
                  <tr className="text-left text-gray-300 ">
                    <th className="p-4 text-xs font-medium flex items-center gap-1">
                      Plan Name
                    </th>
                    <th className="p-4 text-xs font-medium">Pricing</th>
                    <th className="p-4 text-xs font-medium">Token Limits</th>
                    <th className="p-4 text-xs font-medium">Features</th>
                    <th className="p-4 text-xs font-medium">Users Active</th>
                    <th className="p-4 text-xs font-medium">Status</th>
                    <th className="p-4 text-xs font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {subscriptionPlansData.data &&
                    subscriptionPlansData?.data?.map((item: any, index) => {
                      return (
                        <tr
                          key={index}
                          className="bg-[#0A1330] hover:bg-[#1A2C56]"
                        >
                          <td className="p-4 flex items-center text-xs gap-2">
                            {item?.name}
                          </td>
                          <td className="p-4 text-[#AEB9E1] text-xs">
                            $ {item?.pricing}
                          </td>
                          <td className="p-4 text-[#AEB9E1] text-xs">
                            {item?.token_limits}
                          </td>
                          <td className="p-4 text-[#AEB9E1] text-xs">
                            {item?.features}
                          </td>
                          <td className="p-4 text-[#AEB9E1] text-xs">
                            {item?.users_active}
                          </td>
                          <td className="p-4 text-[#AEB9E1] text-xs">
                            {item?.is_active ? "Active" : "Inactive"}
                          </td>
                          <td className="p-4 relative">
                            <div className="flex gap-2 items-center">
                              <button
                                className="cursor-pointer text-gray-300 hover:text-white"
                                onClick={() => {
                                  setModalShow(true);
                                  setPlanData(item);
                                }}
                              >
                                <MdEdit size={18} />
                              </button>
                              <button
                                className="cursor-pointer text-gray-300 hover:text-white"
                                onClick={() => handleDeleteClick(item)}
                              >
                                <MdDeleteForever size={18} />
                              </button>

                              <div className="relative inline-block">
                                <button
                                  onClick={() =>
                                    setOpenMenuIndex((prev) => (prev === index ? null : index))
                                  }
                                  className="p-1 rounded-md cursor-pointer"
                                >
                                  <PiDotsThreeOutlineVertical size={20} />
                                </button>

                                <DropdownActionMenu
                                  items={getMenuItems(item)}
                                  isOpen={openMenuIndex === index}
                                  onClose={() => setOpenMenuIndex(null)}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <AddEditPlan
              show={modalShow}
              onHide={() => setModalShow(false)}
              planData={planData}
            />

          </div>
          <ConfirmDeleteModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleConfirmDelete}
            title="Delete Subscription Plan"
            message={`Are you sure to Delete the Plan ?`}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
