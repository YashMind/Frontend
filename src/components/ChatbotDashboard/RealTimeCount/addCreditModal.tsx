import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddCreditModal = ({ onClose }: { onClose: () => void }) => {
    const [amount, setAmount] = useState('');
    const router = useRouter();


    const handleAddCredit = async () => {
        if (!amount) {
            toast.error("Amount Required")
            return
        }
        router.push(`/topup/?credit=${amount}`)
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Add Credits</h2>

                <label className="block mb-2 text-sm font-medium">Amount (₹)</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800"
                    placeholder="Enter amount in rupees"
                />

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    Credits added through this option will remain valid only until your current plan expires.
                    To extend validity, consider upgrading or purchasing a new plan.
                    Please note: activating a new plan will replace any remaining credits from the current one.
                </p>

                <div className="mt-6 flex justify-end space-x-2">
                    <button
                        onClick={() => onClose()}
                        className="px-4 py-2 text-sm rounded-md bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => handleAddCredit()}
                        className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Add Credits
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCreditModal;
