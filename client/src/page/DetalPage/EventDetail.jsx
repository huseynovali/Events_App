import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import noimg from "../../img/no-photo.jpg";
import { MdDateRange, MdOutlineAccessTime } from 'react-icons/md';
import axios from 'axios';
import "./EventDetail.css";
import { TbCurrencyManat } from "react-icons/tb";
import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MyComponent from "./Map"

// Import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Loading from '../Loading';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function EventDetail() {
   const [loading,setLoading] = useState(true)
  const [data, setData] = useState({});
  const [sameData, setSameData] = useState([])
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:5001/events/${id}`)
      .then(res => 
        {
        setData(res.data)
      setLoading(false)
      }
      );
  }, [dispatch, id]);

  useEffect(() => {
    const url = data?.category?._id && `http://localhost:5001/events/category/${data?.category?._id}?limit=${1000}` 
    axios.get(url)
      .then(res => {
        setSameData(res.data)
        
      })
      .catch(err=>console.log(err))
  }, [data]);


  return (
    <>
    {
      loading ? <Loading/> : 
      <div className='event-detal'>
      <div className="card_img p-5">
        <div className="img_div"></div>
        {data.imageUrl && data.imageUrl.length > 0 ? (
          <img
            src={data.imageUrl[0]}
            alt=""
            className="rounded-lg h-[550px] w-full  shadow-lg"
            style={{ backgroundAttachment: 'fixed' }}
          />
        ) : (
          <img src={noimg} alt="" className="rounded-lg h-[550px] w-full" />
        )}
      </div>
      <div className="event_body py-5 w-full">
        <ul className="flex justify-between w-full px-5">
          <li className="flex w-[30%] items-center justify-center  py-5 px-3 rounded-2xl">
            <span className="text-xl font-semibold flex items-center">{data.minprice}<TbCurrencyManat />-dən başlayan qiymətlər</span>
          </li>
          <li className="flex w-[30%]  items-center justify-center  py-5 px-3 rounded-2xl">
            <MdDateRange className="text-4xl mx-5" />
            <span className="text-xl font-semibold"> {moment(data.date).format("L")}</span>
          </li>
          <li className="flex w-[30%]  items-center justify-center  py-5 px-3 rounded-2xl">
            <MdOutlineAccessTime className="text-4xl mx-5 " />
            <span className="text-xl font-semibold">{moment(data.date).format("LT")}</span>
          </li>
        </ul>
        <div className="event_description px-5 py-20">
          <div className="flex justify-between">
            <div className="w-[55%]">
              <div className="left ">
                <div className="head p-5 rounded-lg text-xl font-medium">Tədbir haqqında</div>
                <div className="event_info p-5 my-3 shadow-md h-[300px] rounded-lg" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
                  <p className='text-xl font-[400]'>
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[40%]">
              <div className="right">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  loop
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000 }}
                  className='w-full h-full'
                >
                  {data.imageUrl &&
                    data.imageUrl.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img src={item} alt="" className='w-full !h-full rounded-lg' />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="location p-5">
          <div className="head p-5 rounded-lg text-xl font-medium  w-[55%]">Məkan</div>

          <div className="div flex ">
            <div className="event_location w-[55%] h-[400px]  rounded-lg my-5 ">
              <MyComponent lat={Number(data.location?.lat)} lng={Number(data.location?.lng)} />
            </div>
            <div className="location_info  h-[400px] p-5 w-[40%] my-5 mx-5">
              <h1 className='text-3xl'>{data.location?.name}</h1>
              <hr className='my-3' />
            </div>
          </div>
        </div>

        <div className="SomeEvents py-20 px-5">
          <div className="head p-5 my-10 rounded-lg text-xl font-medium  w-[55%]">Oxsar Tedbirler</div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            navigation
            loop
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            className='w-full h-full'
          >
            {sameData?.map((item, index) => (

              <SwiperSlide key={index}>
                <Link to={`/event/${item._id}`}>
                  <img src={item.imageUrl[0]} alt="" className='w-full !h-[300px] rounded-lg !shadow-lg' />  </Link>
              </SwiperSlide>

            ))}
          </Swiper>

        </div>

      </div>
    </div>
    }
   </>
  );
}

export default EventDetail;
