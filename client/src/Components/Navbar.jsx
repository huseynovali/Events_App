import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import imgnavbrand from "../img/download-2C3AiDtXE-transformed.png"

import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { getTickets } from '../store/ticketSlice';
import { useSelector } from 'react-redux';

const customStyles = {
  content: {
    width: "50vw",
    height: "70vh",
    overflow: "hidden",
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -10%)',
    borderRadius: "10px",
    zIndex: 10000
  },
  overlay: {
    zIndex: 1000, // Updated z-index value for the modal overlay
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Navbar() {
  let subtitle;
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const { tickets, loading, error } = useSelector((state) => state.ticketReducer);

  useEffect(() => {
    dispatch(getTickets({ limit: 1000, category: "" }));

  }, [])

  useEffect(() => {


    setSearchResults(
      tickets.filter((event) => {
        const lowerSearchText = searchText.toLowerCase();
        console.log(event.location.name);
        return (
          event.category?.name.toLowerCase().includes(lowerSearchText) ||
          event.name.toLowerCase().includes(lowerSearchText) ||
          event.location.name.toLowerCase().includes(lowerSearchText)
        );
      })
    );
  }, [searchText]);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="container py-5 flex justify-around items-center bg-white px-6" style={{ backgroundImage: "linear-gradient(white, rgb(255,201,14))" }}>
        {/* Nav Brand */}
        <div className="nav__brand">
          <Link to="/">
            <img src={imgnavbrand} alt="" className='h-[50px]' />
          </Link>
        </div>
        <div className="nav__right flex justify-around items-center">
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
            <AiOutlineSearch className="text-2xl text-gray-900" onClick={openModal} />
          </div>
          <div className="nav__details flex items-center mx-5">
            <div className="nav__favorite">
              <AiOutlineHeart className="text-2xl text-gray-900" />
            </div>
          </div>
          <div className="nav__profile">
            <Link to={"login"}>
              <BiUserCircle className="text-2xl text-gray-900" />
            </Link>
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
            </div>
          </Button>
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
              <MenuItem onClick={handleClose}>Konsertlər</MenuItem>
            </Link>
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
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"

          >

            <div className="content ">
              <div className="header">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='text-center text-2xl'>Search</h2>
                <button onClick={closeModal} className='absolute top-2 right-2 '>
                  <AiOutlineClose className='text-2xl' />
                </button>
              </div>
              <form>
                <input
                  type="text"
                  id="search-input"
                  placeholder="Arama yap..."
                  value={searchText}
                  className='w-full p-3 border rounded-md mt-2 '
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </form>
              <h1 className='text-2xl my-2 mx-1'>List</h1>
              <hr />
              <ul id="search-results" className='overflow-y-scroll h-[300px]'>
                {searchResults.map((item, index) => (
                  <Link key={index} to={`/event/${item._id}`} className='p-2'>
                    <li onClick={closeModal} className='p-2 w-full'>{item.name}</li>
                  </Link>
                ))}
              </ul>

            </div>
          </Modal>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
