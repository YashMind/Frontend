type Status = 'pending' | 'Invalid' | 'resolved' | 'in process' | 'issue/bug';

const statusColors: Record<Status, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    'in process': 'bg-blue-100 text-blue-800',
    resolved: 'bg-green-100 text-green-800',
    'Invalid': 'bg-gray-100 text-gray-800',
    'issue/bug': 'bg-red-100 text-red-800',
};

const StatusBadge: React.FC<{ status: Status }> = ({ status }) => {
    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status]
                }`}
        >
            {status}
        </span>
    );
};


export default StatusBadge;