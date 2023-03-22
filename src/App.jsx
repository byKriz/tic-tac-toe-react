import { useEffect, useState } from "react";
import { Cell } from "./components/Cell/Cell";
import styles from "./App.module.scss";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winnindMessage, setWinnindMessage] = useState(null);

  const message = `It's now ${go}'s go.`;
  console.log(cells);

  const handleReset = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setWinnindMessage(null)
  };

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");

      if (circleWins) {
        setWinnindMessage("Circle Wins");
        return;
      }
    });

    winningCombos.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");

      if (crossWins) {
        setWinnindMessage("Cross Wins");
        return;
      }
    });
  };

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className="App">
      <div className={styles.gameboard}>
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            cells={cells}
            setCells={setCells}
            go={go}
            setGo={setGo}
            winnindMessage={winnindMessage}
          />
        ))}
      </div>
      <p>{winnindMessage || message}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
