import { useState } from "react";
import { Cell } from "./components/Cell/Cell";
import styles from "./App.module.scss";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winnindMessage, setWinnindMessage] = useState(null);

  const message = `It's now ${go}'s go.`;
  console.log(cells);

  return (
    <div className="App">
      <div className={styles.gameboard}>
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            cells = {cells}
            setCells={setCells}
            go={go}
            setGo={setGo}
          />
        ))}
      </div>
      <p>{message}</p>
    </div>
  );
}

export default App;
