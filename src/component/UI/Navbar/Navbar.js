import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import MyButton from "../button/MyButton"
import {AuthContext} from "../../../context"

import styles from './Navbar.module.css'

const Navbar = () => {
    const { setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={styles.navbar}>
            <MyButton onClick={logout} warning={true}>
                Exit
            </MyButton>
            <div className={styles.navbar__links}>
                <Link to="/about" className={styles.navbar__link}>About website</Link>
                <Link to="/posts" className={styles.navbar__link}>Posts</Link>
            </div>
        </div>
    )
}

export default Navbar
