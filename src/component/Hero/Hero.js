import React from 'react'
import {Navigation, Pagination, Autoplay} from 'swiper';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';     
import 'swiper/css';
import './Hero.css';
import ShortCut from '../../UseAnywhere/ShortCut';
import TopTenYoutube from '../../UseAnywhere/TopTenYoutube';


const Hero = () => {
 
  return (
    <>

        <div className="hero hero_new_changes">
            <div className="hero_img">
            <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={5}
                  slidesPerView={1}
                  navigation
                  pagination={{clickable:true}}
                  autoplay={true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
            >

                  <SwiperSlide className='slide hero_slide'>
                    <NavLink to="/"><img className='hero_img' src="image/prep0-banner.png"alt="aktu quantum books pdf download" loading="lazy"/></NavLink>
                  </SwiperSlide>


                  <SwiperSlide className='slide hero_slide'>
                    <NavLink to="/resume-maker-online"><img className='hero_img' src="https://drive.google.com/uc?export=download&id=1R3YuUKbAxC4Dxq0eoAilnyegrIQpBzME" alt="online resume maker"  loading="lazy"/></NavLink>
                  </SwiperSlide>


                  <SwiperSlide className='slide hero_slide'>
                    <NavLink to="/aktu-quantum-books"><img className='hero_img' src="https://drive.google.com/uc?export=download&id=1jDRe8aGIwkC4qBAxfZ-WHHlY_vYr6yEa"alt="aktu quantum books pdf download" loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide hero_slide'>
                    <NavLink to="/handwritten-notes-pdf"><img className='hero_img' src="https://drive.google.com/uc?export=download&id=1pN7GGlYT1r0wER9d7p73utTCu78iK0f-" alt="handwritten notes pdf" loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide hero_slide'>
                    <NavLink to="/previous-year-question-paper-btech-aktu"><img className='hero_img' src="https://drive.google.com/uc?export=download&id=1RO_fOhLR7CvyXMpuI_0Zu2-iILyyYTn-"alt="aktu previous year paper pdf"  loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide hero_slide'>
                    <NavLink to="/new-post"><img className='hero_img' src="https://drive.google.com/uc?export=download&id=1gvOF4rKwPzVWAgrClNPXF6qV17d105Aw" alt="top youtube channels for"  loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide hero_slide'>
                    <NavLink to="basic-interview-questions-and-answers"><img className='hero_img' src="https://drive.google.com/uc?export=download&id=1nMTGL067FkPvQ4GiypPebXovAT2b6Yyw" alt="basic interview questions and answers"  loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide hero_slide'>
                    <NavLink to="/basic-interview-questions-and-answers"><img className='hero_img' src="https://drive.google.com/uc?export=download&id=1eSo2WDvqZ9Yl4f_ELtRG8LV4IOt2AChh" alt="interview questions with answers"  loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide hero_slide'>
                    <NavLink to="/basic-interview-questions-and-answers"><img className='hero_img' src="image/Interview/cheat_sheets/git-commands.webp" alt="top common interview questions hr asked"  loading="lazy"/></NavLink>
                  </SwiperSlide>

                  <SwiperSlide className='slide hero_slide'>
                    <NavLink to="/Projects"><img className='hero_img' src="https://drive.google.com/uc?export=download&id=1I73u6bvUu8KaGWdAZUe_H4SfKxFl_DqE" alt="project reports pdf download"  loading="lazy"/></NavLink>
                  </SwiperSlide>


            </Swiper>

            </div>
        </div>



      <TopTenYoutube/>


        <div className='hero_banner'>

          <div className="hero_banner_left">
            
              {/* <div className="static_text"><h1><span>PREP</span>0.com</h1></div> */}

              <div className='dynamic_text'>
                <ul>
                    <li><span><k>CH</k>EAT SHEET</span></li>
                    <li><span>ROAD<k>MA</k>PS</span></li>
                    <li><span>HA<k>ND</k>NOTES</span></li>
                    <li><span>RES<k>UME</k></span></li>
                    <li><span>P<k>AP</k>ERS</span></li>
                    <li><span><k>PRO</k>JECTS</span></li>

                </ul>

              </div>


          </div>


        </div>


       <ShortCut/>

    




    
    </>
  )
}

export default Hero