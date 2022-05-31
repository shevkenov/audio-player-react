import React from 'react'

import styles from "./Time.module.css";

const Time = ({ time }) => {
    return (
        <h1 className={styles.time}>{time}</h1>
    )
}

export default Time
