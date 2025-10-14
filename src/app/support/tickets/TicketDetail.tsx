"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { assignTicket, fetchTicket, sendTicketReply, updateTicketStatus } from '@/store/slices/supportTicket/slice';
import StatusSelector from './StatusSelector';
import AssigneeSelector from './AssigneSelector';
import StatusBadge from '@/components/utils/statusBadge';

interface TicketDetailProps {
    ticketId: number;
    onClose: () => void;
}

const TicketDetail = ({ ticketId, onClose }: TicketDetailProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { currentTicket, loading, error } = useSelector((state: RootState) => state.tickets);
    const [replyMessage, setReplyMessage] = useState('');

    useEffect(() => {
        dispatch(fetchTicket(ticketId));
    }, [dispatch, ticketId]);

    const handleStatusChange = async (newStatus: string) => {
        await dispatch(updateTicketStatus({
            ticketId,
            status: { status: newStatus }
        }));
    };

    const handleAssign = async (assignee: string) => {
        await dispatch(assignTicket({
            ticketId,
            handledBy: { handled_by: assignee }
        }));
    };

    const handleSendReply = async () => {
        if (!currentTicket) return;

        await dispatch(sendTicketReply({
            ticketId,
            emailRequest: {
                subject: `Re: ${currentTicket.subject}`,
                message: replyMessage,
                recipients: [currentTicket.user.email!]
            }
        }));
        setReplyMessage('');
    };

    if (!currentTicket || currentTicket.id !== ticketId) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-start">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {currentTicket.subject}
                    </h3>
                    {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Created by {currentTicket.user.fullName  + " (" + currentTicket.user.email + ")"}
                    </p> */}
                </div>
                <div className='self-start mr-10 ml-auto'>
                    <StatusBadge status={currentTicket.status} />
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                    ✕
                </button>
            </div>

            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Assignee</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <AssigneeSelector
                                currentAssignee={currentTicket.handled_by || ''}
                                onAssign={handleAssign}
                            />
                        </dd>
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Status</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <StatusSelector
                                currentStatus={currentTicket.status}
                                onStatusChange={handleStatusChange}
                            />
                        </dd>
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Original Message</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {currentTicket.message}
                        </dd>
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Response</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <textarea
                                value={replyMessage}
                                onChange={(e) => setReplyMessage(e.target.value)}
                                className="w-full h-32 p-2 border rounded-md"
                                placeholder="Type your response here..."
                            />
                            <button
                                disabled={!currentTicket.user?.email}
                                onClick={handleSendReply}
                                className="mt-2 bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Send Response
                            </button>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default TicketDetail;