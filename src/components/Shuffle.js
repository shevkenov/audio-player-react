import React from 'react'

import styles from "./Shuffle.module.css";

const Shuffle = ({ src, onClick }) => {
  return <img className={styles.shuffle} src={src} onClick={onClick} alt="shuffle"/>;
};

export default Shuffle
