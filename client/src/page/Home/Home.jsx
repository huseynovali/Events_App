import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Container, Button } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import { getTickets, nextTicket, prevTicket } from "../../store/ticketSlice";
import FamousEvents from "../../Components/FamousEvents";
import Tourism from "../../Components/Tourism";
import Theatre from "../../Components/Theatre";
import "./home.css"
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Home = () => {
  const { tickets, loading } = useSelector((state) => state.ticketReducer);
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, [tickets]);

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
        <div className="text-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="slide text-red-500">
          <div className="button-container">
            <Button className="prev-btn" variant="contained" onClick={handlePrev}>
              <ArrowBackIosNew />
            </Button>
          </div>
          <Swiper
            ref={swiperRef}
            autoplay={{
              delay: 2000,
            }}
            navigation
            pagination
            className="w-full"
          >
            {tickets.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.image} alt={item.title} className="w-full" />
                <h3 className="text-black text-base mt-4">{item.title}</h3>
                <h2 className="text-red-500 text-lg mt-2">{item.price}</h2>
              </SwiperSlide>
            ))}
          </Swiper>

          <div>
            <Button variant="contained" onClick={handleNext}>
              <ArrowForwardIos />
            </Button>
          </div>
        </div>
      )}

      <h1 className="mt-8">Populyar Tədbirlər</h1>
      <FamousEvents />
      <h1 className="mt-8">Turizm</h1>
      <Tourism />
      <h1 className="mt-8">Teatr</h1>
      <Theatre />
    </Container>
  );
}

export default Home;