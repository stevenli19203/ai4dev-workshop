import React from 'react';
import DashboardSuccess from './DashboardSuccess';

const DashboardSuccessContainer: React.FC = () => {
  // Simulated success data - in a real app, this would come from an API or state management
  const successes = [
    { id: 1, title: 'Random succès 1', isCompleted: true },
    { id: 2, title: 'Random succès 2', isCompleted: true },
    { id: 3, title: 'Random succès 3', isCompleted: false },
    { id: 4, title: 'Random succès 4', isCompleted: false },
    { id: 10, title: 'Random succès 10', isCompleted: true },
    { id: 11, title: 'Random succès 11', isCompleted: false },
    { id: 12, title: 'Random succès 12', isCompleted: true },
    { id: 13, title: 'Random succès 13', isCompleted: false },
  ];

  return <DashboardSuccess successes={successes} />;
};

export default DashboardSuccessContainer; 