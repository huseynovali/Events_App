import { Navigate, useRoutes } from "react-router-dom";

import React from 'react'

import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";

export default function MainRoutes() {
    const isTrue = true
    const Routes = [
        {
            element: isTrue ? <MainLayout /> : <Navigate to={""} />,
            path: '/',
            children: [
                {
                    path: "home",
                    element: <Home />,
                }


            ]
        }

    ]





    return [...Routes]
}

