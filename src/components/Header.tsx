import React from 'react';
import { CheckSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-2">
        <CheckSquare size={32} className="text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-800">TaskMaster</h1>
      </div>
      <p className="text-gray-600 mt-2">Organize your tasks efficiently</p>
    </header>
  );
};

export default Header;
