import React, { useState } from 'react';

function AStartScreen({ onStart }) {
  const [name, setName] = useState('');

  const handleStart = () => {
    const trimmed = name.trim();
    if (trimmed) {
      onStart(trimmed);
    } else {
      alert('Please enter your name to begin.');
    }
  };

  return (
    <div
      className="start-screen"
      style={{
        textAlign: 'center',
        padding: '40px',
        fontFamily: 'Cambria, serif',
        color: '#fff',
        backgroundColor: '#1a1a1a',
        minHeight: '100vh',
      }}
    >
      <div style={{ padding: '70px', fontFamily: 'Cambria' }}>
        <h1 style={{ color: '#a71622ff' }}>ASWANG HUNTER</h1>

        <h2 style={{ fontFamily: 'Century Schoolbook, serif' }}>
          Welcome, this will be a chilling tale of you, a fellow hunter eliminating the monsters of Filipino Folklore. It will be a dangerous yet thrilling journey.
        </h2>

        <h3 style={{ fontFamily: 'Cambria', color: '#a71622ff', fontSize: '30px' }}>
          Do you have what it takes, dear hunter...?
        </h3>
      </div>

      <input
        type="text"
        placeholder="Enter your name..."
        aria-label="Player name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleStart();
        }}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '250px',
          borderRadius: '4px',
          border: '1px solid #888',
          marginTop: '30px',
        }}
      />

      <br />

      <button
        onClick={handleStart}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#e63946',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Start Game
      </button>
    </div>
  );
}

export default AStartScreen;



