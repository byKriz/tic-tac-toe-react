import React from "react";
import styles from "./Cell.module.scss";

export const Cell = ({ id, cell }) => {

  // console.log(cell);

  return (
    <div className={styles.square} id={id}>
      
    </div>
  );
};
