import React, {useEffect, useState} from "react"
import {BrowserRouter} from "react-router-dom"
import Navbar from "./component/UI/Navbar/Navbar"
import AppRouter from "./component/AppRouter"
import {AuthContext} from "./context"
import './styles/App.css'

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
