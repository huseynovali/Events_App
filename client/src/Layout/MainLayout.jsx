import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

import "../page/Home/home.css";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer className="w-full " style={{ backgroundColor: "rgb(255,201,14)" }}>
        <section className="md:px-20 md:py-10 px-5 py-10" id="footer-top">
          <div className="container">
            <div className="row align-items-between">
              <div className=" col-12 col-lg-4 location">
                <h4>Ünvan</h4>
                <p> AF Mall 14-cü mərtəbə, ofis 36. Səməd Vurğun 34, AZ1014, Bakı, Azərbaycan</p>                    </div>
              <div className="col-12 col-lg-4 icon">
                <h4>Sosial Şəbəkələr</h4>
                <div className="row justify-center gap-x-2" >
                  <div className="col-3 flex items-start">
                    <a href="#"><AiFillFacebook className="text-3xl"/></a>
                  </div>
                  <div className="col-3 flex items-start">
                    <a href="#"><AiOutlineInstagram className="text-3xl"/></a>
                  </div>
                  <div className="col-3 flex items-start">
                    <a href="#"><AiOutlineTwitter className="text-3xl"/></a>
                  </div>
                </div>

              </div>
              <div className="col-12 col-lg-4 freelance">
                <h4>Dəstək xidməti</h4>
                <p>+994 12 431 25 65</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default MainLayout;
