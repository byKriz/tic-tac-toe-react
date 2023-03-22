import React from "react";
import styles from "./Cell.module.scss";

export const Cell = ({ id, cell, setCells, go }) => {
  // console.log(cell);
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains(styles.circle) ||
      e.target.firstChild.classList.contains(styles.cross);

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add(styles.circle);
      } if (go === "cross") {
        e.target.firstChild.classList.add(styles.cross);
      }
    }
  };

  return (
    <div className={styles.square} id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
};
