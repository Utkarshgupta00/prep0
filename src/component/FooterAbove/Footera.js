import React from 'react'
import {Navigation, Pagination, Autoplay} from 'swiper';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';            
import 'swiper/css';
import './Footera.css'
import img1 from '../../Images/footera/footera1.webp'
import img2 from '../../Images/footera/footera2.webp'
import img3 from '../../Images/footera/footera3.webp'



const Footera = () => {
  return (
    <>
    
    <div className="Footera_slide_box">
            <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={5}
                  slidesPerView={1}
                  navigation
                  pagination
                  autoplay={true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
            >
                  <SwiperSlide className='Footera_slide'>
                    <NavLink to=""><img className='Footera_img' src={img1} loading="lazy" alt="prep0 banner image, prep0.com"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='Footera_slide'>
                    <NavLink to=""><img className='Footera_img' src={img2} loading="lazy" alt="prep0 preperation tips, prep0 slides"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='Footera_slide'>
                    <NavLink to=""><img className='Footera_img' src={img3} loading="lazy" alt="prep 0, prep0 template design "/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='Footera_slide'>
                    <NavLink to=""><img className='Footera_img' src={img1} loading="lazy" alt="prep0 template logo design"/></NavLink>
                  </SwiperSlide>

            </Swiper>

    </div>
    
    </>
  )
}

export default Footera