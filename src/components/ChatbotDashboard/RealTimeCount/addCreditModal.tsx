import { fetchIsInternational } from '@/store/slices/payments/slice';
import { AppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const AddCreditModal = ({ onClose }: { onClose: () => void }) => {
    const [amount, setAmount] = useState('');
    const [credits, setCredits] = useState('');
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [isInternational, setIsInternational] = useState<boolean | undefined>(false);

    useEffect(() => {
        dispatch(fetchIsInternational())
            .unwrap()
            .then((response) => {
                setIsInternational(response.is_international);
            })
            .catch(() => {
                setIsInternational(false);
            });
    }, [dispatch]);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAmount(value);

        if (value === '') {
            setCredits('');
            return;
        }

        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
            return;
        }

        if (isInternational) {
            // For USD: 1 dollar = 100 credits (100 cents)
            setCredits((numValue * 100).toString());
        } else {
            // For INR: 1 rupee = 1 credit
            setCredits(numValue.toString());
        }
    };

    const handleCreditsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCredits(value);

        if (value === '') {
            setAmount('');
            return;
        }

        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
            return;
        }

        if (isInternational) {
            // For USD: credits are cents, so 100 credits = 1 dollar
            setAmount((numValue / 100).toString());
        } else {
            // For INR: credits = rupees
            setAmount(numValue.toString());
        }
    };

    const handleAddCredit = async () => {
        if (!amount) {
            toast.error("Amount Required");
            return;
        }

        const numAmount = parseFloat(amount);
        if (isInternational) {
            if (numAmount < 1) {
                toast.error("Minimum amount is $1");
                return;
            }
        } else {
            if (numAmount < 1) {
                toast.error("Minimum amount is ₹1");
                return;
            }
        }

        router.push(`/topup/?credit=${amount}`);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Add Credits</h2>

                <label className="block mb-2 text-sm font-medium">
                    Amount ({isInternational ? 'USD $' : '₹'})
                </label>
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800"
                    placeholder={`Enter amount in ${isInternational ? 'dollars' : 'rupees'}`}
                    min={isInternational ? "1" : "1"}
                    step={isInternational ? "0.01" : "1"}
                />

                <label className="block mb-2 text-sm font-medium mt-4">
                    Credits
                </label>
                <input
                    type="number"
                    value={credits}
                    onChange={handleCreditsChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800"
                    placeholder="Credits"
                    min="1"
                    step="1"
                />

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                    {isInternational ? (
                        <>1 USD = 100 credits (cents). Minimum amount is $1.</>
                    ) : (
                        <>1 INR = 1 credit. Minimum amount is ₹1.</>
                    )}
                    <br /><br />
                    Credits added through this option will remain valid only until your current plan expires.
                    To extend validity, consider upgrading or purchasing a new plan.
                    Balance credit should not carry forward for next month.
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