import { Navigate, useRoutes } from "react-router-dom";

import React from 'react'

import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import AllEvents from "../page/AllEvents";

export default function MainRoutes() {
    const isTrue = true
    const Routes = [
        {
            element: isTrue ? <MainLayout /> : <Navigate to={""} />,
            path: '/',
            children: [
                {
                    index:true,
                    element: <Home />,
                },
                {
                    path: "allevents",
                    element: <AllEvents />
                }


            ]
        }

    ]





    return [...Routes]
}

