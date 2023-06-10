import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Container, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "swiper/swiper.min.css";

import "../page/Home/home.css";
import { getTickets, nextTicket, prevTicket } from "../store/ticketSlice";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const FamousEvents = () => {
  const { tickets } = useSelector((state) => state.ticketReducer);
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
    <div className="famous-events">
      <div className="button-container">
        <Button className="prev-btn" onClick={handlePrev}>
          <ArrowBackIosNewIcon className="back-btn" />
          <ArrowBackIosNewIcon className="back-btn" />

          <ArrowBackIosNewIcon className="back-btn" />
        </Button>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={100}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        style={{ padding: '30px 0' }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 2,
          },
        }}
      >
        {tickets.map((item, index) => (
          <SwiperSlide key={index} className={`card`}>
            <div className={`card-container`} key={index} style={{ backgroundImage: `url(${item.image})` }}>
              <div className='card-description'>
                <h1>{item.title}</h1>
                <p> {item.authors}</p>
                <h3>{item.price}$</h3>
              </div>

              <Link className='check-out' to={`/${item.id}`}>{item.price}$ </Link>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <Button className="next-btn" onClick={handleNext}>
          <ArrowForwardIosIcon className="forward-btn" />
          <ArrowForwardIosIcon className="forward-btn" />

          <ArrowForwardIosIcon className="forward-btn" />

        </Button>
      </div>
    </div>
  );
};

export default FamousEvents;