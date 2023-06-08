import React, { useState, useEffect } from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

function AllEvents() {
  const [events, setEvents] = useState([]);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  useEffect(() => {
    // Simulating an asynchronous API call to fetch event data
    const fetchEventData = async () => {
      try {
        // Make an API call or perform any async operation to fetch the event data
        const response = await fetch('your-api-endpoint');
        const eventData = await response.json();

        // Set the fetched event data to the state variable
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, []); // Empty dependency array to execute the effect only once

  return (
    <div className='container m-auto py-10'>
      <div className="flex justify-between gap-11 mb-4">
        <input
          className="w-1/3 px-4 py-2 border border-gray-300 rounded-full"
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Locations"
        />
        <input
          className="w-1/3 px-4 py-2 border border-gray-300 rounded-full"
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Choose Date"
        />
        <input
          className="w-1/3 px-4 py-2 border border-gray-300 rounded-full"
          type="text"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          placeholder="Price Range"
        />
      </div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
  <a href="#">
  <img className="w-full h-60 rounded-t-lg object-cover" src="https://picsum.photos/id/31/200/300" alt="asd" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Event Name</h5>
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
</div>

    </div>
  );
}

export default AllEvents;
