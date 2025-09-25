import React from "react";

function AStoryInfo({ health, inventory, name }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#a71622ff",
        padding: "10px 20px",
        borderRadius: 8,
        fontSize: 18,
        fontFamily: "Cambria, serif",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ flex: 1, textAlign: "left" }}>
        <strong>Health:</strong> {health} HP
      </div>

      <div style={{ flex: 1, textAlign: "center" }}>
        <strong>Hunter:</strong> {name || "Unnamed"}
      </div>

      <div style={{ flex: 1, textAlign: "right" }}>
        <strong>Inventory:</strong> {inventory.length > 0 ? inventory.join(", ") : "Empty"}
      </div>
    </div>
  );
}

export default AStoryInfo;

