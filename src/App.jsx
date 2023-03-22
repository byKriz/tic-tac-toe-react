import { useState } from "react";
import { Cell } from "./components/Cell/Cell";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className={styles.gameboard}>
        <Cell />
      </div>
      <p></p>
    </div>
  );
}

export default App;
