import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination } from 'swiper';

import './ImageSlider.css'; // Import your custom CSS for ImageSlider styles

const ImageSlider = (props) => {
  return (
    <div className="roadmap_container">
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={12}
          autoplay={props.auto}
          slidesPerView={props.spv1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {props.images.map((image, index) => (
            <SwiperSlide key={index} className="swiperstruct_slides">
              <a href={props.rsrc[index]}>
                <img
                  src={image}
                  alt={props.alt[index]}
                  loading="lazy"
                />
              </a>
              <h2>{props.rm[index]}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
