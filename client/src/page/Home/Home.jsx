import React, { useRef, useEffect, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Container, Button } from "@mui/material";
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import { getTickets, nextTicket, prevTicket } from "../../store/ticketSlice";
import FamousEvents from "../../Components/FamousEvents";
import Theatre from "../../Components/Theatre";
import "./home.css";
import Concerts from "../../Components/Concerts";
import Sport from "../../Components/Sport";
import Museum from "../../Components/Museum";
import moment from "moment"
import "../../language/az"
import { Link } from "react-router-dom";
import { GrNext, GrPrevious } from "react-icons/gr"
import Slider from "../Slider";
SwiperCore.use([Autoplay, Navigation, Pagination]);

moment.locale('az');
const Home = () => {
  const { tickets, loading } = useSelector((state) => state.ticketReducer);
  console.log(tickets);
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets(10));
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  const handleNext = () => {
    dispatch(nextTicket());
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const handlePrev = () => {
    dispatch(prevTicket());
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <>
      {loading ?
        "loading"
        : (
          <div className="slide py-10 px-1">

            <Swiper
              loop
              ref={swiperRef}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              className="mySwiper mySwiper-head relative h-[80vh] "
            >
              <div className="back_btn absolute -left-10 top-[40%] z-50">
                <Button variant="contained" className="back-btn relative text-white" style={{ width: "100px", height: "100px", borderRadius: "10px", background: 'rgb(255, 201, 14) ' }} onClick={handlePrev}>
                  <GrPrevious className=" absolute text-2xl text-white right-5" />
                </Button>
              </div>
              {tickets.map((item, index) => (
                <SwiperSlide className="swiperslide relative" key={index}>
                  <Link to={`event/${item._id}`}>
                    <img src={item.imageUrl[0]} alt="" className="object-cover" />
                    <div className="swiper__body absolute bottom-2 left-5">
                      <h1 className="text-xl">{item?.name}</h1>
                      <h1 className="text-gray-500">{moment(item.date).format('llll')}</h1>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
              <div className="next_btn absolute -right-10 top-[40%] z-50">
                <Button variant="contained" className="next-btn relative text-white" style={{ width: "100px", height: "100px", borderRadius: "10px", background: 'rgb(255, 201, 14) ' }} onClick={handleNext}>
                  <GrNext className="left-5 absolute text-2xl text-white" />
                </Button>
              </div>
            </Swiper>
          </div >
        )}
      <Slider />


    </>
  );
};
export default Home;