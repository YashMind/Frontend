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
        .then(() => { });

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
    <div className="p-4 md:p-8 min-h-full">
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="flex items-center gap-4">
          <HistoryBackButton />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight uppercase">User Profile</h1>
            <p className="text-gray-400 mt-1">Manage your account settings and usage limits.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="flex-1 md:flex-none cursor-pointer px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 md:flex-none cursor-pointer px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold border border-white/10 transition-all"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full md:w-auto cursor-pointer px-8 py-2.5 bg-white text-indigo-900 rounded-xl font-black hover:bg-indigo-50 transition-all shadow-xl active:scale-95"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Main Profile Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] -z-10 group-hover:bg-indigo-600/20 transition-colors duration-500" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative group/avatar">
              <div className="w-32 h-32 rounded-3xl border-4 border-indigo-500/30 overflow-hidden shadow-2xl transition-transform duration-500 group-hover/avatar:scale-105">
                <Image
                  src={profileImage({
                    userPic: userData.picture,
                    editedPic: editedData.picture,
                  })}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  width={200}
                  height={200}
                />
              </div>
              {isEditing && (
                <div className="absolute -bottom-2 -right-2">
                  <input
                    type="file"
                    id="profilePicture"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setEditedData((prev: any) => ({
                          ...prev,
                          picture: file,
                        }));
                      }
                    }}
                  />
                  <label
                    htmlFor="profilePicture"
                    className="flex items-center justify-center p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl cursor-pointer shadow-lg transition-all hover:scale-110 active:scale-90"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </label>
                </div>
              )}
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full">
              <div className="space-y-1">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                <p className="text-lg font-bold text-white bg-white/5 px-4 py-2 rounded-xl border border-white/5 truncate">
                  {userData.email || "N/A"}
                </p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="fullName"
                    value={editedData.fullName || ""}
                    onChange={handleInputChange}
                    className="block w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-bold"
                    placeholder="Enter your name"
                  />
                ) : (
                  <p className="text-lg font-bold text-white px-1 tracking-wide">
                    {userData.fullName || "Not provided"}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Account Role</label>
                <div className="flex items-center gap-2">
                  <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm font-black border border-indigo-500/20 flex items-center gap-2 uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                    {userData.role || "User"}
                  </span>
                </div>
              </div>

              {isEditing && !userData.provider && (
                <div className="flex items-end">
                  <button
                    onClick={() => setShowChangePassword(true)}
                    className="text-sm font-bold text-indigo-400 hover:text-indigo-300 underline underline-offset-4 decoration-indigo-500/30 hover:decoration-indigo-500 transition-all"
                  >
                    Change Security Password
                  </button>
                </div>
              )}

              {userData.provider && (
                <div className="md:col-span-2 pt-4 border-t border-white/5">
                  <p className="text-xs text-gray-500 italic">
                    Connected via <span className="font-bold text-gray-400">{userData.provider}</span>
                    {userData.googleId && ` (ID: ${userData.googleId})`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Plan & Usage Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-b border-white/10">
            <h2 className="text-3xl font-black text-white tracking-tight uppercase">Plan & Performance</h2>
            <Link
              href={"/#pricing"}
              className="group relative overflow-hidden bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black shadow-2xl transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Upgrade Membership</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {tokensData && tokensData.credits ? (
            <div className="space-y-8 pb-10">
              {/* PLAN OVERVIEW CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-indigo-600/20 rounded-2xl border border-indigo-500/20">
                      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">Active Plan</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                      <span className="text-sm font-bold text-gray-400">PLAN NAME</span>
                      <span className="text-lg font-black text-indigo-400">{planName || "N/A"}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                      <span className="text-sm font-bold text-gray-400">STATUS</span>
                      <span className={`px-4 py-1 rounded-full text-xs font-black uppercase ${tokensData.credits.is_trial ? "bg-amber-500/20 text-amber-400 border border-amber-500/20" : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/20"
                        }`}>
                        {tokensData.credits.is_trial ? "Active Trial" : "Premium Member"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-4 rounded-2xl">
                        <span className="block text-[10px] font-black text-gray-500 uppercase mb-1">STATED</span>
                        <span className="text-sm font-bold text-white">
                          {new Date(tokensData.credits.start_date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-2xl">
                        <span className="block text-[10px] font-black text-gray-500 uppercase mb-1">RENEWAL</span>
                        <span className="text-sm font-bold text-white">
                          {new Date(tokensData.credits.expiry_date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-purple-600/20 rounded-2xl border border-purple-500/20">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">Capabilities</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl group/limit">
                      <span className="text-sm font-bold text-gray-400">CHARACTERS</span>
                      <span className="text-xl font-black text-white group-hover:text-purple-400 transition-colors">
                        {tokensData.credits.chars_allowed.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl group/limit">
                      <span className="text-sm font-bold text-gray-400">WEBPAGES</span>
                      <span className="text-xl font-black text-white group-hover:text-purple-400 transition-colors">
                        {tokensData?.credits?.webpages_allowed}
                      </span>
                    </div>
                    <div className="bg-purple-500/10 p-4 rounded-2xl border border-purple-500/10">
                      <p className="text-xs text-purple-300 italic font-medium">✨ All limits are monthly and reset on your renewal date.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STATS ANALYTICS CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Credits Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">Credit Consumption</h4>
                    <span className="text-xs font-black text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-lg">LIVE</span>
                  </div>

                  <div className="relative pt-2">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-2xl font-black text-white">
                        {Math.floor((tokensData.credits.credits_consumed_messages / tokensData.credits.credits_purchased) * 100)}%
                      </span>
                      <span className="text-xs font-bold text-gray-500">USED</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 p-0.5 border border-white/5">
                      <div
                        className="h-full rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-1000 ease-out"
                        style={{
                          width: `${Math.min(100, (tokensData.credits.credits_consumed_messages / tokensData.credits.credits_purchased) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-2 text-center">
                    <div className="bg-white/5 p-3 rounded-2xl">
                      <p className="text-[10px] font-black text-gray-500 uppercase">Balance</p>
                      <p className="text-lg font-black text-white">{tokensData.credits.credit_balance}</p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl">
                      <p className="text-[10px] font-black text-gray-500 uppercase">Limit</p>
                      <p className="text-lg font-black text-gray-400">{tokensData.credits.credits_purchased}</p>
                    </div>
                  </div>
                </div>

                {/* Message Usage Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">Message Velocity</h4>
                    <span className="text-xs font-black text-blue-400 bg-blue-400/10 px-2 py-1 rounded-lg">ACTIVE</span>
                  </div>

                  <div className="relative pt-2">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-2xl font-black text-white">
                        {Math.floor(((tokensData.total_message_consumption || 0) / (tokensData.token_usage?.[0]?.message_limit || 1)) * 100)}%
                      </span>
                      <span className="text-xs font-bold text-gray-500">UTILIZED</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 p-0.5 border border-white/5">
                      <div
                        className="h-full rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-1000 ease-out"
                        style={{
                          width: `${Math.min(100, ((tokensData.total_message_consumption || 0) / (tokensData.token_usage?.[0]?.message_limit || 1)) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-2 text-center">
                    <div className="bg-white/5 p-3 rounded-2xl">
                      <p className="text-[10px] font-black text-gray-500 uppercase">Remaining</p>
                      <p className="text-lg font-black text-white">
                        {(tokensData.token_usage?.[0]?.message_limit || 0) - (tokensData.total_message_consumption || 0)}
                      </p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl">
                      <p className="text-[10px] font-black text-gray-500 uppercase">Limit</p>
                      <p className="text-lg font-black text-gray-400">{tokensData.token_usage?.[0]?.message_limit || 0}</p>
                    </div>
                  </div>
                </div>

                {/* Team Usage Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">Team Strength</h4>
                    <span className="text-xs font-black text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg">COLLABORATION</span>
                  </div>

                  <div className="relative pt-2">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-2xl font-black text-white">
                        {pagination?.total_items || 0} / {tokensData.credits.team_strength}
                      </span>
                      <span className="text-xs font-bold text-gray-500">SEATS</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5 p-0.5 border border-white/5">
                      <div
                        className="h-full rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-1000"
                        style={{
                          width: `${Math.min(100, ((pagination?.total_items || 0) / (tokensData.credits.team_strength || 1)) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-2 text-center">
                    <div className="bg-white/5 p-3 rounded-2xl">
                      <p className="text-[10px] font-black text-gray-500 uppercase">Available</p>
                      <p className="text-lg font-black text-white">
                        {Math.max(0, tokensData?.credits?.team_strength - (pagination?.total_items || 0))}
                      </p>
                    </div>
                    <div className="bg-white/5 p-3 rounded-2xl">
                      <p className="text-[10px] font-black text-gray-500 uppercase">Shared Bots</p>
                      <p className="text-lg font-black text-white">{invitedUsers.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shared Bots Quick Nav */}
              <Link
                href="/settings/teams"
                className="block bg-gradient-to-r from-indigo-600/10 to-transparent p-6 rounded-3xl border border-indigo-500/10 hover:border-indigo-500/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-lg font-black text-white uppercase tracking-tight">Manage Shared Access</h4>
                      <p className="text-sm text-gray-400">Collaboration is the key to enterprise growth.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-6 py-2 bg-indigo-600/10 text-indigo-400 rounded-xl font-black text-sm uppercase">
                    Open Team Portal
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <div className="bg-white/5 rounded-3xl p-12 border border-white/10 text-center flex flex-col items-center gap-4 backdrop-blur-xl">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Synchronizing Cloud Data...</p>
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
