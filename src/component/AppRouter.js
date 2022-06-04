import React, {useContext} from 'react'

import {Navigate, Route, Routes} from "react-router-dom"
import {priviteRoutes, publicRoutes} from "../router"

import {AuthContext} from "../context"

import Loader from "./UI/Loader/Loader"

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
                <Routes>
                    {priviteRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    )}
                    <Route
                        path="*"
                        element={<Navigate to="/posts"/>}
                    />
                </Routes>
            :
                <Routes>
                    {publicRoutes.map(route =>
                        <Route
                            path={route.path}
                            element={route.element}
                            key={route.path}
                        />
                    )}
                    <Route
                        path="*"
                        element={<Navigate to="/login"/>}
                    />
                </Routes>
    )
}

export default AppRouter
