import React, { useState, useEffect } from 'react';
import {
  getPushNotificationSettings,
  updatePushNotificationSettings,
  patchPushNotificationSettings,
} from '@/store/slices/payments/slice';
import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();
  const settingsData = useSelector((state) => state.payment.data);

  const [isToggleOn, setIsToggleOn] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [savedEmails, setSavedEmails] = useState<string[]>([]);
  const [editingEmail, setEditingEmail] = useState<number | null>(null);
  const [editEmailValue, setEditEmailValue] = useState('');

  // 🔁 Fetch current settings on mount
  useEffect(() => {
    dispatch(getPushNotificationSettings());
  }, [dispatch]);

  // 🟩 Sync settings to state
  useEffect(() => {
    if (settingsData) {
      setIsToggleOn(settingsData.toggle_push_notifications ?? false);
      if (settingsData.push_notification_admin_email) {
        setSavedEmails([settingsData.push_notification_admin_email]);
      }
    }
  }, [settingsData]);

  const handleToggle = () => {
    const newToggleValue = !isToggleOn;
    setIsToggleOn(newToggleValue);

    const latestEmail = savedEmails[0]; // assuming one active email

    if (latestEmail) {
      dispatch(updatePushNotificationSettings({
        push_notification_admin_email: latestEmail,
        toggle_push_notifications: newToggleValue,
      }));
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim() && validateEmail(emailInput)) {
      setSavedEmails([emailInput]);
      setEmailInput('');
      dispatch(updatePushNotificationSettings({
        push_notification_admin_email: emailInput,
        toggle_push_notifications: isToggleOn,
      }));
    }
  };

  const handleDeleteEmail = (index: number) => {
    const updatedEmails = [...savedEmails];
    updatedEmails.splice(index, 1);
    setSavedEmails(updatedEmails);

    // Optionally, patch DB with empty email or fallback
    dispatch(patchPushNotificationSettings({
      push_notification_admin_email: '',
    }));
  };

  const handleEditEmail = (index: number) => {
    setEditingEmail(index);
    setEditEmailValue(savedEmails[index]);
  };

  const handleSaveEdit = (index: number) => {
    if (editEmailValue.trim() && validateEmail(editEmailValue)) {
      const updatedEmails = [...savedEmails];
      updatedEmails[index] = editEmailValue;
      setSavedEmails(updatedEmails);
      setEditingEmail(null);
      setEditEmailValue('');

      dispatch(patchPushNotificationSettings({
        push_notification_admin_email: editEmailValue,
      }));
    }
  };

  const handleCancelEdit = () => {
    setEditingEmail(null);
    setEditEmailValue('');
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  return (
    <div className="px-[13px] py-[34px] border border-[#343B4F] rounded-[12px] bg-[#0A1330] shadow-[1px_1px_1px_0px_rgba(16,25,52,0.4)]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-base ">
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

          {/* Track */}
          <label
            htmlFor="toggle1"
            className={`block h-6 rounded-full cursor-pointer transition-colors duration-300 ${isToggleOn ? 'bg-green-500' : 'bg-gray-300'
              }`}
          >
            {/* Thumb */}
            <div
              className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform duration-300 ${isToggleOn ? 'translate-x-5' : 'translate-x-0'
                }`}
            ></div>
          </label>
        </div>
      </div>


      <div className="bg-[#081028] p-3 mt-3">
        <p className="text-sm font-semibold text-white my-3">
          Receive alerts when client payment methods fail and require action
        </p>
        <p className="text-white text-sm mb-3">
          Notification Recipients:
        </p>

        {/* Display saved emails */}
        {savedEmails.length > 0 && (
          <div className="mb-4">
            {savedEmails.map((email, index) => (
              <div key={index} className="flex items-center justify-between bg-[#0f1a3a] p-2 rounded mb-2">
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

      <div className="bg-[#081028] p-3">
        <form onSubmit={handleEmailSubmit}>
          <label className="font-semibold text-sm">
            Add email address
          </label>
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
            <p className="text-red-400 text-xs mt-1">Please enter a valid email address</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;