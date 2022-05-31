import React from 'react'

import styles from './TagItem.module.css';

const TagItem = ({status, onClick, tag}) => {
    return (
        <div onClick={onClick} className={`${styles.tag} ${status === 'active' ? styles.active : ""}`}>
            {
                tag
            }
        </div>
    )
}

export default TagItem
