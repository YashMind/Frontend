"use client"
import { useState } from 'react';
import AdminTickets from './AdminTickets';
import TicketDetail from './TicketDetail';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState<'tickets' | 'settings'>('tickets');
    const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Support Ticket Dashboard</h1>

            {!selectedTicketId ? (
                <>
                    <div className="border-b border-gray-200 mb-6">
                        <nav className="flex space-x-8">
                            <button
                                onClick={() => setActiveTab('tickets')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${activeTab === 'tickets'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                All Tickets
                            </button>
                        </nav>
                    </div>

                    <div className="transition-all duration-300">
                        {activeTab === 'tickets' ? (
                            <AdminTickets onSelectTicket={setSelectedTicketId} />
                        ) : (
                            <div className="bg-white shadow sm:rounded-lg p-6">
                                <h2 className="text-xl font-semibold mb-4">Admin Settings</h2>
                                {/* Add settings content here */}
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <TicketDetail
                    ticketId={selectedTicketId}
                    onClose={() => setSelectedTicketId(null)}
                />
            )}
        </div>
    );
};

export default AdminDashboard;