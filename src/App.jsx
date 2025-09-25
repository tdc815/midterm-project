import React, { useEffect, useState } from "react";
import AStartHeader from "./components/aStartHeader";
import AStoryInfo from "./components/AStoryInfo";
import storyData from "./components/story.json";
import BGStandard from "./assets/BGStandard.png";
import BGGood from "./assets/BGGoodEnd.png";
import BGBad from "./assets/BGNoSalt.png";
import BGGameOver from "./assets/BGBadEnd.png";

function App() {
  const [currentNodeKey, setCurrentNodeKey] = useState("start");
  const [inventory, setInventory] = useState([]);
  const [health, setHealth] = useState(100);
  const [name, setName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const currentNode = storyData[currentNodeKey];

  useEffect(() => {
    if (!currentNode) return;

    if (currentNode.onArrive) {
      if (
        currentNode.onArrive.addItem &&
        !inventory.includes(currentNode.onArrive.addItem)
      ) {
        setInventory((inv) => [...inv, currentNode.onArrive.addItem]);
      }
      if (currentNode.onArrive.takeDamage) {
        setHealth((hp) => Math.max(hp - currentNode.onArrive.takeDamage, 0));
      }
    }
  }, [currentNodeKey]);

  const handleChoice = (to) => {
    if (!storyData[to]) {
      alert("Theo, This part is missing, go fix it.");
      return;
    }
    setCurrentNodeKey(to);
  };

  const restartGame = () => {
    setCurrentNodeKey("start");
    setInventory([]);
    setHealth(100);
    setGameStarted(false);
    setName("");
  };

  let backgroundImage = BGStandard;
  if (health <= 0) {
    backgroundImage = BGGameOver;
  } else if (currentNode?.isEnding) {
    if (currentNodeKey === "goodEnding") {
      backgroundImage = BGGood;
    } else if (currentNodeKey === "badEnding_noSalt") {
      backgroundImage = BGBad;
    }
  }

  if (!gameStarted) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
          fontFamily: "Cambria, serif",
          color: "#a71622ff",
          textAlign: "center",
          backgroundColor: "#000",
        }}
      >
        <AStartHeader />
        <input
          type="text"
          placeholder="Who are you, Fellow Hunter...?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            marginTop: 20,
            padding: 10,
            fontSize: 18,
            width: 300,
            borderRadius: 5,
            border: "1px solid #7c7273ff",
            textAlign: "center",
          }}
        />
        <button
          disabled={!name.trim()}
          onClick={() => setGameStarted(true)}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            fontSize: 18,
            backgroundColor: "#a71622ff",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: name.trim() ? "pointer" : "not-allowed",
          }}
        >
          Start the Hunt
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        fontFamily: "Cambria, serif",
        color: "#fff",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 700,
          borderRadius: 10,
          padding: 20,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <AStoryInfo
          health={health}
          inventory={inventory}
          name={name || "Unnamed"}
        />

        <div style={{ marginTop: 30 }}>
          <h2
            style={{
              color: "#ffffff",
              fontFamily: "'Crimson Text', serif",
              fontSize: 32,
            }}
          >
            {currentNode?.text ? currentNode.text.replace("{name}", name) : "The End"}
          </h2>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              flexDirection: "column",
              gap: 20,
              alignItems: "center",
            }}
          >
            {health <= 0 ? (
              <>
                <p style={{ color: "#fff" }}>
                  Your wounds are too severe. The darkness consumes you. Your hunt ends in failure.
                </p>
                <button
                  onClick={restartGame}
                  style={{
                    marginTop: 20,
                    padding: "10px 20px",
                    fontSize: 18,
                    backgroundColor: "#a71622ff",
                    color: "white",
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                  }}
                >
                  Restart
                </button>
              </>
            ) : currentNode?.isEnding ? (
              <button
                onClick={restartGame}
                style={{
                  marginTop: 40,
                  padding: "10px 20px",
                  fontSize: 18,
                  backgroundColor: "#a71622ff",
                  color: "white",
                  border: "none",
                  borderRadius: 5,
                  cursor: "pointer",
                  border: "2px solid white",
                }}
              >
                Restart Game
              </button>
            ) : currentNode?.choices?.length > 0 ? (
              currentNode.choices
                .filter((choice) => !choice.requires || inventory.includes(choice.requires))
                .filter((choice) => !choice.hideIf || !inventory.includes(choice.hideIf))
                .map((choice, i) => (
                  <button
                    key={i}
                    onClick={() => handleChoice(choice.to)}
                    style={{
                      backgroundColor: "#a71622ff",
                      border: "none",
                      padding: "15px 20px",
                      borderRadius: 6,
                      fontSize: 20,
                      cursor: "pointer",
                      color: "white",
                      width: "100%",
                      maxWidth: 400,
                    }}
                  >
                    {choice.text}
                  </button>
                ))
            ) : (
              <p style={{ color: "#fff" }}>No choices available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;












