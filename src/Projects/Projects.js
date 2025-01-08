import React from 'react'

import {Navigation, Pagination, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Project.css'


import { NavLink } from 'react-router-dom';

import ProjectBranch from './ProjectBranch';
import Pdetails from './Pdetails';

const Project = () => {
  return (

    <>        

        <h1 className="projects_heading">
          Projects
        </h1>

        <div className="projects_banner">
            <NavLink to="/Projects"><img className='projects_banner_img' src="image/ProjectImg/project.webp"/></NavLink>
        </div>






        <div className="hero">
                <div className="hero_img">
                <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={5}
                      slidesPerView={3}
                      navigation
                      pagination={{clickable:true}}
                      autoplay={true}
                      onSlideChange={() => console.log('slide change')}
                      
                      onSwiper={(swiper) => console.log(swiper)}
                >


                      <SwiperSlide className='slide'>
                        <NavLink to="/projects/mechanical-engineering-project-report-pdf"><img className='hero_img' src="image/ProjectImg/Mechanical.webp"/></NavLink>
                      </SwiperSlide>

                      <SwiperSlide className='slide'>
                        <NavLink to="/projects/computer-science-engineering-project-report-pdf"><img className='hero_img' src="image/ProjectImg/Cse.webp"/></NavLink>
                      </SwiperSlide>

                      <SwiperSlide className='slide'>
                        <NavLink to="/projects/computer-science-engineering-project-report-pdf"><img className='hero_img' src="image/ProjectImg/Cse.webp"/></NavLink>
                      </SwiperSlide>

                      <SwiperSlide className='slide'>
                        <NavLink to="/projects/electrical-engineering-project-report-pdf"><img className='hero_img' src="image/ProjectImg/Electrical.webp"/></NavLink>
                      </SwiperSlide>

                      <SwiperSlide className='slide'>
                        <NavLink to="/projects/chemical-engineering-project-report-pdf"><img className='hero_img' src="image/ProjectImg/Chemical.webp"/></NavLink>
                      </SwiperSlide>


{/* 
                      <SwiperSlide className='slide'></SwiperSlide>
                      <SwiperSlide className='slide'></SwiperSlide>
                      <SwiperSlide className='slide'></SwiperSlide>
                      <SwiperSlide className='slide'></SwiperSlide>
                      <SwiperSlide className='slide'></SwiperSlide>
*/}               
                
                </Swiper>
    
                </div>
                
            </div>

          <ProjectBranch/>
        
    
    </>    
    

  )
}

export default Project