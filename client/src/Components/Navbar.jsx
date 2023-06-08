import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/*****************  Nav Brand********************/}
                <div className="nav__brand">
                    <Link to="/">
                        <div className="text-baby_Blue font-bold text-lg">Logoa</div>
                    </Link>
                </div>
                <div className="nav__right flex justify-between items-center">
                         {/*****************  Nav Links********************/}
                <div className="nav__links hidden  sm:block">
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white">Ana Sayfa</a></li>
                        <li><a href="#" className="text-white">Hakkımızda</a></li>
                        <li><a href="#" className="text-white">Hizmetler</a></li>
                        <li><a href="#" className="text-white">İletişim</a></li>
                    </ul>
                </div> 
                <div className="nav__details">
                <div className="nav__favorite">
                    F
                </div>
              </div>
              <div className="nav__profile">
                <h2>p</h2>
              </div> 
                </div>
           
             



            </div>
        </nav>
    )
}


export default Navbar