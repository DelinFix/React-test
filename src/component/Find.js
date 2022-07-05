import React from 'react'

import MyInput from "./UI/input/MyInput"

const Find = ( props ) => {
    const {filter, setFilter} = props

    return (
        <MyInput
            value={filter.query}
            onChange = {e => setFilter({...filter, query: e.target.value})}
            placeholder="Find..."
        />
    )
}

export default Find
