import React from "react";
import styles from "./styles.module.css";
export default function FoodModal({ modal, children }) {
  if (!modal) return;
  return <div className={styles.modalBox}>{children}</div>;
}
