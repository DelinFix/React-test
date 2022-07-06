import React from 'react'

import MySelect from "../UI/select/MySelect"

import styles from "./Limit.module.css"

const Limit = ( props ) => {
    const {limit, setLimit} = props
    
    return (
        <MySelect
            value={limit}
            onChange={value => setLimit(value)}
            defaultValue="Number of posts"
            options={[
                {value:5, name:'5'},
                {value:10, name:'10'},
                {value:25, name:'25'},
                {value:-1, name:'All'}
            ]}
            className={styles.limit}
        />
    )
}

export default Limit
