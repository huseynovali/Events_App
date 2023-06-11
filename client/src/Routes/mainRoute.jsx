import { Navigate } from "react-router-dom";

import React from 'react'

import MainLayout from "../Layout/MainLayout";

import AllEvents from "../page/AllEvents/AllEvents";
import Home from "../page/Home/Home";
import Login from "../page/authpage/Login";
import Register from "../page/authpage/Register";
import EventDetails from "../page/eventdetail/EventDetails";

export default function MainRoutes() {
    const isTrue = true
    const Routes = [
        {
            element: isTrue ? <MainLayout /> : <Navigate to={""} />,
            path: '/',
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "allevents",
                    element: <AllEvents />
                },
                {
                    path: "login",
                    element: localStorage.getItem("token") ? <Navigate to={"/"} /> : <Login />
                },
                {
                    path: "register",
                    element: localStorage.getItem("token") ? <Navigate to={"/"} /> : <Register />
                },{
                    path: "event/:id",
                    element: <EventDetails/>
                }


            ]
        }

    ]





    return [...Routes]
}

