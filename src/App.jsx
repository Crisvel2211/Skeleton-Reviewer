import React from 'react';
import SkeletonViewer from './SkeletonViewer';

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="p-4 bg-white shadow">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center tracking-wide bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
  🦴 3D Human Skeleton Viewer
</h1>

      </header>
      <main className="flex-1">
        <SkeletonViewer />
      </main>
    </div>
  );
};

export default App;
