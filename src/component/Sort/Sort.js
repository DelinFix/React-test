import React from 'react'
import MySelect from "../UI/select/MySelect"

import styles from './Sort.module.css'

const Sort = ( {filter, setFilter} ) => {
    return (
        <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Sort by"
            className={styles.filter}
            options={[
                {value: 'title', name:'For name'},
                {value: 'body', name:'For description'},
            ]}
        />
    )
}

export default Sort
