import React from 'react';
import SkeletonViewer from './SkeletonViewer';

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-center text-gray-800">🦴 3D Human Skeleton Viewer</h1>
      </header>
      <main className="flex-1">
        <SkeletonViewer />
      </main>
    </div>
  );
};

export default App;
