import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {NavLink, Link} from 'react-router-dom';
import './Branch.css';

const Branch = (props) => {
    return (
        <>

        <div className="branch_banner">
            <img className='Branch_img' src={props.src}/>
        </div>

        <div className="branch_heading">
          <h1>Select Your Branch</h1>
        </div>

        <div className="branch_">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
    >
          <SwiperSlide className='slide1'><NavLink className="nav_branch" to={props.to1}>MECHANiCAL</NavLink></SwiperSlide>
          <SwiperSlide className='slide1'><NavLink className="nav_branch" to={props.to2}>ELECTRICAL</NavLink></SwiperSlide>
          <SwiperSlide className='slide1'><NavLink className="nav_branch" to={props.to3}>INFORMATION</NavLink></SwiperSlide>
          <SwiperSlide className='slide1'><NavLink className="nav_branch" to={props.to4}>COMPUTER</NavLink></SwiperSlide>
          <SwiperSlide className='slide1'><NavLink className="nav_branch" to={props.to5}>CIVIL</NavLink></SwiperSlide>
          <SwiperSlide className='slide1'><NavLink className="nav_branch" to={props.to6}>ELECTRONICS</NavLink></SwiperSlide>
          <SwiperSlide className='slide0'><NavLink className="nav_branch" to=''></NavLink></SwiperSlide>
        </Swiper> 

        </div>   
        

</>
    )
}

export default Branch