import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../page/Home/home.css";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer className="w-full h-[450px]" style={{ marginTop: "100px", backgroundColor: "rgb(255,201,14)" }}>
      <section id="footer-top">
            <div className="container">
                <div className="row align-items-between">
                    <div className=" col-12 col-lg-4 location">
                        <h4>Ünvan</h4>
                       <p> AF Mall 14-cü mərtəbə, ofis 36. Səməd Vurğun 34, AZ1014, Bakı, Azərbaycan</p>                    </div>
                    <div className="col-12 col-lg-4 icon">
                        <h4>Sosial Şəbəkələr</h4>
                        <a href="#"><FacebookIcon/></a>
                        <a href="#"><InstagramIcon/></a>
                        <a href="#"><TwitterIcon/></a>
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
