import { Navigate } from "react-router-dom";
import React from 'react'
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import Login from "../page/authpage/Login";
import Register from "../page/authpage/Register";
import AllEvents from "../page/AllEvents/AllEvents";
import Concerts from "../page/Concert";
import Show from "../page/Show";
import Sport from "../page/Sport";
import Museam from "../page/Museam";
import Tourism from "../page/Tourism";
import EventDetail from "../page/DetalPage/EventDetail";
import FavoritePage from "../page/FavoritePage/FavoritePage";

export default function MainRoutes() {
    const isTrue = true;
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
                    path: "events",
                    element: <AllEvents />,

                },
                 {
                    path: "concerts",
                    element: <Concerts />,
                },
                {
                    path: "show",
                    element: <Show />,
                },
                {
                    path: "sport",
                    element: <Sport />,
                },
                {
                    path: "museam",
                    element: <Museam />,
                },  {
                    path: "tourism",
                    element: <Tourism />,
                },
                {
                    path: "login",
                    element: localStorage.getItem("token") ? <Navigate to={"/"} /> : <Login />,
                },
                {
                    path: "register",
                    element: localStorage.getItem("token") ? <Navigate to={"/"} /> : <Register />,
                },
                {
                    path: "event/:id",
                    element: <EventDetail />,
                },
                {
                    path:"favorites",
                    element:<FavoritePage/>
                }
            ],
        },
    ];

    return [...Routes];
}


