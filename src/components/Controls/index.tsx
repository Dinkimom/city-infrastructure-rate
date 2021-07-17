import React from "react";
import styles from "./Controls.module.css";

export const Controls: React.FC = () => {
  return (
    <div className={styles.root}>
      <input type="text" />
      <button>Submit</button>
    </div>
  );
};
