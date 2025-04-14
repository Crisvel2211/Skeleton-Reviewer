import React, { useEffect, useRef, useState } from "react";

const SkeletonViewer = () => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Simulating loading delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (or any delay you prefer)
    }, 2000); // You can adjust this delay to match your needs
  }, []);

  return (
    <div
      className="relative w-full h-full"
      style={{
        cursor: "url('http://www.rw-designer.com/cursor-extern.php?id=38216'), auto",
      }}
    >
      <div
        ref={containerRef}
        className="w-full h-full" // Ensures the container takes full height
        style={{ position: "relative", height: "100%" }}
      >
        {loading ? (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
            <p className="text-lg text-gray-700 font-semibold">Loading Skeleton Model...</p>
          </div>
        ) : (
          <div className="sketchfab-embed-wrapper w-full h-full">
            <iframe
              title="skeleton"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/6db4f2130c544f628cb349f532d49b1b/embed"
              className="w-full h-full"
              style={{
                width: "100%", 
                height: "100%", // Ensures the iframe takes full height of the container
                border: "none",
              }}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkeletonViewer;
