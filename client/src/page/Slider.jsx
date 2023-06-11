import React from 'react'
import FamousEvents from '../Components/FamousEvents'
import Concerts from '../Components/Concerts'
import Theatre from '../Components/Theatre'
import Sport from '../Components/Sport'
import Museum from '../Components/Museum'

function Slider() {
    return (
        <div>
            <div className="famous  my-20">
                <h1 className="text-3xl font-bold ml-2">Populyar Tədbirlər</h1>
                <FamousEvents />
            </div>



            <div className="concerts">
                <h1 className="text-3xl font-bold ml-2">Konsertlər</h1>
                <Concerts />
            </div>


            <div className="theatre">
                <h1 className="text-3xl font-bold ml-2">Tamaşa</h1>
                <Theatre />
            </div>


            <div className="sport">
                <h1 className="text-3xl font-bold ml-2">İdman</h1>
                <Sport />
            </div>


            <div className="museum">
                <h1 className="text-3xl font-bold ml-2">Muzey</h1>
                <Museum />
            </div>


        </div>
    )
}

export default Slider