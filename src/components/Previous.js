import React from 'react'

import styles from "./Previous.module.css";

const Previous = ({ src, onClick }) => {
  return <img className={styles.previous} src={src} onClick={onClick} alt="previous"/>;
};

export default Previous
