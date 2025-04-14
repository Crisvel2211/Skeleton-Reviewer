import React from "react";
import Header from "./Header";

const SkullViewer = () => {
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
        className="relative flex items-center justify-center mb-10"
        style={{
          width: "80%",
          height: "80%",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(0,255,255,0.2)",
          border: "2px solid rgba(0,255,255,0.1)",
        }}
      >
        <iframe
          title="Skull bones colored separable labelled"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          src="https://sketchfab.com/models/612558bafad64d90942fddcd74c94205/embed?autospin=1&autostart=1&preload=1"
          className="w-full h-full "
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    </div>

    </Header>
   
  );
};

export default SkullViewer;
