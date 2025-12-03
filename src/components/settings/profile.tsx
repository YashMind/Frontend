"use client";
import HistoryBackButton from "@/components/utils/historyBackButton";
import {
  changePassword,
  getMeData,
  updateUserProfile,
} from "@/store/slices/auth/authSlice";
import {
  fetchChatMessageTokens,
  getChatbots,
  uploadDocument,
} from "@/store/slices/chats/chatSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ChangePasswordModal from "./changePasswordModel";
import { pathToImage } from "@/services/utils/helpers";
import Image from "next/image";
import { getSubscriptionPlan } from "@/store/slices/admin/subscriptionPlanThunk";
import { getInvitedUsers } from "@/store/slices/invitations/invitationSlice";
import Link from "next/link";

const ProfileSettings = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const userData: any = useSelector((state: RootState) => state.auth.userData);
  const tokensData: any = useSelector((state: RootState) => state.chat.tokens);
  const { invitedUsers, pagination } = useSelector(
    (state: RootState) => state.invitations
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<UserProfileData | any>({
    ...userData,
  });
  const [planName, setPlanName] = useState("");

  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    setEditedData({ ...userData });
    if (userData.picture) {
      const picUrl = userData.picture
        ? userData.picture.startsWith("http")
          ? userData.picture
          : userData.picture.startsWith("/uploads")
          ? process.env.NEXT_PUBLIC_BACKEND_URL + userData.picture
          : null
        : null;

      setEditedData((prev: any) => {
        return {
          ...prev,
          picture: picUrl,
        };
      });
    }
  }, [userData]);

  useEffect(() => {
    dispatch(getMeData({ router }));
    dispatch(getChatbots());
    dispatch(fetchChatMessageTokens());
    dispatch(getInvitedUsers({ page: 1, pageSize: 10 }));
  }, []);

  useEffect(() => {
    if (tokensData) {
      dispatch(getSubscriptionPlan())
        .unwrap()
        .then((res) => {
          const plan = (res as any).data;
          setPlanName(plan.name);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [tokensData, dispatch]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setEditedData((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const uploadProfilePicture = async (file: File): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await dispatch(
        uploadDocument({ payload: formData })
      ).unwrap();

      if (!response.url) {
        throw new Error("Upload failed: No URL returned");
      }

      return response.url;
    } catch (error) {
      throw error; // Re-throw to handle in the calling function
    }
  };

  const handleSave = async () => {
    try {
      // Create a copy of editedData to avoid mutating state directly
      const updatedData = { ...editedData };

      // Handle profile picture upload if changed
      if (updatedData.picture && (updatedData.picture as any) instanceof File) {
        updatedData.picture = await uploadProfilePicture(
          updatedData.picture as any
        );
      }

      // Prepare payload with only editable fields (security best practice)
      const editableFields = [
        "fullName",
        "email",
        "isMFA",
        "role",
        "plan",
        "status",
        "picture",
      ];

      const payload = Object.fromEntries(
        Object.entries(updatedData).filter(([key]) =>
          editableFields.includes(key)
        )
      );

      await dispatch(updateUserProfile({ payload } as any))
        .unwrap()
        .then(() => {});

      // Optional: Show success feedback
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
      // Consider keeping the form in edit mode on failure
    }
  };

  const handlePasswordChange = (currentPass: string, newPass: string) => {
    dispatch(
      changePassword({
        data: { old_password: currentPass, new_password: newPass },
      })
    )
      .unwrap()
      .then((res) => {
        setShowChangePassword(false);
      })
      .catch((e) => {
        toast.error("Failed to change password");
      });
  };
  const profileImage = ({
    userPic,
    editedPic,
  }: {
    userPic?: string;
    editedPic?: any;
  }): string => {
    try {
      const isBrowser = typeof window !== "undefined";

      // ✅ 1. If a new image is uploaded (File/Blob)
      if (
        isBrowser &&
        editedPic &&
        typeof editedPic === "object" &&
        (editedPic.constructor.name === "File" ||
          editedPic.constructor.name === "Blob")
      ) {
        return URL.createObjectURL(editedPic);
      }

      // ✅ 2. If there's an edited image URL string
      if (typeof editedPic === "string" && editedPic.trim() !== "") {
        return editedPic;
      }

      // ✅ 3. If there's a valid userPic (from Google or backend)
      if (userPic && userPic.startsWith("http")) {
        return userPic;
      } else if (userPic && userPic.trim() !== "") {
        const safePathToImage = (path: string): any => {
          try {
            return pathToImage(path);
          } catch {
            return "/images/userimg.png";
          }
        };
        return safePathToImage(userPic);
      }

      // ✅ 4. Always return fallback
      return "/images/userimg.png";
    } catch {
      return "/images/userimg.png";
    }
  };

  return (
    <div className="p-4 h-full">
      <div className="max-w-4xl mx-auto ">
        <HistoryBackButton />
        <div className="flex justify-between items-center mt-4 mb-6 ">
          <h1 className="text-4xl font-bold text-white">User Profile</h1>
          {isEditing ? (
            <div className="space-x-2">
              <button
                onClick={handleSave}
                className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="cursor-pointer px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="cursor-pointer px-4 py-2 bg-white text-[#2a0e61] rounded hover:bg-blue-700"
            >
              Edit Profile
            </button>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <div className="flex justify-center items-center mb-6">
            <Image
              src={profileImage({
                userPic: userData.picture,
                editedPic: editedData.picture,
              })}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
              referrerPolicy="no-referrer"
              width={100}
              height={100}
            />
            {isEditing && (
              <div className="ml-4">
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      // Store the File object directly instead of converting to data URL
                      setEditedData((prev: any) => ({
                        ...prev,
                        picture: file,
                      }));

                      // Optional: Create preview URL (only for UI display)
                      const previewUrl = URL.createObjectURL(file);
                      // You might want to store this in a separate state if needed for preview
                    }
                  }}
                />
                <label
                  htmlFor="profilePicture"
                  className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  Change Photo
                </label>
                {editedData.picture !== userData.picture && (
                  <button
                    onClick={() =>
                      setEditedData((prev: any) => ({
                        ...prev,
                        picture: userData.picture,
                      }))
                    }
                    className="ml-2 text-sm text-red-600 hover:text-red-800"
                  >
                    Cancel
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Email
                </label>

                <p className="mt-1">{userData.email || "N/A"}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={editedData.fullName || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                ) : (
                  <p className="mt-1">{userData.fullName || "Not provided"}</p>
                )}
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-500">
                 Account Created
                </label>
                <p className="mt-1">{formatDate(userData.created_at)}</p>
             </div>

             <div>
                <label className="block text-sm font-medium text-gray-500">
                 Last Updated
                </label>
                <p className="mt-1">{formatDate(userData.updated_at || "")}</p>
             </div> */}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">
                  Role
                </label>

                <p className="mt-1 capitalize">{userData.role || "N/A"}</p>
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-500">
                 Tokens Used
                </label>
                <p className="mt-1">
                 {tokensData.total_tokens?.toLocaleString() || "0"}
                </p>
             </div> */}

              {isEditing && !userData.provider && (
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Security
                  </h3>
                  <button
                    onClick={() => {
                      setShowChangePassword(true);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Change Password
                  </button>
                </div>
              )}
            </div>
          </div>

          {userData.provider && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Connected via {userData.provider}{" "}
                {userData.googleId && `(ID: ${userData.googleId})`}
              </p>
            </div>
          )}
        </div>
        <div className="mt-10">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              Plan & Usage Details
            </h2>
            <Link
              href={"/#pricing"}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium shadow-lg transition"
            >
              Upgrade Plan
            </Link>
          </div>

          {tokensData && tokensData.credits ? (
            <>
              {/* PLAN OVERVIEW */}

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Plan Name */}
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Plan Summary
                  </h3>

                  {/* Plan Name */}
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">
                      Plan Name:
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {planName || "N/A"}
                    </span>
                  </div>

                  {/* Trial Status */}
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">
                      Trial Status:
                    </span>
                    <span
                      className={`font-semibold ${
                        tokensData.credits.is_trial
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}
                    >
                      {tokensData.credits.is_trial
                        ? "Active Trial"
                        : "Not a Trial Plan"}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 font-medium">
                      Start Date:
                    </span>
                    <span className="text-gray-800">
                      {new Date(
                        tokensData.credits.start_date
                      ).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-medium">
                      Expiry Date:
                    </span>
                    <span className="text-gray-800">
                      {new Date(
                        tokensData.credits.expiry_date
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Additional Limits */}

                <div className="bg-white p-6 rounded-xl border shadow-sm text-base">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Training Limits
                  </h3>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">
                      Characters Allowed:
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {tokensData.credits.chars_allowed.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 font-medium">
                      Webpages Allowed:
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {tokensData?.credits?.webpages_allowed} webpages
                    </span>
                  </div>
                </div>
              </div>

              {/* USAGE OVERVIEW */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Credits Card */}
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Credits Usage
                  </h2>

                  {/* Progress */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                    <div
                      className="h-3 rounded-full bg-indigo-600"
                      style={{
                        width: `${
                          (tokensData.credits.credits_consumed_messages /
                            tokensData.credits.credits_purchased) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-semibold">Purchased:</span>{" "}
                      {tokensData.credits.credits_purchased}
                    </p>
                    <p>
                      <span className="font-semibold">Consumed:</span>{" "}
                      {tokensData.credits.credits_consumed_messages}
                    </p>
                    <p>
                      <span className="font-semibold">Balance:</span>{" "}
                      {tokensData.credits.credit_balance}
                    </p>
                  </div>
                </div>

                {/* Message Usage */}
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Message Usage
                  </h2>

                  {/* Progress */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                    <div
                      className="h-3 rounded-full bg-blue-600"
                      style={{
                        width: `${
                          ((tokensData.total_message_consumption || 0) /
                            (tokensData.token_usage?.[0]?.message_limit || 1)) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-semibold">Limit:</span>{" "}
                      {tokensData.token_usage?.[0]?.message_limit || 0}
                    </p>
                    <p>
                      <span className="font-semibold">Consumed:</span>{" "}
                      {tokensData.total_message_consumption || 0}
                    </p>
                    <p>
                      <span className="font-semibold">Remaining:</span>
                      {(tokensData.token_usage?.[0]?.message_limit || 0) -
                        (tokensData.total_message_consumption || 0)}
                    </p>
                  </div>
                </div>

                {/* Team Strength */}
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Team Usage
                  </h2>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div
                      className="h-3 rounded-full bg-green-600 transition-all"
                      style={{
                        width: `${
                          ((pagination?.total_items || 0) /
                            (tokensData.credits.team_strength || 1)) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>

                  {/* Labels */}
                  <div className="grid grid-cols-3 gap-3 text-center text-sm">
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <p className="text-gray-500 text-xs">Allowed</p>
                      <p className="font-semibold text-gray-800">
                        {tokensData.credits.team_strength}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-2 rounded-lg">
                      <p className="text-gray-500 text-xs">Current</p>
                      <p className="font-semibold text-gray-800">
                        {pagination?.total_items}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-2 rounded-lg">
                      <p className="text-gray-500 text-xs">Available</p>
                      <p className="font-semibold text-gray-800">
                        {tokensData?.credits?.team_strength -
                          (pagination?.total_items || 0)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shared Bots */}
              <Link href="/settings/teams" className="block mt-8">
                <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Shared Bots
                  </h2>
                  <p className="text-sm text-gray-700">
                    {invitedUsers.length > 0 ? (
                      <>
                        Shared with {invitedUsers.length} user
                        {invitedUsers.length > 1 ? "s" : ""}
                        <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {invitedUsers.length}
                        </span>
                      </>
                    ) : (
                      "No shared bots"
                    )}
                  </p>
                </div>
              </Link>
            </>
          ) : (
            <div className="bg-white rounded-lg shadow p-6 border flex flex-col items-center">
              No plan or usage data available.
            </div>
          )}
        </div>
      </div>
      <ChangePasswordModal
        isOpen={showChangePassword}
        onClose={() => setShowChangePassword(false)}
        onSubmit={handlePasswordChange}
      />
    </div>
  );
};

export default ProfileSettings;
