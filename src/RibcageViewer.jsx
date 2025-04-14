import React from "react";

const RibcageViewer = () => {
  return (
    <div
      className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center"
      style={{
        cursor: "url('http://www.rw-designer.com/cursor-extern.php?id=38216'), auto",
        backgroundColor: "#0f2027", // Solid dark background (not gradient)
      }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          width: "80%",
          height: "80%",
          borderRadius: "12px",
          boxShadow: "0 0 40px rgba(0,255,255,0.2)",
          border: "2px solid rgba(0,255,255,0.1)",
        }}
      >
        <iframe
          title="Ribcage Anatomy Labeled Diagram Names of Ribcage"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/b3a04774fb5143e3803f67514506ed9a/embed?autospin=1&autostart=1&preload=1"
          className="w-full h-full"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default RibcageViewer;
