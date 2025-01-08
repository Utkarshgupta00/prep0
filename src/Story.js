import React from 'react'
import {Navigation, Pagination, Autoplay} from 'swiper';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';        
import 'swiper/css';
const Story = () => {
 
  return (
    <>

        <div className="hero">
            <div className="hero_img">
            <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={5}
                  slidesPerView={2}
                  navigation
                  pagination={{clickable:true}}
                  autoplay={true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
            >


                  <SwiperSlide className='slide'>
                    
                    <NavLink><img className='hero_img' src="image/RoadMap/story/1.webp" alt="motivational post for sucess"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide'>
                    <NavLink><img className='hero_img' src="image/RoadMap/story/6.webp" alt="motivational post for today"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide'>
                    <NavLink><img className='hero_img' src="image/RoadMap/story/2.webp" alt="motivation for studies"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide'>
                    <NavLink><img className='hero_img' src="image/RoadMap/story/4.webp" alt="daily lyf motivation"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide'>
                    <NavLink><img className='hero_img' src="image/RoadMap/story/5.webp"/></NavLink>
                  </SwiperSlide>

            </Swiper>

            </div>
        </div>

    
    
    </>
  )
}

export default Story