import React from 'react';

type FilterType = 'all' | 'active' | 'completed';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  todoCount: {
    total: number;
    active: number;
    completed: number;
  };
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, onFilterChange, todoCount }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-b border-gray-200 mb-4">
      <div className="text-sm text-gray-500 mb-3 sm:mb-0">
        {todoCount.total} tasks • {todoCount.active} active • {todoCount.completed} completed
      </div>
      
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            filter === 'all' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-gray-600 hover:text-indigo-600'
          }`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('active')}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            filter === 'active' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-gray-600 hover:text-indigo-600'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange('completed')}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            filter === 'completed' 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-gray-600 hover:text-indigo-600'
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
