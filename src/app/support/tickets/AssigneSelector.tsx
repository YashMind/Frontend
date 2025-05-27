"use client"
import { getAdminUsers } from '@/store/slices/admin/adminSlice';
import { AppDispatch, RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface AssigneeSelectorProps {
    currentAssignee: string;
    onAssign: (assignee: string) => void;
}

const AssigneeSelector = ({ currentAssignee, onAssign }: AssigneeSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch<AppDispatch>()

    const { adminUsers } = useSelector((state: RootState) => state.admin)

    const filteredAdmins = adminUsers.filter(admin =>
        admin.role === "Support Admin" && admin.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        dispatch(getAdminUsers())
    }, [dispatch])
    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
                {currentAssignee || 'Unassigned'}
            </button>

            {isOpen && (
                <div className="z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="p-2">
                        <input
                            type="text"
                            placeholder="Search admins..."
                            className="w-full px-2 py-1 border rounded-md"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="py-1 max-h-60 overflow-auto">
                        {filteredAdmins.length > 0 ? filteredAdmins.map((admin) => (
                            <button
                                key={admin.email}
                                onClick={() => {
                                    onAssign(admin.email);
                                    setIsOpen(false);
                                }}
                                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
                            >
                                {`${admin.fullName} (${admin.email})`}
                            </button>
                        )) : <p className='flex justify-center'>No Support Admin available</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AssigneeSelector;