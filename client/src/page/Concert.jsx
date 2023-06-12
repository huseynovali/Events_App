import React, { useState, useEffect } from "react";
import {
    FaCalendar,
    FaClock,
    FaMapMarkerAlt,
    FaHeart,
    FaShare,
    FaMoneyBillWave,
} from "react-icons/fa";
import { TbCurrencyManat } from "react-icons/tb";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import "./AllEvents/AllEvents.css";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useSelector } from "react-redux";
import { getTickets } from "../store/ticketSlice";
import { Link, useLocation, useParams } from "react-router-dom";
import Loading from "./Loading";
import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
  } from "react-icons/ai";
  import Modal from "react-modal";

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
     
    },
    overlay: {
      
   
      background: "rgba(255,255,255,0.1)",
    },
  };
  Modal.setAppElement("#root");
function Concerts() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = "#f00";
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
    const [input3, setInput3] = useState({ min: 0, max: 150 });
    const { tickets, loading, error } = useSelector((state) => state.ticketReducer);
    const [filteredTickets, setFilteredTickets] = useState(tickets);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getTickets({ limit: 1000, category: "64830b4342235eb5a6d96c3a" }))
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching tickets:", error);
          setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        const applyFilters = () => {
            let filteredData = tickets;

            if (selectedLocation) {
                filteredData = filteredData.filter(
                    (item) => item.location.name === selectedLocation
                );
            }

            if (selectedDateRange[0] && selectedDateRange[1]) {
                filteredData = filteredData.filter(
                    (item) =>
                        moment(item.date).isBetween(
                            selectedDateRange[0],
                            selectedDateRange[1],
                            null,
                            "[]"
                        )
                );
            }

            filteredData = filteredData.filter(
                (item) => item.minprice >= input3.min && item.minprice <= input3.max
            );

            setFilteredTickets(filteredData);
        };

        applyFilters();
    }, [selectedLocation, selectedDateRange, input3, tickets]);

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleDateRangeChange = (dates) => {
        setSelectedDateRange(dates);
    };

    const handlePriceRangeChange = (value) => {
        setInput3(value);
    };
    const locationSet = new Set();
    tickets.forEach(item => {
        locationSet.add(item.location.name);
    });

    const uniqueLocations = Array.from(locationSet);
    return (
        <div className="container pb-5">
            <div className="row gap-20 justify-center items-center py-5">
                <div className="col-3">
                    <select
                        className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-full appearance-none"
                        value={selectedLocation}
                        onChange={handleLocationChange}
                    >
                        <option>Select a location</option>
                        {uniqueLocations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                </div>
                <div className="col-3">
                    <DatePicker
                        selected={selectedDateRange[0]}
                        onChange={handleDateRangeChange}
                        startDate={selectedDateRange[0]}
                        endDate={selectedDateRange[1]}
                        selectsRange
                        className="w-full px-4 py-2 border border-gray-300 rounded-full"
                        placeholderText="Choose Date"
                    />
                </div>
                <div className="col-3">
                    <InputRange
                        maxValue={150}
                        minValue={0}
                        value={input3}
                        onChange={handlePriceRangeChange}
                    />
                </div>
            </div>
            <div className="row justify-evenly gap-10 pt-20">
                {isLoading ? (
                    <Loading/>
                ) : (
                    filteredTickets.map((item) => (
                        <div className="relative w-[350px] h-[540px]">
                        <Link to={`/event/${item._id}`} className="card col-3 w-[350px] h-[540px] relative rounded-lg">
                            <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                                <img src={item.imageUrl[0]} alt="" className="rounded-lg h-[250px] w-full" />
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {item.name}
                                        </h5>
                                    </a>
                                    <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
                                        <FaCalendar className="w-4 h-4 mr-2" />
                                        <p>{moment(item.date).format('L')}</p>
                                    </div>
                                    <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
                                        <FaClock className="w-4 h-4 mr-2" />
                                        <p>{moment(item.date).format('LT')}</p>
                                    </div>
                                    <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
                                        <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                                        <p>{item.location.name}</p>
                                    </div>
                                    <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
                                        <FaMoneyBillWave className="w-4 h-4 mr-2" />
                                        <p className="flex items-center">{item.minprice}<TbCurrencyManat /> dən </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end absolute bottom-3 w-full px-5 rounded-lg">
                                <div className="flex items-center p-3 z-20">
                                    <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer relative z-10 text-2xl" />
                                </div>
                                <div className="flex items-center p-3 z-20">
                                    <FaShare className="text-gray-400 hover:text-blue-500 cursor-pointer relative z-10 text-2xl" />
                                </div>
                            </div>
                        </Link>
                        <div className="flex justify-end absolute bottom-3 w-full px-5 rounded-lg z-50">
                  <div className="flex items-center p-3 z-20">
                    <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer relative z-10 text-2xl" />
                  </div>
  
                  <div>
                    <div className="flex items-center p-3 z-20">
                      <FaShare
                        className="text-gray-400 hover:text-blue-500 cursor-pointer relative z-10 text-2xl"
                        onClick={openModal}
                      />
                    </div>
                    <Modal
                      isOpen={modalIsOpen}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                        <div className="row justify-center gap-x-2">
                          <div className="col-3 flex items-start">
                            <a href="#">
                              <AiFillFacebook className="text-3xl text-blue-900" />
                            </a>
                          </div>
                          <div className="col-3 flex items-start">
                            <a href="#">
                              <AiOutlineInstagram className="text-3xl text-red-900" />
                            </a>
                          </div>
                          <div className="col-3 flex items-start">
                            <a href="#">
                              <AiOutlineTwitter className="text-3xl text-blue-600" />
                            </a>
                          </div>
                        </div>
                      </h2>
                      {/* <button onClick={closeModal}>close</button> */}
                      <div></div>
                      <form>
                        <input />
                      </form>
                    </Modal>
                  </div>
                </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Concerts;
