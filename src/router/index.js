import React from "react"

import About from "../pages/About/About"
import Posts from "../pages/Posts/Posts"
import Login from "../pages/Login"
import PostIdPage from "../pages/PostIdPage/PostIdPage"


export const  priviteRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>}
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
]