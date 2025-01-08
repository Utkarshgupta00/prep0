import React from 'react'
import {Navigation, Pagination, Autoplay} from 'swiper';
import { NavLink, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';            
import 'swiper/css';
import './style.css';

const Interview_Swiper = (props) => {
  return (
    <>
        <div className="interview_main_box">
            
            <div className="interview_box">
            <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={15}
                  slidesPerView={props.spl ? props.spl : 4}
                  navigation
                  pagination={{clickable:true}}
                  autoplay={true}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
            >
              <div className="interview_slider_box">


                  <SwiperSlide className='interview_slide'>

                    {
                        props.link1 ? <a href={props.link1}><img className='interview_img' src={props.src1}  loading="lazy" alt={props.alt1}/></a> : <NavLink to={props.dest1}><img className='interview_img' src={props.src1} alt={props.alt1}/></NavLink>
                    } 
                    {
                      props.title ? <h3 className="interview_slide_title">{props.title}</h3> : ""
                    }

                    
                  </SwiperSlide>





                  <SwiperSlide className='interview_slide'>
                  {
                        props.link2 ? <a href={props.link2}><img className='interview_img'  src={props.src2} alt={props.alt2}  loading="lazy"/></a> : <NavLink to={props.dest2}><img className='interview_img' src={props.src2} alt={props.alt2}/></NavLink>
                    } 

{
                      props.title ? <h3 className="interview_slide_title">{props.title2}</h3> : ""
                    }
                  </SwiperSlide>







                  <SwiperSlide className='interview_slide'>
                  {
                        props.link3 ? <a href={props.link3}><img className='interview_img'  loading="lazy" src={props.src3} alt={props.alt3}/></a> : <NavLink to={props.dest3}><img className='interview_img' src={props.src3} alt={props.alt3}/></NavLink>
                } 

{
                      props.title ? <h3 className="interview_slide_title">{props.title3}</h3> : ""
                    }
                  </SwiperSlide>







                  <SwiperSlide className='interview_slide'>
                  {
                        props.link4 ? <a href={props.link4}><img className='interview_img'  loading="lazy" src={props.src4} alt={props.alt4}/></a> : <NavLink to={props.dest4}><img className='interview_img' src={props.src4} alt={props.alt4}/></NavLink>
                    } 


{
                      props.title ? <h3 className="interview_slide_title">{props.title4}</h3> : ""
                    }
                  </SwiperSlide>






                  <SwiperSlide className='interview_slide'>
                  {
                        props.link5 ? <a href={props.link5}><img className='interview_img'  loading="lazy" src={props.src5} alt={props.alt5}/></a> : <NavLink to={props.dest5}><img className='interview_img' src={props.src5} alt={props.alt5}/></NavLink>
                    } 


{
                      props.title ? <h3 className="interview_slide_title">{props.title5}</h3> : ""
                    }
                  </SwiperSlide>




                  
                  <SwiperSlide className='interview_slide'>
                  {
                        props.link6 ? <a href={props.link6}><img className='interview_img'  loading="lazy" src={props.src6} alt={props.alt6}/></a> : <NavLink to={props.dest6}><img className='interview_img' src={props.src6} alt={props.alt6}/></NavLink>
                    } 

{
                      props.title ? <h3 className="interview_slide_title">{props.title6}</h3> : ""
                    }
                  </SwiperSlide>


            
              </div>


            </Swiper>

            </div>
        </div>  
    </>
  )
}

export default Interview_Swiper