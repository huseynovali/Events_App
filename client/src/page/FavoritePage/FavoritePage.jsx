import React from "react";
import {
    FaCalendar,
    FaClock,
    FaMapMarkerAlt,
    FaHeart,
    FaShare,
    FaMoneyBillWave,
} from "react-icons/fa";
import { TbCurrencyManat } from "react-icons/tb";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { useDispatch } from "react-redux";
import moment from "moment";
import { useSelector } from "react-redux";
import { getTickets } from "../../store/ticketSlice";
import { Link, useLocation, useParams } from "react-router-dom";
import Modal from "react-modal";
import Loading from "../Loading";
import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
} from "react-icons/ai";
import "./FavoritePage.css"

function FavoritePage() {
    return (
        <></>
        // <div className="px-5">
        //     <div className="card col-3 !p-0 h-full w-full z-0 relative rounded-lg shadow">
        //     <div className="relative w-[350px] h-[540px]">
        //     <Link
        //       to={`/event/${item._id}`}
        //       className="card col-3 w-[350px] h-[540px] relative rounded-lg"
        //     >
        //       <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        //         <img
        //           src={item.imageUrl[0]}
        //           alt=""
        //           className="rounded-lg h-[250px] w-full"
        //         />
        //         <div className="p-5">
        //           <a href="#">
        //             <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        //               {item.name}
        //             </h5>
        //           </a>
        //           <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
        //             <FaCalendar className="w-4 h-4 mr-2" />
        //             <p>{moment(item.date).format("L")}</p>
        //           </div>
        //           <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
        //             <FaClock className="w-4 h-4 mr-2" />
        //             <p>{moment(item.date).format("LT")}</p>
        //           </div>
        //           <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
        //             <FaMapMarkerAlt className="w-4 h-4 mr-2" />
        //             <p>{item.location.name}</p>
        //           </div>
        //           <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
        //             <FaMoneyBillWave className="w-4 h-4 mr-2" />
        //             <p className="flex items-center">
        //               {item.minprice}
        //               <TbCurrencyManat /> dən{" "}
        //             </p>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="flex justify-end absolute bottom-3 w-full px-5 rounded-lg">
        //         <div className="flex items-center p-3 z-20">
        //           <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer relative z-10 text-2xl" />
        //         </div>
        //         <div className="flex items-center p-3 z-20">
        //           <FaShare className="text-gray-400 hover:text-blue-500 cursor-pointer relative z-10 text-2xl" />
        //         </div>
        //       </div>
        //     </Link>
        //           <div className="flex justify-end absolute bottom-3 w-full px-5 rounded-lg z-50">
        //           <div className="flex items-center p-3 z-20">
        //             <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer relative z-10 text-2xl" />
        //           </div>
  
        //           <div>
        //             <div className="flex items-center p-3 z-20">
        //               <FaShare
        //                 className="text-gray-400 hover:text-blue-500 cursor-pointer relative z-10 text-2xl"
        //                 onClick={openModal}
        //               />
        //             </div>
        //             <Modal
        //               isOpen={modalIsOpen}
        //               onAfterOpen={afterOpenModal}
        //               onRequestClose={closeModal}
        //               style={customStyles}
        //               contentLabel="Example Modal"
        //             >
        //               <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
        //                 <div className="row justify-center gap-x-2">
        //                   <div className="col-3 flex items-start">
        //                     <a href="#">
        //                       <AiFillFacebook className="text-3xl text-blue-900" />
        //                     </a>
        //                   </div>
        //                   <div className="col-3 flex items-start">
        //                     <a href="#">
        //                       <AiOutlineInstagram className="text-3xl text-red-900" />
        //                     </a>
        //                   </div>
        //                   <div className="col-3 flex items-start">
        //                     <a href="#">
        //                       <AiOutlineTwitter className="text-3xl text-blue-600" />
        //                     </a>
        //                   </div>
        //                 </div>
        //               </h2>
        //               {/* <button onClick={closeModal}>close</button> */}
        //               <div></div>
        //               <form>
        //                 <input />
        //               </form>
        //             </Modal>
        //           </div>
        //         </div>
        //       </div>     <div className="h-full bg-white   rounded-lg  relative overflow-hidden">
        //             <div className="card-image">
        //                 <img src="https://picsum.photos/id/73/200/300" alt="" className="rounded-lg h-[250px] w-full object-full" />
        //             </div>

        //             <div className="card-content">
        //                 <a href="#">
        //                     <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        //                         name
        //                     </h5>
        //                 </a>
        //                 <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
        //                     <FaCalendar className="w-4 h-4 mr-2" />
        //                     <p>date</p>
        //                 </div>
        //                 <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
        //                     <FaClock className="w-4 h-4 mr-2" />
        //                     <p>time</p>
        //                 </div>
        //                 <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
        //                     <FaMapMarkerAlt className="w-4 h-4 mr-2" />
        //                     <p>location</p>
        //                 </div>
        //                 <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
        //                     <FaMoneyBillWave className="w-4 h-4 mr-2" />
        //                     <p className="flex items-center">price</p>
        //                 </div>
        //                 <div className="share-icon">
        //                     <FaShare className="text-gray-400 hover:text-blue-500 cursor-pointer relative z-10 text-2xl" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default FavoritePage;