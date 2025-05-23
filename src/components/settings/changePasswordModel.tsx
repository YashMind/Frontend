import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { HiEye, HiMiniEyeSlash } from "react-icons/hi2";

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (currentPassword: string, newPassword: string) => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
}) => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validations, setValidations] = useState({
        length: false,
        uppercase: false,
        specialChar: false,
    });
    const [isMatch, setIsMatch] = useState(false);

    const [showPass, setShowPass] = useState({
        currentPassword: "password",
        newPassword: "password",
        confirmPassword: "password",
    });

    useEffect(() => {
        // Validate new password requirements
        setValidations({
            length: newPassword.length >= 8,
            uppercase: /[A-Z]/.test(newPassword),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
        });

        // Check if passwords match
        setIsMatch(newPassword === confirmPassword && newPassword !== "");
    }, [newPassword, confirmPassword]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid) {
            onSubmit(currentPassword, newPassword);
            resetForm();
        }
    };

    const resetForm = () => {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
    };

    const toggleShowHidePass = (name: string) => {
        setShowPass((prevState) => ({
            ...prevState,
            [name]: prevState[name] === "password" ? "text" : "password",
        }));
    };

    const isValid =
        validations.length &&
        validations.uppercase &&
        validations.specialChar &&
        isMatch;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Change Password</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full"
                    >
                        <FaXmark className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Current Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPass["currentPassword"]}
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    className="w-full p-2 border rounded-md relative"
                                    required
                                />
                                <span className="absolute top-2.5 right-2">
                                    {showPass["currentPassword"] === "text" ? (
                                        <button
                                            type="button"
                                            onClick={() => toggleShowHidePass("currentPassword")}
                                        >
                                            <HiEye />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => toggleShowHidePass("currentPassword")}
                                        >
                                            <HiMiniEyeSlash />
                                        </button>
                                    )}
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                New Password
                            </label>
                            <div className="relative"><input
                                type={showPass["newPassword"]}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-2 border rounded-md"
                                required
                            /><span className="absolute top-2.5 right-2">
                                    {showPass["newPassword"] === "text" ? (
                                        <button
                                            type="button"
                                            onClick={() => toggleShowHidePass("newPassword")}
                                        >
                                            <HiEye />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => toggleShowHidePass("newPassword")}
                                        >
                                            <HiMiniEyeSlash />
                                        </button>
                                    )}
                                </span></div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Confirm New Password
                            </label>
                            <div className="relative"><input
                                type={showPass["confirmPassword"]}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-2 border rounded-md"
                                required
                            /><span className="absolute top-2.5 right-2">
                                    {showPass["confirmPassword"] === "text" ? (
                                        <button
                                            type="button"
                                            onClick={() => toggleShowHidePass("confirmPassword")}
                                        >
                                            <HiEye />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => toggleShowHidePass("confirmPassword")}
                                        >
                                            <HiMiniEyeSlash />
                                        </button>
                                    )}
                                </span></div>
                        </div>

                        <div className="space-y-2 text-sm">
                            <PasswordRequirement
                                met={validations.length}
                                text="At least 8 characters"
                            />
                            <PasswordRequirement
                                met={validations.uppercase}
                                text="At least one uppercase letter"
                            />
                            <PasswordRequirement
                                met={validations.specialChar}
                                text="At least one special character"
                            />
                            <PasswordRequirement met={isMatch} text="Passwords match" />
                        </div>

                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`w-full py-2 px-4 rounded-md text-white ${isValid
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-gray-400 cursor-not-allowed"
                                }`}
                        >
                            Change Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

interface PasswordRequirementProps {
    met: boolean;
    text: string;
}

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({
    met,
    text,
}) => {
    return (
        <div className="flex items-center space-x-2">
            <FaCheckCircle
                className={`h-5 w-5 ${met ? "text-green-500" : "text-gray-300"}`}
            />
            <span className={met ? "text-gray-700" : "text-gray-400"}>{text}</span>
        </div>
    );
};

export default ChangePasswordModal;
