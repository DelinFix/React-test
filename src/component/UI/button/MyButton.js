import React from 'react'

import styles from './MyButton.module.css'

const MyButton = ( {children, warning, ...props} ) => {
    return (
        <button {...props} className={warning ? styles.warning : styles.myBtn}>
            {children}
        </button>
    )
}

export default MyButton
