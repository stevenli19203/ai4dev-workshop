import React from 'react';

interface SuccessBlock {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface DashboardSuccessProps {
  successes: SuccessBlock[];
}

const DashboardSuccess: React.FC<DashboardSuccessProps> = ({ successes }) => {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard de Succès</h1>
          <button 
            onClick={() => window.history.back()} 
            className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            Home
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {successes.map((success) => (
            <div
              key={success.id}
              className={`p-6 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${
                success.isCompleted ? 'bg-green-100' : 'bg-gray-100'
              }`}
            >
              <div className="w-16 h-16 bg-yellow-200 rounded-lg transform rotate-45 mb-4" />
              <p className="text-center text-gray-700 font-medium">
                {success.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSuccess; 