import React from 'react';
import styles from "./TitleAndTimeBox.module.css";

const TitleAndTimeBox = ({ children }) => {
    return (
        <div className={styles.wrapper}>{children}</div>
    )
}

export default TitleAndTimeBox
