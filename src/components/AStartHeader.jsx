// src/components/AStartHeader.jsx
import React from "react";

function AStartHeader() {
  return (
    <div
      style={{             
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",     
        alignItems: "center",        
        textAlign: "center",
        fontFamily: "Cambria, serif",
        padding: "20px",
        color: "#a71622ff",
      }}
    >
      <h1>ASWANG HUNTER</h1>
      <h2 style={{ fontFamily: "Century Schoolbook, serif", color: "#ffffff" }}>
        Welcome, this will be a chilling tale of you, a fellow hunter eliminating the monsters of Filipino Folklore. It will be a dangerous yet thrilling journey.
      </h2>
      <h3 style={{ fontSize: "30px", marginTop: "20px" }}>
        Do you have what it takes, dear hunter...?
      </h3>
    </div>
  );
}

export default AStartHeader;


