"use client"
import StatusBadge from '@/components/utils/statusBadge';
import { useTimezone } from '@/context/TimeZoneContext';
import { fetchAllTickets } from '@/store/slices/supportTicket/slice';
import { AppDispatch, RootState } from '@/store/store';
import { SupportTicket } from '@/types/supportTickets';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface AdminTicketsProps {
    onSelectTicket: (id: number) => void;
}

// Define the tab structure - use the actual status values from SupportTicket
type TicketTab = 'all' | SupportTicket['status'];

const AdminTickets = ({ onSelectTicket }: AdminTicketsProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading } = useTimezone();
    const { tickets, loading, error } = useSelector((state: RootState) => state.tickets);

    const [activeTab, setActiveTab] = useState<TicketTab>('issue/bug');
    const [filteredTickets, setFilteredTickets] = useState<SupportTicket[]>([]);

    // Define tabs with labels and counts - match the actual status values
    const tabs: { id: TicketTab; label: string; description: string }[] = [
        { id: 'all', label: 'All Tickets', description: 'View all support tickets' },
        { id: 'issue/bug', label: 'Bug Reports', description: 'Issues and bug reports' },
        { id: 'pending', label: 'Pending', description: 'Tickets awaiting response' },
        { id: 'in process', label: 'In Progress', description: 'Currently being worked on' },
        { id: 'resolved', label: 'Resolved', description: 'Successfully resolved tickets' },
        { id: 'Invalid', label: 'Invalid', description: 'Closed and invalid tickets' },
    ];

    useEffect(() => {
        dispatch(fetchAllTickets());
    }, [dispatch]);

    // Filter tickets based on active tab
    useEffect(() => {
        if (tickets.length > 0) {
            if (activeTab === 'all') {
                setFilteredTickets(tickets);
            } else {
                setFilteredTickets(tickets.filter(ticket => ticket.status === activeTab));
            }
        } else {
            setFilteredTickets([]);
        }
    }, [tickets, activeTab]);

    const getAssignee = (ticket: SupportTicket) => {
        return ticket.handled_by || 'Unassigned';
    };

    // Get count for each tab
    const getTabCount = (tabId: TicketTab) => {
        if (tabId === 'all') return tickets.length;
        return tickets.filter(ticket => ticket.status === tabId).length;
    };

    // Format date with timezone
    const formatDate = (dateString: string) => {
        if (isLoading) return "-";
        try {
            return format(new Date(dateString), "dd MMM yyyy 'at' hh:mm a");
        } catch {
            return "-";
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading tickets...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.282 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-red-800">Error Loading Tickets</h3>
                        <p className="text-red-700 mt-1">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="border-b border-gray-200">
                    <nav className="flex overflow-x-auto scrollbar-hide" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300
                                    ${activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600 bg-blue-50'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                    }
                                `}
                            >
                                <div className="flex items-center gap-2">
                                    <span>{tab.label}</span>
                                    <span className={`
                                        px-2 py-1 text-xs rounded-full
                                        ${activeTab === tab.id
                                            ? 'bg-blue-100 text-blue-600'
                                            : 'bg-gray-100 text-gray-600'
                                        }
                                    `}>
                                        {getTabCount(tab.id)}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Description */}
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                    <p className="text-sm text-gray-600">
                        {tabs.find(t => t.id === activeTab)?.description}
                    </p>
                </div>
            </div>

            {/* Tickets Table */}
            <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Subject
                                </th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Assignee
                                </th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    User
                                </th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Created
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredTickets.length > 0 ? (
                                filteredTickets.map((ticket) => (
                                    <tr
                                        key={ticket.id}
                                        onClick={() => onSelectTicket(ticket.id)}
                                        className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="max-w-md">
                                                <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                                                    {ticket.subject}
                                                </div>
                                                <div className="text-sm text-gray-500 truncate mt-1">
                                                    {ticket.message}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <StatusBadge status={ticket.status} />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 font-medium">
                                                {getAssignee(ticket)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {ticket.user?.fullName || 'N/A'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {formatDate(ticket.created_at)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center">
                                        <div className="flex flex-col items-center justify-center">
                                            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <h3 className="text-lg font-medium text-gray-900 mb-1">No tickets found</h3>
                                            <p className="text-gray-500">There are no tickets with status "{activeTab}"</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Table Footer with Statistics */}
                {filteredTickets.length > 0 && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                Showing <span className="font-medium">{filteredTickets.length}</span> of{' '}
                                <span className="font-medium">{tickets.length}</span> total tickets
                            </div>
                            <div className="text-sm text-gray-500">
                                Active tab: <span className="font-medium capitalize">{activeTab.replace('-', ' ').replace('/', ' ')}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminTickets;