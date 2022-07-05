import React, {useContext} from 'react'
import {AuthContext} from "../context"
import MyInput from "../component/UI/input/MyInput"
import MyButton from "../component/UI/button/MyButton"

const Login = () => {
    const { setIsAuth } = useContext(AuthContext)

    // A stub function that adds to local
    // storage whether the user is authorized
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter login"/>
                <MyInput type="password" placeholder="Enter password"/>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    )
}

export default Login
