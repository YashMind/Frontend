"use client"
import { useState } from 'react';
import UserTickets from './userTickets';
import SupportForm from './supportForm';


const SupportTicketsTabs = () => {
    const [activeTab, setActiveTab] = useState<'tickets' | 'form'>('tickets');

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-white mb-8">Support Center</h1>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                    <button
                        onClick={() => setActiveTab('tickets')}
                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${activeTab === 'tickets'
                            ? 'border-blue-300 text-blue-200'
                            : 'border-transparent text-gray-200 hover:text-gray-300 hover:border-gray-400'
                            }`}
                    >
                        My Tickets
                    </button>
                    <button
                        onClick={() => setActiveTab('form')}
                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${activeTab === 'form'
                            ? 'border-blue-300 text-blue-200'
                            : 'border-transparent text-gray-200 hover:text-gray-300 hover:border-gray-400'
                            }`}
                    >
                        New Support Request
                    </button>
                </nav>
            </div>

            {/* Tabs Content */}
            <div className="transition-all duration-300">
                {activeTab === 'tickets' ? (
                    <div className="fade-in">
                        <UserTickets />
                    </div>
                ) : (
                    <div className="fade-in">
                        <SupportForm onSuccess={() => setActiveTab('tickets')} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SupportTicketsTabs;