import React, { useEffect } from 'react'
import FamousEvents from '../Components/FamousEvents'
import Concerts from '../Components/Concerts'
import Theatre from '../Components/Theatre'
import Sport from '../Components/Sport'
import Museum from '../Components/Museum'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getTickets } from '../store/ticketSlice'

function Slider() {
    const { tickets, loading } = useSelector((state) => state.ticketReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets({ limit: 100, category: "" }));
    }, []);


    return (

        <div>

            <div className="concerts">
                <h1 className="text-3xl font-bold ml-2">Konsertlər</h1>
                <Concerts tickets={tickets} />
            </div>

            <div className="theatre">
                <h1 className="text-3xl font-bold ml-2">Tamaşa</h1>
                <Theatre tickets={tickets} />
            </div>
            <div className="sport">
                <h1 className="text-3xl font-bold ml-2">İdman</h1>
                <Sport tickets={tickets} />
            </div>


            <div className="museum">
                <h1 className="text-3xl font-bold ml-2">Muzey</h1>
                <Museum tickets={tickets} />
            </div>

            <div className="famous  my-20">
                <h1 className="text-3xl font-bold ml-2">Turizm</h1>
                <FamousEvents tickets={tickets} />
            </div>

        </div>
    )
}

export default Slider