import React, { useState, useEffect } from "react";
import {
  getPushNotificationSettings,
  addPushNotificationEmail,
  removePushNotificationEmail,
  editPushNotificationEmail,
  togglePushNotifications,
  upsertPushNotificationSettings,
} from "@/store/slices/payments/slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

const Settings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const settingsData = useSelector((state: RootState) => state.payment.data);

  const [isToggleOn, setIsToggleOn] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [savedEmails, setSavedEmails] = useState<string[]>([]);
  const [editingEmail, setEditingEmail] = useState<number | null>(null);
  const [editEmailValue, setEditEmailValue] = useState("");
  // 🔁 Fetch current settings on mount
  useEffect(() => {
    dispatch(getPushNotificationSettings());
  }, [dispatch]);

  // 🟩 Sync store data to local state
  useEffect(() => {
    if (settingsData) {
      console.log("settings data changed")
      setIsToggleOn(settingsData.toggle_push_notifications ?? false);
      if (settingsData.push_notification_admin_emails) {
        setSavedEmails(settingsData.push_notification_admin_emails);
      } else {
        setSavedEmails([]);
      }
    }
  }, [settingsData]);

  // ✅ Toggle push notifications
  const handleToggle = () => {
    // setIsToggleOn((prev) => !prev);
    dispatch(togglePushNotifications());
  };

  // ✅ Validate email format
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ Add new email
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(emailInput)) return;

    if (savedEmails.includes(emailInput)) {
      alert("Email already exists");
      return;
    }


    const action = settingsData ? dispatch(addPushNotificationEmail(emailInput)).then(() => {
      setEmailInput("");
      setSavedEmails((prev) => [...prev, emailInput]);
    }) : dispatch(upsertPushNotificationSettings({ push_notification_admin_emails: [emailInput], toggle_push_notifications: false })).then(() => {
      setEmailInput("");
      setSavedEmails((prev) => [...prev, emailInput]);
    });

  };

  // ✅ Delete email
  const handleDeleteEmail = (index: number) => {
    const emailToRemove = savedEmails[index];
    dispatch(removePushNotificationEmail(emailToRemove)).then(() => {
      setSavedEmails((prev) => prev.filter((_, i) => i !== index));
    });
  };

  // ✅ Start editing email
  const handleEditEmail = (index: number) => {
    setEditingEmail(index);
    setEditEmailValue(savedEmails[index]);
  };

  // ✅ Save edited email
  const handleSaveEdit = (index: number) => {
    if (!validateEmail(editEmailValue)) return;
    const oldEmail = savedEmails[index];

    if (savedEmails.includes(editEmailValue) && oldEmail !== editEmailValue) {
      alert("Email already exists");
      return;
    }

    dispatch(
      editPushNotificationEmail({ old_email: oldEmail, new_email: editEmailValue })
    ).then(() => {
      const updatedEmails = [...savedEmails];
      updatedEmails[index] = editEmailValue;
      setSavedEmails(updatedEmails);
      setEditingEmail(null);
      setEditEmailValue("");
    });
  };

  // ✅ Cancel editing
  const handleCancelEdit = () => {
    setEditingEmail(null);
    setEditEmailValue("");
  };

  return (
    <div className="px-[13px] py-[34px] border border-[#343B4F] rounded-[12px] bg-[#0A1330] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)]">
      {/* Header & Toggle */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base">
          Failed Payment Notifications
        </h3>

        <div className="relative inline-block w-11 align-middle select-none">
          <input
            type="checkbox"
            id="toggle1"
            className="sr-only peer"
            checked={isToggleOn}
            onChange={handleToggle}
          />
          <label
            htmlFor="toggle1"
            className={`block h-6 rounded-full cursor-pointer transition-colors duration-300 ${isToggleOn ? "bg-green-500" : "bg-gray-300"
              }`}
          >
            <div
              className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform duration-300 ${isToggleOn ? "translate-x-5" : "translate-x-0"
                }`}
            ></div>
          </label>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-[#081028] p-3 mt-3">
        <p className="text-sm font-semibold text-white my-3">
          Receive alerts when client payment methods fail and require action
        </p>
        <p className="text-white text-sm mb-3">Notification Recipients:</p>

        {/* Saved Emails List */}
        {savedEmails.length > 0 && (
          <div className="mb-4">
            {savedEmails.map((email, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#0f1a3a] p-2 rounded mb-2"
              >
                {editingEmail === index ? (
                  <>
                    <input
                      type="email"
                      value={editEmailValue}
                      onChange={(e) => setEditEmailValue(e.target.value)}
                      className="flex-1 p-1 text-sm bg-[#F0F0F0] border border-gray-600 rounded-md text-[#716B6B]"
                    />
                    <div className="flex space-x-2 ml-2">
                      <button
                        onClick={() => handleSaveEdit(index)}
                        className="text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="text-xs bg-gray-600 hover:bg-gray-700 px-2 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="text-sm">{email}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditEmail(index)}
                        className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteEmail(index)}
                        className="text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add New Email */}
      <div className="bg-[#081028] p-3">
        <form onSubmit={handleEmailSubmit}>
          <label className="font-semibold text-sm">Add email address</label>
          <div className="flex mt-3">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Add email address"
              className="flex-1 p-2 text-sm bg-[#F0F0F0] border border-gray-600 rounded-md text-[#716B6B]"
            />
            <button
              type="submit"
              disabled={!validateEmail(emailInput)}
              className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed rounded-md text-sm"
            >
              Save
            </button>
          </div>
          {emailInput && !validateEmail(emailInput) && (
            <p className="text-red-400 text-xs mt-1">
              Please enter a valid email address
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
