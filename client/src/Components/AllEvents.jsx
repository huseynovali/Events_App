import moment from 'moment'
import React from 'react'
import { FaCalendar, FaClock, FaHeart, FaMapMarkerAlt, FaMoneyBillWave, FaShare } from 'react-icons/fa'
import { TbCurrencyManat } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function AllEvents({filteredTickets,loading}) {
    return (
        <div>
            <div className="row justify-evenly gap-10 pt-20">
                {
                    loading ? <h1>Loading...</h1> :
                        filteredTickets.map(item => (
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
                                            < FaMoneyBillWave className="w-4 h-4 mr-2" />
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

                        ))
                }
            </div>
        </div>
    )
}

export default AllEvents