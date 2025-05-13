"use client";
import HistoryBackButton from "@/components/utils/historyBackButton";
import { getMeData, updateUserProfile } from "@/store/slices/auth/authSlice";
import { uploadDocument } from "@/store/slices/chats/chatSlice";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userData: UserProfileData = useSelector(
    (state: RootState) => state.auth.userData
  );

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<UserProfileData | any>({
    ...userData,
    picture: userData.picture
      ? process.env.NEXT_PUBLIC_BACKEND_URL + userData.picture
      : null,
  });

  useEffect(() => {
    if (userData.picture) {
      setEditedData((prev: any) => {
        return {
          ...prev,
          picture: process.env.NEXT_PUBLIC_BACKEND_URL + userData.picture,
        };
      });
    }
  }, [userData]);

  useEffect(() => {
    dispatch(getMeData());
  }, []);

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
      console.error("Profile picture upload failed:", error);
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

      await dispatch(updateUserProfile({ payload }))
        .unwrap()
        .then(() => {});

      // Optional: Show success feedback
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile. Please try again.");
      // Consider keeping the form in edit mode on failure
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <HistoryBackButton />
      <div className="flex justify-between items-center mt-4 mb-6">
        <h1 className="text-2xl font-bold">User Profile</h1>
        {isEditing ? (
          <div className="space-x-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-center items-center mb-6">
          <img
            src={
              userData.picture ?? editedData.picture ?? "/images/userimg.png"
            }
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
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

            <div>
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
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">
                Role
              </label>

              <p className="mt-1 capitalize">{userData.role || "N/A"}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">
                Tokens Used
              </label>
              <p className="mt-1">
                {userData.tokenUsed?.toLocaleString() || "0"}
              </p>
            </div>

            <div className="flex items-center">
              {isEditing ? (
                <>
                  <input
                    type="checkbox"
                    name="isMFA"
                    checked={editedData.isMFA || false}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Two-Factor Authentication
                  </label>
                </>
              ) : (
                <>
                  <span
                    className={`h-3 w-3 rounded-full ${
                      userData.isMFA ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></span>
                  <label className="ml-2 block text-sm text-gray-700">
                    Two-Factor Authentication:{" "}
                    {userData.isMFA ? "Enabled" : "Disabled"}
                  </label>
                </>
              )}
            </div>

            {isEditing && (
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Security
                </h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">
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
    </div>
  );
};

export default Page;
