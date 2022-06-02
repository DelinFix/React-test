import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import React from "react";
import Login from "../pages/Login";

export const  priviteRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>}
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
]