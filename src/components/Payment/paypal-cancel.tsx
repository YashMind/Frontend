"use client"
import { useRouter } from 'next/navigation';

export default function PayPalCancel() {
  const router = useRouter();

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Payment Cancelled</h1>
      
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="mb-4">You have cancelled the PayPal payment process.</p>
        <p>No charges have been made to your account.</p>
      </div>
      
      <button
        onClick={() => router.push('/')}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Return to Home
      </button>
    </div>
  );
}