import React from "react";
import styles from "./Cell.module.scss";

export const Cell = ({ id, cell, cells, setCells, go, setGo }) => {
  // console.log(cell);
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains(styles.circle) ||
      e.target.firstChild.classList.contains(styles.cross);

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add(styles.circle);
        handleCellChange(styles.circle);
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild.classList.add(styles.cross);
        handleCellChange(styles.cross);
        setGo("circle");
      }
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });

    setCells(nextCells)
  };

  return (
    <div className={styles.square} id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
};
