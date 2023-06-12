import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import imgnavbrand from "../img/download-2C3AiDtXE-transformed.png"
function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className="navbar "  >
      <div className="container py-5 flex justify-around items-center bg-white  px-6" style={{ backgroundImage: "linear-gradient(white, rgb(255,201,14))" }}>
        {/* Nav Brand */}
        <div className="nav__brand">
          <Link to="/">

            <img src={imgnavbrand} alt="" className='h-[50px]' />

          </Link>
        </div>
        <div className="nav__right flex justify-around items-center" >
          {/* Nav Links */}
          <div className="nav__links hidden sm:block" style={{ margin: "0 30px 0 30px" }}>
            <ul className="flex space-x-14" style={{ margin: "0 30px 0 30px", width: "100%" }}>
              <li className='li'>
                <Link to="/events" className="text-gray-900 hover:text-sun_Yellow">
                  Bütün Tədbirlər
                </Link>
              </li>
              <li className='li'>
                <Link to="/concerts" className="text-gray-900 hover:text-sun_Yellow">
                  Konsertlər
                </Link>
              </li>
              <li className='li'>
                <Link to="/show" className="text-gray-900 hover:text-sun_Yellow">
                  Tamaşa
                </Link>
              </li>
              <li className='li'>
                <Link to="/sport" className="text-gray-900 hover:text-sun_Yellow">
                  İdman
                </Link>
              </li>
              <li className='li'>
                <Link to="/museam" className="text-gray-900 hover:text-sun_Yellow">
                  Muzey
                </Link>
              </li>
              <li className='li'>
                <Link to="/tourism" className="text-gray-900 hover:text-sun_Yellow">
                  Turizm
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__search">
            <AiOutlineSearch className="text-2xl text-gray-900" />
          </div>
          <div className="nav__details flex items-center mx-5">
            <div className="nav__favorite">
              <AiOutlineHeart className="text-2xl text-gray-900" />
            </div>
          </div>
          <div className="nav__profile">
            <BiUserCircle className="text-2xl text-gray-900" />
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <div className="nav__menu_bar mx-4">
              <FaBars className="text-gray-900" />
            </div>      </Button>
          <Menu className='menubar'
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link to="/events" className="text-gray-900 hover:text-sun_Yellow">
              <MenuItem onClick={handleClose}>Bütün Tədbirlər</MenuItem>
            </Link>
            <Link to="/concerts" className="text-gray-900 hover:text-sun_Yellow">
              <MenuItem onClick={handleClose}>Konsertlər</MenuItem></Link>
            <Link to="/show" className="text-gray-900 hover:text-sun_Yellow">
              <MenuItem onClick={handleClose}>Tamaşa</MenuItem>
            </Link>
            <Link to="/sport" className="text-gray-900 hover:text-sun_Yellow">
              <MenuItem onClick={handleClose}>İdman</MenuItem>
            </Link>

            <Link to="/museam" className="text-gray-900 hover:text-sun_Yellow">
              <MenuItem onClick={handleClose}>Muzey</MenuItem>
            </Link>
            <Link to="/tourism" className="text-gray-900 hover:text-sun_Yellow">
              <MenuItem onClick={handleClose}>Turizm</MenuItem>
            </Link>




          </Menu>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;