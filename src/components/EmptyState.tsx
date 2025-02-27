import React from 'react';
import { ClipboardList } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <ClipboardList size={64} className="text-gray-300 mb-4" />
      <h3 className="text-xl font-medium text-gray-700 mb-2">No tasks yet</h3>
      <p className="text-gray-500 max-w-sm">
        Add your first task using the form above and start being productive!
      </p>
    </div>
  );
};

export default EmptyState;
