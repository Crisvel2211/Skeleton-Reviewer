import React, { useRef } from "react";
import Header from "./Header";
const SkeletonViewer = () => {
  const containerRef = useRef(null);

  return (
    <Header>
      <div
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
        style={{
          cursor: "url('http://www.rw-designer.com/cursor-extern.php?id=38216'), auto",
          backgroundColor: "#0f2027",
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
        </div>

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
    </Header>
    
  );
};

export default SkeletonViewer;
