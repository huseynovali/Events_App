import React, { useState, useEffect } from "react";
import {
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaHeart,
  FaShare,
} from "react-icons/fa";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import "./AllEvents.css";

function AllEvents() {
  const [events, setEvents] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [input3, setInput3] = useState({ min: 0, max: 1000 });

  useEffect(() => {
    // Simulating an asynchronous API call to fetch event data
    const fetchEventData = async () => {
      try {
        // Make an API call or perform any async operation to fetch the event data
        const response = await fetch("your-api-endpoint");
        const eventData = await response.json();

        // Set the fetched event data to the state variable
        setEvents(eventData);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, []); // Empty dependency array to execute the effect only once

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleDateRangeChange = (dates) => {
    setSelectedDateRange(dates);
  };

  const handlePriceRangeChange = (value) => {
    setInput3(value);
  };

  return (
    <div className="container m-auto py-10">
      <div className="flex justify-between gap-11 mb-4">
        <div className="relative w-1/3">
          <select
            className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-full appearance-none"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option>Select a location</option>
            <option value="Location 1">Location 1</option>
            <option value="Location 2">Location 2</option>
            <option value="Location 3">Location 3</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 8.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L10 10.586l-3.293-3.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="w-1/3">
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
        <div className="w-1/3">
          <InputRange
            maxValue={1000}
            minValue={0}
            value={input3}
            onChange={handlePriceRangeChange}
          />
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img
            className="w-full h-60 rounded-t-lg object-cover"
            src="https://picsum.photos/id/40/200/300"
            alt="asd"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Event Name
            </h5>
          </a>
          <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
            <FaCalendar className="w-4 h-4 mr-2" />
            <p>Event Date</p>
          </div>
          <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
            <FaClock className="w-4 h-4 mr-2" />
            <p>Event Time</p>
          </div>
          <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
            <p>Location</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center p-2">
            <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer relative z-10 text-2xl" />
          </div>
          <div className="flex items-center p-2">
            <FaShare className="text-gray-400 hover:text-blue-500 cursor-pointer relative z-10 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEvents;
