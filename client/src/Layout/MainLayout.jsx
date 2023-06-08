import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

function MainLayout() {
    return (
        <div>
           <Navbar/>
            <Outlet />
            <footer className='w-screen h-[450px] bg-cerulean_Blue'>

            </footer>
        </div>
    )
}

export default MainLayout