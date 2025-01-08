import React from 'react'
import {Navigation, Pagination, Autoplay} from 'swiper';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';            
import 'swiper/css';
const AutoplaySwi = (props) => {
  return (
    <>

        <div className="hero">
            <div className="hero_img">
            <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={5}
                  slidesPerView={ props.spl ? props.spl : 2}
                  navigation
                  pagination={{clickable:true}}
                  autoplay={ props.auto?props.auto:true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
            >
                  <SwiperSlide className='slide'>
                    <NavLink><img className='hero_img' src={props.img1} alt={props.alt1} loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide'>
                    <NavLink><img className='hero_img' src={props.img2} alt={props.alt2} loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide'>
                    <NavLink><img className='hero_img' src={props.img3} alt={props.alt3} loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide'>
                    <NavLink><img className='hero_img' src={props.img4} alt={props.alt4} loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide'>
                    <NavLink><img className='hero_img' src={props.img5} alt={props.alt5} loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide'>
                    <NavLink><img className='hero_img' src={props.img6} alt={props.alt6} loading="lazy"/></NavLink>
                  </SwiperSlide>

            </Swiper>

            </div>
        </div>
    
    
    
    </>
  )
}

export default AutoplaySwi