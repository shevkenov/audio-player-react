import React from 'react'

import styles from "./Play.module.css";

const Play = ({ src, onClick }) => {
  return <img className={styles.play} src={src} onClick={onClick} alt="play"/>;
};

export default Play
