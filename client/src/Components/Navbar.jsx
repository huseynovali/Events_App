import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import imgnavbrand from "../img/download-2C3AiDtXE-transformed.png"
function Navbar() {
  return (
    <nav className="navbar "  >
      <div className="container py-5 flex justify-around items-center bg-white  px-6" style={{ backgroundImage: "linear-gradient(white, rgb(255,201,14))" }}>
        {/* Nav Brand */}
        <div className="nav__brand">
          <Link to="/">

            <img src={imgnavbrand} alt="" className='h-[50px]'/>

          </Link>
        </div>
        <div className="nav__right flex justify-around items-center" >
          {/* Nav Links */}
          <div className="nav__links hidden sm:block" style={{ margin: "0 30px 0 30px" }}>
            <ul className="flex space-x-14" style={{ margin: "0 30px 0 30px", width: "100%" }}>
              <li className='li'>
                <Link to="#" className="text-gray-700 hover:text-sun_Yellow">
                  Bütün Tədbirlər
                </Link>
              </li>
              <li className='li'>
                <Link to="#" className="text-gray-700 hover:text-sun_Yellow">
                  Konsertlər
                </Link>
              </li>
              <li className='li'>
                <Link to="#" className="text-gray-700 hover:text-sun_Yellow">
                  Tamaşa
                </Link>
              </li>
              <li className='li'>
                <Link to="#" className="text-gray-700 hover:text-sun_Yellow">
                  İdman
                </Link>
              </li>
              <li className='li'>
                <Link to="#" className="text-gray-700 hover:text-sun_Yellow">
                  Muzey
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__search">
            <AiOutlineSearch className="text-xl text-gray-700" />
          </div>
          <div className="nav__details flex items-center mx-5">
            <div className="nav__favorite">
              <AiOutlineHeart className="text-xl text-gray-700" />
            </div>
          </div>
          <div className="nav__profile">
            <BiUserCircle className="text-xl text-gray-700" />
          </div>
          <div className="nav__menu_bar mx-2">
            <FaBars className="text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;