"use client"
import StatusBadge from '@/components/utils/statusBadge';
import { useTimezone } from '@/context/TimeZoneContext';
import { fetchAllTickets } from '@/store/slices/supportTicket/slice';
import { AppDispatch, RootState } from '@/store/store';
import { SupportTicket } from '@/types/supportTickets';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


interface AdminTicketsProps {
    onSelectTicket: (id: number) => void;
}

const AdminTickets = ({ onSelectTicket }: AdminTicketsProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading } = useTimezone()
    const { tickets, loading, error } = useSelector((state: RootState) => state.tickets);

    useEffect(() => {
        dispatch(fetchAllTickets());
    }, [dispatch]);

    const getAssignee = (ticket: SupportTicket) => {
        return ticket.handled_by || 'Unassigned';
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Subject
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Assignee
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                User
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Created
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tickets.map((ticket) => (
                            <tr
                                key={ticket.id}
                                onClick={() => onSelectTicket(ticket.id)}
                                className="hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                <td className="px-6 py-4 max-w-xs">
                                    <div className="text-sm font-medium text-gray-900 truncate">{ticket.subject}</div>
                                    <div className="text-sm text-gray-500 truncate">{ticket.message}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <StatusBadge status={ticket.status} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {getAssignee(ticket)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {ticket.user?.fullName || 'No user assigned'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {!isLoading ? format(new Date(ticket.created_at), "dd MMM yyyy 'at' hh:mm a") : "-"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTickets;