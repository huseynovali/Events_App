import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart,AiOutlineSearch } from 'react-icons/ai';
import {BiUserCircle} from "react-icons/bi"
import {FaBars} from "react-icons/fa"
function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center bg-">
                {/*****************  Nav Brand********************/}
                <div className="nav__brand">
                    <Link to="/">
                        <div className="text-baby_Blue font-bold text-lg">Logoa</div>
                    </Link>
                </div>
                <div className="nav__right flex justify-between items-center">
                    {/*****************  Nav Links********************/}
                    <div className="nav__links hidden  sm:block">
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-white">Bütün Tədbirlər</a></li>
                            <li><a href="#" className="text-white">Konsertlər</a></li>
                            <li><a href="#" className="text-white">Tamaşa</a></li>
                            <li><a href="#" className="text-white">İdman</a></li>
                            <li><a href="#" className="text-white">Muzey</a></li>
                        </ul>
                    </div>
                    <div className="nav__search">
                        <AiOutlineSearch className='text-xl text-center '/>
                    </div>
                    <div className="nav__details flex items-center mx-5">
                        <div className="nav__favorite ">
                           <AiOutlineHeart className='text-xl text-center '/>
                        </div>
                    </div>
                    <div className="nav__profile">
                        <BiUserCircle className='text-xl'/>
                    </div>
                    <div className="nav__menu_bar mx-2">
                    <FaBars/>
                    </div>
                </div>





            </div>
        </nav>
    )
}


export default Navbar