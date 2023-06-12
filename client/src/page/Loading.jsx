import React from 'react'
import ticket from "../img/movie-ticket-png.png"
function Loading() {
  return (
    <div className='w-full h-screen absolute top-0 bg-yellow-300 flex items-center justify-center '>
        <img src={ticket} alt="" className='w-[200px] animate-spin'/>
    </div>
  )
}

export default Loading