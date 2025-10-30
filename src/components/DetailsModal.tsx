interface MetricDetailsModalProps {
  isOpen: boolean;
  metricLabel: string;
  metricValue: number;
  onClose: () => void;
  children?: React.ReactNode;
  count: any
}

const MetricDetailsModal = ({
  isOpen,
  metricLabel,
  onClose,
  children,
  count
}: MetricDetailsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#0B1739] p-6 rounded-lg w-[90%] max-w-lg border border-[#343B4F] text-white max-h-[80vh] overflow-auto">
        <h3 className="text-lg font-bold mb-4">{metricLabel}</h3>
        <p className="text-2xl font-semibold mb-4"> Total Users : {count}</p>

        {/* Wrap children inside a table wrapper */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-600">
            <thead>
              <tr className="bg-[#1F2A56]">
                {/* You can customize headers here or pass them as children */}
                <th className="border border-gray-700 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Signup Date</th>
              </tr>
            </thead>
            <tbody>
              {/* Render children rows here */}
              {children}
            </tbody>
          </table>
        </div>

        <button
          className="cursor-pointer mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MetricDetailsModal;
