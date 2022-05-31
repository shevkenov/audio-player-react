import React from 'react'

import styles from "./ButtonsAndVolumeBox.module.css";

const ButtonsAndVolumeBox = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ButtonsAndVolumeBox
