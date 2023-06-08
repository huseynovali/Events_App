import React, { useState, useEffect } from 'react';

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
         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src='' alt={"asd"} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
    </div>
  );
}

export default AllEvents;
