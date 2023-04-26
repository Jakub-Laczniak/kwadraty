import React, { useState } from "react";

function App() {
  const [colors, setColors] = useState([]);

  const getRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addSquare = () => {
    setColors(previousState => [...previousState, getRandomColor()])
  };
  
  const removeSquare = () => {
    colors.length > 0 && setColors(previousState => [...previousState.slice(0, colors.length - 1)])
  };

  const handleSquareClick = (index) => {
    const newColors = [...colors];
    newColors[index] = getRandomColor();
    setColors(newColors);
  };

  const squareStyle = {
    width: "100px",
    height: "100px",
    margin: "10px",
    cursor: "pointer",
  };

  const squares = colors
    .map((color, index) => (
      <div
        key={index}
        style={{ ...squareStyle, backgroundColor: color }}
        onClick={() => handleSquareClick(index)}
      />
    ));

  return (
    <div id="main-container">
      <button onClick={addSquare}>Dodaj kwadrat</button>
      <button onClick={removeSquare}>Usuń kwadrat</button>
      {squares}
    </div>
  );
}

export default App;
