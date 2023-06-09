import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
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



SwiperCore.use([Autoplay, Navigation, Pagination]);

const Home = () => {
  const { tickets, loading } = useSelector((state) => state.ticketReducer);
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
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
    <Container fixed>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <div className="slide">
          {/* <div className="button-container">
            <Button className="prev-btn" variant="contained" style={{width:"100px",height:"100px",borderRadius:"60px"}} onClick={handlePrev}>
              <ArrowBackIosNewIcon />

            </Button>
          </div> */}
  
          <Swiper style={{width:"1000px"}}
            ref={swiperRef}
            autoplay={{
              delay: 2000,
            }}
            navigation
            pagination
            className="mySwiper"
          >
            {tickets.map((item, index) => (
              <SwiperSlide  key={index}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <h2>{item.price}</h2>
              </SwiperSlide>
            ))}
          </Swiper>
  
          {/* <div>
            <Button variant="contained" className="next-btn" style={{width:"100px",height:"100px",borderRadius:"60px"}} onClick={handleNext}>
              <ArrowForwardIosIcon/>
            </Button>
          </div> */}
        


        </div>
      )}
  
         <h1 className="mt-8-first">Populyar Tədbirlər</h1>
      <FamousEvents/>
      <h1 className="mt-8">Konsertlər</h1>
      <Concerts />
      <h1 className="mt-8">Tamaşa</h1>
      <Theatre />
      <h1 className="mt-8">İdman</h1>
      <Sport />
      <h1 className="mt-8">Muzey</h1>
      <Museum />
    </Container>
  );
            }
export default Home