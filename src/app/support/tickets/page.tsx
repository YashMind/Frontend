"use client"
import { useState } from 'react';
import AdminTickets from './AdminTickets';
import TicketDetail from './TicketDetail';

const AdminDashboard = () => {
    const [selectedTicketId, setSelectedTicketId] = useState<number | null>(null);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Support Ticket Dashboard</h1>
            <p className="text-gray-600 mb-8">Manage and resolve customer support tickets</p>

            {!selectedTicketId ? (
                <AdminTickets onSelectTicket={setSelectedTicketId} />
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