import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Container, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "swiper/swiper.min.css";
import moment from "moment";
import "../page/Home/home.css";
import { getTickets, nextTicket, prevTicket } from "../store/ticketSlice";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const FamousEvents = ({ tickets }) => {
  let turizmEvnets = tickets.filter(item => item.category?._id === "64830b7042235eb5a6d96c40")
  const swiperRef = useRef(null);
  const dispatch = useDispatch();


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
      <div className="button-container hidden md:flex">
        <Button className="prev-btn" onClick={handlePrev}>
          <ArrowBackIosNewIcon className="back-btn" />
          <ArrowBackIosNewIcon className="back-btn" />
          <ArrowBackIosNewIcon className="back-btn" />
        </Button>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={1}
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
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {turizmEvnets.map((item, index) => (
          <SwiperSlide key={index} className={`card rounded-lg `}>
            <Link to={`event/${item._id}`} className="h-full ">
              <img src={item.imageUrl[0]} alt="" className="object-full  !h-[390px] rounded-lg  " />
              <div className="swiper__body absolute bottom-2 left-5 ">
                <h1 className="text-xl">{item?.name}</h1>
                <h1 className="text-gray-500">{moment(item.date).format('llll')}</h1>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:flex">
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