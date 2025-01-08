import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import './Mechanical.css';
import {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';


const Mechanical = (props) => {
return (
    
    <>
            

            <div className=""> 
            <div className='new_heading'>{props.year}</div>
            <div className="spo_container">
            
            <Swiper
            spaceBetween={10}
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{clickable:true}}
                autoplay={props.ans}
                slidesPerView={props.spv1 ? props.spv1 : 4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                
                <SwiperSlide className='mech_slide'>
                    <a href={(props.src1)} ><img className='mech_img' src={props.imk} alt={props.alt1} loading="lazy"/></a>
                    <h2>{props.subject1}</h2>
                </SwiperSlide>
                
                <SwiperSlide className='mech_slide'>
                    <a href = {(props.src2)}><img className='mech_img' src={props.imk} alt={props.alt2} loading="lazy"/></a>                    
                    <h2>{props.subject2}</h2>
                </SwiperSlide>

                <SwiperSlide className='mech_slide'>
                    
                        <a href = {(props.src3)}><img className='mech_img' src={props.imk} alt={props.alt3} loading="lazy"/></a>
                    
                    <h2>{props.subject3}</h2>
                </SwiperSlide>

                <SwiperSlide className='mech_slide'>
                    <a href = {(props.src4)}><img className='mech_img' src={props.imk} alt={props.alt4} loading="lazy"/></a> 
                    <h2>{props.subject4}</h2>
                </SwiperSlide>

                <SwiperSlide className='mech_slide'>
                    <a href = {(props.src5)}><img className='mech_img' src={props.imk} alt={props.alt5} loading="lazy"/></a> 
                    <h2>{props.subject5}</h2>
                </SwiperSlide>

                <SwiperSlide className='mech_slide'>
                    <a href = {(props.src6)}><img className='mech_img' src={props.imk} alt={props.alt6} loading="lazy"/></a> 
                    <h2>{props.subject6}</h2>
                </SwiperSlide>

                <SwiperSlide className='mech_slide'>
                    <a href = {(props.src7)}><img className='mech_img' src={props.imk} alt={props.alt7} loading="lazy"/></a> 
                    <h2>{props.subject7}</h2>
                </SwiperSlide>

                <SwiperSlide className='mech_slide'>
                    <a href = {(props.src8)}><img className='mech_img' src={props.imk} alt={props.alt8} loading="lazy"/></a> 
                    <h2>{props.subject8}</h2>
                </SwiperSlide>

                <SwiperSlide className='mech_slide'>
                    <a href = {(props.src9)}><img className='mech_img' src={props.imk} alt={props.alt9} loading="lazy"/></a> 
                    <h2>{props.subject9}</h2>
                </SwiperSlide>

                <SwiperSlide className='mech_slide'>
                    <a href = {(props.src10)}><img className='mech_img' src={props.imk} alt={props.alt10} loading="lazy"/></a> 
                    <h2>{props.subject10}</h2>
                </SwiperSlide>

            </Swiper>
            </div>
        </div>
    
    
    </>
)
}

export default Mechanical