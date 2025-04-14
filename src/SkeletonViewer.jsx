import React, { useEffect, useRef, useState } from "react";

const SkeletonViewer = () => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={{
        cursor: "url('http://www.rw-designer.com/cursor-extern.php?id=38216'), auto",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div
        ref={containerRef}
        className="relative flex items-center justify-center"
        style={{
          width: "80%",
          height: "80%",
        }}
      >
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-400 mb-4"></div>
            <p className="text-lg text-cyan-200 font-semibold tracking-wider font-mono">
              Loading Skeleton Model...
            </p>
          </div>
        ) : (
          <div
            className="sketchfab-embed-wrapper w-full h-full animate-fade-in"
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(0,255,255,0.2)",
              border: "2px solid rgba(0,255,255,0.1)",
            }}
          >
            <iframe
              title="skeleton"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src="https://sketchfab.com/models/6db4f2130c544f628cb349f532d49b1b/embed?autospin=1&autostart=1&preload=1"
              className="w-full h-full"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            ></iframe>
          </div>
        )}
      </div>

      {/* Tailwind fade-in animation */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease-in forwards;
            opacity: 0;
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SkeletonViewer;
